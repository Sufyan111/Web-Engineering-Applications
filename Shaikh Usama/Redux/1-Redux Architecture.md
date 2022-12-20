Single Source of Truth(store) :

1. A point where the whole state(data) of the application is stored.
2. It is also called as Store in Redux.
3. Data is Stored in a Single Javascript Object.
4. The store is incharge in communicating with reducer.

Update the State(Reducer(store, action)) :

1.  As Redux is built on top of functional programming principles where we cannot mutate(it's immutable or can't be changed) hence we cannot directly change or update the store as it is a immutable object.
2.  Hence to update a state we use reducer() method.
3.  So we copy the present Object into new Object using spread operator or any immutable library such as Immutable or Immer.
4.  Reducer also takes a parameter called action which specifies where and what to change in the Object.
5.  There reducers are pure fucntions, so they don't mutate any argument and they don't have any side effects and also don't change global state.
6.  Just get the current store instace and give back updated one.

Hence the 3 basic building blocks of Redux are :

1. Store, which holds the data.
2. Actions, is a place where javascript Object that represents what has changed.(same as Events in javascript)
3. Reducer, it can be one or multiple based on the requirement ,Each one responsible for updating the store.(same as event handler)

Working Mechanism :
When user performs any action , (add item to cart), we create an action object and dispatch it...........the store object has a dispatch method which accepts an action........and the store will forward the same dispatch to reducer.

Action -----(dispatch)-----> Store -----------> Reducer

Action -----(dispatch)<----- Store(store will set the state internally and notify the components about the change the compoennts pull out the new data and refresh themselves ) <----------- Reducer(computes state and return new value )
