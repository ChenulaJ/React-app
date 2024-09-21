import React, { createContext, useState } from 'react';

// Create the context
export const FormContext = createContext();

// Provide the context to your app
export const FormProvider = ({ children }) => {
    const [welcomeTitle, setWelcomeTitle] = useState('Welcome to our form');
    const [welcomeDescription, setWelcomeDescription] = useState('This is a description of the form');
    const [welcomeButtonText, setWelcomeButtonText] = useState('Start');
    const [welcomeImage, setWelcomeImage] = useState(null);
    const [welcomeImageAlignment, setWelcomeImageAlignment] = useState('right');

    return (
        <FormContext.Provider
            value={{
                welcomeTitle,
                setWelcomeTitle,
                welcomeDescription,
                setWelcomeDescription,
                welcomeButtonText,
                setWelcomeButtonText,
                welcomeImage,
                setWelcomeImage, // Make sure this function is here to set the image
                welcomeImageAlignment,
                setWelcomeImageAlignment,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
