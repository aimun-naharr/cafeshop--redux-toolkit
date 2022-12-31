import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Filebase from "react-file-base64";
import toast, { Toaster } from 'react-hot-toast';

import TextFieldWrapper from "../components/FormsUi/Textfield";
import AutoComplete from "../components/FormsUi/Textfield/AutoComplete";
import { useState } from "react";
import ImageFile from "../components/FormsUi/Textfield/Imagefile";
import { usePostProductMutation } from "../redux/features/productApiSlice";

const initialStates = {
        name: "",
        category: "",
        image: "",
        description: "",
};

const formValidation = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").required("Name is required"),
        category: Yup.string().required("Category is required"),
        description: Yup.string().min(6, "Too Short!").required("Description is required"),
        image: Yup.string().required("Image is required"),
});
const AddProduct = () => {
const [postProduct, {isLoading, isError, isSuccess}]=usePostProductMutation()

        const handleSubmit = (values, {resetForm}) => {
             console.log(values);
        //         setTimeout(() => {
        //                 postProduct(values)
                        
        //         }, 500);
        //        resetForm()
        };
        if(isSuccess){
                toast.success('Added')
        }
        if(isError){
                toast.error('Something went wrong, Please try again.')
        }
      
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
                                                        <AutoComplete options={getCategories} name="category" label="Category" />
                                                </div>
                                        </div>
                                       <div>
                                       <button type='submit' className={`w-full bg-yellow-900 rounded-lg text-white mt-8 py-3 ${isLoading && 'bg-gray-500'}`} >{isLoading? 'Adding...' : 'Add product'}</button>
                                       </div>
                                </Form>
                        </Formik>
                        <Toaster position="top-center"
 />
                </div>
        );
};

export default AddProduct;
