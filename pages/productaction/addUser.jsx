import React, { useState } from "react";
import Axios from "axios";
const AddUser = (props) => {
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const saveUserAsAdmin = () => {
        let userDetails = {
            first_name: first_name,
            last_name: last_name,
            email: username,
            phone: phone,
            password: password,
            role_id: 1,
        };
        Axios.post("http://54.89.60.0:5000/register", userDetails).then(
            (res) => {
                alert("user added as admin ;)");
            }
        );
    };
    return (
        <div
            style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: "10%",
            }}>
            <h3 className="text-center mt-2"> Add User As Admin</h3>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        autoComplete="none"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        autoComplete="none"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        placeholder="Last Name"
                        name="LastName"
                        style={{ borderRadius: "10px" }}
                        autoComplete="none"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        placeholder="Phone"
                        name="Phone"
                        style={{ borderRadius: "10px" }}
                        autoComplete="none"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        style={{ borderRadius: "10px" }}
                        autoComplete="none"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-flex justify-content-center w-100">
                    <button
                        onClick={saveUserAsAdmin}
                        className="btn btn-success mt-2"
                        style={{
                            height: "30px",
                            width: "70px",
                            fontSize: "14px",
                        }}
                        type="button">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
