



const parent = React.createElement(
    "div", 
    { id: "parent" }, React.createElement("div", { id: "Child" }, 
    React.createElement("h1", {}, "Im an h1 tag")
    )
     );







// console.log(parent);
 //const heading = React.createElement("h1", { id: "heading" }, "React hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));

 //root.render(heading);
root.render(parent);