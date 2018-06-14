import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Main from './routes/Main';
import Test from './routes/Test';
import Login from './routes/Login';
import Theme from './routes/Theme/Theme';
import Detail from './routes/Detail/Detail';
import Random from './routes/Random/Random';
import SelfCenter from './routes/SelfCenter/SelfCenter';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/main" exact component={Main} />
        <Route path="/theme" exact component={Theme} />
        <Route path="/test" exact component={Test} />
        <Route path="/login" exact component={Login} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/random" exact component={Random} />
        <Route path="/selfcenter" exact component={SelfCenter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
