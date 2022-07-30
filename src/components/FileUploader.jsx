import { useEffect } from "react";
import { useState } from "react";
import Papa from "papaparse";
import { app } from "../firebase/config";
import { CSVLink } from "react-csv";

const FileUploader = () => {
  const [csvData, setCsvData] = useState([]);
  const [columnHeadings, setColumnHeadings] = useState([]);
  const [rowValues, setRowValues] = useState([]);
  const [fileName, setFileName] = useState("");

  const changeHandler = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);

    setFileName(file.name);

    fileRef.put(file).then(() => {
      console.log("File Uploaded!");
    });

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headingsArray = [];
        const valuesArray = [];

        results.data.map((data) => {
          headingsArray.push(Object.keys(data));
          valuesArray.push(Object.values(data));
          return <></>;
        });

        setCsvData(results.data);
        setColumnHeadings(headingsArray[0]);
        setRowValues(valuesArray);
      },
    });
  };

  const deleteRow = (v) => {
    this.setState((prevState) => ({
      value: prevState.value.filter((el) => el.v !== v),
    }));
  };

  const csvReport = {
    filename: fileName,
    headers: columnHeadings,
    data: csvData,
  };

  return (
    <div>
      <input type="file" name="file" accept=".csv" onChange={changeHandler} />
      <CSVLink {...csvReport}>Export to CSV</CSVLink>
      <table>
        <thead>
          <tr>
            {columnHeadings.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rowValues.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((v, i) => {
                  return <td key={i}>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {console.log("DATA: " + csvData)}
      {console.log("HEADINGS: " + columnHeadings)}
      {console.log("VALUES: " + rowValues)} */}
    </div>
  );
};

export default FileUploader;
