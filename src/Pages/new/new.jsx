import React, { useState } from "react";
import * as Yup from "yup";
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState(
        inputs.reduce((acc, input) => {
            acc[input.label.toLowerCase().replace(/\s+/g, '')] = "";
            return acc;
        }, {})
    );
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create dynamic Yup schema based on inputs
            const schemaFields = {};
            inputs.forEach(input => {
                const fieldName = input.label.toLowerCase().replace(/\s+/g, '');
                if (input.type === 'mail' || input.type === 'email') {
                    schemaFields[fieldName] = Yup.string().email("Invalid email format").required(`${input.label} is required`);
                } else {
                    schemaFields[fieldName] = Yup.string().required(`${input.label} is required`);
                }
            });

            const schema = Yup.object().shape(schemaFields);
            await schema.validate(formData, { abortEarly: false });

            console.log("Form submitted:", formData);
            alert("Form submitted successfully!");
            
            // Reset form
            setFormData(inputs.reduce((acc, input) => {
                acc[input.label.toLowerCase().replace(/\s+/g, '')] = "";
                return acc;
            }, {}));
            setFile("");
            
        } catch (validationError) {
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
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => {
                                const fieldName = input.label.toLowerCase().replace(/\s+/g, '');
                                return (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input
                                            name={fieldName}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            value={formData[fieldName]}
                                            onChange={handleChange}
                                        />
                                        {errors[fieldName] && (
                                            <span className="error">{errors[fieldName]}</span>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="buttonContainer">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;