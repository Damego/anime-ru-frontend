import React, { useState } from "react";

function Option({ name, value, checked, onClick }) {
  return (
    <div
      onClick={() => onClick(value)}
      className={
        "py-1 pl-2 " +
        (checked === true
          ? "bg-red-500 text-white hover:bg-red-400"
          : "hover:bg-red-100")
      }
    >
      <div>{name}</div>
    </div>
  );
}

function Menu({ options, selectedOptionValues, onOptionSelect }) {
  return (
    <div
      className={
        "border-slate-150 mt-2 max-h-48 overflow-y-scroll border-2 text-xl shadow-md"
      }
    >
      {options.map(({ name, value }) => (
        <Option
          name={name}
          value={value}
          checked={selectedOptionValues.includes(value)}
          onClick={onOptionSelect}
          key={name + value}
        />
      ))}
    </div>
  );
}

export default function Select({ options, selectedOptions, onOptionSelect }) {
  const [isOpened, setOpened] = useState(false);
  const toggleOpened = () => setOpened(!isOpened);
  const stringSelectedOptions = selectedOptions
    .map(option => option.name)
    .join(", ")
    .toLowerCase();

  return (
    <div className={"w-full select-none hover:cursor-pointer"}>
      <div
        onClick={() => toggleOpened()}
        className={
          "border-slate-150 h-10 truncate text-ellipsis border-2 pl-2 pr-2 py-1 text-xl shadow-md"
        }
      >
        {selectedOptions.length !== 0 ? stringSelectedOptions : "Выберите жанр"}
      </div>
      {isOpened ? (
        <Menu
          options={options}
          selectedOptionValues={selectedOptions.map((option) => option.value)}
          onOptionSelect={onOptionSelect}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
