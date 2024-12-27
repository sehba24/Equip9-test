import React from 'react';
import { useForm } from 'react-hook-form';

const HookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitForm = (data) => {
        console.log(data); // Log form data to the console
    };

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
                <label>First Name:</label>
                <input
                    {...register("firstName", { required: "First Name is required" })}
                />
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
            </div>

            <div>
                <label>Last Name:</label>
                <input
                    {...register("lastName", { required: "Last Name is required" })}
                />
                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
            </div>

            <div>
                <label>Mobile Number:</label>
                <input
                    type="tel"
                    {...register("mobileNumber", { 
                        required: "Mobile Number is required", 
                        pattern: { value: /^[0-9]{10}$/, message: "Invalid Mobile Number" }
                    })}
                />
                {errors.mobileNumber && <span style={{ color: 'red' }}>{errors.mobileNumber.message}</span>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", { 
                        required: "Password is required", 
                        minLength: { value: 8, message: "Password must be at least 8 characters long" }
                    })}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default HookForm;
