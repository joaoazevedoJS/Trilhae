import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Select from '../../components/Select';

import ibgeApi from '../../services/ibgeApi';

import { Content } from '../../assets/styles/Content';
import { Background, Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

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
    async data => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um e-mail válido'),
          cpf: Yup.string().required('CPF obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          school: Yup.string(),
          uf: Yup.string()
            .length(2, 'UF obrigatória')
            .required('Estado obrigatória'),
          city: Yup.string()
            .min(2, 'Cidade obrigatória')
            .required('Cidade obrigatória'),
          password: Yup.string()
            .min(8, 'Minimo de 8 digitos')
            .required('Senha obrigatório')
            .oneOf(
              [Yup.ref('confirmPassword'), null],
              'Senha não se correspondem',
            ),
          confirmPassword: Yup.string()
            .min(8, 'Minimo de 8 digitos')
            .required('Senha obrigatório')
            .oneOf([Yup.ref('password'), null], 'Senha não se correspondem'),
        });

        await schema.validate(data, { abortEarly: false });

        history.push('/sucess/signup');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
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
      </Content>

      <Footer />
    </Container>
  );
};

export default Signup;
