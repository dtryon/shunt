import { promises as fs } from 'fs';
import React, { ReactPropTypes } from 'react';
import { notFound } from 'next/navigation'

export interface Clue {
  id: string;
  message: string;
  image?: string;
  dummy?: boolean;
}

interface DummyClueProps {
  item: Clue;
}

function DummyClue({ item }: DummyClueProps) {
  return (
    <div>
      <p className="text-center pb-24 italic">{item?.message}</p>
      {
        item?.image ?
          <img width="200px" src={item.image} /> : <div></div>
      }
    </div>
  );
}

export default async function Page({ searchParams }) {
  const file = await fs.readFile(process.cwd() + '/app/clues.json', 'utf8');
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
    return (<DummyClue item={clue} />);
  }

  return (
    <div>Show Actual Clue Renderer!</div>
  )
}
