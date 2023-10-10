import { promises as fs } from "fs";

interface NoClue {
  id: string;
  message: string;
}

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/no-clue.json", "utf8");
  const data = JSON.parse(file);

  let x = Math.floor(Math.random() * 20 + 1);
  const item = data.find((d: NoClue) => d.id === x.toString());

  return (
    <div>
      <p className="text-center pb-24 italic">{item?.message}</p>
    </div>
  );
}
