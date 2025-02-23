import React from 'react';
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle, // Corrección aquí
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-red-600' />,
        title: "Free Shipping", // Corrección aquí
        description: "Free Shipping On All Orders", // Corrección aquí
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-red-600' />, // Corrección aquí
        title: "Safe Money", // Corrección aquí
        description: "30 Days Money Back",
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-red-600' />,
        title: "Secure Payment", // Corrección aquí
        description: "All Payment Secure",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-red-600' />,
        title: "Online Support 24/7", // Corrección aquí
        description: "Technical Support 24/7",
    }
];

const Service = () => {
    return (
        <div>
            <div className="container mt-14 md:my-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {ServiceData.map((data) => (
                        <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'> {/* Se agregó key */}
                            {data.icon}
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1> {/* Corrección aquí */}
                                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
