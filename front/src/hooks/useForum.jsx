import { useSelector } from 'react-redux';

export const useForum = () => useSelector((state) => state.forum);
