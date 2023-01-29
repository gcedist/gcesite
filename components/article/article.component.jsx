import React from 'react';
import { Button } from 'react-bootstrap';
import './Article.css';


const Article = ({ title, description, pdfUrl }) => {
  return (
    <div className="article">
      < br/>
      <h2>{title}</h2>
      < br/>
      <p>{description}</p>


      <Button href={pdfUrl} target="_blank" variant="primary">
       Leia mais
      </Button>
    </div>
  );
};

export default Article;

