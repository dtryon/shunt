import Image from "next/image";

import type { Clue } from "../custom";

export interface DummyClueProps {
  item: Clue;
}

export function DummyClue({ item }: DummyClueProps) {
  return (
    <div>
      <p className="text-center pb-24 italic">{item?.message}</p>
      {item?.image ? (
        <Image width={200} height={200} src={item.image} alt="image for clue" />
      ) : (
        <div></div>
      )}
    </div>
  );
}
