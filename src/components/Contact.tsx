import React from 'react'
import FormContact from './forms/FormContact'
import Github from './icons/Github'
import Mail from './icons/Mail'
import Linkedin from './icons/Linkedin'
import Location from './icons/Location'

const Contact = () => {
    return (
        <section className="items-center  bg-lightPrimary dark:bg-darkSecondary" id="contact">
            <div className="max-w-7xl w-5/6 py-20 m-auto">
                <h2 className="title"><span className="text-info">{'<'}</span>Contact <span className="text-info">{'/>'}</span></h2>
                <div className="flex flex-col gap-10 justify-between">
                    <div className="flex flex-col-reverse md:flex-row pt-10">
                        <div className='m-auto pt-20 my-5 md:my-0'>
                            <p className='subtitle'>I'll be glad to answer your questions</p>
                            <div className='flex flex-row my-2'>
                                <Github />
                                <p className='ml-2'>narendavid</p>
                            </div>
                            <div className='flex flex-row my-2'>
                                <Mail />
                                <p className='ml-2'>nlunateheran@gmail.com</p>
                            </div>
                            <div className='flex flex-row my-2'>
                                <Linkedin />
                                <p className='ml-2'>in/narenluna</p>
                            </div>
                            <div className='flex flex-row my-2'>
                                <Location />
                                <p className='ml-2'>Cartagena, Colombia</p>
                            </div>
                        </div>
                        <div className='m-auto max-w-md w-full bg-lightPrimary dark:bg-darkPrimary p-10 rounded-lg shadow-lg'>
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact