import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography, Switch } from '@mui/material';

const EmailSettingsEditor = () => {
    const [title, setTitle] = useState('Enter your email');
    const [description, setDescription] = useState('This will be used to contact you for the next steps');
    const [required, setRequired] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('emailSettingsData'));
        if (savedData) {
            setTitle(savedData.title);
            setDescription(savedData.description);
            setRequired(savedData.required);
        }
    }, []);

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) {
            setEmailError('');
        }
    };

    const handleEmailBlur = () => {
        if (required && !validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        }
    };

    const handleSave = () => {
        const settingsData = {
            title,
            description,
            required,
        };
        localStorage.setItem('emailSettingsData', JSON.stringify(settingsData));
        console.log('Settings saved!');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (required && !validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
            console.log('Form submitted successfully');
        }
    };

    return (
        <Container style={styles.container}>
            {/* Left Panel: Editor Settings */}
            <Box style={styles.editor}>
                <Typography variant="h6">Settings</Typography>

                <Button variant="outlined" onClick={() => navigate('/')}>
                    Back to Home
                </Button>

                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <Box display="flex" alignItems="center" marginY="16px">
                    <Typography variant="body1" style={{ marginRight: '8px' }}>Required</Typography>
                    <Switch
                        checked={required}
                        onChange={(e) => setRequired(e.target.checked)}
                    />
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: '16px' }}
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Box>

            {/* Right Panel: Real-time Preview */}
            <Box style={styles.preview}>
                <Box style={styles.previewContent}>
                    <Typography variant="h4" style={styles.title}>{title}</Typography>
                    <Typography variant="body1" style={styles.description}>{description}</Typography>

                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        InputProps={{
                            style: { color: '#fff', borderBottom: '1px solid white' },
                        }}
                        error={Boolean(emailError)}
                        helperText={emailError || ''}
                        sx={styles.emailInput}
                    />
                </Box>
            </Box>
        </Container>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
        height: '100vh',
        overflow: 'hidden',
        '@media (max-width: 900px)': {
            flexDirection: 'column',
        },
        boxSizing: 'border-box', // Ensures the padding and border are included in the width and height calculations
    },
    editor: {
        width: '30%',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.1)', // Set a visible border around the editor box
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
        height: '100%',
        boxSizing: 'border-box', // Ensure the border is included in the height and width
        '@media (max-width: 900px)': {
            width: '100%',
            marginBottom: '1rem',
        },
    },
    preview: {
        width: '65%',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '10px',
        color: '#fff',
        overflowY: 'auto',
        height: '100%',
        border: '1px solid rgba(255, 255, 255, 0.5)', // Set a visible border around the preview box
        boxSizing: 'border-box', // Ensure the border is included in the height and width
        '@media (max-width: 900px)': {
            width: '100%',
            minHeight: 'auto',
        },
    },
    previewContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        marginBottom: '16px',
        fontSize: '2rem',
        textAlign: 'left',
        '@media (max-width: 600px)': {
            fontSize: '1.5rem',
        },
    },
    description: {
        marginBottom: '16px',
        textAlign: 'left',
        '@media (max-width: 600px)': {
            fontSize: '1rem',
        },
    },
    emailInput: {
        width: '100%',
        textAlign: 'left',
    },
};



export default EmailSettingsEditor;
