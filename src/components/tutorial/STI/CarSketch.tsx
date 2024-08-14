import React from 'react';
import Image from 'next/image';
import carSketch from '@/sketch-to-image-images/car-sketch.png';

const CarSketch: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-1/2 max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full">
                <div className="flex justify-center items-center">
                    <Image src={carSketch} alt="Feature" className="rounded-lg" width={300} height={300} />
                </div>
            </div>
        </div>
    );
};

export default CarSketch;