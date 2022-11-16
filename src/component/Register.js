import { useRef, useState, useEffect } from 'react';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [sucess, setSuccess] = useState(false);

    // auto focus on username field upon loaded
    useEffect(() => {
        userRef.current.focus();
    }, []);

    // testing entered username against the pre-determined criteria
    useEffect(() => {
        const isValidName = USER_REGEX.test(username);

        setValidName(isValidName);
    }, [username]);

    // testing password entered against the pre-determined criteria, also checking to confirm passwords are matched
    useEffect(() => {
        const isValidPwd = PWD_REGEX.test(pwd);
        const isMatched = pwd === matchPwd;

        setValidPwd(isValidPwd);
        setValidMatch(isMatched);
    }, [pwd, matchPwd]);

    const handleSubmit = e => {
        e.prevenDefault();

        setSuccess(true);
    };

    return (
        <div id="register-form-container">
            <form id="register-form" onSubmit={handleSubmit}>

                {/* username field */}
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

                {/* password field */}
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    onChange={e => setPwd(e.target.value)}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    required
                />
                <p>
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and a special character. <br />
                    Allowed special cahracters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                </p>

                {/* re-enter password field */}
                <label htmlFor='confirm-pwd'>Confirm Password:</label>
                <input
                    id="confirm-pwd"
                    type="password"
                    onChange={e => setMatchPwd(e.target.value)}
                    onFocus={() => setMatchPwdFocus(true)}
                    onBlur={() => setMatchPwdFocus(false)}
                />
                <p>Must match the first password!</p>

                <button>Sign up</button>
            </form>
        </div>

    )
};

export default Register;