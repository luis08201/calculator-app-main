let body = document.querySelector("body");
let radio = document.querySelectorAll("input[name=toggle-state]");
let screen = document.getElementById("calculadora__display");
let panel = document.querySelector(".calculadora__panel");
let button = document.querySelectorAll("button");
let reset = document.querySelector(".panel__button--reset");
let del = document.querySelector(".panel__button--del");
let equal = document.querySelector(".panel__button--equal");
let texto1 = document.querySelector(".calculadora__header--heading");
let texto2 = document.querySelector(".calculadora__mainswitch--paragraph");
let texto3 = document.querySelectorAll(
  ".calculadora__switch--level--paragraph"
);
let banner = document.querySelector(".calculadora__switch--buttons");
let check1 = document.querySelector(".check-1");
let check2 = document.querySelector(".check-2");
let check3 = document.querySelector(".check-3");
// theme section

radio.forEach((radioBtn) => {
  radioBtn.addEventListener("click", () => {
    if (radioBtn.value === "first") {
      body.style.backgroundColor = "hsl(222, 26%, 31%)";
      screen.style.backgroundColor = "#252d44";
      screen.style.color = "#fff";
      panel.style.backgroundColor = "#252d44";
      banner.style.backgroundColor = "#182034";
      button.forEach((btn) => {
        btn.style.backgroundColor = "#eae3db";
        btn.style.boxShadow = "0 8px 0 #B2A499";
        btn.style.color = "#181f32";
      });
      reset.style.backgroundColor = "#647299";
      reset.style.color = "#fff";
      reset.style.boxShadow = "0 8px 0 #414e71";
      del.style.backgroundColor = "#647299";
      del.style.color = "#fff";
      del.style.boxShadow = "0 8px 0  #414e71";
      equal.style.backgroundColor = "#d43e29";
      equal.style.color = "#fff";
      equal.style.boxShadow = "0 8px 0 #932316";
      texto1.style.color = "#fff";
      texto2.style.color = "#fff";
      texto3.forEach((txt) => {
        txt.style.color = "#fff";
      });
      check1.style.backgroundColor = "hsl(6, 63%, 50%)";
    } else if (radioBtn.value === "second") {
      body.style.backgroundColor = "#E6E6E6";
      screen.style.backgroundColor = "#EEEEEE";
      screen.style.color = "#000";
      panel.style.backgroundColor = "#D3CDCD";
      banner.style.backgroundColor = "#D3CDCD";
      button.forEach((btn) => {
        btn.style.backgroundColor = "hsl(48, 9%, 89%)";
        btn.style.color = "#35352b";
        btn.style.boxShadow = "0 8px 0 #B2A499";
      });
      reset.style.boxShadow = "0 8px 0 #327479";
      reset.style.backgroundColor = "#388187";
      reset.style.color = "#fff";
      del.style.backgroundColor = "#388187";
      del.style.color = "#fff";
      del.style.boxShadow = "0 8px 0 #327479";
      equal.style.backgroundColor = "#c85401";
      equal.style.color = "#fff";
      equal.style.boxShadow = "0 8px 0 #B44B00";
      texto1.style.color = "#000";
      texto2.style.color = "#000";
      texto3.forEach((txt) => {
        txt.style.color = "#000";
      });
      check2.style.backgroundColor = "hsl(6, 63%, 50%)";
    } else if (radioBtn.value === "third") {
      body.style.backgroundColor = "#17062a";
      screen.style.backgroundColor = "#1e0836";
      screen.style.color = "#f6da44";
      banner.style.backgroundColor = "#1e0934";
      panel.style.backgroundColor = "#1e0934";
      button.forEach((btn) => {
          btn.style.backgroundColor = "#331d4d";
          btn.style.boxShadow = "0 8px 0 #53087d";
          btn.style.color = "#f6da44";
      });
      reset.style.backgroundColor = "#53087d";
      reset.style.color = "#fff";
      reset.style.boxShadow = "0 8px 0 #4A0770";
      del.style.backgroundColor = "#53087d";
      del.style.color = "#fff";
      del.style.boxShadow = "0 8px 0 #4A0770";
      equal.style.backgroundColor = "#00dfcf";
      equal.style.color = "#000";
      equal.style.boxShadow = "0 8px 0 #00C8BA";
      texto1.style.color = "#f6da44";
      texto2.style.color = "#f6da44";
      texto3.forEach((txt) => {
        txt.style.color = "#f6da44";
      });
      check3.style.backgroundColor = "#00dfcf";
    }
  });
});

radio.forEach((rb) => {
  rb.addEventListener("");
});

function mouseDown() {
  document.getElementsByClassName(".panel__button--1").style.backgroundColor =
    "red";
}
