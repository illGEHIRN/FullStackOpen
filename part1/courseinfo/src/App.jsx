const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log('total exercises:', props)
  return (
    <p>Number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack aplication development'

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Uning props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]

  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises


  return (
    <div>
      
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
      
    </div>
  )
}

export default App