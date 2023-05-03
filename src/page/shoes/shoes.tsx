import { useQuery } from "react-query"
import { shoesApi } from "../../api/shoesApi"
import { IShoes, IShoesform } from "./types";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import s from './s.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { EditShoes } from "../../components/editbutton/editshoes";

export const ShoesPage = () =>{

    const {data, refetch} = useQuery({queryKey: ['shoes'], queryFn: ()=> shoesApi.getAll<IShoes[]>()})
    const {register, handleSubmit} = useForm<IShoesform>()
    
    const onSubmit = async (data: IShoesform) => {
        await shoesApi.create(data)
        refetch()
    }
    const onDelete = async (id: number) => {
      await shoesApi.delete(id)
      refetch()
  }
    return(
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <TextField id="standard-basic" {...register('model')} label="Enter Model" variant="standard" />
            <TextField id="standard-basic" {...register('brand')} label="Enter Brand" variant="standard" />
            <TextField id="standard-basic" {...register('size')} label="Enter Size" variant="standard" />
            <TextField id="standard-basic" {...register('article')} label="Enter Article" variant="standard" />
            <TextField id="standard-basic" {...register('season')} label="Enter Season" variant="standard" />
            <TextField id="standard-basic" {...register('sex')} label="Enter Sex" variant="standard" />
            <TextField id="standard-basic" {...register('price')} label="Enter Price" variant="standard" />
            <TextField id="standard-basic" {...register('amount')} label="Enter Amount" variant="standard" />
            <Button type ='submit' variant="contained">Create new shoes</Button>
            </form>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Article</TableCell>
            <TableCell>Season</TableCell>
            <TableCell>Sex</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map(shoes => (
            <TableRow
              key={shoes.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{shoes.model}</TableCell>
              <TableCell>{shoes.brand}</TableCell>
              <TableCell>{shoes.size}</TableCell>
              <TableCell>{shoes.article}</TableCell>
              <TableCell>{shoes.season}</TableCell>
              <TableCell>{shoes.sex}</TableCell>
              <TableCell>{shoes.price}</TableCell>
              <TableCell align="right">{shoes.amount}</TableCell>
              <TableCell align="right"><EditShoes id = {shoes.id}/></TableCell>
              <TableCell align="right" onClick={() => onDelete(shoes.id)}>
                <DeleteOutlineIcon/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}