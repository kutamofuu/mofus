import React, { useEffect, useState } from "react";
import { mangaList } from "../assets/mangaslist.js";
import Modal from "../components/Modal";

const Home = () => {
  const [search, setSearch] = useState([]);
  const [manga, setManga] = useState(null);

  useEffect(() => {
    setSearch(mangaList);
    console.log(mangaList);
  }, []);

  function handleSearch(event) {
    const searched = event.target.value.toLowerCase();
    console.log(searched);

    setSearch(
      mangaList.filter((search) =>
        search.title.toLowerCase().includes(searched)
      )
    );
  }

  const [isOpen, setIsOpen] = useState(false);
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
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="? "
          onChange={handleSearch}
        />
      </div>

      <div className="manga-wrapper">
        {search.map((search, index) => (
          <div
            key={index}
            className="manga"
            onClick={() =>
              handleClick(
                search.title,
                search.direction,
                search.description,
                search.image
              )
            }
          >
            <img src={search.image} alt="" className="manga-cover" />
            <h3 className="manga-name">{search.title}</h3>
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

export default Home;
