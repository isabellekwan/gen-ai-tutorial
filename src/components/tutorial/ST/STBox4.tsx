import React, { useState } from 'react';
import Image from 'next/image';
import contentImage from '@/style-transfer-images/content-image.png';
import styleImage1 from '@/style-transfer-images/style1.png';
import styleImage2 from '@/style-transfer-images/style2.png';
import styleImage3 from '@/style-transfer-images/style3.png';
import generatedImageStyle1 from '@/style-transfer-images/output1.png';
import generatedImageStyle2 from '@/style-transfer-images/output2.png';
import generatedImageStyle3 from '@/style-transfer-images/output3.png';

const STBox4: React.FC = () => {
    const [style, setStyle] = useState<'style1' | 'style2' | 'style3' | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    const handleImageClick = (value: 'style1' | 'style2' | 'style3') => {
        setStyle(value);
        switch (value) {
            case 'style1':
                setGeneratedImage(generatedImageStyle1.src);
                break;
            case 'style2':
                setGeneratedImage(generatedImageStyle2.src);
                break;
            case 'style3':
                setGeneratedImage(generatedImageStyle3.src);
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
                    <h2 className="text-2xl font-bold m-2 text-center">Adjust the style to see how it will affect the final image.</h2>
                    <div></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col space-y-4 mb-4 md:mb-0">
                        <div>
                            <div className="font-bold">Content Image</div>
                            <Image src={contentImage} alt="Content Image" className="rounded-lg" width={200} height={200} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-grow">
                        <div className="font-bold mb-4">Generated Image with Style</div>
                        {generatedImage ? (
                            <Image src={generatedImage} alt="Generated Image" className="rounded-lg" width={250} height={250} />
                        ) : (
                            <div className="w-[250px] h-[300px] bg-gray-300 flex items-center justify-center rounded-lg">
                                <span className="text-gray-600">Choose style image</span>
                            </div>
                        )}
                        <div className="mt-4 w-full">
                            <div className="font-bold mb-2">Style</div>
                            <div className="flex justify-center space-x-4">
                                <div onClick={() => handleImageClick('style1')} className="cursor-pointer flex flex-col items-center w-1/3">
                                    <Image src={styleImage1} alt="Style 1" className={`rounded-lg ${style === 'style1' ? 'border-4 border-blue-500' : 'border-2 border-gray-300'}`} width={200} height={200} />
                                    <p className="text-center">Style 1</p>
                                </div>
                                <div onClick={() => handleImageClick('style2')} className="cursor-pointer flex flex-col items-center w-1/3">
                                    <Image src={styleImage2} alt="Style 2" className={`rounded-lg ${style === 'style2' ? 'border-4 border-blue-500' : 'border-2 border-gray-300'}`} width={200} height={200} />
                                    <p className="text-center">Style 2</p>
                                </div>
                                <div onClick={() => handleImageClick('style3')} className="cursor-pointer flex flex-col items-center w-1/3">
                                    <Image src={styleImage3} alt="Style 3" className={`rounded-lg ${style === 'style3' ? 'border-4 border-blue-500' : 'border-2 border-gray-300'}`} width={200} height={200} />
                                    <p className="text-center">Style 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default STBox4;
