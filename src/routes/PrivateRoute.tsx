import React, { FC, useEffect, useState } from 'react';

import { Route, RouteProps } from 'react-router-dom';

type Props = RouteProps;

const PrivateRoute: FC<Props> = ({ ...rest }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rest]);

  return <Route {...rest} />;
};

export default PrivateRoute;
