- [ ] Why would you use class component over function components (removing hooks from the question)?

  Because they allow for state to be reactive, and effects to occur. They're done in different ways, but the CDM and CDU allow for a lot of functionality.

* [ ] Name three lifecycle methods and their purposes.

  componentDidMount - This is initiation of the component. In our experience, it was used to pull in or create data to use in the rest of the component.
  componnentDidUpdate - This is the ability to render things within the DOM and manipulate state based on what was mounted in then first phase of the component's life cycle.
  componentDidUnmount - We didn't really end up using this during our teachings, but this is used to perform the last things involved with mounting a component, such as timers, network requests, etc.

- [ ] What is the purpose of a custom hook?

  A custom hook is used to manipulate any data that you need to manipulate, including non-visual behavior. It's also a useful way to keep your code DRY because custom hooks are reusable.

- [ ] Why is it important to test our apps?

  It is a way to easier sniff out bug from within a codebase. Our codebases are quite simple at the moment, so testing doesn't seem so important, but on much larger and more complex codebases, it is needed.
