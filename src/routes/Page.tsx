import React, { FC, useEffect } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getToken } from '../services/token';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Page: FC<Props> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const token = getToken();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rest]);

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: isPrivate ? '/signin' : '/logged/courses' }}
          />
        );
      }}
    />
  );
};

export default Page;
