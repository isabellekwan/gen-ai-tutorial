import React from 'react';
import Image from 'next/image';
import livingRooms from '@/text-to-image-images/living-rooms.png';


const FeatureImage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full overflow-hidden">
                <div className="flex justify-center items-center h-full">
                    <Image src={livingRooms} alt="Feature" className="rounded-lg" width={700} height={700} />
                </div>
            </div>
        </div>
    );
};

export default FeatureImage;
