import React, { useCallback, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Container, Section, Background } from './styles';

import LogoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import api from '../../services/api';
import Toast from '../../components/Toast';
import { AuthContext } from '../../hooks/auth';

const SignUp: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { signup } = useContext(AuthContext);

  const [toast, setToast] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await signup({
          email,
          name,
          password,
          password_confirm: passwordConfirm,
        });
        setError(false);
        setToast('');

        history.push('/');
      } catch (err) {
        setError(true);
        setToast(err.message);
      }
    },
    [email, password, passwordConfirm, history, name, signup],
  );

  return (
    <Container>
      {toast && <Toast close={() => setToast('')}>{toast}</Toast>}
      <Background />
      <Section>
        <form onSubmit={handleSubmit}>
          <img src={LogoImg} alt="Logo GrupoW" />
          <h3>Faça seu cadastro</h3>

          <Input
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            isErrored={error}
            icon={FiUser}
          />

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
          <Input
            name="password_confirm"
            type="password"
            placeholder="Confirmação de Senha"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            isErrored={error}
            icon={FiLock}
          />

          <button type="submit">Cadastrar</button>

          <span>Já possui uma conta?</span>
          <span>
            <Link to="/login">Clique aqui </Link>
            para entrar.
          </span>
        </form>
      </Section>
    </Container>
  );
};

export default SignUp;
