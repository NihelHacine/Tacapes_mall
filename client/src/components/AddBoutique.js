import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addboutique } from '../redux/boutiqueSlice';
function AddBoutique({ping,setping}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [boutique, setboutique] = useState({
   name:"",
   adresse:"",
   image:"",
   proprietaire:"",
   category:"",
  })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button className='btn_add'  variant="primary" onClick={handleShow}>
      Add a shop 
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add boutique </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Shop name</Form.Label>
        <Form.Control type="text" placeholder="Enter the shop's name" onChange={(e)=>setboutique({...boutique, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Shop adresse</Form.Label>
        <Form.Control type="text" placeholder="Enter the shop's adresse" onChange={(e)=>setboutique({...boutique, adresse:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Shop image </Form.Label>
        <Form.Control type="text" placeholder="Enter the shop's image" onChange={(e)=>setboutique({...boutique, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Shop category</Form.Label>
       <Form.Control type="text" placeholder="Enter the shop's category"  onChange={(e)=>setboutique({...boutique, category:e.target.value})}/>
       <Form.Label> Shop owner </Form.Label>
        <Form.Control type="text" placeholder="Enter the shop's owner"  onChange={(e)=>setboutique({...boutique,proprietaire :e.target.value})}/>
     </Form.Group>


      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {dispatch(addboutique(boutique)); 
        setping(!ping);
             handleClose()}}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    </div>
  )
}

export default AddBoutique