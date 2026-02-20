// Defining the structures that are later to be used in the App function

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
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
  // Defining the contents of the webpage (vars) which will be plugged into the structs defined earlier

  // variable holding just a single string
  const course = 'Half Stack aplication development'

  // array of variables
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Uning props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]

  // variable holding an intiger - sum of the exercises: [int]
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