import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import useGallerySet from "./hooks/useGallerySet";
import Button from "./component/Button";
import Gallery from "./component/Gallery";
import { color } from "./utils/color";
import Label from "./component/Label";
import { contWidth } from "./utils/media";
// import Setword from "./pages/Setwords";
// import Result from "./pages/Result";

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
      {isDisplay ? (
        <>
          <SResultHeader>
            <SResultHeaderInner>
              <SResultHeading>{searchWords.join(" / ")}</SResultHeading>
              <Button type="button" variant="outlined" onClick={handleDisplay}>
                Back to SearchPage
              </Button>
            </SResultHeaderInner>
          </SResultHeader>
          <Gallery fetchData={fetchData} />
          <Button type="button" variant="outlined" onClick={handleDisplay}>
            Back to SearchPage
          </Button>
        </>
      ) : (
        <SContainer>
          <SInner>
            <Sheading>PIXABAY SEARCH</Sheading>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <SInputSection>
                <SInputWrap>
                  <SInput type="text" placeholder="Search" ref={ref} />
                </SInputWrap>
                <SButtonWrap>
                  <Button variant="outlined" type="submit">
                    SET
                  </Button>
                </SButtonWrap>
                <SButtonWrap>
                  <Button type="button" onClick={handleClear}>
                    ALL CLEAR
                  </Button>
                </SButtonWrap>
              </SInputSection>
            </form>
            {searchWords.length !== 0 && (
              <>
                <SWordTitle>Setting Words</SWordTitle>
                <SLabelWrap>
                  {searchWords.map((word, index) => (
                    <Label key={index}>{word}</Label>
                  ))}
                </SLabelWrap>
              </>
            )}
            <Button variant="contained" type="button" onClick={handleDisplay}>
              SHOW
            </Button>
          </SInner>
        </SContainer>
      )}
    </>
  );
}
const Sheading = styled.h1`
  color: ${color.secondary};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 64px;
  letter-spacing: 0.1em;
  margin-bottom: 80px;
`;
const SContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  padding-top: 140px;
  text-align: center;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: ${color.primary};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const SInner = styled.div`
  background: #fff;
  width: 960px;
  margin: 0px auto;
  padding: 60px;
`;
const SInputWrap = styled.div`
  margin-bottom: 40px;
`;
const SInput = styled.input`
  width: 620px;
  padding: 15px;
  border: 2px solid ${color.gray};
  font-size: 24px;
  outline: none;
  transition: 0.3s ease;
  &:focus,
  &:active {
    border-color: ${color.secondary};
  }
`;
const SButtonWrap = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const SInputSection = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${color.labelcolor};
`;
const SWordTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.024em;
  margin-bottom: 24px;
`;
const SLabelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const SResultHeader = styled.header`
  background: ${color.primary};
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.1));
  position: fixed;
  width: 100%;
`;
const SResultHeaderInner = styled.div`
  max-width: ${contWidth.lg + contWidth.lgSpace * 2}px;
  margin: 0 auto;
  padding: 0 ${contWidth.lgSpace}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  justify-content: space-between;
`;
const SResultHeading = styled.h1`
  color: ${color.secondary};
  font-size: 42px;
  font-weight: 400;
  letter-spacing: 0.01em;
`;
export default App;
