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
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
      { name: 'antd-mobile', id: 3 },
    ]
  }

});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/indexpage').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
