pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                bat 'ssh anisa@192.168.111.3 "~/deploy.sh"'
            }
        }
    }
}
