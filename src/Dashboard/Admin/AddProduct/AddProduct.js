import {
    Button, CircularProgress,
    Grid,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./AddProduct.css";



const AddProduct = () => {
    const [formData, setFormData] = useState({});
    const { user, loading } = useAuth();

    // get login form data
    const handleFormOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    };

    // login form
    const handleAddProducts = (e) => {
        fetch(" https://whispering-basin-97817.herokuapp.com/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Product Add Successfully");
                }
            });
        e.preventDefault();
    };

    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid
                        item
                        sx={{ mt: 0, textAlign: "center" }}
                        xs={0}
                        sm={3}
                        md={3}
                    ></Grid>
                    <Grid
                        item
                        sx={{ mt: 10, textAlign: "center" }}
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        <Typography variant="h5" gutterBottom>
                            Add a Product
                        </Typography>
                        <form
                            style={{ width: "90%", margin: "0 auto" }}
                            onSubmit={handleAddProducts}
                        >
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{ width: "100%", m: 1 }}
                                label="Product Name"
                                name="name"
                                type="text"
                                onBlur={handleFormOnBlur}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{ width: "100%", m: 1 }}
                                label="Product Price"
                                type="number"
                                name="price"
                                onBlur={handleFormOnBlur}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            $
                                        </InputAdornment>
                                    ),
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Product Details"
                                sx={{ width: "100%", m: 1 }}
                                name="description"
                                onBlur={handleFormOnBlur}
                                multiline
                                rows={4}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{ width: "100%", m: 1 }}
                                label="Image Url"
                                name="pic"
                                type="text"
                                onBlur={handleFormOnBlur}
                            />
                            <Button
                                sx={{ width: "100%", m: 1 }}
                                type="submit"
                                variant="contained"
                                style={{ backgroundColor: "#1BA370" }}
                            >
                                Add
                            </Button>
                        </form>

                        {/* {user?.email && <Alert sx={{ mt: 3 }} severity="success">Product added Successfully</Alert>} */}
                        {/* {authError && <Alert sx={{ mt: 3 }} severity="error">Error</Alert>} */}
                        <br />
                        {loading && (
                            <CircularProgress
                                sx={{ textAlign: "center", mt: 10 }}
                            />
                        )}
                    </Grid>
                    <Grid
                        item
                        sx={{ mt: 0, textAlign: "center" }}
                        xs={0}
                        sm={3}
                        md={3}
                    ></Grid>
                </Grid>
            </Container>
        </>
    );
};
//     const { register, handleSubmit, reset } = useForm();
//     const onSubmit = (data) => {
//         console.log(data);
//         axios
//             .post("https://whispering-basin-97817.herokuapp.com/services", data)
//             .then((res) => {
//                 if (res.data.insertedId) {
//                     alert("added successfully");
//                     reset();
//                 }
//             });
//     };
//     return (
//         <div className="add-service">
//             <h2>ADD A SERVICE</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                     {...register("name", { required: true, maxLength: 20 })}
//                     placeholder="Name"
//                 />
//                 <textarea
//                     {...register("description")}
//                     placeholder="Description"
//                 />
//                 <input type="number" {...register("Cost")} placeholder="Cost" />
//                 <input {...register("image")} placeholder="Image url" />
//                 <input type="submit" />
//             </form>
//         </div>
//     );
// };

export default AddProduct;
