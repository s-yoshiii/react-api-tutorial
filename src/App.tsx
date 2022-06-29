import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import useGallerySet from "./hooks/useGallerySet";
import Gallery from "./component/Gallery";
import Button from "./component/Button";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@300;400;500;600;700&display=swap');
  html {
    font-size: 62.5%;
  }
  body *{
    font-family: 'Open Sans','Montserrat', sans-serif;
  }
  body{
    height: 100%;
    -webkit-tap-highlight-color: transparent;
    -ms-touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }
  html,
  body {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
    -ms-touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }
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
              <Button outlined type="submit">
                SET
              </Button>

              <button type="button" onClick={handleClear}>
                ALL CLEAR
              </button>
            </form>
            <p>{searchWords.join(",")}</p>
            <Button contained type="button" onClick={handleDisplay}>
              SHOW
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
