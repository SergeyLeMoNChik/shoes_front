import { useQuery } from "react-query";
import { purchaseApi } from "../../api/purchaseApi";

export const PurchasePage = () =>{

    const query = useQuery({queryKey: ['purchase'], queryFn: ()=> purchaseApi.getAll()})
    
    console.log(query.data);
    return <div>PurchasePage</div>
}