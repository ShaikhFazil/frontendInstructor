import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Addto = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState("");
  const [data, setData] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  console.log("Current ID:", id);

  useEffect(() => {
    fetch(`https://backendinstructor.onrender.com/api/v1/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
        setPreview(data.image);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleAddToCard = async () => {
    try {
      const res = await fetch("https://backendinstructor.onrender.com/api/v1/admin/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          level: data.level,
          description: data.description,
          image: data.image,
        }),
      });

      if (res.ok) {
        console.log("Contact added to admin database successfully");

      } else {
        console.log("Error adding contact to admin database");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="container">
        <div>
          <h3>Add to card</h3>
        </div>

        {data.image && (
          <div>
            <img src={preview} alt="Thumb" />
          </div>
        )}
        <h1 className="form-control" name="name">
          {data.name}
        </h1>
        {/**Add to card */}
        <button className="save" onClick={handleAddToCard}>
          Add to Card
        </button>
      </section>
    </main>
  );
};

export default Addto;
