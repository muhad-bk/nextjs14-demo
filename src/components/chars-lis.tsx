import Image from "next/image";

const CharsList = ({
  chars,
}: {
  chars: [{ name: string; id: number; image: string }];
}) =>
  chars.map(({ id, name, image }) => (
    <div key={id} className="card w-40 glass">
      <figure>
        <Image src={image} alt={name} width={170} height={170} />
      </figure>
      <h2 className="text-center text-xl">{name}</h2>
    </div>
  ));

export default CharsList;
