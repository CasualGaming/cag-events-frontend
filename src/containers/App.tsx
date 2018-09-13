import HomePage from '@/components/HomePage';
import NoMatch from '@/components/NoMatch';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}





export default App;
