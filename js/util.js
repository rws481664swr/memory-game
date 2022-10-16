//set bg color to className
export const setBG = (div) => (div.style.backgroundColor = div.classList[0]);

//unset BG color
export const clearBG = (div) => (div.style.backgroundColor = "");

//add flipped class to card
export const flip = (div) => div.classList.add("flipped");

//remove flipped class
export const cover = (div) => div.classList.remove("flipped");

//predicate to determine if flipped class is present
export const isFlipped = (div) => div.classList.contains("flipped");
