import Image from "next/image";

import type { Clue } from "../custom";

export interface ActualClueProps {
  item: Clue;
}

export function ActualClue({ item }: ActualClueProps) {
  return (
    <div>
      <div className="mt-[12px] mb-[12px] p-2 bg-blue-100 rounded-md">
        <p className="text-center text-base border-1 p-[14px]">{item?.fact}</p>
      </div>
      <div className="flex flex-col items-center mt-[20px]">
        <Image width={170} height={170} src="/clue.jpg" alt="is it a clue?" />
        <p className="text-center p-[34px] italic">{item?.message}</p>
        {item?.image ? (
          <Image
            width={400}
            height={400}
            src={item.image}
            alt="image for clue"
          />
        ) : (
          <div></div>
        )}
      </div>
      {item?.secret ? (
        <div className="mt-[12px] p-8 bg-blue-400 rounded-md">
          <p className="text-sm">Your secret letters are:</p>
          <h4 className="text-3xl">&quot;{item.secret}&quot;</h4>
          <p className="text-sm">(Keep these safe to be used later)</p>
        </div>
      ) : (
        <div></div>
      )}
      {item?.reminder ? (
        <p className="m-[18px] text-base">*{item?.reminder}</p>
      ) : (
        <p></p>
      )}
      {item?.extra ? <p className="text-base">{item?.extra}</p> : <p></p>}
    </div>
  );
}
