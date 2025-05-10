import { useState } from 'react';
import { Loader2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      console.error('API error:', err);
      setSummary('❌ Failed to fetch summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-2 flex items-center justify-center gap-3">
          <FileText className="w-10 h-10 text-blue-500" />
          Document Summarizer
        </h1>
        <p className="text-slate-600 text-sm">Summarize long text into short key insights</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <textarea
          className="w-full h-40 p-4 border border-slate-300 rounded-xl shadow-sm resize-none focus:outline-blue-400"
          placeholder="Paste your paragraph here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleSummarize}
          disabled={!text || loading}
          className={`mt-4 w-full py-3 text-white font-medium rounded-xl shadow-lg transition-all ${
            loading || !text
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? (
            <span className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              Summarizing...
            </span>
          ) : (
            'Summarize'
          )}
        </button>

        {summary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Summary:</h3>
            <p className="text-slate-600 whitespace-pre-line">{summary}</p>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}

export default App;
