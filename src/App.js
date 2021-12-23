import React, { useState } from 'react';
import {getPostByPage} from './API/api';
import Card from '@mui/material/Card';
import RecipeReviewCard from './Components/Post';
import { Container } from '@mui/material';
import ListOfPost from './Components/ListOfPost';



function App() {

const [page, setPage] = useState(0);
const [postList,setData] = React.useState(initializePostArray())
 
async function addArray(newPage){
  let postsObject = await getPostByPage(page,20);
  let newPostArray = postList.push(...postsObject.data);
  setData(newPostArray);
}

async function initializePostArray(){
  let postsObject = await getPostByPage(0,20);
  let newPostArray = postsObject.data;
  return newPostArray;
}

  return (
    <div className="App">
      <ListOfPost posts={postList}></ListOfPost>
    </div>
  );
}

export default App;
