import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error message
        setError('');

        // Basic validation
        if (username.length < 3) {
            setError('Username must be at least 3 characters long');
            return;
        }

        // if (password.length < 6) {
        //     setError('Password must be at least 6 characters long');
        //     return;
        // }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        
    
    axios
      .post('http://localhost:5000/SignUp', { username, PassWord:password })
      .then((response) => {
        if (response.data.success) {
          console.log('Login successful!');
          localStorage.setItem('username', response.data.Name);
          navigate('/Login');
        } else {
          setError(response.data.message || 'Login failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setError('Error during login. Please try again.');
      });
  
        // For now, navigate to login page on successful validation
        
    };

    const handleLoginRedirect = () => {
        navigate('/login');
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
                                <tr>
                                    <td><label htmlFor="confirmPassword">Confirm Password :</label></td>
                                    <td>
                                        <input 
                                            type="password" 
                                            id="confirmPassword" 
                                            value={confirmPassword} 
                                            onChange={(e) => setConfirmPassword(e.target.value)} 
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
                                        <button type="submit" className="login-btn">Sign Up</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center" }}>
                                        <button type="button" className="login-btn" onClick={handleLoginRedirect}>Back to Login</button>
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

export default SignUp;