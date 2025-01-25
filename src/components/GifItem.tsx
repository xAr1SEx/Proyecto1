import { FC } from "react";

interface Props {
  title: string;
  url: string;
  id: string;
}

export const GifItem: FC<Props> = ({ title, url, id }) => {
  return (
    <div className="card" key={`${id}_${title}`}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
