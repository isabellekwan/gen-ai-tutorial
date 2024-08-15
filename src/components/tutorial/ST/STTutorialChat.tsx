import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import aiDog from '@/images/ai-dog.png';
// source: <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
import userDog from '@/images/user-dog.png';
// source: <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
import chatMessagesData from '@/data/STChatMessages.json'
import STBox1 from './STBox1';
import STBox2 from './STBox2';
import STBox3 from './STBox3';
import STBox4 from './STBox4';
import STLearnMoreButton from './STLearnMoreButton';

interface ChatMessage {
    id: number;
    type: 'text' | 'interactive' | 'image';
    text?: string;
    sender?: 'user' | 'ai';
    component?: string;
    image?: string;
}

const chatMessages: ChatMessage[] = chatMessagesData as ChatMessage[];

const STTutorialChat: React.FC = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
    const chatRef = useRef<HTMLDivElement>(null);
    const paddingRef = useRef<HTMLDivElement>(null);

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
            updatePadding();
        }
    };

    const updatePadding = () => {
        if (paddingRef.current) {
            const currentMessage = chatMessages[currentMessageIndex + 1]; // Check the next message type
            if (currentMessage.type !== 'interactive') {
                const paddingAmount = 250; // Messages get more padding
                paddingRef.current.style.height = `${paddingAmount}px`;
            } else {
                paddingRef.current.style.height = '75px';
            }
        }
    };

    const renderComponent = (component: string) => {
        switch (component) {
            case 'STBox1':
                return <STBox1 />;
            case 'STBox2':
                return <STBox2 />;
            case 'STBox3':
                return <STBox3 />;
            case 'STBox4':
                return <STBox4 />;
            case 'STLearnMoreButton':
                return <STLearnMoreButton />
            default:
                return null;
        }
    };

    return (
        <div className = "relative">
        <section ref={chatRef} className="flex flex-col items-start py-4 space-y-4">
            {chatMessages.slice(0, currentMessageIndex + 1).map((message: ChatMessage) => {
                if (message.type === 'interactive') {
                    return (
                        <div key={message.id} className="chat-item opacity-0 flex items-center justify-center w-full">
                            {renderComponent(message.component!)}
                        </div>
                    );
                }
                return (
                    <div
                        key={message.id}
                        className={`chat-item opacity-0 flex items-start ${message.sender === 'ai' ? 'justify-end space-x-reverse' : ''} space-x-4 w-full max-w-2xl ${message.sender === 'ai' ? 'ml-auto' : ''}`}
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
                        <div className='p-1'></div>
                        {message.sender === 'ai' && <Image src={aiDog} alt="AI Icon" width={50} height={50} className="rounded-full ml-4" />}
                    </div>
                );
            })}
           {/* Padding Element */}
           <div ref={paddingRef} style={{ height: '50px' }}></div>
        </section>

        {/* Next Button */}
        <button
            onClick={handleNextMessage}
            className="fixed bottom-[175px] right-[175px] bg-blue-500 text-white px-4 py-2 rounded shadow-lg"
        >
            Next
        </button>
        </div>
    );
};

export default STTutorialChat;
