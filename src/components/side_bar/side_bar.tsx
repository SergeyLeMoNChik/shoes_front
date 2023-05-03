
import { ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

export const SideBar=()=> {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
            <Link to={'shoes'}> 
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Shoes" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'saller'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Saller" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'buyer'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Buyer" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'director'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Director" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'supplier'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Supplier" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'sale'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Sale" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'purchase'}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Purchase" />
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
      </nav>
    </Box>
  );
}