import React, { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';

import LogoImg from '../../assets/logo.png';
import PlaceholderImg from '../../assets/img_placeholder.png';

import { Container, Logo, Content } from './styles';
import api from '../../services/api';

interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const Header: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState<UserProps>(() => {
    const temp = localStorage.getItem('@grupoW');
    if (temp) {
      return JSON.parse(temp);
    }
    return null;
  });

  if (!user) {
    localStorage.removeItem('@grupoW');
    history.push('/login');
  }

  const logout = useCallback(() => {
    localStorage.removeItem('@grupoW');
    history.push('/login');
  }, [history]);

  const handleUploadAvatar = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        if (e.target.files) {
          const data = new FormData();
          data.append('id', user.id);
          data.append('avatar', e.target.files[0]);
          const response = await api.patch('/users/avatar', data);
          localStorage.setItem('@grupoW', JSON.stringify(response.data));
          setUser(response.data);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    [user],
  );

  return (
    <Container>
      <Logo src={LogoImg} alt="Logo GrupoW" />
      <Content>
        <div>
          <label htmlFor="avatar">
            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={handleUploadAvatar}
            />
            <img
              src={
                user && user.avatar
                  ? `http://localhost:3333/files/${user.avatar}`
                  : PlaceholderImg
              }
              alt="Imagem do Usuário"
            />
          </label>
          <div>
            <span>Bem vindo,</span>
            <span>{user && user.name}</span>
          </div>
        </div>
        <FiPower
          onClick={() => {
            logout();
          }}
        />
      </Content>
    </Container>
  );
};

export default Header;
