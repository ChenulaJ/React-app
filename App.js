import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Adjust path
import WelcomePageEditor from './components/WelcomePageEditor'; // Adjust path
import EmailSettingsEditor from './components/EmailSettingsEditor'; // Adjust path
import { FormProvider } from './components/FormContext'; // Adjust path

const App = () => {
    return (
        <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/welcome-editor" element={<WelcomePageEditor />} />
                    <Route path="/email-editor" element={<EmailSettingsEditor />} />
                </Routes>
            </Router>
        </FormProvider>
    );
};

export default App;
