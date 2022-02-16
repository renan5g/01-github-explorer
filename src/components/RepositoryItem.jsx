import { FiChevronRight } from 'react-icons/fi';

export function RepositoryItem({ repository }) {
  return (
    <a href={repository.html_url} className="c-repository">
      <div className="c-repository__background" />
      <header className="c-repository__header">
        <h3>{repository?.name}</h3>
        <p className="c-repository__description">{repository?.description}</p>
      </header>

      <aside className="c-repository__aside">
        <FiChevronRight className="c-repository__icon" width="1.5rem" />
      </aside>
    </a>
  );
}
