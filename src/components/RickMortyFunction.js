import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const RickMortyFunction = () => {
    const [data, setData] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const result = await response.json();
            setData(result);
        };
        request();

    }, [id]);

    const increment = (arg) => {
        
        if (arg === "previous") {
            if(id > 1) {
                setId(prevState => prevState - 1);
            }
        } else if (arg === "next") {
            setId(prevState => prevState + 1);
        }
    }

    return (
        <div className="Function">
            <Card name={data.name} img={data.image} incrementId={increment} text="Function Component" />
        </div>
    )
}

export default RickMortyFunction;