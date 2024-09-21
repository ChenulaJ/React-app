import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { LeftAlignIcon, RightAlignIcon } from './Icons'; // Assuming custom icons for placement buttons
import { FormContext } from './FormContext'; // Importing the context

const WelcomePageEditor = () => {
    const { welcomeTitle, setWelcomeTitle, welcomeDescription, setWelcomeDescription, welcomeButtonText, setWelcomeButtonText, welcomeImage, setWelcomeImage, welcomeImageAlignment, setWelcomeImageAlignment } = useContext(FormContext); // Accessing context
    const [localImage, setLocalImage] = useState(null); // Temporary state for image preview
    const navigate = useNavigate();

    // Load saved content on page load from the context
    useEffect(() => {
        if (welcomeImage) {
            setLocalImage(welcomeImage);
        }
    }, [welcomeImage]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setWelcomeImage(reader.result); // Save the image to context
                setLocalImage(reader.result); // Update local image state
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAlignmentChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setWelcomeImageAlignment(newAlignment); // Save alignment to context
        }
    };

    const handleSave = () => {
        // Save data to context
        console.log('Page data saved to context!');
    };

    return (
        <Container style={styles.container}>
            <Box style={styles.editor}>
                <Typography variant="h6">Settings</Typography>

                <Button variant="outlined" onClick={() => navigate('/')}>
                    Back to Home
                </Button>

                <TextField
                    label="Title"
                    value={welcomeTitle}
                    onChange={(e) => setWelcomeTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={welcomeDescription}
                    onChange={(e) => setWelcomeDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Button Text"
                    value={welcomeButtonText}
                    onChange={(e) => setWelcomeButtonText(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                >
                    Upload Image
                    <input type="file" hidden onChange={handleImageUpload} />
                </Button>

                {localImage && (
                    <Box style={styles.imagePlacementWrapper}>
                        <Box style={styles.imagePreview}>
                            <img src={localImage} alt="Preview" style={{ width: '100%', borderRadius: '10px' }} />
                        </Box>

                        <Box style={styles.placementOptions}>
                            <Typography variant="subtitle1" gutterBottom>Placement</Typography>
                            <ToggleButtonGroup
                                value={welcomeImageAlignment}
                                exclusive
                                onChange={handleAlignmentChange}
                                aria-label="image alignment"
                                sx={styles.toggleGroup}
                            >
                                <ToggleButton value="left" aria-label="left aligned">
                                    <LeftAlignIcon />
                                </ToggleButton>
                                <ToggleButton value="right" aria-label="right aligned">
                                    <RightAlignIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                )}

                {/* Save Button */}
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

            <Box style={styles.preview}>
                <Box 
                    style={{
                        ...styles.previewContent, 
                        flexDirection: welcomeImageAlignment === 'left' ? 'row' : 'row-reverse'
                    }}
                >
                    {localImage && (
                        <Box style={styles.previewImage}>
                            <img
                                src={localImage}
                                alt="Preview"
                                style={{ width: '300px', borderRadius: '10px' }}
                            />
                        </Box>
                    )}

                    <Box style={styles.previewText}>
                        <Typography variant="h3" style={styles.title}>{welcomeTitle}</Typography>
                        <Typography variant="body1" style={styles.description}>{welcomeDescription}</Typography>
                        <Button variant="contained" size="large" sx={styles.button}>{welcomeButtonText}</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
    },
    editor: {
        width: '30%',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
    },
    imagePlacementWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    placementOptions: {
        display: 'grid',
        justifyContent: 'center',
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
        minHeight: 'calc(100vh - 4rem)',
    },
    previewContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '3rem',
        textAlign: 'center',
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
    imagePreview: {
        width: '100%',
    },
    previewImage: {
        flex: '0 0 auto',
    },
    toggleGroup: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default WelcomePageEditor;
