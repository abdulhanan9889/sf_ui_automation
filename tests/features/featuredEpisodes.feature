@featureEepisode
Feature: Featured Episode

        
#  Scenario: user generates data for unauthenticated flows
#         Given user generates data for unauthenticated flows
#             | numberOfSeries | numberOfEpisodesPerSeries | seriesStartDayFromToday | seriesEndDayFromToday | numberOfSpeakers |
#             | 1              | 2                         | 0                       | 4                     | 2                |

        Scenario: user plays featured episode
        Given User is on the salesforce platform
        When  he clicks the featured episode
        When  he plays the episode
        Then the videio starts to play