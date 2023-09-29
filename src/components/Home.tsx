import React from 'react'

const Home = () => {
    return (
        <section id='home'>
            <div className="min-h-screen pt-20 flex flex-col items-center justify-center m-auto lg:flex-row-reverse lg:justify-evenly dark:bg-darkPrimary">
                <img src="/me.png" alt="me" className='w-320' />
                <div className="text-center lg:text-left">
                    <p className="dark:text-gray-100 text-xl md:text-2xl xl:text-3xl">
                        Hi there!, I'm Naren Luna 👋
                    </p>
                    <h2 className="text-2xl scale-110 sm:scale-100 sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl xl:text-5xl">
                        Frontend Developer
                    </h2>
                    <p className="dark:text-gray-100 text-xl md:text-2xl xl:text-3xl">
                        That loves creating web apps.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home