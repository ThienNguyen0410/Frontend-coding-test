import React from 'react'
import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const [phone, setphone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidPhoneNumber = (phoneNumber:number) => {

        const vietnamPhoneRegex = /^0[1-9][0-9]{8}$/;
        return vietnamPhoneRegex.test(phoneNumber);
    };

    const handleSubmit = async () => {
        setError('');

        if (!phone.trim()) {
            setError('Phone number is not empty');
            return;
        }

        if (!/^\d+$/.test(phone)) {
            setError('Phone just contains number letter');
            return;
        }

        if (!isValidPhoneNumber(phone)) {
            setError('Phone number is invalid!');
            return;
        }

        try {
            navigate('/otp');
            localStorage.setItem("phone", phone);
        } catch (err) {
            setError('Error! Try again');
        }
    }

    const handleInputChange = (e:any) => {
        setphone(e.target.value);
    };

  return (
    <>
        <div className="container">
            <h1>Đăng nhập</h1>
            <p>Số điện thoại</p>
            <input 
                type="text" 
                placeholder='Nhập số điện thoại của bạn'
                value={phone}
                onChange={handleInputChange}
            />
            {error && <p className="error-message">{error}</p>}
            <button className="login-button" onClick={handleSubmit}>Đăng nhập</button>
            <p>Hoặc</p>
            <button className="register-button">Đăng ký</button>
        </div>
    </>
  )
}

