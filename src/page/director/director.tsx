import { useQuery } from "react-query";
import { directorApi } from "../../api/directorApi";

export const DirectorPage = () =>{

    const query = useQuery({queryKey: ['director'], queryFn: ()=> directorApi.getAll()})
    
    console.log(query.data);
    return <div>DirectorPage</div>
}