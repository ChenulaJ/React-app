import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext'; // Import the context to access form data

const HomePage = () => {
    const { welcomeTitle, welcomeDescription, welcomeImage, welcomeImageAlignment } = useContext(FormContext); // Added welcomeImage and welcomeImageAlignment
    const navigate = useNavigate();

    return (
        <Box sx={styles.container}>
            {/* Left Sidebar */}
            <Box sx={styles.sidebar}>
                <Typography variant="h6">Steps</Typography>
                <Typography variant="body2" color="textSecondary">
                    The steps users will take to complete the form
                </Typography>

                <Box sx={styles.stepList}>
                    <Button
                        sx={styles.stepButton}
                        onClick={() => navigate('/welcome-editor')}
                    >
                        Welcome screen
                    </Button>
                    <Button
                        sx={styles.stepButton}
                        onClick={() => navigate('/email-editor')}
                    >
                        Email
                    </Button>
                    <Button sx={styles.stepButton} disabled>
                        End screen
                    </Button>

                    <Button variant="outlined" sx={styles.addFieldButton}>
                        + Add field
                    </Button>
                </Box>

                <Box sx={styles.footerButtons}>
                    <Button variant="contained" sx={styles.saveButton}>
                        Save & Publish
                    </Button>
                    <Button variant="text" color="error">
                        Delete
                    </Button>
                </Box>
            </Box>

            {/* Right Preview Panel */}
            <Box sx={styles.preview}>
                {/* If the image exists, render it */}
                {welcomeImage && (
                    <Box
                        sx={{
                            ...styles.imageWrapper,
                            flexDirection: welcomeImageAlignment === 'left' ? 'row' : 'row-reverse', // Align image
                        }}
                    >
                        <img
                            src={welcomeImage}
                            alt="Welcome Preview"
                            style={styles.previewImage}
                        />
                    </Box>
                )}

                <Typography variant="h4" sx={styles.previewTitle}>
                    {welcomeTitle || 'Welcome to our form'}
                </Typography>
                <Typography variant="body1" sx={styles.previewDescription}>
                    {welcomeDescription || 'This is a description of the form'}
                </Typography>

                <Button variant="contained" sx={styles.startButton}>
                    Start
                </Button>
            </Box>
        </Box>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#000',
    },
    sidebar: {
        width: '25%',
        backgroundColor: '#fff',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    stepList: {
        marginTop: '1rem',
    },
    stepButton: {
        display: 'block',
        width: '100%',
        marginBottom: '0.5rem',
        textAlign: 'left',
        fontSize: '16px',
        justifyContent: 'flex-start',
    },
    addFieldButton: {
        marginTop: '1rem',
        width: '100%',
    },
    footerButtons: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    saveButton: {
        backgroundColor: '#000',
        color: '#fff',
    },
    preview: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: '2rem',
    },
    previewTitle: {
        marginBottom: '1rem',
        fontSize: '2rem',
    },
    previewDescription: {
        marginBottom: '2rem',
        fontSize: '1.25rem',
    },
    startButton: {
        fontSize: '1rem',
        padding: '0.75rem 2rem',
        backgroundColor: '#fff',
        color: '#000',
    },
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
    },
    previewImage: {
        maxWidth: '300px', // Limit image width
        borderRadius: '10px',
    },
};

export default HomePage;
