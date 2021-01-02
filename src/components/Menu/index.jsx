import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

// toggo
import { withStyles } from '@material-ui/core/styles';

import Menu2 from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';






const useStyles = makeStyles((theme) => ({
    menu: {
        margin: 30,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    iconItem: {
        minWidth: 35,
    },


}));


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu2
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);





export default function Menu() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.menu}>
            <AppBar className="container" position="sticky">
                <Toolbar>
                    <Link to="/">

                        <Button >TRANG CHỦ</Button>
                    </Link>

                    <div>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={handleClick}


                        >
                            Open Menu
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            <StyledMenuItem>

                                <ListItemIcon className={classes.iconItem}>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <Link to="/part1">
                                    <ListItemText primary="Part 1" />
                                </Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <ListItemIcon className={classes.iconItem}>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Part 2" />
                            </StyledMenuItem>


                            <StyledMenuItem>
                                <ListItemIcon className={classes.iconItem}>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Part 3" />
                            </StyledMenuItem>

                        </StyledMenu>
                    </div>


                    <Link to="/todofeature">
                        <Button>ĐỀ THI TOIEC FULL</Button>
                    </Link>


                </Toolbar>
            </AppBar>
        </div >
    );
}
