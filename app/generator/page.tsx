import QRCode from "react-qr-code";
import { getClues } from "../clues";

import type { Clue } from "../custom";

interface PageProps {
  searchParams: { hostname: string };
}

export default async function Page({ searchParams }: PageProps) {
  const data: [Clue] = await getClues();

  return (
    <div className="bg-white">
      {data.map((clue) => {
        const clueUrl = `http://${searchParams.hostname}/scavenger-hunt?clue=${clue.id}`;

        return (
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 200,
              width: "100%",
            }}
          >
            <a href={clueUrl}>link</a>
            <QRCode
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={clueUrl}
              viewBox={`0 0 200 200`}
            />
            <h2>?</h2>
          </div>
        );
      })}
    </div>
  );
}
