import { useState } from "react"; 
import { NavLink, useNavigate } from "react-router-dom"; 
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import loginLottie from "../login.json";

const URL = "http://localhost:5500/api/auth/login";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { storeToken } = useAuth();
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const resData = await response.json();
            if (response.ok) {
                toast("Login Successful");
                storeToken(resData.token);
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                toast(resData.extraDetails ? resData.extraDetails : resData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section className="login-section">
            <div className="container login-container">
                <div className="login-image">
                    <Lottie options={defaultOptions} height={500} width={500} />
                </div>
                <div className="login-form">
                    <h1 className="login-heading">Log in to your Account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <br/>
                        <div className="signup-link">
                            <p>Don't have an Account? <NavLink to="/register" className="signup">Sign Up</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
