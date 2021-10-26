
Feature: Unauthenticated Flow
              As an unauthenticated user
         User would like to browse through available series
              And is able to play selected episodes
     
        Scenario: user generates data for unauthenticated flows
            Given: user generates data for unauthenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | seriesStartDayFromToday | seriesEndDayFromToday |
                  | 2              | 5                         | 1                       | 4                     |


        Scenario Outline: unthenticated user plays the selected episode
            Given user is on salesforce plus platform
             When user navigates to episodes page and clicks on a particular episode
             Then user is able to play the episode
        
       
        Scenario Outline: unthenticated user plays two back to back episodes
            Given user is on salesforce plus platform
             When user navigates to episodes page and clicks on the first episode
             Then user is able to play the first episode
             Then user clicks on the second episode
             Then user is able to play the second episode
