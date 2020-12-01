import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}
interface LoginRequest {
  email: string;
  password: string;
}
interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}
interface AuthData {
  user: UserProps;
  login(credentials: LoginRequest): Promise<void>;
  logout(): void;
  signup(credentials: SignUpRequest): Promise<void>;
  updateUser(updateUser: UserProps): void;
}

export const AuthContext = createContext({} as AuthData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(() => {
    const temp = localStorage.getItem('grupoW');
    if (temp) {
      return JSON.parse(temp);
    }
    return {} as UserProps;
  });

  const login = useCallback(async ({ email, password }: LoginRequest) => {
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('grupoW', JSON.stringify(response.data));
      setUser(response.data);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('grupoW');
  }, []);

  const signup = useCallback(
    async ({ name, email, password, password_confirm }: SignUpRequest) => {
      try {
        const response = await api.post('/users', {
          name,
          email,
          password,
          password_confirm,
        });
        setUser(response.data);
        localStorage.setItem('@grupoW', JSON.stringify(user));
      } catch (err) {
        throw new Error(err.response.data.message);
      }
    },
    [user],
  );

  const updateUser = useCallback((userUpdate: UserProps) => {
    setUser(userUpdate);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
