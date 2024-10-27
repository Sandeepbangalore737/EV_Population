import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TotalEVMetrics from "./Metrics/TotalEVMetrics";
import EVByCountyChart from "./Charts/EVByCountyChart";
import EVByYearChart from "./Charts/EVByYearChart";
import EVByTypeChart from "./Charts/EVByTypeChart";
import CAFVEligibilityChart from "./Charts/CAFVEligibilityTable";
import { loadData } from "../utils/dataLoader";
import EVByMakeChart from "./Charts/EVByMakeChart";
import { createTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import SyncIcon from "@mui/icons-material/Sync";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardComponent from "./cardComponent";
import EVRangeChart from "./Charts/EVRangeChart";
import CAFVEligibilityTable from "./Charts/CAFVEligibilityTable";
const theme = createTheme();

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [totalEVs, setTotalEVs] = useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    async function fetchData() {
      const loadedData = await loadData();
      setData(loadedData);
      setTotalEVs(loadedData.length);
    }
    fetchData();
  }, []);
  const handleOpenModal = () => setOpenModal(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ mx: {xs:"8px", sm: "16px", md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          gap: isSmallScreen ? 2 : 0,
          py: 5,
        }}
      >
        <Typography variant="h5" fontWeight="900">
          EV Population Dashboard
        </Typography>
        <Box
          ml={isSmallScreen ? 0 : "auto"}
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-start",
            alignItems: "center",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: 2,
            mt: isSmallScreen ? 2 : 0,
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "20%",
              border: "1px solid rgb(236,237,240)",
            }}
          >
            <SyncIcon sx={{ color: "rgb(103,110,125)" }} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "20%",
              border: "1px solid rgb(236,237,240)",
            }}
          >
            <MoreVertIcon sx={{ color: "rgb(103,110,125)" }} />
          </IconButton>
         
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <CardComponent title="Total Electric Vehicles">
            <TotalEVMetrics totalEVs={totalEVs} />
          </CardComponent>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <CardComponent title="Electric Vehicles By Country">
            <EVByCountyChart data={data} />
          </CardComponent>
        </Grid>
        <Grid item xs={12} sm={12} md={6} mt={2}>
          <CardComponent title="Electric Vehicles By Year">
            <EVByYearChart data={data} />
          </CardComponent>
        </Grid>
        <Grid item xs={12} sm={12} md={6} mt={2}>
          <CardComponent title="Electric Vehicles By Type">
            <EVByTypeChart data={data} />
          </CardComponent>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <CardComponent title="Electric Vehicles By Company">
            <EVByMakeChart data={data} />
          </CardComponent>
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
        <CardComponent title="Electric Vehicles Range">
          <EVRangeChart data={data}/>
          </CardComponent>

        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
          <CardComponent title="CAFV Eligibility Table">
            <CAFVEligibilityTable data={data} />
          </CardComponent>
        </Grid>
      </Grid>
    </Box>
  );
}
