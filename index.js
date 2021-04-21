"use strict";

document.querySelector(".ctverce").addEventListener("click", (event) => {
  if (jePolePrazdne(event.target)) {
    zobrazIkonu(kdoJeNaTahu(), event.target);
    kdoVyhral();
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
  if (kdoJeNaTahu() === "kolecko") {
    document.querySelector(".kolecko").attributes.alt.value = "krizek";
    document.querySelector(".kolecko").attributes.src.value = "img/cross.svg";
  } else {
    document.querySelector(".kolecko").attributes.alt.value = "kolecko";
    document.querySelector(".kolecko").attributes.src.value = "img/circle.svg";
  }
};

const kdoVyhral = () => {
  let aktualniStav = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  let pocitadlo = 0;
  document.querySelectorAll(".tlacitko").forEach((tlacitkoElm) => {
    let souradniceX = Math.floor(pocitadlo / 10);
    let souradniceY = pocitadlo % 10;
    aktualniStav[souradniceX][souradniceY] = zjistiSymbol(tlacitkoElm);
    //přičteme 1, protože jdeme na další button
    pocitadlo = pocitadlo + 1;
    //můžeme napsat i jako pocitadlo ++
  });
  //console.log("Teď zjistíme, jestli někdo vyhrál.");
  const prvniRadek = aktualniStav[0];
  console.log(prvniRadek);

  for (let j = 0; j < 10; j += 1)
  for (let i = 0; i < 6; i += 1) {
    if (
      aktualniStav[j][i] +
        aktualniStav[j][i + 1] +
        aktualniStav[j][i + 2] +
        aktualniStav[j][i + 3] +
        aktualniStav[j][i + 4] ===
        "ooooo" ||
      aktualniStav[j][i] +
        aktualniStav[j][i + 1] +
        aktualniStav[j][i + 2] +
        aktualniStav[j][i + 3] +
        aktualniStav[j][i + 4] ===
        "xxxxx"
    ) {
      alert("Vyhrál jsi, kámo!");
    }
  }
};

const zjistiSymbol = (tlacitkoElm) => {
  //chceme zjistit, jaký je symbol v elementu tlačítko
  if (tlacitkoElm.classList.contains("tlacitko--kolecko")) {
    return "o";
  } else if (tlacitkoElm.classList.contains("tlacitko--krizek")) {
    return "x";
  } else {
    return "";
  }
};
