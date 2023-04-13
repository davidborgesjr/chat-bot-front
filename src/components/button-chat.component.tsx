import { Button } from '@mui/material';

export default function ButtonChat(
    {
        children: content = '',
        isSender = false,
    }

){
    const userTypeColor = isSender ? 'primary' : 'success';
    return (
        <Button variant="contained" color={userTypeColor}>{content}</Button>
    )
}