import React, { FC, useCallback } from 'react';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

const Dashboard: FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="email" />

        <Button />
      </Form>
    </Container>
  );
};

export default Dashboard;
