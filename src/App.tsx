import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import Gallery from "./component/Gallery";
import axios from "axios";
import { Fetch } from "./types/api";

const endpointURL =
  "https://pixabay.com/api/?key=27953433-575aa647eb0ffb5a156b64201&image_type=photo&pretty=true&q=";

function App() {
  const [fetchData, setFetchData] = useState<Fetch[]>([]);
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (!ref.current?.value) {
        setFetchData([]);
        return;
      }
      setSearchWords([...searchWords, ref.current.value]);
      axios
        .get(`${endpointURL}${ref.current.value}+${searchWords.join("+")}`)
        .then((res) => {
          setFetchData(res.data.hits);
        });
      ref.current.value = "";
    },
    [ref, searchWords]
  );
  const handleClear = () => {
    setSearchWords([]);
    setFetchData([]);
  };
  return (
    <div className="container">
      <h1>My Pixabay</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="Search" ref={ref} />
        <button type="submit">SET</button>
        <button type="button" onClick={handleClear}>
          ALL CLEAR
        </button>
      </form>
      <p>{searchWords.join(",")}</p>
      <Gallery fetchData={fetchData} />
    </div>
  );
}

export default App;
