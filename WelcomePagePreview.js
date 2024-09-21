import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const WelcomePagePreview = ({ title, description, buttonText, image, imageAlignment }) => {
    // Default props for static content (you can adjust them or pass them dynamically)
    const defaultTitle = title || 'Welcome to our form';
    const defaultDescription = description || 'This is a description of the form';
    const defaultButtonText = buttonText || 'Start';
    const defaultImage = image || 'https://via.placeholder.com/300'; // Placeholder image
    const defaultAlignment = imageAlignment || 'right'; // Image alignment

    return (
        <Box style={styles.previewContent}>
            <Box
                style={{
                    ...styles.previewContainer,
                    flexDirection: defaultAlignment === 'left' ? 'row' : 'row-reverse', // Adjust flex direction based on alignment
                }}
            >
                {defaultImage && (
                    <Box style={styles.previewImage}>
                        <img src={defaultImage} alt="Preview" style={{ width: '300px', borderRadius: '10px' }} />
                    </Box>
                )}
                <Box style={styles.previewText}>
                    <Typography variant="h3" style={styles.title}>
                        {defaultTitle}
                    </Typography>
                    <Typography variant="body1" style={styles.description}>
                        {defaultDescription}
                    </Typography>
                    <Button variant="contained" size="large" style={styles.button}>
                        {defaultButtonText}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

const styles = {
    previewContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    previewContainer: {
        display: 'flex',
        gap: '3rem', // Space between text and image
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewText: {
        textAlign: 'left',
    },
    title: {
        marginBottom: '16px',
    },
    description: {
        marginBottom: '16px',
    },
    button: {
        marginTop: '16px',
        backgroundColor: '#fff',
        color: '#000',
    },
    previewImage: {
        flex: '0 0 auto',
    },
};

export default WelcomePagePreview;
