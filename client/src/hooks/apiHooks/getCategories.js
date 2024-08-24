import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loadingc, setLoadingc] = useState(true);
  const [errorc, setErrorc] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
        setLoadingc(false);
      })
      .catch((error) => {
        setErrorc(error);
        setLoadingc(false);
      });
  }, []);

  return { categories, loadingc, errorc };
};

export default useCategories;
