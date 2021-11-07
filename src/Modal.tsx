import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleCloseButton = {
  position: 'absolute' as 'absolute',
  top: '0%',
  right: '0%',
  p: 4,
};

const styleImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
};

export default function BasicModal(props: { img: string; imgText: string, setOpen: (arg0: boolean) => any; open: boolean; }) {
  const handleClose = () => props.setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton sx={styleCloseButton} onClick={handleClose}>
              <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nasa Birthday Picture - {props.imgText}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={props.img} alt="" width="85%" style={styleImg}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}