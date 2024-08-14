import React, { useState } from 'react';
import Image from 'next/image';
import StyleImageAnalysis from '@/image-to-image-images/StyleImageAnalysis.jpg';

const STBox3: React.FC = () => {
    const [showAllPopups, setShowAllPopups] = useState<boolean>(false);

    const popups = [
        { id: 1, text: "Vibrant colors: greens, blues, pinks, and yellows", position: "top-0 left-0" },
        { id: 2, text: "Swirling patterns: swirling and curved lines", position: "top-0 right-0" },
        { id: 3, text: "Bold outlines: strong and black outlines around the shapes and patterns", position: "bottom-0 left-0" }
    ];

    const handleShowAllPopups = () => {
        setShowAllPopups(true);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-8 border-4 border-black bg-white p-4 rounded-lg shadow-lg">
            <Image
                src={StyleImageAnalysis}
                alt="Style Image Analysis"
                width={StyleImageAnalysis.width}
                height={StyleImageAnalysis.height}
                layout="responsive"
                className="rounded-lg"
            />

            {popups.map((popup) => (
                <div
                    key={popup.id}
                    className={`absolute ${popup.position} ${showAllPopups ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="bg-yellow-200 rounded-lg p-2 shadow-lg max-w-xs m-4">
                        <p className="text-sm">{popup.text}</p>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-0 right-0 m-4">
                <button
                    onClick={handleShowAllPopups}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
                >
                    Understand Style
                </button>
            </div>
        </div>
    );
};

export default STBox3;
