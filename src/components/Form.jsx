import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessName: '',
        businessPage: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-row w-full">
            <div className="flex flex-col w-1/2 p-8">
                <h1>Seller Form</h1>
                <h2>We will get back to you</h2>

                <form className="w-full p-8 form" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="p-2 w-full mb-2 rounded-md text-black border-2"
                        id="firstName"
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="p-2 w-full mb-2 rounded-md text-black border-2"
                        id="lastName"
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="businessName">Business Name</label>
                    <input
                        type="text"
                        className="p-2 w-full mb-2 rounded-md text-black border-2"
                        id="businessName"
                        placeholder='Business Name'
                        value={formData.businessName}
                        onChange={handleChange}
                    />
                    <label htmlFor="businessPage">Business Page</label>
                    <input
                        type="text"
                        className="p-2 w-full mb-2 rounded-md text-black border-2"
                        id="businessPage"
                        placeholder='Business Page'
                        value={formData.businessPage}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Enter your Email Id</label>
                    <input
                        type="email"
                        className="p-2 w-full mb-2 rounded-md text-black border-2"
                        id="email"
                        placeholder='Email Id'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="phone">Enter your Mobile no.</label>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            className="p-2 w-12 mb-2 rounded-md text-black border-2"
                            value="+91"

                            readOnly
                        />
                        <input
                            type="text"
                            className="p-2 w-full mb-2 rounded-md text-black border-2"
                            id="phone"
                            placeholder='Mobile no.'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        className="p-2 w-full mb-2 rounded-md text-black border-2 h-32"
                        id="message"
                        placeholder='Message'
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <img src="https://ecoyaan.com/images/SellOnEcoyaan.png" alt="" className="w-1/2 p-16 rounded-lg" />
        </div>
    );
};

export default Form;
