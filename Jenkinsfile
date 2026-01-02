pipeline {
  agent any

  stages {

    stage('Build Backend Image') {
      steps {
        sh 'docker build -t khaled/mern-backend ./backend'
      }
    }

    stage('Build Frontend Image') {
      steps {
        sh 'docker build -t khaled/mern-frontend ./frontend'
      }
    }

    stage('Push Images to DockerHub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh '''
          echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
          docker push khaled/mern-backend
          docker push khaled/mern-frontend
          '''
        }
      }
    }

  }
}
