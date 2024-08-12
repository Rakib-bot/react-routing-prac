import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: '20px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
    maxWidth: '700px',
    margin: 'auto',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
        boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
    },
}));

const StyledCardHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid #f0f0f0',
    background: 'linear-gradient(135deg, #fe6b8b 30%, #ff8e53 90%)',
    color: '#ffffff',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: '20px',
    backgroundColor: '#f9f9f9',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: '12px',
    backgroundColor: '#ff8e53',
    fontSize: '1.2rem',
}));

const StyledUserName = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: '#ffffff',
    fontSize: '1.1rem',
}));

const StyledBody = styled(Typography)(({ theme }) => ({
    marginTop: '12px',
    marginBottom: '20px',
    color: '#333333',
    lineHeight: 1.6,
    fontSize: '16px',
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 16px',
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #e0e0e0',
}));

const ActionButton = styled(Button)(({ theme }) => ({
    color: '#ff8e53',
    fontWeight: 600,
    borderRadius: '25px',
    padding: '8px 16px',
    textTransform: 'capitalize',
    fontSize: '0.875rem',
    '&:hover': {
        backgroundColor: '#ff8e53',
        color: '#ffffff',
        borderColor: '#ff8e53',
    },
}));

const UserPost = ({ title, body }) => {
    return (
        <StyledCard>
            <StyledCardHeader>
                <StyledAvatar>A</StyledAvatar>
                <StyledUserName variant="subtitle1">Username</StyledUserName>
            </StyledCardHeader>
            <StyledCardContent>
                <Typography variant="h5" component="h2" style={{ fontWeight: 700, marginBottom: '12px' }}>
                    {title}
                </Typography>
                <StyledBody variant="body1">
                    {body}
                </StyledBody>
            </StyledCardContent>
            <StyledCardActions>
                <ActionButton size="small">Like</ActionButton>
                <ActionButton size="small">Comment</ActionButton>
                <ActionButton size="small">Share</ActionButton>
            </StyledCardActions>
        </StyledCard>
    );
};

export default UserPost;
