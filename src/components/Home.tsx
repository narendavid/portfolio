import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <section id='home'>
            <div className="w-full min-h-screen pt-20 flex flex-col items-center justify-center lg:flex-row-reverse gap-x-96 bg-gradient-to-b from-lightSecondary to-lightPrimary dark:from-darkPrimary dark:to-darkSecondary">
                <Image
                    src={'/me.png'}
                    width={'280'}
                    height={'280'}
                    alt='me'
                />
                <div className="text-center lg:text-left max-w-sm">
                    <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-darkPrimary dark:from-lightPrimary to-info dark:to-info text-4xl xl:text-5xl">
                        <p>Hi there!,<span className='text-white'>👋</span></p>
                        <p>I'm Naren Luna</p>
                    </h2>
                    <div className="my-5 h-2 w-16 bg-info"></div>
                    <p className="dark:text-gray-100 text-xl">
                        A passionate fullstack developer from Colombia
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home