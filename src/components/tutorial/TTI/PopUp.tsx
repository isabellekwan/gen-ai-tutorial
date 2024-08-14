import React from 'react';

interface PopupProps {
    message: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded shadow-lg z-50 flex justify-between items-center w-auto max-w-l">
            <span className="flex-grow">{message}</span>
            {/* <button
                onClick={onClose}
                className="ml-2 px-2 py-1 bg-blue-700 text-white rounded hover:bg-blue-900"
            >
                Close
            </button> */}
        </div>
    );
};

export default Popup;
