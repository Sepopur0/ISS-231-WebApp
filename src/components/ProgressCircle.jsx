import { Box, useTheme ,Typography} from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40", total=1000 ,extra=""}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Typography
          variant="h4"
          sx={{ color: colors.greenAccent[600] }}
        >
          {total}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: colors.primary[100] }}
        >
          {extra}
        </Typography>
    </Box>
  );
};

export default ProgressCircle;
