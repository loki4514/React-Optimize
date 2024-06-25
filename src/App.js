import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'

// const heading = React.createElement("h1",{id : "hello", xyz : "abc"},"Hello world from react! ")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// // root.render(heading) 

// console.log(heading)
// {} is the gives attributes to the 


// how to create nested element in react 
// const parent = React.createElement("div",
//     {id : "parent"},
//     React.createElement("div", {id : "child1"}, 
//     [React.createElement("h1",{},"I 'm h1 tag inside the div") , React.createElement("h2",{},"I 'm h2 tag inside the div")]))

// const Title = () => {
//     <h1>It's title dummy</h1>
//     }


// const HeadingComponent = () => {
//     return <h1>Hello there i'm react functional components</h1>
// }

// // component composition
// const HeadingComponent2 = () => {
//     return (
//     <div>
//         <Title />
//         <h1>Hello there i'm react functional components</h1>
//     </div>
//     )
// }
// ! play with the code dummy

/*
- Header Component
  - LOGO
  - NAV component
- Body Component
    - search bar
    - content/card component
       - dish/restaurtn card
- Footer
    - copyrights
    - logo
    - other info
*/


// const jsxHeading = ( <h1 className='head' tabIndex="5">Hello there dummy </h1>)
// // root.render(jsxHeading)
// root.render(< HeadingComponent2 />)
// console.log(parent)

// react components 









const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
