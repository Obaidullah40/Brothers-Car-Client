import React, { useEffect, useState } from 'react';

const MyOrders = () => {
     const [services, setServices] = useState([]);
     useEffect(() => {
         fetch("http://localhost:5000/books")
             .then((res) => res.json())
             .then((data) => setServices(data));
     }, []);

     // manage DELETE
     const handleDelete = (id) => {
         fetch(`http://localhost:5000/books/${id}`, {
             method: "DELETE",
         })
             .then((res) => res.json())
             .then((data) => {
                 if (data.deletedCount) {
                     window.confirm("Are You sure, You want to delete");
                     const remaining = services.filter(
                         (service) => service._id !== id
                     );
                     setServices(remaining);
                     alert("Deleted Successfully");
                 }
             });
     };
     return (
         <div className="manage_services_container">
             <h1 className="text-center text-danger mb-5">My Orders</h1>
             <div className="service-container">
                 {services.map((service) => (
                     <div className="single-service">
                         <div className="service-img">
                             <img src={service.image} alt="" />
                         </div>
                         <div className="service-info">
                             <h4>{service.name}</h4>
                             <h4>Your Name: {service.user}</h4>
                             <h4>
                                 <span>Your Phone:</span> {service.phone}
                             </h4>
                             <p>{service.description}</p>

                             <div
                                 className="mb-3 d-flex justify-content-evenly"
                                 style={{ textAlign: "center" }}
                             >
                                 <button className="btn btn-warning">
                                     Update
                                 </button>
                                 <button
                                     onClick={() => handleDelete(service._id)}
                                     className="btn btn-danger"
                                 >
                                     Delete
                                 </button>
                                 
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
};

export default MyOrders;