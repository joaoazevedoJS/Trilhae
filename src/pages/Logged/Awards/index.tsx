import React, { FC } from 'react';
import Header from '../../../components/Header';

import TitleContentInfo from '../../../components/TitleContentInfo';
import Footer from '../../../components/Footer';
import Link from '../../../components/Link';

import { CardCourse, Container } from './styles';

const Awards: FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/logged/courses">Cursos</Link>

          <Link selected to="/logged/awards">
            Prêmios
          </Link>

          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <TitleContentInfo title="Premios" big />

        <div className="points">
          {['', '', '', '', '', '', ''].map((course, index) => (
            <CardCourse key={index}>
              <h3>Curso: Comunicação Eficaz</h3>

              <p>Etapa: 01</p>
              <p>10 pontos ganhos</p>
              <p>Dia 17/08/2021</p>
            </CardCourse>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Awards;
