import httpClient from "../utils/httpClient"
import Form from "./components/form"

export default async function Manage() {
    const genres = await httpClient.getGenreList();

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <Form selectOptions={genres.map(({name, id}) => ({name, value: id}))}/>
        </div>
    )
}