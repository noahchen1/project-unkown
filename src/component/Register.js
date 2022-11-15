import { useRef, useState, useEffect } from 'react';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input
                ref={userRef}
                id="username"
                type="text"
                onChange={e => setUsername(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
            />
            <p>
                4 to 24 characters. <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="password">Password:</label>
            <input 
                id="password"
                type="password"
                onChange={e => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                required
            />
        </form>
    )
};

export default Register;