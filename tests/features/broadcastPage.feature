Feature: Broadcast Page
        @current
        Scenario: user generates data for authenticated flows
            Given user generates data for broadcast page flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | seriesStartDayFromToday | eventEndDayFromToday | seriesEndDayFromToday | numberOfSpeakers | firstName | lastName | designation | company |
                  | 1              | 2                         | 1                      | 1                       | 3                    | 4                     | 2                | dummy     | speaker  | QA          | emumba  |

        @broadcastPage
        Scenario Outline: authenticated user plays the selected episode
            Given authenticated user is logged in
             When guest user navigates to the broadcast page
             Then user plays a video

     #    @broadcastPage
     #    Scenario Outline: user logouts from the trailBlazzer
     #        Given the user is on the salesforce plus webpage
     #         When the user tries to login with a dummy email
     #         When the user click cancel and logout button after filling the following details
     #              | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
     #              | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
     #         Then user is logged out

        @broadcastPage
        Scenario Outline: Verify broadcast details are present in the episode details modal
            Given authenticated user is logged in
             When guest user navigates to the broadcast page
             Then guest user verifies the episode details
    

        @broadcastPage
        Scenario Outline: an authenticated user interact with the video player controls
            Given authenticated user is logged in
             When guest user navigates to the broadcast page
             Then authenticated user plays the video
             Then authenticated user pause the video
             Then authenticated user click the forward video button
             Then authenticated user click the reverse video button
             Then authenticated user decrease volume
             Then authenticated user increase volume
             Then authenticated user click the maximize video button
             Then authenticated user click the minimize video button


