import { useState, useEffect } from "react";
import Search from "./components/Search";
import Loading from "./components/Loading.js";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetcData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const datas = await response.json();
    setCountries(datas);
    setIsLoading(false);
  };
  useEffect(() => {
    fetcData();
  }, []);

  return <>{isLoading ? <Loading /> : <Search datas={countries} />}</>;
}

export default App;
