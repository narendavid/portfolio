"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../button/Button';

const FormContact = () => {

    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [responseText, setResponseText] = useState<string>('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!form.current) return;
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
            form.current,
            process.env.NEXT_PUBLIC_KEY || ''
        )
            .then((response) => {
                console.log(response)
                setResponseText('OK')
            })
            .catch((error) => {
                console.log(error)
                setResponseText('Error')
            })
            .finally(() => {
                setIsLoading(false)
                setTimeout(()=>{
                    setResponseText('')
                }, 3000)
            })
    }

    return (
        <form ref={form} id='form' onSubmit={sendEmail}>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                    type="text"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-info text-gray-900 text-sm rounded-lg focus:ring-info focus:border-info block w-full p-2.5 dark:bg-darkSecondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-info dark:focus:border-info dark:shadow-sm-light"
                    placeholder="Your name"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                    type="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-info text-gray-900 text-sm rounded-lg focus:ring-info focus:border-info block w-full p-2.5 dark:bg-darkSecondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-info dark:focus:border-info dark:shadow-sm-light"
                    placeholder="example@mail.com"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea
                    id="message"
                    name='message'
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-info focus:ring-info focus:border-info dark:bg-darkSecondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-info dark:focus:border-info" placeholder="Write me a message..."
                ></textarea>
            </div>
            {
                responseText === 'OK' &&
                <p className="block mb-6 text-center text-sm font-medium text-gray-900 dark:text-white">Enviado correctamente</p>
            }{
                responseText === 'error' &&
                <p className="block text-center mb-6 text-sm font-medium text-red-600">Error al enviar</p>
            }
            <Button isLoading={isLoading} />
        </form>

    )

}

export default FormContact