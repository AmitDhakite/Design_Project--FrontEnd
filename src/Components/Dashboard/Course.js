import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MediaControlCard(props) {
  const theme = useTheme();
  console.log(props.data);
  return (
    <Card
      sx={{ display: "flex" }}
      style={{
        backgroundColor: "#63B4B8",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.data.name} - {props.data.courseId}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
            Evaluation Policy: {props.data.evaluationPolicy}
          </Typography>
          <Typography variant="title" color="text.primary" component="div">
            Credits: {props.data.credits}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Offered By: {props.data.instituteName}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
