"use client";

import { useRouter } from "next/navigation";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { NAVIGATION } from "./navigation";
import { demoTheme } from "./theme";
import { useState } from "react";

const DRAWER_WIDTH = 240;

interface DemoPageContentProps {
  pathname: string;
}

function DemoPageContent({ pathname }: DemoPageContentProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h4">Welcome to Dashboard</Typography>
        <Typography variant="body1" color="text.secondary">
          Current page: {pathname || "/"}
        </Typography>
        <Box
          sx={{
            p: 2,
            backgroundColor: "background.paper",
            borderRadius: 1,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2">
            This is a dashboard with a top bar and sidebar using Material-UI and Toolpad components.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const iconMap: { [key: string]: React.ElementType } = {
  dashboard: DashboardIcon,
  orders: ShoppingCartIcon,
  sales: BarChartIcon,
  traffic: DescriptionIcon,
  calendar: LayersIcon,
};

export default function Home() {
  const router = useRouter();
  const [pathname, setPathname] = useState("/dashboard");

  const handleNavigate = (path: string) => {
    setPathname(path);
    router.push(path);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Top Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Website Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            marginTop: "64px",
            height: "calc(100% - 64px)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List disablePadding>
            {NAVIGATION.map((item) => {
              if (item.kind === "header") {
                return (
                  <Typography
                    key={item.title}
                    variant="caption"
                    sx={{
                      px: 2,
                      py: 1,
                      display: "block",
                      fontWeight: 600,
                      color: "text.secondary",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </Typography>
                );
              }
              if (item.kind === "divider") {
                return <Divider key={`divider-${Math.random()}`} sx={{ my: 1 }} />;
              }
              const IconComponent = iconMap[item.segment!] || DashboardIcon;
              return (
                <ListItemButton
                  key={item.segment}
                  selected={pathname === `/${item.segment}`}
                  onClick={() => handleNavigate(`/${item.segment}`)}
                >
                  <ListItemIcon>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          marginTop: "64px",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <DemoPageContent pathname={pathname} />
      </Box>
    </Box>
  );
}
