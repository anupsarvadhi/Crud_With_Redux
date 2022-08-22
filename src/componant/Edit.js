import React, { useEffect, useState } from 'react'
import './table.scss'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { getSingleUser } from '../redux/Action'
import { useSelector } from 'react-redux/es/exports'
import { updatUser } from '../redux/Action'

const Edit = () => {
  const nevigate = useNavigate()
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  let dispetch = useDispatch()
  const { user } = useSelector((state) => state.data)

  useEffect(() => {
    dispetch(getSingleUser(id))
  }, [id, dispetch])

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setGender(user.gender)
      setStatus(user.status)
    }
  }, [user])

  const handleEdit = (e) => {
    e.preventDefault()
    const update = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    }
    dispetch(updatUser(update, id))

    nevigate('/')
  }

  return (
    <>
      <div className="form">
        <Form>
          <h3 className="text-center pb-3">Edit User</h3>
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={name || ''}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Col>
            <Col sm={12}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <div className="d-flex">
              <Col sm={6} className="d-flex">
                <Form.Check
                  type="radio"
                  label="Male"
                  defaultValue={'male'}
                  name="gender"
                  checked={gender === 'male' || ''}
                  onChange={(e) => setGender(e.target.value)}
                  id="formHorizontalRadios1"
                  className="me-2"
                />

                <Form.Check
                  type="radio"
                  label="Female"
                  defaultValue={'female'}
                  name="gender"
                  checked={gender === 'female' || ''}
                  onChange={(e) => setGender(e.target.value)}
                  id="formHorizontalRadios2"
                />
              </Col>
            </div>

            <Col sm={12}>
              <Form.Group as={Col}>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={status || ''}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={'active'}>active</option>
                  <option value={'inactive'}>inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="primary"
            className="d-flex m-auto px-4"
            type="submit"
            onClick={handleEdit}
          >
            Edit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Edit
