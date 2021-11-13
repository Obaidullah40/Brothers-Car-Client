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
import ListItemIcon from "@mui/material/ListItemIcon";
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentIcon from "@mui/icons-material/Payment";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { Image, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";
import Pay from "../Pay/Pay";
import { HashLink } from "react-router-hash-link";
import Button from "@restart/ui/esm/Button";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";


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
                    {/* <Link to="/pay">
                        <Button color="inherit">Pay</Button>
                    </Link> */}
                    {/* <Link to={`${url}`}>
                        <Button color="inherit">Dashboard</Button>
                    </Link> */}
                    {admin && (
                        <Box>
                            {/* <Link to={`${url}/makeAdmin`}>
                                <Button color="inherit">Make Admin</Button>
                            </Link> */}
                            <Link to={`${url}/addDoctor`}>
                                <Button color="inherit">Add Doctor</Button>
                            </Link>
                            <ListItem button>
                                <ListItemIcon>
                                    <PaymentIcon color="primary" />
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
                        </Box>
                    )}
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
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        {/* <AddDoctor></AddDoctor> */}
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

// const drawerWidth = 240;

// const Dashboard = (props) => {
//     const { window } = props;
//      let { path, url } = useRouteMatch();
//      const { user, admin } = useAuth();
//     return (
//         <Box sx={{ display: "flex" }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//             >
//                 <Toolbar className="bg-success layout-top">
//                     <Typography variant="h6" noWrap component="div">
//                         <Image
//                             width="76px"
//                             height="50px"
//                             src="https://i.ibb.co/9wKG2Qb/Screenshot-2021-11-12-075157-removebg-preview.png"
//                             fluid
//                         />
//                         Brothers Car
//                     </Typography>
//                     <Navbar.Text className="text-info_lol text-light fw-bold">
//                         <a href="#login">{user?.displayName || user.email}</a>
//                     </Navbar.Text>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     [`& .MuiDrawer-paper`]: {
//                         width: drawerWidth,
//                         boxSizing: "border-box",
//                     },
//                 }}
//             >
//                 <Toolbar />
//                 <Divider />
//                 <Link to="/">
//                     <Button color="inherit">Home</Button>
//                 </Link>
//                 <Link to={`${url}`}>
//                     <Button color="inherit">Dashboard</Button>
//                 </Link>
//                 {/* {admin && ( */}
//                 <Box>
//                     <Link to={`${url}/makeAdmin`}>
//                         <Button color="inherit">Make Admin</Button>
//                     </Link>
//                     <Link to={`${url}/addDoctor`}>
//                         <Button color="inherit">Add Doctor</Button>
//                     </Link>
//                 </Box>
//                 {/* )} */}
//                 <Box sx={{ overflow: "auto" }}>
//                     <List>
//                         {["Inbox", "Starred", "Send email", "Drafts"].map(
//                             (text, index) => (
//                                 <ListItem button key={text}>
//                                     <ListItemIcon>
//                                         {index % 2 === 0 ? (
//                                             <InboxIcon />
//                                         ) : (
//                                             <MailIcon />
//                                         )}
//                                     </ListItemIcon>
//                                     <ListItemText primary={text} />
//                                 </ListItem>
//                             )
//                         )}
//                     </List>
//                     <Divider />
//                     <List>
//                         {/* {["All mail", "Trash", "Spam"].map((text, index) => (
//                             <ListItem button key={text}>
//                                 <ListItemIcon>
//                                     {index % 2 === 0 ? (
//                                         <InboxIcon />
//                                     ) : (
//                                         <MailIcon />
//                                     )}
//                                 </ListItemIcon>
//                                 <ListItemText primary={text} />
//                             </ListItem>
//                         ))} */}
//                     </List>
//                 </Box>
//             </Drawer>
//         </Box>
//     );
// }

// export default Dashboard;
