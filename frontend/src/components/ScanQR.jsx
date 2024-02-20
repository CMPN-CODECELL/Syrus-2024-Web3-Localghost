import { useState, useRef } from "react";

const ScanQR = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  if (files) return (
    <div className="w-500 mx-56  h-96 border border-cyan-500 rounded-lg flex items-center justify-center dropzone" onDragOver={handleDragOver}
    onDrop={handleDrop}>
        <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="dropzone flex flex-col items-center justify-evenly h-full"
            
        >
            <div>
                <button onClick={() => inputRef.current.click()} className="bg-blue-400 rounded-lg px-4 py-2 text-white">Upload your QR</button>
            </div>
            <div>
                <h1 className="text-center text-4xl">OR</h1>
            </div>
            <div>
                <h1 className="text-2xl">Drop your file here</h1>
            </div>        
          
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
        </div>
    <div className="uploads">
        
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
    
    </div>
  )

  return (
    <div className="w-500 mx-56  h-96 border border-cyan-500 rounded-lg flex items-center justify-center dropzone" onDragOver={handleDragOver}
    onDrop={handleDrop}>
        <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="dropzone flex flex-col items-center justify-evenly h-full "
            
        >
            <div>
                <button onClick={() => inputRef.current.click()} className="bg-blue-400 rounded-lg px-4 py-2 text-white">Upload your QR</button>
            </div>
            <div>
                <h1 className="text-center text-4xl">OR</h1>
            </div>
            <div>
                <h1 className="text-2xl">Drop your file here</h1>
            </div>        
          
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
        </div>
    </div>
  );
};

export default ScanQR;