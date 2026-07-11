pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                bat 'ssh seriousaleh:82.22.175.94 "/opt/app/portfolio/scripts/deploy.sh"'
            }
        }
    }
}
