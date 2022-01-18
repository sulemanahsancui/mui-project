import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import Notecard from "../component/Notecard";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, []);

  const deletehandle = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, { method: "DELETE" });
    const newnotes = notes.filter((note) => note.id != id);
    setNotes(newnotes);
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {notes?.map((note) => (
          <Grid item key={note.id} xs={12} md={6} ld={4}>
            <Notecard notes={note} deletehandle={deletehandle} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
