const heading = React.createElement("h1",{id : "hello", xyz : "abc"},"Hello world from react!")
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading) 

console.log(heading)
// {} is the gives attributes to the 

// how to create nested element in react 
const parent = React.createElement("div",
    {id : "parent"},
    React.createElement("div", {id : "child1"}, 
    [React.createElement("h1",{},"I 'm h1 tag inside the div") , React.createElement("h2",{},"I 'm h2 tag inside the div")]))

root.render(parent)
console.log(parent)

