import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Weekly Menu</h1>
      <FeatureButton as="a" href="https://forms.gle/1TwzpYRtwsU555Ac9">
        Access here
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
