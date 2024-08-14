import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'animate.css';
import Popup from '../TTI/PopUp';

interface AnimatedWordProps {
    word: string;
    color: string;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, color }) => (
    <span className={`font-bold ${color} animate__animated animate__pulse animate__infinite mx-1`} style={{ textDecoration: 'underline' }}>
        {word}
    </span>
);

interface ConceptItemProps {
    text: string;
    isCorrect: boolean | null;
    onDragStart: () => void;
    onDragEnd: () => void;
    onClick?: () => void;
}

const ConceptItem: React.FC<ConceptItemProps> = ({ text, isCorrect, onDragStart, onDragEnd, onClick }) => (
    <motion.div
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onClick={onClick}
        className={`p-4 rounded-lg shadow-md cursor-move ${
            isCorrect === null ? 'bg-white' : isCorrect ? 'bg-green-100' : 'bg-red-100'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {text}
    </motion.div>
);

interface DropZoneProps {
    text: string;
    onDrop?: () => void;
    isCorrect: boolean | null;
}

const DropZone: React.FC<DropZoneProps> = ({ text, onDrop, isCorrect }) => (
    <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={`p-4 border-2 border-dashed rounded-lg ${
            isCorrect === null ? 'border-gray-300' : isCorrect ? 'border-green-500' : 'border-red-500'
        }`}
    >
        {text}
    </div>
);

interface Concept {
    id: string;
    text: string;
    correctZone: string;
    isCorrect: boolean | null;
}

const TTIMap: React.FC = () => {
    const [concepts, setConcepts] = useState<Concept[]>([
        { id: 'dog', text: 'Dog', correctZone: 'mainObject', isCorrect: null },
        { id: 'sitting', text: 'Sitting', correctZone: 'action', isCorrect: null },
        { id: 'livingRoom', text: 'Living Room', correctZone: 'background', isCorrect: null },
    ]);

    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setIsComplete(concepts.every((concept) => concept.isCorrect === true));
        if (!showPopup) {
            setMessage("Drag and drop the elements to their correct positions!");
            setShowPopup(true);
        }
    }, [concepts]);

    const handleDragStart = (id: string) => {
        setDraggedItem(id);
    };

    const handleDrop = (zone: string) => {
        if (draggedItem) {
            setConcepts((prevConcepts) =>
                prevConcepts.map((concept) =>
                    concept.id === draggedItem
                        ? { ...concept, isCorrect: concept.correctZone === zone }
                        : concept
                )
            );
            setDraggedItem(null);
        }
    };

    const handleClick = (id: string, zone: string) => {
        setConcepts((prevConcepts) =>
            prevConcepts.map((concept) =>
                concept.id === id
                    ? { ...concept, isCorrect: concept.correctZone === zone }
                    : concept
            )
        );
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 w-full max-w-4xl">
            {/* {showPopup && <Popup message={message} onClose={() => setShowPopup(false)} />} */}
            <div className="mockup-window border-4 border-black bg-white p-4 rounded-lg shadow-lg w-full h-auto overflow-hidden">
                <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">Drag and drop the elements to their correct positions!</h2>
                    <div className="mb-6 text-center text-xl">
                        A <AnimatedWord word="dog" color="text-blue-600" /> is <AnimatedWord word="sitting" color="text-green-600" /> in the <AnimatedWord word="living room" color="text-red-600" />
                    </div>
                    {isMobile ? (
                        <div className="flex flex-col space-y-4">
                            {concepts.map((concept) => (
                                <div key={concept.id} className="space-y-4">
                                    <button
                                        className={`p-4 w-full rounded-lg shadow-md ${
                                            concept.isCorrect === null ? 'bg-white' : concept.isCorrect ? 'bg-green-100' : 'bg-red-100'
                                        }`}
                                        onClick={() => handleClick(concept.id, concept.correctZone)}
                                    >
                                        {concept.text}
                                    </button>
                                    <DropZone
                                        text={concept.correctZone.charAt(0).toUpperCase() + concept.correctZone.slice(1)}
                                        isCorrect={concept.isCorrect}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-8 flex-grow">
                            <div className="space-y-4">
                                {concepts.map((concept) => (
                                    <ConceptItem
                                        key={concept.id}
                                        text={concept.text}
                                        isCorrect={concept.isCorrect}
                                        onDragStart={() => handleDragStart(concept.id)}
                                        onDragEnd={() => setDraggedItem(null)}
                                    />
                                ))}
                            </div>
                            <div className="space-y-4">
                                <DropZone
                                    text="Main Object"
                                    onDrop={() => handleDrop('mainObject')}
                                    isCorrect={concepts.find((c) => c.correctZone === 'mainObject')?.isCorrect ?? null}
                                />
                                <DropZone
                                    text="Action"
                                    onDrop={() => handleDrop('action')}
                                    isCorrect={concepts.find((c) => c.correctZone === 'action')?.isCorrect ?? null}
                                />
                                <DropZone
                                    text="Background"
                                    onDrop={() => handleDrop('background')}
                                    isCorrect={concepts.find((c) => c.correctZone === 'background')?.isCorrect ?? null}
                                />
                            </div>
                        </div>
                    )}
                    {isComplete && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-4 bg-green-100 rounded-lg text-center text-green-800"
                        >
                            Great job! You&apos;ve correctly identified all the key elements.
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TTIMap;
