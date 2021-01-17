import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';

import Header from '../../../components/Header';
import TitleContentInfo from '../../../components/TitleContentInfo';
import Link from '../../../components/Link';

import { Background, Component, Footer } from './styles';

const Helcome: FC = () => {
  const history = useHistory();

  const handleNavigationToCourses = useCallback(() => {
    history.push('/logged/courses');
  }, [history]);

  return (
    <>
      <Component>
        <Header>
          <Link to="/logged/courses">Cursos</Link>
          <Link to="/logged/awards">Prêmios</Link>
          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <div className="tilte-content">
          <TitleContentInfo title="Boas Vindas" big>
            <p>
              Olá estudante. Aqui você encontra o conteúdo exclusivo da Trilhaê
              que vai te ajudar no seu futuro profissional e pessoal.
            </p>

            <p>
              Comece escolhendo o curso desejado e assista ao vídeo atentamente.
              Depois você só precisa responder o questionário e enviá-lo. Isso
              fará com que o vídeo seja marcado como assistido e a próxima etapa
              do seu curso seja desbloqueada!
              <br />
              <strong>Boa sorte e bons estudos.</strong>
            </p>
          </TitleContentInfo>

          <Button onClick={handleNavigationToCourses} uppercase>
            Começar agora
          </Button>
        </div>

        <Background />
      </Component>

      <Footer />
    </>
  );
};

export default Helcome;
