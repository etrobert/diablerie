"use client";

import { Button } from "./ui/button";

const LeanMoreButton = () => (
  <Button
    variant="link"
    onClick={() =>
      document
        .getElementById("meet-the-team")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Learn More...
  </Button>
);

export default LeanMoreButton;
