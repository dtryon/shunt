import { promises as fs } from "fs";
import React from "react";
import { notFound } from "next/navigation";
import { getClues } from "../clues";

import { DummyClue } from "./DummyClue";
import { ActualClue } from "./ActualClue";

import type { Clue } from "../custom";

interface PageProps {
  searchParams: { clue: string };
}

export default async function Page({ searchParams }: PageProps) {
  const data: [Clue] = await getClues();

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

  return <ActualClue item={clue} />;
}
