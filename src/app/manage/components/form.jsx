"use client"

import { useState } from "react"
import Select from "@/app/components/Select";
import httpClient from "@/app/utils/httpClient";

export default function Form({ selectOptions }) {
  const [selectedOptions, changeSelectedOptions] = useState([]);
  const [file, changeFile] = useState();
  const [animeName, setAnimeName] = useState(null);
  const [animeDescription, setAnimeDescription] = useState(null);

  const onOptionSelect = (value) => {
    const [option] = selectOptions.filter(option => option.value === value)

    if (selectedOptions.includes(option)) {
      changeSelectedOptions(selectedOptions.filter(opt => opt.value !== value))
    }
    else {
      changeSelectedOptions([...selectedOptions, option])
    }
  }

  /**
   * 
   * @param {File} file 
   */
  const onFileChange = (file) => {
    changeFile(file)
  }

  const onButtonClick = async () => {
    await httpClient.addAnime(animeName, animeDescription, selectedOptions.map(option => option.value), file)
  }

  return (
    <div className="w-1/3 h-1/2 flex flex-col items-center justify-center rounded-lg bg-white text-xl shadow-md">
      <label>Изображение</label>
      <input type="file" accept="image/png" name="image" onChange={formElement => onFileChange(formElement.target.files[0])}/>
      <div>
        <label>Название</label>
        <input className="border-2" onChange={inputField => setAnimeName(inputField.target.value)}/>
      </div>
      <div>
        <label>Описание</label>
        <input className="border-2" onChange={inputField => setAnimeDescription(inputField.target.value)}/>
      </div>
      <div>
        <label>Жанры</label>
        <Select
          options={selectOptions}
          selectedOptions={selectedOptions}
          onOptionSelect={onOptionSelect}
        />
      </div>

      <button onClick={onButtonClick} className="w-48 h-12 border-2">
        Добавить аниме
      </button>
    </div>
  )
}