import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/')}>로그인</button>
        </div>
    )
}
