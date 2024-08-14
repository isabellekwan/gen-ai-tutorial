import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path if necessary

const STILearnMoreButton: React.FC = () => {
    const handleLearnMore = () => {
        window.open('/tutorials/technical-sketch-to-image', '_blank'); // Opens the technical tutorial in a new window
    };

    return (
        <Button 
            onClick={handleLearnMore} 
            className="bg-black text-white">
            Click here for a more technical tutorial!
        </Button>
    );
};

export default STILearnMoreButton;
