import React from "react";

function Home() {
  return (
    <div className='container'>
      <div id='home' className='flex-center flex-column'>
        <h1>Cloud Cert Hero</h1>
        <a className='btn' href='/practiceexam'>
          Practice Exam
        </a>
        <a className='btn' href='/keyterms'>
          Key Terms
        </a>
        <a className='btn' href='/handsontutorials'>
          Hands-On Tutorials
        </a>
      </div>
    </div>
  );
}

export default Home;
