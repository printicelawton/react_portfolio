import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Form from 'react-bootstrap/Form';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "", 
            email: "", 
            message: "",
            disabled: false,
            emailSent: null,  
        }
    }
    render(){
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <p>Printice Lawton</p>
                    <p>Phone: 512-820-5726</p>
                    <p>Email: printicelaw10@gmail.com</p> 

                    {/* future development */}
                    {/* <Form> 
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} > </Form.Control>
                    </Form.Group>
                    </Form> */}
                </Content>
            </div>
    
        );
    }
    
}

export default ContactPage;