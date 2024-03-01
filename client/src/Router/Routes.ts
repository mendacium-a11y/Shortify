import Home from '../pages/Home';
import About from '../pages/About';
import Redirect from '@/pages/Redirect';
// import Contact from './Contact';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/r/:id', component: Redirect}
  // { path: '/contact', component: Contact }
];

export default routes;
