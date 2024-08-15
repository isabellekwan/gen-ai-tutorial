import React, { useState } from 'react';
import Image from 'next/image';
import generatedImg from '@/text-to-image-images/Interaction1.png';
import { TypeAnimation } from 'react-type-animation';

interface TTIBoxProps {
    onImageGenerated: () => void;
}

const TTIBox: React.FC<TTIBoxProps> = ({ onImageGenerated }) => {
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [showGenerateButton, setShowGenerateButton] = useState(false);

    const handleGenerate = () => {
        setGeneratedImage(generatedImg.src);
        setTimeout(() => {
            onImageGenerated();
        }, 1000); // Adjust the delay if needed
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full overflow-hidden">
                <div className="border-b pb-2 mb-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <h2 className="text-2xl font-bold m-2 text-center">Click generate to see the output!</h2>
                    <div></div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-grow">
                        <div className="w-full p-2 border rounded bg-gray-100 text-lg h-11 flex items-center">
                            <TypeAnimation
                                sequence={[
                                    'A dog is sitting in the living room.',
                                    () => setShowGenerateButton(true), // This function will run after the string has been typed
                                ]}
                                wrapper="p"
                                speed={50}
                            />
                        </div>
                    </div>
                    {showGenerateButton && (
                        <button
                            onClick={handleGenerate}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            Generate
                        </button>
                    )}
                </div>
                {generatedImage && (
                    <div className="mt-4 flex justify-center animate-fade-in">
                        <Image src={generatedImage} alt="Generated" className="rounded-lg" width={350} height={350} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TTIBox;
