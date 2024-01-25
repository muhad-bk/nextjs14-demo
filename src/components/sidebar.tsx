import { fetchEpisodes } from "@/app/actions";
import Link from "next/link";
import LoadMoreEpic from "./load-more-epic";

export default async function Sidebar() {
  const episodes = await fetchEpisodes(1);
  return (
    <ul className="flex flex-col pb-3">
      {episodes.map(({ id, name }) => (
        <li className="btn btn-outline m-2 text-xl h-auto" key={id}>
          <Link href={`/episode/${id}`}>{name}</Link>
        </li>
      ))}
      <LoadMoreEpic />
    </ul>
  );
}
