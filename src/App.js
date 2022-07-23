import Navbar from './Components/Navbar';
import './App.css';


// The website must have the following pages: 
// Home Page (Static): Working slider (does not have to be the hero, can be anywhere on the home page)
// Products Page (React): 12 products with a working filter rendered from your Database. Each product should have a title, description, price, and image that is rendered from your Database
// Working filter for price and product type
// Contact Page (Static): JavaScript form validation (or any kind of functional validation for email)
// The form should at least include a place for name, email, and comment. 
// Responsiveness
// Both tablet and mobile
// Each page should have a Navigation Bar and Footer with links to social media (these should be components rendered, not static).


function App() {
  return (
    <div className="App">
       <Navbar />
      
    </div>
  );
}

export default App;
