import React  from 'react';
function Pagination ({goToNextPage , goToPrevioustPage}){
    return(
        <>
        {goToNextPage &&  <button onClick={goToNextPage }>NextPage</button> }
        {goToPrevioustPage && <button onClick={goToPrevioustPage }>PrevioustPage</button>
        }
       
        
        </>
    );
}
export default Pagination;