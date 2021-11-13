import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from '@mui/icons-material/Logout';
import { pink } from '@mui/material/colors';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { HashLink } from "react-router-hash-link";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import AnimationTwoToneIcon from '@mui/icons-material/AnimationTwoTone';
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import SettingsApplicationsTwoToneIcon from "@mui/icons-material/SettingsApplicationsTwoTone";
import ListItemIcon from "@mui/material/ListItemIcon";
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentIcon from "@mui/icons-material/Payment";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { Image, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";
import Pay from "../User/Pay/Pay";
import AdminRoute from "../Admin/AdminRoute/AdminRoute";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import MyOrders from "../User/MyOrders/MyOrders";
import Review from "../User/Review/Review";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import AddProduct from "../Admin/AddProduct/AddProduct";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className="bg-success layout-top">
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: "none" }) }}
                        >
                            <MenuIcon />
                            <Image
                                width="76px"
                                height="50px"
                                src="https://i.ibb.co/9wKG2Qb/Screenshot-2021-11-12-075157-removebg-preview.png"
                                fluid
                            />
                            Brothers Car
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        ></Typography>
                    </>
                    <Typography variant="h6" noWrap component="div">
                        <Navbar.Text className="text-info_lol text-light fw-bold">
                            <a
                                href="#login"
                                style={{
                                    color: "white",
                                    fontSize: "30px",
                                    textDecoration: "none",
                                }}
                            >
                                {user?.displayName || user.email}
                            </a>
                        </Navbar.Text>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button>
                        <Box>
                            <ListItemIcon>
                                <HomeIcon sx={{ color: pink[500] }} />
                                <NavLink
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                        marginLeft: "5px",
                                    }}
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </ListItemIcon>
                        </Box>
                    </ListItem>

                    {admin && (
                        <Box>
                            <ListItem button>
                                <ListItemIcon>
                                    <AdminPanelSettingsTwoToneIcon color="primary" />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/makeAdmin`}
                                    >
                                        Make Admin
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsApplicationsTwoToneIcon />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/manageProducts`}
                                    >
                                        Manage Products
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AddBusinessTwoToneIcon />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/addProduct`}
                                    >
                                        Add A Product
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AnimationTwoToneIcon />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/manageAllOrders`}
                                    >
                                        Manage All Orders
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                        </Box>
                    )}
                    {!admin && (
                        <>
                            <ListItem button>
                                <ListItemIcon>
                                    <PaymentIcon color="primary" />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/pay`}
                                    >
                                        Pay
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DeliveryDiningIcon color="success" />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/myOrders`}
                                    >
                                        My Orders
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ReviewsIcon color="secondary" />
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            marginLeft: "5px",
                                        }}
                                        to={`${url}/review`}
                                    >
                                        Review
                                    </NavLink>
                                </ListItemIcon>
                            </ListItem>
                        </>
                    )}

                    <ListItem button>
                        <ListItemIcon>
                            <LogoutIcon />
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    marginLeft: "5px",
                                }}
                                onClick={logOut}
                                as={HashLink}
                                to="/logIn"
                            >
                                Logout
                            </NavLink>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        {/* <DashboardHome></DashboardHome> */}
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>
            </Box>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    {/* ============================== */}
                </Typography>
                <Typography paragraph>
                    {/* ============================== */}
                </Typography>
            </Main>
        </Box>
    );
};

export default Dashboard;
