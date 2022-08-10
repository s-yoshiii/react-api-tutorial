import React, { FC } from "react";
// import { Fetch } from "../types/api";
import styled from "styled-components";
import Label from "./Label";
import { contWidth, media } from "../utils/media";
import { Fetch } from "../types/api";
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
  return (
    <SGalleryContainer>
      {fetchData.length === 0 && "データがありません。検索し直して下さい。"}
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
                {data.tags.split(",").map((label, i) => (
                  <Label key={i}>{label}</Label>
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
  padding-top: 130px;
  min-height: calc(100vh - 70px);
`;
const SGallerySect = styled.section`
  position: relative;
  margin-bottom: 250px;
  &.reverse {
    display: flex;
    justify-content: flex-end;
  }
  ${media("sm")} {
    padding: 0 ${contWidth.smSpace}px;
    margin-bottom: 70px;
    &.reverse {
      display: block;
    }
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
  ${media("sm")} {
    height: 224px;
    width: 100%;
    img {
      height: 224px;
    }
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
  ${media("sm")} {
    width: 100%;
    padding: 0 ${contWidth.smSpace}px;
    position: relative;
    transform: none;
    left: auto;
    top: auto;
  }
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
  ${media("sm")} {
    position: static;
    width: 100%;
    padding: ${contWidth.smSpace}px;
    margin-top: -${contWidth.smSpace}px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  ${media("sm")} {
    font-size: 72px;
    margin-top: calc(-20px - 0.5em);
  }
`;
const SGalleryText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.5;
  ${media("sm")} {
    font-size: 14px;
  }
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
  ${media("sm")} {
    font-size: 16px;
    &::before,
    &::after {
      width: 18px;
      height: 12px;
    }
    &::before {
      top: calc(50% + 3px);
      right: 3px;
    }
  }
`;
export default Gallery;
