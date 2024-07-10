// INIT ********************************************************************************
// *************************************************************************************

const arrayFarmPlots = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
];
const arrayOlivar = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayDatePalmGrove = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayFigOrchard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayPomOrchard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayVineyard = [0, 0, 0, 0, 0, 0, 0, 0,];

const player = {
    seesForeword: true,
    seesSystemMessage: false,
    seesGameEvent: false,
    seesStock: false,
    seesReport: false,
    seesFarmers: false,
    seesOlives: false,
    seesForest: false,
    seesMountain: false,

    canTill: false,
    canPlant: false,
    canWater: false,
    canHarvest: false,
    canBuyLand: false,
    canBuyForest: false,
    canBuyMountain: false,
    canBarter: false,
    canHire: false,
    canAudit: false,
    canDelegate: false,
    canFound: false,
    canBuild: false,
    canSell: false,
    canLog: false,
    canSaw: false,
    canMine: false,
    canSmelt: false,
};

const divOverlaySystemMessage = document.getElementById('divOverlaySystemMessage');
const divSystemMessageCorpus = document.getElementById('divSystemMessageCorpus');
const divOverlayForeword = document.getElementById('divOverlayForeword');
const divForewordCorpus = document.getElementById('divForewordCorpus');
const divOverlayGameEvent = document.getElementById('divOverlayGameEvent');
const divGameEventCorpus = document.getElementById('divGameEventCorpus');
const divCalendar = document.getElementById('divCalendar');
const divFarm = document.getElementById('divFarm');
const divBushelCount = document.getElementById('divBushelCount');
const divViewForest = document.getElementById('divViewForest');
const divForest = document.getElementById('divForest');
const divViewMountain = document.getElementById('divViewMountain');
const divVillage = document.getElementById('divVillage');
const divVillageStatistics = document.getElementById('divVillageStatistics');

const buttonSystemMessageDismiss = document.getElementById('buttonSystemMessageDismiss');
const buttonForewordDismiss = document.getElementById('buttonForewordDismiss');
const buttonForewordEnglish = document.getElementById('buttonForewordEnglish');
const buttonForewordSpanish = document.getElementById('buttonForewordSpanish');
const buttonGameEventDismiss = document.getElementById('buttonGameEventDismiss');
const buttonTill = document.getElementById('buttonTill');
const buttonPlant = document.getElementById('buttonPlant');
const buttonWater = document.getElementById('buttonWater');
const buttonHarvest = document.getElementById('buttonHarvest');
const buttonBuyLand = document.getElementById('buttonBuyLand');
const buttonBuyForest = document.getElementById('buttonBuyForest');
const buttonBuyMountain = document.getElementById('buttonBuyMountain');
const buttonHire = document.getElementById('buttonHire');
const buttonAudit = document.getElementById('buttonAudit');
const buttonPriority = document.getElementById('buttonPriority');
const buttonBarterOlive = document.getElementById('buttonBarterOlive');
const buttonBarterDate = document.getElementById('buttonBarterDate');
const buttonBarterFig = document.getElementById('buttonBarterFig');
const buttonBarterPom = document.getElementById('buttonBarterPom');
const buttonBarterGrape = document.getElementById('buttonBarterGrape');
const buttonForest = document.getElementById('buttonForest');
const buttonSellGrain = document.getElementById('buttonSellGrain');
const buttonFound = document.getElementById('buttonFound');
const buttonBuild = document.getElementById('buttonBuild');
const buttonWin = document.getElementById('buttonWin');
const buttonEnglish = document.getElementById('buttonEnglish');
const buttonSpanish = document.getElementById('buttonSpanish');
const buttonQ = document.getElementById('buttonQ');
const buttonI = document.getElementById('buttonI');
const buttonCC0 = document.getElementById('buttonCC0');

const spanForestReport = document.getElementById('spanForestReport');
const spanFarmReport = document.getElementById('spanFarmReport');
const spanHandsCount = document.getElementById('spanHandsCount');
const spanVillageName = document.getElementById('spanVillageName');

const formatterStandard = new Intl.NumberFormat('en-US');

const gameSpeedUltra = 1;    // 1 second = 1000 turns
const gameSpeedHigh = 10;   // 1 second = 100 turns
const gameSpeedFast = 100;  // 1 second = 10 turns
const gameSpeedStandard = 1000; // 1 second = 1 turn
let gameSpeed = gameSpeedStandard;
let currentGlassIcon = '';

let story = true;
let god = true;
let pause = false;

let namePlayer = ['Mud',];
const nameVillage = 'Terra Australis'; // HBD, Grant! 🎂 (Fun fact: during testing this value was ‘Buttsville’)

let gameTurn = 1;
const currentYear = 3560; // 200 B.C. according to https://sacred-texts.com/time/cal/jdate.htm ✡️ (lol jdate)
let year = 1;
let week = 1;

const bushelCount = [10, 0, 0, 0, 0, 0, 0,]; // 0.wheat 🌾, 1.barley 🌾, 2.olive 🫒, 3.date, 4.fig, 5.pomegranate, 6.grape 🍇
const seededCount = [0, 0,];
const farmedCount = [0, 0, 0, 0, 0, 0, 0,];
const harvestedCount = [0, 0, 0, 0, 0, 0, 0,];
const spentCount = [0, 0, 0, 0, 0, 0, 0,];
const soldCount = [0, 0, 0, 0, 0, 0, 0,];
const barterMaxBulkCount = 1000;
const barterExchangeRate = [0, 0, 10, 14, 18, 24, 32,];
let handsAvailable = 2;
const handsMax = 36;
let priority = 'Reap';
let handsHired = 0;
let handsEaten = 0;
let plantCost = 1;
let yieldMin = 4;
let yieldMax = 12;
let olivesMin = 12;
let olivesMax = 18;
let datesMin = 24;
let datesMax = 33;
let figsMin = 32;
let figsMax = 42;
let pomegranateMin = 28;
let pomegranateMax = 36;
let grapesMin = 40;
let grapesMax = 54;
const farmSize = [1, 1,];
let farmStage = 0;
const olivePlantDate = [0, 0,];

let logsCount = 0;
let logsMin = 10;
let logsMax = 15;
let loggersHired = 4;
let loggersEaten = 0;
let boardsCount = 0;
let boardsPerLog = 4;
let logsSawnPerWeek = 10;
let sawyersHired = 4;
let sawyersEaten = 0;
const forestProducedCount = [0, 0,];
const forestSpentCount = [0, 0,];

let stoneCount = 0;
let stoneMin = 40;
let stoneMax = 44;
let masonsHired = 10;
let masonsEaten = 0;
let oreCount = 0;
let mineTimer = 0;
let minersHired = 5;
let minersEaten = 0;
let copperCount = 0;
let smeltersHired = 5;
let smeltersEaten = 0;
const mountainProducedCount = [0, 0, 0,];
const mountainSpentCount = [0, 0, 0,];

const starvingBuffer = 10;
const starving = [false, false, false, false, false, false,]; // hands, loggers, sawyers, masons, miners, smelters

let villageStage = 0;
const estDate = [0, 0,];

let residentsCount = 0;
let residentsMax = 0;

let rentPrice = 10;
let asCount = 0;

let horsesSpawn = false;
let horseClock = 0;
const horsesIncAmount = 1;
let horsesCount = 0;

let beadsSpawn = false;
const beadsIncAmount = 69; // ☯️ can’t take life *too* seriously, chums ;)
let beadsCount = 0;

let trophiesSpawn = false;
let trophiesCount = 0;

let scrollsSpawn = false;
const scrollsIncAmount = 1;
let scrollsCount = 0;

let ratsSpawn = false;
let ratsOutbreak = false;
let ratsCount = 1;
let ratsHighScore = 1;

let cityWalls = false;

const bushelBulkCount = 1000;
let actualBushelPrice = 5000;
let currentBushelPrice = actualBushelPrice;

const priceStage1 = 50;
const priceStage2 = 100;
const priceStage3 = 200;
const priceAccountant = 150;
const priceStage4 = 650;
const priceStage5 = 300;
const priceStage6 = 1125;
const priceStage7 = 0;
const priceStage8 = 0;
const priceStage9 = 0;
const priceStage10 = 0;
const priceStage11 = 1500;
const priceForest = 800;
const priceLoggingCamp = 400;
const priceSawmill = 1200;
const priceStage12 = [400, 12000,];
const priceStage13 = 2800;
const priceStage14 = [600, 24000,];
const priceQuarry = 1800;
const priceStage15 = [8000, 80000,];
const priceStage16 = [100, 100,];
const priceStage17 = [4200, 48000,];
const priceStage18 = [6400, 3200,];

const priceVillage = 32000;
const priceBuild0 = 256;
const priceBuild1 = 420; // 🚬¯\_(ツ)_/¯🍩
const priceBuild2 = 1640;
const priceBuild3 = 3600;
const priceBuild4 = 12000;
const priceBuild5 = [24000, 2000,];
const priceBuild6 = 24000;
const priceBuild7 = 64000;
const priceBuild8 = [48000, 1500,];
const priceBuild9 = 88000;
const priceBuild10 = [128000, 3000,];
const priceBuild11 = [256000, 4000, 4,];
const priceBuild12 = [2000000, 12,];
const priceBuild13 = 4000000;
const priceBuild14 = [64000, 810,];
const priceBuild15 = 1200000;
const priceBuild16 = 2400000;
const priceBuild17 = [4200000, 9000, 77,]; // 4️⃣2️⃣ 🟰 Life, the Universe and Everything

const legalTarget = 'https://creativecommons.org/publicdomain/zero/1.0/';
const winTarget = 'https://youtu.be/bzsYlG6TqFw';

let winButtonFrame = 0;

let currentLanguage = '';

let saṃsāra = -0;



// End of Document