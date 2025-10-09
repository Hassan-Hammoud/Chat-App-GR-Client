/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './AuthContext';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [unSeenMessages, setUnseenMessages] = useState({});
  const { socket, axios } = useContext(AuthContext);

  // FUNCTION TO GET ALL USERS FOR SIDEBAR
  const getUsers = async () => {
    try {
      const { data } = await axios.get('/api/messages/users');

      if (data.success) {
        setUsers(data.users);
        setUnseenMessages(data.unSeenMessages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // FUNCTION TO GET MESSAGE FOR SELECTED USER
  const getMessages = async userId => {
    try {
      const { data } = await axios.get(`/api/messages/${userId}`);
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // FUNCTION TO SEND MESSAGE TO SELECTED USER

  const sendMessage = async messageData => {
    try {
      const { data } = await axios.post(
        `/api/messages/send/${selectedUsers._id}`,
        messageData
      );
      if (data.success) {
        setMessages(prevMessages => [...prevMessages, data.newMessage]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // FUNCTION TO SUBSCRIBE TO MESSAGE FOR SELECTED USER

  const subscribeToMessages = async () => {
    if (!socket) return;
    socket.on('newMessage', newMessage => {
      if (selectedUsers && newMessage.senderId === selectedUsers._id) {
        newMessage.seen = true;
        setMessages(prevMessages => [...prevMessages, newMessage]);
        axios.put(`/api/message/mark/${newMessage._id}`);
      } else {
        setUnseenMessages(prevUnseenMessages => ({
          ...prevUnseenMessages,
          [newMessage.senderId]: prevUnseenMessages[newMessage.senderId]
            ? prevUnseenMessages[newMessage.senderId] + 1
            : 1,
        }));
      }
    });
  };

  // FUNCTION TO UNSUBSCRIBE FROM MESSAGES

  const unSubscribeFromMessages = () => {
    if (socket) socket.off('newMessage');
  };

  useEffect(() => {
    subscribeToMessages();
    return () => unSubscribeFromMessages();
  }, [socket, selectedUsers]);

  const value = {
    messages,
    users,
    selectedUsers,
    getUsers,
    getMessages, // ! check it
    setMessages,
    sendMessage,
    setSelectedUsers,
    unSeenMessages,
    setUnseenMessages,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
