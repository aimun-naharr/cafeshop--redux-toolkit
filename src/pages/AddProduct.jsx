import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ChipInput from "material-ui-chip-input";
import TextFieldWrapper from "../components/FormsUi/Textfield";
import AutoComplete from "../components/FormsUi/Textfield/AutoComplete";

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
});
const AddProduct = () => {
        const handleSubmit = (values, actions) => {
                setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                }, 1000);
        };
        const getCategories = [{ name: "Beverages" }, { name: "Starter" }, { name: "Dessert" }];

        return (
                <div className="flex justify-center h-screen p-10 col-span-10 ">
                        <Formik initialValues={{ ...initialStates }} validationSchema={formValidation} onSubmit={handleSubmit} className="border-2">
                                <Form className=" h-fit p-20 bg-white/75 shadow-lg rounded">
                                        <div className="col-span-12 grid grid-cols-12   w-full">
                                                <div className="col-span-12 flex gap-4">
                                                        <TextFieldWrapper name="name" label="Product Name" />
                                                        <ChipInput
                                                                name="tags"
                                                                variant="outlined"
                                                                label="Tags"
                                                                fullWidth
                                                                value={initialStates.ingredients}
                                                                onAdd={(chip) => handleAddChip(chip)}
                                                                onDelete={(chip) => handleDeleteChip(chip)}
                                                        />
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
