import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from './Card';
import photo1 from '../assets/images/photo1.jpeg';
import photo2 from '../assets/images/photo2.jpeg';
import photo3 from '../assets/images/photo3.jpeg';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Weather Dashboard',
          subTitle: 'Utilizing Client-Side APIs',
          imgSrc: photo1,
          link: 'https://printicelawton.github.io/weather_dashboard/',
          selected: false,
        },
        {
          id: 1,
          title: 'Note Taker App',
          subTitle: 'Utilizing ExpressJs',
          imgSrc: photo2,
          link: 'https://scribbster.herokuapp.com/',
          selected: false,
                },
                {
                    id: 2,
                    title: 'Team Profile Generator',
                    subTitle: 'CLI application using Node.js',
                    imgSrc: photo3,
                    link: 'https://github.com/printicelawton/Team-Profile-Generator',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
