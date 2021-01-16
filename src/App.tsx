import React, { FC } from 'react';

import Routes from './routes';

import GlobalStyled from './assets/styles/global';

const App: FC = () => (
  <>
    <Routes />

    <GlobalStyled />
  </>
);

export default App;
