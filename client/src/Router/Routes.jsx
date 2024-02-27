// import home from '../pages/home';
import home from "../pages/home";
import admin from '../pages/admin';
import redirect from "../pages/redirect";
// import Contact from './Contact';

const routes = [
  { path: '/', component: home },
  { path: '/admin', component: admin },
  { path: '/r/:id', component: redirect }
//   { path: '/contact', component: Contact }
];

export default routes;