import { useEffect } from 'react';
import axios from 'axios';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    const resp1 = await authFetch('/react-store-products');
    const reps2 = await axios(randomUserUrl);
    console.log(resp1);
    console.log(reps2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
