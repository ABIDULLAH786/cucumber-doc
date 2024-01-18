Feature: Hear shout
  Scenario: Listener is within range
    Given Abid is located 50 metres from Adam
    When Adam shouts "free bagels at Adam's"
    Then Abid hears Adam's message