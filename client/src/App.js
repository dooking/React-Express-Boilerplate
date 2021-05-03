import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Home, About } from './pages';
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/about'} exact component={About} />
      </Switch>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    font-family: "애플 SD 산돌고딕 Neo", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";
  }
  a {
    text-decoration: none;
  }
`;

export default App;
