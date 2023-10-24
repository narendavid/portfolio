'use client'
import Image from 'next/image'
import React from 'react'
import Code from '../icons/Code'
import Link from 'next/link'

interface Props {
    work: Work
}

const CardWork = ({ work }: Props) => {
    return (
        <div className="max-w-sm bg-lightPrimary rounded-lg shadow dark:bg-darkPrimary shadow-2xl">
            <Image
                className="rounded-t-lg"
                src={require(`../../assets/images/works/${work.image}`)}
                alt={work.title}
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 title">{work.title}</h5>
                <div className="my-5 h-1 w-full bg-info"></div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{work.description}</p>
                <div className='flex justify-around'>
                    <Link href={work.repo} target='_blank' className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-info rounded-lg hover:bg-darkSecondary dark:bg-darkSecondary justify-between dark:hover:bg-info">
                        Code
                    </Link>
                    <Link href={work.url} target='_blank' className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-info rounded-lg hover:bg-darkSecondary dark:bg-darkSecondary inline-flex dark:hover:bg-info">
                        Live
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CardWork