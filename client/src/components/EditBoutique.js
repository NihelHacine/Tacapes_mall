import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editboutique } from '../redux/boutiqueSlice';


function EditBoutique({ping, setping, boutique}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name: boutique?.name,
    adresse:boutique?.adresse,
    image:boutique?.image,
    proprietaire:boutique?.proprietaire,
    category:boutique?.category,
  })
const dispatch= useDispatch();
  return (
    <>
    <Button className='btn_edit' style={{backgroundColor:'green'}} variant="primary" onClick={handleShow}>
      edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit boutique </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Shop name</Form.Label>
        <Form.Control type="text" placeholder={boutique?.name} onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Shop adresse</Form.Label>
        <Form.Control type="text" placeholder={boutique?.adresse} onChange={(e)=>setedited({...edited, adresse:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Shop image </Form.Label>
        <Form.Control type="text" placeholder={boutique?.email} onChange={(e)=>setedited({...edited, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Shop owner</Form.Label>
        <Form.Control type="text" placeholder={boutique?.proprietaire} onChange={(e)=>setedited({...edited, proprietaire:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Shop category</Form.Label>
        <Form.Control type="text" placeholder={boutique?.category} onChange={(e)=>setedited({...edited, category:e.target.value})}/>
      </Form.Group>

      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:'green'}} onClick={() => {dispatch(editboutique({id:boutique?._id,edited})); 
        setping(!ping);
             handleClose()}}>
          Edit
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditBoutique