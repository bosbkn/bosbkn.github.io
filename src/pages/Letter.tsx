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
        <div>
          <h1>Happy Birthday Vivian! 🎉</h1>
          <p>
            I hope you are having a wonderful birthday with your sister and
            congratulations on your new job!! I'm so excited to see you start a
            new job! A part of me is hoping you end up in a city near me but a
            part of me wants an excuse to visit Hawaii! Either way, I hope you
            end up in a city you'll love!
          </p>
          <p>
            The last few months, I've been wondering what a good gift would be.
            I thought maybe I could ask your sister for her address and ship
            something to SF, but I was worried you wouldn't be there. And I
            didn't want to get something that you would have to carry to Idaho
            (I mean Seattle).
          </p>
          <p>
            I know gift cards are lame, but given the constraints, I thought a
            gift card with a hand-picked catalog would be meeting in the middle.
            It's a just a few ideas what you could spend it on, but it's
            completely up to you what you do with the it! If you hit the down
            arrow you'll see the potential ideas.
          </p>
          <p>
            Hope we can spend a birthday together soon, so I can give you
            something in person! Hope to see you around!
          </p>
          <p>- Kentaro</p>
          <ArrowCircleDownIcon onClick={toggleIsShowting} fontSize="large" />
        </div>
      </div>
    );
  }
);
