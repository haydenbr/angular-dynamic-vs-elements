# notes

## event handling

With dynamic components, how do I catch custom events? Angular events only bubble to the immediate parent.

It's best to wrap dynamic components in a component that handles the component creation, for the sake of separating concerns. Doing this though seperates the component concerned about the event from the source of the event.

catching events from dynamically created components
```ts
(componentRef.instance.movieClick || { subscribe: () => {} }).subscribe(() => console.log('hey'));
```

Does angular elements transform my angular events into real, custom DOM events?

## maintainability

Too much coupling:
- component classes for creating custom elements
- if you want events, intermediary component has to know what events to expect, catch those, and bubble those up explicitly or else dynamicly created components have to handle events on their own

### web component gotchas

- output target has to be es6 in `tsconfig.json` because web components depened on es6 classes, rather than 
- you have to add `schemas: [CUSTOM_ELEMENTS_SCHEMA]` to ngmodule because angular won't know about the custom element tag ... and it will barf.