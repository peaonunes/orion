// Semantic UI components frequently reference each other internally via shorthand
// factories. Overriding these factories enable us to keep the flexibility of
// shorthand props while also customizing the behavior and styles of components.
export { createShorthandFactory } from 'semantic-ui-react/dist/es/lib'
