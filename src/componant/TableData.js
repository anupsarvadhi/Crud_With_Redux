import React, { useEffect } from 'react'
import './table.scss'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { deleteUser, loadUser } from '../redux/Action'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TableData = () => {
  const navigate = useNavigate()

  let dispetch = useDispatch()
  const { users } = useSelector((state) => state.data)

  useEffect(() => {
    dispetch(loadUser())
  }, [dispetch])

  const deleteFnc = (id, name) => {
    dispetch(deleteUser(id))
    toast.success(`${name} Delete SuccsesFully..!`, {
      position: toast.POSITION.TOP_LEFT,
    })
  }

  const EditFnc = (id) => {
    navigate(`/Edit/${id}`)
  }

  return (
    <>
      <div className="container mt-4">
        <ToastContainer />
        <div className="table col-sm-12">
          <Link to="/adduser">
            <Button variant="primary float-end px-5 py-2 mb-3">Add User</Button>
          </Link>
          <Table className="tabledata">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <tr>
                        <td>{item.name}</td>
                        <td className="email">{item.email}</td>
                        <td>{item.gender}</td>
                        <td>
                          <span
                            style={{
                              backgroundColor:
                                item.status === 'active'
                                  ? '#eefade'
                                  : '#ffeeed',
                              color:
                                item.status === 'active'
                                  ? '#00d933'
                                  : '#f50000',
                            }}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center fs-5">
                            <FaEdit
                              className="mx-2 iconedit"
                              onClick={() => EditFnc(item.id)}
                            />

                            <FaTrashAlt
                              className="icondelete mx-0"
                              onClick={() =>
                                window.confirm(
                                  'Are you sure to delete this userdata ?',
                                )
                                  ? deleteFnc(item.id, item.name)
                                  : ''
                              }
                            />
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  )
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default TableData
