import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  big?: boolean;
}

const TitleContentInfo: FC<Props> = ({ title, big, children }) => (
  <Container big={big}>
    <h3>{title}</h3>

    {children}
  </Container>
);

export default TitleContentInfo;
