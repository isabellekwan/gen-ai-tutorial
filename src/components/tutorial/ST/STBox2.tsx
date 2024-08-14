import React, { useState } from 'react';
import Image from 'next/image';
import styleImage from '@/image-to-image-images/styleImage.jpg';
import contentImage from '@/image-to-image-images/contentImage.jpg';
import generatedImageWeak from '@/image-to-image-images/generatedImageWeak.jpg';
import generatedImageMedium from '@/image-to-image-images/generatedImageMedium.jpg';
import generatedImageStrong from '@/image-to-image-images/generatedImageStrong.jpg';

const STBox2: React.FC = () => {
    const [intensity, setIntensity] = useState<'weak' | 'medium' | 'strong'>('medium');
    const [generatedImage, setGeneratedImage] = useState<string>(generatedImageMedium.src);

    const handleIntensityChange = (value: 'weak' | 'medium' | 'strong') => {
        setIntensity(value);
        switch (value) {
            case 'weak':
                setGeneratedImage(generatedImageWeak.src);
                break;
            case 'medium':
                setGeneratedImage(generatedImageMedium.src);
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
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <h2 className="text-2xl font-bold m-2 text-center">Adjust the style strength to see how it will affect the final image.</h2>
                    <div></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col space-y-4 mb-4 md:mb-0">
                        <div>
                            <div className="font-bold">Style Image</div>
                            <Image src={styleImage} alt="Style Image" className="rounded-lg" width={200} height={200} />
                        </div>
                        <div>
                            <div className="font-bold">Content Image</div>
                            <Image src={contentImage} alt="Content Image" className="rounded-lg" width={200} height={200} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-grow">
                        <div className="font-bold mb-4">Generated Image with Style</div>
                        <Image src={generatedImage} alt="Generated Image" className="rounded-lg" width={300} height={300} />
                        <div className="mt-4 w-full">
                            <div className="font-bold mb-2">Style Intensity</div>
                            <div className="flex justify-between space-x-2">
                                {['weak', 'medium', 'strong'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleIntensityChange(option as 'weak' | 'medium' | 'strong')}
                                        className={`flex-1 py-2 px-4 rounded ${
                                            intensity === option
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

export default STBox2;
