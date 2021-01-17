import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../../components/Header';
import TitleContentInfo from '../../../components/TitleContentInfo';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import Link from '../../../components/Link';

import TempImg from '../../../assets/images/temp/tempImg-1.jpg';

import { CardCourse, Container } from './styles';
import { Content } from '../../../assets/styles/Content';

import CoursesTemp from '../../../temp/Courses';

const Courses: FC = () => {
  const history = useHistory();

  const handleNavigationToClassroom = useCallback(
    (course: number | string) => {
      history.push(`/logged/classroom/${course}`);
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Header>
          <Link selected to="/logged/courses">
            Cursos
          </Link>

          <Link to="/logged/awards">Prêmios</Link>
          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <TitleContentInfo title="Cursos" big />

        <div className="courses">
          {CoursesTemp.map(course => (
            <CardCourse
              key={course.id}
              onClick={() => handleNavigationToClassroom(course.id)}
            >
              <div className="img">
                <img src={TempImg} alt="temp img" />
              </div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <Button uppercase>Começar</Button>
            </CardCourse>
          ))}
        </div>
      </Content>

      <Footer />
    </Container>
  );
};

export default Courses;
