import React, {
  ChangeEvent,
  FC,
  FormEvent,
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Select from '../../components/Select';

import ibgeApi from '../../services/ibgeApi';

import { Page, Background, Container } from './styles';

interface SelectProps {
  value: string;
  key: string;
}

interface IBGEUFsProps {
  sigla: string;
}

interface IBGECitiesProps {
  nome: string;
}

const Signup: FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const [ufs, setUfs] = useState<SelectProps[]>([]);
  const [cities, setCities] = useState<SelectProps[]>([]);

  useEffect(() => {
    ibgeApi.get<IBGEUFsProps[]>('/localidades/estados').then(response => {
      const data = response.data.map(uf => {
        return {
          value: uf.sigla,
          key: uf.sigla,
        };
      });

      setUfs(data);
    });
  }, []);

  const handleGetCities = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const uf = event.target.value;

      ibgeApi
        .get<IBGECitiesProps[]>(`/localidades/estados/${uf}/municipios`)
        .then(response => {
          const data = response.data.map(city => {
            return {
              value: city.nome,
              key: city.nome,
            };
          });

          setCities(data);
        });
    },
    [],
  );

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signin');
  }, [history]);

  const handleSubmit = useCallback(
    data => {
      console.log(data);

      history.push('/sucess/signup');
    },
    [history],
  );

  return (
    <Page>
      <Container>
        <Header goBackHome>
          <Button blue onClick={handleNavigateToSignin} transparent uppercase>
            Acessar conta
          </Button>
        </Header>

        <h1>
          Preencha o formulário para fazer parte e vamos juntos abrir novas
          trilhas para o seu futuro profissional.
        </h1>

        <div className="form-container">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome: " />
            <Input name="email" placeholder="E-mail: " />
            <Input name="cpf" placeholder="CPF: " />
            <Input name="phone" placeholder="Telefone: " />
            <Input name="school" placeholder="Escola que estuda: " />

            <div className="input-group">
              <Select
                options={ufs}
                name="uf"
                placeholder="Estado:"
                onChange={handleGetCities}
              />

              <Select options={cities} name="city" placeholder="Cidade:" />
            </div>

            <Input
              name="password"
              type="password"
              placeholder="Crie uma senha:"
            />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Repita a senha:"
            />

            <Button uppercase>Enviar</Button>
          </Form>

          <Background />
        </div>
      </Container>

      <Footer />
    </Page>
  );
};

export default Signup;
