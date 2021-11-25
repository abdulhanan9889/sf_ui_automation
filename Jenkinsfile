pipeline 
{
    agent any 
    stages {
        stage ('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Parallel Execution of Features'){
            parallel{
                stage('Run Homepage Flow'){
                    steps{
                        sh "npm run homePageFlow"
                    }
                }

                stage('Run Experience Page Flow'){
                    steps{
                        sh "npm run experiencePageFlow"
                    }
                }
            }
        }
    }
}


}