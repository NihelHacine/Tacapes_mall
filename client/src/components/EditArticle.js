
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updatearticle } from '../redux/articleSlice';
function EditArticle({ping, setping, article}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name: article?.name,
    nom_boutique:article?.nom_boutique,
    price:article?.price,
    image:article?.image,
    size:article?.size,
    
  })
const dispatch= useDispatch();
  return (
    <>
    <Button className='btn_edit' style={{backgroundColor:'green'}} variant="primary" onClick={handleShow}>
      edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit Article </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Article name</Form.Label>
        <Form.Control type="text" placeholder={article?.name} onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Article Shop </Form.Label>
        <Form.Control type="text" placeholder={article?.nom_boutique} onChange={(e)=>setedited({...edited, nom_boutique:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Article image </Form.Label>
        <Form.Control type="text" placeholder={article?.image} onChange={(e)=>setedited({...edited, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Article price</Form.Label>
        <Form.Control type="text" placeholder={article?.price} onChange={(e)=>setedited({...edited, price:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Article size</Form.Label>
        <Form.Control type="text" placeholder={article?.size} onChange={(e)=>setedited({...edited, size:e.target.value})}/>
      </Form.Group>

      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:'green'}} onClick={() => {dispatch(updatearticle({id:article?._id,edited})); 
        setping(!ping);
             handleClose()}}>
          Edit
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditArticle