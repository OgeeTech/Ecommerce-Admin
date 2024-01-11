// // New.jsx
// import React, { useState } from "react";
// import "./new.css";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { useDispatch } from "react-redux";
// import { addUser } from "../../Service/userSlice";

// const New = () => {
//     const dispatch = useDispatch();

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         password: "",
//         email: "",
//         phoneNumber: "",
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//         setErrors({
//             ...errors,
//             [name]: "",
//         });
//     };

//     const handleSubmit = async () => {
//         const newErrors = {};

//         if (!formData.firstName) {
//             newErrors.firstName = "First Name is required";
//         }
//         if (!formData.lastName) {
//             newErrors.lastName = "Last Name is required";
//         }
//         if (!formData.password) {
//             newErrors.password = "Password is required";
//         }
//         if (!formData.email) {
//             newErrors.email = "Email is required";
//         } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//             newErrors.email = "Invalid email format";
//         }
//         if (!formData.phoneNumber) {
//             newErrors.phoneNumber = "Phone Number is required";
//         }

//         if (Object.keys(newErrors).length === 0) {
//             try {
//                 console.log("Form Data Before Dispatch:", formData);

//                 // Dispatch the addUser action
//                 let result = await
//                     dispatch(addUser(formData));
//                 console.log(result);


//                 setFormData({
//                     firstName: "",
//                     lastName: "",
//                     password: "",
//                     email: "",
//                     phoneNumber: "",
//                 });
//                 console.log("Form Reset Successful!");
//             } catch (error) {
//                 console.error("Redux dispatch error:", error);
//             }
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className="new">
//             <Sidebar />
//             <div className="newContainer">
//                 <Navbar />
//                 <div className="top">
//                     <h1>Add New User</h1>
//                 </div>
//                 <div className="bottom">
//                     <div className="right">
//                         <form>
//                             <div className="formInput">
//                                 <label htmlFor="firstName">First Name</label>
//                                 <input
//                                     type="text"
//                                     id="firstName"
//                                     name="firstName"
//                                     placeholder="John"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                 />
//                                 <span className="error">{errors.firstName}</span>
//                             </div>

//                             <div className="formInput">
//                                 <label htmlFor="lastName">Last Name</label>
//                                 <input
//                                     type="text"
//                                     id="lastName"
//                                     name="lastName"
//                                     placeholder="Doe"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                 />
//                                 <span className="error">{errors.lastName}</span>
//                             </div>

//                             <div className="formInput">
//                                 <label htmlFor="password">Password</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     name="password"
//                                     placeholder="*****"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                 />
//                                 <span className="error">{errors.password}</span>
//                             </div>

//                             <div className="formInput">
//                                 <label htmlFor="email">Email</label>
//                                 <input
//                                     type="text"
//                                     id="email"
//                                     name="email"
//                                     placeholder="JohnDoe@gmail.com"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                                 <span className="error">{errors.email}</span>
//                             </div>

//                             <div className="formInput">
//                                 <label htmlFor="phoneNumber">Phone Number</label>
//                                 <input
//                                     type="text"
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     placeholder="08123434333"
//                                     value={formData.phoneNumber}
//                                     onChange={handleChange}
//                                 />
//                                 <span className="error">{errors.phoneNumber}</span>
//                             </div>



//                         </form>

//                         <div className="buttonContainer">
//                             <button type="button" onClick={handleSubmit}>
//                                 Send
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default New;



import React, { useState } from "react";
import * as Yup from "yup";
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        phoneNumber: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "", // Clear the error when the user types
        });
    };

    const handleSubmit = async () => {
        try {
            // Define Yup schema
            const schema = Yup.object().shape({
                firstName: Yup.string().required("First Name is required"),
                lastName: Yup.string().required("Last Name is required"),
                password: Yup.string().required("Password is required"),
                email: Yup.string().email("Invalid email format").required("Email is required"),
                phoneNumber: Yup.string().required("Phone Number is required"),
            });

            // Validate the form data against the schema
            await schema.validate(formData, { abortEarly: false });

            // If validation succeeds, you can submit the form
            // For now, you can just log the form data
            console.log("Form submitted:", formData);
        } catch (validationError) {
            // If validation fails, update the state to show error messages
            const newErrors = {};
            validationError.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.firstName}</span>
                            </div>

                            <div className="formInput">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.lastName}</span>
                            </div>

                            <div className="formInput">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    placeholder="*****"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.password}</span>
                            </div>

                            <div className="formInput">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="JohnDoe@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.email}</span>
                            </div>

                            <div className="formInput">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="08123434333"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.phoneNumber}</span>
                            </div>

                            <div className="formInput"></div>

                            <div className="buttonContainer">
                                <button type="button" onClick={handleSubmit}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
