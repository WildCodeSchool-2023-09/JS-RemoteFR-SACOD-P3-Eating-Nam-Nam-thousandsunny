import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

import "./style/CreateRecipe.scss";

const steps = [
  "Nom et description",
  "Ingrédients",
  "Instructions",
  "Confirmation",
];

export default function CreateRecipe() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [allIngredients, setAllIngredients] = React.useState([]);
  const [allTags, setAllTags] = React.useState([]);

  useEffect(() => {
    const endpoints = [
      "http://localhost:3310/api/ingredients",
      "http://localhost:3310/api/tags",
    ];
    Promise.all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          withCredentials: true,
        })
      )
    )
      .then(([{ data: ingredient }, { data: tag }]) => {
        setAllIngredients(ingredient);
        setAllTags(tag);
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="body-content create-page">
      <Box>
        <div className="stepper">
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        {activeStep > 3 && (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Recette créée avec succès ! Elle sera prochainement validée par
              nos modérateurs.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>
                {" "}
                Je veux en créer une autre !{" "}
              </Button>
            </Box>
          </>
        )}
      </Box>
      <div className="steps">
        {activeStep === 0 && <Step1 tag={allTags} />}
        {activeStep === 1 && <Step2 ingredient={allIngredients} />}
        {activeStep === 2 && <Step3 />}
        {activeStep === 3 && <Step4 />}
      </div>
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
          ""
        ) : (
          <Button onClick={handleNext}>SUIVANT</Button>
        )}
      </Box>
    </div>
  );
}
