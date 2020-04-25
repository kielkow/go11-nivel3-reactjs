import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositories on Github.</Title>

      <Form>
        <input placeholder="Write here ..." />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/29609868?s=460&u=fe4c9644e5f33964b0d32275305ef9f528976e0f&v=4"
            alt="Matheus Kielkwoski"
          />
          <div>
            <strong>kielkow/go11-reactjs</strong>
            <p>Training ReactJS while funning myself :)</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/29609868?s=460&u=fe4c9644e5f33964b0d32275305ef9f528976e0f&v=4"
            alt="Matheus Kielkwoski"
          />
          <div>
            <strong>kielkow/go11-reactjs</strong>
            <p>Training ReactJS while funning myself :)</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/29609868?s=460&u=fe4c9644e5f33964b0d32275305ef9f528976e0f&v=4"
            alt="Matheus Kielkwoski"
          />
          <div>
            <strong>kielkow/go11-reactjs</strong>
            <p>Training ReactJS while funning myself :)</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
