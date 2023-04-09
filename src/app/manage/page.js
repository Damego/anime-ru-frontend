import httpClient from "../utils/httpClient"
import Form from "./components/form"

const predefinedGenres = [
  {name: "Романтика", id: 1},
  {name: "Иссекай", id: 2},
  {name: "Фентези", id: 3},
  {name: "Повседневность", id: 4},
  {name: "Комедия", id: 5}
]

export default async function Manage() {
    const genres = predefinedGenres.map(({name, id}) => ({name, value: id})) // await httpClient.getGenreList();


    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <Form selectOptions={genres}/>
        </div>
    )
}