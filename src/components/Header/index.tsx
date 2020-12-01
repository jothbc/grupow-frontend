import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';

import LogoImg from '../../assets/logo.png';
import PlaceholderImg from '../../assets/img_placeholder.png';

import { Container, Logo, Content } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../hooks/auth';

const Header: React.FC = () => {
  const history = useHistory();

  const { user, updateUser, logout: logoutAuth } = useContext(AuthContext);

  const logout = useCallback(() => {
    logoutAuth();
    history.push('/login');
  }, [history, logoutAuth]);

  const handleUploadAvatar = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        if (e.target.files) {
          const data = new FormData();
          data.append('id', user.id);
          data.append('avatar', e.target.files[0]);
          const response = await api.patch('/users/avatar', data);
          updateUser(response.data);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    [user, updateUser],
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
                  ? `${process.env.REACT_APP_HOST_API}/files/${user.avatar}`
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
