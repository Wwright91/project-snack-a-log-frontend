import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SnackEditForm = () => {
  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

  const [edit, setEdit] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (res) => setEdit(res.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSnack(edit, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="edit_labels">Name:</label>
        <input
          id="name"
          value={edit.name}
          type="text"
          onChange={handleText}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="fiber" className="edit_labels">Fiber:</label>
        <input
          id="fiber"
          type="text"
          value={edit.fiber}
          onChange={handleText}
        />
        <label htmlFor="protein" className="edit_labels">Protein:</label>
        <input
          id="protein"
          type="text"
          name="protein"
          value={edit.protein}
          onChange={handleText}
        />
        <label htmlFor="added_sugar" className="edit_labels">Added Sugar:</label>
        <input
          id="added_sugar"
          type="text"
          name="add_sugar"
          onChange={handleText}
          value={edit.added_sugar}
        />
        <label htmlFor="image" className="edit_labels">Photo:</label>
        <input
          id="image"
          type="text"
          pattern="https://.*"
          name="image"
          onChange={handleText}
          value={edit.image}
        />

        <br />

        <input classname="edit-submit" type="submit" style={{color:" rgba(237, 240, 15, 0.883)"}} />
      </form>
      <Link to={`/snacks/${id}`}>
        <button className="edit-button">Nevermind!</button>
      </Link>
    </div>
  );
};

export default SnackEditForm;
