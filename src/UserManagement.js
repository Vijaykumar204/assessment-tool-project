

import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from './UserSlice';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserManagement.css';

const UserManagement = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [validated, setValidated] = useState(false);

  // Refs for the forms
  const addUserFormRef = useRef(null);
  const editUserFormRef = useRef(null);

  const handleClose = () => {
    setShow(false);
    setShowEdit(false);
    setShowConfirm(false);
    setCurrentUser({});
    setValidated(false);
  };

  const handleShow = () => setShow(true);

  const handleEditShow = (user) => {
    setCurrentUser(user);
    setShowEdit(true);
  };

  const handleConfirmShow = (user) => {
    setCurrentUser(user);
    setShowConfirm(true);
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = addUserFormRef.current;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    dispatch(addUser(user));
    handleClose();
  };

  const handleEditUser = (event) => {
    event.preventDefault();
    const form = editUserFormRef.current;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    const formData = new FormData(form);
    const updatedUser = Object.fromEntries(formData.entries());
    dispatch(updateUser({ ...currentUser, ...updatedUser }));
    handleClose();
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(currentUser));
    handleClose();
  };
  const handleReset = () => {
    // Reset form fields by resetting the form ref
    addUserFormRef.current.reset();
  };

  return (
    <div>
        <h1 className='text-center mt-1' >User Management</h1  >
      <div className="table-header mt-1 " style={{marginLeft:'75%'}} >
      
        <form className="d-flex" >
          <Button className="btn  add-new w-100 mx-4" onClick={handleShow} id='buttoncolor'>
            + Add User
          </Button>
        </form>
      </div>
      <div className="table-section" style={{ maxWidth: '80%', margin: 'auto' }}>
      <table className="table table-striped border text-center">
          <thead>
            <tr>
              <th>SI.No.</th> 
              <th>Name</th>
              <th>Email</th>
              <th>User ID</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.id}</td>
                <td>{user.password}</td>
                <td>
                  <Button className='px-1 text-success' variant="link" onClick={() => handleEditShow(user)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button className='px-1 text-danger' variant="link" onClick={() => handleConfirmShow(user)}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>  
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleAddUser} ref={addUserFormRef}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" pattern="[A-Za-z\s]{3,}" required />
              <Form.Control.Feedback type="invalid">Please enter a valid name (at least 3 letters).</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" pattern="^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$" required />
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>User ID</Form.Label>
              <Form.Control type="text" name="id" placeholder="Enter User ID" pattern="^\d{6}$" required />
              <Form.Control.Feedback type="invalid">User ID must be 6 digits.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter Password" pattern="^\d{8}$" required />
              <Form.Control.Feedback type="invalid">Password must be 8 digits.</Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="button" onClick={handleReset} variant="warning">
            Reset
          </Button>
            <Button type="submit"  id='buttoncolor'>
              Submit
            </Button>   
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleEditUser} ref={editUserFormRef}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={currentUser.name || ''}
                placeholder="Enter Name"
                pattern="[A-Za-z\s]{3,}"
                required
              />
              <Form.Control.Feedback type="invalid">Please enter a valid name (at least 3 letters).</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={currentUser.email || ''}
                placeholder="Enter Email"
                pattern="^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$"
                required
              />
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                defaultValue={currentUser.id || ''}
                placeholder="Enter User ID"
                pattern="^\d{6}$"
                required
              />
              <Form.Control.Feedback type="invalid">User ID must be 6 digits.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                defaultValue={currentUser.password || ''}
                placeholder="Enter Password"
                pattern="^\d{8}$"
                required
              />
              <Form.Control.Feedback type="invalid">Password must be 8 digits.</Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit"  id='buttoncolor'>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showConfirm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
