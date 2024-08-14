import React from 'react';
import Image from 'next/image';
import originalDog from '@/text-to-image-slides/Dogs/Interaction1.png';
import complexDog from '@/text-to-image-slides/Dogs/Interaction2.png';

interface CompareImagesProps {
    onImageGenerated: () => void;
}

const CompareImages: React.FC<CompareImagesProps> = ({ onImageGenerated }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full">
                <div className="flex w-full">
                    <div className="flex flex-col items-center w-1/2">
                        <Image src={originalDog} alt="Simple Dog" className="rounded-lg" width={400} height={400} />
                        <p className="mt-2 text-center">A dog is sitting in the living room.</p>
                    </div>
                    <div className="flex flex-col items-center w-1/2">
                        <Image src={complexDog} alt="Complex Dog" className="rounded-lg" width={400} height={400} />
                        <p className="mt-2 text-center">A dog is sitting in the living room with a coffee table and potted plants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareImages;
