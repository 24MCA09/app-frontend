import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"

function Cards() {
  return (
    <>
    <div id='movie-card'>


 

     <Card style={{ width: '18rem' }}> 
      <Card.Img variant="top" src="" alt='no image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Book now</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt='no image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt='no image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt='no image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt='no image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
     
    </>
  )
}

export default Cards