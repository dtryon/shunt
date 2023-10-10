import { promises as fs } from 'fs';

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/app/no-clue.json', 'utf8');
    const data = JSON.parse(file);

    let x = Math.floor((Math.random() * 20) + 1);
    const item = data[x];
    console.log(item);

    return (
        <div>
            <p className="text-center pb-24 italic">
                {item.message}
            </p>
            {/* <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Get a prize?
        </h5>
      </a> */}
        </div>
    );
}