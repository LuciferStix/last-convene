import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
// import './css/Header.css'

import NavBar from "./Navbar";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    // <AppBar
    //   position="sticky"
    //   sx={{
    //     background:
    //       "linear-gradient(90deg, rgba(240,13,205,1) 0%, rgba(0,212,255,1) 100%)",
    //   }}
    // >
    //   <Toolbar>
    //     <Typography
    //       component={Link}
    //       to="/"
    //       variant="h4"
    //       style={{ textDecoration: "none" }}
    //     >
    //       ConVene
    //     </Typography>
    //     {isLoggedIn && (
    //       <Box display="flex" marginLeft={"auto"}>
    //         <Tabs
    //           textColor="inherit"
    //           value={value}
    //           onChange={(event, val) => setValue(val)}
    //         >
    //           <Tab LinkComponent={Link} to="/" label="All Blogs" />
    //           <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs " />
    //           <Tab LinkComponent={Link} to="/blogs/add" label="Create Blogs " />
    //         </Tabs>
    //       </Box>
    //     )}
    //     <Box display="flex" marginLeft="auto">
    //       {!isLoggedIn && (
    //         <>
    //           <Button
    //             LinkComponent={Link}
    //             to="/auth"
    //             variant="contained"
    //             sx={{ margin: 1, borderRadius: 10 }}
    //           >
    //             Sign In
    //           </Button>
    //           <Button
    //             LinkComponent={Link}
    //             to="/auth"
    //             variant="contained"
    //             sx={{ margin: 1, borderRadius: 10 }}
    //           >
    //             Sign Up
    //           </Button>
    //         </>
    //       )}
    //       {isLoggedIn && (
    //         <Button
    //           onClick={() => dispatch(authActions.logout())}
    //           LinkComponent={Link}
    //           to="/"
    //           variant="contained"
    //           sx={{ margin: 1, borderRadius: 10 }}
    //         >
    //           Log Out
    //         </Button>
    //       )}
    //     </Box>
    //   </Toolbar>
    //  </AppBar>
    // <>
    //   <div className="container-fluid">
    //     <nav className="navbar navbar-expand-lg bg-body-tertiary fixedElement">
    //       <a className="navbar-brand" href="/">ConVene</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

    //           {
    //             !isLoggedIn &&
    //             <>
    //               <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="#">Home</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="#">About Us</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="#">Event</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="#">Contact </a>
    //               </li>
    //               <Link to='/auth/login'><button type="button" className="btn btn-primary">sign in</button></Link>
    //             </>
    //           }


    //           {isLoggedIn &&
    //             <>
    //               {/* <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="/myBlogs">My Blogs </a>
    //               </li> */}
    //               <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="/blogs/add">Add Event </a>
    //               </li>
    //               <Link to='/' onClick={() => dispatch(authActions.logout())}><button type="button" className="btn btn-primary">Log out</button></Link>
    //             </>

    //           }
    //         </ul>

    //       </div>
    //     </nav >
    //   </div>
    // </>
    <NavBar/>
  );
}

export default Header;
