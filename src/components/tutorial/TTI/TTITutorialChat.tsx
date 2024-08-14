import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import aiDog from '@/images/ai-dog.png';
import userDog from '@/images/user-dog.png';
import TTIBox from '@/components/tutorial/TTI/TTIBox';
import TTIMap from '@/components/tutorial/TTI/TTIMap';
import TTILiv1 from '@/components/tutorial/TTI/TTILiv1';
import chatMessagesData from '@/data/TTIChatMessages.json';
import TTIBox2 from "@/components/tutorial/TTI/TTIBox2";
import TTIBox3 from "@/components/tutorial/TTI/TTIBox3";
import FeatureImage from './FeatureImage';
import CompareImages from './CompareImages';
import TTILearnMoreButton from './TTILearnMoreButton';

interface ChatMessage {
    id: number;
    type: 'text' | 'interactive' | 'image';
    text?: string;
    sender?: 'user' | 'ai';
    component?: string;
    image?: string;
}

const chatMessages: ChatMessage[] = chatMessagesData as ChatMessage[];

const TTITutorialChat: React.FC = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (chatRef.current) {
            const chatItems = chatRef.current.querySelectorAll('.chat-item');
            chatItems.forEach((item) => {
                observer.observe(item);
            });
        }

        return () => {
            const chatItems = chatRef.current?.querySelectorAll('.chat-item');
            if (chatItems) {
                chatItems.forEach((item) => {
                    observer.unobserve(item);
                });
            }
        };
    }, [currentMessageIndex]);

    const handleImageGenerated = () => {
        setTimeout(() => {
            chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 200);
    };

    const handleNextMessage = () => {
        if (currentMessageIndex < chatMessages.length - 1) {
            setCurrentMessageIndex((prev) => prev + 1);
            handleImageGenerated();
        }
    };

    const renderComponent = (component: string) => {
        switch (component) {
            case 'TTIBox':
                return <TTIBox onImageGenerated={handleImageGenerated} />;
            case 'TTIMap':
                return <TTIMap />;
            case 'TTILiv1':
                return <TTILiv1 />;
            case 'TTIBox2':
                return <TTIBox2 onImageGenerated={handleImageGenerated} />;
            case 'TTIBox3':
                return <TTIBox3 onImageGenerated={handleImageGenerated} />;
            case 'FeatureImage':
                return <FeatureImage onImageGenerated={handleImageGenerated} />;
            case 'CompareImages':
                return <CompareImages onImageGenerated={handleImageGenerated} />;
            case 'TTILearnMoreButton':
                return <TTILearnMoreButton />;
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <section ref={chatRef} className="flex flex-col items-start py-4 space-y-4">
                {chatMessages.slice(0, currentMessageIndex + 1).map((message: ChatMessage) => {
                    if (message.type === 'interactive') {
                        return (
                            <div key={message.id} className="chat-item opacity-0 flex items-center justify-center w-full">
                                <div className="flex flex-col items-center">
                                    {renderComponent(message.component!)}
                                </div>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={message.id}
                            className={`chat-item opacity-0 flex items-start ${
                                message.sender === 'ai' ? 'justify-end space-x-reverse' : ''
                            } space-x-4 w-full max-w-2xl ${
                                message.sender === 'ai' ? 'ml-auto' : ''
                            }`}
                        >
                            {message.sender === 'user' && <Image src={userDog} alt="User Icon" width={50} height={50} className="rounded-full" />}
                            <div className={`${message.sender === 'ai' ? 'bg-blue-100' : 'bg-gray-100'} p-4 rounded-2xl shadow-md ${message.image ? 'border-2 border-blue-200' : ''}`}>
                                {message.type === 'image' ? (
                                    <div className="w-full h-auto">
                                        <Image src={message.image!} alt="Example Image" width={600} height={400} className="rounded-xl" />
                                    </div>
                                ) : (
                                    <p className="text-lg">{message.text}</p>
                                )}
                            </div>
                            {message.sender === 'ai' && <Image src={aiDog} alt="AI Icon" width={50} height={50} className="rounded-full" />}
                        </div>
                    );
                })}
            </section>

            {/* Interactive Component Centered */}
            {chatMessages[currentMessageIndex]?.type === 'interactive' && (
                <div className="flex justify-center w-full mt-8">
                    <div className="flex flex-col items-center">
                        {renderComponent(chatMessages[currentMessageIndex].component!)}
                    </div>
                </div>
            )}

            {/* Next Button */}
            <button
                onClick={handleNextMessage}
                className="fixed bottom-[175px] right-[175px] bg-blue-500 text-white p-2 rounded shadow-lg"
            >
                Next
            </button>
        </div>
    );
};

export default TTITutorialChat;
