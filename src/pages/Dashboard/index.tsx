import React, { useCallback, useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { setTextRange } from 'typescript';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, NewPost, Post } from './styles';

import PlaceholderUser from '../../assets/img_placeholder.png';
import api from '../../services/api';
import Toast from '../../components/Toast';

interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
}
interface Post {
  user: UserProps;
  text: string;
  id: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [text, setText] = useState('');
  const [toast, setToast] = useState('');
  const [posts, setPosts] = useState([] as Post[]);
  const [user] = useState<UserProps>(() => {
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

  useEffect(() => {
    api.get('/post').then((response) => {
      setPosts([...response.data].reverse());
    });
  }, []);

  const handleSubmitPost = useCallback(async () => {
    try {
      setToast('');
      const { data } = await api.post('/post', { id: user.id, text });

      setPosts([data, ...posts]);
      setText('');
    } catch (err) {
      setToast(err.response.data.message);
    }
  }, [text, posts, user]);

  return (
    <>
      <Header />

      <Container>
        {toast && <Toast close={() => setToast('')}>{toast}</Toast>}
        <NewPost>
          <h2>No que você esta pensando?</h2>
          <div>
            <textarea
              placeholder="Digite sua mensagem..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <span />
          </div>
          <button
            type="button"
            onClick={() => {
              handleSubmitPost();
            }}
          >
            Postar
          </button>
        </NewPost>

        {posts.map((p) => (
          <Post key={p.id}>
            <img
              src={
                p.user.avatar
                  ? `http://localhost:3333/files/${p.user.avatar}`
                  : PlaceholderUser
              }
              alt="Imagem do Usuário"
            />
            <div>
              <h4>{p.user.name}</h4>
              <p>{p.text}</p>
              <span>
                <FiClock color="#ff9000" />
                {p.created_at.split(' ')[1]}
              </span>
            </div>
          </Post>
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
