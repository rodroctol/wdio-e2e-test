Feature: Demo Feature

    @demo
    Scenario Outline: Run first Demo
        Given google page is opened
        When I search with <SearchItem>
        Then Click on the first search result
        And the URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |