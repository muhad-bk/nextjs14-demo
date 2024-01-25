import { fetchEpisodes } from "@/app/actions";
import LoadMoreEpic from "./load-more-epic";
import EpicList from "./episode-list";

export default async function Sidebar() {
  const episodes = await fetchEpisodes(1);
  return (
    <ul className="flex flex-col pb-3">
      <EpicList episodes={episodes}/>
      <LoadMoreEpic />
    </ul>
  );
}
