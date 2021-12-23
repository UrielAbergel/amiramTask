import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Post from './Post';
import { getPostByPage } from '../API/api';
import { Waypoint } from 'react-waypoint';


export default function ListOfPost() {    

    const [postList,setData] = React.useState([])
    const [page,setPage] = React.useState(0)
    React.useState(initializePostArray())
    
    async function addArray(newPageNumber){
    let postsObject = await getPostByPage(newPageNumber,20);
    let newPosts = [...postList];
    let tempPosts = [...postsObject.data];
    let temp = [...newPosts, ...tempPosts];
    setPage(newPageNumber)   
    setData(temp)
    
    }

    async function initializePostArray(page){
    let postsObject = await getPostByPage(page,20);
    let newPostArray = postsObject.data;

    if(postList.length === 0){
         setData(newPostArray);
        }
    }

    function handleChangePage(){
        let currentPage = page;
        setPage(currentPage + 1);
    }


    return (
        <div>
        <Container>
            {console.log(postList)}
            <Grid container spacing={3}>
                    {postList.map((post, index) => (
                        <Grid item key={post.id} xs={12} md={6} lg={4}>
                            <Post post={post}/> 
                            { index === postList.length - 3 && (
                                <Waypoint onEnter={() => addArray(page+1)}/> 
                            )}
                        </Grid>
                    ))}                
            </Grid>
        </Container>
        </div>
      
    )
}


