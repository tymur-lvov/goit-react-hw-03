import { useId } from "react";
import s from "./SearchBox.module.css";

function SearchBox({ onChange, searchQuery }) {
  const searchFieldId = useId();

  return (
    <>
      <label className={s.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        onChange={(event) => onChange(event.target.value)}
        value={searchQuery}
        id={searchFieldId}
        type="text"
      />
    </>
  );
}

export default SearchBox;
