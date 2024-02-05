import Image from "next/image";
import { fetchCharacterWithEpisodes } from "../../actions";
import EpicList from "@/components/episode-list";

type Props = {
  params: { id: string };
};

export default async function Episode({ params }: Props) {
  const { name, episode, image } = await fetchCharacterWithEpisodes(params.id);
  return (
    <>
      <div className="basis-1/4  gap-6 p-3">
        <div className="card w-96 glass">
          <figure>
            <Image src={image} alt={name} width={384} height={384} />
          </figure>
          <h2 className="text-center text-5xl">{name}</h2>
        </div>
      </div>
      <div className="basis-3/4">
        <h2 className="text-center text-3xl underline p-4">Episodes</h2>
        <ul className="flex flex-wrap">
          <EpicList episodes={episode} />
        </ul>
      </div>
    </>
  );
}
