import { promises as fs } from 'fs';
import React from 'react';

export interface Clue {
    id: string;
    message: string;
    image: string;
}

export default async function Page({ searchParams }) {
    const file = await fs.readFile(process.cwd() + '/app/no-clue.json', 'utf8');
    const data: [Clue] = JSON.parse(file);

    const clueId: String = searchParams.clue;
    console.log(clueId);
    let index = Math.floor((Math.random() * 20) + 1);
    if (clueId) {
        const match = data.findIndex((e) => e.id === clueId);
        if (match >= 0) {
            index = match;
        }
    }

    const item = data[index];

    return (
        <div>
            <p className="text-center pb-24 italic">
                {item.message}
            </p>
            {
                item.image ?
                    <img width="200px" src={item.image} /> : <div></div>
            }
        </div>
    );
}