import React, { FC } from "react";
import { Fetch } from "../types/api";
import styled from "styled-components";
import Label from "./Label";
type Props = {
  fetchData: Fetch[];
};
const Gallery: FC<Props> = (props) => {
  const { fetchData } = props;
  const isEven = (i: number) => {
    const even = (i + 1) % 2 === 0;
    if (even) {
      return "reverse";
    }
  };
  console.log(fetchData);
  return (
    <SGalleryContainer>
      {fetchData.map((data, i) => (
        <SGallerySect key={data.id} className={isEven(i)}>
          <SGalleryPhoto>
            <img src={data.largeImageURL} alt="" />
          </SGalleryPhoto>
          <SGalleryInner>
            <SGalleryTextBox className={isEven(i)}>
              <SGalleryNumber>
                {String(`${i + 1}`).padStart(2, "0")}
              </SGalleryNumber>
              <SGalleryText>photo by：{data.user}</SGalleryText>
              <SGalleryLabelArea>
                {data.tags.split(",").map((label) => (
                  <Label>{label}</Label>
                ))}
              </SGalleryLabelArea>
              <SGalleryLinkWrap>
                <SGalleryLink href={data.pageURL} target="_blank">
                  View More
                </SGalleryLink>
              </SGalleryLinkWrap>
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
  margin-bottom: 250px;
  &.reverse {
    display: flex;
    justify-content: flex-end;
  }
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
  padding: 40px 80px;
  &.reverse {
    right: auto;
    left: 0;
  }
`;
const SGalleryNumber = styled.div`
  color: rgba(84, 186, 185, 0.7);
  font-size: 92px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 0px 5px 10px #fff;
  margin-top: calc(-40px - 0.5em);
  .reverse & {
    text-align: right;
  }
`;
const SGalleryText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.5;
`;
const SGalleryLabelArea = styled.div`
  margin-top: 20px;
`;
const SGalleryLinkWrap = styled.div`
  margin-top: 20px;
  text-align: right;
`;
const SGalleryLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 24px;
  margin-top: 10px;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 700;
  color: #000;
  padding-right: 30px;
  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 20px;
    height: 14px;
    background: #fff;
    border: 2px solid #000;
  }
  &::before {
    top: calc(50% + 5px);
    right: 5px;
    transform: translateY(-50%);
  }
  &::after {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;
export default Gallery;
