import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Filebase from "react-file-base64";

import TextFieldWrapper from "../components/FormsUi/Textfield";
import AutoComplete from "../components/FormsUi/Textfield/AutoComplete";
import { useState } from "react";
import ImageFile from "../components/FormsUi/Textfield/Imagefile";

const initialStates = {
        name: "",
        categories: "",
        ingredients: [],
        image: "",
        description: "",
};

const formValidation = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").required("Name is required"),
        categories: Yup.string().required("Category is required"),
        description: Yup.string().required("Description is required"),
        image: Yup.string().required("Image is required"),
});
const AddProduct = () => {


        const handleSubmit = (values, actions) => {
                console.log(values);
                setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                }, 1000);
        };
        const getCategories = [{ name: "Beverages" }, { name: "Starter" }, { name: "Dessert" }, {name: 'Other'}];

        return (
                <div className="flex justify-center h-screen p-10 col-span-10 ">
                        <Formik initialValues={{ ...initialStates }} validationSchema={formValidation} onSubmit={handleSubmit} className="border-2">
                                <Form className=" h-fit w-3/5 p-20 bg-white/75 drop-shadow-2xl rounded-lg ">
                                        <div className="col-span-12 grid grid-cols-12   w-full">
                                                <div className="col-span-12 flex gap-4">
                                                        <TextFieldWrapper name="name" label="Product Name" />
                                                        <ImageFile name='image' label='Image'/>
                                                </div>
                                        </div>
                                        <div className="col-span-12 grid grid-cols-12 gap-4  w-full mt-4">
                                                <div className="col-span-12 flex gap-4">
                                                        <TextFieldWrapper sx={{ height: "100px" }} name="description" label="Description" />
                                                </div>
                                        </div>
                                        <div className="col-span-12 grid grid-cols-12 gap-4  w-full mt-4">
                                                <div className="col-span-12 flex gap-4">
                                                        <AutoComplete options={getCategories} name="categories" label="Category" />
                                                </div>
                                        </div>
                                        <button type="submit">submit</button>
                                </Form>
                        </Formik>
                </div>
        );
};

export default AddProduct;
