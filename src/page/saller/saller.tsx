import { useQuery } from "react-query";
import { sallerApi } from "../../api/sallerApi";
import {Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { ISaller, ISallerform } from "./types";
import s from './s.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const SallerPage = () =>{

    const {data, refetch} = useQuery({queryKey: ['saller'], queryFn: ()=> sallerApi.getAll<ISaller[]>()})
    const {register, handleSubmit} = useForm<ISallerform>()
    
    const onSubmit = async (data: ISallerform)=>{
      await sallerApi.create(data)
      console.log(data)
        refetch()
    }

    const onDelete = async (idsaller: number) => {
      await sallerApi.delete(idsaller)
      refetch()
  }

    return (
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <TextField id="standard-basic" {...register('fullname')} label="Enter Full name" variant="standard"/>
            <TextField id="standard-basic" {...register('pasportdata')} label="Enter Pasport Data" variant="standard"/>
            <TextField id="standard-basic" {...register('data_of_employment')} type={'date'} variant="standard"/>
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
  {data && data.map(saller => (
    <TableRow
      key={saller.idsaller}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{saller.fullname}</TableCell>
      <TableCell>{saller.pasportdata}</TableCell>
      <TableCell>{new Date(saller.data_of_employment).toDateString()}</TableCell>
      <TableCell align="right" onClick={() => onDelete(saller.idsaller)}>
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