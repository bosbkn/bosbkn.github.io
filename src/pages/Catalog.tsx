import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "../App.css";
import { Ideas } from "../components/Carousel";

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

        <Ideas />
      </div>
    );
  }
);
