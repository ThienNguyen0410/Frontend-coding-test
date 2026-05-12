import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './otp.css'

export default function Otp() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [valid, setValid] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const timerRef = useRef(null);

    // Countdown timer effect by using useEffect hooks
    useEffect(() => {
        if (countdown > 0) {
            timerRef.current = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } 

        else {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [countdown]);

    const handleInputChange = (index:any, value:any) => {
        if (!/^\d*$/.test(value)) return;

        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }

        const isValid = newOtp.every(digit => digit !== '');
        setValid(isValid);
    };

    const handleKeyDown = (index:any, e:any) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '') {
                if (index > 0) {
                    inputRefs.current[index - 1]?.focus();
                }
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
                setValid(false);
            }
            e.preventDefault();
        }
    };

    const handleSubmit = () => {
        if (valid) {
            otp.join('');
        }
    };

    const handleResendOtp = () => {
        // Reset OTP input
        setOtp(['', '', '', '']);
        setValid(false);
        setCountdown(30);
        inputRefs.current[0]?.focus();

    };

    return (
        <>
            <div className="container">
                <h1>NHẬP OTP</h1>
                <p>Một mã OTP vừa được gửi vào số {localStorage.getItem("phone")}</p>

                <div className="input-otp">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            id={`num${index + 1}`}
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            placeholder="0"
                        />
                    ))}
                </div>
                <button
                    className="confirm-btn"
                    disabled={!valid}
                    onClick={handleSubmit}
                >
                    Xác nhận
                </button>

                <div className="resend-section">
                    {countdown > 0 ? (
                        <p className="countdown-text">
                            Gửi lại OTP sau {countdown} giây
                        </p>) : 
                        (<button 
                            className="resend-btn"
                            onClick={handleResendOtp}
                        >
                            Gửi lại OTP
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}
