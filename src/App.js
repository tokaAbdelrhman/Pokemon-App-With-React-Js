import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./component/PokemonList.jsx";
import Pagination from './component/app/Pagination.jsx';

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrenPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(currentPage , {
        cancelToken: new axios.CancelToken((c)=>{cancel=c})
      })
      .then((res) => {
        setPokemen(res.data.results.map((p) => p.name));
        setLoading(false);
        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
      return () =>{};
  }, [currentPage]);
  if (loading) return "loading ......";
  function goToNextPage(){
    setCurrenPage(nextPage);
  }
  function goToPrevioustPage(){
    setCurrenPage(previousPage);
  }

  return (
    <>
      <PokemonList pokemen={pokemen} />
      <Pagination 
      goToNextPage={nextPage && goToNextPage }
      goToPrevioustPage={previousPage && goToPrevioustPage }

      />
    </>
  );
}

export default App;
