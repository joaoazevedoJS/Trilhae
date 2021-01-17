import React, { FC } from 'react';
import Header from '../../../components/Header';

import TitleContentInfo from '../../../components/TitleContentInfo';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import Link from '../../../components/Link';

import TempImg from '../../../assets/images/temp/tempImg-1.jpg';

import { CardCourse, Container } from './styles';

const Courses: FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Link selected to="/logged/courses">
            Cursos
          </Link>

          <Link to="/logged/awards">Prêmios</Link>
          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <TitleContentInfo title="Cursos" big />

        <div className="courses">
          {['', '', '', '', '', '', ''].map((course, index) => (
            <CardCourse key={index}>
              <img src={TempImg} alt="temp img" />

              <h3>Comunicação Eficaz</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <Button uppercase>Começar</Button>
            </CardCourse>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Courses;
