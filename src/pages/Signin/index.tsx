import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container } from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

const Signin: FC = () => {
  const history = useHistory();

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header>
        <Button onClick={handleNavigateToSignin} transparent uppercase>
          Cadastra-se
        </Button>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Input name="nome" />
      </Form>

      <Footer />
    </Container>
  );
};

export default Signin;
