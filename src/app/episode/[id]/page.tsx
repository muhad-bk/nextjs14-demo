import Image from "next/image";
import { fetchEpisodeWithCharacters } from "../../actions";

type Props = {
  params: { id: string };
};

export default async function Episode({ params }: Props) {
  const { characters, name } = await fetchEpisodeWithCharacters(params.id);
  return (
    <div className="p-3 ml-8">
      <h2 className="text-3xl mb-6">{`${characters.length} Characters in episode "${name}"`}</h2>
      <div className="flex flex-wrap  gap-6">
        {characters.map(({ id, name, image }) => (
          <div key={id} className="card w-40 glass">
            <figure>
              <Image src={image} alt={name} width={170} height={170} />
            </figure>
            <h2 className="text-center text-xl">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
