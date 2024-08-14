import React from 'react';
import Image from 'next/image';
//import ixlabLogo from '../../images/Logo_Grey.svg'; // Adjust the path as necessary

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-800 mt-20 py-8" style={{ height: '350px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center h-full">
                    <div className="flex justify-start">
                        {/* <Image src={ixlabLogo} alt="IXLab Logo" width={100} height={100} /> */}
                    </div>
                    <div className="text-left text-orange-100 md:col-span-2 md:text-right mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} AI-Gen-Image Tutorial. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
