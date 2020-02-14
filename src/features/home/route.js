import {
  DefaultPage,
  TodoForm,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'todo', name: 'Todo form', component: TodoForm },
    { path: 'todo/:id', name: 'Todo form', component: TodoForm },
  ],
};
