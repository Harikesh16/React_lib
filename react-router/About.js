import react from "react";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const About = () =>{
    return <h1>About Page</h1>;
};
export default About;

