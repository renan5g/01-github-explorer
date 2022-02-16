import { useState, useEffect } from 'react';
import { Repository, RepositoryItem } from './RepositoryItem';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/renan5g/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="c-repositories">
      <h1 className="c-repositories__heading">Lista de Repositótios</h1>
      <ul className="c-repositories__list">
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} data={repository} />
        ))}
      </ul>
    </section>
  );
}
