import React from 'react';
import Image from 'next/image';
import carCompare from '@/sketch-to-image-images/car-compare.png';

import carSketch from '@/sketch-to-image-images/car-sketch.png';
import carRoad from '@/sketch-to-image-images/car-road.png';

const STBox3: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-1/2 max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full">
                <div className="flex justify-center items-center">
                    <Image src={carCompare} alt="Feature" className="rounded-lg" width={600} height={600} />
                </div>
            </div>
        </div>
    );
};

export default STBox3;
