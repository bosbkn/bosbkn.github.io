import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "../App.css";

interface LetterProps {
  toggleIsShowting: () => void;
}

export const Letter = React.forwardRef<HTMLDivElement, LetterProps>(
  ({ toggleIsShowting }, ref) => {
    return (
      <div ref={ref} className="letter page">
        <h1>Happy Birthday Vivian!</h1>
        <p>
          I hope you are having a wonderful birthday with your sister and
          congratulations on your new job!! A part of me is hoping you end up in
          a city near me but a part of me wants an excuse to visit Hawaii!
          Either way, I hope you end up in a city you'll love!
        </p>
        <p>
          Last few months, I've been wondering what a good gift would be. I
          thought maybe I could ship something to SF, but I was worried you
          wouldn't be there. And I didn't want to get something that you would
          have to carry to Idaho (I mean Seattle).
        </p>
        <p>
          I know gift cards are lame so I hand picked a few things that I
          thought you would like (like a tailored catalog?). Hope we can spend a
          birthday together in the next few years, so I can give you something
          in person!
        </p>

        <ArrowCircleDownIcon onClick={toggleIsShowting} fontSize="large" />
      </div>
    );
  }
);
