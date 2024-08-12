import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, body,id } = props.post;
    console.log(title);
    return (

        <div style={{ padding: '5px' }}>
            <Card sx={{ maxWidth: 375 }}>
                <CardMedia
                    sx={{ height: 10 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"


                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Link to= {`/post/${id}`}>
                        <Button size="small">Show Comment</Button>
                    </Link>

                </CardActions>
            </Card>
        </div>
    );
};

export default Post;