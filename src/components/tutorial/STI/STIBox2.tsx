import React, { useState } from 'react';
import Image from 'next/image';
import carSketch from '@/sketch-to-image-images/car-sketch.png';
import carColour from '@/sketch-to-image-images/car-colour.png'; // Replace with your right image path

const STIBox2: React.FC = () => {
    const [showRightImage, setShowRightImage] = useState(false);

    const handleTransform = () => {
        setShowRightImage(true);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-1/2 max-w-4xl">
            <div className="border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full flex flex-col items-center">
                {/* Title inside the border box */}
                <h2 className="text-2xl font-bold mb-4 text-center">Click on “Transform” to see the output</h2>

                {/* Container for images and arrow */}
                <div className="flex items-center justify-start w-full">
                    {/* Left Image */}
                    <div className="relative mr-4">
                        <Image
                            src={carSketch}
                            alt="Car Sketch"
                            className="rounded-lg border-4 border-black"
                            width={300}
                            height={300}
                        />
                    </div>

                    {/* Arrow with tail */}
                    <div className="text-3xl mx-4">
                        ⮕
                    </div>

                    {/* Right Image */}
                    {showRightImage && (
                        <div className="relative ml-4">
                            <Image
                                src={carColour}
                                alt="Coloured Car Image"
                                className="rounded-lg"
                                width={300}
                                height={300}
                            />
                        </div>
                    )}
                </div>
                <button
                    onClick={handleTransform}
                    className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
                >
                    Transform
                </button>
            </div>
        </div>
    );
};

export default STIBox2;
