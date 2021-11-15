Feature: Episode Page
        @current
        Scenario: user generates data for authenticated flows
            Given user generates data for authenticated epsiode flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | seriesStartDayFromToday | eventEndDayFromToday | seriesEndDayFromToday | numberOfSpeakers | firstName | lastName | designation | company |
                  | 1              | 2                         | 1                      | 1                       | 3                    | 4                     | 2                | dummy     | speaker  | QA          | emumba  |
        
        #Scenario: user generates data for unauthenticated flows
         #   Given user generates data for unauthenticated epsiode flows
          #        | numberOfSeries | numberOfEpisodesPerSeries | seriesStartDayFromToday | seriesEndDayFromToday | numberOfSpeakers | firstName | lastName | designation | company |
           #       | 1              | 2                         | 1                       | 4                     | 2                | dummy     | speaker  | QA          | emumba  |

        @episodePage
        Scenario Outline: Verify episode details are present in the episode details modal
            Given a guest user loads salesforce plus platform
             When user navigates to episodes page and clicks on a particular episode
             Then user is able to verify unauthenticated episode details


        @episodePage
        Scenario Outline: Verify user can interact with the video player controls
            Given a guest user loads salesforce plus platform
             When user navigates to episodes page and clicks on a particular episode
             Then user can play and pause the video
             Then user can forward and reverse the video
             Then user can maximize and minimize the video player
             Then user can mute and unmute the video

#    @episodePage
#    Scenario Outline: Verify user can play the authenticated episode
#        Given a guest user loads salesforce plus platform
#         When a guest user access authorized content and logs in through trailblazer id
#         When a guest user fills out the sign up forms
#              | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
#              | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
#         Then an authenticated user can play the authorized episode

#    @episodePage
#    Scenario Outline: Verify user can play two back to back authenticated episodes
#        Given a guest user loads salesforce plus platform
#         When a guest user access authorized content and logs in through trailblazer id
#         When a guest user fills out the sign up forms
#              | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
#              | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
#         Then authenticated user can play the first authorized episode
#         Then authenticated user clicks on second episode and can play the authorized episode


#    @episodePage
#    Scenario Outline: Verify already signed up user can play authenticated content
#        Given a guest user loads salesforce plus platform
#         When a guest user access authorized content and logs in through trailblazer id: <email>
#         Then an authenticated user can play the authorized episode
#    Examples:
#              | email                                    |
#              | newdummyuser31isavailable@mailinator.com |

#    @episodePage
#    Scenario Outline: Verify user can interact with the video player controls of authenticated episode
#        Given a guest user loads salesforce plus platform
#         When a guest user access authorized content and logs in through trailblazer id
#         When a guest user fills out the sign up forms
#              | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
#              | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
#         Then an authenticated user can play the authorized episode
#         Then user can forward and reverse the video
#         Then user can maximize and minimize the video player
#         Then authenticated user clicks on second episode and can play the authorized episode

        @episodePage
        @current
        Scenario Outline: user verifies the authenticated content details
            Given a guest user loads salesforce plus platform
             When a guest user access authorized content and logs in through trailblazer id
         #When a guest user fills out the sign up forms
          #    | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
           #   | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then user is able to verify authenticated episode details


#    @episodePage
#    Scenario Outline: guest user logs out by clicking cancel and logout button
#        Given a guest user loads salesforce plus platform
#         When a guest user access authorized content and logs in through trailblazer id
#         When a guest user fills out the sign up forms and clicks cancel and logout button
#              | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
#              | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
#         Then the user is logged out
#         Then authenticated user clicks on second episode and can play the authorized episode