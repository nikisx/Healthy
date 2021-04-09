import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import './Login.css';

const Login = ({
    history
}) => {
    const [error, setError] = useState("");

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                history.push('/');
            })
            .catch(err => setError(err.message));
    };

    return (
        <section  className="section background-white">
             <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Log<span className="text-primary">in</span></h2>
            <form className="login" onSubmit={onLoginFormSubmitHandler}>
            <input name="username"  type="text" placeholder="Email"/>
  <input name="password" type="password" placeholder="Password"/>
                {/* <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Login" />
                </fieldset> */}
                  <button className="form-button submit">Login</button>
            </form>
            <p className="text-redirect">Don't have an account ? <Link to="/register" className="text-primary">Register</Link></p>
            {error !== "" ? <div className="error-login">{error}</div> : null}
        </section>
    );
};

export default Login;