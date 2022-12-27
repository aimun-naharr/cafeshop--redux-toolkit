import React from "react";
import ItemCard from "./ItemCard";

const items = [
        {
                name: "Cappucino",
                category: "Beverages",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: "very bad",
                price: 15
        },
        {
                name: "Cookies",
                category: "Beverages",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: "very bad",
                price: 15
        },
        {
                name: "Pancake",
                category: "Beverages",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: "very bad",
                price: 15
        },
        {
                name: "Crossiants",
                category: "Beverages",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: "very bad",
                price: 15
        },
];
const ItemsContainer = () => {
        return (
                <div className="flex gap-4 mt-8 mb-8 flex-wrap">
                        {
                         items.map(item=><ItemCard item={item}/>)
                        }
                </div>
        );
};

export default ItemsContainer;
