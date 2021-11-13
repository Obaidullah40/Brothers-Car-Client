import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:5000/services", data).then((res) => {
            if (res.data.insertedId) {
                alert("added successfully");
                reset();
            }
        });
    };
    return (
        <div className="add-service">
            <h2>ADD A SERVICE</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true, maxLength: 20 })}
                    placeholder="Name"
                />
                <textarea
                    {...register("description")}
                    placeholder="Description"
                />
                <input type="number" {...register("Cost")} placeholder="Cost" />
                <input {...register("image")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};  
//     const { register, handleSubmit, reset } = useForm();
//     const onSubmit = (data) => {
//         console.log(data);
//         axios.post("http://localhost:5000/services", data).then((res) => {
//             if (data.insertedId) {
//                 alert("Successfully added Product");
//                 reset();
//             }
//         });
//     };
//     return (
//         <div>
//             <h2>Please Add a Product</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                     {...register("name", { required: true, maxLength: 20 })}
//                     placeholder="Name"
//                 />
//                 <textarea
//                     {...register("description")}
//                     placeholder="description"
//                 />
//                 <input {...register("pic")} placeholder="image url" />
//                 <input
//                     type="number"
//                     {...register("Price")}
//                     placeholder="Price"
//                 />
//                 <input type="submit" />
//             </form>
//         </div>
//     );
// };

export default AddProduct;