import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "../index.css";

const style = {
  mb: 2,
  mt: 2,
  display: "block",
};
export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("mern");
  const [detailsError, setDetailsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const history = useHistory();
  const handlesubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title == "" || details == "" || category == "") {
      alert("Please enter all details");
    } else {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(function (response) {
        console.log("data submitted " + response);
        setTitle("");
        setDetails("");
        setCategory("");
        history.push("/");
      });
    }
  };

  return (
    <Container>
      <Typography variant="h6" color="primary" component="h2" gutterBottom>
        Craeet a new notes
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handlesubmit}>
        <TextField
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          value={title}
          error={titleError}
          sx={{ ...style }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Details"
          variant="outlined"
          color="secondary"
          value={details}
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
          sx={{ ...style }}
          onChange={(e) => setDetails(e.target.value)}
        />
        <FormControl sx={{ ...style }}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="mern" control={<Radio />} label="Mern" />
            <FormControlLabel
              value="blockchain"
              control={<Radio />}
              label="Blockchain"
            />
            <FormControlLabel
              value="dreamcar"
              control={<Radio />}
              label="DreamCar"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
