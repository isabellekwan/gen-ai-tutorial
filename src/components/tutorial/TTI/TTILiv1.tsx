import React, { useState } from 'react';
import Image from 'next/image';
import livingRoomImg from '@/text-to-image-slides/Living room image/living room 1/LivingRoom1.png';  // Adjust the path to your image

interface PopupData {
    x: number;
    y: number;
    text: string;
}

const TTILiv1: React.FC = () => {
    const [visiblePopups, setVisiblePopups] = useState<PopupData[]>([]);
    const [showSkip, setShowSkip] = useState<boolean>(false);

    const popups: PopupData[] = [
        { x: 50, y: 52, text: 'Sofa: Shape - Rectangular with round edges, Color - Beige' },
        { x: 50, y: 70, text: 'Coffee Table: Shape - Oval, Color - Neutral' },
        { x: 38, y: 83, text: 'Rug: Shape - Rectangular, Color - Cream' },
    ];

    const handleAreaClick = (popup: PopupData) => {
        if (!visiblePopups.includes(popup)) {
            setVisiblePopups((prev) => [...prev, popup]);
            setShowSkip(true);
        }
    };

    const handleShowAll = () => {
        setVisiblePopups(popups);
        setShowSkip(true);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-8 mb-8 border-4 border-black bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold m-2 text-center">Click on the red dots to learn more about each living room item:</h2>
            <div className="flex justify-center">
                <Image src={livingRoomImg} alt="Living Room" width={500} height={500}/>
            </div>

            {/* Clickable Dots */}
            {popups.map((popup, index) => (
                <div
                    key={index}
                    className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                    style={{ top: `${popup.y}%`, left: `${popup.x}%`, transform: 'translate(-50%, -50%)' }}
                    onClick={() => handleAreaClick(popup)}
                ></div>
            ))}

            {/* Popups */}
            {visiblePopups.map((popup, index) => (
                <div
                    key={index}
                    className="absolute bg-white border-2 border-black p-2 rounded-lg shadow-lg"
                    style={{ top: `${popup.y}%`, left: `${popup.x}%`, transform: 'translate(-50%, -50%)' }}
                >
                    {popup.text}
                </div>
            ))}

            {/* Show All Button */}
            {!showSkip && (
                <button
                    onClick={handleShowAll}
                    className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Show All
                </button>
            )}
        </div>
    );
};

export default TTILiv1;
