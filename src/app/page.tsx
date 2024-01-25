import Image from "next/image";
import { fetchHomeCharacters } from "./actions";

export default async function Home() {
  const epics = await fetchHomeCharacters();
  return (
    <div className="flex flex-wrap p-3 ml-8 gap-6">
      {epics.map(({ id, name, image }) => (
        <div key={id} className="card w-40 glass">
          <figure>
            <Image src={image} alt={name} width={170} height={170} />
          </figure>
          <h2 className="text-center text-xl">{name}</h2>
        </div>
      ))}
    </div>
  );
}
