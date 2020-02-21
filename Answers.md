1. What problem does the context API help solve?

      Makes it so you don't have to prop drill or pass props down from component to component

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

      actions: are the function that is going to happen to the current state.
      reducers: processes actions by accepting previous state and the action and returns the next state of your application
      store: contains our state for our application

      store is the singel source of truth because that is where the state is housed.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

      Application state is global is immutable we clone the state object modify then replace the originial.  component state is local.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

      it is middleware that provides the ability to handle asynchronous operations inside our action creators.  it allows us to make api  calls from out action creators

1. What is your favorite state management system you've learned and this sprint? Please explain why!

      Context.  it is just easier to manuever and a lot less steps to get it implemented.
