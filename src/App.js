import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TableData } from './componant'
import { Edit } from './componant'
import { UserForm } from './componant'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TableData />} />
        <Route path="/adduser" element={<UserForm />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
