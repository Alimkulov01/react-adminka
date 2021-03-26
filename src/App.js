import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Sidebar from './container/Sidebar';

import {
  Discount,
  Home,
  Message,
  LogOut,
  Graph,
  Settings,
  Notification
} from './pages/index';


function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Discount" component={Discount} />
          <Route exact path="/Graph" component={Graph} />
          <Route exact path="/Message" component={Message} />
          <Route exact path="/Notification" component={Notification} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/LogOut" component={LogOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
