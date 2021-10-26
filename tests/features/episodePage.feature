
Feature: Episode Page

        Scenario: user generates data for authenticated flows
            Given: user generates data for authenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
                  | 2              | 5                         | 0                      | 7              | 3                    | 22           |

        Scenario: user generates data for unauthenticated flows
            Given: user generates data for unauthenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | seriesStartDayFromToday | seriesEndDayFromToday |
                  | 2              | 5                         | 1                       | 4                     |


        Scenario Outline: Verify episode details are present in the episode details modal
            Given guest user loads salesforce plus platform
             When user navigates to episodes page and clicks on a particular episode
             Then user is able to verify episode number: <episodeNumber>
             Then user is able to verify series title: <seriesTitle>
             Then user is able to verify episode title: <episodeTitle>
             Then user is able to verify speaker one name and card title: <speakerOneDetails>
             Then user is able to verify speaker two name and card title: <speakerTwoDetails>
        Examples:
                  | episodeNumber | seriesTitle              | episodeTitle                                              | speakerOneDetails                                   | speakerTwoDetails                                    |
                  | "EPISODE 1"   | "LEADING THROUGH CHANGE" | "How a Coffee Shop Continues Serving Customers from Home" | "Ben Wright & Co-Founders, Bitty and Beau's Coffee" | "Bill Patterson & EVP, CRM Applications, Salesforce" |

 
        Scenario Outline: Verify user can interact with the video player controls
            Given guest user loads salesforce plus platform
             When user navigates to episodes page and clicks on a particular episode
             Then user can play and pause the video
             Then user can forward and reverse the video
             Then user can maximize and minimize the video player
             Then user can mute and unmute the video


        Scenario Outline: Verify user can play the authenticated episode
            Given guest user loads salesforce plus platform
             When guest user access authorized content and logs in through trailblazer id
             When guest user fills out the sign up forms
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then authenticated user can play the authorized episode
         

        Scenario Outline: Verify user can play two back to back authenticated episodes
            Given guest user loads salesforce plus platform
             When guest user access authorized content and logs in through trailblazer id
             When guest user fills out the sign up forms
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then authenticated user can play the first authorized episode
             Then authenticated user clicks on second episode and can play the authorized episode
        

       
        Scenario Outline: Verify already signed up user can play authenticated content
            Given guest user loads salesforce plus platform
             When guest user access authorized content and logs in through trailblazer id: <email>
             Then authenticated user can play the authorized episode
        Examples:
                  | email                                    |
                  | newdummyuser31isavailable@mailinator.com |


        Scenario Outline: Verify user can interact with the video player controls of authenticated episode
            Given guest user loads salesforce plus platform
             When guest user access authorized content and logs in through trailblazer id
             When guest user fills out the sign up forms
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then authenticated user can play the authorized episode
             Then user can forward and reverse the video
             Then user can maximize and minimize the video player
             Then authenticated user clicks on second episode and can play the authorized episode
        


        Scenario Outline: user verifies the authenticated content details
            Given guest user loads salesforce plus platform
             When guest user access authorized content and logs in through trailblazer id
             When guest user fills out the sign up forms
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then user is able to verify episode number: <episodeNumber>
             Then user is able to verify series title: <seriesTitle>
             Then user is able to verify episode title: <episodeTitle>
             Then user is able to verify speaker one name and card title: <speakerOneDetails>
             Then user is able to verify speaker two name and card title: <speakerTwoDetails>
             Then authenticated user clicks on second episode and can play the authorized episode
        Examples:
                  | episodeNumber | seriesTitle | episodeTitle                                                | speakerOneDetails                                    | speakerTwoDetails                                    |
                  | "EPISODE 2"   | "SALES"     | "Modernize Selling with the Roadmap for Today's Sales Team" | "MaryAnn Patel & VP, Product Management, Salesforce" | "Kylie Fuentes & VP, Product Management, Salesforce" |


        Scenario Outline: guest user logs out by clicking cancel and logout button
            Given guest user loads salesforce plus platform
             When guest user access authorized content and logs in through trailblazer id
             When guest user fills out the sign up forms and clicks cancel and logout button
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then the user is logged out
             Then authenticated user clicks on second episode and can play the authorized episode
        
        