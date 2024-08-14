import React, { useState } from 'react';
import Image from 'next/image';
import carSketch from '@/sketch-to-image-images/car-sketch.png';

const STIBox1: React.FC = () => {
    const [showPopups, setShowPopups] = useState(false);

    const togglePopups = () => {
        setShowPopups(!showPopups);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="relative mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full overflow-hidden">
                <h2 className="text-2xl font-bold mt-2 text-center">Click “Understand the sketch” to see key parts of the sketch</h2>
                <div className="flex justify-center items-center h-full relative">
                    <Image src={carSketch} alt="Car Sketch" className="rounded-lg" width={500} height={500} />
                    {showPopups && (
                        <>
                            <div
                                className="absolute px-3 bg-blue-300 border border-black rounded-lg"
                                style={{ top: '33%', left: '45%' }}
                            >
                                <p>Windows</p>
                            </div>
                            <div
                                className="absolute px-3 bg-blue-300 border border-black rounded-lg"
                                style={{ top: '50%', left: '32%' }}
                            >
                                <p>Car Body</p>
                            </div>
                            <div
                                className="absolute px-3 bg-blue-300 border border-black rounded-lg"
                                style={{ top: '72%', left: '55%' }}
                            >
                                <p>Wheel</p>
                            </div>
                            <div
                                className="absolute px-3 bg-blue-300 border border-black rounded-lg"
                                style={{ top: '72%', left: '40%' }}
                            >
                                <p>Wheel</p>
                            </div>
                        </>
                    )}
                </div>
                <button
                    onClick={togglePopups}
                    className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    {showPopups ? 'Hide the labels' : 'Understand the sketch'}
                </button>
            </div>
        </div>
    );
};

export default STIBox1;
