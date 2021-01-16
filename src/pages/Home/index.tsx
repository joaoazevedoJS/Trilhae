import React, { FC, useCallback } from 'react';
import { Form } from '@unform/web';
import { AiFillCopyrightCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import {
  Background,
  Container,
  ButtonContainerFixed,
  FooterBackground,
} from './styles';

import LogoImg from '../../assets/images/logo.png';

import Button from '../../components/Button';
import TitleContentInfo from '../../components/TitleContentInfo';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

const Home: FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <header>
        <img src={LogoImg} alt="Trilhaê" />

        <Button transparent uppercase>
          Entre
        </Button>
      </header>

      <main>
        <div>
          <h1>O seu caminho de aprimoramento em habilidades socioemocionais</h1>

          <p>
            Quer ter as ferramentas necessárias para participar do mercado de
            trabalho? Vem com a gente!
          </p>

          <ButtonContainerFixed>
            <Button uppercase>Cadastre-se</Button>
          </ButtonContainerFixed>
        </div>

        <Background />
      </main>

      <section>
        <TitleContentInfo title="Quem Somos">
          <p>
            A Trilhaê é uma plataforma que oferece desafios para aprimorar as
            habilidades socioemocionais de seus usuários, preocupada em auxiliar
            os jovens nos seus futuros profissionais. As empresas buscam
            colaboradores que sejam capazes de manter bons relacionamentos, de
            dialogar e compreender o outro e o mundo ao seu redor. Então, comece
            a sua jornada de aprimorameto no Trilhaê, e vamos juntos abrir novas
            trilhas para o seu futuro profissional.
          </p>
        </TitleContentInfo>

        <TitleContentInfo title="O que Fazemos">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </TitleContentInfo>

        <div className="lastContent">
          <TitleContentInfo title="Contato">
            <p>
              Caso tenha alguma dúvida ou queira saber mais informações de como
              participar, entre em contato com a nossa equipe.
            </p>
          </TitleContentInfo>
        </div>
      </section>

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome: " />
        <Input name="phone" placeholder="Telefone: " />
        <Input name="email" placeholder="E-mail: " />

        <div className="textarea">
          <Textarea name="message" placeholder="Mensagem: " />

          <FooterBackground />
        </div>

        <Button uppercase>Enviar</Button>
      </Form>

      <footer>
        <div>
          <p>
            <AiFillCopyrightCircle />
            2020
          </p>

          <p>Trilhaê</p>
        </div>

        <div>
          <AiOutlineWhatsApp />
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </footer>
    </Container>
  );
};

export default Home;
