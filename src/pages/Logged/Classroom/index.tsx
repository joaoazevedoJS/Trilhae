import React, { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiCircle, FiLock } from 'react-icons/fi';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Link from '../../../components/Link';
import Button from '../../../components/Button';

import { Page, Container } from './styles';

interface ParamsProps {
  course: string;
}

const Classroom: FC = () => {
  const params = useParams<ParamsProps>();
  const [opensClass, setOpensClass] = useState([
    {
      open: true,
      finished: false,
    },
    {
      open: false,
      finished: false,
    },
    {
      open: false,
      finished: false,
    },
    {
      open: false,
      finished: false,
    },
  ]);

  const [questions, setQuestions] = useState([false, false, false]);

  const handleOpenNewClass = useCallback(
    (index: number) => {
      opensClass[index] = {
        open: true,
        finished: true,
      };

      if (opensClass.length > index + 1) {
        opensClass[index + 1] = {
          open: true,
          finished: false,
        };
      }

      setOpensClass([...opensClass]);
    },
    [opensClass],
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

  return (
    <Page>
      <Container>
        <Header>
          <Link to="/logged/courses">Cursos</Link>
          <Link to="/logged/awards">Prêmios</Link>
          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <div className="class">
          <h3>Curso {params.course}</h3>

          {opensClass.map((openClass, index) => (
            <button
              key={index}
              className="btn-select"
              type="button"
              onClick={() => openClass.open && handleOpenNewClass(index)}
            >
              Aula {index + 1}
              {openClass.open && (
                <FiCircle className={openClass.finished ? 'finished' : ''} />
              )}
              {!openClass.open && <FiLock />}
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
