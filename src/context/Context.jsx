import { useState, useEffect, createContext, useContext } from "react";
import { backendData } from "../api";

const BackendDataContext = createContext();

const BackendDataProvider = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () => {
      const data = await backendData();
      setData(data);
    };
    response();
  }, []);
  const values = data;
  return (
    <BackendDataContext.Provider value={values}>
      {props.children}
    </BackendDataContext.Provider>
  );
};

const useBackendData = () => useContext(BackendDataContext);

export { useBackendData, BackendDataProvider };
