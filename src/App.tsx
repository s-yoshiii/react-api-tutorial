import React, { useRef } from "react";
import "./App.css";
import Gallery from "./component/Gallery";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(ref.current?.value);
  };
  return (
    <div className="container">
      <h1>My Pixabay</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Search" ref={ref} />
      </form>
      <Gallery />
    </div>
  );
}

export default App;
