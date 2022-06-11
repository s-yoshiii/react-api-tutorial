import React, { FC } from "react";
import { Fetch } from "../types/api";
type Props = {
  fetchData: Fetch[];
};
const Gallery: FC<Props> = (props) => {
  const { fetchData } = props;
  return (
    <div className="gallery__wrap">
      {fetchData.map((data) => (
        <div className="gallery__item" key={data.id}>
          <img src={data.largeImageURL} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
