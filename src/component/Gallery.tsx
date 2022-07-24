import React, { FC } from "react";
import { Fetch } from "../types/api";
import styled from "styled-components";
type Props = {
  fetchData: Fetch[];
};
const Gallery: FC<Props> = (props) => {
  const { fetchData } = props;
  console.log(fetchData);
  return (
    <SGalleryContainer>
      {fetchData.map((data, i) => (
        <SGallerySect key={data.id}>
          <SGalleryPhoto>
            <img src={data.largeImageURL} alt="" />
          </SGalleryPhoto>
          <SGalleryInner>
            <SGalleryTextBox>
              <SGalleryNumber>
                {String(`${i + 1}`).padStart(2, "0")}
              </SGalleryNumber>
              <SGalleryText>
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
              </SGalleryText>
            </SGalleryTextBox>
          </SGalleryInner>
        </SGallerySect>
      ))}
    </SGalleryContainer>
  );
};
const SGalleryContainer = styled.div`
  margin-top: 130px;
`;
const SGallerySect = styled.section`
  position: relative;
  margin-bottom: 100px;
`;
const SGalleryPhoto = styled.div`
  height: 448px;
  width: 62.5%;
  overflow: hidden;
  img {
    height: 448px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const SGalleryInner = styled.div`
  width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const SGalleryTextBox = styled.div`
  position: absolute;
  top: 290px;
  right: 0;
  background: #fff;
  z-index: 2;
  width: 614px;
  word-break: break-all;
  padding: 40px;
`;
const SGalleryNumber = styled.div`
  color: rgba(84, 186, 185, 0.7);
  font-size: 92px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 0px 5px 10px #fff;
  margin-top: calc(-40px - 0.5em);
`;
const SGalleryText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.5;
`;
export default Gallery;
