import { RepositoryItem } from './RepositoryItem';

const repo = {
  name: 'ignite-github-explorer',
  description: '🔥 Ignite ReactJs',
  link: 'https://github.com/renan5g/ignite-github-explorer',
};

export function RepositoryList() {
  return (
    <section className="c-repositories">
      <h1 className="c-repositories__heading">Lista de Repositótios</h1>

      <ul className="c-repositories__list">
        <RepositoryItem repository={repo} />
        <RepositoryItem repository={repo} />
        <RepositoryItem repository={repo} />
        <RepositoryItem repository={repo} />
      </ul>
    </section>
  );
}
