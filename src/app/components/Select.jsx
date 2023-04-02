import React, { useState } from "react";

function Option({ name, value, checked, onClick }) {
  return (
    <div
      onClick={() => onClick(value)}
      className={
        "py-1 pl-2 hover:cursor-pointer " +
        (checked === true
          ? "bg-red-500 text-white hover:bg-red-400"
          : "hover:bg-red-100")
      }
    >
      <div>{name}</div>
    </div>
  );
}

function Menu({ options }) {
  const [selectedOptions, changeSelectedOptions] = useState([]);

  const onOptionClick = (value) => {
    if (selectedOptions.includes(value)) {
      changeSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      changeSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div
      className={
        "border-slate-150 mt-2 max-h-48 w-full select-none overflow-y-scroll border-2 text-xl shadow-md"
      }
    >
      {options.map(({ name, value }) => (
        <Option
          name={name}
          value={value}
          checked={selectedOptions.includes(value)}
          onClick={onOptionClick}
          key={value}
        />
      ))}
    </div>
  );
}

export default function Select({ options }) {
  const [isOpened, toggleOpened] = useState(false);

  return (
    <div>
      <div
        onClick={() => toggleOpened(!isOpened)}
        className={
          "border-slate-150 h-10 w-full select-none border-2 pl-2 text-xl shadow-md hover:cursor-pointer"
        }
      >
        {"Выберите жанр"}
      </div>
      {isOpened ? <Menu options={options} /> : <></>}
    </div>
  );
}
