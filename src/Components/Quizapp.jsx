import{ useState } from 'react';
import useFetch from './useFetch';

const Quizapp = () => {

  const [questions]=useFetch('http://localhost:3000/questions');
  
  const [qidx, setQidx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const validate = (selectedOption) => {
    if (selectedOption === questions[qidx].answer) {
      setCorrect(correct + 1);
    }

    if (qidx + 1 < questions.length) {
      setQidx(qidx + 1);
    } else {
      setShowResult(true);
    }
  };
  if (questions.length === 0) return <p>Loading...  </p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {!showResult ? (
        <div>
          <h2>{questions[qidx].question}</h2>
          {questions[qidx].option.map((opt, i) => (
            <button
              key={i}
              onClick={() => validate(i)}
              style={{ display: 'block', margin: '10px 0', padding: '10px' }}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {correct} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quizapp;