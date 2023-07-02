import "./register.css"
import { useState } from "react";

function Register() {
    const [form, setForm] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        password: "",
        CountryName: "",
        gender: "",
    });
    const [whole, setWhole] = useState([]);

    const fullNameHandler = (e) => {
        setForm({ ...form, fullName: e.target.value });
    };
    const companyNameHandler = (e) => {
        setForm({ ...form, companyName: e.target.value });
    };
    const emailHandler = (e) => {
        setForm({ ...form, email: e.target.value });
    };
    const phoneNumberHandler = (e) => {
        setForm({ ...form, phoneNumber: e.target.value });
    };
    const passwordHandler = (e) => {
        setForm({ ...form, password: e.target.value });
    };
    const CountryNameHandler = (e) => {
        setForm({ ...form, CountryName: e.target.value });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };
    const saveTodosToLocalStorage = (data) => {
        localStorage.setItem("formData", JSON.stringify(data));
    };

    const handleFormSubmit = () => {
        const formDatas = JSON.parse(localStorage.getItem("formData")) || []; // Initialize as empty array if localStorage data doesn't exist
        const updatedData = [...formDatas, form]; // Add new form data to existing data
        setWhole(updatedData);
        saveTodosToLocalStorage(updatedData);
        alert("Form Submitted Successfully");
    };
      

    console.log(form);
    return(
        <div className="register">
            <div class="container">
                <h1 class="form-title">Registration</h1>
                <form onSubmit={handleFormSubmit}>
                <div class="main-user-info">
                    <div class="user-input-box">
                        <label for="fullName">Full Name</label>
                        <input type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Full Name"
                            onChange={fullNameHandler}
                        />
                    </div>
                    <div class="user-input-box">
                        <label for="username">Company Name</label>
                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Company Name"
                            onChange={companyNameHandler}
                        />
                    </div>
                    <div class="user-input-box">
                        <label for="email">Business Email</label>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Business Email"
                            onChange={emailHandler}
                        />
                    </div>
                    <div class="user-input-box">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="number"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            onChange={phoneNumberHandler}
                        />
                    </div>
                    <div class="user-input-box">
                        <label for="password">Password</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={passwordHandler}
                        />
                    </div>
                    <div class="user-input-box">
                        <label for="confirmPassword">Country Name</label>
                        <input type="text"
                            id="CountryName"
                            name="CountryName"
                            placeholder="Enter Country Name"
                            onChange={CountryNameHandler}
                        />
                    </div>
                </div>
                <div class="gender-details-box">
                    <span class="gender-title">Gender</span>
                    <div class="gender-category">
                        <input 
                           type="radio"
                           name="gender"
                           id="male"
                           value="male"
                           checked={form.gender === "male"}
                           onChange={handleInputChange}
                        />
                        <label for="male">Male</label>
                        <input 
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={form.gender === "female"}
                            onChange={handleInputChange}
                        />
                        <label for="female">Female</label>
                        <input 
                           type="radio"
                           name="gender"
                           id="other"
                           value="other"
                           checked={form.gender === "other"}
                           onChange={handleInputChange}
                        />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div class="form-submit-btn">
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>

    </div>
    )
}
export default Register;