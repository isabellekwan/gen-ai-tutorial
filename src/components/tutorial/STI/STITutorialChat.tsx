import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import aiDog from '@/images/ai-dog.png';
// source: <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
import userDog from '@/images/user-dog.png';
// source: <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>

import carSketch from "@/sketch-to-image-images/car-sketch.png";

import chatMessagesData from '@/data/STIChatMessages.json';
import STIBox1 from './STIBox1';
import STIBox2 from './STIBox2';
import STIBox3 from './STIBox3';
import STIBox4 from './STIBox4';
import STIBox5 from './STIBox5';
import STIBox6 from './STIBox6';
import STILearnMoreButton from './STILearnMoreButton';
import CarSketch from './CarSketch';

interface ChatMessage {
    id: number;
    type: 'text' | 'interactive' | 'image';
    text?: string;
    sender?: 'user' | 'ai';
    component?: string;
    image?: string;
}

const chatMessages: ChatMessage[] = chatMessagesData as ChatMessage[];

const STITutorialChat: React.FC = () => {
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
    }, []);

    const renderComponent = (component: string) => {
        switch (component) {
            case 'STIBox1':
                return <STIBox1 />;
            case 'STIBox2':
                return <STIBox2 />;
            case 'STIBox3':
                return <STIBox3 />;
            case 'STIBox4':
                return <STIBox4 />;
            case 'STIBox5':
                return <STIBox5 />;
            case 'STIBox6':
                return <STIBox6 />;
            case 'STILearnMoreButton':
                return <STILearnMoreButton />;
            case 'CarSketch':
                return <CarSketch />
            default:
                return null;
        }
    };

    return (
        <section ref={chatRef} className="flex flex-col items-start py-4 space-y-4">
            {chatMessages.map((message: ChatMessage) => {
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
                            {message.type === 'image' && message.image && (
                                <div className="w-full h-auto">
                                    <Image
                                        src={carSketch}
                                        alt="Chat Image"
                                        width={600}
                                        height={400}
                                        className="rounded-xl"
                                    />
                                </div>
                            )}
                            {message.type === 'text' && (
                                <p className="text-lg">{message.text}</p>
                            )}
                        </div>
                        <div className='p-1'></div>
                        {message.sender === 'ai' && <Image src={aiDog} alt="AI Icon" width={50} height={50} className="rounded-full ml-4" />}
                    </div>
                );
            })}
        </section>
    );
};

export default STITutorialChat;
