## Important Points

#### Keywords in Gherkin:

```
    - Feature 
    - Scenario
    - Given: Given is the context for the scenario. We’re putting the system into a specific state, ready for the scenario to unfold.
    - When: When is an action. Something that happens to the system that will cause something else to happen: an outcome.
    - Then: hen is the outcome. It’s the behaviour we expect from the system when this action happens in this context.
```
    
#### What do step definitions do?

```
Step definitions are JavaScript functions that actually do what's described in each step of a Gherkin scenario.

When it tries to run each step of a scenario, Cucumber will search for a step definition that matches. If there's a matching step definition, it will call the function.
```

#### What does it mean when Cucumber says a step is Pending?
```
Cucumber tells us that a step (and by inference the Scenario that contains it) is Pending when the automation code throws a Pending error.

This allows the development team to signal that automation for a step is a work in progress. This makes it possible to tell the difference between steps that are still being worked on and steps that are failing due to a defect in the system.
```
> For example, when we run our tests in a Continuous Integration (CI) environment, we can choose to ignore pending scenarios.

#### What flow should we follow when making a scenario pass?
```
Our goal at this stage is to get to a failing test, where the only thing left to do to make it pass is make changes to the implementation of the app itself.

On an existing system, we might not need to create so much new code to get to this goal, but we might need to make some changes to how we call the system. This gives us an opportunity to do some lightweight domain modelling.

It may not compile first-time, so we implement the bare-bones of our solution until it does.
```
