import { useState } from 'react';

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
      setSummary('Failed to fetch summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>Document Summarizer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your paragraph here..."
        style={{ width: '100%', height: '150px', padding: '1rem', marginBottom: '1rem' }}
      />
      <button onClick={handleSummarize} disabled={!text || loading}>
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      {summary && (
        <div style={{ marginTop: '2rem', background: '#f4f4f4', padding: '1rem' }}>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
