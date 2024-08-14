import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path if necessary

const TTILearnMoreButton: React.FC = () => {
    const handleLearnMore = () => {
        window.open('/tutorials/technical-text-to-image', '_blank'); // Opens the technical tutorial in a new window
    };

    return (
       <div className="flex justify-center py-4">
            <Button 
                onClick={handleLearnMore} 
                className="bg-black text-white">
                Click here for a more techincal tutorial!
            </Button>
        </div>
    );
};

export default TTILearnMoreButton;
