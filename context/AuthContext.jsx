/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// import io from 'socket.io-client';
import { io } from 'socket.io-client';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [authUser, setAuthUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);

  // CHECK IF USER IS AUTHENTICATED AND IF SO, SET THE USER DATA AND CONNECT THE SOCKET

  const checkAuth = async () => {
    try {
      const { data } = await axios.get('/api/auth/check');
      if (data.success) {
        setAuthUser(data.user);
        connectSocket(data.user);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // LOGIN FUNCTION TO HANDLE USER AUTHENTICATION AND SOCKET CONNECTION

  const login = async (state, credentials) => {
    try {
      const { data } = await axios.post(`/api/auth/${state}`, credentials);
      if (data.success) {
        setAuthUser(data.userData);
        connectSocket(data.userData);
        // axios.defaults.headers.common['token'] = data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        // axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        setToken(data.token);
        localStorage.setItem('token', data.token);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.success(error.message);
    }
  };

  // LOGOUT FUNCTION TO HANDLE USER LOGOUT AND SOCKET DISCONNECTION

  const logout = async () => {
    localStorage.removeItem('token');
    setToken(null);
    setAuthUser(null);
    setOnlineUsers([]);
    axios.defaults.headers.common['token'] = null;
    // delete axios.defaults.headers.common['Authorization'];
    toast.success('Logged Out Successfully');
    socket.disconnect();
  };

  // UPDATE PROFILE FUNCTION TO HANDLE PROFILE UPDATES

  const updateProfile = async body => {
    try {
      const { data } = await axios.put('/api/auth/update-profile', body);
      if (data.success) {
        setAuthUser(data.user);
        toast.success('Profile Updated Successfully');
      }
    } catch (error) {
      //   toast.success(error.message);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // CONNECT SOCKET FUNCTION TO HANDLE SOCKET CONNECTION AND ONLINE USERS UPDATES
  const connectSocket = userData => {
    if (!userData || socket?.connected) {
      return;
    }
    const newSocket = io(backendUrl, {
      query: {
        userId: userData._id,
      },
    });
    // newSocket.connect();
    setSocket(newSocket);

    newSocket.on('getOnlineUsers', userIds => {
      setOnlineUsers(userIds);
    });
  };

  useEffect(() => {
    if (!token) return;
    if (token) {
      //   axios.defaults.headers.common['token'] = token;
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    checkAuth();
  }, [token]);
  const value = {
    axios,
    authUser,
    onlineUsers,
    socket,
    login,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
