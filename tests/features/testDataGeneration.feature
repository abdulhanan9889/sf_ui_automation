Feature: Test Data Generation

        @authenticatedData
        Scenario: user generates data for authenticated flows
            Given: user generates data for authenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | eventStartDayFromToday | eventStartHour | eventEndDayFromToday | eventEndHour |
                  | 2              | 5                         | 0                      | 7              | 3                    | 22           |

        @unauthenticatedData
        Scenario: user generates data for unauthenticated flows
            Given: user generates data for unauthenticated flows
                  | numberOfSeries | numberOfEpisodesPerSeries | seriesStartDayFromToday | seriesEndDayFromToday |
                  | 2              | 5                         | 1                       | 4                     |
