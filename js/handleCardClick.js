import { setBG, clearBG, flip, cover, isFlipped } from "./util.js";

const TIMEOUT = 1000;
let clickable = true;
let cards = [];

function handleCardClick({ target: curr }) {
  if (!clickable || isFlipped(curr) || cards.length >= 2) return;

  setBG(curr);

  if (cards.length < 2) {
    cards.push(curr);
    flip(curr);
  }

  if (cards.length === 2) {
    clickable = false;
    const [c1, c2] = cards;

    if (c1.className === c2.className) {
      cards.forEach((c) => c.removeEventListener("click", handleCardClick));
      reset();
    } else {
      setTimeout(() => {
        cards.forEach((c) => clearBG(c) || cover(c));
        reset();
      }, TIMEOUT);
    }
  } else if (cards.length > 2) {
  }

  function reset() {
    cards = [];
    clickable = true;
  }
}
export default handleCardClick;
