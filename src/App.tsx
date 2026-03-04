import UsersList from "./UsersList"

function App() {
const loader = false 
  return (
   <div>

    {loader ? <h1>loading ..</h1> : null }
    <UsersList />
   </div>
  )
}

export default App
