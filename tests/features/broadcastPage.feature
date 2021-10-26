Feature: Broadcast Page

   
        Scenario: user generates data for authenticated flows
            Given: user generates data for authenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
                  | 2              | 5                         | 0                      | 7              | 3                    | 22           |


        Scenario Outline: authenticated user plays the selected episode
            Given user is on the salesforce plus webpage
             When user open the sign in form
             When user login with the following <email>
             Then user plays a video
        Examples:
                  | email                             |
                  | login7bscdpf5ys2sf@mailinator.com |
        
    
        Scenario Outline: user logouts from the trailBlazzer
            Given user is on the salesforce plus page
             When user tries to login with a dummy email
             When user click cancel and logout button after filling following details
                  | firstName | lastName | roleName | relation | companyName | jobTitle | country | state | companySize      | phoneNumber | countryCode | jobRole   |
                  | dummy     | here     | Marketer | Customer | xyz         | QA       | US      | CA    | 21-200 employees | 0342561342  | 1           | Marketing |
             Then user is logged out
        

    
        Scenario Outline: Verify broadcast details are present in the episode details modal
            Given guest user loads the salesforce plus platform
             When guest user login through trailblazzer using <email>
             Then guest user is able to verify the episode number: <episodeNumber>
             Then guest user is able to verify the series title: <seriesTitle>
             Then guest user is able to verify the episode title: <episodeTitle>
             Then guest user is able to verify the speaker one name and card title: <speakerOneDetails>
             Then guest user is able to verify the speaker two name and card title: <speakerTwoDetails>
             Then guest user is able to verify the speaker three name and card title: <speakerThreeDetails>
             Then guest user is able to verify the speaker four name and card title: <speakerFourDetails>
             Then guest user is able to verify the speaker five name and card title: <speakerFiveDetails>
             Then guest user is able to verify the speaker six name and card title: <speakerSixDetails>
             Then guest user is able to verify the speaker seven name and card title: <speakerSevenDetails>
             Then guest user is able to verify the speaker eight name and card title: <speakerEightDetails>
             Then guest user is able to verify the speaker nine name and card title: <speakerNineDetails>
             Then guest user is able to verify the speaker ten name and card title: <speakerTenDetails>
        Examples:
                  | email                             | episodeNumber | seriesTitle  | episodeTitle                        | speakerOneDetails                                                          | speakerTwoDetails                    | speakerThreeDetails                        | speakerFourDetails                                                  | speakerFiveDetails                                  | speakerSixDetails                                            | speakerSevenDetails                                                    | speakerEightDetails                                                                          | speakerNineDetails                                             | speakerTenDetails                  |
                  | loginaixk5800aw2sf@mailinator.com | 'EPISODE 2'   | 'BEST OF DF' | 'Welcome to the Trusted Enterprise' | 'Leah McGowen-Hare & VP, Trailblazer Community and Engagement, Salesforce' | 'Ola Källenius & CEO, Mercedes-Benz' | 'Marc Benioff & Chair and CEO, Salesforce' | 'Bret Taylor & President &amp; Chief Operating Officer, Salesforce' | 'Stewart Butterfield & CEO &amp; Co-Founder, Slack' | 'Tamar Yehoshua & Chief Product Officer, Slack Technologies' | 'Sarah Franklin & President &amp; Chief Marketing Officer, Salesforce' | 'Ebony Beckwith & CEO of Salesforce Foundation &amp; Chief Philanthropy Officer, Salesforce' | 'Marquita Sidibe & Business Analyst, Liberty Mutual Insurance' | 'Catherine MacGregor & CEO, Engie' |



        @current
        Scenario Outline: an authenticated user interact with the video player controls
            Given authenticated user is on salesforce plus webpage
             When authenticated user logins with <email>
             Then authenticated user plays the video
             Then authenticated user pause the video
             Then authenticated user click the forward video button
             Then authenticated user click the reverse video button
             Then authenticated user decrease volume
             Then authenticated user increase volume
             Then authenticated user click the maximize video button
             Then authenticated user click the minimize video button
        Examples:
                  | email                             |
                  | login7bscdpf5ys2sf@mailinator.com |

        
        