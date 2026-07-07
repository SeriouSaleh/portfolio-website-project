pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                bat '''
                ssh anisa@192.168.111.3 " &&
                cd ~/portfolio-website-project-new &&
                git pull &&

                cd frontend &&
                npm install &&
                npm run build &&

                cd .. &&
                docker compose up -d --build
                "
                '''
            }
        }

    }
}
