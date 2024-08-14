import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/button'; 
import textToImage from '@/images/text_to_image.png';
import TTITutorialChat from '@/components/tutorial/TTI/TTITutorialChat';

const TextToImage: React.FC = () => {
    const chatRef = useRef<HTMLDivElement>(null);
    const [showMore, setShowMore] = useState<boolean | null>(null);

    useEffect(() => {
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                if (elementTop < window.innerHeight && elementBottom > 0) {
                    element.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Initial check

        return () => window.removeEventListener('scroll', animateOnScroll);
    }, []);

    const handleStartTutorial = () => {
        setShowMore(true);
        setTimeout(() => {
            if (chatRef.current) {
                const topPosition = chatRef.current.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: topPosition - 100, // Adjust this value for a more subtle scroll
                    behavior: 'smooth'
                });
            }
        }, 100); // Adding a slight delay to ensure the state updates before scrolling
    };

    return (
        <div className="container mx-auto px-4 lg:px-8">
            <section className="flex flex-col lg:flex-row items-start pt-32 pb-0">
                <div className="w-full flex flex-col lg:flex-row lg:items-center">
                    <div className="w-full lg:w-3/4">
                        <h1 className="text-6xl lg:text-8xl font-bold mt-8 mb-8 animate__animated animate__fadeInLeft">Text
                            to Image Tutorial</h1>
                        <p className="max-w-3xl text-left mb-4 text-2xl lg:text-2xl animate__animated animate__pulse">
                            Welcome to our Text to Image Tutorial! In this guide, we will explore how you can transform
                            textual descriptions into vivid images using state-of-the-art generative AI techniques. 
                        </p>
                        <div className="flex items-center space-x-4 mt-8 mb-52">
                            <Button
                                onClick={handleStartTutorial}
                                className="bg-black backdrop-filter backdrop-blur-lg text-white border border-transparent hover:bg-opacity-50 hover:text-white"
                            >
                                Start Tutorial
                            </Button>
                        </div>
                    </div>
                    <div id="mission-image" className="w-full lg:w-1/4 lg:ml-8 lg:flex hidden justify-center">
                        <Image
                            src={textToImage}
                            alt="Text to Image"
                            width={400}
                            height={400}
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>
            {showMore && <div className="border-t border-black"></div>}
            <div ref={chatRef}>
                {showMore && <TTITutorialChat/>}
            </div>
        </div>
    );
};

export default TextToImage;
