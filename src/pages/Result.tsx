import React from "react";
import Gallery from "../component/Gallery";
import useGallerySet from "../hooks/useGallerySet";

const Result = () => {
  const { fetchData, handleDisplay } = useGallerySet();
  return (
    <>
      <Gallery fetchData={fetchData} />
      <button type="button" onClick={handleDisplay}>
        表示
      </button>
    </>
  );
};

export default Result;
