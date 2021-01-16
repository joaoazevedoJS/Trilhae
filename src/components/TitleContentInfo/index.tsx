import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  title: string;
}

const TitleContentInfo: FC<Props> = ({ title, children }) => (
  <Container>
    <h3>{title}</h3>

    {children}
  </Container>
);

export default TitleContentInfo;
