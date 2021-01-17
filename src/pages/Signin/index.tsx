import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

import { Page, Background, Container } from './styles';

const Signin: FC = () => {
  const history = useHistory();

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleSubmit = useCallback(
    data => {
      console.log(data);

      history.push('/logged/courses');
    },
    [history],
  );

  return (
    <Page>
      <Container>
        <Header goBackHome>
          <Button blue onClick={handleNavigateToSignin} transparent uppercase>
            Cadastra-se
          </Button>
        </Header>

        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <h1>Entrar</h1>

            <Input name="email" placeholder="E-mail: " />
            <Input name="password" placeholder="Crie uma senha:" />

            <Link to="forgot">Esqueci a Senha</Link>

            <Button uppercase>Entrar</Button>

            <Link className="signup" to="signup">
              Cadastra-se
            </Link>
          </Form>

          <Background />
        </div>
      </Container>

      <Footer />
    </Page>
  );
};

export default Signin;
