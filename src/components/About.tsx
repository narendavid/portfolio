"use client"
import Image from 'next/image'
import React from 'react'
import { icons } from '@/common/icons'

const About = () => {
    return (
        <section className="flex items-center justify-center bg-lightPrimary dark:bg-darkSecondary" id="about">
            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl w-5/6 pt-20 pb-20">
                <div className="flex flex-col lg:w-1/2">
                    <h2 className="title text-lg">About<span className="text-info">.</span></h2>
                    <p className="text-lg">
                        Hi there! I am a fullstack developer, with a quick learning capacity and willingness to face different challenges.
                        I consider myself an agile, self-taught, and passionate learner, with good leadership, communication, and teamwork skills.
                    </p>
                </div>
                <div className="flex flex-col lg:w-1/2">
                    <h2 className="title text-lg">Skills<span className="text-info">.</span></h2>
                    <div className="flex flex-wrap">
                        {
                            icons.map((icon: Icon, index: number) => (
                                <Image
                                    style={{ margin: 10 }}
                                    key={index}
                                    src={require(`../assets/icons/skills/${icon.name}.svg`)}
                                    alt='css'
                                    width={50}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About