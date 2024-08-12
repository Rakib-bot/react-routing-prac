import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Card, CardContent, Typography, Box, IconButton, Divider } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'; // Alternative for React
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import UserPost from '../UserPost/UserPost';
import output from '../../output.json'; // Ensure this is correctly imported

const Comment = () => {
    const { id } = useParams();
    const [mainPost, setMainPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setMainPost({ title: data.title, body: data.body }))
            .catch(err => console.log(err));
    }, [id]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    const data = output.filter(item => item.id === parseInt(id));

    const enhancedComments = comments.map((comment, index) => ({
        ...comment,
        picture: data[index] ? data[index].picture : '',
    }));

    return (
        <div style={{ margin: '20px', maxWidth: '700px', margin: 'auto' }}>
            <UserPost title={mainPost.title} body={mainPost.body} />
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
                Comments
            </Typography>
            {enhancedComments.map(comment => (
                <Card key={comment.id} style={{ marginBottom: '15px', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', overflow: 'hidden', backgroundColor: '#fff' }}>
                    <CardContent style={{ padding: '16px', display: 'flex', alignItems: 'flex-start' }}>
                        <Avatar
                            style={{
                                marginRight: '12px',
                                width: 40,
                                height: 40,
                                border: '2px solid #ddd',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            }}
                            src={comment.picture ? comment.picture : undefined}
                        >
                            {!comment.picture && comment.email.charAt(0).toUpperCase()}
                        </Avatar>
                        <Box style={{ flex: 1 }}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>
                                {comment.email}
                            </Typography>
                            <Typography variant="body2" style={{ color: '#555', marginTop: '4px' }}>
                                {comment.body}
                            </Typography>
                        </Box>
                    </CardContent>
                    <Divider />
                    <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px' }}>
                      
                    <IconButton style={{ color: '#262626' }}>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton style={{ color: '#262626' }}>
                            <CommentOutlinedIcon />
                        </IconButton>
                        <IconButton style={{ color: '#262626' }}>
                            <ShareOutlinedIcon />
                        </IconButton>
                       
                    </Box>
                </Card>
            ))}
        </div>
    );
};

export default Comment;
