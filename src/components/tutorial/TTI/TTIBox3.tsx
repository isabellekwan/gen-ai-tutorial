import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import the images
import sofa_dog1 from '@/text-to-image-images/sofa_dog1.png';
import sofa_dog2 from '@/text-to-image-images/sofa_dog2.png';
import sofa_dog3 from '@/text-to-image-images/sofa_dog3.png';

interface TTIBox3Props {
    onImageGenerated: () => void;
}

const TTIBox3: React.FC<TTIBox3Props> = ({ onImageGenerated }) => {
    const [flippedIndexes, setFlippedIndexes] = useState<Set<number>>(new Set());

    const prompts = [
        "A dog <span style='font-weight:bold; text-decoration:underline;'>sitting on a plush sofa</span> in a cozy living room with a peaceful and inviting atmosphere",
        "A brown dog sitting in the living room with a blue couch, a glass coffee table and tall potted plants",
        "A cute brown dog lying on a fluffy red carpet in a cozy living room with an old-fashioned armchair"
    ];

    const images = [sofa_dog1, sofa_dog2, sofa_dog3];

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
                            className="relative w-1/3 p-2 flex flex-col items-center"
                            onClick={() => handleCardClick(index)}
                        >
                            <div className={`relative w-full h-80 transform-style-preserve-3d transition-transform duration-500 ${flippedIndexes.has(index) ? 'rotate-y-180' : ''}`}>
                                <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-200 rounded-lg">
                                    <p className="p-4 text-lg text-center">Generate Image</p>
                                </div>
                                <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white rounded-lg transform rotate-y-180">
                                    <Image
                                        src={images[index].src}
                                        alt={`Generated ${index}`}
                                        width={300}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-m" dangerouslySetInnerHTML={{ __html: prompt }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TTIBox3;
