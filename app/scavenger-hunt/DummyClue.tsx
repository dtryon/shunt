import Image from "next/image";

import type { Clue } from "../custom";

export interface DummyClueProps {
  item: Clue;
}

export function DummyClue({ item }: DummyClueProps) {
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <Image width={170} height={170} src="/nope.jpg" alt="is it a clue?" />
      <h2 className="text-center p-[24px]">
        Unfortunately, this is not a clue for the scavenger hunt.
      </h2>
      <p className="text-center p-[24px] italic">{item?.message}</p>
      {item?.image ? (
        <Image width={200} height={200} src={item.image} alt="image for clue" />
      ) : (
        <div></div>
      )}
    </div>
  );
}
