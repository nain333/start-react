/*
JavaScript

*/
console.log("The Script is loaded") 
/**
 * react
 
 */



// Define a React element
const reactHeading = React.createElement("h1", { className: "head",id:"reactHead",children:"Hellow React!" });

// Render the React element into the "root" element
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
console.log('React Heading: ',reactHeading)