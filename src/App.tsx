import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import useGallerySet from "./hooks/useGallerySet";
import Button from "./component/Button";
import Gallery from "./component/Gallery";
import Setword from "./pages/Setwords";
import Result from "./pages/Result";

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
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
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
  // return (
  //   <>
  //     <GlobalStyle />
  //     <div className="container">{isDisplay ? <Result /> : <Setword />}</div>
  //   </>
  // );
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
              <Button variant="outlined" type="submit">
                SET
              </Button>

              <Button type="button" onClick={handleClear}>
                ALL CLEAR
              </Button>
            </form>
            <p>{searchWords.join(",")}</p>
            <Button variant="contained" type="button" onClick={handleDisplay}>
              SHOW
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
