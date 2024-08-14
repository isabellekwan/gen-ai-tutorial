import React from 'react';
import Image from 'next/image';
import styleExample from '@/style-transfer-images/style-example.png';

const STBox1: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full">
            <h2 className="text-xl font-bold mt-2 text-center">Suppose you would like to use a fun and quirky style to your image of the landscape.</h2>
                <div className="flex justify-center items-center">
                    <Image src={styleExample} alt="Feature" className="rounded-lg" width={700} height={700} />
                </div>
            </div>
        </div>
    );
};

export default STBox1;
