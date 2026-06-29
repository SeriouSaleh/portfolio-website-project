pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                ssh anisa@192.168.111.3 "
                    cd /home/anisa/portfolio-website-project/ &&
                    git pull &&
                    docker compose up -d --build
                "
                '''
            }
        }

    }
}
