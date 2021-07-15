import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'; 


function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Atlanta-based Software Developer with a border-line obssesion with solving problems. Well-versed in modern programming languages  and frameworks including:</p>
            <p>HTLM5, CSS3, JavaScript, jQuery, Progressive Web Application development, Agile Methodology, Bootstrap, React.js, Express.js, Node.js, MongoDB, MySQL, Command Line and Git.Advocate for democratizing software development and removing tech barriers to innovation.</p>

            <p> My focus is on helping organizations adopt and scale enterprise technology to solve business-wide challenges. I particularly enjoy working with business leaders with a non-technical background and business-savvy IT leaders to bridge the gap between idea and implementation.</p>

            <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>
            </Content>
        </div>

    );
}

export default AboutPage;
