import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

import { Content } from '../../assets/styles/Content';
import { Background, Container } from './styles';

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
    <Container>
      <Content>
        <Header goBackHome>
          <Button blue onClick={handleNavigateToSignin} transparent uppercase>
            Cadastra-se
          </Button>
        </Header>

        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <h1>Entrar</h1>

            <Input name="email" placeholder="E-mail: " />
            <Input name="password" type="password" placeholder="Senha:" />

            <Link to="forgot">Esqueci a Senha</Link>

            <Button uppercase>Entrar</Button>

            <Link className="signup" to="signup">
              Cadastra-se
            </Link>
          </Form>

          <Background />
        </div>
      </Content>

      <Footer />
    </Container>
  );
};

export default Signin;
