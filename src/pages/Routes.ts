import CustomRoutes from '../custom/CustomRoutes';

export const MainRoutes = [
  { path: 'admin/company', component: null },
  { path: 'master/product', component: null },
  // Join custom routes to the main routes
  ...CustomRoutes,
];
