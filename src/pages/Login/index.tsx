import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { Container, Section, Background } from './styles';

import LogoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import api from '../../services/api';
import Toast from '../../components/Toast';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [toast, setToast] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await api.post('/login', { email, password });
        setError(false);
        setToast('');

        if (response.data) {
          const user = response.data;
          localStorage.setItem('@grupoW', JSON.stringify(user));
          history.push('/');
        } else {
          setError(true);
          setToast(response.data.message);
        }
      } catch (err) {
        setError(true);
        setToast(err.response.data.message);
      }
    },
    [email, password, history],
  );

  return (
    <Container>
      {toast && <Toast close={() => setToast('')}>{toast}</Toast>}
      <Section>
        <form onSubmit={handleSubmit}>
          <img src={LogoImg} alt="Logo GrupoW" />
          <h3>Entre com sua conta</h3>

          <Input
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            isErrored={error}
            icon={FiMail}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            isErrored={error}
            icon={FiLock}
          />

          <button type="submit">Entrar</button>

          <span>Ainda não possui uma conta?</span>
          <span>
            <Link to="/signup">Clique aqui </Link>
            para se cadastrar.
          </span>
        </form>
      </Section>
      <Background />
    </Container>
  );
};

export default Login;
