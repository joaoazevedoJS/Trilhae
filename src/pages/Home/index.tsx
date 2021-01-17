import React, { FC, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import TitleContentInfo from '../../components/TitleContentInfo';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Page,
  Background,
  Container,
  ButtonContainerFixed,
  FooterBackground,
} from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

const Home: FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleNavigateToSignup = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signin');
  }, [history]);

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um e-mail válido'),
          message: Yup.string().required('Digite sua mensagem'),
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
    <Page>
      <Container>
        <Header>
          <Button blue onClick={handleNavigateToSignin} transparent uppercase>
            Entrar
          </Button>
        </Header>

        <main>
          <div>
            <h1>
              Desenvolva competências procuradas pelo mercado de trabalho no
              século XXI
            </h1>

            <p>
              Quer se destacar e conseguir prêmios durante uma trilha que
              prepara você para o trabalho e para a vida? Vem com a gente!
            </p>

            <ButtonContainerFixed>
              <Button onClick={handleNavigateToSignup} uppercase>
                Cadastre-se
              </Button>
            </ButtonContainerFixed>
          </div>

          <Background />
        </main>

        <section>
          <TitleContentInfo title="O que é o Trilhaê?">
            <p>
              A Trilhaê é uma plataforma que oferece <strong>desafios</strong>{' '}
              para aprimorar as <strong>habilidades socioemocionais</strong> de
              seus usuários, preocupada em auxiliar os jovens nos seus futuros
              profissionais. As empresas buscam colaboradores que sejam capazes
              de manter bons relacionamentos, de dialogar e compreender o outro
              e o mundo ao seu redor. Então, comece a sua jornada de
              aprimorameto no Trilhaê, e vamos juntos abrir{' '}
              <strong>novas trilhas para o seu futuro profissional.</strong>
            </p>
          </TitleContentInfo>

          <TitleContentInfo title="Mapa para a sua trilha">
            <p>
              Para você começar essa trilha de desafios, carregue este mapa com
              seus objetivos, passo a passo e, claro, as regras.
            </p>

            <h2>Objetivo</h2>
            <p>
              Completar as <strong>6 fases</strong> (Comunicação eficaz,
              Pensamento Criativo, Resiliência, Empatia, Liderança e Ética no
              trabalho). Uma fase será liberada por semana.
            </p>

            <h2>Passo a Passo</h2>
            <p>
              -Faça <strong>login</strong> ao entrar na nossa plataforma, para
              acessar o <strong>conteúdo da semana.</strong>
              <br />
              -Assista a tudo que estiver disponível, leia tudo.
              <br />
              -Tire dúvidas (procure mais sobre o conteúdo pela internet!)
              <br />
              -Realize as tarefas para concluir cada fase.
            </p>

            <p>
              <strong>ATENÇÃO: </strong>se você não conseguir os pontos
              necessários numa das fases na trilha, você vai ficar um período
              preso nela e poderá refazer o trecho depois de um tempo.
            </p>

            <h2>Premiação</h2>
            <p>
              Ao <strong>completar a trilha</strong>, enfrentando com êxito
              todos os desafios, você vai ter acesso a um{' '}
              <strong>certificado</strong> que as empresas procuram! Nossas
              empresas parceiras acreditam no desenvolvimento das habilidades
              socioemocionais dos jovens.
            </p>
          </TitleContentInfo>

          <div className="lastContent">
            <TitleContentInfo title="Contato">
              <p>
                Caso tenha alguma dúvida ou queira saber mais informações de
                como participar, entre em contato com a nossa equipe.
              </p>
            </TitleContentInfo>
          </div>
        </section>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome: " />
          <Input name="phone" placeholder="Telefone: " />
          <Input name="email" placeholder="E-mail: " />

          <div className="textarea">
            <Textarea name="message" placeholder="Mensagem: " />

            <FooterBackground />
          </div>

          <Button type="submit" uppercase>
            Enviar
          </Button>
        </Form>
      </Container>

      <Footer />
    </Page>
  );
};

export default Home;
