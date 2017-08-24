# Contextual Bar
Limited to web client and cordova mobile application.

## I have never heard of this, what is it?!
Great news, you're amoung great company! Contextual Bar is how Rocketlets refer to what most people know inside of Rocket.Chat as the "tab bar". However, there is currently a proposal to redesign the Rocket.Chat interface and within that design the "tab bar" idea is switching to a contextual bar style. This name also helps provide more insight as to the purpose of the buttons on the bar - they provide additional context for the users to consume.

## How do the buttons operate?
Fantastic question - this is not __yet__ solidified. This will be updated as this feature is finished.

However, the essential idea is as such. Your Rocketlet will register the asset that is needed, it must exist in your Rocketlet package and can not be an external url. Then the ContextualBarButton is added. These two things are done server side. Then whenever a user loads the web interface and the conditions are met for your button, it will be displayed in the contextual bar. When a user clicks the button, the contextual bar's panel will slide out and your asset will be loaded inside of it. Before your asset is loaded, however, a JavaScript context will be created which contains a class which you can interact back to the server with along with a few libraries (__exact libraries to be determined__) and you will not have access to Meteor nor anything else due to the abstraction layer being applied.
