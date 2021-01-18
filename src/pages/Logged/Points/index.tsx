import React, { FC } from 'react';
import Header from '../../../components/Header';

import TitleContentInfo from '../../../components/TitleContentInfo';
import Footer from '../../../components/Footer';
import Link from '../../../components/Link';

import { Page, CardPoint, Container } from './styles';

import AwardsTempData from '../../../temp/Awards';

const Points: FC = () => {
  return (
    <Page>
      <Container>
        <Header>
          <Link to="/logged/courses">Cursos</Link>
          <Link to="/logged/awards">Prêmios</Link>
          <Link selected to="/logged/points">
            Pontuação
          </Link>
        </Header>

        <TitleContentInfo title="Pontuação" big />

        <div className="points">
          {AwardsTempData.map(points => (
            <CardPoint key={points.id}>
              <h3>Curso: Comunicação Eficaz</h3>

              <p>Etapa: 01</p>
              <p>10 pontos ganhos</p>
              <p>Dia 17/08/2021</p>
            </CardPoint>
          ))}
        </div>
      </Container>

      <Footer />
    </Page>
  );
};

export default Points;
