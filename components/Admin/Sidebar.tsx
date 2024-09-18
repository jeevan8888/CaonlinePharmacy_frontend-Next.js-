import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const AdminSidebar : React.FC = () => {
    return (
    <aside>
        <Typography
                sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    fontSize: "24px",
                    marginLeft: "24px",
                    height: "80px"
                }}
            >
                ADMIN PANEL
            </Typography>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            >
            <ListItemButton href='/admin/user'>
                <ListItemIcon>
                <PersonIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton href='/admin'>
                <ListItemIcon>
                <ProductionQuantityLimitsIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>
        </List>
    </aside>)
};
  
export default AdminSidebar;
  