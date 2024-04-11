import '../sass/tchat.scss';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('userToken');

const socket = io.connect('http://localhost:3000');

export const TchatPage = () => {
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            axios.get('http://localhost:3000/api/users', { withCredentials: true })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données utilisateur', error);
            });
        };

        fetchUserData();
    }, []);

    const joinRoom = () => {
        if (room !== "") {
            socket.emit('join_room', room);
        }
    };

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
        setMessages(prevMessages => [...prevMessages, { content: message, sender: 'me' }]);
        setMessage('');
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log("Message received:", data);
            setMessages(prevMessages => [...prevMessages, { content: data, sender: data.sender }]);
        });
    }, []);

    return (
        <div className="tchat_wrapper">
            <div className="tchat_container">

                <h3>Message:</h3>
                <ul className='messages'>
                    {messages.map((msg, index) =>
                        <li key={index + 1} className={msg.sender}>
                            {msg.content}
                        </li>
                    )}
                </ul>
                <br />
                <div className="btn-container">
                    <input
                        placeholder='Room Number...'
                        onChange={(e) => {
                            setRoom(e.target.value);
                        }}
                    />
                    <button onClick={joinRoom}>Join Room</button>
                </div>
                <div className="btn_container">
                    <input
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }} placeholder="Message..." />
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
};
