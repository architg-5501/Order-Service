// ContactForm.js
import React, { useState } from 'react';

export default function SubmitForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();




        setShowToast(true);

        setFormData({
            name: '',
            email: '',
            message: '',
        });


        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };
    return (
        <div className="w-2/4 mx-auto bg-inherit shadow-sm shadow-blue-500/50  mt-10 rounded-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">CONTACT ME</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="shadow-sm shadow-blue-500/50 text-white px-4 py-2 rounded-md hover:bg-blue-600"

                >
                    Submit
                </button>
                {showToast && (
                    <div className="toast toast-top toast-end">
                        <div className="alert alert-success">
                            <span>Message sent successfully!!!!.</span>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

