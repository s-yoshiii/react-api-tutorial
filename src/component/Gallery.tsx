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
        <div className="gallery__item">
          <img
            src="https://pixabay.com/get/gb40a71049feaebfd596b42da288af252a84b55f9917d81a47fee2e5adb0401c3fde97ce72c4d5c2899320b1d09cc255497be82cc8e0fc9db4cc181851ba66e71_1280.jpg"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
