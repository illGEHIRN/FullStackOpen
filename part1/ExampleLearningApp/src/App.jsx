const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  console.log('Hello from component')

  const now = new Date()
  const a = 10
  const b = 20

  const name = 'Peter'
  const age = 10

  console.log(now, a+b)

  const friends = [
    { name: 'Peter', age: 41 },
    { name: 'Maya', age: 100},
  ]

  console.log(friends)

  return(
    <div>
      <h1>Greetings, currently it is {now.toString()}</h1>
      <p>
        {a} plus {b} equals {a+b}
      </p>
      <Hello name='Andrej' age={20 + 161 - 20} />
      <Hello name={name} age={age} />
      <Hello />

      <div>
        <h1>FRIEND LIST</h1>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name} {friends[1].age}</p>
        
      </div>

    </div>
  )
}

export default App