"use client"
import React, { useState } from 'react'

const initialState: ContactFormData = {
    email: '',
    message: '',
    name: ''
}

const FormContact = () => {

    const [formData, setFormData] = useState<ContactFormData>(initialState);

    const { email, message, name } = formData

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(formData)
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        console.log(formData)
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <form>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                    value={name}
                    onChange={handleInputChange}
                    type="email"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-info text-gray-900 text-sm rounded-lg focus:ring-info focus:border-info block w-full p-2.5 dark:bg-darkSecondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-info dark:focus:border-info dark:shadow-sm-light"
                    placeholder="Your name"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                    value={email}
                    onChange={handleInputChange}
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
                    value={message}
                    id="message"
                    name='message'
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-info focus:ring-info focus:border-info dark:bg-darkSecondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-info dark:focus:border-info" placeholder="Write me a message..."
                    onChange={handleTextAreaChange}
                ></textarea>
            </div>
            <button type="submit" className="text-white w-full bg-info hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-info dark:hover:bg-info dark:focus:ring-blue-800">Send</button>
        </form>

    )

}

export default FormContact