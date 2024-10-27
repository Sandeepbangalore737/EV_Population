import { Box, Card, CardContent, Typography } from "@mui/material";

export default function TotalEVMetrics({ totalEVs }) {
  return (
    <Box align="center" sx={{pl:"40%",pt:"20%",}}>
      <Typography variant="h4" >{totalEVs}</Typography>
    </Box>
  );
}
