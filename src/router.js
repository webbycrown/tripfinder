import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Header } from './my_components/Header/Header';
import { Footer } from './my_components/Header/Footer';


import {
  HOME_PAGE,
  LISTING_PAGE,
  SINGLE_LIST_PAGE,
  CONTACT,
} from './settings/constant';

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Home" */ '/'),
      loading: Loading,
      modules: ['Home'],
    }),
    exact: true,
  },
  {
    path: LISTING_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "listing" */ '/listing'),
      loading: Loading,
      modules: ['listing'],
    }),
  },
  {
    path: SINGLE_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Single_listing" */ '/Single_listing'),
      loading: Loading,
      modules: ['Single_listing'],
    }),
  },
  {
    path: CONTACT,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Contact_us" */ '/Contact_us'),
      loading: Loading,
      modules: ['Contact_us'],
    }),
  },
];



/**
 *
 * Overall Router Component
 *
 */

const Routes = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <ProtectedRoute path={ADD_HOTEL_PAGE} component={AddListing} />
        <ProtectedRoute
          path={AGENT_ACCOUNT_SETTINGS_PAGE}
          component={AgentAccountSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
