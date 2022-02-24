import React, { useState } from "react";
import Axios from "axios";
import Router from "next/router";
const AddCategory = (props) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDesc, setCategoryDesc] = useState("");
    const saveCategory = () => {
        let categoryDetails = {
            category_name: categoryName,
            category_desc: categoryDesc,
        };
        Axios.post(
            "http://54.89.60.0:5000/category/addCategory",
            categoryDetails
        )
            .then((res) => {
                alert(res.data);
            })
            .then(() => {
                Router.reload();
            });
    };
    return (
        <div
            style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: "10%",
            }}>
            <h3 className="text-center mt-2"> Add Category</h3>
            <form>
                <div className="form-group">
                    <label>Category Name:</label>
                    <input
                        type="text"
                        placeholder="Category Name"
                        className="form-control"
                        autoComplete="none"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Category Desc:</label>
                    <input
                        type="text"
                        placeholder="Category Desc"
                        className="form-control"
                        autoComplete="none"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => {
                            setCategoryDesc(e.target.value);
                        }}
                    />
                </div>

                <div className="d-flex justify-content-center w-100">
                    <button
                        onClick={saveCategory}
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

export default AddCategory;
