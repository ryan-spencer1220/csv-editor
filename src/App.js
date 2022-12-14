// import { useEffect, useState } from "react";
import FileUploader from "./components/FileUploader";

function App() {
  return (
    <div className="container m-4">
      <h1 className="text-center text-2xl text-primary card p-20 shadow-xl card-rounded">
        School Directory!
      </h1>
      <FileUploader />
    </div>
  );
}

export default App;
