import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    useEffect(() => {
      setTimeout(()=>{
        fetch(url)
          .then(response => response.json())
          .then(data => setQuestions(data))
          .catch(err => console.log(err));
      },1000);
    })

    const [questions, setQuestions] = useState([]);
    return [questions];
}

export default useFetch
