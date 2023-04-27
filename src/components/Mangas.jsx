import React, { useState } from "react";
import Modal from "./Modal";
import { mangaList } from "../assets/mangaslist";

const Mangas = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [manga, setManga] = useState(null);
  const [direccion, setDireccion] = useState([]);
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClick = (manga, direccion, description) => {
    setIsOpen(true);
    setManga(manga);
    setDireccion(direccion);
    setDescription(description);
    setCover(cover);
  };
  return (
    <>
      <div className="manga-wrapper">
        {mangaList.map((mangaItem, index) => (
          <div
            key={index}
            className="manga"
            onClick={() =>
              handleClick(
                mangaItem.title,
                mangaItem.direction,
                mangaItem.description,
                mangaItem.image,
              )
            }
          >
            <img src={mangaItem.image} alt="" className="manga-cover" />
            <h3 className="manga-name">{mangaItem.title}</h3>
          </div>
        ))}
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          title={manga}
          tomos={direccion}
          description={description}
          cover={cover}
        ></Modal>
      </div>
    </>
  );
};

export default Mangas;
