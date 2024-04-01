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
    {"Plus d'Infos..."}
  </Button>
);

export default LeanMoreButton;
