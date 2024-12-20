import React from "react"; // Ensure React is imported if required
import "./styles/app.scss";

const App = () => {
  return (
    <div>
      <h1>React App with Webpack</h1>
      <p>Environment: {process.env.REACT_APP_ENV}</p>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
};

export default App;
