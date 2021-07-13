import React from 'react'; 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Printice Lawton', 
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'}, 
        { title: 'Contact', path: '/contact'}
      ], 
      home:{ 
        title:'PLACEHOLDER', 
        subTitle: 'Something about Projects or me',
        text: 'Something else about content below'  
       }, 
       about: {
         title: 'About Me'
       },
       contact: {
         title: 'Let\'s Talk'
       }
    }
  }

  render() {
    return (
      <div>Hello From React</div>
      );
  }
  
  
}

export default App;
