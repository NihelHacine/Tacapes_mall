import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addarticle } from '../redux/articleSlice';

function AddArticle({ping,setping}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [article, setarticle] = useState({
   name:"",
   nom_boutique:"",
   image:"",
   price:"",
   size:"",
  })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button className='btn_add'  variant="primary" onClick={handleShow}>
      Add an article
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add article </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Article name</Form.Label>
        <Form.Control type="text" placeholder="Enter the article's name" onChange={(e)=>setarticle({...article, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Article Shop </Form.Label>
        <Form.Control type="text" placeholder="Enter the article's shop" onChange={(e)=>setarticle({...article, nom_boutique:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Article image </Form.Label>
        <Form.Control type="text" placeholder="Enter the article's image" onChange={(e)=>setarticle({...article, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Article price</Form.Label>
       <Form.Control type="text" placeholder="Enter the article's price"  onChange={(e)=>setarticle({...article, price:e.target.value})}/>
       <Form.Label>Article size </Form.Label>
        <Form.Control type="text" placeholder="Enter the article's size"  onChange={(e)=>setarticle({...article,size :e.target.value})}/>
     </Form.Group>


      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {dispatch(addarticle(article)); 
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

export default AddArticle