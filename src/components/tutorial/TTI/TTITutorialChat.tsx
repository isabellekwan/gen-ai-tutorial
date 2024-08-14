import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
//import userIcon from '@/images/human_icon.png';
//import aiIcon from '@/images/human2_icon.png';

import aiDog from '@/images/ai-dog.png';
// source: <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
import userDog from '@/images/user-dog.png';
// source: <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>

import { useRouter } from 'next/router';
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
    const [showMore, setShowMore] = useState<boolean | null>(null);
    const [imageGenerated, setImageGenerated] = useState<boolean>(false);
    const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>(chatMessages.slice(0, 2));
    const router = useRouter();
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
    }, [visibleMessages]);

    const handleImageGenerated = () => {
        setImageGenerated(true);
        setTimeout(() => {
            setVisibleMessages(chatMessages.slice(0, chatMessages.length));
            setTimeout(() => {
                const chatRefCurrent = chatRef.current;
                if (chatRefCurrent) {
                    chatRefCurrent.scrollBy({ top: 150, behavior: 'smooth' });
                }
            }, 200);
        }, 200);
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
                return <TTILearnMoreButton /> 
            default:
                return null;
        }
    };

    return (
        <section ref={chatRef} className="flex flex-col items-start py-4 space-y-4">
            {visibleMessages.map((message: ChatMessage) => {
                if (message.id > 18 && !showMore) {
                    return null;
                }
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
                        {message.sender === 'ai' && <Image src={aiDog} alt="AI Icon" width={50} height={50} className="rounded-full" />}
                    </div>
                );
            })}
            {showMore === false && (
                <div className="chat-item opacity-0 flex items-start justify-end space-x-4 space-x-reverse w-full max-w-2xl ml-4">
                    <div className="bg-blue-100 p-4 rounded-2xl shadow-md">
                        <p className="text-lg">Thank you for your interest. Redirecting you to the home page...</p>
                    </div>
                    <Image src={aiDog} alt="AI Icon" width={50} height={50} className="rounded-full" />
                </div>
            )}
        </section>
    );
};

export default TTITutorialChat;