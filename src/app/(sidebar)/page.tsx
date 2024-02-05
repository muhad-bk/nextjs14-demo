import { fetchHomeCharacters } from "../actions";
import LoadMoreChars from "@/components/load-more-char";
import CharsList from "@/components/chars-lis";

export default async function Home() {
  const chars = await fetchHomeCharacters();
  return (
    <div className="flex flex-wrap p-3 ml-8 gap-6">
      <CharsList chars={chars}/>
      <LoadMoreChars />
    </div>
  );
}
