import dva from 'dva';
import './index.css';
import hashHistory from 'history/createHashHistory';

// 1. Initialize
const app = dva({
  onError(e) {
    console.error(e.message)
  },
  history: hashHistory(),
  initialState: {

  }

});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/indexpage').default);
app.model(require('./models/products').default);
app.model(require('./models/main').default);
app.model(require('./models/login').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
