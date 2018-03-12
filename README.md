# Rocket.Chat Apps TypeScript Definitions

## Handlers
Handlers are essentially "listeners" for different events, except there are various ways to handle an event.
When something happens there is `pre` and `post` handlers.
The set of `pre` handlers happens before the event is finalized.
The set of `post` handlers happens after the event is finalized.
With that said, the rule of thumb is that if you are going to modify, extend, or change the data backing the event then that should be done in the `pre` handlers. If you are simply wanting to listen for when something happens and not modify anything, then the `post` is the way to go.

The order in which they happen is:
* Pre**Event**Prevent
* Pre**Event**Extend
* Pre**Event**Modify
* Post**Event**

Here is an explanation of what each of them means:
* **Prevent**: This is ran to determine whether the event should be prevented or not.
* **Extend**: This is ran to allow extending the data without being destructive of the data (adding an attachment to a message for example).
* **Modify**: This is ran and allows for destructive changes to the data (change any and everything).
* Post**Event**: Is mostly for simple listening and no changes can be made to the data.

## Generating/Updating Documentation
To update or generate the documentation, please commit your changes first and then in a second commit provide the updated documentation.
