
import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

function RowList() {
  return (
    <>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchDramaMovies}
      />
<Row
        title="Crime Movies"
        fetchUrl={requests.fetchCrimeMovies}
      />
<Row
        title="Drama Movies"
        fetchUrl={requests.fetchDramaMovies}
      />

    </>
  );
}

export default RowList;

