import Image from "next/image";

import type { Clue } from "../custom";

export interface ActualClueProps {
  item: Clue;
}

export function ActualClue({ item }: ActualClueProps) {
  return (
    <div>
      <p className="text-center pb-24 italic">{item?.message}</p>
      {item?.image ? (
        <Image width={200} height={200} src={item.image} alt="image for clue" />
      ) : (
        <div></div>
      )}
      {item?.secret ? (
        <div className="mt-12 p-8 bg-blue-400">
          <p className="text-sm">Your secret characters are:</p>
          <h4 className="text-3xl">{item.secret}</h4>
          <p className="text-sm">(Keep these safe to be used later)</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
