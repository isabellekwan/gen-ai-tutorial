import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import carColour from '@/sketch-to-image-images/car-colour.png';
import carRoad from '@/sketch-to-image-images/car-road.png';

const STBox3: React.FC = () => {
    const [flippedIndexes, setFlippedIndexes] = useState<Set<number>>(new Set());

    const prompts = [
        '(No prompt given)',
        '"A car on the road"'
    ];

    const images = [
        { back: carColour },
        { back: carRoad }
    ];

    const handleCardClick = (index: number) => {
        setFlippedIndexes((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full h-auto overflow-hidden">
                <div className="border-b pb-2 mb-4 flex justify-center">
                    <h2 className="text-2xl font-bold m-4 text-center">Flip the cards to see the images!</h2>
                </div>
                <div className="flex justify-center gap-x-4">
                    {prompts.map((prompt, index) => (
                        <motion.div
                            key={index}
                            className="relative w-1/3 p-2 flex flex-col items-center"
                            onClick={() => handleCardClick(index)}
                        >
                            <div className={`relative w-full h-80 transform-style-preserve-3d transition-transform duration-500 ${flippedIndexes.has(index) ? 'rotate-y-180' : ''}`}>
                                {/* Front of the card */}
                                <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-300 rounded-lg">
                                    <p className="text-xl font-bold">Generate Image</p>
                                </div>
                                {/* Back of the card */}
                                <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white rounded-lg transform rotate-y-180">
                                    <Image
                                        src={images[index].back.src}
                                        alt={`Back Image ${index}`}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-m">{prompt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default STBox3;
