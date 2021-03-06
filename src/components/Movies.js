import React, { useState } from 'react'
import { Modal,show,Button} from 'react-bootstrap';

const API_IMG="https://image.tmdb.org/t/p/w500/"

function Movies({poster,title,date,overview}) {
  const [show, setShow]=useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  return (
    <div className="card text-center bg-black mb-4">
    <div className="card-body">
      <img className="card-img-top" src={API_IMG+poster} />
      <div className="card-body">
          <button type="button" className="btn btn-success" onClick={handleShow} >View More</button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                {/* <Modal.Title></Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
              <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster} />
              <h3>{title}</h3>
              
              <h5>Release Date: {date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
          </Modal>
      </div>
    </div>
</div>
)
}

export default Movies