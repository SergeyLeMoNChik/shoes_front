import { useQuery } from "react-query";
import { supplierApi } from "../../api/supplierApi";
import { ISupplier } from "./types";
import { useForm } from "react-hook-form";
import { TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export const SupplierPage = () =>{

    const {data} = useQuery({queryKey: ['supplier'], queryFn: ()=> supplierApi.getAll<ISupplier[]>()})
    const {register, handleSubmit} = useForm<Omit<ISupplier, 'id'>>()
    const onSubmit = (data:any)=>{
        console.log(data);
    }
    
    return(
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic" {...register('supplier_name')} label="Enter name" variant="standard" />
            <TextField id="standard-basic" {...register('address')}  label="Enter address" variant="standard" />
            <Button type ='submit' variant="contained">Enter</Button>
        </form>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
  <TableRow>
    <TableCell>Supplier_name</TableCell>
    <TableCell>Address</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {data && data.map((row) => (
    <TableRow
      key={row.idsupplier}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{row.supplier_name}</TableCell>
      <TableCell>{row.address}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer></div>
    ) 
}