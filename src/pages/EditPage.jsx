import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import TextModal from "../styleComponents/Modal";

const EditContact = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [preview, setPreview] = useState("");
    const [data, setData] = useState({
        name: "",
        level: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://backendinstructor.onrender.com/api/v1/${id}`);
                const contactData = await response.json();
                setData(contactData);
                setPreview(contactData.image);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
        if (e.target.files) {
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append("name", data.name);
            formData.append("level", data.level);
            formData.append("description", data.description);
            formData.append("image", data.image);

            const res = await fetch(`https://backendinstructor.onrender.com/api/v1/${id}`, {
                method: "PUT",
                body: formData,
            });
            if (res.ok) {
                setData({ name: "", image: "" });
                history("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-blue-50 p-8 flex justify-center">
            <main className="border border-black md:w-[30%] h-[30%] justify-center flex flex-col">
                <section className="flex flex-col justify-center p-6">
                    <div className="mb-3">
                        <h1 className="">Edit contact</h1>
                    </div>

                    {data.image && (
                        <div className="md:w-[50%] rounded flex">
                            <img src={preview} alt="Thumb" />
                        </div>
                    )}
                    <label>Name</label>
                    <input
                        className="form-control  rounded mt-1 p-2 mb-8 text-black"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange("name")}
                    />
                    <label>Level</label>
                    <input
                        className="form-control  rounded mt-1 p-2 mb-8 text-black"
                        type="text"
                        name="level"
                        value={data.level}
                        onChange={handleChange("level")}
                    />
                    <label>Description</label>
                    <input
                        className="form-control  rounded mt-1 p-2 mb-8 text-black"
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleChange("description")}
                    />
                    <div>
                        <TextModal
                            type="file"
                            accept="image/*"
                            name="image"
                            title="Image"
                            placeholder=""
                            required={true}
                            onChange={handleChange("image")}
                        />
                        <label>
                            <div>
                                <button
                                    style={{ color: "#1231c9", fontSize: "40", marginRight: "10" }}
                                >{" "}
                                </button>
                            </div>
                        </label>
                    </div>
                    <button className="save bg-green-600 text-white p-2 rounded" onClick={handleSubmit}>
                        Update
                    </button>
                </section>
            </main>
        </div>
    );
};

export default EditContact;
