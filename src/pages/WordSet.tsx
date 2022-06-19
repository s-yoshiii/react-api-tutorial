import React from "react";
import { Link } from "react-router-dom";
import useGallerySet from "../hooks/useGallerySet";
const WordSet = () => {
  const { ref, handleSubmit, handleClear, searchWords, fetchData } =
    useGallerySet();
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
      <Link to="result" state={{ fetchData, searchWords }}>
        結果表示
      </Link>
    </div>
  );
};

export default WordSet;
