import React, { useState } from 'react';
import {getPostByPage} from './API/api';
import Card from '@mui/material/Card';
import RecipeReviewCard from './Components/Post';
import { Container } from '@mui/material';
import ListOfPost from './Components/ListOfPost';



function App() {

const [page, setPage] = useState(0);

  return (
    <div className="App">
      <ListOfPost pageNumber={page}></ListOfPost>
    </div>
  );
}

export default App;
