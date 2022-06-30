import React from "react";
import Button from "../component/Button";
import useGallerySet from "../hooks/useGallerySet";

const Setword = () => {
  const { ref, handleSubmit, handleClear, searchWords, handleDisplay } =
    useGallerySet();
  return (
    <>
      <h1>My Pixabay</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="Search" ref={ref} />
        <Button variant="outlined" type="submit">
          SET
        </Button>

        <Button type="button" onClick={handleClear}>
          All Clear
        </Button>
      </form>
      <p>{searchWords.join(",")}</p>
      <Button variant="contained" type="button" onClick={handleDisplay}>
        SHOW
      </Button>
    </>
  );
};

export default Setword;
