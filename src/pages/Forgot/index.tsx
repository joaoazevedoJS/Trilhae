import React, { FC, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
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

const Forgot: FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signin');
  }, [history]);

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um e-mail válido'),
        });

        await schema.validate(data, { abortEarly: false });

        history.push('/sucess/mail');
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
            Entrar
          </Button>
        </Header>

        <div className="form-container">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Esqueceu a senha?</h1>

            <Input name="email" placeholder="E-mail: " />

            <Button type="submit" uppercase>
              Enivar
            </Button>
          </Form>

          <Background />
        </div>
      </Content>

      <Footer />
    </Container>
  );
};

export default Forgot;
