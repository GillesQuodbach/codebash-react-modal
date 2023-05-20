import React, { useState } from "react";
import { Button } from "@mui/material";

const ModalButton = () => {
  const [modal, setModal] = useState(true);
  const Toggle = () => setModal(!modal);
  return (
    <Button
      onClick={() => Toggle()}
      sx={{
        backgroundColor: "#333333",
        marginTop: "1rem",
        "&:hover": {
          backgroundColor: "#595959",
        },
      }}
      type="submit"
      variant="contained"
      className="clickMe"
    >
      Save
    </Button>
  );
};

export default ModalButton;
