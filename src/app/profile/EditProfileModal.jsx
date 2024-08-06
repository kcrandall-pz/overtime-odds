import React, {useState} from "react";
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import axios from 'axios';
import styles from './Profile.module.css';

const EditProfileModal = ({ user, setUser, show, handleClose }) => {

    const profilePics = [
        '/profile_icons/_green.png',
        '/profile_icons/_blue.png',
        '/profile_icons/_purple.png',
        '/profile_icons/_red.png',
        '/profile_icons/_yellow.png',
    ];

    const [displayName, setDisplayName] = useState(user.display_name);
    const [selectedProfilePic, setSelectedProfilePic] = useState(user.profile_pic);

    const handleProfilePicClick = (picUrl) => {
        setSelectedProfilePic(picUrl);
    };

    const submitChanges = async () => {
        const updatedUser = {
            ...user,
            display_name: displayName,
            profile_pic: selectedProfilePic,
        };
        setUser(updatedUser);
        
        try {
            const response = await axios.patch('/api/editProfile', {
                email: user.email,
                displayName: displayName,
                profilePic: selectedProfilePic
            });

            if (response.status === 200) {
                console.log('Profile updated successfully');
                handleClose();
            } else {
                setError('Failed to update profile');
            }
        } catch (err) {
            console.error('Error updating profile:', err);
            setError('Failed to update profile');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control 
                            placeholder={user.display_name} 
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formProfilePic" className={styles['formGroup']}>
                        <Form.Label className={styles['formLabel']}>Select Profile Picture</Form.Label>
                        <Row className={styles['profilePicRow']}>
                            {profilePics.map((pic, index) => (
                                <Col key={index} xs={6} md={2} className={styles['profilePicCol']}>
                                    <Image
                                        src={pic}
                                        className={`${styles['profilePic']} ${selectedProfilePic === pic ? styles['selected'] : ''}`}
                                        onClick={() => handleProfilePicClick(pic)}
                                        thumbnail
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button className={styles["saveButton"]} onClick={submitChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditProfileModal;
