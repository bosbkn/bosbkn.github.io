import React from "react";
import { Idea } from "../components/Idea";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "../App.css";

interface CatalogProps {
  toggleIsShowting: () => void;
}

export const Catalog = React.forwardRef<HTMLDivElement, CatalogProps>(
  ({ toggleIsShowting }, ref) => {
    return (
      <div ref={ref} className="catalog page">
        <ArrowCircleUpIcon
          className="icon"
          onClick={toggleIsShowting}
          fontSize="large"
        />

        <Idea name="Idea 1" description="This is the first idea" />
      </div>
    );
  }
);
