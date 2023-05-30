import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";

import { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../scenes/global/Topbar";
import ProSidebar from "../scenes/global/Sidebar";

const Root = () => {
  const [colorMode, theme] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box height="100vh" display="flex">
            <ProSidebar isSidebar={isSidebar} />
            <main className="content p-3" >
              <Topbar setIsSidebar={setIsSidebar} />
              <Outlet />
            </main>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Root;
