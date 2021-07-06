What problem does the context API help solve?
It allows us to pass data with prop drilling



 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 Actions are instruction for what function to render. Reducers help us achieve immutability by creating an entirely new object instead of mutating the current one



 What is the difference between Application state and Component state? When would be a good time to use one over the other?

 Application state is the global data component state is the local data in a particular component
 You should use Application state you are dealing with a large project 



 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

 A middleware that lets you call action creators that return a function instead of an action object




 What is your favorite state management system you've learned and this sprint? Please explain why!

I would say Redux because it is more cleaner than Context API. Redux does require extra coding but the organization it provides trumps that inconvenience.