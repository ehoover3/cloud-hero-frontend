import React from "react";

function Home() {
  return (
    <div className='container'>
      <div id='home' className='flex-center flex-column'>
        <h1>Quick Quiz</h1>
        <a className='btn' href='/game'>
          Play
        </a>
        <a className='btn' href='/highscores'>
          High Scores
        </a>
      </div>
    </div>
  );
}

export default Home;
