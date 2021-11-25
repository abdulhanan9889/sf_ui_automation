def runBroadcastPageFlow(){
    if (isUnix()) {
        sh "npm run broadcastPageFlowMac"
    }
    else {
        sh "npm run broadcastPageFlow"
    }
}
def runAuthenticatedEpisodePageFlow(){
    if (isUnix()) {
        sh "npm run authenticatedEpisodeFlowMac"
    }
    else {
        sh "npm run authenticatedEpisodeFlow"
    }
}
def runOriginalSeriesAndEpisodePageFlow(){
    if (isUnix()) {
        sh "npm run originalSeriesAndEpisodeFlowMac"
    }
    else {
        sh "npm run originalSeriesAndEpisodeFlow"
    }
}

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
                 stage('Run Broadcast Page Flow'){
                      steps {
                          runBroadcastPageFlow()
                      }
                 }
                  
                stage('Run Authenticated Episode Page Flow'){
                      steps {
                         runAuthenticatedEpisodePageFlow()
                      }
                 }
                
                stage('Run Original Series & Episode Flow'){
                    steps{
                        runOriginalSeriesAndEpisodePageFlow()
                    }
                }

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