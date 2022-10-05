import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../actions";
import style from "./ModulesCss/ArtSold.module.css";
import { useState } from "react";

export default function ArtworksSoldout() {
  const dispatch = useDispatch();
  const artworksSolds = useSelector((state) => state.artworksBuyed);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    precioTotal()
  }, [estado])

  useEffect(() => {
    dispatch(getProducts());

  }, []);

  function precioTotal() {
    let suma = 0;
    artworksSolds.forEach((e) => (suma = suma + Number(e.price)));
    setEstado(suma);
    console.log('hola');
  }
  return (
    <div className={style.container}>
      <Link to="/MainPage">
        <div className={style.header}>
          <h1 className={style.logoForm}>Artket</h1>
        </div>
      </Link>
      <div className={style.box}>
        <div>
          <h1 className={style.LoginMsg}>Sold artworks</h1>
          <h4>Total earnings: ${estado}</h4>
        </div>
        <div className={style.arts_box}>
          {artworksSolds.map((e) => {
            return (
              <div className={style.arts_dataContainer}>
                <div className={style.arts_data}>
                  <div className={style.titleDate}>
                    <h4>{e.title}</h4>
                    <h4>{e.date}</h4>
                  </div>
                  <img className={style.image} src={e.image}></img>
                  <h4>Sold for: ${e.price}</h4>
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}
