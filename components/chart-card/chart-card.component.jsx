import React from 'react';

// Styles
import './chart-card.styles.css';

// Bootstrap
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const ChartCard = (props) => {
    const Chart = props.chart;

    // console.log(props)

    return(
        <Card className="chart-card mx-auto">
            <Card.Body className="chard-card-body p-0">
                <br />
                <div className="chart-wrapper justify-between">
                    { props.kind === 'img' ? 
                        <img src={Chart} style={{'justifySelf':'center', 'maxWidth':'100%'}} height="100%" alt=''/>
                        :
                        <Chart chartProps={props}/>
                    }
                </div>
                <hr />
                <Card.Subtitle id="chart-source" className="mb-0 text-muted">Fonte: {props.fonte}</Card.Subtitle>
                
            <div className="text-size">{props.text}</div>
            </Card.Body>
        </Card>
    )
};

export default ChartCard;