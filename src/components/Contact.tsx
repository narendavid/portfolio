import React from 'react'
import FormContact from './forms/FormContact'

const Contact = () => {
    return (
        <section className="items-center  bg-lightPrimary dark:bg-darkSecondary" id="contact">
            <div className="max-w-7xl w-5/6 py-20 m-auto">
                <h2 className="title"><span className="text-info">{'<'}</span>Contact <span className="text-info">{'/>'}</span></h2>
                <div className="flex flex-col gap-10 max-w-7xl justify-between">
                    <div className="grid md:grid-cols-2 pt-10">
                        <div>
                            i'll be glad to answer your questions
                        </div>
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