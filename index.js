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
  return document.querySelector(".kolecko").attributes.alt.value; //tohle by teoreticky nemusela být funkc, ale jen konstanta; takhle je to alečitelnější
};

const zobrazIkonu = (ikona, pole) => {
  pole.classList.add(`tlacitko--${ikona}`); //add je funkce; kolecko je string, musí bejt v uvozovkách, undefined je, že to nic nevrací
};

const zmenHrace = () => {
  console.log(kdoJeNaTahu());
  if (kdoJeNaTahu() === "kolecko") {
    document.querySelector(".kolecko").attributes.alt.value = "krizek";
  } else {
    document.querySelector(".kolecko").attributes.alt.value = "kolecko";
  }
};
//   if (kdoJeNaTahu(".kolecko")) {
//   } else {
//   }
// };

//mohly bychom mít parametry, ale bez něj to bude lepší

//vyměnili jsme ("kolecko" za (`tlacitko--${ikona}`), aby se to mohlo podle potřeby měnit)

/* document.querySelector(".ctverce").addEventListener("click", (event) => {
    console.log(event.target.classList);
    console.log(jePolePrazdne(event.target));
    //event.target = dali jsme tam pak to pole,tady ale musíme volat to event.target
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
  }; */

/* "use strict";

document.querySelector(".ctverce").addEventListener("click", (event) => {
  console.log(jePolePrazdne(event.target)); //event.target = dali jsme tam pak to pole,tady ale musíme volat to event.target
  console.log(kdoJeNaTahu());
  console.log(zobrazIkonu("krizek", event.target));
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
  return document.querySelector(".kolecko").attributes.alt.value; //tohle by teoreticky nemusela být funkc, ale jen konstanta; takhle je to alečitelnější
};

const zobrazIkonu = (ikona, pole) => {
  pole.classList.add(`tlacitko--${ikona}`); //add je funkce; kolecko je string, musí bejt v uvozovkách, undefined je, že to nic nevrací
}; */

//addEventListener – anonymní funkce (event) – další funkce

// event.target – vrátí mi to do console, kam se kliklo;  i když listener byl na celej  čtverec, target ukáže, kde se kliklo
