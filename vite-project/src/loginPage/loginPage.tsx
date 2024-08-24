import React, { useState } from "react";

const LoginPage: React.FC = () => {
    const[email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const[error, setError] = useState<string>('');


    const handleLogin = (e: React.FormEvent) =>
    {e.preventDefault()}


    if(email == '' || password == ''){
        setError('Please fill the form !!')
    }



    return(
        <div>
            <form onSubmit={handleLogin}>
                <div className="">
                    <label>USERNAME</label>
                    <input type="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                    <div className="">
                    <label>PASSWORD</label>
                    <input type="password"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}








export default LoginPage;