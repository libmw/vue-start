pipeline {
    agent {
        docker {
            image 'node:alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'sh ./build.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh 'sh ./kill.sh' 
            }
        }
    }
}