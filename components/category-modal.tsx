'use client'
import Image from "next/image";
import { useState } from "react";

function ImageModal() {

    // const [image, setImage] = useState(imageSrc);

    // const setImageIndex = (index) => {
    //     setImage(propertyData.imagePaths[index].image);
    // }

    // const handleClickOutside = (event) => {
    //     if (!event.target.classList.contains("image")) {
    //         closeModal();
    //     }
    // };

    const [isFavourite, setIsFavourite] = useState(false);

    const toggleIsFavorite = () => {
        setIsFavourite(!isFavourite);
    };

    return (
        <div className="fixed inset-0 z-20 bg-gray-950 bg-opacity-80 overflow-y-auto h-full w-full flex items-center justify-center" >
            <div className="w-full mt-12 mx-4 shadow-lg rounded-md flex items-center justify-center flex-col ">
                <div className="text-center">
                    asd
                </div>


            </div>
        </div>
    );
}



export default ImageModal;