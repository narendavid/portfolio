"use client"
import Image from 'next/image'
import React from 'react'
import { icons } from '@/common/icons'
import Experience from './Experience'

const About = () => {
    return (
        <section className="items-center justify-center bg-lightPrimary dark:bg-darkSecondary" id="about">
            <div className="max-w-7xl w-5/6 py-20 m-auto">
            <h2 className="title"><span className="text-info">{'<'}</span>About <span className="text-info">{'/>'}</span></h2>
                <p className="text-lg pt-5">
                    Hi there! I am a fullstack developer, with a quick learning capacity and willingness to face different challenges.
                    I consider myself an agile, self-taught, and passionate learner, with good leadership, communication, and teamwork skills.
                </p>
                <div className="flex flex-col gap-10 lg:flex-row pt-10">
                    <div className='lg:w-1/3'>
                        <h2 className="subtitle py-5">Experience<span className="text-info">.</span></h2>
                        <Experience />
                    </div>
                    <div className='lg:w-2/3'>
                        <h2 className="subtitle py-5">Skills<span className="text-info">.</span></h2>
                        <div className="flex flex-wrap">
                            {
                                icons.map((icon: Icon, index: number) => (
                                    <Image
                                        style={{ margin: 10 }}
                                        key={index}
                                        src={require(`../assets/icons/skills/${icon.name}.svg`)}
                                        alt={icon.name}
                                        width={50}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About