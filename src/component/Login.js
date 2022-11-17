import { useRef, useState, useEffect } from 'react';

const Login = () => {
    const userRef = useRef();

    const [userName, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        const user = {
            username: userName,
            pwd: pwd
        };

        console.log(user)
    }

    return (
        <div>
            <h1>Sing in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    id="username"
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    ref={userRef}
                    value={userName}
                    required
                />

                <label htmlFor='password'>Password:</label>
                <input 
                    id="password"
                    type="password"
                    onChange={e => setPwd(e.target.value)}
                    value={pwd}
                    required
                />

                <button>Sign in</button>
            </form>
        </div>
    )
};

export default Login;