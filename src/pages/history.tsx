import '../styles/history.css';
import { useState } from 'react';


function History() {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showCardTwo, setShowCardTwo] = useState<boolean>(false);
  const [showCardThree, setShowCardThree  ] = useState<boolean>(false);


  const handleClick = () => {
    setShowCard(true);
    if (showCard === true) {
      setShowCard(false);
    }
  };

  const handleClickTwo = () => {
    setShowCardTwo(true);
    if (showCardTwo === true) {
      setShowCardTwo(false);
    }
  };
  const handleClickThree = () => {
    setShowCardThree(true);
    if (showCardThree === true) {
      setShowCardThree(false);
    }
  };

  return (
    <div>
      <div className='history-container'>
        <h1>The history of buses</h1>
        <h3>The early 19th century saw the arrival of the omnibus in London, introduced by English coachbuilder George Shillibeer. Before that the only road vehicles for public hire were four wheeled coaches called hackneys.</h3>
      </div>
      <div className='history-content'>
        <div onClick={handleClick} className='history-card'>
          <h2>Competition for passengers</h2> 
          <p>As a result of the boom of motorised bus operation in the early 20th century, the bus network grew dramatically. <strong>Click to learn more!</strong></p>
        </div>
        <div onClick={handleClickTwo} className='history-card'>
          <h2>Nationalisation</h2>
          <p>London Transport was nationalised in 1948 and control was passed to the Greater London Council (GLC) in 1970. <strong>Click to learn more!</strong></p>
        </div>
        <div onClick={handleClickThree}className='history-card'>
          <h2>TfL buses</h2>
          <p> responsibility of London's buses to the Mayor of London's transport organisation. <br></br><strong>Click to learn more!</strong></p>
        </div>
      </div>
      {showCard && (
          <div className="pop-up-section">
            <div className='info-card'>
              <p> As a result of the boom of motorised bus operation in the early 20th century, the bus network grew dramatically. The Underground Electric Railways of London Co. Ltd (UERL), founded in 1902, had taken over parts of London's railway, five tube companies, and all electric tram companies and also took control of the LGOC, the main bus operator.</p>
              <br></br>
              <p>The disruption to transport operations caused by World War I (1914-18) allowed small independent companies to challenge the LGOC's dominance. The competition for passengers was fierce and resulted in recklessness on the road compelling the government to create a single authority responsible for London's public transport.</p>
              <br></br>
              <p> In 1933 the London Passenger Transport Board (LPTB) was formed. With the exception of a few railway companies, the LPTB took over underground, railway, tram and bus operations within London. This made it possible to effectively plan and coordinate London's public transport development. London Transport (LT) soon became known as the new authority which controlled public transport across London.</p>
            </div>
          </div>
        )}
        <br></br>
        {showCardTwo && (
          <div className="pop-up-section">
             <div className='info-card'>
              <p> LT was nationalised in 1948 and control was passed from central government to the Greater London Council (GLC) in 1970. In 1986 bus services outside London were deregulated. In London however, under the London Regional Transport Act 1984, LT was again brought under central government control. This was done as a preliminary step to the full abolition of the council two years later.</p>
              <br></br>
              <p>The act required the creation of a subsidiary company of London Transport and in 1985 London Buses limited (LBL) was set up. The act also stipulated that, where appropriate, competitive tendering should be introduced to ensure LT operated economically and required less financial assistance from public funds.</p>
              <br></br>
              <p>As a result LT set up the Tendered Bus Division to begin the process of competitive tendering. This required LBL to compete against privately owned operators for the opportunity to run individual bus routes as Gross Cost Contracts. The operators tendered on the basis of all the costs required to operate and maintain the specified service while LT retained the fares revenue. Routes were awarded to the operator who could run the best service at the most cost effective price.</p>
            </div>
          </div>
        )}
        <br></br>
        {showCardThree && (
          <div className="pop-up-section">
            <div className='info-card'>
              <p> In preparation for its proposal to privatise LBL, the government divided the company into 13 geographical subsidiary companies. In 1992 the government announced that the subsidiaries would be sold into the private sector and by 1994 the privatisation of LBL was completed.</p>
              <br></br>
              <p>In 2000 following the devolution of government for London, the new Greater London Authority was formed and management responsibility of London's buses moved from the central government controlled London Regional Transport to the Mayor of London's transport organisation, Transport for London, where it remains today.</p>
              <br></br>
              <p>Through this organisation the Mayor is tasked with drawing up and implementing an integrated transport strategy which caters for growth in population and employment. The bus network is a key component of this strategy, with a constant requirement to maintain ease of use, attractive frequencies and adequate capacity, reliable services, good coverage and good interchange with other modes.</p>
            </div>
          </div>
        )}
      <div className='history-footer'>
        <a href="https://tfl.gov.uk/corporate/about-tfl/culture-and-heritage/londons-transport-a-history" target='_blank' rel='external'>Learn more about the history of TFL and its buses</a>
      </div>
        
      
    </div>
  );
}

export default History;