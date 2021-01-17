import React, { FC, useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

import { Content } from '../../assets/styles/Content';
import { Background, Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { setToken } from '../../services/token';

const Signin: FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um e-mail válido'),
          password: Yup.string()
            .min(8, 'Minimo de 8 digitos')
            .required('Senha obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        setToken('sdjalkgbfsdalz/knavlkajszçfalb');

        history.push('/logged/courses');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Entrar</h1>

            <Input name="email" placeholder="E-mail: " />
            <Input name="password" type="password" placeholder="Senha:" />

            <Link to="forgot">Esqueci a Senha</Link>

            <Button type="submit" uppercase>
              Entrar
            </Button>

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
