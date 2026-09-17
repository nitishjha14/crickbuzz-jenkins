pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat '''
                set PLAYWRIGHT_BROWSERS_PATH=0
                npx playwright install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                set PLAYWRIGHT_BROWSERS_PATH=0
                npx playwright test tests/scorecard.spec.js
                '''
            }
        }
    }
}