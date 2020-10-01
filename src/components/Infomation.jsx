import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const Infomation = () => {

    //To set the state of the buttons for the model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    //All infomation regarding to the rules of the game will be displayed here
        <div className="container , space bg-light">
                <h3 className="display-4">Welcome!</h3>
                <p className="lead">As you can see you're currently on the game page if you would like to assistance click 'Help'.<br />
                    To start the game simpliy click on 'start' and the snake will begine to move.
                </p>

                {/* modal to show rules */}
                <Button variant="primary" onClick={handleShow}>
                    Help
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Rules/Instructions:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ul>
                            <li>Controls: To move the snake use the arrow keys.</li>
                            <li>Aim: Collect apples for your snake to grow & see how long it can become.</li>
                            <li>Game over condition: Crashing into borders or yourself will result in the death of the snake.</li>
                        </ul>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default Infomation
