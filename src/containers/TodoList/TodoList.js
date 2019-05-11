import React from 'react'
import { Container, Card } from 'semantic-ui-react'

const TodoList = props => {
  console.log(props.todoData)

  return (
    <Container>
      <Card.Group>
        <Card
          link
          onClick={() => console.log('ㅎㅎ')}
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </Card.Group>
    </Container>
  )
}

const renderCard = data => {
  data.map()
}

export default TodoList
