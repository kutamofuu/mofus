import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";


const MangaPages = () => {
  const [jsonData, setJsonData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentUrl, setCurrentUrl] = useState("");

  const [nextPage, setNextPage] = useState(null);
  const { title, tomo } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await import(`../assets/mangas/${title}/${tomo}.json`);
      const datadefault = data.default;

      let dividedData = [];

      for (let i = 0; i < datadefault.length; i += 5) {
        dividedData.push(datadefault.slice(i, i + 5));
      }

      setJsonData(datadefault);

      // Pre-cargar la imagen siguiente
      const nextIndex = Math.min(count + 1, datadefault.length - 1);
      const nextPageUrl = datadefault[nextIndex].url;
      const nextPageObj = new Image();
      nextPageObj.src = nextPageUrl;
      setNextPage(nextPageObj);
    }
    fetchData();
  }, [title, tomo]);

  useEffect(() => {
    if (count < jsonData.length) {
      setCurrentUrl(jsonData[count].url);
    }
  }, [count, jsonData]);

  function handleNext() {
    setCount(count + 1);
    const nextIndex = Math.min(count + 2, jsonData.length - 1);
    const nextPageUrl = jsonData[nextIndex].url;
    const nextPageObj = new Image();
    nextPageObj.src = nextPageUrl;
    setNextPage(nextPageObj);
  }

  function handlePrevious() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="pages-container">
        <Suspense fallback={<div class="loader">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>}>
          {currentUrl && (
            <img src={currentUrl} alt="" className="page" loading="lazy" />
          )}
        </Suspense>
        {nextPage && (
          <img
            src={nextPage.src}
            alt=""
            className="nextpage"
            style={{ display: "none" }}
          />
        )}
        {count < jsonData.length && (
          <button className="next-page" onClick={handleNext}></button>
        )}

        {count > 0 && (
          <button className="previous-page" onClick={handlePrevious}></button>
        )}
      </div>

      <select
        name=""
        id="page-selector"
        onChange={(e) => setCount(parseInt(e.target.value))}
        value={count}
      >
        {jsonData.map((page, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
    </>
  );
};

export default MangaPages;
