import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="a">
      <form onSubmit={(e)=>{
        e.preventDefault();
        // console.log(e);
        document.getElementById("fullName").innerText = `Full Name: ${e.target.elements.firstName.value} ${e.target.elements.lastName.value}`;

      }}>
        <h1>Full Name Display</h1>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" required/>
        <br />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" required/>
        <br />
        <button type="submit">Submit</button>
        <p id="fullName"></p>
      </form>
    </div>
  );
}

export default App;
