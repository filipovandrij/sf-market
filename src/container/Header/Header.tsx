import './Header.scss'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import Search from '../../components/headerComponents/Search'

import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
type Props = {}
const Header = (props: Props) => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className="tool_bar">
                        <Typography variant="h6" noWrap component="div">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <LocalGroceryStoreIcon />
                                SF-Market
                            </IconButton>
                        </Typography>
                        <div className="main_pages">
                            <Button variant="contained">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'menu-item-active'
                                            : 'menu-item'
                                    }
                                >
                                    Product List
                                </NavLink>
                            </Button>
                            <Button variant="contained">
                                <NavLink
                                    to="/addProduct"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'menu-item-active'
                                            : 'menu-item'
                                    }
                                >
                                    Add new
                                </NavLink>
                            </Button>
                        </div>
                        <Search />
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}
export default Header
