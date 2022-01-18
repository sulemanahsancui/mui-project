import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Drawer, Typography, AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { format } from "date-fns";

const drawerWidth = 220;

const classes = {
  pages: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    padding: 2,
    marginTop: 9,
  },
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  root: {
    display: "flex",
  },
  active: { backgroundColor: "#f4f4f4" },
  title: { padding: 1 },
  appBar: { width: `calc(100% - ${drawerWidth}px)`, marginLeft: drawerWidth },
  date: { flexGrow: 1 },
  // toolbar: { marginBottom: 5 },
};
const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <Box sx={classes.root}>
      {/* appbar */}
      <AppBar
        position="fixed"
        sx={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar sx={classes.toolbar}>
          <Typography sx={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Suleman</Typography>
        </Toolbar>
      </AppBar>
      {/* side bar */}
      <Drawer sx={classes.drawer} variant="permanent" anchor="Left">
        <Box>
          <Typography sx={classes.title} variant="h5">
            Suleman Notes
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              sx={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={classes.pages}>{children}</Box>
    </Box>
  );
};

export default Layout;
