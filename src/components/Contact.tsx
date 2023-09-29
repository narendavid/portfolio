import React from 'react'
import FormContact from './forms/FormContact'

const Contact = () => {
    return (
        <section className="bg-lightPrimary flex items-center justify-center dark:bg-darkSecondary" id="contact">
            <div className="flex flex-col gap-12 max-w-7xl w-5/6 pt-20 pb-20">
                <h2 className="title text-lg md:text-center">Contact<span className="text-info">.</span></h2>
                <div className="grid md:grid-cols-2">
                    <div>
                        i'll be glad to answer your questions
                    </div>
                    <div>
                        <div className='max-w-md bg-lightPrimary dark:bg-darkPrimary p-10 rounded-lg shadow-lg'>
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact