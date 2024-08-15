import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import generatedImg from '@/text-to-image-images/Interaction2.png';
import 'animate.css';

interface TTIBox2Props {
    onImageGenerated: () => void;
}

const TTIBox2: React.FC<TTIBox2Props> = ({ onImageGenerated }) => {
    const [prompt, setPrompt] = useState('A dog is sitting in the living room');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [step, setStep] = useState(0);
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (step === 0) {
            setMessage("Click on 'Add coffee table' to continue!");
            setShowPopup(true);
        } else if (step === 1) {
            setMessage("Now click on 'Add potted plants'!");
            setShowPopup(true);
        } else if (step === 2) {
            setMessage("Great! Now click 'Generate' to see the result!");
            setShowPopup(true);
        } else {
            setMessage('');
            setShowPopup(false);
        }
    }, [step]);

    const handleAddElement = (element: string) => {
        setPrompt(`${prompt}, with ${element}`);
        setStep(step + 1);
        setShowPopup(false);
    };

    const handleGenerate = () => {
        setGeneratedImage(generatedImg.src);
        setStep(step + 1);
        setShowPopup(false);
        setTimeout(() => {
            onImageGenerated();
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            {/* Pop-up integrated directly here */}
            {showPopup && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded shadow-lg z-50 flex justify-between items-center w-auto max-w-l">
                    <span className="flex-grow">{message}</span>
                </div>
            )}
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full overflow-hidden">
                <div className="border-b pb-2 mb-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="font-bold">Mockup Browser</div>
                    <div></div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-grow">
                        <div className="w-full p-2 border rounded bg-gray-100 text-lg h-11 flex items-center">
                            {prompt}
                        </div>
                    </div>
                    <button
                        onClick={handleGenerate}
                        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${
                            step === 2 ? 'animate__animated animate__pulse animate__infinite' : 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={step !== 2}
                    >
                        Generate
                    </button>
                </div>
                <div className="flex space-x-4">
                    <div className="w-2/3">
                        {generatedImage ? (
                            <Image src={generatedImage} alt="Generated" className="rounded-lg animate__animated animate__fadeIn" width={400} height={400} />
                        ) : (
                            <div className=" bg-gray-200 rounded-lg flex items-center justify-center  w-[400px] h-[400px]">
                                Image will be generated here
                            </div>
                        )}
                    </div>
                    <div className="w-1/3">
                        <h3 className="font-bold mb-2">Additional elements</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => handleAddElement('a coffee table')}
                                className={`w-full p-2 border rounded hover:bg-gray-100 ${
                                    step === 0 ? 'animate__animated animate__pulse animate__infinite' : 'opacity-50 cursor-not-allowed'
                                }`}
                                disabled={step !== 0}
                            >
                                Add coffee table
                            </button>
                            <button
                                onClick={() => handleAddElement('potted plants')}
                                className={`w-full p-2 border rounded hover:bg-gray-100 ${
                                    step === 1 ? 'animate__animated animate__pulse animate__infinite' : 'opacity-50 cursor-not-allowed'
                                }`}
                                disabled={step !== 1}
                            >
                                Add potted plants
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TTIBox2;
