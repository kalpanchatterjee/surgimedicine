import Axios from "axios";
import React, { useState } from "react";
import Container from "~/components/layouts/Container";
import { useRouter } from "next/router";
const MyAccountScreen = () => {
    const router = useRouter();
    const register = () => {
        let userDetails = {
            first_name: first_name,
            last_name: last_name,
            email: username,
            phone: phone,
            password: password,
        };
        Axios.post("http://54.89.60.0:5000/register", userDetails).then(
            (res) => {
                login();
            }
        );
    };
    function login() {
        let loginDetails = {
            email: username,
            password: password,
        };
        Axios.post("http://54.89.60.0:5000/login", loginDetails).then((res) => {
            let result = res.data[0];
            router.push({
                pathname: "/homes/home-3",
            });
            localStorage.setItem("user", JSON.stringify(result));
        });
    }
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container title="My Account">
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <form action="do_action" method="post">
                                    <div className="ps-form--review">
                                        <h2 className="ps-form__title">
                                            Login
                                        </h2>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Username or email address *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="email"
                                                autoComplete="none"
                                                // value={username}
                                                onChange={(e) =>
                                                    setUsername(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Password *
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control ps-form__input"
                                                    type="password"
                                                    autoComplete="none"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div className="input-group-append">
                                                    <a
                                                        className="fa fa-eye-slash toogle-password"
                                                        href="#"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-form__submit">
                                            <button
                                                className="ps-btn ps-btn--warning"
                                                type="button"
                                                onClick={login}>
                                                Log in
                                            </button>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="remember"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            className="ps-account__link"
                                            href="lost-password.html">
                                            Lost your password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-6">
                                <form action="do_action" method="post">
                                    <div className="ps-form--review">
                                        <h2 className="ps-form__title">
                                            Register
                                        </h2>

                                        {/* user name field */}
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Email address *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="email"
                                                autoComplete="none"
                                                // value={username}
                                                onChange={(e) =>
                                                    setUsername(e.target.value)
                                                }
                                            />
                                        </div>

                                        {/* first name field */}
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                First Name *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="text"
                                                autoComplete="none"
                                                value={first_name}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                            />
                                        </div>

                                        {/* last name field */}
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Last Name *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="text"
                                                autoComplete="none"
                                                value={last_name}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        </div>

                                        {/* phone number field */}
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Phone *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="number"
                                                autoComplete="none"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Password *
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control ps-form__input"
                                                    type="password"
                                                    autoComplete="none"
                                                    // value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div className="input-group-append">
                                                    <a
                                                        className="fa fa-eye-slash toogle-password"
                                                        href="#"></a>
                                                </div>
                                            </div>
                                            <p className="ps-form__text">
                                                Hint: The password should be at
                                                least twelve characters long. To
                                                make it stronger, use upper and
                                                lower case letters, numbers, and
                                                symbols like ! " ? $ % ^ &amp;
                                                ).
                                            </p>
                                        </div>
                                        <div className="ps-form__submit">
                                            <button
                                                className="ps-btn ps-btn--warning"
                                                onClick={register}
                                                type="button">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyAccountScreen;
