# notes

## event handling

With dynamic components, how do I catch custom events? Angular events only bubble to the immediate parent.

It's best to wrap dynamic components in a component that handles the component creation, for the sake of separating concerns. Doing this though seperates the component concerned about the event from the source of the event.

Does angular elements transform my angular events into real, custom DOM events?

## maintainability