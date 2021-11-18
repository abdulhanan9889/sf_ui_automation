Feature: Episode Page

        Scenario: user generates data for authenticated flows
            Given user generates data for authenticated epsiode flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | seriesStartDayFromToday | eventEndDayFromToday | seriesEndDayFromToday | numberOfSpeakers | firstName | lastName | designation | company |
                  | 1              | 2                         | 1                      | 1                       | 3                    | 4                     | 2                | dummy     | speaker  | QA          | emumba  |
        
        @episodePage
        Scenario Outline: Verify user can play the authenticated episode
            Given an authenticated is already logged in
             When an authenticated user goes to the series
             When an authenticated user goes to the episode
             Then user can play and pause the video

        @episodePage
        Scenario Outline: Verify user can play two back to back authenticated episodes
            Given an authenticated is already logged in
             When an authenticated user goes to the series
             When an authenticated user goes to the episode
             Then user can play and pause the video
             Then authenticated user clicks on second episode and can play the authorized episode


        @episodePage
        Scenario Outline: Verify user can interact with the video player controls of authenticated episode
            Given an authenticated is already logged in
             When an authenticated user goes to the series
             When an authenticated user goes to the episode
             Then user can play and pause the video
             Then user can forward and reverse the video
             Then user can maximize and minimize the video player
             Then authenticated user clicks on second episode and can play the authorized episode

        @episodePage
        Scenario Outline: user verifies the authenticated content details
            Given an authenticated is already logged in
             When an authenticated user goes to the series
             When an authenticated user goes to the episode
             Then user is able to verify authenticated episode details
