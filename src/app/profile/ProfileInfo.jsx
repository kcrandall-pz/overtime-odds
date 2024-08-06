"use client"

import React, {useState} from "react";
import useStore from "../stores/useStore";
import styles from './Profile.module.css';
import { Card, Container, Image, Modal } from "react-bootstrap";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditProfileModal from './EditProfileModal';

const ProfileInfo = () => {
    const { user, setUser } = useStore();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    console.log('user', user)
    return(
        <>
            <Container className="mt-3">
                <Card>
                    <div className={styles['headContainer']}>
                        <Image src={user.profile_pic} thumbnail className={styles['profilepic']}/>
                        <div className={styles['namePlate']}>
                            <div className={styles['editIcon']}>
                                <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow}/>
                            </div>
                            <div className={styles['name']}>{user.display_name}</div>
                        </div>
                    </div>
                </Card>
            </Container>
            <EditProfileModal user={user} setUser={setUser} show={show} handleClose={handleClose}/>
        </>
    )
}

export default ProfileInfo;