import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiCircle, FiLock } from 'react-icons/fi';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Link from '../../../components/Link';
import Button from '../../../components/Button';

import { Page, Container } from './styles';

import Courses from '../../../temp/Courses';

interface ParamsProps {
  course: string;
}

interface LessonProps {
  id: number;
  title: string;
  lessons: Array<{
    module: number;
    description: string;
    open: boolean;
    finished: boolean;
  }>;
}

const Classroom: FC = () => {
  const params = useParams<ParamsProps>();

  const [lesson, setLesson] = useState<LessonProps | null>();
  const [questions, setQuestions] = useState([false, false, false]);

  useEffect(() => {
    const getLesson = Courses.filter(course => {
      return course.id === Number(params.course);
    })[0];

    setLesson(getLesson);
  }, [params.course]);

  const handleOpenNewClass = useCallback(
    (module: number) => {
      if (lesson) {
        lesson.lessons[module - 1] = {
          ...lesson.lessons[module - 1],
          open: true,
          finished: true,
        };

        if (lesson.lessons.length > module) {
          lesson.lessons[module] = {
            ...lesson.lessons[module],
            open: true,
            finished: false,
          };
        }

        setLesson({ ...lesson });
      }
    },
    [lesson],
  );

  const handleSelectQuestion = useCallback(
    (index: number) => {
      const mapQuestions = questions.map((_, indexQ) => {
        return indexQ === index;
      });

      setQuestions(mapQuestions);
    },
    [questions],
  );

  if (!lesson) {
    return <h1>Lição não encontrada!</h1>;
  }

  return (
    <Page>
      <Container>
        <Header>
          <Link to="/logged/courses">Cursos</Link>
          <Link to="/logged/awards">Prêmios</Link>
          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <div className="class">
          <h3>{lesson.title}</h3>

          {lesson?.lessons.map(lsn => (
            <button
              key={lsn.module}
              className="btn-select"
              type="button"
              onClick={() => lsn.open && handleOpenNewClass(lsn.module)}
            >
              <span>
                Módulo {lsn.module} - {lsn.description}
              </span>

              {lsn.open && (
                <FiCircle className={lsn.finished ? 'finished' : ''} />
              )}
              {!lsn.open && <FiLock />}
            </button>
          ))}
        </div>

        <div className="class-content">
          <iframe
            title="class"
            width="100%"
            height="350px"
            src="https://www.youtube.com/embed/Uma65YCKxME"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <h3>
            E aí, gostou? Responda a pergunta a seguir para desbloquear a
            próxima etapa do seu curso.
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut consectetur adipiscing elit?
          </p>

          {questions.map((question, index) => (
            <button
              className="btn-select"
              key={index}
              type="button"
              onClick={() => handleSelectQuestion(index)}
            >
              <FiCircle className={question ? 'finished' : ''} />
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </button>
          ))}

          <Button transparent blue>
            Enviar
          </Button>
        </div>
      </Container>

      <Footer />
    </Page>
  );
};

export default Classroom;
