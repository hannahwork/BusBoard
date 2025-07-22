import '../styles/history.css';


function History() {
  return (
    <div>
      <div className='history-container'>
        <h1>The history of buses</h1>
        <p>This page will display the history of TFL and its buses.</p>
      </div>
      <div className='history-content'>
        <div className='history-card'>
          <h2>History Card 1</h2>
          <p>Content for the first history card. Use state for pop ups</p>
        </div>
        <div className='history-card'>
          <h2>History Card 2</h2>
          <p>Content for the second history card.</p>
        </div>
        <div className='history-card'>
          <h2>History Card 3</h2>
          <p>Content for the third history card.</p>
        </div>
      </div>
      <div className='history-footer'>
        <a href="https://tfl.gov.uk/corporate/about-tfl/culture-and-heritage/londons-transport-a-history" target='_blank' rel='external'>Learn more about the history of TFL and its buses</a>
      </div>
        
      
    </div>
  );
}

export default History;