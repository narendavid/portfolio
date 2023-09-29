'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';
interface Props {
    favorite: Favorite;
}

export default function CardWithDecorativeImage({ favorite }: Props) {
    return (

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image className="rounded-t-lg" src={require(`../../assets/favorites/${favorite.image}`)} alt="" />
            </a>
            <div className="max-h-50 p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{favorite.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {favorite.description}
                </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </a>
            </div>
        </div>

    )
}


