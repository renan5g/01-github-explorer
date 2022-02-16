import { FiChevronRight } from 'react-icons/fi';

export function RepositoryItem({ repository }) {
  return (
    <a href={repository.link ?? '#'} className="c-repository">
      <header className="c-repository__header">
        <div className="c-repository__background" />
        <h3>{repository?.name ?? 'default'}</h3>
      </header>

      <main className="c-repository__main">
        <p className="c-repository__description">
          {repository?.description ?? 'Forms in React'}
        </p>

        <FiChevronRight className="c-repository__icon" width="1.5rem" />
      </main>
    </a>
  );
}
