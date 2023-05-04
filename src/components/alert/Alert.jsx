import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HelpIcon from '@mui/icons-material/Help';
import "./alert.css"

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className= "alert">
      <HelpIcon onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Percentual de mortalidade bovina"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          É a porcentagem de animais de uma determinada população de gado que morrem durante um determinado período de tempo. Esse número é uma medida importante para a indústria de carne bovina, pois pode afetar a rentabilidade dos produtores de gado.

Para calcular o percentual de mortalidade bovina, é necessário saber o número de animais que morreram durante o período de tempo em questão e o tamanho total da população de gado no início do período. A fórmula para calcular o percentual de mortalidade bovina é:

Percentual de mortalidade bovina = (Número de mortes / Tamanho da população inicial) x 100
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Não entendi</Button>
          <Button onClick={handleClose} autoFocus>
            Entendi!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}