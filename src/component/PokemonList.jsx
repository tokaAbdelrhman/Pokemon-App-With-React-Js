import React  from 'react';
function PokemonList({pokemen}){
    return (
        <>
{pokemen.map((p)=> <div key={p}>{p}</div>)}
        </>
    );

}
export default PokemonList;