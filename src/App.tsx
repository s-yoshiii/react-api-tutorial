import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import useGallerySet from "./hooks/useGallerySet";
import Gallery from "./component/Gallery";
import Button from "./component/Button";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;
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
    <>
      <GlobalStyle />
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
              <Button type="button" outlined>
                ボタンです
              </Button>
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
    </>
  );
}

export default App;
