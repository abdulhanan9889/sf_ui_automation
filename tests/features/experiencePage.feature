
Feature: Experience Page
             
        Scenario: user generates data for authenticated flows
            Given: user generates data for authenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
                  | 2              | 5                         | 0                      | 7              | 3                    | 22           |


        Scenario: User clicks on Explore more button
            Given user is on the experience page for Salesforce+
             When user clicks on Explore More
             Then user is navigated to Best of DF series
        
        Scenario: User clicks on Play button for a series from Dreamforce by Role
            Given user is on the experience page for Salesforce+
             When user clicks on the play button for series in Role section
             Then user should be navigated to Episode1 of the series in Role section

        Scenario: User clicks on Arrow button for a series from Dreamforce by Role
            Given user is on the experience page for Salesforce+
             When user clicks on the arrow button for series in Role section
             Then user should be navigated to details page of the series
        
        Scenario: User clicks on Play button for a series from Dreamforce by Topic
            Given user is on the experience page for Salesforce+
             When user clicks on the play button for series in Topic section
             Then user should be navigated to Episode1 of the series in topic section
        
        Scenario: User clicks on Arrow button for a series from Dreamforce by Topic
            Given user is on the experience page for Salesforce+
             When user clicks on the arrow button for series in Topic section
             Then user should be navigated to details page of the series
        
        Scenario: User can click on View All sponsors
            Given user is on the experience page for Salesforce+
             When user clicks on the View All Sponsors button
             Then user should be navigated to the Sponsors page