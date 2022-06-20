import React from "react";
import "./App.css";
import useGallerySet from "./hooks/useGallerySet";
import Gallery from "./component/Gallery";
function App() {
  const {
    ref,
    handleSubmit,
    handleClear,
    searchWords,
    fetchData,
    isDisplay,
    handleDisplay,
  } = useGallerySet();

  return (
    <div className="container">
      {isDisplay ? (
        <>
          <Gallery fetchData={fetchData} />
          <button type="button" onClick={handleDisplay}>
            表示
          </button>
        </>
      ) : (
        <>
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
          <button type="button" onClick={handleDisplay}>
            表示
          </button>
        </>
      )}
    </div>
  );
}

export default App;
