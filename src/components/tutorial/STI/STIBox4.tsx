import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import the images
import carSketch from '@/sketch-to-image-images/car-sketch.png'; // Add the car sketch image
import carInput1 from '@/sketch-to-image-images/car-colour.png';
import carInput2 from '@/sketch-to-image-images/car-input2.png';

const STIBox4: React.FC = () => {
    const [flippedIndexes, setFlippedIndexes] = useState<Set<number>>(new Set());

    const prompts = [
        "A car on the road",
        <>
          The car should have a shiny red body, black tires, and clear windows. It should be{' '}
          <span className="font-bold underline">driving on a winding road</span> surrounded by lush green fields, rolling hills, and vibrant wildflowers.
        </>
      ];
      

    const images = [carInput1, carInput2];

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
                    <h2 className="text-2xl font-bold m-4 text-center">Flip the cards to see the generated images!</h2>
                </div>
                <div className="flex justify-between">
                    {prompts.map((prompt, index) => (
                        <motion.div
                            key={index}
                            className="relative w-1/2 p-2 flex flex-col items-center"
                            onClick={() => handleCardClick(index)}
                        >
                            <div className={`relative w-full h-80 transform-style-preserve-3d transition-transform duration-500 ${flippedIndexes.has(index) ? 'rotate-y-180' : ''}`}>
                                {/* Front of the card */}
                                <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white border border-black rounded-lg">
                                    <Image
                                        src={carSketch}
                                        alt="Car Sketch"
                                        width={300}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                                {/* Back of the card */}
                                <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white rounded-lg transform rotate-y-180">
                                    <Image
                                        src={images[index]}
                                        alt={`Generated ${index}`}
                                        width={300}
                                        height={300}
                                        className="rounded-lg"
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

export default STIBox4;
