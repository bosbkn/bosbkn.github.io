import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Slide } from "@mui/material";
import { Idea, IdeaProps } from "./Idea";
import "../App.css";

const ideas: IdeaProps[] = [
  {
    name: "Bubble Tea",
    description:
      "I feel like we both really like drinks. I remember we went to DAVIDsTEA in Boston when we were first getting to know each other. If not the bubble tea, maybe just a tea? You won't have to steal tea bags from WeWork anymore!",
    image: "bubble_tea.jpg",
    link: "https://www.davidstea.com/us_en/how-to-any-tea-anywhere/how-to-make-bubble-tea/",
  },
  {
    name: "Plants",
    description:
      "A plant for your new apartment! It brightens up the room and might be a great first addition to your new Sacramento home. I have a money tree, and it's pretty easy to take care of. We can be matching!",
    image: "plants.jpg",
    link: "https://www.thesill.com/products/money-tree?variant=40829143810153",
  },
  {
    name: "LoungeBuddy",
    description:
      "Traveling is always so exhausting and you travel so much! Here's a lounge pass for your next trip.",
    image: "lounge_buddy.jpeg",
    link: "https://www.loungebuddy.com/HKG/plaza-premium-lounge-gate-35-terminal-1-yukt20iH1W ",
  },
  {
    name: "Viki",
    description:
      "There's not much more you love than your sister, Vicki, but maybe K-Drama's one of them. Here's a way to watch it wherever you end up.",
    image: "viki.jpg",
    link: "https://www.viki.com",
  },
  {
    name: "Bokksu",
    description: "Snacks? Who doesn't snacks?",
    image: "bokksu.jpeg",
    link: "https://www.bokksu.com",
  },
  {
    name: "Journal",
    description:
      "This is such a pretty journal! I know journaling is importnat to you, so if you ever need more, here's one I thought you might like!",
    image: "journal.png",
    link: "https://www.papier.com/us/constellation-32118",
  },
  {
    name: "Stitch Fix",
    description:
      "I know you were considering it and maybe this is a good chance to try it out!",
    image: "stitchfix.jpg",
    link: "https://www.stitchfix.com/invite/b4tnbvz2v8",
  },
  {
    name: "HelloFresh",
    description:
      "When you first move, you probably will be busy and tired. Here's a way to get some food without having to think about it!",
    image: "hello_fresh.jpeg",
    link: "https://www.hellofresh.com/pages/raf_lp11?c=FIH-3JU8BI2IAQ06&utm_campaign=referralinvite&utm_medium=clipboard&utm_source=freebies&utm_invitername=Kentaro&utm_term=web&discount_comm_id=992270dc-a684-4b10-bd34-da8bb5f811b2",
  },
  {
    name: "Something Else",
    description:
      "It's your birthday! You can do whatever you want! Dogs? Pigs? Flight to NYC?",
    image: "pig.jpg",
    link: "https://www.google.com/travel/flights/search?tfs=CBwQAhopEgoyMDI0LTA2LTA1agwIAxIIL20vMGZ0dmdyDQgDEgkvbS8wMl8yODYaKRIKMjAyNC0wNi0xMmoNCAMSCS9tLzAyXzI4NnIMCAMSCC9tLzBmdHZnQAFIAXABggELCP___________wGYAQE",
  },
];

export const Ideas = () => {
  const containerRef = React.useRef(null);
  const [state, setState] = React.useState({
    activeStep: 1,
    isForwards: true,
  });

  const maxSteps = ideas.length;

  const handleNext = () => {
    setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
      isForwards: true,
    }));
  };

  const handleBack = () => {
    setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
      isForwards: false,
    }));
  };

  return (
    <div ref={containerRef} className="carousel">
      {state.activeStep > 1 ? <ArrowBackIosIcon onClick={handleBack} /> : null}

      <div className="slides">
        {ideas.map((props, index) => {
          return (
            <Slide
              key={index + 1}
              container={containerRef.current}
              direction={leftOrRight(
                state.activeStep,
                index + 1,
                state.isForwards
              )}
              in={state.activeStep === index + 1}
              mountOnEnter
              unmountOnExit
            >
              <Idea {...props} />
            </Slide>
          );
        })}
      </div>
      {state.activeStep < maxSteps ? (
        <ArrowForwardIosIcon onClick={handleNext} />
      ) : null}
    </div>
  );
};

const leftOrRight = (
  step: number,
  activeStep: number,
  isForwards: boolean
): "left" | "right" => {
  if (isForwards && activeStep === step) {
    return "left";
  } else if (isForwards && activeStep !== step) {
    return "right";
  } else if (!isForwards && activeStep === step) {
    return "right";
  } else {
    return "left";
  }
};
