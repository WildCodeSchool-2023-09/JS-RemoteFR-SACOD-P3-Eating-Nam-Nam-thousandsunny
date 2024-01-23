import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Nom, photo et description",
  "Ingrédients et matériel",
  " Instructions",
  "Confirmation",
];

export default function CreateRecipe() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const [ingredient, setIngredient] = useState([]);
  const [material, setMaterial] = useState([]);
  console.info(ingredient);
  console.info(material);
  const getData = () => {
    const endpoints = [
      "http://localhost:3310/api/ingredient",
      "http://localhost:3310/api/material",
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: ing }, { data: mat }]) => {
        setIngredient(ing);
        setMaterial(mat);
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box className="body-content" sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep > 3 ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Recette créée avec succès ! Elle sera prochainement validé par nos
            modérateurs.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}> Un doute ? Recommencez </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              RETOUR
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleNext}>GO NAM NAM !</Button>
            ) : (
              <Button onClick={handleNext}>SUIVANT</Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
