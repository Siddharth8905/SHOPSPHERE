import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error message
        setError('');

        // Validate username and password
        
        axios
      .post('http://localhost:5000/Login', { username, PassWord:password })
      .then((response) => {
        if (response.data.success) {
          console.log('Login successful!');
          localStorage.setItem('username', response.data.Name);
          navigate('/Loggedinpage');
        } else {
          setError(response.data.message || 'Login failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setError('Error during login. Please try again.');
      });
    };

    const handleSignUp = () => {
        navigate('/Signup');
    };

    return (
        <>
            <header><h1>SHOPSPHERE</h1></header>
            <div className='background'>
                <div className='container'>  
                    <form onSubmit={handleSubmit}>
                        <table style={{ borderCollapse: "collapse", margin: "auto" }}>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="username">Username :</label></td>
                                    <td>
                                        <input 
                                            type="text" 
                                            id="username" 
                                            value={username} 
                                            onChange={(e) => setUsername(e.target.value)} 
                                            required 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="password">Password :</label></td>
                                    <td>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                            required 
                                        />
                                    </td>
                                </tr>
                                {/* Error message display */}
                                {error && (
                                    <tr>
                                        <td colSpan="2" style={{ textAlign: "center", color: "red" }}>
                                            {error}
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center" }}>
                                        <button type="submit" className="login-btn">Login</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center" }}>
                                        <span>Don't have an account? </span>
                                        <a onClick={handleSignUp} className='anchor' >Sign Up</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;