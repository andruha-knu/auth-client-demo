# Auth-Client Demo

This is an test project, intended to demonstrate how an app developer might integrate with an [Internet Identity](https://identity.ic0.app).

This is an example showing how to use [@dfinity/auth-client](https://www.npmjs.com/package/@dfinity/auth-client).

## Setting up for local development

To get started, start a local dfx development environment in this directory with the following steps:

```bash
cd auth-client-demo/
dfx start --background
dfx deploy
```

Then, make sure you have the [Internet Identity](https://github.com/dfinity/internet-identity) repo cloned locally. 

```bash
cd ../internet-identity
II_ENV=development dfx deploy --no-wallet --argument '(null)'
```

Copy the canister ID fom the Internet Identity canister, and paste it into `webpack.config.js` in this project on the `LOCAL_II_CANISTER` variable on line `8`.

Finally, cd back into the auth-client-demo directory and start the development server with `npm start`.

You can now access the app at `http://localhost:8080`.

## UI Technolodgies

# React
Documentation: https://reactjs.org/docs/getting-started.html
package.json:  "react", "react-dom"
React is a declarative, efficient, and flexible open-source JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

Why React?
1. Simplicity
   ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn, build a professional web (and mobile applications), and support it. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement; Developer can still write in plain JavaScript but JSX is much easier to use.

2. Easy to learn
   Anyone with a basic previous knowledge in programming can easily understand React while Angular and Ember are referred to as ‘Domain-specific Language’, implying that it is difficult to learn them. To react, you just need basic knowledge of CSS and HTML.

3. Native Approach
   React can be used to create mobile applications (React Native). And React is a diehard fan of reusability, meaning extensive code reusability is supported. So at the same time, we can make IOS, Android and Web applications.

4. Data Binding
   React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It's easier to debug self-contained components of large ReactJS apps.

5. Performance
   React does not offer any concept of a built-in container for dependency. You can use Browserify, Require JS, EcmaScript 6 modules which we can use via Babel, ReactJS-di to inject dependencies automatically.

6. Testability
   ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with the state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.

# TypeScript
Documentation: https://www.typescriptlang.org/docs/home.html
package.json:  "typescript"
TypeScript is an object-oriented programming language developed and maintained by the Microsoft Corporation. TypeScript is a wrapper around JavaScript so helper classes are available that reduces the code. Code in Typescript is easier to understand.

# Redux
Documentation: https://redux.js.org/introduction/getting-started
package.json:  "redux"
Redux can be described in three fundamental principles:

#Single source of truth
The state of your whole application is stored in an object tree within a single store.

This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

State is read-only
The only way to change the state is to emit an action, an object describing what happened.

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

Changes are made with pure functions
To specify how the state tree is transformed by actions, you write pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

# React Redux
Documentation: https://react-redux.js.org/introduction/quick-start
package.json:  "react-redux"
The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.

# React Router
Documentation: https://redux.js.org/advanced/usage-with-react-router/
package.json:  "react-router-dom"
A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.

# React Bootstrap
Documentation: https://react-bootstrap.github.io/getting-started/introduction
package.json:  "bootstrap"
React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed, you have everything you need.

# Browser plugins
Documentation: https://redux.js.org/introduction/ecosystem/#dev-tools
package.json:  "redux-devtools"
