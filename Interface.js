const firstCard = document.querySelector(".first-card");
const fTitle = firstCard.querySelector(".title");
const fDescription = firstCard.querySelector(".description");
const fRarity = firstCard.querySelector(".rarity");
const flvl = firstCard.querySelector(".lvl-card");
const fcontent = firstCard.querySelector(".content");
const fcontentImage = fcontent.querySelector(".content-image");

const secondCard = document.querySelector(".second-card");
const sTitle = secondCard.querySelector(".title");
const sDescription = secondCard.querySelector(".description");
const sRarity = secondCard.querySelector(".rarity");
const slvl = secondCard.querySelector(".lvl-card");
const scontent = secondCard.querySelector(".content");
const scontentImage = scontent.querySelector(".content-image");

const thirdCard = document.querySelector(".third-card");
const tTitle = thirdCard.querySelector(".title");
const tDescription = thirdCard.querySelector(".description");
const tRarity = thirdCard.querySelector(".rarity");
const tlvl = thirdCard.querySelector(".lvl-card");
const tcontent = thirdCard.querySelector(".content");
const tcontentImage = tcontent.querySelector(".content-image");

function changeCardContent(title, description, rarity, lvl, imagesrc, id) {
  title.textContent = weapons[id].title;
  title.style.color = weapons[id].color;
  description.textContent = weapons[id].description;
  rarity.textContent = weapons[id].rarity;
  rarity.style.color = weapons[id].rarityColor;
  lvl.textContent = `lvl ${weapons[id].lvl}`;
  imagesrc.src = weapons[id].image;
}

changeCardContent(fTitle, fDescription, fRarity, flvl, fcontentImage, 3);
changeCardContent(sTitle, sDescription, sRarity, slvl, scontentImage, 0);
changeCardContent(tTitle, tDescription, tRarity, tlvl, tcontentImage, 1);

const upgradeCards = document.querySelector(".upgrade-cards");
upgradeCards.style.display = "none";
