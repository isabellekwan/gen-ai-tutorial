import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//import ixlabLogo from '../../images/Logo_Grey.svg'; // Adjust the path as necessary

const Navbar: React.FC = () => {
    return (
        <nav className="bg-alabaster fixed w-full z-10 top-0">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800  animate__animated animate__lightSpeedInLeft">
                        AI-Gen-Image Tutorial
                    </Link>
                    {/* <Image src={ixlabLogo} alt="IX Lab Logo" className="h-8 w-auto"/> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
