import React, { useState } from 'react';
import Image from 'next/image';
import carSketch from '@/sketch-to-image-images/car-sketch.png';
import generatedImageWeak from '@/sketch-to-image-images/car-colour.png'; 
import generatedImageStrong from '@/sketch-to-image-images/car-creative.png'; 

const STIBox5: React.FC = () => {
    const [creativityStrength, setCreativityStrength] = useState<'weak' | 'strong'>('weak'); 
    const [generatedImage, setGeneratedImage] = useState<string>(generatedImageWeak.src); 

    const handleStrengthChange = (value: 'weak' | 'strong') => {
        setCreativityStrength(value);
        switch (value) {
            case 'weak':
                setGeneratedImage(generatedImageWeak.src);
                break;
            case 'strong':
                setGeneratedImage(generatedImageStrong.src);
                break;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full h-auto overflow-hidden">
                <div className="border-b pb-2 mb-4 flex justify-between items-center">
                    <h2 className="text-2xl font-bold m-2 text-center">Adjust the creativity strength to see how it affects the final image.</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col space-y-4 mb-4 md:mb-0">
                        <div>
                            <div className="font-bold mb-4">Car Sketch</div>
                            <Image src={carSketch} alt="Car Sketch" className="rounded-lg border-4 border-black" width={300} height={300} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-grow">
                        <div className="font-bold mb-4">Generated Image with Style</div>
                        <Image src={generatedImage} alt="Generated Image" className="rounded-lg border-4 border-black" width={300} height={300} />
                        <div className="mt-4">
                            <div className="font-bold mb-2">Creativity Strength</div>
                            <div className="flex justify-between space-x-2">
                                {['weak', 'strong'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleStrengthChange(option as 'weak' | 'strong')}
                                        className={`flex-1 py-2 px-12 rounded ${
                                            creativityStrength === option
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                        }`}
                                    >
                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default STIBox5;
