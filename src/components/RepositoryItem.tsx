import { FiChevronRight } from 'react-icons/fi';

export type Repository = {
  name: string;
  description: string;
  html_url: string;
};

type Props = {
  data: Repository;
};

export function RepositoryItem({ data }: Props) {
  return (
    <a href={data.html_url} className="c-repository">
      <div className="c-repository__background" />
      <header className="c-repository__header">
        <h3>{data.name}</h3>
        <p className="c-repository__description">{data.description}</p>
      </header>

      <aside className="c-repository__aside">
        <FiChevronRight className="c-repository__icon" />
      </aside>
    </a>
  );
}
