import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import { Toaster, toast } from "react-hot-toast";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageToText = () => {
    const [extractedText, setExtractedText] = useState('');
    const [image, setImage] = useState(null);
    const [extracting, setExtracting] = useState(false);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            setExtracting(true);
            acceptedFiles.forEach((file) => {
                setImage(file);
                Tesseract.recognize(file, 'eng', { logger: (m) => console.log(m) })
                    .then(({ data: { text } }) => {
                        setExtractedText(text);
                        setExtracting(false);
                    })
                    .catch((err) => {
                        console.error('Tesseract error:', err);
                        setExtracting(false);
                    });
            });
        },
    });

    console.log(image ? "Hello" : "Nothing");

    const handleCopyText = async () => {
        try {
            await navigator.clipboard.writeText(extractedText);
            toast.success("Copied");
        } catch (err) {
            console.error('Error copying text to clipboard:', err);
        }
    }

    return (
        <div className='flex items-center flex-col justify-between gap-5 h-screen'>
            <Toaster />
            <Navbar />
            <div className="p-2 rounded-lg flex flex-col items-center justify-around gap-7 w-full sm:flex-row">
                <div {...getRootProps()} className={`bg-gray-700 h-72 w-full flex items-center justify-center rounded-lg ${isDragActive} ? 'active' : ''`}>
                    <input {...getInputProps()} className={`${image ? "hidden" : ""}`} />
                    {
                        image && (
                            <img className="h-full w-full" src={URL.createObjectURL(image)} alt="Extracted Image" />
                        )
                    }
                    <p className={`p-2 text-white ${image ? "hidden" : ""}`}>Drag and drop an image here, or click to select a file</p>
                </div>
                <div className={`bg-slate-600 flex items-center flex-col justify-between gap-5 p-3 rounded-lg ${extractedText ? "h-full" : "h-80"} w-full`}>
                    <div className="text-white w-full">
                        {extracting ? (
                            <p className="text-md font-small">Extracting...</p>
                        ) : (
                            <p className="text-md font-small">Extracted Text:</p>
                        )} 
                        {extractedText && (
                            <pre className="p-3 bg-black rounded-lg text-green-200 w-full">{extractedText}</pre>
                        )}
                    </div>
                    <div>
                        <button onClick={handleCopyText} className="p-2 bg-black hover:scale-105 transition-all duration-500 text-white text-center rounded-lg text-md font-medium">{ extracting ? "Extracting Text" : "Copy to Clipboard" }</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ImageToText;