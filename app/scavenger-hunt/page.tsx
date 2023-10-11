import { promises as fs } from "fs";
import React from "react";
import { notFound } from "next/navigation";

import { DummyClue } from "./DummyClue";
import { ActualClue } from "./ActualClue";

import type { Clue } from "../custom";

interface PageProps {
  searchParams: { clue: string };
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

  return <ActualClue item={clue} />;
}
