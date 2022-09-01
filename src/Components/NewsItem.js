import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const NewsItem = (props) => {
  
    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className='my-3'>
      <Card>
        <Card.Img variant="top" src={!imageUrl?"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png":imageUrl}/>
        <Card.Body>
            <Card.Title>{title} <Badge pill bg="danger">{!author?"Unknown":author}</Badge>{' '}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text><Badge pill bg="secondary">{new Date(date).toGMTString()}</Badge></Card.Text>
          <Button className="btn-sm" href={newsUrl} target="_black" variant="dark">Read more</Button>
        </Card.Body>
      </Card>
      </div>
    )
  
}

export default NewsItem
