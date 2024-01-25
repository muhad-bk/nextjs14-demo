"use client";

import { useParams, useRouter } from "next/navigation";

const EpicList = ({
  episodes,
}: {
  episodes: [{ name: string; id: number }];
}) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  return episodes.map(({ id, name }, i) => (
    <li
      id={`${id}`}
      className={`btn ${
        id.toString() === params.id ? "btn-neutral" : "btn-outline"
      } m-2 text-xl h-auto `}
      key={id}
      onClick={() => {
        if (params.id === id.toString()) router.push(`/`);
        else router.push(`/episode/${id}`);
      }}
    >
      {name}
    </li>
  ));
};

export default EpicList;
