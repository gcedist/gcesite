import React from 'react';
import './team-member.styles.css';

// Bootstrap
import Card from 'react-bootstrap/Card';

export const TeamMember = ({ img, name, job, text, link }) => (
    <a className="invisible-link" target="_blank" rel="noreferrer" href={link}>
        <Card className="custom-card mx-auto">
            <Card.Img variant="top" src={img} className="card-img" />
            <Card.Body>
                <Card.Title className="mb-2">{name}</Card.Title>
                <Card.Subtitle className="mb-0 p-0 text-muted">{job}</Card.Subtitle>
                {/* <Card.Text>
                {text}
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    </a>
);