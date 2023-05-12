function Home() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center">Cloud Cert Hero</h1>
     
     <div className="text-center">
        <div id="home" className="flex-center flex-column" style={{margin:'10px'}}>
          <a className="btn" href="/practiceexam">
            Practice Exam
          </a>
          <a className="btn" href="/keyterms">
            Key Terms
          </a>
          <a className="btn" href="/handsontutorials">
            Hands-On Tutorials
          </a>
          <a className="btn" href="/other">
            Other
          </a>
        </div>
        <div style={{margin:'10px', width: "200px",outline:"1px solid black"}}>Question of the Day</div>
      </div></div>
    </div>
  );
}

export default Home;
