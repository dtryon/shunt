import QRCode from "react-qr-code";
import Image from "next/image";
import { getClues } from "../clues";

import type { Clue } from "../custom";

interface PageProps {
  searchParams: { hostname: string };
}

export default async function Page({ searchParams }: PageProps) {
  const data: [Clue] = await getClues();

  return (
    <div className="bg-white w-full">
      {data.map((clue) => {
        const clueUrl = `http://${searchParams.hostname}/scavenger-hunt?clue=${clue.id}`;

        return (
          <div className="m-[30px]" key={clue.id}>
            <div className="flex flex-col items-center h-auto w-full m-auto max-w-[300px] p-[30px] mb-[30px] border-dotted border-2 border-gray-300">
              <QRCode
                size={200}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%",
                  border: "5px solid rgb(191, 219, 254)",
                }}
                value={clueUrl}
                viewBox={`0 0 200 200`}
              />
              <Image
                width={50}
                height={50}
                src="/question-mark.jpeg"
                alt="question mark"
              />
            </div>
            <p className="text-sm">Day: {clue.day}</p>
            <p className="text-sm">Clue Number: {clue.number}</p>
            <a className="text-sm" href={clueUrl}>
              {clueUrl}
            </a>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
