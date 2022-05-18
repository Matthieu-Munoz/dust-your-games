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

### Dynamiser un composant avec React Redux

Si la page statique est prête, alors on peut commencer la dynamisation.

Dans le cas d'un input, on souhaite le rendre "controlé". C'est à dire qu'il soit entierement gerer par React-Redux.
L'objectif est de mettre son contenu dans le state et donc de mettre à jour le state à l'intéraction de l'utilisateur, pour cela :

- On rend notre input "contrôlé" en lui indiquant l'attribut `value=""`
- A partir de là, l'input est contrôlé, il n'est plus mis à jour quand l'utilisateur tape une touche (rien ne s'affiche quand l'utilisateur écrit dans le champs, c'est bloqué... et donc contrôlé).
- On peut lier cette value à la proprieté du state correspondante. Pour cela on utilise le useSelector de react-redux
- En utilisant useSelector, on stocke la valeur courante désirée du state dans une variable
- Cette variable sera la value de l'input


un exemple avec un champs input pour un pseudo :

```jsx
// Dependencies
import { useSelector} from 'react-redux';

function LoginForm() {
    // On stocke dans la variable pseudo la valeur du state
    const pseudo = useSelector((state) => state.user.pseudo);
    return (
      <div className="field">
        <input
          name="pseudo"
          className="field__input"
          type="text"
          placeholder="pseudo"
          value={pseudo}
        />
      </div>
    );
}
export default LoginForm;

```

Ainsi, ce qu'il y a dans l'input correspondra à ce qu'il y a dans le state !

Maintenant que notre valeur est controlée, on va gérer son changement :

#### Dans le cas d'un input classique

- On commence par créer la fonction "handleChange()". L'objectif de cette fonction est de récupérer ce qu'écrit l'utilisateur dans le champs et de mettre à jour la value correspondante du state.
- On lie cette fonction à notre input avec un onChange
- Pour récupérer ce qu'écrit l'utilisateur, on aura besoin de la variable de fonction 'evt'. Celle-ci contient l'intégralité des informations liées à l'événement (ici un changement dans le champs).

```js
const handleChange = (evt) => {
  console.log(evt)
}
```

- Quand une touche est tapée, on provoque un changement et le console.log est affiché. La touche tapée est contenue dans la value de target :

```js
const handleChange = (evt) => {
  // Ici on log uniquement la touche tapée
  console.log(evt.target.value);
}
```

Pour le moment on est capable de récupérer ce que l'utilisateur rentre, pour autant on ne met pas encore à jour la value du state. Pour effectuer cette mise à jour, on aura besoin d'un peu de préparation : le couple action/reducer. 

<hr>

## Rappel de la creation du couple action/reducer

**Action**
Une action est composée d'un duo 'action Type' et 'action Creator'.
Le type correspond à une description textuelle de l'action.
Le creator à une fonction pour effectuer un changement. 

```js
// Action TYPE
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
// Action CREATOR
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  // Ici value correspondera à la touche tapée par l'utilisateur.
  value,
});
```

**Reducer**
Dans le reducer correspondant à l'action, on ajoute un nouveau cas au switch avec notre action !

```js
switch (action.type) {
  // Le cas de notre action
  case CHANGE_INPUT_VALUE:
    return {
      // On recopie le state actuel
        ...state,
        // On le modifie avec la valeur transmise par notre action
        pseudo: action.value,
    };
  default:
  return state;
  }
```

<hr>

De retour dans notre composant, maintenant on veut appliquer le changement :

- Pour mettre à jour le state on utilise ce qu'on vient de créer (action et reducer) avec useDisptach
- Il faut pour cela importer useDispatch de React-Redux ainsi que notre action Creator
- On stock useDispatch dans une constante 'dispatch'
- Dans notre fonction handleChange, on utilise le tout en faisant un `dispatch(changeInputValue(value))`
--> changeInputValue = l'action (la récupérer dans le fichier action)
- Ainsi notre composant fonctionnel ressemble à :

```jsx
// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { changeHomeField} from '@/actions/user';

function LoginForm() {
    const dispatch = useDispatch();
    const pseudo = useSelector((state) => state.user);

    const handleChange = (evt) => {
      // On dispatch notre action avec la touche tapée
      dispatch(changeInputValue(evt.target.value));
    }
    return (
      <div className="field">
        <input
          name="pseudo"
          className="field__input"
          type="text"
          placeholder="pseudo"
          value={pseudo}
          onChange={handleChange}
        />
      </div>
    );
}
export default LoginForm;

```

### Dans le cas de notre composant Field et de multiples inputs :

On travaille avec un composant contrôlé Field, donc la méthode est légerement différente.
Notre composant Field est dit "générique" il sert pour tous les inputs du site. On a donc prévu les attributs value et onChange.
Vu qu'il sert pour tous les inputs, il faut un moyen pour départager dans quel input l'utilisateur rentre du texte.
On pourrait créer une action par champs, mais c'est long et laborieux. On va donc dynamiser notre action et notre reducer pour qu'ils s'adaptent à n'importe quel input.
On va donc :

- adapter notre action en précisant une variable field (elle contiendra une string correspondant à l'input ET au state : 'email' 'password' etc):

```js
export const CHANGE_HOME_FIELD = 'CHANGE_HOME_FIELD';
export const changeHomeField = (value, field) => ({
  type: CHANGE_HOME_FIELD,
  value,
  field,
});
```

- On adapte aussi le reducer, ici on modifie le state en fonction du field transmis par l'action :

```js
  case CHANGE_HOME_FIELD:
      return {
          ...state,
          [action.field]: action.value,
      };
```

- On applique ces changements dans notre composant avec la fonction handleChange :

```js
   const handleChange = (value, field) => {
        dispatch(changeHomeField(value, field));
    }
```

