import Home from '../pages/Home';
import About from '../pages/About';
import Redirect from '@/pages/Redirect';
import Login from '@/pages/Login';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/login', component: Login},
  { path: '/r/:id', component: Redirect}
];

export default routes;
