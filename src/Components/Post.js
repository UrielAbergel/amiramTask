import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { maxHeight } from '@mui/system';


export default function Post(post) {
    const [likeNumber, setLike] = React.useState(post.post.likes)


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      avatar={
        <Avatar src={post.post.owner.picture} aria-label="recipe"/>
      }
      title={`${post.post.owner.title} ${post.post.owner.firstName} ${post.post.owner.lastName} `}
      subheader={`${post.post.publishDate}`.substring(0,10)}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.post.text}
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image={post.post.image}
        alt="Paella dish"
      />

      <CardContent>
        <Typography  variant="body2" color="text.secondary" >
            <h3>{`Likes: ${post.post.likes}\n`}</h3>
          
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            <h4>{`${post.post.tags.map((tag) => `#${tag} ` )}`}</h4>
      
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}