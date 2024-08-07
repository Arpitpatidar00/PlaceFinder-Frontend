import React, { useState } from 'react';
import './Feedback.css';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const Feedback = ({ isOpen, toggleModal }) => {
    const { userData } = useSelector((state) => state.auth);
    const [feedbackText, setFeedbackText] = useState('');
    const navigate = useNavigate();

    const handleFeedbackChange = (event) => {
        setFeedbackText(event.target.value);
    };

    const handleSubmitFeedback = async () => {
        try {
            const response = await fetch('https://travelling-backend.onrender.com/Feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback: feedbackText, userData }),
            });

            if (response.ok) {
                toast.success('Feedback sent successfully');
                setFeedbackText('');
                navigate('/home');
            } else {
                console.error('Failed to send feedback');
                toast.error('Failed to send feedback');
            }
        } catch (error) {
            console.error('Error sending :', error);
            toast.error('Error sending feedback');
        }
    };

    return (
        <>
        
            {isOpen && (
                <div className="modal-bg">
                    <div className="modal-content">
                        <button className="close-btn" onClick={toggleModal}>X</button>
                        <h1 className="text-center text-xl font-bold">Send Feedback</h1>
                        <textarea
                            placeholder="Your feedback..."
                            className="feedback-textarea"
                            value={feedbackText}
                            onChange ={handleFeedbackChange}
                        />
                        <button className="send-btn" onClick={handleSubmitFeedback}>Send Feedback</button>
                    </div>
                </div>
            )}
            
        </>
    );
}

export default Feedback;
