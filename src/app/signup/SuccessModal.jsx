import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Signup.module.css';
import { useRouter } from 'next/navigation';

function successModal() {
  const [show, setShow] = useState(true);
  const router = useRouter();

  const handleClose = () => setShow(false);

  const returnHome = () => {
    router.push('/home');
  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for registering! Please return to the home page and sign in.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className={styles['returnHomeButton']} onClick={returnHome}>
            Return Home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default successModal;