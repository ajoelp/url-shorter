pipeline {
    agent any
    options {
        timestamps()
    }
    stages {
        stage('Build') {
            steps {
                sh "docker build -t ajoelpod/url-shorter:${env.BRANCH_NAME} ."
            }
        }
        stage('Publish') {
          when {
            branch 'master'
          }
          steps {
              sh "docker tag ajoelpod/url-shorter:${env.BRANCH_NAME} ajoelpod/url-shorter:latest"
              sh "docker push ajoelpod/url-shorter:latest"
              sh "docker rmi ajoelpod/url-shorter:${env.BRANCH_NAME}"
          }
        }
    }
}