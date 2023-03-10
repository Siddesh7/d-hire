import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useAccount, useEnsAddress } from "wagmi";
import axios from "axios";
import { WindowRounded } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ isOpen, handleClose }) {
  const { address } = useAccount();

  const [createJob, setCreateJob] = useState({
    candidateAddress: "",
    Company: "",
    Role: "",
    manager: address.toLowerCase(),
    managingUrl: "",
  });

  const { data: EnsName } = useEnsAddress({ name: createJob.candidateAddress });

  useEffect(() => {
    if (EnsName) {
      const ensEquivalent = EnsName.toLowerCase();
      setCreateJob({
        ...createJob,
        candidateAddress: ensEquivalent,
        managingUrl: `${ensEquivalent}::${createJob.Company}::${createJob.Role}`,
      });
    }
    console.log(createJob);
  }, [EnsName, createJob.Company, createJob.Role]);
  const handleSubmit = (event) => {
    axios
      .post(`${process.env.REACT_APP_HOST}/api/create`, createJob)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        sx={{
          backdropFilter: "blur(10px)",
        }}
      >
        <DialogTitle>Start a new hiring procedure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please specify the ENS/Address of the candidate and other details
            here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Candidate address or ENS name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setCreateJob({ ...createJob, candidateAddress: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setCreateJob({ ...createJob, Company: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Role"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setCreateJob({ ...createJob, Role: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            disabled
            label="Manager"
            type="text"
            fullWidth
            variant="standard"
            value={createJob.manager}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
