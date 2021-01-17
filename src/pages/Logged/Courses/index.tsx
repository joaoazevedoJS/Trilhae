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

const Courses: FC = () => {
  const history = useHistory();

  const handleNavigationToClassroom = useCallback(
    (course: string) => {
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
          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Comunicação Eficaz</h3>

            <p>
              Uma das coisas mais importantes e buscadas dentro das organizações
              empresariais é uma comunicação eficaz. Diferente do que muitos
              acreditam, a comunicação não está ligada apenas ao fato de saber
              dizer algo a outras pessoas. Ela consiste em fazer com que o outro
              lado – no caso, o receptor – entenda aquilo que é dito, sem que
              haja qualquer tipo de má interpretação.
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>

          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Pensamento Criativo</h3>

            <p>
              O pensamento criativo é a capacidade de criar novas ideias com
              determinado valor. Isso não significa que a criatividade consiste
              em pensar de maneira diferente, uma vez que fabricar portas
              hexagonais é algo diferente do habitual, mas não deixa de ser uma
              proposta criativa porque proporciona nenhum valor
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>

          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Resiliência</h3>

            <p>
              O que você faz quando os problemas parecem te perseguir? Você é o
              tipo que diante de um contratempo chora, foge ou enfrenta? Saiba
              que existem pessoas que além de enfrentar os problemas, ainda são
              capazes de se beneficiarem com eles, aprender e crescer
              emocionalmente. Elas possuem razões para nunca desistir de suas
              metas e objetivos. Pessoas com essas capacidades são consideradas
              pessoas resilientes.
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>

          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Empatia</h3>

            <p>
              O conceito de empatia é, em suma, a capacidade de se identificar
              com outra pessoa a fim de compreender o que ela pensa e sente;
              trata-se de compreensão emocional. Para adentrar o terreno
              empático, é preciso antes aceitar as próprias vulnerabilidades e
              admitir que ninguém que encontrarmos, por melhor que seja, será
              perfeito.
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>

          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Liderança</h3>

            <p>
              Liderança é a arte de motivar pessoas a agir para alcançar
              determinado objetivo. Em um ambiente de trabalho, liderança pode
              significar a capacidade de conduzir equipe e colegas para atender
              às necessidades da empresa.
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>

          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Ética no trabalho</h3>

            <p>
              A ética no trabalho é o conjunto de valores, normas e atitudes que
              conduzem o comportamento dos profissionais dentro de uma empresa.
              É por meio dela que um profissional apresenta comportamentos
              adequados ao ambiente de trabalho, sendo guiado por princípios que
              impactam diretamente a convivência em grupo.
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>

          <CardCourse onClick={() => handleNavigationToClassroom('1')}>
            <div className="img">
              <img src={TempImg} alt="temp img" />
            </div>

            <h3>Oratória</h3>

            <p>
              Oratória é a arte de falar em público de forma estruturada e
              deliberada, com a intenção de informar, influenciar, ou entreter
              os ouvintes. A oratória refere-se ao conjunto de regras e técnicas
              adequadas para produzir e apresentar um discurso e apurar as
              qualidades pessoais do orador.
            </p>

            <Button uppercase>Começar</Button>
          </CardCourse>
        </div>
      </Content>

      <Footer />
    </Container>
  );
};

export default Courses;
