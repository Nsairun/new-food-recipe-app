/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { getFromLocalStorage } from '../service/utils';

const FoodContext = createContext({});
export default function ContextProvider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [editData, setEditData] = useState({
    showform: false,
    data: {},
  });

  const foodRef = useRef(); // reference to the food being searched

  useEffect(() => {
    setFoodData([...getFromLocalStorage('foodData')]);
  }, []);

  return (
    <FoodContext.Provider
      value={{
        foodData,
        setFoodData,
        editData,
        setEditData,
        searchData,
        setSearchData,
        foodRef,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export const UseFoodContext = () => useContext(FoodContext);
