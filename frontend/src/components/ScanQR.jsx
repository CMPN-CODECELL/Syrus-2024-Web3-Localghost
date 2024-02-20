import { useState, useRef } from "react";

const ScanQR = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  return (
    <div className="mx-auto w-4/6 sm:w-4/6 max-w-4xl h-screen flex flex-col items-center justify-center">
      <div
        className="w-full h-96 border border-cyan-500 rounded-lg flex items-center justify-center dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div
          className="dropzone flex flex-col items-center justify-evenly h-full"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div>
            <button
              onClick={() => inputRef.current.click()}
              className="bg-blue-400 rounded-lg hover:bg-blue-600 px-4 py-2 text-white"
            >
              Upload your QR
            </button>
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

      {files && (
        <div className="mt-4">
          <ul>
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
          <div className="mt-2 flex justify-center">
            <button
              onClick={() => setFiles(null)}
              className="mr-2  bg-transparent border-cyan-500 border-2 rounded-lg px-4 py-2 hover:text-red-600 hover:border-red-600 text-black py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              className="mr-2  bg-blue-400 rounded-lg px-4 py-2 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanQR;
