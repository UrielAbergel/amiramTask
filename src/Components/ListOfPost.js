import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Post from './Post';
import { getPostByPage } from '../API/api';


export default function ListOfPost(pageNumber) {    

    const [postList,setData] = React.useState([])
    const [page,setPage] = React.useState(pageNumber)
    React.useState(initializePostArray())
    
    async function addArray(){
    let postsObject = await getPostByPage(page,20);
    let newPostArray = postList.push(...postsObject.data);
    setData(newPostArray);
    }

    async function initializePostArray(){
    let postsObject = await getPostByPage(0,20);
    let newPostArray = postsObject.data;

    if(postList.length === 0){
         setData(newPostArray);
        }
    }


    return (
        <div>
        <Container>
            {console.log(postList)}
            <Grid container spacing={3}>
                {postList.map((post) => (
                    <Grid item key={post.id} xs={12} md={6} lg={4}>
                        <Post post={post}/> 
                    </Grid>
                ))}
            </Grid>
        </Container>
        </div>
      
    )
}


