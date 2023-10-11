import { promises as fs } from "fs";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

export interface Clue {
  id: string;
  message: string;
  image?: string;
  dummy?: boolean;
}

interface DummyClueProps {
  item: Clue;
}

interface PageProps {
  searchParams: { clue: string };
}

function DummyClue({ item }: DummyClueProps) {
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

export default async function Page({ searchParams }: PageProps) {
  const file = await fs.readFile(process.cwd() + "/app/clues.json", "utf8");
  const data: [Clue] = JSON.parse(file);

  const clueId: String = searchParams.clue;
  if (!clueId) {
    return notFound();
  }

  const clue: Clue | undefined = data.find((e) => e.id === clueId);

  if (!clue) {
    return notFound();
  }

  if (clue.dummy) {
    return <DummyClue item={clue} />;
  }

  return <div>Show Actual Clue Renderer!</div>;
}
