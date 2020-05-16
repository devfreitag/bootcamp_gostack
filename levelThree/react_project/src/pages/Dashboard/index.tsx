import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/32180411?s=460&u=97739794ff3339ac806059027fd482709fb4cc3d&v=4"
            alt="Alex Freitag"
          />
          <div>
            <strong>alexxfreitag/bootcamp_gostack</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/32180411?s=460&u=97739794ff3339ac806059027fd482709fb4cc3d&v=4"
            alt="Alex Freitag"
          />
          <div>
            <strong>alexxfreitag/bootcamp_gostack</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/32180411?s=460&u=97739794ff3339ac806059027fd482709fb4cc3d&v=4"
            alt="Alex Freitag"
          />
          <div>
            <strong>alexxfreitag/bootcamp_gostack</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
