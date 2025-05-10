pipeline {
  agent any

  tools {
    nodejs 'node18' // ✅ Make sure this matches the Jenkins NodeJS tool name exactly
  }

  environment {
    FRONTEND_DIR = 'frontend/vite-project'
    BACKEND_DIR = 'backend'
  }

  stages {
    stage('Install Frontend Deps') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm run build'
        }
      }
    }

    stage('Setup Python') {
      steps {
        dir("${BACKEND_DIR}") {
          sh 'python3 -m venv venv'
          sh './venv/bin/pip install --upgrade pip'
          sh './venv/bin/pip install -r requirements.txt || echo "No requirements.txt"'
        }
      }
    }

    stage('Done') {
      steps {
        echo 'CI/CD pipeline complete!'
      }
    }
  }
}
