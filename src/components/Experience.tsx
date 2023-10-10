import Image from 'next/image'
import React from 'react'
import { experiences } from '@/common/experiences'
const Experience = () => {

    return (

        <ul className="">
            {
                experiences.map((experience, index) => (
                    <li className="pb-3 sm:pb-4" key={index}>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image
                                    className='w-8 h-8 rounded-full'
                                    src={`/${experience.icon}`}
                                    width={50}
                                    height={50}
                                    alt={experience.company}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {experience.company}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    <ul>
                                        {
                                            experience.descriptions.map((description, index) => (
                                                <li>{description}</li>
                                            ))
                                        }
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>

    )
}

export default Experience