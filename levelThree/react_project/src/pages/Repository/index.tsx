import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Respository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <h1>Respository:{params.repository}</h1>;
};

export default Respository;
