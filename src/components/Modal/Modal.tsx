import React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalProps = {
  show: boolean;
  close: () => void;
  title: string;
  children: string;
};

const Modal = ({ show, close, title, children }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""}`}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation}>
          <header className="modal_header">
            <h2 className="modal_header_title">{title}</h2>
            <Button
              sx={{ top: "-90px", right: "-30px" }}
              className="close_button close"
              onClick={() => close()}
            >
              <CloseIcon />
            </Button>
          </header>
          <main className="modal_content">{children}</main>
          <footer className="modal_footer">
            <Button
              variant="contained"
              className="modal_close"
              onClick={() => close()}
            >
              OK
            </Button>
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;

//Place this snippet everywhere you want
{
  /* <Modal
        show={modal}
        close={Toggle}
        title={"HRNet"}
        children={"Employee successfully added "}
      /> */
}
