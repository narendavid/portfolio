import Image from 'next/image'
import React from 'react'
import { experiences } from '@/common/experiences'
const Experience = () => {

    return (

        <ul className="">
            {
                experiences.map((experience, index) => (
                    <li className="pb-3 sm:pb-4" key={index}>
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <Image
                                    className='w-8 h-8 rounded-full'
                                    src={`/companies/${experience.icon}`}
                                    width={50}
                                    height={50}
                                    alt={experience.company}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-md font-medium text-gray-900 dark:text-white">
                                    {experience.company}
                                </p>
                                <ul className="text-sm text-gray-500 dark:text-gray-300">
                                    {
                                        experience.descriptions.map((description, index) => (
                                            <li key={index}>- {description}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>

    )
}

export default Experience