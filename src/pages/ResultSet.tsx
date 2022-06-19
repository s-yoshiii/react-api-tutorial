import React from "react";
import { Link, useLocation } from "react-router-dom";
import Gallery from "../component/Gallery";
import { Fetch } from "../types/api";
type State = {
  fetchData: Fetch[];
};

const ResultSet = () => {
  const location = useLocation();
  const { fetchData } = location.state as State;
  return (
    <div className="container">
      <Gallery fetchData={fetchData} />
      <Link to="/">検索ワード画面に戻る</Link>
    </div>
  );
};

export default ResultSet;
