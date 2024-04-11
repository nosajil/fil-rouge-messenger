import '../sass/tchat.scss';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3003');

export const TchatPage = () => {

    // Room State
    const [room, setRoom] = useState('');

    // Messages States
    const [message, setMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState('');
    const [messages, setMessages] = useState([]);

    const joinRoom = () => {
        if (room !== "") {
            socket.emit('join_room', room);
        }
    };

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
    };

    // Log a message
    const logMessage = (message, options) => {
        const $el = $('<li>').addClass('log').text(message);
        addMessageElement($el, options);
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            // setMessageReceived(data.message);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        });
    }, [socket]);

    return (
        <div className="tchat_container">
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
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }} placeholder="Message..." />
                <button onClick={sendMessage}>Send Message</button>
            </div>
            <br />
            <h3>Message:</h3>

            <ul className='messages'>
                {messages.map((message, index) => {
                    <li key={index}>
                        {message}
                    </li>
                })}
            </ul>
        </div>
    );
};