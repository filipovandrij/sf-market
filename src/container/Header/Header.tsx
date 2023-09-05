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
import { useState } from 'react'
type Props = {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}
const Header = ({ setSearchQuery }: Props) => {
    const [choiceBtn, setChoiceBtn] = useState<boolean>(true)
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
                            <NavLink to="/" className="menu-item">
                                <Button
                                    color={choiceBtn ? 'success' : 'primary'}
                                    variant="contained"
                                    onClick={() => setChoiceBtn(true)}
                                >
                                    Product List
                                </Button>
                            </NavLink>
                            <NavLink to="/addProduct" className="menu-item">
                                <Button
                                    color={choiceBtn ? 'primary' : 'success'}
                                    variant="contained"
                                    onClick={() => setChoiceBtn(false)}
                                >
                                    Add new
                                </Button>
                            </NavLink>
                        </div>
                        <Search setSearchQuery={setSearchQuery} />
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}
export default Header
