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
/**
 * JSX
 * 
 * */
const jsxHeading=<React.Fragment>
    <h1>
        Hello  JSX
    </h1>
    <h3>
        This is created using react
    </h3>

</React.Fragment>
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
 