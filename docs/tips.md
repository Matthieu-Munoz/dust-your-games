# TIPS

## React

### Step by step component with Redux

1. Create files

```
  ├─ Component
  ├── index.js
  └── component.scss
```

2. Setup the component in index.js
3. Code the JSX
4. Apply style
5. Adding functionalities :

To add functionalities that imply a change in state, we need to prepare a corresponding state.

- Create the reducers and add necessary variables in initialState
- Create corresponding actions
- Apply them in the switch cases of the reducer
- Use them in the component : useSelector to get a variable from state and useDispatch to apply changes

### [Conditional Rendering :](https://reactjs.org/docs/conditional-rendering.html)

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

If you have only one component to condition :

```JSX
{
  if (isLoggedIn) {
    return <Component1 />;
  }
}
```

**equals to**

```JSX
  {(currentTheme) && <Component1 />}
```

For two different components :

```JSX
{
  if (isLoggedIn) {
    return <Component1 />;
  }
  return <Component2 />;
}
```

**equals to**

```JSX
  {(currentTheme) ? <Component1 /> : <Component2 />}
```


### Conditional css class

We can use the dependency classNames to achieve a conditional css class
For example, to achieve a dark theme we need two different class depending on a state variable

```JSX
  // Retrieve the boolean (true/false) from the state which condition the theme
  const currentTheme = useSelector((state) => state.app.darkTheme);
  // Here we create a const 'cssClass', its destined to go in the corresponding className of an element
  // Using 'className', we can specify multiple class, separated by a ','
  // Moreover, we can condition a class like this { 'theme--dark': currentTheme }
  // If 'currentTheme' is true, then cssClass will be 'theme theme--dark'
  const cssClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });
```