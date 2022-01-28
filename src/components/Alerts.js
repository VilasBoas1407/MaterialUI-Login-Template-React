import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import AlertTitle from "@mui/material/AlertTitle";

export default function Alerts({ config, setConfig }) {
  if (config.open) {
    setTimeout(() => {
      setConfig({ ...config, open: false });
    }, 3000);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={config.open}>
        <Alert
          severity={config.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setConfig({ ...config, open: false });
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {config.type === "error" ? <AlertTitle>Erro</AlertTitle> : null}
          {config.message}
        </Alert>
      </Collapse>
    </Box>
  );
}
