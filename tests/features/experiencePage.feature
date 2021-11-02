Feature: Experience Page
             
        # Scenario: user generates data for authenticated flows
        #     Given: user generates data for authenticated flows
        #           | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
        #           | 2              | 5                         | 0                      | 7              | 3                    | 22           |

        @experiencePage
        Scenario: User clicks on Explore more button
            Given user navigates to the experience page for Salesforce+ page
             When user clicks on Explore More
             Then user is navigated to Best of DF series
        
        @experiencePage
        Scenario: User clicks on Play button for a series from Dreamforce by Role
            Given user navigates to the experiencePage for Salesforce+ page
             When user clicks on the play button for series in Role section
             Then user should be navigated to Episode1 of the series in Role section
        
        @experiencePage
        Scenario: User clicks on Arrow button for a series from Dreamforce by Role
            Given user navigates to the experiencePage for Salesforce+
             When user clicks on the arrow button for series in Role section
             Then user should be navigated to details page of the series
        
        @experiencePage
        Scenario: User clicks on Play button for a series from Dreamforce by Topic
            Given user navigates to the experience Page for Salesforce+
             When user clicks on the play button for series in Topic section
             Then user should be navigated to Episode1 of the series in topic section
        
        @experiencePage
        Scenario: User clicks on Arrow button for a series from Dreamforce by Topic
            Given user opens the experiencePage for Salesforce+
             When user clicks on the arrow button for series in Topic section
             Then user should be navigated to details page of the series
       
        @experiencePage
        Scenario: User can click on View All sponsors
            Given user is on the experience page for Salesforce+
             When user clicks on the View All Sponsors button
             Then user should be navigated to the Sponsors page