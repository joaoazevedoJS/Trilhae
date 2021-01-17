import React, { FC, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

type Props = RouteProps;

const Page: FC<Props> = ({ ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rest]);

  return <Route {...rest} />;
};

export default Page;
