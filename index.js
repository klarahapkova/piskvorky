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
  console.log(aktualniStav);

  if (
    aktualniStav[0][0] +
      aktualniStav[0][1] +
      aktualniStav[0][2] +
      aktualniStav[0][3] +
      aktualniStav[0][4] ===
      "ooooo" ||
    aktualniStav[0][0] +
      aktualniStav[0][1] +
      aktualniStav[0][2] +
      aktualniStav[0][3] +
      aktualniStav[0][4] ===
      "xxxxx"
  ) {
    alert("Vyhrál jsi, kámo!");
  } else if (
    aktualniStav[0][0] +
      aktualniStav[1][0] +
      aktualniStav[2][0] +
      aktualniStav[3][0] +
      aktualniStav[4][0] ===
      "ooooo" ||
    aktualniStav[0][0] +
      aktualniStav[1][0] +
      aktualniStav[2][0] +
      aktualniStav[3][0] +
      aktualniStav[4][0] ===
      "xxxxx"
  ) {
    alert("Vyhrál jsi, kámo!");
  } else {
    console.log("Jedeme dál");
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

let pocetKrizku = 0;
let pocetKolecek = 0;

const resetPromennych = () => {
  pocetKrizku = 0;
  pocetKolecek = 0;
};

