@current
Feature: Homepage
        @skip
        Scenario: User Navigates to Dreamforce tab from the Home Page
            Given user is on the salesforcePlus Homepage
             When user clicks on Explore Salesforce Button
             Then user clicks on the Dreamforce tab

        @undefinedStep
        Scenario: User Navigates to Trailor Page of a series from the Home page
            Given user is on the salesforcePlus Homepage
             When user scrolls down Clicks on the play icon for a Series
             Then user should be navigated to Trailor page of the series

        @skippedStep
        Scenario: User Navigates to a Series detail page from the Home page
            Given user is on the salesforcePlus Homepage
             When user scrolls down Clicks on the arrow icon for a Series
             Then user should be navigated to the series detail page and play the trailor

    
        Scenario: User clicks on a featured episode
            Given user is on the salesforcePlus Homepage
             When user clicks on an episode in the Featured section
             Then user should be navigated to the relevant episode page
    
        Scenario: User clicks on a clicks on an Experiences page tile
            Given user is on the salesforcePlus Homepage
             When user clicks on a tile in the Experiences section
             Then user should be navigated to the relevant experience page

