import {
    Routes,
    Route,
    NavLink,
    Navigate,
    useNavigate,
  } from 'react-router-dom';
  import { useContext } from "react";
  import React from 'react';
  import { MyContext } from '../App';
  
  const ProtectedRoute = ({ children }) => {
    const { key, setKey } = useContext(MyContext);
  
    if (!key) {
      return <Navigate to="/auth" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute