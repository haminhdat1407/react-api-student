import { useEffect, useState } from 'react';
import studentApi from './apis/studentApi';
import './styles.css';

export default function App() {
  useEffect(() => {
    (async () => {
      const response = await studentApi.getAll();
      console.log(response);
    })();
  });
  return(
    <>
    
    </>;
  }
  )
