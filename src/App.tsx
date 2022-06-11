import React, { useRef, useState } from "react";
import "./App.css";
import Gallery from "./component/Gallery";
import { Fetch } from "./types/api";

function App() {
  const [fetchData, setFetchData] = useState<Fetch[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!ref.current?.value) {
      return;
    }
    const endpointURL = `https://pixabay.com/api/?key=27953433-575aa647eb0ffb5a156b64201&q=${ref.current.value}&image_type=photo&pretty=true`;
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });
  };
  return (
    <div className="container">
      <h1>My Pixabay</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Search" ref={ref} />
      </form>
      <Gallery fetchData={fetchData} />
    </div>
  );
}

export default App;
