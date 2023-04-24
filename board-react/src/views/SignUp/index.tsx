import axios from 'axios'
import React, { useState } from 'react'

export default function SignUp() {
    const [requestResult, setRequestResult] = useState<string>('');

    const signUpHandler = () => {
        const data = {
            "userEmail": "fuddms2@gmail.com",
            "userPassword": "qwer1234!!",
            "userPasswordCheck": "qwer1234!!",
            "userNickname": "John Doe",
            "userPhoneNumber": "010-0000-0000",
            "userAddress": "대한민국 서울시",
            "userAddressDetail": "종로구"
        };
        axios
        .post('http://localhost:4000/api/auth/signUp', data)
        .then((response) => {
            setRequestResult('Success!!');
        })
        .catch((error) => {
            setRequestResult('failed!!');
        })    
    };
  return (
    <div>
        <h3>{requestResult}</h3>
        <button onClick={() => signUpHandler()}>회원가입</button>
    </div>
  )
};
