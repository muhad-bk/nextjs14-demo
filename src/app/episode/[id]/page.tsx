import Image from "next/image";
import { fetchEpisodeWithCharacters } from "../../actions";
import CharsList from "@/components/chars-lis";

type Props = {
  params: { id: string };
};

export default async function Episode({ params }: Props) {
  const { characters, name } = await fetchEpisodeWithCharacters(params.id);
  return (
    <div className="p-3 ml-8">
      <h2 className="text-3xl mb-6">{`${characters.length} Characters in episode "${name}"`}</h2>
      <div className="flex flex-wrap  gap-6">
        <CharsList chars={characters} />
      </div>
    </div>
  );
}
