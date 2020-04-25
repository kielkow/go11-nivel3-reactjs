import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  fullname: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);

    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositories on Github.</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Write here ..."
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.fullname} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.fullname}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
