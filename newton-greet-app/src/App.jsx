
const Welcome = ({name})=>{
  return (
    <>
      <h1>Hey : {name}</h1>
      <h2>Welcome to the Newton School</h2>
    </>
  )
}
const App = ()=>{
  return (
    <>
      <Welcome name="Tauheed"/>
    </>
  )
}

export default App;