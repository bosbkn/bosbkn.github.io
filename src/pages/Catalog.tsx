import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Idea } from "../components/Idea";
import "../App.css";

interface CatalogProps {
  toggleIsShowting: () => void;
}

export const Catalog = React.forwardRef<HTMLDivElement, CatalogProps>(
  ({ toggleIsShowting }, ref) => {
    return (
      <div ref={ref} className="catalog page">
        <FontAwesomeIcon
          onClick={toggleIsShowting}
          icon={icon({
            name: "circle-chevron-up",
            family: "classic",
            style: "solid",
          })}
        />

        <Idea name="Idea 1" description="This is the first idea" />
      </div>
    );
  }
);
