import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useQuery } from 'react-query';
import { shoesApi } from '../../api/shoesApi';
import { IShoes, IShoesEdit, IShoesform } from '../../page/shoes/types';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Rotate90DegreesCcw';

export const EditShoes =(props: any) => {
    type Anchor = 'right';
    const {refetch} = useQuery(['shoes'], () => shoesApi.getAll<IShoes[]>())
    const [state, setState] = React.useState({
    right: false,
  });
  const {register, handleSubmit} = useForm<IShoesform>()
    
    const onEdit = async (data: IShoesEdit) => {
        let id = props.id
        let shoes = {
            model: data.model,
            size: data.size,
            article: data.article,
            season: data.season,
            brand: data.brand,
            sex: data.sex,
            price: data.price,
            amount: data.amount
        }
        await shoesApi.update(id, shoes)
        refetch()
    }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
    >
      <List>
      <form onSubmit={handleSubmit(onEdit)}>
            <TextField id="standard-basic" {...register('model')} label="Enter Model" variant="standard" />
            <TextField id="standard-basic" {...register('brand')} label="Enter Brand" variant="standard" />
            <TextField id="standard-basic" {...register('size')} label="Enter Size" variant="standard" />
            <TextField id="standard-basic" {...register('article')} label="Enter Article" variant="standard" />
            <TextField id="standard-basic" {...register('season')} label="Enter Season" variant="standard" />
            <TextField id="standard-basic" {...register('sex')} label="Enter Sex" variant="standard" />
            <TextField id="standard-basic" {...register('price')} label="Enter Price" variant="standard" />
            <TextField id="standard-basic" {...register('amount')} label="Enter Amount" variant="standard" />
            <Button type ='submit' onClick={toggleDrawer(anchor, false)} variant="contained">Edit shoes</Button>
            </form>
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <EditIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}