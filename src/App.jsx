import "./App.css";
import data from "../public/data.json";


function App() {
  return (
    <>
    <div className="container">
    <section className="Section1">
        <h4 className="yourResults"> Your Results</h4>
        <div className="totalResult">
          <h1>76</h1>
          <span>of 100</span>
        </div>
        <h3 className="great">Great</h3>
        <p className="para">
          You scored higher than 65% of the students who have taken the test
        </p>
      </section>

      <section className="Section2">
        <h3>Summary</h3>

        {data.map((data, index) => (
          <div key={index} 
          className={`resultContainer bg-color-${index % 4}`}>
              <div>
                <img src={data.icon} alt={data.category} />
                <span>{data.category}</span>
              </div>
              <p>{data.score} <span className="Score2">/100</span></p>
          </div>
        ))}
        <button className="btn">Continue</button>
      </section>
    </div>
    </>
  );
}

export default App;