Feature: Broadcast Page

        @broadcastPage @current
        Scenario Outline: authenticated user plays the selected episode
            Given authenticated user is logged in
             When guest user navigates to the broadcast page
             Then user plays a video

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


