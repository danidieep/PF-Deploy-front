import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteArtwork } from '../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert"

export default function DetailBoard({ id }) {
  const dispatch = useDispatch()

  function handleDelete(e) {
    e.preventDefault()
    dispatch(deleteArtwork(e.target.name))
    alertDeleteArtworkFromBoard()
  }

  function alertDeleteArtworkFromBoard() {
    swal(`Artwork deleted from board`)
  }

  return (
    <div>
      <button name={id} value={id} onClick={(e) => { handleDelete(e) }} >Eliminar</button>
      <Link to="/PutArtwork">
        <button>Modificar</button>
      </Link>

      <ToastContainer />

    </div>
  )
}
