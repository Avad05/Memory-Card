import { useState, useEffect } from "react";
export default function Render(){
        const [images, setImages] = useState ([]);

        useEffect(() =>{
            fetch("https://dattebayo-api.onrender.com/characters")
            .then((res) => res.json())
            .then((data) => setImages(data.characters))
            .then((error) => console.log(error))
        }, [])

        return(
            <>
            <h2>
            {Array.isArray(images) && images.map(img => (
           <img key={img.id} src={img.images[0]} alt="Fetched" width={150} />
            ))}
            </h2>
            </>
        )
}