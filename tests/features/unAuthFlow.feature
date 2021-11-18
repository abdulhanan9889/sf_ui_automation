
Feature: Unauthenticated Flow
        As an unauthenticated user
        User would like to browse through available series
        And is able to play selected episodes
        
     @unAuthFlow
    Scenario Outline: user verifies  series cards
        Given a user is on the salesforce plus platform
        Then User verfies the published and unpublished series card
    @unAuthFlow 
    Scenario Outline: user verifies episode cards
        Given a user is on the salesforce plus platform
        When user is on the original series detail page
        Then user is able to verify episode cards details
    @unAuthFlow 
    Scenario Outline: user is able to verify the speaker details and episode details for that episode
    Given a user is on the salesforce plus platform
    When user navigates to the episodes page and clicks on a particular episode
    Then user is able to verify the speaker details and episode details for that episode 
    @unAuthFlow 
    Scenario Outline: Verify user can interact with the video player controls
        Given a user is on the salesforce plus platform
        When user navigates to the episodes page and clicks on a particular episode
        Then user can play and pause the video
        Then user can forward and reverse the video
        Then user can maximize and minimize the video player
        Then user can mute and unmute the video
    @unAuthFlow 
    Scenario Outline: unthenticated user plays the selected episode
        Given a user is on the salesforce plus platform
        When user navigates to the episodes page and clicks on a particular episode
        Then user is able to play the episode now

    @unAuthFlow @current
    Scenario Outline: unthenticated user plays two back to back episodes
        Given a user is on the salesforce plus platform
        When user navigates to episodes page and clicks on the first episode
        Then user is able to play the first episode
        When user clicks on the second episode
        Then user is able to play the second episode

