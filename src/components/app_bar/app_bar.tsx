import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import shoesimg from '../../assets/pngwing.com.png'


export default function ButtonAppBar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
        <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          maxHeight: { xs: 100, md: 100 },
          maxWidth: { xs: 100, md: 100 },
        }}
        alt="The house from the offer."
        src={shoesimg}
      />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Магазин обуви "Кефтеме"
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

