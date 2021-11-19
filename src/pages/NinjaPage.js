import React, { useState, useEffect, useCallback } from "react";
import {useHistory} from 'react-router-dom'
import classes from "classnames";
import axios from "axios";
import { NinjaEmptyName } from "../components/NinjaEmptyName";
import { NinjaNotEmptyName } from "../components/NinjaNotEmptyName";

export const NinjaPage = () => {
  const [search, setSearch] = useState("")
  const [njname, setNjname] = useState("")
  const [back, setBack] = useState(false)
  const history = useHistory()

  const requestGET = useCallback(async (url) => {
    const data = await axios.get(url);
    return data.data.name;
  }, []);

  useEffect(() => {

    async function getData(url) {
      let data = await requestGET(url)
      setNjname(data)
    }

    let search = window.location.search
    let params = new URLSearchParams(search)
    let x = params.get("x")
    if (x){
        getData(`${process.env.REACT_APP_API_URL}/ninjify?x=${x}`)
        setSearch(x)
        setBack(true)
    } else {
        history.push('/ninjify')
    }
  }, [requestGET, history]);

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const clickHandler = () => {
    setBack(!back);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="scene scene--card">
          <div
            className={classes("card", { "is-flipped": back })}
            onClick={clickHandler}
          >
            <div className="card__face card__face--front">
              <p>
                To find a name of ninja, you must enter words that are separated
                by commas.
              </p>
              <p>Example,</p>
              <blockquote>
                <p>
                  <span>npm,rails,html5</span>
                </p>
              </blockquote>
              <p>
                <strong>The exact values can be used!</strong>{" "}
              </p>
              <p>
                The name is based on a list of technology buzzwords (Awesome
                List)
              </p>
            </div>
            <div className="card__face card__face--back">
            {(njname === '' || njname === null) ? <NinjaEmptyName /> : <NinjaNotEmptyName name={njname} />}
              
            </div>
          </div>
        </div>
        <form action="/ninjify" method="GET">
          <input
            type="text"
            name="x"
            className="form-control"
            placeholder="npm,rails,html5"
            value={search}
            onChange={changeHandler}
          />
          <button type="submit" className="btn btn-danger btn-block mt-3">
            Search name
          </button>
        </form>
      </div>
    </>
  );
};
