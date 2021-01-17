import React, { Dispatch, FC, SetStateAction, useCallback } from 'react';

import CheckIcon from '../../assets/icons/check-popup.png';
import WarningIcon from '../../assets/icons/warning-popup.png';

import { Background, Container } from './styles';

interface Props {
  setState: Dispatch<
    SetStateAction<{
      open: boolean;
      error: boolean;
    }>
  >;
  isErrored?: boolean;
}

const MessagePointModal: FC<Props> = ({ setState, isErrored }) => {
  const handleSetState = useCallback(() => {
    setState({
      open: false,
      error: false,
    });
  }, [setState]);

  return (
    <Container>
      <Background onClick={handleSetState} />

      <div className="content">
        <img src={isErrored ? WarningIcon : CheckIcon} alt="Icon popup" />

        <h3>{isErrored ? 'Que pena!' : 'Sucesso!'}</h3>

        {!isErrored && (
          <p>
            Seus pontos foram trocados pelo prêmio escolhido. Mas fique atento
            pois o saldo da sua pontuação diminuiu.
          </p>
        )}

        {isErrored && (
          <p>
            Infelizmente você ainda não possui pontos suficiente para trocá-los
            por prêmios. Mas não desanime! <br />
            Cumpra mais algumas etapas do seu curso que logo poderá resgatar seu
            prêmio.
          </p>
        )}
      </div>
    </Container>
  );
};

export default MessagePointModal;
