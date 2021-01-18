import React, { FC, useCallback, useState } from 'react';
import Header from '../../../components/Header';

import TitleContentInfo from '../../../components/TitleContentInfo';
import Footer from '../../../components/Footer';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import MessagePointModal from '../../../components/MessagePointModal';

import TempImg from '../../../assets/images/temp/tempImg-2.jpg';

import { Page, CardAward, Container } from './styles';

import AwardsTempData from '../../../temp/Awards';

const Awards: FC = () => {
  const [openMessageModal, setOpenMessageModal] = useState({
    open: false,
    error: false,
  });

  const handleExchangePoint = useCallback((point: number) => {
    setOpenMessageModal({ open: true, error: point === 5 });
  }, []);

  return (
    <Page>
      <Container>
        <Header>
          <Link to="/logged/courses">Cursos</Link>

          <Link selected to="/logged/awards">
            Prêmios
          </Link>

          <Link to="/logged/points">Pontuação</Link>
        </Header>

        <TitleContentInfo title="Prêmios" big />

        <div className="points">
          {AwardsTempData.map(point => (
            <CardAward
              key={point.id}
              onClick={() => handleExchangePoint(point.id)}
            >
              <img src={TempImg} alt="Award" />

              <div>
                <h3>{point.description}</h3>

                <p>{point.points} pontos</p>

                <Button uppercase>Trocar</Button>
              </div>
            </CardAward>
          ))}
        </div>
      </Container>

      {openMessageModal.open && (
        <MessagePointModal
          setState={setOpenMessageModal}
          isErrored={openMessageModal.error}
        />
      )}

      <Footer />
    </Page>
  );
};

export default Awards;
