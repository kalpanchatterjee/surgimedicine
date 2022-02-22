import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FiUpload } from "react-icons/fi";
const AddProduct = (props) => {
    const [product_name, setProductName] = useState("");
    const [product_desc, setProductDescription] = useState("");
    const [category_id, setCategoryId] = useState(0);
    const [price, setPrice] = useState(0);
    const [listofCategory, setListOfCategory] = useState([]);
    let image_ids = "";
    const triggerClick = () => {
        document.getElementById("productFile").click();
    };

    const getFiles = (e) => {
        let formdata = new FormData();
        formdata.append("image", e.target.files[0]);
        Axios.post(`http://54.89.60.0:5000/product/uploadImage`, formdata).then(
            (res) => {
                alert(res.data);
                image_ids = image_ids + res.data + ",";
            }
        );
    };

    const addProduct = () => {
        alert(image_ids);
        let productDetails = {
            product_name: product_name,
            product_desc: product_desc,
            price: price,
            category_id: category_id,
            product_image_id: image_ids,
        };
        Axios.post(
            `http://54.89.60.0:5000/product/addProduct`,
            productDetails
        ).then((res) => {
            alert(res.data);
        });
        image_ids = "";
    };
    useEffect(() => {
        Axios.get(`http://54.89.60.0:5000/category/getCategory`).then((res) => {
            console.log(res.data);
            setListOfCategory(res.data);
            if (res.data.length > 0) {
                setCategoryId(res.data[0].category_id);
            }
        });
    }, []);
    return (
        <div
            style={{
                paddingLeft: "10%",
                paddingRight: "10%",
            }}>
            <h3 className="text-center mt-2"> Add New Product</h3>
            <form>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="form-control"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Product Description:</label>
                    <input
                        type="text"
                        placeholder="Product Description"
                        className="form-control"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => {
                            setProductDescription(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input
                        placeholder="Price"
                        name="Price"
                        style={{ borderRadius: "10px" }}
                        className="form-control"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <select
                        style={{
                            width: "100%",
                            height: "40px",
                            borderRadius: "10px",
                            paddingLeft: "10px",
                        }}
                        onChange={(e) => {
                            setCategoryId(e.target.value);
                        }}>
                        {listofCategory.map((eachCategory) => (
                            <option value={eachCategory.category_id}>
                                {eachCategory.category_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Product Images:</label>
                    <input
                        placeholder="Email"
                        style={{ borderRadius: "10px", display: "none" }}
                        className="form-control"
                        type="file"
                        id="productFile"
                        onChange={(e) => getFiles(e)}
                    />
                    <FiUpload
                        className="ml-2"
                        size={20}
                        onClick={triggerClick}
                    />
                </div>

                <div className="d-flex justify-content-center w-100">
                    <button
                        onClick={addProduct}
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

export default AddProduct;
