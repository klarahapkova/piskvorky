"use strict";

document.querySelector(".ctverce").addEventListener("click", (event) => {
  if (jePolePrazdne(event.target)) {
    zobrazIkonu(kdoJeNaTahu(), event.target);
    zmenHrace();
  } else {
    console.log("Zobraz symbol v poli.");
  }
});

const jePolePrazdne = (pole) => {
  if (
    pole.classList.contains("tlacitko--krizek") ||
    pole.classList.contains("tlacitko--kolecko")
  ) {
    return false;
  } else {
    return true;
  }
};

const kdoJeNaTahu = () => {
  return document.querySelector(".kolecko").attributes.alt.value;
};

const zobrazIkonu = (ikona, pole) => {
  pole.classList.add(`tlacitko--${ikona}`);
};

const zmenHrace = () => {
  console.log(kdoJeNaTahu());
  if (kdoJeNaTahu() === "kolecko") {
    document.querySelector(".kolecko").attributes.alt.value = "krizek";
  } else {
    document.querySelector(".kolecko").attributes.alt.value = "kolecko";
  }
};
