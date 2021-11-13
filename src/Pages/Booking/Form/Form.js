import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Form = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { user } = useAuth();
    const { name, pic, Price, description } = props?.service;
    console.log(props.service);
    const onSubmit = (data) => {
        const { user, email, city, address, phone } = data;
        const status = "pending";
        const order = {
            name,
            pic,
            Price,
            description,
            user,
            email,
            city,
            address,
            phone,
            status,
        };
        fetch("https://whispering-basin-97817.herokuapp.com/books", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Order processed Successfully");

                    reset();
                }
            });
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-75"
                    defaultValue={user.displayName}
                    {...register("user")}
                />

                <input
                    className="w-75"
                    defaultValue={user.email}
                    {...register("email", { required: true })}
                />

                {errors.email && (
                    <span className="error">This field is required</span>
                )}

                <input
                    className="w-75"
                    placeholder="Address"
                    defaultValue=""
                    {...register("address")}
                />

                <input
                    className="w-75"
                    placeholder="City"
                    defaultValue=""
                    {...register("city")}
                />

                <input
                    className="w-75"
                    placeholder="phone number"
                    defaultValue=""
                    {...register("phone")}
                />

                <input className="btn-success btn" type="submit" />
            </form>
        </div>
    );
};

export default Form;
