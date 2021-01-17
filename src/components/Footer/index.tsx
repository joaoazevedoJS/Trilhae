import React, { FC, HtmlHTMLAttributes } from 'react';
import { AiFillCopyrightCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import { Container } from './styles';

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Footer: FC<Props> = ({ ...rest }) => (
  <Container {...rest}>
    <div className="content">
      <div>
        <p>
          <AiFillCopyrightCircle />
          2020
        </p>

        <p>Trilhaê</p>
      </div>

      <div>
        <AiOutlineWhatsApp />
        <FiFacebook />
        <FiInstagram />
        <FiTwitter />
      </div>
    </div>
  </Container>
);

export default Footer;
