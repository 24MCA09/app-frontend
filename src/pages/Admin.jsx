import React, { useState } from 'react'
import './admin.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { createMovieAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import AllMovies from './AllMovies';

const initialState = {
    id: "",
    title: "",
    image: "",
    genre: "",
    duration: "",
    rating: "",
    language: "",
    director: "",
    description: "",
    videourl: "",
    trailertitle: ""
};
function Admin() {
    const [form, setForm] = useState(initialState);
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false);
    const handleshow = () => {
        setshow(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleGenreChange = (e) => {
        setForm((prev) => ({
            ...prev,
            genre: e.target.value.split(",").map((g) => g.trim()),
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            ...form,
            id: Number(form.id),
            rating: Number(form.rating),
        };
        const {id,title,image,genre,duration,rating,language,director,description,videourl,trailertitle} = form
      
      
        if (!id || !title || !image || !genre || !duration || !rating || !language || !director || !description || !videourl || !trailertitle) {
            toast.info('please fill the form completely')
        }
        else {
            // console.log(seatdetails);

            const result = await createMovieAPI(form)
            if (result.status === 201) {
                toast.success(`Movie Created successfully`)
               
                  setForm(initialState);
            }
        }

    };
    return (
        <>
        
            <div className='d-flex justify-content-between border border-success p-2 m-5'>
                <h2>Admin Panel</h2>
                <Button onClick={handleshow}>
                    Add Movie
                </Button>
            </div>
            <div>
                <AllMovies/>
            </div>
            <Modal show={show} onHide={handleClose} keyboard={false} centered>
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body>
                    <div className="movie-form-container">
                        <h2>Add a Movie</h2>
                        <form>
                            <input name="id" type="number" value={form.id} onChange={handleChange} placeholder="ID" required />
                            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
                            <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required />
                            <input name="genre" value={form.genre} onChange={handleGenreChange} placeholder="Genre (comma separated)" required />
                            <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" required />
                            <input name="rating" type="number" value={form.rating} onChange={handleChange} placeholder="Rating" required />
                            <input name="language" value={form.language} onChange={handleChange} placeholder="Language" required />
                            <input name="director" value={form.director} onChange={handleChange} placeholder="Director" required />
                            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
                            <input name="videourl" value={form.videourl} onChange={handleChange} placeholder="Video URL" required />
                            <input name="trailertitle" value={form.trailertitle} onChange={handleChange} placeholder="Trailer Title" required />

                        </form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleSubmit}>Upload</Button>
                </Modal.Footer>
            </Modal>

   <ToastContainer position='top-center' autoClose={2000} theme='colored' />

        </>
    )
}

export default Admin


