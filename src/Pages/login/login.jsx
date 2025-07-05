import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Navigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            if (formData.email === 'admin@admin.com' && formData.password === 'admin123') {
                const userData = {
                    id: 1,
                    email: formData.email,
                    name: 'Admin User',
                    role: 'admin'
                };
                login(userData);
            } else {
                setError('Invalid email or password');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginForm">
                    <div className="logo">
                        <h1>Admin Dashboard</h1>
                        <p>Sign in to your account</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="admin@admin.com"
                                required
                            />
                        </div>
                        
                        <div className="inputGroup">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="admin123"
                                required
                            />
                        </div>
                        
                        {error && <div className="error">{error}</div>}
                        
                        <button type="submit" disabled={loading} className="loginButton">
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                    
                    <div className="loginHint">
                        <p>Demo credentials:</p>
                        <p>Email: admin@admin.com</p>
                        <p>Password: admin123</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;