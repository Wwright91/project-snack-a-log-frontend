import React from "react";

const SnackEditForm = () => {
  const [snacks, setSnacks] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8888/snacks/${id}`, transaction)
      .then(function (response) {
        navigate(`/snacks/${id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8888/snacks/${id}`).then((res) => {
      setTransaction(res.data);
    });
  }, [id]);

  return (
    <div>
      <h3>Add a New Snack</h3>

      <form onSubmit={handleSubmit}>
        <label for="protein">Protein</label>
        <input
          onChange={(e) => setSnacks({ ...snacks, protein: e.target.value })}
          id="protein"
          name="protein"
          type="number"
          value={snacks.protein}
        />

        <label for="item_name">Name</label>
        <input
          onChange={(e) => setSnacks({ ...snacks, item_name: e.target.value })}
          id="item_name"
          name="item_name"
          type="text"
          value={snacks.item_name}
        />

        <label for="Fiber">Fiber</label>
        <input
          onChange={(e) => setSnacks({ ...snacks, fiber: e.target.value })}
          id="fiber"
          name="fiber"
          type="number"
          value={snacks.fiber}
        />

        <label for="image">Image</label>
        <input
          onChange={(e) => setSnacks({ ...snacks, image: e.target.value })}
          id="image"
          name="image"
          type="text"
          value={snacks.image}
        />

        <label for="sugar">Sugar</label>
        <input
          onChange={(e) => setSnacks({ ...snacks, sugar: e.target.value })}
          id="sugar"
          name="sugar"
          type="number"
          value={snacks.sugar}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SnackEditForm;
