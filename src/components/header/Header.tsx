import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import Styles from "./header.module.scss";
import { Store, ActionType } from "../../store/index";

const Header = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const { globalState, setGlobalState } = useContext(Store);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalState({
      type: ActionType.SET_TERM,
      payload: { ...globalState, term: term },
    });
    history.push(`/search?query=${term}`);
  };

  useEffect(() => {
    setTerm(globalState.term);
  }, []);
  return (
    <div className={Styles.header}>
      <div className={Styles.item}>
        <Link to="/">React tube</Link>
      </div>
      <div className={Styles.item}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="検索"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
