import React, { FC, useCallback, useState } from 'react';
import Header from '../../../components/Header';

import TitleContentInfo from '../../../components/TitleContentInfo';
import Footer from '../../../components/Footer';
import Link from '../../../components/Link';

import TempImg from '../../../assets/images/temp/tempImg-2.jpg';

import { Page, CardAward, Container } from './styles';
import Button from '../../../components/Button';
import MessagePointModal from '../../../components/MessagePointModal';

const Awards: FC = () => {
  const [openMessageModal, setOpenMessageModal] = useState({
    open: false,
    error: false,
  });

  const handleExchangePoint = useCallback((point: string) => {
    setOpenMessageModal({ open: true, error: point === '0' });
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
          {['1', '1', '0', '1', '1', '0', '1'].map((point, index) => (
            <CardAward key={index} onClick={() => handleExchangePoint(point)}>
              <img src={TempImg} alt="Award" />

              <div>
                <h3>Lorem ipsum dolor</h3>

                <p>100 pontos</p>

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
