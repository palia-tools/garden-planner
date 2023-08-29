'use client';
import Button from '@mui/material/Button'
import { createTheme, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';

function MyButton() {
  return (
    <Button variant="contained">I&apos;m a button</Button>
  );
}

function MyGrid({ color }: { color: string }) {
  let boxes = [];

  function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.backgroundColor = color;
  }

  function handleMouseOut(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.backgroundColor = e.currentTarget.getAttribute("value") as string;
  }

  function handleMouseClick(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.setAttribute("value", color);
  }

  for (let i = 0; i < 4; i++) {
    boxes.push(
      <Grid key={i} item xs={1}>
        <Item onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseDown={handleMouseClick} value="white">xs=8</Item>
      </Grid>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {boxes}
      </Grid>
    </Box>
  );
}

type PickerProps = {
  color: string;
  onChange: (event: React.MouseEvent<HTMLElement>, newColor: string) => void;
}

function Picker({ color, onChange }: PickerProps) {


  return (
    <ToggleButtonGroup
      color="primary"
      value={color}
      exclusive
      onChange={onChange}
      aria-label="Color"
    >
      <ToggleButton value="red" sx={{ color: "white" }}>Red</ToggleButton>
      <ToggleButton value="green" sx={{ color: "white" }}>Green</ToggleButton>
      <ToggleButton value="blue" sx={{ color: "white" }}>Blue</ToggleButton>
    </ToggleButtonGroup>
  )
}

function EditArea() {
  const [color, setColor] = React.useState('');

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newColor: string,
  ) => {
    setColor(newColor);
  }

  return (
    <div>
      <MyGrid color={color} />
      <Picker color={color} onChange={handleChange} />
    </div>
  )
}

function PageObject() {
  return (
    <div>
      <EditArea />
    </div>
  )
}

const Item = styled(Paper)<{ value: string }>(({ theme, value }) => ({
  ...(value && {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })
}));

export default function Home() {
  return (
    <PageObject />
  )
}
