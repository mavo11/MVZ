import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, LoginOrRegister, AbrechnungAmbOpsKasse, AbrechnungStatOpsKasse, AbrechnungPrivOps, Adressbuch,
IgelZiffern, IvOsteo, Kassenabrechnung, Labor, ManagementSonstiges, Monatsabschluss, Opv,
  Privatabrechnung, Privatziffern, Statistik, Turbomedeinstellungen, Dashboard} from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={LoginOrRegister} />
      <Route path="abrechnung-amb-ops-kasse" component={AbrechnungAmbOpsKasse} onEnter={requireAuth} />
      <Route path="abrechnung-priv-ops" component={AbrechnungPrivOps} onEnter={requireAuth} />
      <Route path="abrechnung-stat-ops-kasse" component={AbrechnungStatOpsKasse} onEnter={requireAuth} />
      <Route path="adressbuch" component={Adressbuch} onEnter={requireAuth} />
      <Route path="igel-ziffern" component={IgelZiffern} onEnter={requireAuth} />
      <Route path="iv-osteo" component={IvOsteo} onEnter={requireAuth} />
      <Route path="kassenabrechnung" component={Kassenabrechnung} onEnter={requireAuth} />
      <Route path="labor" component={Labor} onEnter={requireAuth} />
      <Route path="management-sonstiges" component={ManagementSonstiges} onEnter={requireAuth} />
      <Route path="monatsabschluss" component={Monatsabschluss} onEnter={requireAuth} />
      <Route path="opv" component={Opv} onEnter={requireAuth} />
      <Route path="privatabrechnung" component={Privatabrechnung} onEnter={requireAuth} />
      <Route path="privatziffern" component={Privatziffern} onEnter={requireAuth} />
      <Route path="statistik" component={Statistik} onEnter={requireAuth} />
      <Route path="turbomedeinstellungen" component={Turbomedeinstellungen} onEnter={requireAuth} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  );
};
