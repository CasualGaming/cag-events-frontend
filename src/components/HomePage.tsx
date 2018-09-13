import logo from '@/images/logo.svg';
import * as React from 'react';

const HomePage = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" data-testid="test">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
);

export default HomePage;
