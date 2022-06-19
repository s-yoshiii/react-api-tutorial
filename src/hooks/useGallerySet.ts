import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { Fetch } from "../types/api";

const endpointURL =
  "https://pixabay.com/api/?key=27953433-575aa647eb0ffb5a156b64201&image_type=photo&pretty=true&q=";
const useGallerySet = () => {
  const [fetchData, setFetchData] = useState<Fetch[]>([]);
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (!ref.current?.value) {
        setFetchData([]);
        return;
      }
      setSearchWords([...searchWords, ref.current.value]);
      axios
        .get(`${endpointURL}${ref.current.value}+${searchWords.join("+")}`)
        .then((res) => {
          setFetchData(res.data.hits);
        });
      ref.current.value = "";
    },
    [ref, searchWords]
  );
  const handleClear = () => {
    setSearchWords([]);
    setFetchData([]);
  };
  console.log(fetchData);
  return {
    ref,
    fetchData,
    searchWords,
    handleSubmit,
    handleClear,
  };
};

export default useGallerySet;
