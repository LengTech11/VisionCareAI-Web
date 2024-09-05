import { useDropzone } from "react-dropzone";
import { useState } from "react";
import axios from "axios";
import { predictionApi } from "../utils/api";
import { ScanPoster } from "../utils/variables";

export default function DropzoneImage() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(0)  

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0]
        uploadImage(file)
    }   

    const uploadImage = (file) => {
        const formData = new FormData()
        formData.append("file", file)

        axios.post(predictionApi, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setUploadProgress(progress)
            } 
        }).then((response) => {
            setSelectedImage(URL.createObjectURL(file))
            setUploadProgress(0) //Reset the progress after upload is complete
        }).catch((error) => {
            console.log("Upload failed:", error)
            setUploadProgress(0) // Reset the progress on error
        })
    }
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: "image/*" })
    
    return (
        <div>
            <img src={ScanPoster} alt="scan poster" className="w-full"/>
            <div className="container my-2">
                <div className="flex justify-between gap-5 [&>div>p]:my-4 [&>div>p]:text-md [&>div>p]:font-semibold">
                    <div className="w-1/2">
                        <p className="text-xl">Upload picture of eye x-ray to detect disease</p>
                        <div {...getRootProps()} className="h-[350px] w-full mx-auto border-2 border-dashed border-primary flex justify-center items-center cursor-pointer">
                            <input {...getInputProps()} />
                            {uploadProgress > 0 && uploadProgress < 100 && (
                                <p>{uploadProgress}%</p>
                            )}
                            {selectedImage ? 
                            <img src={selectedImage} alt="Upload Preview" className="w-full h-full bg-center bg-cover bg-no-repeat"/>
                            : <div className="flex flex-col items-center">
                                <span className="material-icons text-7xl">upload_file</span>
                                <p className="text-sm mt-5 text-center">Drag & Drop an image here, or click to upload image</p>
                            </div>}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <p className="text-xl">Prediction Result</p>
                        <div className="w-full bg-grey">Result:</div>
                    </div>
                </div>
            </div>
        </div>
    )
}