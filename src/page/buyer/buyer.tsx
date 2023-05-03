import { useQuery } from "react-query";
import { buyerApi } from "../../api/buyerApi";
import { TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { IBuyer } from "./types";
import { useForm } from "react-hook-form";

export const BuyerPage = () =>{

    const {data} = useQuery({queryKey: ['buyer'], queryFn: ()=> buyerApi.getAll<IBuyer[]>()})
    const {register, handleSubmit} = useForm<Omit<IBuyer, 'id'>>()
    const onSubmit = (data:any)=>{
        console.log(data);
    }
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic" {...register('fullname')} label="Enter name" variant="standard" />
            <TextField id="standard-basic" {...register('pasportdata')}  label="Enter address" variant="standard" />
            <TextField id="standard-basic" {...register('data_of_employment')}  label="Enter address" variant="standard" />
            <Button type ='submit' variant="contained">Enter</Button>
        </form>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
  <TableRow>
    <TableCell>Full name</TableCell>
    <TableCell>Pasportdata</TableCell>
    <TableCell>Data of employment</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {data && data.map((row) => (
    <TableRow
      key={row.idbuyer}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{row.fullname}</TableCell>
      <TableCell>{row.pasportdata}</TableCell>
      <TableCell>{row.data_of_employment}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer>
    </div>
    )
}