import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const SnackNewForm = () => {
  const navigate = useNavigate();

  const [protein, setProtein] = useState("");

  const [name, setName] = useState("");

  const [fiber, setFiber] = useState("");

  const [image, setImage] = useState("");

  const [added_sugar, setSugar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/snacks`, {
        fiber,
        name,
        protein,
        added_sugar,
        image,
      })
      .then(() => {
        navigate("/snacks");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="new_labels">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          type="text"
          value={name}
        />

        <label htmlFor="protein" className="new_labels">Protein</label>
        <input
          onChange={(e) => setProtein(e.target.value)}
          id="protein"
          name="protein"
          type="number"
          value={protein}
        />

        <label htmlFor="Fiber" className="new_labels">Fiber</label>
        <input
          onChange={(e) => setFiber(e.target.value)}
          id="fiber"
          name="fiber"
          type="number"
          value={fiber}
        />

        <label htmlFor="image" className="new_labels">Image</label>
        <input
          onChange={(e) => setImage(e.target.value)}
          id="image"
          name="image"
          type="text"
          value={image}
        />

        <label htmlFor="sugar" className="new_labels">Sugar</label>
        <input
          onChange={(e) => setSugar(e.target.value)}
          id="added_sugar"
          name="added_sugar"
          type="number"
          value={added_sugar}
        />

        <br />   

        <input classname="new-submit" type="submit" value="submit" style={{color:" rgba(237, 240, 15, 0.883)"}}/>
      </form>
    </div>
  );
};

export default SnackNewForm;
