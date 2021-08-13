# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API eliminates messy prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are a plain JS object that contains information. Reducers are the pure functions that take the current state and action and return the new state. The store is the object that holds the state of the application. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux Thunk is a separate node package that allows us to make the flow asynchronous and make API calls from our action creators.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

They're all a bit confusing at the moment. Can't pick a clear front-runner when it's all new to me.