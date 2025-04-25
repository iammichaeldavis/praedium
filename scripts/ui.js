// ۞ UI ********************************************************************************************
// *************************************************************************************************

const tileFencePrimH = [13 * 16, 12 * 16,];
const tileFencePrimV = [13 * 16, 13 * 16,];
const tileFenceH = [15 * 16, 13 * 16,];
const tileFenceV = [14 * 16, 13 * 16,];
const tileFenceNW = [16 * 16, 11 * 16,];
const tileFenceNE = [17 * 16, 11 * 16,];
const tileFenceV2W = [17 * 16, 12 * 16,];
const tileFenceV2E = [16 * 16, 12 * 16,];
const tileFenceSW = [16 * 16, 13 * 16,];
const tileFenceSE = [17 * 16, 13 * 16,];
const tileGateN = [18 * 16, 11 * 16,];
const tileGateM = [18 * 16, 12 * 16,];
const tileGateS = [18 * 16, 13 * 16,];

const tileHitchingPostH = [0, 8 * 16,];
const tileHitchingPostV = [16, 8 * 16,];
const tileWell = [32, 8 * 16,];
const tileSignpostE = [48, 8 * 16,];
const tileSignpostW = [64, 8 * 16,];
const tileSignpostS = [0, 272,];

const tileLawn = [0, 9 * 16,];
const tileTrees = [16, 9 * 16,];
const tileForest = [32, 9 * 16,];
const tileStump = [48, 9 * 16,];
const tileDeadTree = [64, 9 * 16,];
const tileLawnMuddy = [80, 8 * 16,];
const tileLawnLog = [96, 8 * 16,];
const tileLawnRocky1 = [112, 8 * 16,];
const tileLawnScrub1 = [80, 9 * 16,];
const tileLawnScrub2 = [96, 9 * 16,];
const tileLawnRocky2 = [112, 9 * 16,];

const tileShrubs1 = [0, 160,];
const tileShrubs2 = [16, 160,];
const tileShrubs3 = [32, 160,];
const tileShrubs4 = [48, 160,];
const tilePineTree = [64, 160,];
const tilePlinth = [5 * 16, 160,];
const tileRocks = [6 * 16, 160,];
const tileShrine = [176, 8 * 16,];
const tileGraves = [176 + 32, 8 * 16,];

const tileBigTreeNW = [8 * 16, 9 * 16,];
const tileBigTreeNE = [9 * 16, 9 * 16,];
const tileBigTreeNW2 = [8 * 16, 8 * 16,];
const tileBigTreeNE2 = [9 * 16, 8 * 16,];
const tileBigTreeSW = [8 * 16, 160,];
const tileBigTreeSE = [9 * 16, 160,];

const tileHut = [0, 7 * 16,];
const tileTinyWell = [0, 6 * 16,];
const tileCabin = [16, 7 * 16,];
const tileHouseBoardsTop = [48, 6 * 16,];
const tileHouseBoardsLeft = [32, 7 * 16,];
const tileHouseBoardsMiddle = [48, 7 * 16,];
const tileHouseBoardsRight = [64, 7 * 16,];
const tileBakeryNW = [80, 6 * 16,];
const tileBakeryNE = [96, 6 * 16,];
const tileBakerySW = [80, 7 * 16,];
const tileBakerySE = [96, 7 * 16,];
const tileOliveMillNW = [112, 6 * 16,];
const tileOliveMillNE = [128, 6 * 16,];
const tileOliveMillSW = [112, 7 * 16,];
const tileOliveMillSE = [128, 7 * 16,];
const tileHousePlasterTop = [48 + (8 * 16), 6 * 16,];
const tileHousePlasterLeft = [32 + (8 * 16), 7 * 16,];
const tileHousePlasterMiddle = [48 + (8 * 16), 7 * 16,];
const tileHousePlasterRight = [64 + (8 * 16), 7 * 16,];
const tileBrewery = [16, 6 * 16,];
const tileWinery = [32, 6 * 16,];
const tileKitchen = [64, 6 * 16,];
const tilePress = [192, 6 * 16,];
const tileGreenhouseN = [144, 6 * 16,];
const tileGreenhouseS = [144, 7 * 16,];
const tileHouseStoneNW = [48 + (11 * 16), 6 * 16,];
const tileHouseStoneN = [48 + (12 * 16), 6 * 16,];
const tileHouseStoneNE = [48 + (13 * 16), 6 * 16,];
const tileHouseStoneSW = [48 + (11 * 16), 7 * 16,];
const tileHouseStoneS = [48 + (12 * 16), 7 * 16,];
const tileHouseStoneSE = [48 + (13 * 16), 7 * 16,];
const tileOliveMillwRoad = [48 + (12 * 16), 8 * 16,];
const tileAtelierNW = [48 + (14 * 16), 6 * 16,];
const tileAtelierNE = [48 + (15 * 16), 6 * 16,];
const tileAtelierSW = [48 + (14 * 16), 7 * 16,];
const tileAtelierSE = [48 + (15 * 16), 7 * 16,];
const tileAtelierRoad1 = [48 + (22 * 16), 7 * 16,];
const tileAtelierRoad2 = [48 + (16 * 16), 6 * 16,];
const tileAtelierRoad3 = [48 + (17 * 16), 6 * 16,];
const tileAtelierRoad4 = [48 + (18 * 16), 6 * 16,];
const tileAtelierRoad5 = [48 + (22 * 16), 8 * 16,];
const tileAtelierRoad6 = [48 + (16 * 16), 7 * 16,];
const tileAtelierRoad7 = [48 + (17 * 16), 7 * 16,];
const tileAtelierRoad8 = [48 + (18 * 16), 7 * 16,];

const tilePathCross = [0, 176,];
const tilePathH2N = [16, 176,];
const tilePathH2S = [32, 176,];
const tilePathH = [48, 176,];
const tilePathHPeterE = [112, 160,];
const tilePathHPeterEclay = [176 + (6 * 16), 144 - 16,];
const tilePathN2E = [64, 176,];
const tilePathN2W = [80, 176,];
const tilePathN2WMountain = [96, 176,];
const tilePathS2E = [112, 176,];
const tilePathS2W = [128, 176,];
const tilePathV2E = [144, 176,];
const tilePathV2W = [160, 176,];
const tilePathV = [176, 176,];
const tilePathVPeterN = [176, 160,];
const tilePathVPeterS = [176, 144,];
const tilePathVPeterSclay = [176 + (5 * 16), 144 - 16,];

const tileRoughPathR = [12 * 16, 176,];
const tileRoughPathL = [13 * 16, 176,];
const tileRoughPathRroad = [160, 176 + 16,];
const tileRoughPathLroad = [176, 176 + 16,];
const tileRoughPathRriver = [336, 80,];
const tileRoughPathLriver = [352, 80,];
const tileRoughPathRbigTreeNE = [160, 9 * 16,];
const tileRoughPathRbigTreeSE = [160, 160,];
const tileRoughPathRpine = [160, 8 * 16,];

const tileCobblestoneW = [14 * 16, 176,];
const tileCobblestoneE = [15 * 16, 176,];
const tileCobblestoneEdgeW = [14 * 16, 12 * 16,];
const tileCobblestoneEdgeE = [15 * 16, 12 * 16,];

const tileBridgeNew = [12 * 16, 12 * 16,];
const tileBridgeNewH = [14 * 16, 8 * 16,];
const tileBridgePrim = [12 * 16, 13 * 16,];
const tileBridgePrimH = [12 * 16, 14 * 16,];

const tileRiverEndW = [0, 80,];
const tileRiverEndE = [16, 80,];
const tileRiverH2N = [32, 80,];
const tileRiverH2S = [48, 80,];
const tileRiverHForest = [64, 80,];
const tileRiverHMountain = [80, 80,];
const tileRiverH = [96, 80,];
const tileRiverN2EMountain = [112, 80,];
const tileRiverN2E = [128, 80,];
const tileRiverN2WMountain = [9 * 16, 80,];
const tileRiverN2WRoadR = [160, 80,];
const tileRiverN2WRoadL = [160, 96,];
const tileRiverN2W = [176, 80,];
const tileRiverS2EMountain = [12 * 16, 80,];
const tileRiverS2ERoadR = [13 * 16, 96,];
const tileRiverS2ERoadL = [13 * 16, 80,];
const tileRiverS2E = [14 * 16, 80,];
const tileRiverS2WMountain = [15 * 16, 80,];
const tileRiverS2W = [16 * 16, 80,];
const tileRiverV2E = [17 * 16, 80,];
const tileRiverV2WMountain = [18 * 16, 80,];
const tileRiverV2W = [19 * 16, 80,];
const tileRiverV = [320, 80,];

let tileWaterfall = [320, 14 * 16,];

const tileLogCampNW = [320, 160,];
let tileLogCampN = [304, 160,];
const tileLogCampNE = [22 * 16, 160,];
const tileLogCampW = [320, 176,];
const tileLogCampM = [336, 176,];
const tileLogCampE = [22 * 16, 176,];
const tileLogCampSW = [320, 12 * 16,];
const tileLogCampS = [336, 12 * 16,];
const tileLogCampSE = [22 * 16, 12 * 16,];

const tileStumps = [24 * 16, 11 * 16,];

const tileSawmillNW = [320, 8 * 16,];
let tileSawmillNE = [21 * 16, 8 * 16,];
const tileSawmillSW = [320, 9 * 16,];
let tileSawmillSE = [21 * 16, 9 * 16,];
const tileSawmillSEfar = [25 * 16, 9 * 16,];

const tileMountainFoothillsW = [21 * 16, 13 * 16,];
const tileMountainFoothillsWRoad = [22 * 16, 13 * 16,];
const tileMountainFoothillsM = [23 * 16, 13 * 16,];
const tileMountainFoothillsE = [24 * 16, 13 * 16,];
const tileMountainPeak = [25 * 16, 13 * 16,];
const tileMountain = [26 * 16, 13 * 16,];
const tileMineshaft = [320, 13 * 16,];
const tileMineshaftBoulders = [384, 14 * 16,];

const tileEarth = [29 * 16, 160,];
const tileEarth2 = [28 * 16, 176,];
const tileEarth3 = [30 * 16, 176,];
const tileEarth4 = [29 * 16, 192,];
const tileEarthNW = [23 * 16, 160,];
const tileEarthN = [24 * 16, 160,];
const tileEarthNE = [25 * 16, 160,];
const tileEarthW = [23 * 16, 176,];
const tileEarthE = [25 * 16, 176,];
const tileEarthSW = [23 * 16, 192,];
const tileEarthS = [24 * 16, 192,];
const tileEarthSE = [25 * 16, 192,];
const tileEarthSE2 = [28 * 16, 12 * 16,];

const tileFurnaceNW = [13 * 16, 9 * 16,];
const tileFurnaceNE = [14 * 16, 9 * 16,];
const tileFurnaceSW = [13 * 16, 10 * 16,];
let tileFurnaceSE = [14 * 16, 10 * 16,];
const tileBrazierDousedNW = [18 * 16, 8 * 16,];
const tileBrazierDousedNE = [19 * 16, 8 * 16,];
const tileBrazierDousedSW = [18 * 16, 9 * 16,];
const tileBrazierDousedSE = [19 * 16, 9 * 16,];
let tileBrazierLit = [18 * 16, 10 * 16,];

const tileQuarryW = [28 * 16, 14 * 16,];
const tileQuarryN = [29 * 16, 13 * 16,];
const tileQuarryE1 = [30 * 16, 14 * 16,];
const tileQuarryE2 = [29 * 16, 14 * 16,];
const tileQuarryE3 = [30 * 16, 13 * 16,];
const tileQuarryBuildings = [28 * 16, 13 * 16,];

const tileGrapeTrellisPostNE = [29 * 16, 64,];
const tileGrapeTrellisEdgeS = [26 * 16, 80,];
const tileGrapeTrellisEdgeE = [27 * 16, 80,];
const tileGrapeTrellisPostSW = [28 * 16, 80,];
const tileGrapeTrellisPostSE = [29 * 16, 80,];

const tileStoneFenceNW = [48 + (25 * 16), 7 * 16,];
const tileStoneFenceNE = [48 + (26 * 16), 7 * 16,];
const tileStoneFenceEndN = [48 + (27 * 16), 7 * 16,];
const tileStoneFenceEndW = [48 + (25 * 16), 8 * 16,];
const tileStoneFenceSE = [48 + (26 * 16), 8 * 16,];
const tileStoneFenceV = [48 + (27 * 16), 8 * 16,];
const tileStoneFenceH = [48 + (25 * 16), 9 * 16,];
const tileStoneFenceEndE = [48 + (26 * 16), 9 * 16,];
const tileStoneFenceEndS = [48 + (27 * 16), 9 * 16,];

const tileTallFenceNW = [288, 256,];
const tileTallFenceH = [304, 256,];
const tileTallFenceSE = [320, 256,];
const tileTallFenceV = [288 + 48, 256,];
const tileTallFenceSW = [288 + 64, 256,];
const tileTallFenceNE = [288 + 80, 256,];
const tileTallFenceEndE = [288 + 96, 256,];
const tileTallFenceEndS = [288 + 112, 256,];
const tileTallFenceWindowHLeft = [288, 272,];
const tileTallFenceWindowHRight = [304, 272,];
const tileTallFenceWindowVTop = [320, 272,];
const tileTallFenceWindowVBottom = [288 + 48, 272,];
const tileTallFenceGateVTop = [288 + 64, 272,];
const tileTallFenceGateVMiddle = [288 + 80, 272,];
const tileTallFenceGateVBottom = [288 + 96, 272,];

let tileGrowingOlive = [22 * 16, 96,];

const tileAutograph = [64 + (9 * 16), 7 * 16,];



function UpdateDisplay() {
    UpdateCalendar();
    UpdateText();
    UpdateVisibilities();
    RedrawCanvases();
}



function UpdateCalendar() {
    divYear.innerHTML = displayYear + '&nbsp;' + year;
    divWeek.innerHTML = displayWeek + '&nbsp;' + week;

    const pixelScale = window.getComputedStyle(divRuneSeason).getPropertyValue('--pixel-scale');

    const arraySeasonalGods = {
        venus: [-176, -16],
        ceres: [-192, -16],
        bacchus: [-208, -16],
        æolus: [-224, -16],
    };
    let chosenRune = arraySeasonalGods.venus;
    if (week > 39) { chosenRune = arraySeasonalGods.æolus; }
    else if (week > 26) { chosenRune = arraySeasonalGods.bacchus; }
    else if (week > 13) { chosenRune = arraySeasonalGods.ceres; }
    divRuneSeason.style.backgroundPosition = chosenRune[0] * pixelScale + 'px ' + chosenRune[1] * pixelScale + 'px';

    const arraySeasonStones = {
        alpha: [-272, -16],
        beta: [-288, -16],
        gamma: [-304, -16],
        delta: [-320, -16],
        epsilon: [-336, -16],
        zeta: [-352, -16],
        eta: [-368, -16],
        theta: [-384, -16],
        iota: [-400, -16],
        kappa: [-416, -16],
        lambda: [-432, -16],
        mu: [-448, -16],
        nu: [-464, -16],
    }
    let chosenStone = arraySeasonStones.mu;
    if (week % 13 == 0) { chosenStone = arraySeasonStones.nu; }
    else if (week % 13 == 1) { chosenStone = arraySeasonStones.alpha; }
    else if (week % 13 == 2) { chosenStone = arraySeasonStones.beta; }
    else if (week % 13 == 3) { chosenStone = arraySeasonStones.gamma; }
    else if (week % 13 == 4) { chosenStone = arraySeasonStones.delta; }
    else if (week % 13 == 5) { chosenStone = arraySeasonStones.epsilon; }
    else if (week % 13 == 6) { chosenStone = arraySeasonStones.zeta; }
    else if (week % 13 == 7) { chosenStone = arraySeasonStones.eta; }
    else if (week % 13 == 8) { chosenStone = arraySeasonStones.theta; }
    else if (week % 13 == 9) { chosenStone = arraySeasonStones.iota; }
    else if (week % 13 == 10) { chosenStone = arraySeasonStones.kappa; }
    else if (week % 13 == 11) { chosenStone = arraySeasonStones.lambda; }
    divStonesSeason.style.backgroundPosition = chosenStone[0] * pixelScale + 'px ' + chosenStone[1] * pixelScale + 'px';

    const arrayZodiacChinese = {
        rat: [0, -48],
        ox: [-32, -48],
        tiger: [-64, -48],
        rabbit: [-96, -48],
        dragon: [-128, -48],
        snake: [-160, -48],
        horse: [-192, -48],
        goat: [-224, -48],
        monkey: [-256, -48],
        rooster: [-288, -48],
        dog: [-320, -48],
        pig: [-352, -48],
    };
    const thisCalculatedYear = year + 1200 + yearAtStartProlepticGregorian; // +12 or +1200 is the same result, this just gets it above 12 to prevent errors in the first 11 years
    let chosenEmboss = arrayZodiacChinese.goat; // if % 12 == 11
    if (thisCalculatedYear % 12 == 0) { chosenEmboss = arrayZodiacChinese.monkey; }
    else if (thisCalculatedYear % 12 == 1) { chosenEmboss = arrayZodiacChinese.rooster; }
    else if (thisCalculatedYear % 12 == 2) { chosenEmboss = arrayZodiacChinese.dog; }
    else if (thisCalculatedYear % 12 == 3) { chosenEmboss = arrayZodiacChinese.pig; }
    else if (thisCalculatedYear % 12 == 4) { chosenEmboss = arrayZodiacChinese.rat; }
    else if (thisCalculatedYear % 12 == 5) { chosenEmboss = arrayZodiacChinese.ox; }
    else if (thisCalculatedYear % 12 == 6) { chosenEmboss = arrayZodiacChinese.tiger; }
    else if (thisCalculatedYear % 12 == 7) { chosenEmboss = arrayZodiacChinese.rabbit; }
    else if (thisCalculatedYear % 12 == 8) { chosenEmboss = arrayZodiacChinese.dragon; }
    else if (thisCalculatedYear % 12 == 9) { chosenEmboss = arrayZodiacChinese.snake; }
    else if (thisCalculatedYear % 12 == 10) { chosenEmboss = arrayZodiacChinese.horse; }
    divEmbossZodiacChinese.style.backgroundPosition = chosenEmboss[0] * pixelScale + 'px ' + chosenEmboss[1] * pixelScale + 'px';

    const arraySeasonalEmboss = {
        spring: [-384, -48],
        summer: [-416, -48],
        autumn: [-448, -48],
        winter: [-480, -48],
    };
    chosenEmboss = arraySeasonalEmboss.spring;
    if (week > 39) { chosenEmboss = arraySeasonalEmboss.winter; }
    else if (week > 26) { chosenEmboss = arraySeasonalEmboss.autumn; }
    else if (week > 13) { chosenEmboss = arraySeasonalEmboss.summer; }
    divEmbossSeason.style.backgroundPosition = chosenEmboss[0] * pixelScale + 'px ' + chosenEmboss[1] * pixelScale + 'px';

    const weekStones = {
        alpha: [-480, 0],
        beta: [-496, 0],
        gamma: [-480, -16],
        delta: [-496, -16],
    }
    chosenStone = weekStones.gamma;
    if (week % 4 == 0) { chosenStone = weekStones.delta; }
    else if (week % 4 == 1) { chosenStone = weekStones.alpha; }
    else if (week % 4 == 2) { chosenStone = weekStones.beta; }
    divStonesWeek.style.backgroundPosition = chosenStone[0] * pixelScale + 'px ' + chosenStone[1] * pixelScale + 'px';

    const arrayClassicalElements = {
        earth: [-400, 0],
        water: [-416, 0],
        air: [-432, 0],
        fire: [-448, 0],
        æther: [-464, 0],
    };
    const arrayZodiacSidereal = {
        jan: [0, -32],
        feb: [-16, -32],
        mar: [-32, -32],
        apr: [-48, -32],
        may: [-64, -32],
        jun: [-80, -32],
        jul: [-96, -32],
        aug: [-112, -32],
        sep: [-128, -32],
        oct: [-144, -32],
        nov: [-160, -32],
        int: [-176, -32],
        dec: [-192, -32],
    };
    let chosenElement = arrayClassicalElements.earth;
    chosenRune = arrayZodiacSidereal.jan;
    if (week > 48) {
        chosenElement = arrayClassicalElements.fire;
        chosenRune = arrayZodiacSidereal.dec;
    }
    else if (week > 44) {
        chosenElement = arrayClassicalElements.æther;
        chosenRune = arrayZodiacSidereal.int;
    }
    else if (week > 40) {
        chosenElement = arrayClassicalElements.water;
        chosenRune = arrayZodiacSidereal.nov;
    }
    else if (week > 36) {
        chosenElement = arrayClassicalElements.air;
        chosenRune = arrayZodiacSidereal.oct;
    }
    else if (week > 32) {
        chosenElement = arrayClassicalElements.earth;
        chosenRune = arrayZodiacSidereal.sep;
    }
    else if (week > 28) {
        chosenElement = arrayClassicalElements.fire;
        chosenRune = arrayZodiacSidereal.aug;
    }
    else if (week > 24) {
        chosenElement = arrayClassicalElements.water;
        chosenRune = arrayZodiacSidereal.jul;
    }
    else if (week > 20) {
        chosenElement = arrayClassicalElements.air;
        chosenRune = arrayZodiacSidereal.jun;
    }
    else if (week > 16) {
        chosenElement = arrayClassicalElements.earth;
        chosenRune = arrayZodiacSidereal.may;
    }
    else if (week > 12) {
        chosenElement = arrayClassicalElements.fire;
        chosenRune = arrayZodiacSidereal.apr;
    }
    else if (week > 8) {
        chosenElement = arrayClassicalElements.water;
        chosenRune = arrayZodiacSidereal.mar;
    }
    else if (week > 4) {
        chosenElement = arrayClassicalElements.air;
        chosenRune = arrayZodiacSidereal.feb;
    }
    divRuneMonth.style.backgroundPosition = chosenRune[0] * pixelScale + 'px ' + chosenRune[1] * pixelScale + 'px';
    divRuneElement.style.backgroundPosition = chosenElement[0] * pixelScale + 'px ' + chosenElement[1] * pixelScale + 'px';
}



function UpdateText() {
    // FOREWORD ----------------------------
    if (player.seesForeword) {
        divForewordCorpus.innerHTML = displayForewordA + '<div id="divForewordScripture">' + displayForewordScripture + '<div id="divForewordSource">' + displayForewordSource + '</div></div>' + displayForewordB;
        buttonForewordDismiss.innerHTML = displayForewordLabel;
    }

    if (player.seesModsWindow) {
        labelModCode.innerHTML = displayModCodeLabel;
        textareaModCode.placeholder = displayModCodeTextArea;
        buttonSubmitModCode.innerHTML = displaySubmitModCode;
        buttonModsDismiss.innerHTML = displayDismissMods;
    }

    if (player.isAt == 'Praedium') {
        buttonGoToResidence.innerHTML = displayGoToResidence;
        buttonGoToTownship.innerHTML = displayGoToTownship;

        // FARM --------------------------------
        theadFarmInventory.innerHTML = '<tr><td colspan="2">' + displayInStock + '</td></tr>';
        let countWheat = formatterCurrent.format(bushelCount[0]);
        let fruitGap = '&nbsp;&nbsp;';
        if (warehouseStage > 2) { fruitGap += '&nbsp;'; }
        if (player.seesWarehouse) { countWheat += '<span class="warehouseTotal">/' + formatterCurrent.format(bushelMax[0]) + '</span>'; }
        let tableString = '<tr><td>' + displayWheat + '&nbsp;<span class="icon Wheat inlineIcon"></span>:</td><td class="rightPadColumn">' + countWheat + '</td></tr>';
        if (farmStage > 16) {
            tableString += '<tr><td>' + displayBarley + '&nbsp;<span class="icon Barley inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterCurrent.format(bushelCount[1]) + '<span class="warehouseTotal">/' + formatterCurrent.format(bushelMax[1]) + '</span></td></tr>';
        }
        if (player.hasFlaxFarm) {
            tableString += '<tr>'
            tableString += '<td>';
            tableString += displayFlax;
            tableString += '&nbsp;<span class="icon Flax inlineIcon"></span>:';
            tableString += '</td>';
            tableString += '<td class="rightPadColumn">';
            tableString += formatterCurrent.format(bushelCount[7]);
            tableString += '<span class="warehouseTotal">/' + formatterCurrent.format(bushelMax[7]) + '</span>';
            tableString += '</td>';
            tableString += '</tr>';
        }
        if (player.seesOlives) {
            tableString += '<tr><td>' + displayOlive + '&nbsp;<span class="icon Olive inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterCurrent.format(bushelCount[2]) + '<span class="warehouseTotal">/' + fruitGap + formatterCurrent.format(bushelMax[2]) + '</span></td></tr>';
        }
        if (farmStage > 17) {
            tableString += '<tr><td>' + displayDate + '&nbsp;<span class="icon Date inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterCurrent.format(bushelCount[3]) + '<span class="warehouseTotal">/' + fruitGap + formatterCurrent.format(bushelMax[3]) + '</span></td></tr>';
            tableString += '<tr><td>' + displayFig + '&nbsp;<span class="icon Fig inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterCurrent.format(bushelCount[4]) + '<span class="warehouseTotal">/' + fruitGap + formatterCurrent.format(bushelMax[4]) + '</span></td></tr>';
            tableString += '<tr><td>' + displayPomegranate + '&nbsp;<span class="icon Pom inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterCurrent.format(bushelCount[5]) + '<span class="warehouseTotal">/' + fruitGap + formatterCurrent.format(bushelMax[5]) + '</span></td></tr>';
            tableString += '<tr><td>' + displayGrape + '&nbsp;<span class="icon Grape inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterCurrent.format(bushelCount[6]) + '<span class="warehouseTotal">/' + fruitGap + formatterCurrent.format(bushelMax[6]) + '</span></td></tr>';
        }
        tbodyFarmInventory.innerHTML = tableString;

        theadFarmStaff.innerHTML = '<tr><td colspan="3">' + displayStaff + '</td></tr>';
        let fieldhandCost = '(-' + formatterCurrent.format(handsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        let vigneronCost = '(-' + formatterCurrent.format(vigneronsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        let arboristCost = '(-' + formatterCurrent.format(arboristsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        let horticulturalistsCost = '(-' + formatterCurrent.format(horticulturalistsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        if (starving[0]) { fieldhandCost = '<span class="starving">' + displayStarving + '</span>'; }
        if (starving[6]) { vigneronCost = '<span class="starving">' + displayStarving + '</span>'; }
        if (starving[7]) { arboristCost = '<span class="starving">' + displayStarving + '</span>'; }
        if (starving[8]) { horticulturalistsCost = '<span class="starving">' + displayStarving + '</span>'; }
        tableString = '<tr><td>' + displayFieldhands + '&nbsp;<span class="icon Fieldhand inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(handsHired) + '</td><td>' + fieldhandCost + '</td></tr>';
        if (vigneronsHired > 0) { tableString += '<tr><td>' + displayVignerons + '&nbsp;<span class="icon Vigneron inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(vigneronsHired) + '</td><td>' + vigneronCost + '</td></tr>'; }
        if (arboristsHired > 0) { tableString += '<tr><td>' + displayArborists + '&nbsp;<span class="icon Arborist inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(arboristsHired) + '</td><td>' + arboristCost + '</td></tr>'; }
        if (horticulturalistsHired > 0) { tableString += '<tr><td>' + displayHorticulturalists + '&nbsp;<span class="icon Horticulturalist inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(horticulturalistsHired) + '</td><td>' + horticulturalistsCost + '</td></tr>'; }
        tbodyFarmStaff.innerHTML = tableString;

        if (player.seesReport) {
            tableString = '<tr>';
            tableString += '<td>';
            if (player.canBarter) { tableString += '<br>' + displayCropAbbr; }
            else { tableString += '<br>' + displayCrop; }
            tableString += '</td>';
            tableString += '<td>';
            if (player.canBarter) { tableString += displayAcresFarmedAbbr; }
            else { tableString += displayAcresFarmed; }
            tableString += '</td>';
            tableString += '<td>';
            tableString += displayBushels + '<br>' + displayHarvested;
            tableString += '</td>';
            if (player.canBarter) {
                tableString += '<td>';
                tableString += displayBushels + '<br>' + displayPurchased;
                tableString += '</td>';
            }
            tableString += '<td>';
            tableString += displayBushels + '<br>' + displaySpent;
            tableString += '</td>';
            if (player.canBarter) {
                tableString += '<td>';
                tableString += displayBushels + '<br>' + displaySold;
                tableString += '</td>';
            }
            tableString += '</tr>';
            theadFarmReport.innerHTML = tableString;
            const totalEaten = paidOutWheat[0] + paidOutWheat[1] + paidOutWheat[2] + paidOutWheat[3] + paidOutWheat[4] + paidOutWheat[5] + paidOutWheat[6] + paidOutWheat[7] + paidOutWheat[8] + paidOutWheat[9] + paidOutWheat[10] + paidOutWheat[11];
            tableString = '<tr><td><span class="icon Wheat"></span></td>';
            tableString += '<td>' + formatterCurrent.format(farmedCount[0]) + '</td>';
            tableString += '<td>' + formatterCurrent.format(harvestedCount[0]) + '</td>';
            if (player.canBarter) {
                tableString += '<td>' + formatterCurrent.format(purchasedCount[0]) + '</td>';
            }
            tableString += '<td>' + formatterCurrent.format(spentCount[0] + seededCount[0] + totalEaten + residenceIngredientConsumedCount[0] + residenceIngredientConsumedCount[14][0]) + '</td>';
            if (player.canBarter) {
                tableString += '<td>' + formatterCurrent.format(soldCount[0]) + '</td>';
            }
            tableString += '</tr>';
            if (farmStage > 16) {
                tableString += '<tr><td><span class="icon Barley"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[1]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[1]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[1]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[1] + seededCount[1] + horsesEaten + residenceIngredientConsumedCount[2]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[1]) + '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasFlaxFarm) {
                tableString += '<tr><td><span class="icon Flax"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[7]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[7]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[7]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[7] + residenceIngredientConsumedCount[12] + seededCount[2]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[7]) + '</td>';
                }
                tableString += '</tr>';
            }
            if (player.seesOlives) {
                tableString += '<tr><td><span class="icon Olive"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[2]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[2]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[2]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[2] + residenceIngredientConsumedCount[1]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[2]) + '</td>';
                }
                tableString += '</tr>';
            }
            if (farmStage > 17) {
                tableString += '<tr><td><span class="icon Date"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[3]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[3]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[3]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[3] + residenceIngredientConsumedCount[4]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[3]) + '</td>';
                }
                tableString += '</tr>';
                tableString += '<tr><td><span class="icon Fig"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[4]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[4]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[4]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[4] + residenceIngredientConsumedCount[6]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[4]) + '</td>';
                }
                tableString += '</tr>';
                tableString += '<tr><td><span class="icon Pom"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[5]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[5]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[5]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[5] + residenceIngredientConsumedCount[5]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[5]) + '</td>';
                }
                tableString += '</tr>';
                tableString += '<tr><td><span class="icon Grape"></span></td>';
                tableString += '<td>' + formatterCurrent.format(farmedCount[6]) + '</td>';
                tableString += '<td>' + formatterCurrent.format(harvestedCount[6]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(purchasedCount[6]) + '</td>';
                }
                tableString += '<td>' + formatterCurrent.format(spentCount[6] + residenceIngredientConsumedCount[3]) + '</td>';
                if (player.canBarter) {
                    tableString += '<td>' + formatterCurrent.format(soldCount[6]) + '</td>';
                }
                tableString += '</tr>';
            }
            tbodyFarmReport.innerHTML = tableString;
        }

        // FOREST ------------------------------
        if (player.seesForest) {
            theadForestInventory.innerHTML = '<tr><td colspan="3">' + displayInStock + '</td></tr>';
            tableString = '<tr><td>' + displayLogs + '&nbsp;<span class="icon Log inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(logsCount) + '</td><td></td></tr>';
            if (player.canSaw) { tableString += '<tr><td>' + displayBoards + '&nbsp;<span class="icon Board inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(boardsCount) + '</td><td>(-' + (sawyersHired * logsSawnPerWeek) + '<span class="icon Log inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)</td></tr>'; }
            tbodyForestInventory.innerHTML = tableString;

            theadForestStaff.innerHTML = '<tr><td colspan="3">' + displayStaff + '</td></tr>';
            let loggerCost = '(-' + formatterCurrent.format(loggersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let sawyerCost = '(-' + formatterCurrent.format(sawyersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            if (starving[1]) { loggerCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[2]) { sawyerCost = '<span class="starving">' + displayStarving + '</span>'; }
            tableString = '<tr><td>' + displayLumberjacks + '&nbsp;<span class="icon Logger inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(loggersHired) + '</td><td>' + loggerCost + '</td></tr>';
            if (player.canSaw) { tableString += '<tr><td>' + displaySawyers + '&nbsp;<span class="icon Sawyer inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(sawyersHired) + '</td><td>' + sawyerCost + '</td></tr>'; }
            tbodyForestStaff.innerHTML = tableString;


            if (player.seesReport) {
                tableString = '<tr>';
                tableString += '<td>';
                tableString += '<br>' + displayGood;
                tableString += '</td>';
                tableString += '<td>';
                tableString += displayScore + '<br>' + displayProduced;
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += displayScore + '<br>' + displayPurchased;
                    tableString += '</td>';
                }
                tableString += '<td>';
                tableString += displayScore + '<br>' + displaySpent;
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += displayScore + '<br>' + displaySold;
                    tableString += '</td>';
                }
                tableString += '</tr>';
                theadForestReport.innerHTML = tableString;

                tableString = '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Log"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(forestProducedCount[0]);
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(forestPurchasedCount[0]);
                    tableString += '</td>';
                }
                tableString += '<td>';
                tableString += formatterCurrent.format(forestSpentCount[0]);
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(forestSoldCount[0]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
                if (player.canSaw) {
                    tableString += '<tr>';
                    tableString += '<td>';
                    tableString += '<span class="icon Board"></span>';
                    tableString += '</td>';
                    tableString += '<td>';
                    tableString += formatterCurrent.format(forestProducedCount[1]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(forestPurchasedCount[1]);
                        tableString += '</td>';
                    }
                    tableString += '<td>';
                    tableString += formatterCurrent.format(forestSpentCount[1]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(forestSoldCount[1]);
                        tableString += '</td>';
                    }
                    tableString += '</tr>';
                }
                tbodyForestReport.innerHTML = tableString;
            }

            // button
            if (!player.canLog) { buttonForest.innerHTML = displayLabelLogCamp + '<br>(' + priceLoggingCamp + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (!player.canSaw) { buttonForest.innerHTML = displayLabelSawmill + '<br>(' + priceSawmill + '<span class="icon Wheat inlineIcon"></span>)'; }
        }

        // MOUNTAIN ----------------------------
        if (player.seesMountain) {
            theadMountainInventory.innerHTML = '<tr><td colspan="3">' + displayInStock + '</td></tr>';
            tableString = '<tr><td>' + displayStone + '&nbsp;<span class="icon Stone inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(stoneCount) + '</td><td></td></tr>';
            if (player.hasHiredGemcutters) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayCrystal + '&nbsp;<span class="icon Crystal inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="noPadColumn">';
                tableString += formatterCurrent.format(crystalsCount);
                tableString += '</td>';
                tableString += '<td>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.canMine) { tableString += '<tr><td>' + displayOre + '&nbsp;<span class="icon OreCopper inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(oreCopperCount) + '</td><td></td></tr>'; }
            if (player.canSmelt) { tableString += '<tr><td>' + displayCopper + '&nbsp;<span class="icon IngotCopper inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(ingotsCopperCount) + '</td><td>(-' + (smeltersHired * ingotsCopperYieldPerTurn * ingotsOreCostPerIngot) + '<span class="icon OreCopper inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)</td></tr>'; }
            if (player.canImportTin) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayTin + '&nbsp;<span class="icon IngotTin inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="noPadColumn">';
                tableString += formatterCurrent.format(ingotsTinCount);
                tableString += '</td>';
                tableString += '<td>';
                tableString += '';
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasHiredBronzeworkers) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayBronze + '&nbsp;<span class="icon IngotBronze inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="noPadColumn">';
                tableString += formatterCurrent.format(ingotsBronzeCount);
                tableString += '</td>';
                tableString += '<td>';
                tableString += '(-' + bronzeCopperNeed + '<span class="icon IngotCopper inlineIcon"></span> -' + bronzeTinNeed + '<span class="icon IngotTin inlineIcon"></span><span class="warehouseTotal">/' + displayMonth + '</span>)';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tbodyMountainInventory.innerHTML = tableString;

            theadMountainStaff.innerHTML = '<tr><td colspan="3">' + displayStaff + '</td></tr>';
            let masonCost = '(-' + formatterCurrent.format(masonsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let gemcutterCost = '(-' + formatterCurrent.format(gemcuttersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let minerCost = '(-' + formatterCurrent.format(minersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let smelterCost = '(-' + formatterCurrent.format(smeltersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let metallurgistCost = '(-' + formatterCurrent.format(metallurgistsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            if (starving[3]) { masonCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[10]) { gemcutterCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[4]) { minerCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[5]) { smelterCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[9]) { metallurgistCost = '<span class="starving">' + displayStarving + '</span>'; }
            tableString = '<tr><td>' + displayMasons + '&nbsp;<span class="icon Mason inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(masonsHired) + '</td><td>' + masonCost + '</td></tr>';
            if (player.hasHiredGemcutters) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayGemcutters + '&nbsp;<span class="icon Gemcutter inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="noPadColumn">';
                tableString += formatterCurrent.format(gemcuttersHired);
                tableString += '</td>';
                tableString += '<td>';
                tableString += gemcutterCost;
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.canMine) {
                tableString += '<tr><td>' + displayMiners + '&nbsp;<span class="icon Miner inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(minersHired) + '</td><td>' + minerCost + '</td></tr>';
            }
            if (player.canSmelt) {
                tableString += '<tr><td>' + displayCindermen + '&nbsp;<span class="icon Cinderman inlineIcon"></span>:</td><td class="noPadColumn">' + formatterCurrent.format(smeltersHired) + '</td><td>' + smelterCost + '</td></tr>';
            }
            if (player.hasHiredBronzeworkers) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayMetallurgists + '&nbsp;<span class="icon Blacksmith inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="noPadColumn">';
                tableString += formatterCurrent.format(metallurgistsHired);
                tableString += '</td>';
                tableString += '<td>';
                tableString += metallurgistCost;
                tableString += '</td>';
                tableString += '</tr>';
            }
            tbodyMountainStaff.innerHTML = tableString;

            if (player.seesReport) {
                tableString = '<tr>';
                tableString += '<td>';
                tableString += '<br>' + displayGood;
                tableString += '</td>';
                tableString += '<td>';
                tableString += displayHomers + '<br>' + displayProduced;
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += displayHomers + '<br>' + displayPurchased;
                    tableString += '</td>';
                }
                tableString += '<td>';
                tableString += displayHomers + '<br>' + displaySpent;
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += displayHomers + '<br>' + displaySold;
                    tableString += '</td>';
                }
                tableString += '</tr>';
                theadMountainReport.innerHTML = tableString;

                tableString = '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Stone"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(mountainProducedCount[0]);
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainPurchasedCount[0]);
                    tableString += '</td>';
                }
                tableString += '<td>';
                tableString += formatterCurrent.format(mountainSpentCount[0]);
                tableString += '</td>';
                if (player.canSell) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainSoldCount[0]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
                if (player.hasHiredGemcutters) {
                    tableString += '<tr>';
                    tableString += '<td>';
                    tableString += '<span class="icon Crystal"></span>';
                    tableString += '</td>';
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainProducedCount[5]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainPurchasedCount[5]);
                        tableString += '</td>';
                    }
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainSpentCount[5]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainSoldCount[5]);
                        tableString += '</td>';
                    }
                    tableString += '</tr>';
                }
                if (player.canMine) {
                    tableString += '<tr>';
                    tableString += '<td>';
                    tableString += '<span class="icon OreCopper"></span>';
                    tableString += '</td>';
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainProducedCount[1]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainPurchasedCount[1]);
                        tableString += '</td>';
                    }
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainSpentCount[1]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainSoldCount[1]);
                        tableString += '</td>';
                    }
                    tableString += '</tr>';
                }
                if (player.canSmelt) {
                    tableString += '<tr>';
                    tableString += '<td>';
                    tableString += '<span class="icon IngotCopper"></span>';
                    tableString += '</td>';
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainProducedCount[2]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainPurchasedCount[2]);
                        tableString += '</td>';
                    }
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainSpentCount[2]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainSoldCount[2]);
                        tableString += '</td>';
                    }
                    tableString += '</tr>';
                }
                if (player.canImportTin) {
                    tableString += '<tr>';
                    tableString += '<td>';
                    tableString += '<span class="icon IngotTin"></span>';
                    tableString += '</td>';
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainProducedCount[3]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainPurchasedCount[3]);
                        tableString += '</td>';
                    }
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainSpentCount[3] + residenceIngredientConsumedCount[7]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainSoldCount[3]);
                        tableString += '</td>';
                    }
                    tableString += '</tr>';
                }
                if (player.hasHiredBronzeworkers) {
                    tableString += '<tr>';
                    tableString += '<td>';
                    tableString += '<span class="icon IngotBronze"></span>';
                    tableString += '</td>';
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainProducedCount[4]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainPurchasedCount[4]);
                        tableString += '</td>';
                    }
                    tableString += '<td>';
                    tableString += formatterCurrent.format(mountainSpentCount[4]);
                    tableString += '</td>';
                    if (player.canSell) {
                        tableString += '<td>';
                        tableString += formatterCurrent.format(mountainSoldCount[4]);
                        tableString += '</td>';
                    }
                    tableString += '</tr>';
                }
                tbodyMountainReport.innerHTML = tableString;
            }

            if (player.hasFoundCopperEvidence && !player.hasFoundMine) { buttonMountain.innerHTML = displayLabelMineScout + '<br>(' + priceMineScout + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (player.hasFoundMine && !player.canMine) { buttonMountain.innerHTML = displayLabelMineDig + '<br>(' + currencySymbol + formatterCurrent.format(priceMineDig[0]) + ' + ' + priceMineDig[1] + '<span class="icon Log inlineIcon"></span>)'; }
            else if (player.canMine && !player.canSmelt) { buttonMountain.innerHTML = displayLabelFoundry + '<br>(' + currencySymbol + formatterCurrent.format(priceFoundry[0]) + ' + ' + priceFoundry[1] + '<span class="icon Log inlineIcon"></span> + ' + formatterCurrent.format(priceFoundry[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (player.canSmelt && player.canHireBronzeworkers) { buttonMountain.innerHTML = displayLabelBronzeworkers + ' ' + '<span class="icon Blacksmith inlineIcon"></span>'; }
            else if (player.hasFoundCrystalEvidence) { buttonMountain.innerHTML = displayLabelDigCrystal + ' ' + '<span class="icon Shovel inlineIcon"></span>'; }
        }

        // BUY LAND BUTTON ---------------------
        if (player.canBuyLand) {
            if (farmStage == 0) { buttonBuyLand.innerHTML = displayLabelBuyLand0 + '<br>(' + priceStage1 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 1) { buttonBuyLand.innerHTML = displayLabelBuyLand1 + '<br>(' + priceStage2 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 2) { buttonBuyLand.innerHTML = displayLabelBuyLand2 + '<br>(' + priceStage3 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 3) { buttonBuyLand.innerHTML = displayLabelBuyLand3 + '<br>(' + priceStage4 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 4) { buttonBuyLand.innerHTML = displayLabelBuyLand4 + '<br>(' + priceStage5 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 5) { buttonBuyLand.innerHTML = displayLabelBuyLand5 + '<br>(' + priceStage6 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 6) { buttonBuyLand.innerHTML = displayLabelBuyLand6 + ' <span class="icon Shovel inlineIcon"></span>'; }
            else if (farmStage == 7) { buttonBuyLand.innerHTML = displayLabelBuyLand7 + ' <span class="icon Axe inlineIcon"></span>'; }
            else if (farmStage == 8) { buttonBuyLand.innerHTML = displayLabelBuyLand8 + ' <span class="icon Rake inlineIcon"></span>'; }
            else if (farmStage == 9) { buttonBuyLand.innerHTML = displayLabelBuyLand9 + ' <span class="icon Sapling inlineIcon"></span>'; }
            else if (farmStage == 10) { buttonBuyLand.innerHTML = displayLabelBuyLand10 + '<br>(' + priceStage11 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 11) { buttonBuyLand.innerHTML = displayLabelBuyLand11 + '<br>(' + priceStage12[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceStage12[1]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (farmStage == 12) { buttonBuyLand.innerHTML = displayLabelBuyLand12 + '<br>(' + priceStage13 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 13) { buttonBuyLand.innerHTML = displayLabelBuyLand13 + '<br>(' + priceStage14[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceStage14[1]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (farmStage == 14) { buttonBuyLand.innerHTML = displayLabelBuyLand14 + '<br>(' + priceStage15[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceStage15[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (farmStage == 15) { buttonBuyLand.innerHTML = displayLabelBuyLand15 + '<br>(' + priceStage16[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceStage16[1] + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (farmStage == 16) { buttonBuyLand.innerHTML = displayLabelBuyLand16 + '<br>(' + priceStage17[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceStage17[1]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (farmStage == 17) { buttonBuyLand.innerHTML = displayLabelBuyLand17 + '<br>(' + priceStage18[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceStage18[1] + '<span class="icon Barley inlineIcon"></span>)'; }
        }

        // RENT WAREHOUSE BUTTON ---------------
        if (player.canRentWarehouse) {
            if (warehouseStage == 0) { buttonRentWarehouse.innerHTML = displayLabelRentWarehouse0 + '<br>(' + priceWarehouse0 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (warehouseStage == 1) { buttonRentWarehouse.innerHTML = displayLabelRentWarehouse1 + '<br>(' + priceWarehouse1 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (warehouseStage == 2) { buttonRentWarehouse.innerHTML = displayLabelRentWarehouse2 + '<br>(' + priceWarehouse2 + '<span class="icon Wheat inlineIcon"></span>)'; }
        }

        // HIRE BUTTONS ------------------------
        buttonHire.innerHTML = displayLabelHireHand + '&nbsp;<span class="icon Fieldhand inlineIcon"></span><br>(' + handsAvailable + '&nbsp;' + displayLabelAvailable + ')';
        buttonAudit.innerHTML = displayLabelHireAccountant + '&nbsp;<span class="icon Accountant inlineIcon"></span><br>(' + priceAccountant + '<span class="icon Wheat inlineIcon"></span>)';

        // NEW VIEW BUTTONS --------------------
        buttonBuyForest.innerHTML = displayLabelForest + '<br>(' + priceForest + '<span class="icon Wheat inlineIcon"></span>)';
        buttonBuyMountain.innerHTML = displayLabelQuarry + '<br>(' + priceQuarry + '<span class="icon Wheat inlineIcon"></span>)';
        buttonFound.innerHTML = displayLabelFound + '<br>(' + formatterCurrent.format(priceVillage) + '<span class="icon Wheat inlineIcon"></span>)';

        // NEW FARM BUTTON ---------------------
        if (!player.hasNewFarm) { buttonNewFarm.innerHTML = displayLabelNewFarm + '<br>(' + currencySymbol + formatterCurrent.format(priceNewFarm) + ')'; }
        else { buttonNewFarm.innerHTML = displayLabelFlaxFarm + '<br>(' + currencySymbol + formatterCurrent.format(priceFlaxFarm) + ')'; }

        // BARTER BUTTONS ----------------------
        if (player.canBarter) {
            const barterInventoryOlive = (bushelCount[2] < barterMaxBulkCount) ? bushelCount[2] : barterMaxBulkCount;
            const barterInventoryDate = (bushelCount[3] < barterMaxBulkCount) ? bushelCount[3] : barterMaxBulkCount;
            const barterInventoryFig = (bushelCount[4] < barterMaxBulkCount) ? bushelCount[4] : barterMaxBulkCount;
            const barterInventoryPom = (bushelCount[5] < barterMaxBulkCount) ? bushelCount[5] : barterMaxBulkCount;
            const barterInventoryGrape = (bushelCount[6] < barterMaxBulkCount) ? bushelCount[6] : barterMaxBulkCount;

            const barterValueOlive = barterInventoryOlive * barterExchangeRate[2];
            const barterValueDate = barterInventoryDate * barterExchangeRate[3];
            const barterValueFig = barterInventoryFig * barterExchangeRate[4];
            const barterValuePom = barterInventoryPom * barterExchangeRate[5];
            const barterValueGrape = barterInventoryGrape * barterExchangeRate[6];

            buttonBarterAll.innerHTML = displayBarterAll + ' <span class="icon Accountant inlineIcon"></span>';
            buttonBarterOlive.innerHTML = barterInventoryOlive + '<span class="icon Olive inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(barterValueOlive) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterDate.innerHTML = barterInventoryDate + '<span class="icon Date inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(barterValueDate) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterFig.innerHTML = barterInventoryFig + '<span class="icon Fig inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(barterValueFig) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterPom.innerHTML = barterInventoryPom + '<span class="icon Pom inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(barterValuePom) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterGrape.innerHTML = barterInventoryGrape + '<span class="icon Grape inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(barterValueGrape) + '<span class="icon Wheat inlineIcon"></span>';
        }
    }

    else if (player.isAt == 'Township') {
        buttonGoToPraedium.innerHTML = displayGoToPraedium;
        buttonGoToPort.innerHTML = displayGoToPort;

        // VILLAGE -----------------------------
        let tableString = null;

        if (villageStage > 3) {
            tableString = '<table id="tableVillageDemographics">';
            tableString += '<thead>';
            tableString += '<tr>';
            tableString += '<td colspan="2">' + displayDemographics + '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>' + displayCitizens + ' <span class="icon Citizen inlineIcon"></span>:' + '</td>';
            tableString += '<td class="rightPadColumn">' + residentsCount + '<span class="warehouseTotal">/' + residentsMax + '</span>' + '</td>';
            tableString += '</tr>';
            if (player.hasMonument) {
                tableString += '<tr>';
                tableString += '<td>' + displayPilgrims + ' <span class="icon Pilgrim inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + pilgrimsCount + '<span class="warehouseTotal">/' + pilgrimsMax + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (player.hasArmy) {
                tableString += '<tr>';
                tableString += '<td>' + displayEnlistment + ' <span class="icon TaxCollector inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + Math.floor((militaryEnlistment * 10000) / 100) + '% <span class="icon Citizen inlineIcon"></span>' + '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableString += '</table>';

            tableString += '<table id="tableVillageFiat">';
            tableString += '<thead>';
            tableString += '<tr>';
            tableString += '<td colspan="2">' + displayFiat + '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            let tempTreasuryIcon = '<span class="icon MoneyBag inlineIcon"></span>';
            if (villageStage > 13) { tempTreasuryIcon = '<span class="icon MoneyTemple inlineIcon"></span>'; }
            tableString += '<td>' + displayTreasury + ' ' + tempTreasuryIcon + ':' + '</td>';
            tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(asCount) + '</td>';
            tableString += '</tr>';
            if (asSpent > 0) {
                tableString += '<tr>';
                tableString += '<td>' + displayAsSpent + ' <span class="icon MoneyBagSpent inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(asSpent) + '</td>';
                tableString += '</tr>';
            }
            if (player.hasBank) {
                tableString += '<tr>';
                tableString += '<td>' + displayInterestRate + ' <span class="icon Accountant inlineIcon"></span>:' + '</td>';
                let revealedRate = interestRate * 100;
                revealedRate = Math.round(revealedRate * 100) / 100;
                tableString += '<td class="rightPadColumn">' + formatterCurrent.format(revealedRate) + '% APR</td>';
                tableString += '</tr>';
            }
            if (player.canSell) {
                tableString += '<tr>';
                tableString += '<td>' + displayFairRate + ' <span class="icon Scales inlineIcon"></span>:' + '</td>';
                const calculatedValue = (currentBushelPrice * 100) / commodityBulkCount;
                const valueToString = '' + calculatedValue;
                let separator = '.';
                if (player.speaks == 'Spanish') { separator = ','; }
                tableString += '<td class="rightPadColumn">' + '1<span class="icon Wheat inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + valueToString[0] + separator + valueToString[1] + valueToString[2] + '</td>';
                tableString += '</tr>';
            }
            if (1 == 1) {
                tableString += '<tr>';
                tableString += '<td colspan="2" class="rightPadColumn">' + '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td colspan="2" class="tdFiatStatementSubheader">' + displayLifetimeRevenues + '</td>';
                tableString += '</tr>';
            }
            if (1 == 1) {
                tableString += '<tr>';
                tableString += '<td>' + displayRealEstate + ' <span class="icon Key inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(rentLifetimeCollected) + '</td>';
                tableString += '</tr>';
            }
            if (player.canSell) {
                tableString += '<tr>';
                tableString += '<td>' + displayMarket + ' <span class="icon Wheat inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(marketLifetimeRevenue) + '</td>';
                tableString += '</tr>';
            }
            if (player.canExport) {
                tableString += '<tr>';
                tableString += '<td>' + displayWholesale + ' <span class="icon ShippingCrate inlineIcon"></span>:' + '</td>';
                const allShippingProfits = shipmentProfits[0] + shipmentProfits[1] + shipmentProfits[2] + shipmentProfits[3] + shipmentProfits[4] + shipmentProfits[5] + shipmentProfits[6];
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(allShippingProfits) + '</td>';
                tableString += '</tr>';
            }
            if (villageStage > 12) {
                tableString += '<tr>';
                tableString += '<td>' + displayTourism + ' <span class="icon Chuckles inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(tourismLifetimeProfit) + '</td>';
                tableString += '</tr>';
            }
            if (villageStage > 13) {
                tableString += '<tr>';
                tableString += '<td>' + displayTaxes + ' <span class="icon Chest inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(taxesLifetimeCollected) + '</td>';
                tableString += '</tr>';
            }
            if (player.hasBank) {
                tableString += '<tr>';
                tableString += '<td>' + displayInterest + ' <span class="icon Accountant inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(interestLifetimeCollected) + '</td>';
                tableString += '</tr>';
            }
            if (asSpent > 0) {
                tableString += '<tr>';
                tableString += '<td colspan="2" class="rightPadColumn">' + '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td colspan="2" class="tdFiatStatementSubheader">' + displayLifetimeCosts + '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>' + displayComDev + ' <span class="icon CityWalls inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(commercialLifetimeSpend) + '</td>';
                tableString += '</tr>';
            }
            if (player.canSell) {
                tableString += '<tr>';
                tableString += '<td>' + displayCommodities + ' <span class="icon Barley inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(commoditiesLifetimeSpend) + '</td>';
                tableString += '</tr>';
            }
            if (player.canImport) {
                tableString += '<tr>';
                tableString += '<td>' + displayFreight + ' <span class="icon ShippingCrate inlineIcon"></span>:' + '</td>';
                const allShippingCosts = shipmentCosts[0] + shipmentCosts[1];
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(allShippingCosts) + '</td>';
                tableString += '</tr>';
            }
            if (player.hasArmy) {
                tableString += '<tr>';
                tableString += '<td>' + displayMilitary + ' <span class="icon TaxCollector inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(militaryLifetimeCost) + '</td>';
                tableString += '</tr>';
            }
            if (player.hasHospital) {
                tableString += '<tr>';
                tableString += '<td>' + displayMedical + ' <span class="icon Patient inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(medicalLifetimeCost) + '</td>';
                tableString += '</tr>';
            }
            if (player.hasBeenLevied) {
                tableString += '<tr>';
                tableString += '<td>' + displayTribute + ' <span class="icon LordBritish inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterCurrent.format(tributeLifetimePaid) + '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableString += '</table>';

            tableString += '<table id="tableVillageIncome">';
            tableString += '<thead>';
            tableString += '<tr>';
            tableString += '<td colspan="3">' + (player.hasBeenLevied ? displayPnL : displayIncome) + '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            if (player.hasBeenLevied) {
                tableString += '<tr>';
                tableString += '<td>' + displayTribute + ' <span class="icon LordBritish inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '-' + currencySymbol + tributeAmount + '/' + '<span class="icon CityWalls inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayDay + '</span>' + '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>' + displayRent + ' <span class="icon Key inlineIcon"></span>:' + '</td>';
            tableString += '<td class="noPadColumn">' + '+' + currencySymbol + rentPrice + '/' + '<span class="icon Citizen inlineIcon"></span>' + '</td>';
            tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayWeek + '</span>' + '</td>';
            tableString += '</tr>';
            if (trophiesSpawn) {
                tableString += '<tr>';
                tableString += '<td>' + displayTourism + ' <span class="icon Chuckles inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + currencySymbol + tourismValue + '/' + '<span class="icon Trophy inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayFortnight + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (beadsSpawn) {
                tableString += '<tr>';
                tableString += '<td>' + displayWorship + ' <span class="icon PenitentMan inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + beadsIncAmount + '<span class="icon Mala inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayMonth + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (scrollsSpawn) {
                tableString += '<tr>';
                tableString += '<td>' + displayStudy + ' <span class="icon TheWiz inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + scrollsIncAmount + '<span class="icon Scroll inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displaySeason + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (villageStage > 13) {
                tableString += '<tr>';
                tableString += '<td>' + displayTaxes + ' <span class="icon Chest inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + currencySymbol + taxesValue + '/' + '<span class="icon Key inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displaySemester + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (horsesSpawn) {
                tableString += '<tr>';
                tableString += '<td>' + displayHusbandry + ' <span class="icon FarmerJoe inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + horsesIncAmount + '<span class="icon Horsey inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayYear + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (player.hasMonument) {
                tableString += '<tr>';
                tableString += '<td>' + displayConjunction + ' <span class="icon Sphinx inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + relicSpawnCount + '<span class="icon Relic inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayDecade + '</span>' + '</td>';
                tableString += '</tr>';
            }
            if (player.isGod) {
                tableString += '<tr>';
                tableString += '<td>' + 'רוּחַ קָדְשׁוֹ' + ' <span class="icon EspírituSanto inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + relicSpawnCount + '<span class="icon Child inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayCentury + '</span>' + '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableString += '</table>';

            if (horsesSpawn) {
                tableString += '<table id="tableVillageInventory">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="3">' + displayInventory + '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>' + displayPonies + ' ' + '<span class="icon Horsey inlineIcon"></span>' + ':' + '</td>';
                tableString += '<td class="noPadColumn">' + formatterCurrent.format(horsesCount) + '</td>';
                let horsesCost = '(-' + formatterCurrent.format(horsesCount) + '<span class="icon Barley inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
                if (horsesStarving) { horsesCost = '<span class="starving">' + displayStarvingHorse + '</span>'; }
                tableString += '<td>' + horsesCost + '</td>';
                tableString += '</tr>';
                if (trophiesSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayChampionships + ' <span class="icon Trophy inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterCurrent.format(trophiesCount) + '</td>';
                    tableString += '<td>(' + trophyChance + '%' + '<span class="warehouseTotal"> ' + displayChance + '/' + displayMonth + '</span>)' + '</td>';
                    tableString += '</tr>';
                }
                if (beadsSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayPrayers + ' <span class="icon Mala inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterCurrent.format(beadsCount) + '</td>';
                    tableString += '<td>';
                    if (player.hasMonument) {
                        tableString += '(+' + pilgrimPrayerValue + '/' + '<span class="icon Pilgrim inlineIcon"></span>' + ')';
                    }
                    tableString += '</td>';
                    tableString += '</tr>';
                }
                if (scrollsSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayScripture + ' <span class="icon Scroll inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterCurrent.format(scrollsCount) + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (player.hasMonument) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayRelic + ' <span class="icon Relic inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterCurrent.format(relicCount) + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (player.isGod) {
                    tableString += '<tr>';
                    tableString += '<td>' + 'χριστοί' + ' <span class="icon Child inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + 0 + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (player.hasHospital) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayPatients + ' <span class="icon Patient inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterCurrent.format(patientsCount) + '</td>';
                    let cellContent = '';
                    if (patientsCount != 0) { cellContent = '(-' + currencySymbol + formatterCurrent.format(patientsCount * patientCost) + ')'; }
                    tableString += '<td>' + cellContent + '</td>';
                    tableString += '</tr>';
                }
                if (player.hasGraveyard) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayGhosts + ' <span class="icon Ghost inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterCurrent.format(ghostsCount) + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (ratsSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayRats + ' <span class="icon Rattata inlineIcon"></span>:' + '</td>';
                    let ratCountDisplay = '' + formatterCurrent.format(ratsCount);
                    if (ratsCount > 1000000) { ratCountDisplay = '+1,000,000'; }
                    if (ratsOutbreak) { ratCountDisplay = '<span class="starving">' + displayRatPlague + '</span>'; }
                    tableString += '<td class="noPadColumn">' + ratCountDisplay + '</td>';
                    tableString += '<td>(-' + ratPenaltyFactor + '%<span class="warehouseTotal">/' + displayHarvest + '</span>)</td>';
                    tableString += '</tr>';
                }
                tableString += '</tbody>';
                tableString += '</table>';

                if (player.hasCityWalls) {
                    tableString += '<table id="tableVillageStatistics">';
                    tableString += '<thead>';
                    tableString += '<tr>';
                    tableString += '<td colspan="2">' + displayStatistics + '</td>';
                    tableString += '</tr>';
                    tableString += '</thead>';
                    tableString += '<tbody>';
                    if (player.hasArmy) {
                        tableString += '<tr>';
                        tableString += '<td colspan="2" style="text-align:center">' + 1 + '<span class="icon TaxCollector inlineIcon"></span> <span class="icon Sell inlineIcon"></span>';
                        tableString += ' ' + militaryInfantryCombatValue + '<span class="icon Sword inlineIcon"></span>' + '</td>';
                        tableString += '</tr>';
                        tableString += '<tr>';
                        tableString += '<td colspan="2" style="text-align:center">' + 1 + '<span class="icon HorseyMounted inlineIcon"></span> <span class="icon Sell inlineIcon"></span>';
                        tableString += ' ' + militaryCavalryCombatValue + '<span class="icon Sword inlineIcon"></span>' + '</td>';
                        tableString += '</tr>';
                    }
                    const calculatedDefenseScore = 1000;
                    tableString += '<tr>';
                    tableString += '<td colspan="2" style="text-align:center">' + 1 + '<span class="icon CityWalls inlineIcon"></span> <span class="icon Sell inlineIcon"></span>';
                    tableString += ' ' + calculatedDefenseScore + '<span class="icon Shield inlineIcon"></span>' + '</td>';
                    tableString += '</tr>';
                    if (player.hasArmy) {
                        tableString += '<tr>';
                        tableString += '<td>' + displayOffense + ' <span class="icon Sword inlineIcon"></span>:' + '</td>';
                        const calculatedOffenseScore = (militaryInfantry * militaryInfantryCombatValue) + (militaryCavalryCurrent * militaryCavalryCombatValue);
                        tableString += '<td class="rightPadColumn">' + formatterCurrent.format(calculatedOffenseScore) + '</td>';
                        tableString += '</tr>';
                    }
                    tableString += '<tr>';
                    tableString += '<td>' + displayDefense + ' <span class="icon Shield inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="rightPadColumn">' + formatterCurrent.format(calculatedDefenseScore) + '</td>';
                    tableString += '</tr>';
                    tableString += '</tbody>';
                    tableString += '</table>';

                    if (player.hasArmy) {
                        tableString += '<table id="tableVillageMateriel">';
                        tableString += '<thead>';
                        tableString += '<tr>';
                        tableString += '<td colspan="3">' + displayMateriel + '</td>';
                        tableString += '</tr>';
                        tableString += '</thead>';
                        tableString += '<tbody>';

                        tableString += '<tr>';
                        tableString += '<td colspan="3" style="text-align:center">' + 1 + '<span class="icon Citizen inlineIcon"></span> <span class="icon Sell inlineIcon"></span>';
                        tableString += ' ' + 1 + '<span class="icon TaxCollector inlineIcon"></span>' + '</td>';
                        tableString += '</tr>';

                        tableString += '<tr>';
                        tableString += '<td colspan="3" style="text-align:center">' + 1 + '<span class="icon TaxCollector inlineIcon"></span> + ' + 1 + '<span class="icon Horsey inlineIcon"></span> <span class="icon Sell inlineIcon"></span>';
                        tableString += ' ' + 1 + '<span class="icon HorseyMounted inlineIcon"></span>' + '</td>';
                        tableString += '</tr>';

                        tableString += '<tr>';
                        tableString += '<td>' + displaySoldiers + ' <span class="icon TaxCollector inlineIcon"></span>:' + '</td>';
                        tableString += '<td class="noPadColumn">' + formatterCurrent.format(militaryInfantry) + '<span class="warehouseTotal">/' + militarySoldiers + '</span>' + '</td>';
                        tableString += '<td>(-' + currencySymbol + formatterCurrent.format(militaryInfantry * militaryUnitCost) + '<span class="warehouseTotal">/' + displayWeek + '</span>)</td>';
                        tableString += '</tr>';

                        tableString += '<tr>';
                        tableString += '<td>' + displayCavalry + ' <span class="icon HorseyMounted inlineIcon"></span>:' + '</td>';
                        tableString += '<td class="noPadColumn">' + formatterCurrent.format(militaryCavalryCurrent) + '<span class="warehouseTotal">/' + militarySoldiers + '</span>' + '</td>';
                        tableString += '<td>(-' + currencySymbol + formatterCurrent.format(militaryCavalryCurrent * (militaryUnitCost * militaryUnitCostFactor)) + '<span class="warehouseTotal">/' + displayWeek + '</span>)</td>';
                        tableString += '</tr>';
                        tableString += '</tbody>';
                        tableString += '</table>';
                    }
                }
            }
        }
        if (tableString == null) { tableString = ''; }
        divVillageLasTablas.innerHTML = tableString;

        // BUILD BUTTON ------------------------
        if (player.canBuild) {
            if (villageStage == -5) { buttonBuild.innerHTML = displayLabelBuildNEG5 + ' <span class="icon HerosDioptra inlineIcon"></span>' + '<br>(' + priceBuildNEG5 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (villageStage == -4) { buttonBuild.innerHTML = displayLabelBuildNEG4 + '<br>(' + priceBuildNEG4[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceBuildNEG4[3] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceBuildNEG4[4] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceBuildNEG4[2] + '<span class="icon Pom inlineIcon"></span>' + ' + ' + priceBuildNEG4[1] + '<span class="icon Amphora inlineIcon"></span>' + ')'; }
            else if (villageStage == -3) { buttonBuild.innerHTML = displayLabelBuildNEG3 + '<br>(' + priceBuildNEG3 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (villageStage == -2) { buttonBuild.innerHTML = displayLabelBuildNEG2 + '<br>(' + priceBuildNEG2 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (villageStage == -1) { buttonBuild.innerHTML = displayLabelBuildNEG1 + '<br>(' + formatterCurrent.format(priceBuildNEG1[0]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuildNEG1[1]) + '<span class="icon Stone inlineIcon"></span>' + ')'; }
            else if (villageStage == 0) { buttonBuild.innerHTML = displayLabelBuild0 + '<br>(' + priceBuild0[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild0[1] + '<span class="icon Log inlineIcon"></span> + ' + priceBuild0[2] + '<span class="icon Board inlineIcon"></span> + ' + priceBuild0[3] + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 1) { buttonBuild.innerHTML = displayLabelBuild1 + '<br>(' + priceBuild1[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild1[1] + '<span class="icon Board inlineIcon"></span> + ' + priceBuild1[2] + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 2) { buttonBuild.innerHTML = displayLabelBuild2 + '<br>(' + formatterCurrent.format(priceBuild2[0]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild2[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 3) { buttonBuild.innerHTML = displayLabelBuild3 + '<br>(' + formatterCurrent.format(priceBuild3[0]) + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild3[1] + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild3[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 4) { buttonBuild.innerHTML = displayLabelBuild4 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild4[0]) + ' + ' + formatterCurrent.format(priceBuild4[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild4[2] + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild4[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 5) { buttonBuild.innerHTML = displayLabelBuild5 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild5[0]) + ' + ' + formatterCurrent.format(priceBuild5[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild5[2]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (villageStage == 6) { buttonBuild.innerHTML = displayLabelBuild6 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild6[0]) + ' + ' + formatterCurrent.format(priceBuild6[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild6[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild6[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 7) { buttonBuild.innerHTML = displayLabelBuild7 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild7[0]) + ' + ' + formatterCurrent.format(priceBuild7[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild7[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild7[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 8) { buttonBuild.innerHTML = displayLabelBuild8 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild8[0]) + ' + ' + formatterCurrent.format(priceBuild8[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild8[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild8[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 9) { buttonBuild.innerHTML = displayLabelBuild9 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild9[0]) + ' + ' + formatterCurrent.format(priceBuild9[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild9[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild9[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 10) { buttonBuild.innerHTML = displayLabelBuild10 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild10[0]) + ' + ' + priceBuild10[1] + '<span class="icon Barley inlineIcon"></span> + ' + formatterCurrent.format(priceBuild10[2]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (villageStage == 11) { buttonBuild.innerHTML = displayLabelBuild11 + '<br>(' + priceBuild11[2] + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild11[3] + '<span class="icon Barley inlineIcon"></span> + ' + priceBuild11[4] + '<span class="icon Olive inlineIcon"></span> + ' + priceBuild11[5] + '<span class="icon Date inlineIcon"></span> + ' + priceBuild11[6] + '<span class="icon Fig inlineIcon"></span> + ' + priceBuild11[7] + '<span class="icon Pom inlineIcon"></span> + ' + priceBuild11[8] + '<span class="icon Grape inlineIcon"></span><br> + ' + currencySymbol + formatterCurrent.format(priceBuild11[0]) + ' + ' + formatterCurrent.format(priceBuild11[9]) + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild11[1] + '<span class="icon IngotCopper inlineIcon"></span> + ' + priceBuild11[10] + '<span class="icon Horsey inlineIcon"></span>' + ')'; }
            else if (villageStage == 12) { buttonBuild.innerHTML = displayLabelBuild12 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild12[0]) + ' + ' + priceBuild12[1] + '<span class="icon Barley inlineIcon"></span> + ' + formatterCurrent.format(priceBuild12[2]) + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild12[3] + '<span class="icon Horsey inlineIcon"></span>)'; }
            else if (villageStage == 13) { buttonBuild.innerHTML = displayLabelBuild13 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild13[0]) + ' + ' + formatterCurrent.format(priceBuild13[2]) + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceBuild13[1] + '<span class="icon IngotCopper inlineIcon"></span>' + ')'; }
            else if (villageStage == 14) { buttonBuild.innerHTML = displayLabelBuild14 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild14[0]) + ' + ' + formatterCurrent.format(priceBuild14[2]) + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceBuild14[1] + '<span class="icon Mala inlineIcon"></span>' + ')'; }
            else if (villageStage == 15) { buttonBuild.innerHTML = displayLabelBuild15 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild15[0]) + ' + ' + formatterCurrent.format(priceBuild15[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 16) { buttonBuild.innerHTML = displayLabelBuild16 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild16[0]) + ' + ' + formatterCurrent.format(priceBuild16[1]) + '<span class="icon Barley inlineIcon"></span> + ' + formatterCurrent.format(priceBuild16[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild16[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 17) { buttonBuild.innerHTML = displayLabelBuild17 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild17[0]) + ' + ' + formatterCurrent.format(priceBuild17[1]) + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild17[2] + '<span class="icon IngotBronze inlineIcon"></span>)'; }
            else if (villageStage == 18) { buttonBuild.innerHTML = displayLabelBuild18 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild18[0]) + ' + ' + formatterCurrent.format(priceBuild18[1]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild18[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 19) { buttonBuild.innerHTML = displayLabelBuild19 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild19[0]) + ' + ' + formatterCurrent.format(priceBuild19[1]) + '<span class="icon Stone inlineIcon"></span> + ' + formatterCurrent.format(priceBuild19[2]) + '<span class="icon OreCopper inlineIcon"></span>)'; }
            else if (villageStage == 20) { buttonBuild.innerHTML = displayLabelBuild20 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild20[0]) + ' + ' + formatterCurrent.format(priceBuild20[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterCurrent.format(priceBuild20[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterCurrent.format(priceBuild20[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 21) { buttonBuild.innerHTML = displayLabelBuild21 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild21[0]) + ' + ' + formatterCurrent.format(priceBuild21[1]) + '<span class="icon Stone inlineIcon"></span> + ' + formatterCurrent.format(priceBuild21[2]) + '<span class="icon IngotCopper inlineIcon"></span>)'; }
            else if (villageStage == 22) { buttonBuild.innerHTML = displayLabelBuild22 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild22[0]) + ' + ' + formatterCurrent.format(priceBuild22[1]) + '<span class="icon Stone inlineIcon"></span> + ' + formatterCurrent.format(priceBuild22[2]) + '<span class="icon IngotCopper inlineIcon"></span> + ' + formatterCurrent.format(priceBuild22[3]) + '<span class="icon IngotTin inlineIcon"></span> + ' + formatterCurrent.format(priceBuild22[4]) + '<span class="icon IngotBronze inlineIcon"></span>)'; }
            else if (villageStage == 23) { buttonBuild.innerHTML = displayLabelBuild23 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild23[0]) + ' + ' + formatterCurrent.format(priceBuild23[1]) + '<span class="icon Stone inlineIcon"></span> + ' + formatterCurrent.format(priceBuild23[2]) + '<span class="icon OreCopper inlineIcon"></span>)'; }
            else if (villageStage == 24) { buttonBuild.innerHTML = displayLabelBuild24 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild24[0]) + ' + ' + formatterCurrent.format(priceBuild24[1]) + '<span class="icon Stone inlineIcon"></span> + ' + formatterCurrent.format(priceBuild24[2]) + '<span class="icon OreCopper inlineIcon"></span>)'; }
            else if (villageStage == 25) { buttonBuild.innerHTML = displayLabelBuild25 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild25[0]) + ' + ' + formatterCurrent.format(priceBuild25[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 26) { buttonBuild.innerHTML = displayLabelBuild26 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild26) + ')'; }
            else if (villageStage == 27) { buttonBuild.innerHTML = displayLabelBuild27 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild27[0]) + ' + ' + priceBuild27[1] + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild27[2] + '<span class="icon Crystal inlineIcon"></span>)'; }
            else if (villageStage == 28) { buttonBuild.innerHTML = displayLabelBuild28 + '<br>(' + currencySymbol + formatterCurrent.format(priceBuild28[0]) + ' + ' + priceBuild28[1] + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild28[2] + '<span class="icon IngotBronze inlineIcon"></span> + ' + priceBuild28[3] + '<span class="icon Gems inlineIcon"></span>)'; }

            else if (villageStage == 100) {
                let stringyStringerson = displayLabelBuild100;
                stringyStringerson += '<br>';
                stringyStringerson += '(';
                stringyStringerson += currencySymbol + formatterCurrent.format(priceBuild100[0]);
                stringyStringerson += ' + ';
                stringyStringerson += formatterCurrent.format(priceBuild100[4]) + '<span class="icon Board inlineIcon"></span>';
                stringyStringerson += ' + ';
                stringyStringerson += formatterCurrent.format(priceBuild100[5]) + '<span class="icon Stone inlineIcon"></span>';
                stringyStringerson += ' + ';
                stringyStringerson += priceBuild100[3] + '<span class="icon IngotBronze inlineIcon"></span>';
                stringyStringerson += '<br>';
                stringyStringerson += '+ ';
                stringyStringerson += formatterCurrent.format(priceBuild100[6]) + '<span class="icon Crystal inlineIcon"></span>';
                stringyStringerson += ' + ';
                stringyStringerson += priceBuild100[7] + '<span class="icon Gems inlineIcon"></span>';
                stringyStringerson += ' + ';
                stringyStringerson += priceBuild100[1] + '<span class="icon Mala inlineIcon"></span>';
                stringyStringerson += ' + ';
                stringyStringerson += priceBuild100[2] + '<span class="icon Scroll inlineIcon"></span>';
                stringyStringerson += ')';
                stringyStringerson += buttonBuild.innerHTML = stringyStringerson;
            }
        }

        // ORACLE BUTTON -----------------------
        buttonVisitOracle.innerHTML = displayLabelOracle + ' <span class="icon Oracle inlineIcon"></span>';

        // MARKET BUTTONS ----------------------
        if (player.canSell) {
            const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);

            const buyWheatCost = currentBushelPrice * 2;
            let tempCommodityIcon = 'WheatDisable';
            let tempSellIcon = 'SellDisable';
            buttonBuyWheat.classList.add('disabled');
            if (asCount >= buyWheatCost) {
                tempCommodityIcon = 'Wheat';
                tempSellIcon = 'Sell';
                buttonBuyWheat.classList.remove('disabled');
            }
            buttonBuyWheat.innerHTML = currencySymbol + formatterCurrent.format(buyWheatCost) + '&nbsp;' + '<span class="icon ' + tempSellIcon + ' inlineIcon"></span>' + '&nbsp;' + formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span>';

            tempCommodityIcon = 'WheatDisable';
            tempSellIcon = 'SellDisable';
            buttonSellWheat.classList.add('disabled');
            if (bushelCount[0] > commodityBulkCount) {
                tempCommodityIcon = 'Wheat';
                tempSellIcon = 'Sell';
                buttonSellWheat.classList.remove('disabled');
            }
            buttonSellWheat.innerHTML = formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(currentBushelPrice);

            tempCommodityIcon = 'BarleyDisable';
            tempSellIcon = 'SellDisable';
            buttonBuyBarley.classList.add('disabled');
            let adjustedPrice = (currentBushelPrice - currentBarleyAdjustment);
            if (asCount >= adjustedPrice) {
                tempCommodityIcon = 'Barley';
                tempSellIcon = 'Sell';
                buttonBuyBarley.classList.remove('disabled');
            }
            buttonBuyBarley.innerHTML = currencySymbol + formatterCurrent.format(adjustedPrice) + ' <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span>';

            tempCommodityIcon = 'BarleyDisable';
            tempSellIcon = 'SellDisable';
            buttonSellBarley.classList.add('disabled');
            if (bushelCount[1] > commodityBulkCount) {
                tempCommodityIcon = 'Barley';
                tempSellIcon = 'Sell';
                buttonSellBarley.classList.remove('disabled');
            }
            adjustedPrice = Math.floor((currentBushelPrice - currentBarleyAdjustment) / 2);
            buttonSellBarley.innerHTML = formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(adjustedPrice);

            tempCommodityIcon = 'FlaxDisable';
            tempSellIcon = 'SellDisable';
            buttonSellFlax.classList.add('disabled');
            if (bushelCount[7] > commodityBulkCount) {
                tempCommodityIcon = 'Flax';
                tempSellIcon = 'Sell';
                buttonSellFlax.classList.remove('disabled');
            }
            buttonSellFlax.innerHTML = formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(adjustedPrice);

            const currentLogBulkCost = commodityBulkCount * valueInWheat1Log * currentDollarPriceOfOneWheat;
            tempCommodityIcon = 'LogsDisable';
            tempSellIcon = 'SellDisable';
            buttonBuyLogs.classList.add('disabled');
            if (asCount >= currentLogBulkCost) {
                tempCommodityIcon = 'Log';
                tempSellIcon = 'Sell';
                buttonBuyLogs.classList.remove('disabled');
            }
            buttonBuyLogs.innerHTML = currencySymbol + formatterCurrent.format(currentLogBulkCost) + ' <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span>';

            tempCommodityIcon = 'LogsDisable';
            tempSellIcon = 'SellDisable';
            buttonSellLogs.classList.add('disabled');
            if (logsCount > commodityBulkCount) {
                tempCommodityIcon = 'Log';
                tempSellIcon = 'Sell';
                buttonSellLogs.classList.remove('disabled');
            }
            adjustedPrice = Math.floor(currentLogBulkCost / 2);
            buttonSellLogs.innerHTML = formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(adjustedPrice);

            const currentBoardBulkCost = commodityBulkCount * valueInWheat1Board * currentDollarPriceOfOneWheat;
            tempCommodityIcon = 'BoardsDisable';
            tempSellIcon = 'SellDisable';
            buttonBuyBoards.classList.add('disabled');
            if (asCount >= currentBoardBulkCost) {
                tempCommodityIcon = 'Board';
                tempSellIcon = 'Sell';
                buttonBuyBoards.classList.remove('disabled');
            }
            buttonBuyBoards.innerHTML = currencySymbol + formatterCurrent.format(currentBoardBulkCost) + ' <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span>';

            tempCommodityIcon = 'BoardsDisable';
            tempSellIcon = 'SellDisable';
            buttonSellBoards.classList.add('disabled');
            if (boardsCount >= commodityBulkCount) {
                tempCommodityIcon = 'Board';
                tempSellIcon = 'Sell';
                buttonSellBoards.classList.remove('disabled');
            }
            adjustedPrice = Math.floor(currentBoardBulkCost / 2);
            buttonSellBoards.innerHTML = formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(adjustedPrice);

            const currentStoneBulkCost = commodityBulkCount * valueInWheat1Stone * currentDollarPriceOfOneWheat;
            tempCommodityIcon = 'StoneDisable';
            tempSellIcon = 'SellDisable';
            buttonBuyStone.classList.add('disabled');
            if (asCount >= currentStoneBulkCost) {
                tempCommodityIcon = 'Stone';
                tempSellIcon = 'Sell';
                buttonBuyStone.classList.remove('disabled');
            }
            buttonBuyStone.innerHTML = currencySymbol + formatterCurrent.format(currentStoneBulkCost) + ' <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span>';

            tempCommodityIcon = 'StoneDisable';
            tempSellIcon = 'SellDisable';
            buttonSellStone.classList.add('disabled');
            if (stoneCount >= commodityBulkCount) {
                tempCommodityIcon = 'Stone';
                tempSellIcon = 'Sell';
                buttonSellStone.classList.remove('disabled');
            }
            adjustedPrice = Math.floor(currentStoneBulkCost / 2);
            buttonSellStone.innerHTML = formatterCurrent.format(commodityBulkCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(adjustedPrice);

            const currentHorseBulkCost = commodityHorseCount * commodityHorsePrice * currentDollarPriceOfOneWheat;
            tempCommodityIcon = 'HorseyDisable';
            tempSellIcon = 'SellDisable';
            buttonBuyHorses.classList.add('disabled');
            if (asCount >= currentHorseBulkCost) {
                tempCommodityIcon = 'Horsey';
                tempSellIcon = 'Sell';
                buttonBuyHorses.classList.remove('disabled');
            }
            buttonBuyHorses.innerHTML = currencySymbol + formatterCurrent.format(currentHorseBulkCost) + ' <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + formatterCurrent.format(commodityHorseCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span>';

            tempCommodityIcon = 'HorseyDisable';
            tempSellIcon = 'SellDisable';
            buttonSellHorses.classList.add('disabled');
            if (horsesCount >= commodityHorseCount) {
                tempCommodityIcon = 'Horsey';
                tempSellIcon = 'Sell';
                buttonSellHorses.classList.remove('disabled');
            }
            adjustedPrice = Math.floor(currentHorseBulkCost / 2);
            buttonSellHorses.innerHTML = formatterCurrent.format(commodityHorseCount) + '<span class="icon ' + tempCommodityIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(adjustedPrice);
        }
    }

    else if (player.isAt == 'Port') {
        buttonGoToTownshipFromPort.innerHTML = displayGoToTownshipFromPort;

        divPortName.innerHTML = displayPortName;
        divPortSubtitle.innerHTML = displayPortSubtitle;

        if (!player.canExport) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort0) + ' + ' + '<span class="icon Amphora inlineIcon"></span>' + ')'; }
        else if (player.canExport && !player.canExportBeer) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort1) + ' + ' + '<span class="icon Keg inlineIcon"></span>' + ')'; }
        else if (player.canExport && !player.canExportWine) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort2) + ' + ' + '<span class="icon Cask inlineIcon"></span>' + ')'; }
        else if (player.canExport && !player.canExportSyrup) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort3) + ' + ' + '<span class="icon Honeypot inlineIcon"></span>' + ')'; }
        else if (player.canExport && !player.canExportJuice) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort4) + ' + ' + '<span class="icon Jug inlineIcon"></span>' + ')'; }
        else if (player.canExport && !player.canExportFigs) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort5) + ' + ' + '<span class="icon Basket inlineIcon"></span>' + ')'; }
        else if (player.canExport && !player.canExportTrinkets) { buttonEstablishTradeRoute.innerHTML = displayLabelTradeRoute + '<br>(' + currencySymbol + formatterCurrent.format(pricePort6) + ' + ' + '<span class="icon Trinket inlineIcon"></span>' + ')'; }

        if (!player.canImportTin) { buttonImportTin.innerHTML = displayLabelImportTin + '<br>(<span class="icon Decree inlineIcon"></span>' + ' + ' + '<span class="icon MoneyTemple inlineIcon"></span>' + ' + ' + currencySymbol + formatterCurrent.format(importCost[0]) + '<span class="warehouseTotal">/' + displayVoyage + '</span>)'; }
        else { buttonImportTin.innerHTML = displayLabelImportSalt + '<br>(' + currencySymbol + formatterCurrent.format(importCost[1]) + '<span class="warehouseTotal">/' + displayVoyage + '</span>)'; }

        if (player.canExport) {
            let tableString = null;
            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayActiveRoutes;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td style="padding: 3.2vw;">';
            const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);
            let currentDollarValueOfUnit = null;
            let bounty = null;
            let colourIncrement = null;
            let greenValue = null;
            let greenString = null;
            let redValue = null;
            let redString = null;
            let calculatedValue = null;
            let shownCountdown = null;
            if (player.canExportOil) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperOil">';
                tableString += '<table id="tableTradeRouteOil">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayOil;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                currentDollarValueOfUnit = valueFactor[0] * (wheatValuePerUnit[0] * currentDollarPriceOfOneWheat);
                bounty = currentDollarValueOfUnit * residenceInStockCount[1];
                tableString += formatterCurrent.format(residenceInStockCount[1]) + '<span class="icon Amphora inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayAthens;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[0] + ' ' + displayMonths;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[1]) + '<span class="icon Amphora inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[0]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_athens.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[0]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[0]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[0];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[0];
                if (shipmentTimersCurrent[0] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canExportBeer) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperBeer">';
                tableString += '<table id="tableTradeRouteBeer">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayBeer;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                currentDollarValueOfUnit = valueFactor[1] * (wheatValuePerUnit[1] * currentDollarPriceOfOneWheat);
                bounty = currentDollarValueOfUnit * residenceInStockCount[2];
                tableString += formatterCurrent.format(residenceInStockCount[2]) + '<span class="icon Keg inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayDamascus;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[1] + ' ' + displayMonth;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[2]) + '<span class="icon Keg inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[1]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_damascus.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[1]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[1]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[1];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[1];
                if (shipmentTimersCurrent[1] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canExportWine) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperWine">';
                tableString += '<table id="tableTradeRouteWine">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayWine;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                currentDollarValueOfUnit = valueFactor[2] * (wheatValuePerUnit[2] * currentDollarPriceOfOneWheat);
                bounty = currentDollarValueOfUnit * residenceInStockCount[3];
                tableString += formatterCurrent.format(residenceInStockCount[3]) + '<span class="icon Cask inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayRhodes;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[2] + ' ' + displayMonths;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[3]) + '<span class="icon Cask inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[2]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_rhodes.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[2]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[2]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[2];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[2];
                if (shipmentTimersCurrent[2] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canExportSyrup) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperSyrup">';
                tableString += '<table id="tableTradeRouteSyrup">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displaySyrup;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                currentDollarValueOfUnit = valueFactor[3] * (wheatValuePerUnit[3] * currentDollarPriceOfOneWheat);
                bounty = currentDollarValueOfUnit * residenceInStockCount[4];
                tableString += formatterCurrent.format(residenceInStockCount[4]) + '<span class="icon Honeypot inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayAlexandria;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[3] + ' ' + displayMonths;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[4]) + '<span class="icon Honeypot inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[3]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_alexandria.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[3]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[3]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[3];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[3];
                if (shipmentTimersCurrent[3] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canExportJuice) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperJuice">';
                tableString += '<table id="tableTradeRouteJuice">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayJuice;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                currentDollarValueOfUnit = valueFactor[4] * (wheatValuePerUnit[4] * currentDollarPriceOfOneWheat);
                bounty = currentDollarValueOfUnit * residenceInStockCount[5];
                tableString += formatterCurrent.format(residenceInStockCount[5]) + '<span class="icon Jug inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayJerusalem;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[4] + ' ' + displayWeeks;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[5]) + '<span class="icon Jug inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[4]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_jerusalem.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[4]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[4]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[4];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[4];
                if (shipmentTimersCurrent[4] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canExportFigs) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperFigs">';
                tableString += '<table id="tableTradeRouteFigs">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayDriedFigs;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                currentDollarValueOfUnit = valueFactor[5] * (wheatValuePerUnit[5] * currentDollarPriceOfOneWheat);
                bounty = currentDollarValueOfUnit * residenceInStockCount[6];
                tableString += formatterCurrent.format(residenceInStockCount[6]) + '<span class="icon Basket inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayMemphis;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[5] + ' ' + displayMonths;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[6]) + '<span class="icon Basket inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[5]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_memphis.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[5]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[5]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[5];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[5];
                if (shipmentTimersCurrent[5] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canExportTrinkets) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperTrinkets">';
                tableString += '<table id="tableTradeRouteTrinkets">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayTrinkets;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                bounty = residenceInStockCount[7] * trinketValue;
                tableString += formatterCurrent.format(residenceInStockCount[7]) + '<span class="icon Trinket inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + currencySymbol + formatterCurrent.format(bounty);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDestination;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayRome;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[6] + ' ' + displayYear;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayShipped + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceShippedCount[7]) + '<span class="icon Trinket inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayProfit;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentProfits[6]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_rome.png" width="66" height="66" />';
                colourIncrement = Math.floor(99 / shipmentTimersDefault[6]);
                greenValue = 99 - (colourIncrement * shipmentTimersCurrent[6]);
                greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                redValue = colourIncrement * shipmentTimersCurrent[6];
                redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                shownCountdown = '' + shipmentTimersCurrent[6];
                if (shipmentTimersCurrent[6] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableExports.innerHTML = tableString;
        }

        if (player.canImport) {
            let tableString = null;
            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayActiveLanes;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td style="padding: 3.2vw;">';
            if (player.canImportTin) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperTin">';
                tableString += '<table id="tableTradeRouteTin">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displayTin;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(importCost[0]) + ' <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(importAmount[0]) + '<span class="icon IngotTin inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displaySource;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayTartessos;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[7] + ' ' + displayMonths;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayImported + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(mountainPurchasedCount[3]) + '<span class="icon IngotTin inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayCost;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentCosts[0]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_tartessos.png" width="66" height="66" />';
                let colourIncrement = Math.floor(99 / shipmentTimersDefault[7]);
                let greenValue = 99 - (colourIncrement * shipmentTimersCurrent[7]);
                let greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                let redValue = colourIncrement * shipmentTimersCurrent[7];
                let redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                let calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                let shownCountdown = '' + shipmentTimersCurrent[7];
                if (shipmentTimersCurrent[7] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            if (player.canImportSalt) {
                tableString += '<div class="divTradeRouteWrapper" id="divTradeRouteWrapperSalt">';
                tableString += '<table id="tableTradeRouteSalt">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="2">';
                tableString += displaySalt;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayContract;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(importCost[1]) + ' <span class="icon Sell inlineIcon"></span> ' + formatterCurrent.format(importAmount[1]) + '<span class="icon Sal inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displaySource;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += displayCyprus;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayDuration;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += shipmentDuration[8] + ' ' + displayMonths;
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayImported + ':';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceIngredientConsumedCount[14][1]) + '<span class="icon Sal inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayCost;
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += currencySymbol + formatterCurrent.format(shipmentCosts[1]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '</tbody>';
                tableString += '</table>';
                tableString += '<div class="divDeliveryColumnWrapper">';
                tableString += '<img src="bitmaps/route_cyprus.png" width="66" height="66" />';
                let colourIncrement = Math.floor(99 / shipmentTimersDefault[8]);
                let greenValue = 99 - (colourIncrement * shipmentTimersCurrent[8]);
                let greenString = '' + greenValue;
                if (greenValue < 10) { greenString = '0' + greenString; }
                let redValue = colourIncrement * shipmentTimersCurrent[8];
                let redString = '' + redValue;
                if (redValue < 10) { redString = '0' + redString; }
                let calculatedValue = '' + redString + greenString + '00';
                tableString += '<div class="divDeliveryTimerBox" style="background-color: #' + calculatedValue + ';">';
                tableString += displayNextDelivery;
                tableString += '<div class="divDeliveryTimerBoxLiner">';
                let shownCountdown = '' + shipmentTimersCurrent[8];
                if (shipmentTimersCurrent[8] < 10) { shownCountdown = 0 + shownCountdown; }
                tableString += shownCountdown + ' ' + displayWeek + '(s)';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
                tableString += '</div>';
            }
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableImports.innerHTML = tableString;
        }

        buttonSailWest.innerHTML = displayLabelSailWest + ' ' + '<span class="icon Ship inlineIcon"></span>';
    }

    else if (player.isAt == 'Residence') {
        buttonGoToPraediumFromRes.innerHTML = displayGoToPraediumFromRes;
        buttonWasteTime.innerHTML = displayLabelWasteTime;

        if (residenceStage == 0) { buttonImproveResidence.innerHTML = displayLabelResidence00 + '<br>' + '(' + priceResidence00 + '<span class="icon Wheat inlineIcon"></span>' + ')'; }
        else if (residenceStage == 1) { buttonImproveResidence.innerHTML = displayLabelResidence01 + '<br>' + '(' + priceResidence01[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence01[1] + '<span class="icon Log inlineIcon"></span>' + ')'; }
        else if (residenceStage == 2) { buttonImproveResidence.innerHTML = displayLabelResidence02 + '<br>' + '(' + priceResidence02[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence02[1] + '<span class="icon Board inlineIcon"></span>' + ')'; }
        else if (residenceStage == 3) { buttonImproveResidence.innerHTML = displayLabelResidence03 + '<br>' + '(' + priceResidence03[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence03[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence03[2] + '<span class="icon Board inlineIcon"></span>' + ')'; }
        else if (residenceStage == 4) { buttonImproveResidence.innerHTML = displayLabelResidence04 + '<br>' + '(' + priceResidence04[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence04[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence04[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence04[3] + '<span class="icon Olive inlineIcon"></span>' + ')'; }
        else if (residenceStage == 5) { buttonImproveResidence.innerHTML = displayLabelResidence05 + '<br>' + '(' + priceResidence05[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence05[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence05[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence05[3] + '<span class="icon IngotCopper inlineIcon"></span>' + ')'; }
        else if (residenceStage == 6) { buttonImproveResidence.innerHTML = displayLabelResidence06 + '<br>' + '(' + priceResidence06[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence06[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence06[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence06[3] + '<span class="icon Barley inlineIcon"></span>' + ')'; }
        else if (residenceStage == 7) { buttonImproveResidence.innerHTML = displayLabelResidence07 + '<br>' + '(' + priceResidence07[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence07[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence07[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence07[3] + '<span class="icon Grape inlineIcon"></span>' + ')'; }
        else if (residenceStage == 8) { buttonImproveResidence.innerHTML = displayLabelResidence08 + '<br>' + '(' + priceResidence08[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence08[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence08[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence08[3] + '<span class="icon Date inlineIcon"></span>' + ')'; }
        else if (residenceStage == 9) { buttonImproveResidence.innerHTML = displayLabelResidence09 + '<br>' + '(' + priceResidence09[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence09[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence09[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence09[3] + '<span class="icon Pom inlineIcon"></span>' + ')'; }
        else if (residenceStage == 10) { buttonImproveResidence.innerHTML = displayLabelResidence10 + '<br>' + '(' + priceResidence10[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence10[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence10[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence10[3] + '<span class="icon Fig inlineIcon"></span>' + ')'; }
        else if (residenceStage == 11) { buttonImproveResidence.innerHTML = displayLabelResidence11 + '<br>' + '(' + priceResidence11[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence11[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence11[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence11[3] + '<span class="icon IngotCopper inlineIcon"></span>' + ')'; }
        else if (residenceStage == 12) { buttonImproveResidence.innerHTML = displayLabelResidence12 + '<br>' + '(' + priceResidence12[0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + priceResidence12[1] + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence12[2] + '<span class="icon Board inlineIcon"></span>' + ' + ' + priceResidence12[3] + '<span class="icon IngotTin inlineIcon"></span>' + ')'; }
        else if (residenceStage == 13) { buttonImproveResidence.innerHTML = displayLabelResidence13 + '<br>' + '(' + currencySymbol + formatterCurrent.format(priceResidence13[0]) + ' + ' + formatterCurrent.format(priceResidence13[2]) + '<span class="icon Board inlineIcon"></span>' + ' + ' + formatterCurrent.format(priceResidence13[1]) + '<span class="icon Stone inlineIcon"></span>' + ' + ' + priceResidence13[4] + '<span class="icon Crystal inlineIcon"></span>' + ' + ' + priceResidence13[3] + '<span class="icon IngotBronze inlineIcon"></span>' + ' + ' + priceResidence13[5] + '<span class="icon Gems inlineIcon"></span>' + ')'; }
        else if (residenceStage == 14) { buttonImproveResidence.innerHTML = displayLabelResidence14 + '<br>' + '(' + currencySymbol + formatterCurrent.format(priceResidence14[0]) + ')'; }
        else if (residenceStage == 15) { buttonImproveResidence.innerHTML = displayLabelResidence15 + ' <span class="icon RaisinsLoose inlineIcon"></span>'; }
        else if (residenceStage == 16) { buttonImproveResidence.innerHTML = displayLabelResidence16 + '<br>' + '(' + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + '<span class="icon Sal inlineIcon"></span>' + ')'; }
        else if (residenceStage == 17) { buttonImproveResidence.innerHTML = displayLabelResidence17 + '<br>' + '(' + '<span class="icon Comb inlineIcon"></span>' + ' + ' + '<span class="icon Raisins inlineIcon"></span>' + ' + ' + '<span class="icon LembasBread inlineIcon"></span>' + ')'; }
        else if (residenceStage == 18) { buttonImproveResidence.innerHTML = displayLabelResidence18 + '<br>' + '(' + currencySymbol + formatterCurrent.format(priceResidence18[0]) + ' + ' + priceResidence18[1] + '<span class="icon Flax inlineIcon"></span>' + ')'; }
        else if (residenceStage == 19) { buttonImproveResidence.innerHTML = displayLabelResidence19 + '<br>' + '(' + '<span class="icon Linen inlineIcon"></span>' + ' + ' + '<span class="icon RedCross inlineIcon"></span>' + ')'; }

        if (residenceStage > 2) {
            let tableString = '<thead id="theadResidenceInventory"><tr><td colspan="2">' + displayInStock + '</td></tr></thead>';
            tableString += '<tbody id="tbodyResidenceInventory">';
            tableString += '<tr>'
            tableString += '<td>';
            tableString += displayLoaves;
            tableString += '&nbsp;<span class="icon Loaves inlineIcon"></span>:';
            tableString += '</td>';
            tableString += '<td class="rightPadColumn">';
            tableString += formatterCurrent.format(residenceInStockCount[0]);
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHardtack) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayHardtack;
                tableString += '&nbsp;<span class="icon LembasBread inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[14]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasRations) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayRations;
                tableString += '&nbsp;<span class="icon Ration inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[11]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasCottage) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayLinen;
                tableString += '&nbsp;<span class="icon Linen inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[12]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasBandages) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayBandages;
                tableString += '&nbsp;<span class="icon Bandage inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[13]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasOliveMill) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayOil;
                tableString += '&nbsp;<span class="icon Amphora inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[1]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasBrewery) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayBeer;
                tableString += '&nbsp;<span class="icon Keg inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[2]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasWinery) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayWine;
                tableString += '&nbsp;<span class="icon Cask inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[3]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasKitchen) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displaySyrup;
                tableString += '&nbsp;<span class="icon Honeypot inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[4]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasPress) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayJuice;
                tableString += '&nbsp;<span class="icon Jug inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[5]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasApiary) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayComb;
                tableString += '&nbsp;<span class="icon Comb inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[9]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasGreenhouse) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayDriedFigs;
                tableString += '&nbsp;<span class="icon Basket inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[6]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasRaisins) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayRaisins;
                tableString += '&nbsp;<span class="icon Raisins inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[10]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.canImportSalt) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displaySalt;
                tableString += '&nbsp;<span class="icon Sal inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceIngredientInStockCount[14][1]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasAtelier) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayTrinkets;
                tableString += '&nbsp;<span class="icon Trinket inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[7]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasHiredGemcutters) {
                tableString += '<tr>'
                tableString += '<td>';
                tableString += displayGems;
                tableString += '&nbsp;<span class="icon Gems inlineIcon"></span>:';
                tableString += '</td>';
                tableString += '<td class="rightPadColumn">';
                tableString += formatterCurrent.format(residenceInStockCount[8]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableResidenceInventory.innerHTML = tableString;

            tableString = '<thead id="theadResidenceReport">';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayGood;
            tableString += '</td>';
            tableString += '<td>';
            tableString += displayUnits + '<br>' + displayProduced;
            if (player.canImportSalt) { tableString += '/' + displayImported; }
            tableString += '</td>';
            tableString += '<td>';
            tableString += displayUnits + '<br>' + displaySpent;
            tableString += '</td>';
            if (player.canExport) {
                tableString += '<td>';
                tableString += displayUnits + '<br>' + displayShipped;
                tableString += '</td>';
            }
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody id="tbodyResidenceInventory">';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Loaves"></span>';
            tableString += '</td>';
            tableString += '<td>';
            tableString += formatterCurrent.format(residenceProducedCount[0]);
            tableString += '</td>';
            tableString += '<td>';
            tableString += formatterCurrent.format(residenceSpentCount[0]);
            tableString += '</td>';
            if (player.canExport) {
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceShippedCount[0]);
                tableString += '</td>';
            }
            tableString += '</tr>';
            if (player.hasHardtack) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon LembasBread"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[14]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[14]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceShippedCount[14]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasRations) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Ration"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[11]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[11]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceShippedCount[11]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasCottage) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Linen"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[12]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[12]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceShippedCount[12]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasBandages) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Bandage"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[13]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[13]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceShippedCount[13]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasOliveMill) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Amphora"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[1]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[1]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[1]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasBrewery) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Keg"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[2]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[2]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[2]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasWinery) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Cask"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[3]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[3]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[3]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasKitchen) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Honeypot"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[4]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[4]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[4]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasPress) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Jug"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[5]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[5]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[5]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasApiary) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Comb"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[9]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[9]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[9]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasGreenhouse) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Basket"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[6]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[6]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[6]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasRaisins) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Raisins"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[10]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[10]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[10]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.canImportSalt) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Sal"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceIngredientConsumedCount[14][1]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(saltSpent);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(saltShipped);
                tableString += '</td>';
                tableString += '</tr>';
            }
            if (player.hasAtelier) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Trinket"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[7]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[7]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[7]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            if (player.hasHiredGemcutters) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Gems"></span>';
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceProducedCount[8]);
                tableString += '</td>';
                tableString += '<td>';
                tableString += formatterCurrent.format(residenceSpentCount[8]);
                tableString += '</td>';
                if (player.canExport) {
                    tableString += '<td>';
                    tableString += formatterCurrent.format(residenceShippedCount[8]);
                    tableString += '</td>';
                }
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableResidenceReport.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayBakery;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            let shownPortion = residenceIngredientWorkshopPortion[0];
            if (player.hasHardtack) { shownPortion += residenceIngredientWorkshopPortion[14][0]; }
            tableString += displayConsumes + ' ' + (shownPortion * 100) + '% <span class="workshopHarvestGrainDecal"></span><span class="icon Wheat inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHardtack) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[14][1] * 100) + '% <span class="workshopHarvestMetalDecal"></span><span class="icon Sal inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[0] + '<span class="icon Wheat inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[0] + '<span class="icon Loaves inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHardtack) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += residenceIngredientsIn[14][0] + '<span class="icon Wheat inlineIcon"></span>' + ' + ' + residenceIngredientsIn[14][1] + '<span class="icon Sal inlineIcon"></span>' + ' <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[14] + '<span class="icon LembasBread inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            shownPortion = residenceIngredientConsumedCount[0];
            if (player.hasHardtack) { shownPortion += residenceIngredientConsumedCount[14][0]; }
            tableString += '<span class="icon Wheat inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(shownPortion);
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHardtack) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Sal inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(saltSpent);
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableWorkshopBakery.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayOliveMill;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[1] * 100) + '% <span class="workshopHarvestFruitDecal"></span><span class="icon Olive inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[1] + '<span class="icon Olive inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[1] + '<span class="icon Amphora inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Olive inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[1]);
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableWorkshopOliveMill.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayBrewery;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[2] * 100) + '% <span class="workshopHarvestGrainDecal"></span><span class="icon Barley inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[2] + '<span class="icon Barley inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[2] + '<span class="icon Keg inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Barley inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[2]);
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableWorkshopBrewery.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayWinery;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[3] * 100) + '% <span class="workshopHarvestFruitDecal"></span><span class="icon Grape inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[3] + '<span class="icon Grape inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[3] + '<span class="icon Cask inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Grape inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[3]);
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableWorkshopWinery.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayKitchen;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[4] * 100) + '% <span class="workshopHarvestFruitDecal"></span><span class="icon Date inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasRations) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[11] * 100) + '% <span class="icon Comb inlineIcon"></span><span class="icon Raisins inlineIcon"></span><span class="icon LembasBread inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[4] + '<span class="icon Date inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[4] + '<span class="icon Honeypot inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasRations) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += residenceIngredientsIn[11][0] + '<span class="icon Comb inlineIcon"></span> + ' + residenceIngredientsIn[11][1] + '<span class="icon Raisins inlineIcon"></span> + ' + residenceIngredientsIn[11][2] + '<span class="icon LembasBread inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[11] + '<span class="icon Ration inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Date inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[4]);
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasRations) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Comb inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceSpentCount[9]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Raisins inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceSpentCount[10]);
                tableString += '</td>';
                tableString += '</tr>';
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon LembasBread inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceSpentCount[14]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableWorkshopKitchen.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayPress;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[5] * 100) + '% <span class="workshopHarvestFruitDecal"></span><span class="icon Pom inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[5] + '<span class="icon Pom inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[5] + '<span class="icon Jug inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Pom inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[5]);
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableWorkshopPress.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayGreenhouse;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[6] * 100) + '% <span class="workshopHarvestFruitDecal"></span><span class="icon Fig inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasRaisins) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[10] * 100) + '% <span class="workshopHarvestFruitDecal"></span><span class="icon Grape inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[6] + '<span class="icon Fig inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[6] + '<span class="icon Basket inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasRaisins) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += residenceIngredientsIn[10] + '<span class="icon Grape inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[10] + '<span class="icon Raisins inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Fig inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[6]);
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasRaisins) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Grape inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[10]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableWorkshopGreenhouse.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayAtelier;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[7] * 100) + '% <span class="workshopHarvestMetalDecal"></span><span class="icon IngotTin inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHiredGemcutters) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[8] * 100) + '% <span class="workshopHarvestDigDecal"></span><span class="icon Crystal inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[7] + '<span class="icon IngotTin inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[7] + '<span class="icon Trinket inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHiredGemcutters) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += residenceIngredientsIn[8] + '<span class="icon Crystal inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[8] + '<span class="icon Gems inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon IngotTin inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[7]);
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasHiredGemcutters) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Crystal inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[8]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableWorkshopAtelier.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayApiary;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[9] * 100) + '% <span class="icon Honeypot inlineIcon"></span><span class="icon Jug inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[9] + '<span class="icon Honeypot inlineIcon"></span> + ' + residenceIngredientsIn[9] + '<span class="icon Jug inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[9] + '<span class="icon Comb inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Honeypot inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[9][0]);
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Jug inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[9][1]);
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</tbody>';
            tableWorkshopApiary.innerHTML = tableString;

            tableString = '<thead>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayCottage;
            tableString += '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>';
            tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[12] * 100) + '% <span class="workshopHarvestGrainDecal"></span><span class="icon Flax inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasBandages) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += displayConsumes + ' ' + (residenceIngredientWorkshopPortion[13] * 100) + '% <span class="icon Linen inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += residenceIngredientsIn[12] + '<span class="icon Flax inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[12] + '<span class="icon Linen inlineIcon"></span>';
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasBandages) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += residenceIngredientsIn[13] + '<span class="icon Linen inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + residenceProductOut[13] + '<span class="icon Bandage inlineIcon"></span>';
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '<tr>';
            tableString += '<td>';
            tableString += '<span class="icon Flax inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[12]);
            tableString += '</td>';
            tableString += '</tr>';
            if (player.hasBandages) {
                tableString += '<tr>';
                tableString += '<td>';
                tableString += '<span class="icon Linen inlineIcon"></span> ' + displayUsed + ': ' + formatterCurrent.format(residenceIngredientConsumedCount[13]);
                tableString += '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableWorkshopCottage.innerHTML = tableString;
        }
    }

    else if (player.isAt == 'Workshop') {
        divHeirWorkshopForewardHeadline.innerHTML = displayHeirHeadlineForeward;
        buttonHeirBegin.innerHTML = displayLabelHeirBegin;

        divHeirWorkshopNameHeadline.innerHTML = displayHeirHeadlineName;
        if (player.names.length == 3) { buttonHeirChooseName.innerHTML = displayLabelMyNameIs + ' ' + player.names[2].toUpperCase(); }

        divHeirWorkshopGenderHeadline.innerHTML = displayHeirHeadlineGender;
        if (player.gender == 0) {
            divHeirGenderIcon.classList.add('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 1) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.add('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 2) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.add('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 3) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.add('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 4) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.add('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 5) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.add('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 6) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.add('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.remove('HeirGenderIconAgender');
        }
        else if (player.gender == 7) {
            divHeirGenderIcon.classList.remove('HeirGenderIconMale');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemale');
            divHeirGenderIcon.classList.remove('HeirGenderIconMaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconFemaleTrans');
            divHeirGenderIcon.classList.remove('HeirGenderIconIntersex');
            divHeirGenderIcon.classList.remove('HeirGenderIconNobinario');
            divHeirGenderIcon.classList.remove('HeirGenderIconOmnigender');
            divHeirGenderIcon.classList.add('HeirGenderIconAgender');
        }
        buttonHeirChooseGender.innerHTML = displayGender[player.gender];

        divHeirWorkshopEthnicityHeadline.innerHTML = displayHeirHeadlineEthnicity;
        buttonHeirChooseEthnicity.innerHTML = displayLabelSoy + ' ' + displayEthnicities[player.ethnicity].toUpperCase();

        divHeirWorkshopTitleHeadline.innerHTML = displayHeirHeadlineTitle;
        buttonHeirChooseTitle.innerHTML = displayLabelReferToMeAs + ' ‘' + displayTitles[player.title].toUpperCase() + '’ ' + displayLabelFromNowOn;

        divHeirWorkshopFacesHeadline.innerHTML = displayHeirHeadlineFaces;
        const arrayFacesDisplaySet = [
            arrayFacesSorted[0],
            arrayFacesSorted[1],
            arrayFacesSorted[2],
            arrayFacesSorted[3],
            arrayFacesSorted[4],
            arrayFacesSorted[5],
            arrayFacesSorted[6],
            arrayFacesSorted[7],
            arrayFacesSorted[8],
        ];
        if (heirFacesPageCurrent == 2) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[9];
            arrayFacesDisplaySet[1] = arrayFacesSorted[10];
            arrayFacesDisplaySet[2] = arrayFacesSorted[11];
            arrayFacesDisplaySet[3] = arrayFacesSorted[12];
            arrayFacesDisplaySet[4] = arrayFacesSorted[13];
            arrayFacesDisplaySet[5] = arrayFacesSorted[14];
            arrayFacesDisplaySet[6] = arrayFacesSorted[15];
            arrayFacesDisplaySet[7] = arrayFacesSorted[16];
            arrayFacesDisplaySet[8] = arrayFacesSorted[17];
        }
        else if (heirFacesPageCurrent == 3) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[18];
            arrayFacesDisplaySet[1] = arrayFacesSorted[19];
            arrayFacesDisplaySet[2] = arrayFacesSorted[20];
            arrayFacesDisplaySet[3] = arrayFacesSorted[21];
            arrayFacesDisplaySet[4] = arrayFacesSorted[22];
            arrayFacesDisplaySet[5] = arrayFacesSorted[23];
            arrayFacesDisplaySet[6] = arrayFacesSorted[24];
            arrayFacesDisplaySet[7] = arrayFacesSorted[25];
            arrayFacesDisplaySet[8] = arrayFacesSorted[26];
        }
        else if (heirFacesPageCurrent == 4) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[27];
            arrayFacesDisplaySet[1] = arrayFacesSorted[28];
            arrayFacesDisplaySet[2] = arrayFacesSorted[29];
            arrayFacesDisplaySet[3] = arrayFacesSorted[30];
            arrayFacesDisplaySet[4] = arrayFacesSorted[31];
            arrayFacesDisplaySet[5] = arrayFacesSorted[32];
            arrayFacesDisplaySet[6] = arrayFacesSorted[33];
            arrayFacesDisplaySet[7] = arrayFacesSorted[34];
            arrayFacesDisplaySet[8] = arrayFacesSorted[35];
        }
        else if (heirFacesPageCurrent == 5) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[36];
            arrayFacesDisplaySet[1] = arrayFacesSorted[37];
            arrayFacesDisplaySet[2] = arrayFacesSorted[38];
            arrayFacesDisplaySet[3] = arrayFacesSorted[39];
            arrayFacesDisplaySet[4] = arrayFacesSorted[40];
            arrayFacesDisplaySet[5] = arrayFacesSorted[41];
            arrayFacesDisplaySet[6] = arrayFacesSorted[42];
            arrayFacesDisplaySet[7] = arrayFacesSorted[43];
            arrayFacesDisplaySet[8] = arrayFacesSorted[44];
        }
        else if (heirFacesPageCurrent == 6) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[45];
            arrayFacesDisplaySet[1] = arrayFacesSorted[46];
            arrayFacesDisplaySet[2] = arrayFacesSorted[47];
            arrayFacesDisplaySet[3] = arrayFacesSorted[48];
            arrayFacesDisplaySet[4] = arrayFacesSorted[49];
            arrayFacesDisplaySet[5] = arrayFacesSorted[50];
            arrayFacesDisplaySet[6] = arrayFacesSorted[51];
            arrayFacesDisplaySet[7] = arrayFacesSorted[52];
            arrayFacesDisplaySet[8] = arrayFacesSorted[53];
        }
        else if (heirFacesPageCurrent == 7) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[54];
            arrayFacesDisplaySet[1] = arrayFacesSorted[55];
            arrayFacesDisplaySet[2] = arrayFacesSorted[56];
            arrayFacesDisplaySet[3] = arrayFacesSorted[57];
            arrayFacesDisplaySet[4] = arrayFacesSorted[58];
            arrayFacesDisplaySet[5] = arrayFacesSorted[59];
            arrayFacesDisplaySet[6] = arrayFacesSorted[60];
            arrayFacesDisplaySet[7] = arrayFacesSorted[61];
            arrayFacesDisplaySet[8] = arrayFacesSorted[62];
        }
        else if (heirFacesPageCurrent == 8) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[63];
            arrayFacesDisplaySet[1] = arrayFacesSorted[64];
            arrayFacesDisplaySet[2] = arrayFacesSorted[65];
            arrayFacesDisplaySet[3] = arrayFacesSorted[66];
            arrayFacesDisplaySet[4] = arrayFacesSorted[67];
            arrayFacesDisplaySet[5] = arrayFacesSorted[68];
            arrayFacesDisplaySet[6] = arrayFacesSorted[69];
            arrayFacesDisplaySet[7] = arrayFacesSorted[70];
            arrayFacesDisplaySet[8] = arrayFacesSorted[71];
        }
        else if (heirFacesPageCurrent == 9) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[72];
            arrayFacesDisplaySet[1] = arrayFacesSorted[73];
            arrayFacesDisplaySet[2] = arrayFacesSorted[74];
            arrayFacesDisplaySet[3] = arrayFacesSorted[75];
            arrayFacesDisplaySet[4] = arrayFacesSorted[76];
            arrayFacesDisplaySet[5] = arrayFacesSorted[77];
            arrayFacesDisplaySet[6] = arrayFacesSorted[78];
            arrayFacesDisplaySet[7] = arrayFacesSorted[79];
            arrayFacesDisplaySet[8] = arrayFacesSorted[80];
        }
        else if (heirFacesPageCurrent == 10) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[81];
            arrayFacesDisplaySet[1] = arrayFacesSorted[82];
            arrayFacesDisplaySet[2] = arrayFacesSorted[83];
            arrayFacesDisplaySet[3] = arrayFacesSorted[84];
            arrayFacesDisplaySet[4] = arrayFacesSorted[85];
            arrayFacesDisplaySet[5] = arrayFacesSorted[86];
            arrayFacesDisplaySet[6] = arrayFacesSorted[87];
            arrayFacesDisplaySet[7] = arrayFacesSorted[88];
            arrayFacesDisplaySet[8] = arrayFacesSorted[89];
        }
        else if (heirFacesPageCurrent == 11) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[90];
            arrayFacesDisplaySet[1] = arrayFacesSorted[91];
            arrayFacesDisplaySet[2] = arrayFacesSorted[92];
            arrayFacesDisplaySet[3] = arrayFacesSorted[93];
            arrayFacesDisplaySet[4] = arrayFacesSorted[94];
            arrayFacesDisplaySet[5] = arrayFacesSorted[95];
            arrayFacesDisplaySet[6] = arrayFacesSorted[96];
            arrayFacesDisplaySet[7] = arrayFacesSorted[97];
            arrayFacesDisplaySet[8] = arrayFacesSorted[98];
        }
        else if (heirFacesPageCurrent == 12) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[99];
            arrayFacesDisplaySet[1] = arrayFacesSorted[100];
            arrayFacesDisplaySet[2] = arrayFacesSorted[101];
            arrayFacesDisplaySet[3] = arrayFacesSorted[102];
            arrayFacesDisplaySet[4] = arrayFacesSorted[103];
            arrayFacesDisplaySet[5] = arrayFacesSorted[104];
            arrayFacesDisplaySet[6] = arrayFacesSorted[105];
            arrayFacesDisplaySet[7] = arrayFacesSorted[106];
            arrayFacesDisplaySet[8] = arrayFacesSorted[107];
        }
        else if (heirFacesPageCurrent == 13) {
            arrayFacesDisplaySet[0] = arrayFacesSorted[108];
            arrayFacesDisplaySet[1] = arrayFacesSorted[109];
            arrayFacesDisplaySet[2] = arrayFacesSorted[110];
            arrayFacesDisplaySet[3] = arrayFacesSorted[111];
            arrayFacesDisplaySet[4] = arrayFacesSorted[112];
            arrayFacesDisplaySet[5] = arrayFacesSorted[113];
            arrayFacesDisplaySet[6] = arrayFacesSorted[114];
            arrayFacesDisplaySet[7] = arrayFacesSorted[115];
            arrayFacesDisplaySet[8] = arrayFacesSorted[116];
        }
        const pixelScale = window.getComputedStyle(buttonHeirChooseFace1).getPropertyValue('--pixel-scale');
        buttonHeirChooseFace1.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[0][1] * pixelScale + 'px -' + arrayFacesDisplaySet[0][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace2.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[1][1] * pixelScale + 'px -' + arrayFacesDisplaySet[1][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace3.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[2][1] * pixelScale + 'px -' + arrayFacesDisplaySet[2][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace4.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[3][1] * pixelScale + 'px -' + arrayFacesDisplaySet[3][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace5.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[4][1] * pixelScale + 'px -' + arrayFacesDisplaySet[4][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace6.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[5][1] * pixelScale + 'px -' + arrayFacesDisplaySet[5][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace7.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[6][1] * pixelScale + 'px -' + arrayFacesDisplaySet[6][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace8.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[7][1] * pixelScale + 'px -' + arrayFacesDisplaySet[7][0] * pixelScale + 'px;"></div>';
        buttonHeirChooseFace9.innerHTML = '<div style="background-position: -' + arrayFacesDisplaySet[8][1] * pixelScale + 'px -' + arrayFacesDisplaySet[8][0] * pixelScale + 'px;"></div>';
        spanHeirFacesPagination.innerHTML = displayHeirPage + ' ' + heirFacesPageCurrent + ' ' + displayHeirOf + ' ' + heirFacesPageTotal;

        if (heirStage == 6) {
            let summaryString = displayThouArt + ':';

            summaryString += '<br>';
            summaryString += '<br>';

            summaryString += '<div id="divHeirSelectedPortrait" style="background-position: -' + (arrayFacesDisplaySet[heirFaceChoice][1] * pixelScale * 3) + 'px -' + (arrayFacesDisplaySet[heirFaceChoice][0] * pixelScale * 3) + 'px;"></div>';

            summaryString += '<br>';

            let genderIcon = '';
            if (player.gender == 0) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconMaleSm"></div>'; }
            else if (player.gender == 1) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconFemaleSm"></div>'; }
            else if (player.gender == 2) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconMaleTransSm"></div>'; }
            else if (player.gender == 3) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconFemaleTransSm"></div>'; }
            else if (player.gender == 4) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconIntersexSm"></div>'; }
            else if (player.gender == 5) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconNobinarioSm"></div>'; }
            else if (player.gender == 6) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconOmnigenderSm"></div>'; }
            else if (player.gender == 7) { genderIcon = '<div id="divHeirSelectedGender" class="HeirGenderIconAgenderSm"></div>'; }
            const ethnicitySansArticle = displayEthnicities[player.ethnicity].toUpperCase().split(" ")[1];
            summaryString += ' ' + displayTitles[player.title].toUpperCase() + ' ' + player.names[2].toUpperCase() + ' ' + displayDefiniteArticle + ' ' + ethnicitySansArticle.toUpperCase();

            summaryString += '<br>';
            summaryString += '<br>';
            summaryString += '<br>';
            summaryString += '<br>';

            summaryString += displayHeirSummaryCorrect;

            summaryString += '<br>';
            summaryString += '<br>';

            summaryString += '<button id="buttonHeirConfirmAll" onclick="HeirConfirmAll();">';
            summaryString += displayItIsI + displayTitles[player.title].toUpperCase() + ' ' + player.names[2].toUpperCase() + ' ' + displayDefiniteArticle + ' ' + displayFirst;
            summaryString += '</button>';

            divHeirWorkshopSummary.innerHTML = summaryString;
        }

        buttonHeirGoBack.innerHTML = displayLabelReturnToPrevDecision;
    }

    else if (player.isAt == 'Map') {
        buttonMapTargetPrev.innerHTML = displayMapPrevTarget;
        buttonMapTargetNext.innerHTML = displayMapNextTarget;
        const currentProvinceName = mapProvinces[mapTarget][0].toUpperCase();
        divMapTarget.innerHTML = displayMapCurrTarget + '<br><b style="font-size: 4vw;">' + currentProvinceName + '</b>';
        spanDetailsLabel.innerHTML = displayMapDetails;
        buttonMapEcon.innerHTML = displayMapEcon;
        buttonMapMil.innerHTML = displayMapMil;
        buttonMapPol.innerHTML = displayMapPol;
        buttonMapVisitProvince.innerHTML = displayMapVisit + ' ' + currentProvinceName;

        function AddInertDigits(comparedDigits, maxDigits, removeLastCharacter = false) {
            if (comparedDigits < maxDigits) {
                let neededDigitsCount = maxDigits - comparedDigits;
                let divider = ',';
                if (player.speaks == 'Spanish') { divider = '.'; }
                if (neededDigitsCount > 1) {
                    let lilStringGuy = '<span class="inertNumerals">';
                    lilStringGuy += '0' + divider;
                    neededDigitsCount--;
                    while (neededDigitsCount > 0) {
                        let tick = 0;
                        while (neededDigitsCount > 0 && tick < 3) {
                            tick++;
                            neededDigitsCount--;
                            lilStringGuy += '0';
                        }
                        if (neededDigitsCount > 0 || (neededDigitsCount == 0 && tick == 3)) { lilStringGuy += divider; }
                    }
                    if (removeLastCharacter) { lilStringGuy = lilStringGuy.slice(0, -1); }
                    lilStringGuy += '</span>';
                    return lilStringGuy;
                }
                else { return '<span class="inertNumerals">0' + divider + '</span>'; }
            }
            else { return ''; }
        }

        let inventoryFormatter = formatterCurrent;
        if (player.speaks == 'Spanish') { inventoryFormatter = formatterSpanishInventory; }

        if (mapDetailsCurrent == 'econ') {
            divMapDetailsView.classList.add('mapDetailsEconomic');
            divMapDetailsView.classList.remove('mapDetailsMilitary');
            divMapDetailsView.classList.remove('mapDetailsPolitical');
            let contentString = '<span id="spanMapDetailsTitle">' + displayMapDetailsTitleEcon + '</span>';
            contentString += '<div id="divMapDetailsContents">';

            contentString += '<div id="divMapDetailsEconLiquidBar">';
            contentString += '<b>' + displayMapDetailsEconLiquidBar + ': </b>';
            contentString += currencySymbol;
            contentString += AddInertDigits(asCount.toString().length, 13);
            if (asCount == 0) { contentString += '<span class="inertNumerals">'; }
            contentString += inventoryFormatter.format(asCount);
            if (asCount == 0) { contentString += '</span>'; }

            contentString += '</div>';

            const invDigits = 7;
            contentString += '<div id="divMapDetailsMasterInventoryContainer">';
            contentString += '<div style="width: 50%;">';
            contentString += '<b>' + displayNaturalResources + ':</b><br>';

            function ScribeContentString(value, iconString) {
                contentString += (value == 0) ? AddInertDigits(0, invDigits, true) : AddInertDigits(value.toString().length, invDigits);
                contentString += (value == 0) ? '' : inventoryFormatter.format(value);
                contentString += ' <span class="icon ' + iconString + ' inlineIcon"></span><br>';
            }

            if (player.hasHelpedShepherds) {
                ScribeContentString(shepherdsInventory[10], 'Manure');
            }
            ScribeContentString(logsCount, 'Log');
            ScribeContentString(stoneCount, 'Stone');
            ScribeContentString(oreCopperCount, 'OreCopper');
            if (player.hasHelpedMiners) {
                ScribeContentString(minersInventory[10], 'Pyrolusite');
                ScribeContentString(minersInventory[9], 'OreCobalt');
                ScribeContentString(minersInventory[8], 'IngotLead');
            }
            ScribeContentString(ingotsCopperCount, 'IngotCopper');
            if (player.hasHelpedMiners) {
                ScribeContentString(minersInventory[6], 'IngotNickel');
                ScribeContentString(minersInventory[7], 'IngotZinc');
            }
            ScribeContentString(ingotsTinCount, 'IngotTin');
            ScribeContentString(ingotsBronzeCount, 'IngotBronze');
            if (player.hasHelpedMiners) {
                ScribeContentString(minersInventory[5], 'IngotIron');
                ScribeContentString(minersInventory[4], 'IngotSilver');
                ScribeContentString(minersInventory[3], 'IngotGold');
                ScribeContentString(minersInventory[2], 'Bismuth');
            }
            ScribeContentString(crystalsCount, 'Crystal');
            if (player.hasHelpedMiners) {
                ScribeContentString(minersInventory[1], 'Zircon');
                ScribeContentString(minersInventory[0], 'Diamonds');
            }
            ScribeContentString(residenceIngredientInStockCount[14][1], 'Sal');
            ScribeContentString(horsesCount, 'Horsey');

            contentString += '<div style="height: 4vw; width: 4vw;"></div>';
            contentString += '<b>' + displayCrops + ':</b><br>';
            ScribeContentString(bushelCount[0], 'Wheat');
            ScribeContentString(bushelCount[1], 'Barley');
            ScribeContentString(bushelCount[7], 'Flax');
            ScribeContentString(bushelCount[2], 'Olive');
            ScribeContentString(bushelCount[3], 'Date');
            ScribeContentString(bushelCount[4], 'Fig');
            ScribeContentString(bushelCount[5], 'Pom');
            ScribeContentString(bushelCount[6], 'Grape');
            ScribeContentString(residenceInStockCount[9], 'Comb');
            contentString += '</div>';

            contentString += '<div style="width: 50%;">';
            contentString += '<b>' + displayManufacturedProducts + ':</b><br>';
            ScribeContentString(boardsCount, 'Board');
            ScribeContentString(residenceInStockCount[0], 'Loaves');
            ScribeContentString(residenceInStockCount[14], 'LembasBread');
            ScribeContentString(residenceInStockCount[11], 'Ration');
            ScribeContentString(residenceInStockCount[12], 'Linen');
            ScribeContentString(residenceInStockCount[13], 'Bandage');
            ScribeContentString(residenceInStockCount[1], 'Amphora');
            ScribeContentString(residenceInStockCount[2], 'Keg');
            ScribeContentString(residenceInStockCount[3], 'Cask');
            ScribeContentString(residenceInStockCount[4], 'Honeypot');
            ScribeContentString(residenceInStockCount[5], 'Jug');
            ScribeContentString(residenceInStockCount[6], 'Basket');
            ScribeContentString(residenceInStockCount[10], 'Raisins');
            if (player.hasHelpedShepherds) {
                ScribeContentString(shepherdsInventory[8], 'Bones');
                ScribeContentString(shepherdsInventory[6], 'Offal');
                ScribeContentString(shepherdsInventory[9], 'Blood');
                ScribeContentString(shepherdsInventory[1], 'Milk');
                ScribeContentString(shepherdsInventory[2], 'Yoghurt');
                ScribeContentString(shepherdsInventory[3], 'Butter');
                ScribeContentString(shepherdsInventory[4], 'Cheese');
                ScribeContentString(shepherdsInventory[5], 'Mutton');
                ScribeContentString(shepherdsInventory[0], 'Wool');
                ScribeContentString(shepherdsInventory[7], 'LeatherHide');
            }
            ScribeContentString(residenceInStockCount[7], 'Trinket');
            ScribeContentString(residenceInStockCount[8], 'Gems');

            contentString += '<div style="height: 4vw; width: 4vw;"></div>';
            contentString += '<b>' + displaySacredItems + ':</b><br>';
            ScribeContentString(beadsCount, 'Mala');
            ScribeContentString(scrollsCount, 'Scroll');
            ScribeContentString(relicCount, 'Relic');

            contentString += '</div>';
            contentString += '</div>';
            contentString += '</div>';
            divMapDetailsView.innerHTML = contentString;
        }
        else if (mapDetailsCurrent == 'mil') {
            divMapDetailsView.classList.remove('mapDetailsEconomic');
            divMapDetailsView.classList.add('mapDetailsMilitary');
            divMapDetailsView.classList.remove('mapDetailsPolitical');
            let contentString = '<span id="spanMapDetailsTitle">' + displayMapDetailsTitleMil + '</span>';
            contentString += '<div id="divMapDetailsContents">';

            function MilInertGuys(comparedDigits, maxDigits) {
                let tick = maxDigits - comparedDigits;
                let output = '';
                while (tick > 0) {
                    tick--;
                    output += '0';
                }
                return output;
            }

            if (player.hasHelpedMiners) {
                contentString += displayTerritory + ': <b>' + mapProvinces[3][0] + '</b><br>';
                contentString += '<b>' + displayOffense + ':</b> ';
                const minerOffenseScore = priceMiners[2] * militaryCavalryCombatValue;
                if (player.speaks == 'English') { contentString += AddInertDigits(minerOffenseScore.toString().length, 4) + formatterCurrent.format(minerOffenseScore); }
                else { contentString += '<span class="inertNumerals">' + MilInertGuys(minerOffenseScore.toString().length, 4) + '</span>' + formatterCurrent.format(minerOffenseScore); }
    
                contentString += ' <span class="icon Sword inlineIcon"></span>';
                contentString += ' &nbsp;&nbsp;&nbsp; ';
                contentString += '<span class="inertNumerals">' + MilInertGuys(0, 4) + '</span>';
                contentString += ' <span class="icon TaxCollector inlineIcon"></span><br>';
    
                contentString += '<b>' + displayDefense + ':</b> ';
                if (player.speaks == 'English') { contentString += '5,000'; }
                else { contentString += '5000'; }
                contentString += ' <span class="icon Shield inlineIcon"></span>';
                contentString += ' &nbsp;&nbsp;&nbsp; ';
                contentString += '<span class="inertNumerals">' + MilInertGuys(priceMiners[2].toString().length, 4) + '</span>' + priceMiners[2];
                contentString += ' <span class="icon HorseyMounted inlineIcon"></span><br>';
            }

            // home start
            if (player.hasHelpedMiners) {
                contentString += '<br>';
            }
            if (player.hasHelpedMiners || player.hasHelpedShepherds) {
                contentString += displayTerritory + ': <b>' + mapProvinces[0][0] + '</b><br>';
            }
            contentString += '<b>' + displayOffense + ':</b> ';
            const calculatedOffenseScore = (militaryInfantry * militaryInfantryCombatValue) + (militaryCavalryCurrent * militaryCavalryCombatValue);
            if (player.speaks == 'English') {
                contentString += AddInertDigits(calculatedOffenseScore.toString().length, 4);
                if (calculatedOffenseScore == 0) { contentString += '<span class="inertNumerals">'; }
                contentString += formatterCurrent.format(calculatedOffenseScore);
                if (calculatedOffenseScore == 0) { contentString += '</span>'; }
            }
            else {
                contentString += '<span class="inertNumerals">' + MilInertGuys(calculatedOffenseScore.toString().length, 4) + '</span>';
                if (calculatedOffenseScore == 0) { contentString += '<span class="inertNumerals">'; }
                contentString += formatterCurrent.format(calculatedOffenseScore);
                if (calculatedOffenseScore == 0) { contentString += '</span>'; }
            }

            contentString += ' <span class="icon Sword inlineIcon"></span>';
            contentString += ' &nbsp;&nbsp;&nbsp; ';
            contentString += '<span class="inertNumerals">' + MilInertGuys(militaryInfantry.toString().length, 4) + '</span>';
            if (militaryInfantry == 0) { contentString += '<span class="inertNumerals">'; }
            contentString += militaryInfantry;
            if (militaryInfantry == 0) { contentString += '</span>'; }
            contentString += ' <span class="icon TaxCollector inlineIcon"></span><br>';

            contentString += '<b>' + displayDefense + ':</b> ';
            if (player.speaks == 'English') { contentString += '1,000'; }
            else { contentString += '1000'; }
            contentString += ' <span class="icon Shield inlineIcon"></span>';
            contentString += ' &nbsp;&nbsp;&nbsp; ';
            contentString += '<span class="inertNumerals">' + MilInertGuys(militaryCavalryCurrent.toString().length, 4) + '</span>';
            if (militaryCavalryCurrent == 0) { contentString += '<span class="inertNumerals">'; }
            contentString += militaryCavalryCurrent;
            if (militaryCavalryCurrent == 0) { contentString += '</span>'; }
            contentString += ' <span class="icon HorseyMounted inlineIcon"></span><br>';
            // home end

            if (player.hasHelpedShepherds) {
                contentString += '<br>' + displayTerritory + ': <b>' + mapProvinces[1][0] + '</b><br>';
                contentString += '<b>' + displayOffense + ':</b> ';
                const shepherdOffenseScore = priceShepherds * militaryInfantryCombatValue;
                if (player.speaks == 'English') { contentString += AddInertDigits(shepherdOffenseScore.toString().length, 4) + formatterCurrent.format(shepherdOffenseScore); }
                else { contentString += '<span class="inertNumerals">' + MilInertGuys(shepherdOffenseScore.toString().length, 4) + '</span>' + formatterCurrent.format(shepherdOffenseScore); }
    
                contentString += ' <span class="icon Sword inlineIcon"></span>';
                contentString += ' &nbsp;&nbsp;&nbsp; ';
                contentString += '<span class="inertNumerals">' + MilInertGuys(priceShepherds.toString().length, 4) + '</span>' + priceShepherds;
                contentString += ' <span class="icon TaxCollector inlineIcon"></span><br>';
    
                contentString += '<b>' + displayDefense + ':</b> ';
                if (player.speaks == 'English') { contentString += '<span class="inertNumerals">0,0</span>50'; }
                else { contentString += '<span class="inertNumerals">00</span>50'; }
                contentString += ' <span class="icon Shield inlineIcon"></span>';
                contentString += ' &nbsp;&nbsp;&nbsp; ';
                contentString += '<span class="inertNumerals">' + MilInertGuys(0, 4) + '</span>';
                contentString += ' <span class="icon HorseyMounted inlineIcon"></span><br>';
            }

            contentString += '</div>';
            divMapDetailsView.innerHTML = contentString;
        }
        else if (mapDetailsCurrent == 'pol') {
            divMapDetailsView.classList.remove('mapDetailsEconomic');
            divMapDetailsView.classList.remove('mapDetailsMilitary');
            divMapDetailsView.classList.add('mapDetailsPolitical');
            let contentString = '<span id="spanMapDetailsTitle">' + displayMapDetailsTitlePol + '</span>';
            contentString += '<div id="divMapDetailsContents">';
            contentString += '<b>' + displayChampionships.toUpperCase() + ':</b> ';
            contentString += AddInertDigits(trophiesCount.toString().length, 4);
            if (trophiesCount == 0) { contentString += '<span class="inertNumerals">'; }
            contentString += inventoryFormatter.format(trophiesCount);
            if (trophiesCount == 0) { contentString += '</span>'; }
            contentString += ' <span class="icon Trophy inlineIcon"></span><br>';
            contentString += '<br>';
            contentString += '<i>' + displayRelationshipWith + '</i>:<br>';
            contentString += '<br>';
            contentString += '<b>' + mapProvinces[1][0] + ':</b> ';
            contentString += displayRelations[mapProvinces[1][2]];
            contentString += '<br>';
            contentString += '<br>';
            contentString += '<b>' + mapProvinces[2][0] + ':</b> ';
            contentString += displayRelations[mapProvinces[2][2]];
            contentString += '<br>';
            contentString += '<br>';
            contentString += '<b>' + mapProvinces[3][0] + ':</b> ';
            contentString += displayRelations[mapProvinces[3][2]];
            contentString += '</div>';
            divMapDetailsView.innerHTML = contentString;
        }
    }

    else if (player.isAt == 'Shepherds') {
        divShepherdsName.innerHTML = mapProvinces[1][0];
        divShepherdsSubtitle.innerHTML = displayShepherdsSubtitle;

        if (player.hasHelpedShepherds) {
            let stringyStringerson = '';
            stringyStringerson += '<table id="tableShepherdsReport">';
            stringyStringerson += '<thead>';
            stringyStringerson += '<tr>';
            stringyStringerson += '<td colspan="2">';
            stringyStringerson += displayInStock;
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';
            stringyStringerson += '</thead>';
            stringyStringerson += '<tbody>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayWool + ' <span class="icon Wool inlineIcon"></span>:'; // THE TOUCH, THE FEEL OF WOOL... THE FABRIC OF OUR LIVES®
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[0]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayMilk + ' <span class="icon Milk inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[1]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayYoghurt + ' <span class="icon Yoghurt inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[2]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayButter + ' <span class="icon Butter inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[3]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayCheese + ' <span class="icon Cheese inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[4]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayMutton + ' <span class="icon Mutton inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[5]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayOffal + ' <span class="icon Offal inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[6]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayHide + ' <span class="icon LeatherHide inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[7]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayBone + ' <span class="icon Bones inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[8]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayBlood + ' <span class="icon Blood inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[9]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayManure + ' <span class="icon Manure inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsInventory[10]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '</tbody>';
            stringyStringerson += '</table>';

            stringyStringerson += '<table id="tableShepherdsStaff">';
            stringyStringerson += '<thead>';
            stringyStringerson += '<tr>';
            stringyStringerson += '<td colspan="3">';
            stringyStringerson += displayPeasants;
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';
            stringyStringerson += '</thead>';
            stringyStringerson += '<tbody>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayShepherds + ' <span class="icon Shepherd inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="noPadColumn">';
            stringyStringerson += formatterCurrent.format(shepherdsCount);
            stringyStringerson += '</td>';
            stringyStringerson += '<td>';
            stringyStringerson += '(-' + formatterCurrent.format(shepherdsCost) + '<span class="icon Gems inlineIcon"></span>' + '<span class="warehouseTotal">/' + displayMonth + '</span>' + ')';
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayPolice + ' <span class="icon Guard inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="noPadColumn">';
            stringyStringerson += formatterCurrent.format(priceShepherds);
            stringyStringerson += '</td>';
            stringyStringerson += '<td>';
            const copSalary = priceShepherds * policeCost;
            let copDisplayCost = '(-' + formatterCurrent.format(copSalary) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            if (starving[11]) { copDisplayCost = '<span class="starving">' + displayStarving + '</span>'; }
            stringyStringerson += copDisplayCost;
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '</tbody>';
            stringyStringerson += '</table>';

            divShepherdsReport.innerHTML = stringyStringerson;
        }

        buttonShepherdsEvents.innerHTML = displayLabelShepherdsA + ' <span class="icon MessageYellow inlineIcon"></span>';
        if (player.hasMetShepherds && !player.hasConsultedShepherds) { buttonShepherdsEvents.innerHTML = displayLabelShepherdsB + ' <span class="icon YesMan inlineIcon"></span>'; }
        else if (player.hasMetShepherds && player.hasConsultedShepherds && !player.hasHelpedShepherds) {
            let stringyStringerson = displayLabelShepherdsC;
            stringyStringerson += '<br>';
            stringyStringerson += '(';
            stringyStringerson += '<span class="icon Gems inlineIcon"></span>';
            stringyStringerson += ' + ';
            stringyStringerson += priceShepherds + '<span class="icon TaxCollector inlineIcon"></span>';
            stringyStringerson += ')';
            buttonShepherdsEvents.innerHTML = stringyStringerson;
        }
    }

    else if (player.isAt == 'Farmers') {
        divFarmersName.innerHTML = mapProvinces[2][0];
        divFarmersSubtitle.innerHTML = displayFarmersSubtitle;

        buttonFarmersEvents.innerHTML = displayLabelFarmersA + ' <span class="icon YesMan inlineIcon"></span>';
        if (player.hasPrepared) { buttonFarmersEvents.innerHTML = displayLabelFarmersB + ' <span class="icon TurkeyLurkeyLeg inlineIcon"></span>'; }
    }

    else if (player.isAt == 'Miners') {
        divMinersName.innerHTML = mapProvinces[3][0];
        divMinersSubtitle.innerHTML = displayMinersSubtitle;

        if (player.hasHelpedMiners) {
            let stringyStringerson = '';
            stringyStringerson += '<table id="tableMinersReport">';
            stringyStringerson += '<thead>';
            stringyStringerson += '<tr>';
            stringyStringerson += '<td colspan="2">';
            stringyStringerson += displayInStock;
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';
            stringyStringerson += '</thead>';
            stringyStringerson += '<tbody>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayDiamonds + ' <span class="icon Diamonds inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[0]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayJacinth + ' <span class="icon Zircon inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[1]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayBismuth + ' <span class="icon Bismuth inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[2]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayGold + ' <span class="icon IngotGold inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[3]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displaySilver + ' <span class="icon IngotSilver inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[4]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayIron + ' <span class="icon IngotIron inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[5]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayWhiteCopper + ' <span class="icon IngotNickel inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[6]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayFalseSilver + ' <span class="icon IngotZinc inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[7]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayLead + ' <span class="icon IngotLead inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[8]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayKoboldOre + ' <span class="icon OreCobalt inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[9]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayMagnesRock + ' <span class="icon Pyrolusite inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="rightPadColumn">';
            stringyStringerson += formatterCurrent.format(minersInventory[10]);
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '</tbody>';
            stringyStringerson += '</table>';

            stringyStringerson += '<table id="tableMinersStaff">';
            stringyStringerson += '<thead>';
            stringyStringerson += '<tr>';
            stringyStringerson += '<td colspan="3">';
            stringyStringerson += displayStationedForces;
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';
            stringyStringerson += '</thead>';
            stringyStringerson += '<tbody>';

            stringyStringerson += '<tr>';
            stringyStringerson += '<td>';
            stringyStringerson += displayGendarmes + ' <span class="icon HorseyMounted inlineIcon"></span>:';
            stringyStringerson += '</td>';
            stringyStringerson += '<td class="noPadColumn">';
            stringyStringerson += formatterCurrent.format(priceMiners[2]);
            stringyStringerson += '</td>';
            stringyStringerson += '<td>';
            stringyStringerson += '(-' + currencySymbol + formatterCurrent.format(minersCost[2]);
            stringyStringerson += ' -' + formatterCurrent.format(minersCost[0]) + '<span class="icon Ration inlineIcon"></span>';
            stringyStringerson += ' -' + formatterCurrent.format(minersCost[1]) + '<span class="icon Bandage inlineIcon"></span>' + '<span class="warehouseTotal">/' + displayMonth + '</span>' + ')';
            stringyStringerson += '</td>';
            stringyStringerson += '</tr>';

            stringyStringerson += '</tbody>';
            stringyStringerson += '</table>';

            divMinersReport.innerHTML = stringyStringerson;
        }

        buttonMinersEvents.innerHTML = displayLabelMinersA + ' <span class="icon MessageRed inlineIcon"></span>';
        if (player.hasMetMiners && !player.hasConsultedMiners) { buttonMinersEvents.innerHTML = displayLabelMinersB + ' <span class="icon YesMan inlineIcon"></span>'; }
        else if (player.hasMetMiners && player.hasConsultedMiners && !player.hasHelpedMiners) {
            let stringyStringerson = displayLabelMinersC;
            stringyStringerson += '<br>';

            stringyStringerson += '(';

            stringyStringerson += currencySymbol + formatterCurrent.format(priceMiners[0]);

            stringyStringerson += ' + ';
            stringyStringerson += '<span class="icon Ration inlineIcon"></span>';

            stringyStringerson += ' + ';
            stringyStringerson += '<span class="icon Bandage inlineIcon"></span>';

            stringyStringerson += '<br>';

            stringyStringerson += ' + ';
            stringyStringerson += formatterCurrent.format(priceMiners[1]) + '<span class="icon Stone inlineIcon"></span>';

            stringyStringerson += ' + ';
            stringyStringerson += priceMiners[2] + '<span class="icon HorseyMounted inlineIcon"></span>';

            stringyStringerson += ')';
            buttonMinersEvents.innerHTML = stringyStringerson;
        }
    }

    // SYSTEM ------------------------------
    buttonSystemMessageDismiss.innerHTML = displayIUnderstand;
    //buttonGameEventDismiss.innerHTML = player.hasWon ? displayEndButton : displayOK; // this is now done in gameEvent utility function to facilitate delay
    buttonOptionsDismiss.innerHTML = displayOK;
    labelToggleMusic.innerHTML = displayMusic;
    labelToggleSounds.innerHTML = displaySounds;
    labelToggleAnimation.innerHTML = displayAnimations;
    labelToggleProfanity.innerHTML = displayProfanity;
    divOptionsFlavour.innerHTML = displayOptionsFlavourFinal;
    buttonOptions.innerHTML = displayOptions;
    spanCheevoText.innerHTML = displayCheevo;
    divResumeCorpus.innerHTML = displayResumeQuestion;
    buttonResumeYes.innerHTML = displayResumeYes + ' <span class="icon ' + loadedIcon + ' inlineIcon"></span>';
    if (player.isGod) { buttonResumeYes.innerHTML += '<br><span class="icon EspírituSanto inlineIcon"></span>'; }
    buttonResumeNo.innerHTML = displayResumeNo + ' <span class="icon YoMama inlineIcon"></span>';
    if (player.isGod) { buttonResumeNo.innerHTML += '<br><span class="icon EspírituSanto inlineIcon"></span>'; }
    buttonPlayGod.innerHTML = displayLabelPegasuses + ' <span class="icon Orb inlineIcon"></span><br>(' + pricePegasus + '<span class="icon Relic inlineIcon"></span>)';
    buttonReturnToMap.innerHTML = displayReturnToMapView;
    buttonRecords.innerHTML = 'Records: OFF';
    if (player.likesRecords) { buttonRecords.innerHTML = 'Records: ON'; }
}



function RebuildFacesArray() {
    const arrayFacesMasc = [
        [0, 0,], // row 1
        [0, 64,],
        [0, 128,],
        [0, 192,],
        [0, 256,],
        [0, 320,],
        [0, 384,],
        [0, 448,],
        [0, 512,],
        [0, 576,],
        [0, 640,],
        [64, 0,], // row 2
        [64, 64,],
        [64, 128,],
        [64, 192,],
        [64, 256,],
        [64, 320,],
        [64, 384,],
        [64, 448,],
        [64, 512,],
        [64, 576,],
        [64, 640,],
        [128, 0,], // row 3
        [128, 64,],
        [128, 128,],
        [128, 192,],
        [128, 256,],
        [128, 320,],
        [128, 384,],
        [128, 448,],
        [128, 512,],
        [128, 576,],
        [128, 640,],
        [192, 0,], // row 4
        [192, 64,],
        [192, 128,],
        [192, 192,],
        [192, 256,],
        [192, 320,],
        [192, 384,],
        [192, 448,],
        [192, 512,],
        [192, 576,],
        [192, 640,],
        [256, 0,], // row 5
        [256, 64,],
        [256, 128,],
        [256, 192,],
        [256, 256,],
        [256, 320,],
        [256, 384,],
        [256, 448,],
        [256, 512,],
        [256, 576,],
        [256, 640,],
        [320, 0,], // row 6
        [320, 64,],
        [320, 128,],
        [320, 320,],
    ];
    const arrayFacesFem = [
        [640, 640,], // row 11
        [640, 576,],
        [640, 512,],
        [640, 448,],
        [640, 384,],
        [640, 320,],
        [640, 256,],
        [640, 192,],
        [640, 128,],
        [640, 64,],
        [640, 0,],
        [576, 640,], // row 10
        [576, 576,],
        [576, 512,],
        [576, 448,],
        [576, 384,],
        [576, 320,],
        [576, 256,],
        [576, 192,],
        [576, 128,],
        [576, 64,],
        [576, 0,],
        [512, 640,], // row 9
        [512, 576,],
        [512, 512,],
        [512, 448,],
        [512, 384,],
        [512, 320,],
        [512, 256,],
        [512, 192,],
        [512, 128,],
        [512, 64,],
        [512, 0,],
        [448, 640,], // row 8
        [448, 576,],
        [448, 512,],
        [448, 448,],
        [448, 384,],
        [448, 320,],
        [448, 256,],
        [448, 192,],
        [448, 128,],
        [448, 64,],
        [448, 0,],
        [384, 640,], // row 7
        [384, 576,],
        [384, 512,],
        [384, 448,],
        [384, 384,],
        [384, 320,],
        [384, 256,],
        [384, 192,],
        [384, 128,],
        [384, 64,],
        [384, 0,],
        [320, 640,], // row 6
        [320, 576,],
        [320, 512,],
    ];

    arrayFacesSorted.length = 0;

    if (player.gender == 0 || player.gender == 2) {
        for (let i = 0; i < arrayFacesMasc.length; i++) {
            arrayFacesSorted.push(arrayFacesMasc[i]);
        }
        for (let i = arrayFacesFem.length; i > 0; i--) {
            arrayFacesSorted.push(arrayFacesFem[i - 1]);
        }
    }
    else if (player.gender == 1 || player.gender == 3) {
        for (let i = 0; i < arrayFacesFem.length; i++) {
            arrayFacesSorted.push(arrayFacesFem[i]);
        }
        for (let i = arrayFacesMasc.length; i > 0; i--) {
            arrayFacesSorted.push(arrayFacesMasc[i - 1]);
        }
    }
    else if (player.gender > 3) {
        let toggle = false;
        let counterMasc = arrayFacesMasc.length - 1;
        let counterFem = arrayFacesFem.length - 1;
        for (let i = 0; i < (arrayFacesMasc.length + arrayFacesFem.length); i++) {
            toggle = !toggle;
            if (toggle) {
                arrayFacesSorted.push(arrayFacesMasc[counterMasc]);
                counterMasc--;
            }
            else {
                arrayFacesSorted.push(arrayFacesFem[counterFem]);
                counterFem--;
            }
        }
    }
}



function UpdateVisibilities() {
    divOverlayForeword.style.display = player.seesForeword ? 'block' : '';
    divOverlaySystemMessage.style.display = player.seesSystemMessage ? 'block' : '';
    divOverlayGameEvent.style.display = player.seesGameEvent ? 'block' : '';
    divOverlayOptions.style.display = player.seesOptions ? 'block' : '';
    divOverlayMods.style.display = player.seesModsWindow ? 'block' : '';
    buttonStar.style.display = player.isGod ? 'inline-block' : '';
    buttonRecords.style.display = player.isGod ? 'inline-block' : '';

    imgNirvana.style.display = player.hasWon ? 'block' : '';

    if (player.seesForeword && player.hasBegun) {
        divForewordTitle.style.display = 'none';
        divForewordSubtitle.style.display = 'none';
        buttonForewordEnglish.style.display = 'none';
        buttonForewordSpanish.style.display = 'none';
        divForewordCorpus.style.display = 'block';
        buttonForewordDismiss.style.display = 'block';
    }

    buttonChooseHeir.style.display = player.canChooseHeir ? 'inline-block' : '';

    if (player.isAt == 'Praedium') {
        tableFarmInventory.style.display = player.seesInventory ? 'table' : '';
        tableFarmStaff.style.display = player.seesStaff ? 'table' : '';
        tableFarmReport.style.display = player.seesReport ? 'table' : '';

        divViewForest.style.display = player.seesForest ? 'block' : '';
        tableForestInventory.style.display = player.canLog ? 'table' : '';
        tableForestStaff.style.display = player.canLog ? 'table' : '';
        tableForestReport.style.display = (player.seesReport && player.canLog) ? 'table' : '';
        buttonForest.style.display = player.seesForestButton ? 'block' : '';

        divViewMountain.style.display = player.seesMountain ? 'block' : '';
        tableMountainReport.style.display = player.seesReport ? 'table' : '';
        buttonMountain.style.display = player.seesMountainButton ? 'block' : '';

        buttonGoToResidence.style.display = player.canGoHome ? 'inline-block' : '';
        buttonGoToTownship.style.display = player.seesVillage ? 'inline-block' : '';

        buttonTill.style.display = player.canTill ? 'inline-block' : '';
        buttonPlant.style.display = player.canPlant ? 'inline-block' : '';
        buttonWater.style.display = player.canWater ? 'inline-block' : '';
        buttonHarvest.style.display = player.canHarvest ? 'inline-block' : '';
        buttonPriority.style.display = player.canDelegate ? 'inline-block' : '';

        buttonBuyLand.style.display = player.canBuyLand ? 'block' : '';
        buttonRentWarehouse.style.display = player.canRentWarehouse ? 'block' : '';
        buttonBuyForest.style.display = player.canBuyForest ? 'block' : '';
        buttonBuyMountain.style.display = player.canBuyMountain ? 'block' : '';
        buttonFound.style.display = player.canFound ? 'block' : '';
        buttonNewFarm.style.display = player.canBuyNewFarm ? 'block' : '';

        buttonHire.style.display = player.canHire ? 'block' : '';
        buttonAudit.style.display = player.canAudit ? 'block' : '';

        buttonBarterAll.style.display = player.canSell ? 'block' : '';
        buttonBarterOlive.style.display = player.canBarter ? 'block' : '';
        buttonBarterDate.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';
        buttonBarterFig.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';
        buttonBarterPom.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';
        buttonBarterGrape.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';

        const pixelScale = window.getComputedStyle(buttonTillDecal).getPropertyValue('--pixel-scale');
        let plotSearchResult = FindPlot(0, 'cereals');
        if (plotSearchResult.row == -1 && player.hasFlaxFarm) { plotSearchResult = FindPlot(0, 'flax'); }
        if (plotSearchResult.row != -1) {
            buttonTill.classList.remove('disabled');
            buttonTillDecal.style.backgroundPosition = (-208 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }
        else {
            buttonTill.classList.add('disabled');
            buttonTillDecal.style.backgroundPosition = (-336 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }

        plotSearchResult = FindPlot(1, 'wheat');
        let plotSearchResultAlt = FindPlot(1, 'barley');
        let plotSearchResultOtherAlt = FindPlot(1, 'flax');
        if ((plotSearchResult.row != -1 && bushelCount[0] >= plantCost) || (plotSearchResultAlt.row != -1 && bushelCount[1] >= plantCost) || (player.hasFlaxFarm && (plotSearchResultOtherAlt.row != -1 && bushelCount[7] >= plantCost))) {
            buttonPlant.classList.remove('disabled');
            buttonPlantDecal.style.backgroundPosition = (-240 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }
        else {
            buttonPlant.classList.add('disabled');
            buttonPlantDecal.style.backgroundPosition = (-368 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }

        plotSearchResult = FindPlot(2, 'cereals');
        if (plotSearchResult.row == -1 && player.hasFlaxFarm) { plotSearchResult = FindPlot(2, 'flax'); }
        if (plotSearchResult.row != -1) {
            buttonWater.classList.remove('disabled');
            buttonWaterDecal.style.backgroundPosition = (-272 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }
        else {
            buttonWater.classList.add('disabled');
            buttonWaterDecal.style.backgroundPosition = (-400 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }

        plotSearchResult = FindPlot(14, 'cereals');
        if (plotSearchResult.row == -1 && player.hasFlaxFarm) { plotSearchResult = FindPlot(14, 'flax'); }
        if (plotSearchResult.row != -1 || arrayVineyard.includes(1) || arrayPomOrchard.includes(1) || arrayOlivar.includes(1) || arrayDatePalmGrove.includes(1) || arrayFigOrchard.includes(1)) {
            buttonHarvest.classList.remove('disabled');
            buttonHarvestDecal.style.backgroundPosition = (-304 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }
        else {
            buttonHarvest.classList.add('disabled');
            buttonHarvestDecal.style.backgroundPosition = (-432 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        }

        buttonPriorityOption.style.backgroundPosition = (-304 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px';
        if (priority == 'Sow') { buttonPriorityOption.style.backgroundPosition = (-208 * pixelScale) + 'px ' + (-32 * pixelScale) + 'px'; }
        else if (priority == '🤪') { buttonPriorityOption.style.backgroundPosition = (-240 * pixelScale) + 'px ' + (-16 * pixelScale) + 'px'; }
    }

    else if (player.isAt == 'Township') {
        buttonGoToPort.style.display = player.canSell ? 'inline-block' : '';
        buttonBuild.style.display = player.canBuild ? 'block' : '';
        buttonVisitOracle.style.display = player.hasOracle ? 'block' : '';
        buttonBuyWheat.style.display = player.canSell ? 'block' : '';
        buttonSellWheat.style.display = player.canSell ? 'block' : '';
        buttonBuyBarley.style.display = player.canSell ? 'block' : '';
        buttonSellBarley.style.display = player.canSell ? 'block' : '';
        buttonSellFlax.style.display = (player.canSell && player.hasFlaxFarm) ? 'block' : '';
        buttonBuyLogs.style.display = player.canSell ? 'block' : '';
        buttonSellLogs.style.display = player.canSell ? 'block' : '';
        buttonBuyBoards.style.display = player.canSell ? 'block' : '';
        buttonSellBoards.style.display = player.canSell ? 'block' : '';
        buttonBuyStone.style.display = player.canSell ? 'block' : '';
        buttonSellStone.style.display = player.canSell ? 'block' : '';
        buttonBuyHorses.style.display = horsesSpawn ? 'block' : '';
        buttonSellHorses.style.display = horsesSpawn ? 'block' : '';
        buttonPlayGod.style.display = (player.hasWon && !player.hasPegasi) ? 'block' : '';
    }

    else if (player.isAt == 'Port') {
        imgTradeGoods.style.display = player.canExport ? 'none' : '';
        tableExports.style.display = player.canExport ? 'table' : '';
        buttonEstablishTradeRoute.style.display = player.seesExportButton ? '' : 'none';
        imgTradeTin.style.display = player.canImport ? 'none' : '';
        tableImports.style.display = player.canImport ? 'table' : '';
        buttonImportTin.style.display = player.seesImportButton ? '' : 'none';
        buttonSailWest.style.display = (player.hasWon && !player.hasWentToAman) ? 'block' : '';
    }

    else if (player.isAt == 'Residence') {
        buttonImproveResidence.style.display = player.hasBandages ? '' : 'block';
        tableResidenceInventory.style.display = player.hasBakery ? 'table' : '';
        tableResidenceReport.style.display = player.hasBakery ? 'table' : '';
        divWorkshopBakery.style.display = player.hasBakery ? 'block' : '';
        divWorkshopOliveMill.style.display = player.hasOliveMill ? 'block' : '';
        divWorkshopBrewery.style.display = player.hasBrewery ? 'block' : '';
        divWorkshopWinery.style.display = player.hasWinery ? 'block' : '';
        divWorkshopKitchen.style.display = player.hasKitchen ? 'block' : '';
        divWorkshopPress.style.display = player.hasPress ? 'block' : '';
        divWorkshopGreenhouse.style.display = player.hasGreenhouse ? 'block' : '';
        divWorkshopAtelier.style.display = player.hasAtelier ? 'block' : '';
        divWorkshopApiary.style.display = player.hasApiary ? 'block' : '';
        divWorkshopCottage.style.display = player.hasCottage ? 'block' : '';
    }

    else if (player.isAt == 'Workshop') {
        divHeirWorkshopForeward.style.display = (heirStage == 0) ? 'block' : '';
        divHeirWorkshopName.style.display = (heirStage == 1) ? 'block' : '';
        divHeirWorkshopGender.style.display = (heirStage == 2) ? 'block' : '';
        divHeirWorkshopEthnicity.style.display = (heirStage == 3) ? 'block' : '';
        divHeirWorkshopTitle.style.display = (heirStage == 4) ? 'block' : '';
        divHeirWorkshopFaces.style.display = (heirStage == 5) ? 'block' : '';
        divHeirWorkshopSummary.style.display = (heirStage == 6) ? 'block' : '';
        buttonHeirGoBack.style.display = (heirStage > 1) ? 'block' : '';

        if (heirFacesPageCurrent == 1) { buttonHeirFacesLeft.classList.add('disabled'); }
        else { buttonHeirFacesLeft.classList.remove('disabled'); }
        if (heirFacesPageCurrent == heirFacesPageTotal) { buttonHeirFacesRight.classList.add('disabled'); }
        else { buttonHeirFacesRight.classList.remove('disabled'); }
    }

    else if (player.isAt == 'Miners') {
        //divMinersReport.style.display = !player.hasHelpedMiners ? 'none' : '';
        buttonMinersEvents.style.display = !player.hasHelpedMiners ? '' : 'none';
    }

    else if (player.isAt == 'Shepherds') {
        buttonShepherdsEvents.style.display = !player.hasHelpedShepherds ? '' : 'none';
    }

    else if (player.isAt == 'Farmers') {
        buttonFarmersEvents.style.display = !player.hasBeenReceived ? 'none' : '';
    }
}



function RedrawFarm() {
    const pixelScale = window.getComputedStyle(canvasFarm).getPropertyValue('--pixel-scale');

    function PickCropTile(row, col) {
        let tileChoice = null;
        let arrayCropTiles = [
            [0, 64,],
            [16, 64,],
            [32, 64,],
            [48, 64,],
            [64, 64,],
            [80, 64,],
            [96, 64,],
            [112, 64,],
            [128, 64,],
            [144, 64,],
            [160, 64,],
            [176, 64,],
            [192, 64,],
            [208, 64,],
        ];
        if (arrayFarmPlots[row][col] == 14) {
            arrayCropTiles = [
                [224, 64,],
                [240, 64,],
                [256, 64,],
                [272, 64,],
                [288, 64,],
            ];
            if (row > 5 && row < 9) {
                arrayCropTiles = [
                    [304, 64,],
                    [320, 64,],
                    [336, 64,],
                    [352, 64,],
                    [368, 64,],
                ];
            }
            tileChoice = arrayCropTiles[FindWholeRandom(0, 4)];
        }
        else { tileChoice = arrayCropTiles[arrayFarmPlots[row][col]]; }
        return tileChoice;
    }

    function PickOliveTile(tree) { return (arrayOlivar[tree] == 0) ? tileGrowingOlive : [496, 96,]; }

    function PickDatePalmTile(palm) { return (arrayDatePalmGrove[palm] == 0) ? [384, 80,] : [400, 80,]; }

    function PickFigTile(fig) { return (arrayFigOrchard[fig] == 0) ? [480, 64,] : [496, 64,]; }

    function PickPomTile(pom) { return (arrayPomOrchard[pom] == 0) ? [384, 64,] : [400, 64,]; }

    function PickGrapeTile(grape, post) {
        let tileChoice = [416, 64,];
        if (post) { tileChoice = [448, 64,]; }
        return (arrayVineyard[grape] == 0) ? tileChoice : [432, 64,];
    }

    function PickFlaxTile(row, col) {
        let tileChoice = null;
        let arrayCropTiles = [
            [0, 64,],
            [16, 64,],
            [32, 64,],
            [48, 64,],
            [64, 64,],
            [80, 64,],
            [96, 64,],
            [112, 64,],
            [128, 64,],
            [144, 64,],
            [160, 64,],
            [176, 64,],
            [192, 64,],
            [208, 64,],
        ];
        if (arrayFlaxPlots[row][col] == 14) {
            arrayCropTiles = [
                [32, 256,],
                [48, 256,],
                [64, 256,],
                [80, 256,],
                [96, 256,],
            ];
            tileChoice = arrayCropTiles[FindWholeRandom(0, 4)];
        }
        else { tileChoice = arrayCropTiles[arrayFlaxPlots[row][col]]; }
        return tileChoice;
    }

    const arrayFarmGraph = [
        [
            PickCropTile(0, 0),
        ],
    ];

    if (farmStage > 0) {
        canvasFarm.width = 32;
        canvasFarm.style.width = 258 * pixelScale + 'px';
        canvasFarm.style.height = 130 * pixelScale + 'px';

        arrayFarmGraph[0].push(
            PickCropTile(0, 1),
        );
    }

    if (farmStage > 1) {
        canvasFarm.width = 64;
        canvasFarm.style.width = 322 * pixelScale + 'px';
        canvasFarm.style.height = 82 * pixelScale + 'px';

        arrayFarmGraph[0].push(
            PickCropTile(0, 2),
            PickCropTile(0, 3),
        );
    }

    if (farmStage > 2) {
        canvasFarm.height = 32;
        canvasFarm.style.width = 258 * pixelScale + 'px';
        canvasFarm.style.height = 130 * pixelScale + 'px';

        arrayFarmGraph.push(
            [
                PickCropTile(1, 0),
                PickCropTile(1, 1),
                PickCropTile(1, 2),
                PickCropTile(1, 3),
            ],
        );
    }

    if (farmStage > 3) {
        canvasFarm.width = 112;
        canvasFarm.height = 48;
        canvasFarm.style.width = 296 * pixelScale + 'px';
        canvasFarm.style.height = 128 * pixelScale + 'px';

        arrayFarmGraph[0].push(
            PickCropTile(0, 4),
            PickCropTile(0, 5),
            PickCropTile(0, 6),
        );

        arrayFarmGraph[1].push(
            PickCropTile(1, 4),
            PickCropTile(1, 5),
            PickCropTile(1, 6),
        );

        arrayFarmGraph.push(
            [
                PickCropTile(2, 0),
                PickCropTile(2, 1),
                PickCropTile(2, 2),
                PickCropTile(2, 3),
                PickCropTile(2, 4),
                PickCropTile(2, 5),
                PickCropTile(2, 6),
            ],
        );
    }

    if (farmStage > 4) {
        canvasFarm.width = 144;
        canvasFarm.height = 5 * 16;
        canvasFarm.style.width = 290 * pixelScale + 'px';
        canvasFarm.style.height = ((5 * 32) + 2) * pixelScale + 'px';

        arrayFarmGraph.unshift(
            [
                tileLawn,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileLawn,
            ],
        );

        arrayFarmGraph[1].unshift(tileFencePrimV,);
        arrayFarmGraph[1].push(tileFencePrimV,);

        arrayFarmGraph[2].unshift(tileFencePrimV,);
        arrayFarmGraph[2].push(tileFencePrimV,);

        arrayFarmGraph[3].unshift(tileFencePrimV,);
        arrayFarmGraph[3].push(tileFencePrimV,);

        arrayFarmGraph.push(
            [
                tileLawn,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileLawn,
                tileFencePrimH,
                tileFencePrimH,
                tileFencePrimH,
                tileLawn,
            ],
        );
    }

    if (farmStage > 5) {
        canvasFarm.height = 11 * 16;
        canvasFarm.style.width = 290 * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 32) + 2) * pixelScale + 'px';

        arrayFarmGraph.unshift(
            [
                tileForest,
                tileTrees,
                tileForest,
                tileForest,
                tileTrees,
                tileForest,
                tileTrees,
                tileForest,
                tileForest,
            ],
            [
                tileForest,
                tileTrees,
                tileTrees,
                tileTrees,
                tileTrees,
                tileTrees,
                tileTrees,
                tileForest,
                tileForest,
            ],
            [
                tileTrees,
                tileTrees,
                tileTrees,
                tileShrubs4,
                tileShrubs4,
                tileTrees,
                tileTrees,
                tileTrees,
                tileForest,
            ],
            [
                tileTrees,
                tileShrubs4,
                tileShrubs3,
                tileDeadTree,
                tileShrubs4,
                tileShrubs3,
                tileShrubs4,
                tileTrees,
                tileTrees,
            ],
            [
                tileShrubs3,
                tileStump,
                tileShrubs2,
                tileLawn,
                tileLawn,
                tileShrubs2,
                tileDeadTree,
                tileShrubs4,
                tileTrees,
            ],
            [
                tileShrubs1,
                tileLawn,
                tileDeadTree,
                tileLawn,
                tileStump,
                tileLawn,
                tileLawn,
                tileLawn,
                tileShrubs2,
            ],
        );
    }

    if (farmStage > 6) {
        canvasFarm.style.width = 290 * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 32) + 2) * pixelScale + 'px';
        arrayFarmGraph[4][1] = tileLawn;
        arrayFarmGraph[5][4] = tileLawn;
    }

    if (farmStage > 7) {
        canvasFarm.style.width = 290 * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 32) + 2) * pixelScale + 'px';
        arrayFarmGraph[3][3] = tileLawn;
        arrayFarmGraph[4][6] = tileLawn;
        arrayFarmGraph[5][2] = tileLawn;
    }

    if (farmStage > 8) {
        canvasFarm.style.width = 290 * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 32) + 2) * pixelScale + 'px';
        arrayFarmGraph[0][0] = tileShrubs4;
        arrayFarmGraph[0][1] = tileLawn;
        arrayFarmGraph[0][2] = tileLawn;
        arrayFarmGraph[0][3] = tileLawn;
        arrayFarmGraph[0][4] = tileLawn;
        arrayFarmGraph[0][5] = tileLawn;
        arrayFarmGraph[0][6] = tileLawn;
        arrayFarmGraph[0][7] = tileLawn;
        arrayFarmGraph[0][8] = tileShrubs3;

        arrayFarmGraph[1][0] = tileShrubs1;
        arrayFarmGraph[1][1] = tileShrubs2;
        arrayFarmGraph[1][2] = tileLawn;
        arrayFarmGraph[1][3] = tileLawn;
        arrayFarmGraph[1][4] = tileLawn;
        arrayFarmGraph[1][5] = tileLawn;
        arrayFarmGraph[1][6] = tileLawn;
        arrayFarmGraph[1][7] = tileShrubs2;
        arrayFarmGraph[1][8] = tileTrees;

        arrayFarmGraph[2][0] = tileShrubs3;
        arrayFarmGraph[2][1] = tileLawn;
        arrayFarmGraph[2][2] = tileLawn;
        arrayFarmGraph[2][3] = tileLawn;
        arrayFarmGraph[2][4] = tileLawn;
        arrayFarmGraph[2][5] = tileLawn;
        arrayFarmGraph[2][6] = tileLawn;
        arrayFarmGraph[2][7] = tileShrubs1;
        arrayFarmGraph[2][8] = tileShrubs4;

        arrayFarmGraph[3][0] = tileLawn;
        arrayFarmGraph[3][1] = tileLawn;
        arrayFarmGraph[3][2] = tileLawn;
        arrayFarmGraph[3][3] = tileLawn;
        arrayFarmGraph[3][4] = tileLawn;
        arrayFarmGraph[3][5] = tileLawn;
        arrayFarmGraph[3][6] = tileLawn;
        arrayFarmGraph[3][7] = tileLawn;
        arrayFarmGraph[3][8] = tileShrubs3;

        arrayFarmGraph[4][0] = tileLawn;
        arrayFarmGraph[4][1] = tileLawn;
        arrayFarmGraph[4][2] = tileLawn;
        arrayFarmGraph[4][3] = tileLawn;
        arrayFarmGraph[4][4] = tileLawn;
        arrayFarmGraph[4][5] = tileShrubs2;
        arrayFarmGraph[4][7] = tileLawn;
        arrayFarmGraph[4][8] = tileLawn;

        arrayFarmGraph[5][0] = tileLawn;
    }

    if (farmStage > 9) {
        canvasFarm.style.width = 290 * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 32) + 2) * pixelScale + 'px';
        arrayFarmGraph[2][2] = PickOliveTile(0);
        arrayFarmGraph[3][2] = PickOliveTile(1);
        arrayFarmGraph[4][2] = PickOliveTile(2);

        arrayFarmGraph[2][4] = PickOliveTile(3);
        arrayFarmGraph[3][4] = PickOliveTile(4);
        arrayFarmGraph[4][4] = PickOliveTile(5);

        arrayFarmGraph[2][6] = PickOliveTile(6);
        arrayFarmGraph[3][6] = PickOliveTile(7);
        arrayFarmGraph[4][6] = PickOliveTile(8);

        arrayFarmGraph[1][1] = tileLawn;
        arrayFarmGraph[1][7] = tileLawn;
        arrayFarmGraph[2][7] = tileLawn;
        arrayFarmGraph[4][5] = tileLawn;
    }

    if (farmStage > 10) {
        canvasFarm.width = 18 * 16;
        canvasFarm.style.width = ((18 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 16) + 2) * pixelScale + 'px';

        arrayFarmGraph[8][1] = PickCropTile(0, 7);
        arrayFarmGraph[8][2] = PickCropTile(0, 8);
        arrayFarmGraph[8][3] = PickCropTile(0, 9);
        arrayFarmGraph[8][4] = PickCropTile(0, 10);
        arrayFarmGraph[8][5] = PickCropTile(0, 11);
        arrayFarmGraph[8][6] = PickCropTile(0, 12);
        arrayFarmGraph[8][7] = PickCropTile(0, 13);

        arrayFarmGraph[9][1] = PickCropTile(1, 0);
        arrayFarmGraph[9][2] = PickCropTile(1, 1);
        arrayFarmGraph[9][3] = PickCropTile(1, 2);
        arrayFarmGraph[9][4] = PickCropTile(1, 3);
        arrayFarmGraph[9][5] = PickCropTile(1, 4);
        arrayFarmGraph[9][6] = PickCropTile(1, 5);
        arrayFarmGraph[9][7] = PickCropTile(1, 6);

        arrayFarmGraph[0].push(
            tileShrubs4,
            tileShrubs2,
            tileLawn,
            tileShrubs1,
            tileLawn,
            tileLawn,
            tileShrubs3,
            tileLawn,
            tileShrubs4,
        );

        arrayFarmGraph[1].push(
            tileForest,
            tileShrubs3,
            tileShrubs2,
            tileShrubs1,
            tileLawn,
            tileRocks,
            tileShrubs2,
            tileShrubs4,
            tileTrees,
        );

        arrayFarmGraph[2].push(
            tileTrees,
            tileShrubs2,
            tileRocks,
            tileLawn,
            tileLawn,
            tileLawn,
            tileShrubs2,
            tileLawn,
            tileTrees,
        );

        arrayFarmGraph[3].push(
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileShrubs2,
            tileShrubs4,
            tileLawn,
            tileLawn,
            tileShrubs3,
        );

        arrayFarmGraph[4].push(
            tileLawn,
            tileShrubs2,
            tileLawn,
            tileLawn,
            tileWell,
            tileShrubs2,
            tileLawn,
            tileShrubs3,
            tileRocks,
        );

        arrayFarmGraph[5].push(
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileShrubs1,
            tileShrubs2,
        );

        arrayFarmGraph[6].push(
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
        );

        arrayFarmGraph[7].push(
            tileLawn,
            PickCropTile(1, 7),
            PickCropTile(1, 8),
            PickCropTile(1, 9),
            PickCropTile(1, 10),
            PickCropTile(1, 11),
            PickCropTile(1, 12),
            PickCropTile(1, 13),
            tileLawn,
        );

        arrayFarmGraph[8].push(
            tileLawn,
            PickCropTile(2, 0),
            PickCropTile(2, 1),
            PickCropTile(2, 2),
            PickCropTile(2, 3),
            PickCropTile(2, 4),
            PickCropTile(2, 5),
            PickCropTile(2, 6),
            tileShrubs2,
        );

        arrayFarmGraph[9].push(
            tileLawn,
            PickCropTile(2, 7),
            PickCropTile(2, 8),
            PickCropTile(2, 9),
            PickCropTile(2, 10),
            PickCropTile(2, 11),
            PickCropTile(2, 12),
            PickCropTile(2, 13),
            tileLawn,
        );

        arrayFarmGraph[10].push(
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
        );
    }

    if (residenceStage > 0) {
        arrayFarmGraph[2][13] = tileTinyWell;
        arrayFarmGraph[2][14] = tileHut;
    }

    if (residenceStage > 1) {
        arrayFarmGraph[2][14] = tileCabin;
    }

    if (residenceStage > 2) {
        arrayFarmGraph[1][14] = tileHouseBoardsTop;
        arrayFarmGraph[2][13] = tileHouseBoardsLeft;
        arrayFarmGraph[2][14] = tileHouseBoardsMiddle;
        arrayFarmGraph[2][15] = tileHouseBoardsRight;
    }

    if (residenceStage > 3) {
        arrayFarmGraph[2][14] = tileBakeryNW;
        arrayFarmGraph[2][15] = tileBakeryNE;
        arrayFarmGraph[3][14] = tileBakerySW;
        arrayFarmGraph[3][15] = tileBakerySE;
    }

    if (residenceStage > 4) {
        arrayFarmGraph[2][13] = tileOliveMillNW;
        arrayFarmGraph[2][14] = tileOliveMillNE;
        arrayFarmGraph[3][13] = tileOliveMillSW;
        arrayFarmGraph[3][14] = tileOliveMillSE;
    }

    if (residenceStage > 5) {
        arrayFarmGraph[1][14] = tileHousePlasterTop;
        arrayFarmGraph[2][13] = tileHousePlasterLeft;
        arrayFarmGraph[2][14] = tileHousePlasterMiddle;
        arrayFarmGraph[2][15] = tileHousePlasterRight;
    }

    if (residenceStage > 10) {
        arrayFarmGraph[4][14] = tileGreenhouseN;
        arrayFarmGraph[5][14] = tileGreenhouseS;
    }

    if (residenceStage > 11) {
        arrayFarmGraph[1][13] = tileHouseStoneNW;
        arrayFarmGraph[1][14] = tileHouseStoneN;
        arrayFarmGraph[1][15] = tileHouseStoneNE;
        arrayFarmGraph[2][13] = tileHouseStoneSW;
        arrayFarmGraph[2][14] = tileHouseStoneS;
        arrayFarmGraph[2][15] = tileHouseStoneSE;
        arrayFarmGraph[3][14] = tileOliveMillwRoad;
    }

    if (residenceStage > 12) {
        arrayFarmGraph[1][15] = tileAtelierNW;
        arrayFarmGraph[1][16] = tileAtelierNE;
        arrayFarmGraph[2][15] = tileAtelierSW;
        arrayFarmGraph[2][16] = tileAtelierSE;
        arrayFarmGraph[3][13] = tileAtelierRoad1;
        arrayFarmGraph[3][14] = tileAtelierRoad2;
        arrayFarmGraph[3][15] = tileAtelierRoad3;
        arrayFarmGraph[3][16] = tileAtelierRoad4;
        arrayFarmGraph[4][13] = tileAtelierRoad5;
        arrayFarmGraph[4][14] = tileAtelierRoad6;
        arrayFarmGraph[4][15] = tileAtelierRoad7;
        arrayFarmGraph[4][16] = tileAtelierRoad8;
    }

    if (farmStage > 11) {
        canvasFarm.style.width = ((18 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((11 * 16) + 2) * pixelScale + 'px';
        arrayFarmGraph[0][0] = tileFenceNW;
        arrayFarmGraph[0][1] = tileFenceH;
        arrayFarmGraph[0][2] = tileFenceH;
        arrayFarmGraph[0][3] = tileFenceH;
        arrayFarmGraph[0][4] = tileFenceH;
        arrayFarmGraph[0][5] = tileFenceH;
        arrayFarmGraph[0][6] = tileFenceH;
        arrayFarmGraph[0][10] = tileLawn;
        arrayFarmGraph[0][11] = tileFenceH;
        arrayFarmGraph[0][12] = tileFenceH;
        arrayFarmGraph[0][13] = tileFenceH;
        arrayFarmGraph[0][14] = tileFenceH;
        arrayFarmGraph[0][15] = tileFenceH;
        arrayFarmGraph[0][16] = tileFenceH;
        arrayFarmGraph[0][17] = tileFenceNE;

        arrayFarmGraph[1][0] = tileFenceV;
        arrayFarmGraph[1][8] = tileLawn;
        arrayFarmGraph[1][9] = tileLawn;
        arrayFarmGraph[1][17] = tileFenceV;

        arrayFarmGraph[2][0] = tileFenceV;
        arrayFarmGraph[2][17] = tileFenceV;

        arrayFarmGraph[3][0] = tileFenceV;
        arrayFarmGraph[3][17] = tileFenceV;

        arrayFarmGraph[4][0] = tileFenceV;

        arrayFarmGraph[5][0] = tileFenceV;
        arrayFarmGraph[5][17] = tileFenceV;

        arrayFarmGraph[6][0] = tileFenceV2E;
        arrayFarmGraph[6][1] = tileFenceH;
        arrayFarmGraph[6][2] = tileFenceH;
        arrayFarmGraph[6][3] = tileFenceH;
        arrayFarmGraph[6][4] = tileLawn;
        arrayFarmGraph[6][5] = tileFenceH;
        arrayFarmGraph[6][6] = tileFenceH;
        arrayFarmGraph[6][7] = tileFenceH;
        arrayFarmGraph[6][10] = tileFenceH;
        arrayFarmGraph[6][11] = tileFenceH;
        arrayFarmGraph[6][12] = tileFenceH;
        arrayFarmGraph[6][14] = tileFenceH;
        arrayFarmGraph[6][15] = tileFenceH;
        arrayFarmGraph[6][16] = tileFenceH;
        arrayFarmGraph[6][17] = tileFenceV2W;

        arrayFarmGraph[7][0] = tileFenceV;
        arrayFarmGraph[7][8] = tileLawn;
        arrayFarmGraph[7][17] = tileFenceV;

        arrayFarmGraph[8][0] = tileFenceV;
        arrayFarmGraph[8][8] = tileLawn;
        arrayFarmGraph[8][17] = tileFenceV;

        arrayFarmGraph[9][0] = tileFenceV;
        arrayFarmGraph[9][8] = tileLawn;
        arrayFarmGraph[9][17] = tileFenceV;

        arrayFarmGraph[10][0] = tileFenceSW;
        arrayFarmGraph[10][1] = tileFenceH;
        arrayFarmGraph[10][2] = tileFenceH;
        arrayFarmGraph[10][3] = tileFenceH;
        arrayFarmGraph[10][5] = tileFenceH;
        arrayFarmGraph[10][6] = tileFenceH;
        arrayFarmGraph[10][7] = tileFenceH;
        arrayFarmGraph[10][10] = tileFenceH;
        arrayFarmGraph[10][11] = tileFenceH;
        arrayFarmGraph[10][12] = tileFenceH;
        arrayFarmGraph[10][14] = tileFenceH;
        arrayFarmGraph[10][15] = tileFenceH;
        arrayFarmGraph[10][16] = tileFenceH;
        arrayFarmGraph[10][17] = tileFenceSE;
    }

    if (farmStage > 12) {
        canvasFarm.width = 20 * 16;
        canvasFarm.height = 18 * 16;
        canvasFarm.style.width = ((20 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((18 * 16) + 2) * pixelScale + 'px';

        arrayFarmGraph[0].unshift(tileShrubs1,);
        arrayFarmGraph[0].push(tileTrees,);

        arrayFarmGraph[1].unshift(tileTrees,);
        arrayFarmGraph[1].push(tileShrubs4,);

        arrayFarmGraph[2].unshift(tileShrubs4,);
        arrayFarmGraph[2].push(tileShrubs2,);

        arrayFarmGraph[3].unshift(tileShrubs2,);
        arrayFarmGraph[3].push(tileShrubs4,);

        arrayFarmGraph[4].unshift(tileLawn,);
        arrayFarmGraph[4].push(tileShrubs2,);

        arrayFarmGraph[5].unshift(tileShrubs2,);
        arrayFarmGraph[5].push(tileLawn,);

        arrayFarmGraph[6].unshift(tileLawn,);
        arrayFarmGraph[6].push(tileLawn,);

        arrayFarmGraph[7].unshift(tileLawn,);
        arrayFarmGraph[7].push(tileLawn,);

        arrayFarmGraph[8].unshift(tileLawn,);
        arrayFarmGraph[8].push(tileLawn,);

        arrayFarmGraph[9].unshift(tileLawn,);
        arrayFarmGraph[9].push(tileLawn,);

        arrayFarmGraph[10].unshift(tileLawn,);
        arrayFarmGraph[10].push(tileLawn,);

        arrayFarmGraph.unshift(
            [
                tileForest,
                tileTrees,
                tileShrubs4,
                tileShrubs3,
                tileStump,
                tileShrubs2,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileShrubs1,
                tileLawn,
                tilePathN2E,
                tilePathH,
                tilePathN2W,
                tileShrubs3,
            ],
        );

        arrayFarmGraph.push(
            [
                tileShrubs1,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                PickCropTile(3, 0),
                PickCropTile(3, 1),
                PickCropTile(3, 2),
                PickCropTile(3, 3),
                PickCropTile(3, 4),
                PickCropTile(3, 5),
                PickCropTile(3, 6),
                tileLawn,
                tileLawn,
                PickCropTile(4, 7),
                PickCropTile(4, 8),
                PickCropTile(4, 9),
                PickCropTile(4, 10),
                PickCropTile(4, 11),
                PickCropTile(4, 12),
                PickCropTile(4, 13),
                tileLawn,
                tileDeadTree,
            ],
            [
                tileLawn,
                tileLawn,
                PickCropTile(3, 7),
                PickCropTile(3, 8),
                PickCropTile(3, 9),
                PickCropTile(3, 10),
                PickCropTile(3, 11),
                PickCropTile(3, 12),
                PickCropTile(3, 13),
                tileLawn,
                tileLawn,
                PickCropTile(5, 0),
                PickCropTile(5, 1),
                PickCropTile(5, 2),
                PickCropTile(5, 3),
                PickCropTile(5, 4),
                PickCropTile(5, 5),
                PickCropTile(5, 6),
                tileShrubs3,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                PickCropTile(4, 0),
                PickCropTile(4, 1),
                PickCropTile(4, 2),
                PickCropTile(4, 3),
                PickCropTile(4, 4),
                PickCropTile(4, 5),
                PickCropTile(4, 6),
                tileLawn,
                tileLawn,
                PickCropTile(5, 7),
                PickCropTile(5, 8),
                PickCropTile(5, 9),
                PickCropTile(5, 10),
                PickCropTile(5, 11),
                PickCropTile(5, 12),
                PickCropTile(5, 13),
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileShrubs2,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tilePathH,
            ],
        );
    }

    if (farmStage > 13) {
        canvasFarm.style.width = ((20 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((18 * 16) + 2) * pixelScale + 'px';
        arrayFarmGraph[0][9] = tilePathV;
        arrayFarmGraph[0][10] = tilePathV;

        arrayFarmGraph[1][9] = tilePathV;
        arrayFarmGraph[1][10] = tilePathV;

        arrayFarmGraph[2][9] = tilePathV;
        arrayFarmGraph[2][10] = tilePathV;

        arrayFarmGraph[3][9] = tilePathV;
        arrayFarmGraph[3][10] = tilePathV;

        arrayFarmGraph[4][9] = tilePathV;
        arrayFarmGraph[4][10] = tilePathV;

        arrayFarmGraph[5][9] = tilePathV2E;
        arrayFarmGraph[5][10] = tilePathCross;
        arrayFarmGraph[5][11] = tilePathH;
        arrayFarmGraph[5][12] = tilePathH;
        arrayFarmGraph[5][13] = tilePathH;

        arrayFarmGraph[6][9] = tilePathV;
        arrayFarmGraph[6][10] = tilePathV;
        arrayFarmGraph[6][14] = tilePathV;

        arrayFarmGraph[7][9] = tilePathV;
        arrayFarmGraph[7][10] = tilePathV;
        arrayFarmGraph[7][14] = tilePathV;

        arrayFarmGraph[8][9] = tilePathV;
        arrayFarmGraph[8][10] = tilePathV;

        arrayFarmGraph[9][9] = tilePathV;
        arrayFarmGraph[9][10] = tilePathV;

        arrayFarmGraph[10][9] = tilePathV;
        arrayFarmGraph[10][10] = tilePathV;

        arrayFarmGraph[11][1] = tileFenceV;
        arrayFarmGraph[11][2] = tileLawn;
        arrayFarmGraph[11][3] = tileLawn;
        arrayFarmGraph[11][4] = tileLawn;
        arrayFarmGraph[11][6] = tilePathH;
        arrayFarmGraph[11][7] = tilePathH;
        arrayFarmGraph[11][8] = tilePathH;
        arrayFarmGraph[11][9] = tilePathCross;
        arrayFarmGraph[11][10] = tilePathCross;
        arrayFarmGraph[11][11] = tilePathH;
        arrayFarmGraph[11][12] = tilePathH;
        arrayFarmGraph[11][13] = tileLawn;
        arrayFarmGraph[11][14] = tilePathH;
        arrayFarmGraph[11][15] = tilePathH;
        arrayFarmGraph[11][16] = tilePathH;
        arrayFarmGraph[11][17] = tilePathH;
        arrayFarmGraph[11][18] = tileFenceV;

        arrayFarmGraph[12][1] = tileFenceV;
        arrayFarmGraph[12][3] = tilePathH;
        arrayFarmGraph[12][4] = tilePathH;
        arrayFarmGraph[12][5] = tilePathH;
        arrayFarmGraph[12][7] = tilePathH;
        arrayFarmGraph[12][8] = tilePathH;
        arrayFarmGraph[12][9] = tilePathCross;
        arrayFarmGraph[12][10] = tilePathCross;
        arrayFarmGraph[12][11] = tilePathH;
        arrayFarmGraph[12][13] = tilePathH;
        arrayFarmGraph[12][14] = tilePathH;
        arrayFarmGraph[12][16] = tilePathH;
        arrayFarmGraph[12][18] = tileFenceV;

        arrayFarmGraph[13][1] = tileFenceV;
        arrayFarmGraph[13][10] = tilePathV;
        arrayFarmGraph[13][18] = tileFenceV;

        arrayFarmGraph[14][1] = tileFenceV;
        arrayFarmGraph[14][10] = tilePathV;
        arrayFarmGraph[14][18] = tileFenceV;

        arrayFarmGraph[15][1] = tileFenceV;
        arrayFarmGraph[15][18] = tileFenceV;

        arrayFarmGraph[16][1] = tileFenceSW;
        arrayFarmGraph[16][2] = tileFenceH;
        arrayFarmGraph[16][3] = tileFenceH;
        arrayFarmGraph[16][4] = tileFenceH;
        arrayFarmGraph[16][6] = tileFenceH;
        arrayFarmGraph[16][7] = tileFenceH;
        arrayFarmGraph[16][8] = tileFenceH;
        arrayFarmGraph[16][11] = tileFenceH;
        arrayFarmGraph[16][12] = tileFenceH;
        arrayFarmGraph[16][13] = tileFenceH;
        arrayFarmGraph[16][15] = tileFenceH;
        arrayFarmGraph[16][16] = tileFenceH;
        arrayFarmGraph[16][17] = tileFenceH;
        arrayFarmGraph[16][18] = tileFenceSE;
    }

    if (farmStage > 14) {
        canvasFarm.style.width = ((20 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((18 * 16) + 2) * pixelScale + 'px';
        arrayFarmGraph[0][8] = tileRoughPathR;
        arrayFarmGraph[0][9] = tileCobblestoneW;
        arrayFarmGraph[0][10] = tileCobblestoneE;
        arrayFarmGraph[0][11] = tileRoughPathL;

        arrayFarmGraph[1][7] = tilePlinth;
        arrayFarmGraph[1][8] = tileRoughPathR;
        arrayFarmGraph[1][9] = tileCobblestoneW;
        arrayFarmGraph[1][10] = tileCobblestoneE;
        arrayFarmGraph[1][11] = tileRoughPathL;
        arrayFarmGraph[1][12] = tilePlinth;

        arrayFarmGraph[2][8] = tileRoughPathR;
        arrayFarmGraph[2][9] = tileCobblestoneW;
        arrayFarmGraph[2][10] = tileCobblestoneE;
        arrayFarmGraph[2][11] = tileRoughPathL;

        arrayFarmGraph[3][8] = tileRoughPathR;
        arrayFarmGraph[3][9] = tileCobblestoneEdgeW;
        arrayFarmGraph[3][10] = tileCobblestoneEdgeE;
        arrayFarmGraph[3][11] = tileRoughPathL;
    }

    if (farmStage > 15) {
        canvasFarm.style.width = ((20 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((18 * 16) + 2) * pixelScale + 'px';
        arrayFarmGraph[3][4] = tilePathV;

        arrayFarmGraph[4][2] = tileWell;
        arrayFarmGraph[4][4] = tilePathV;
        arrayFarmGraph[4][6] = tilePathV;

        arrayFarmGraph[5][2] = tilePathV;
        arrayFarmGraph[5][4] = tilePathV;

        arrayFarmGraph[6][2] = tilePathN2E;
        arrayFarmGraph[6][3] = tilePathH;
        arrayFarmGraph[6][4] = tilePathH2N;
        arrayFarmGraph[6][5] = tilePathH2S;
        arrayFarmGraph[6][6] = tilePathH2N;
        arrayFarmGraph[6][7] = tilePathH;
        arrayFarmGraph[6][8] = tilePathH;
        arrayFarmGraph[6][9] = tilePathCross;
        arrayFarmGraph[6][10] = tilePathV2W;

        arrayFarmGraph[7][5] = tilePathV;
    }

    if (farmStage > 16) {
        canvasFarm.height = 23 * 16;
        canvasFarm.style.width = ((20 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((23 * 16) + 2) * pixelScale + 'px';

        arrayFarmGraph.push(
            [
                tileLawn,
                tileFenceV,
                PickCropTile(6, 0),
                PickCropTile(6, 1),
                PickCropTile(6, 2),
                PickCropTile(6, 3),
                PickCropTile(6, 4),
                PickCropTile(6, 5),
                PickCropTile(6, 6),
                PickCropTile(6, 7),
                PickCropTile(6, 8),
                PickCropTile(6, 9),
                PickCropTile(6, 10),
                PickCropTile(6, 11),
                PickCropTile(6, 12),
                PickCropTile(6, 13),
                tileLawn,
                tileLawn,
                tileFenceV,
                tileLawn,
            ],
            [
                tileLawn,
                tileFenceV,
                PickCropTile(7, 0),
                PickCropTile(7, 1),
                PickCropTile(7, 2),
                PickCropTile(7, 3),
                PickCropTile(7, 4),
                PickCropTile(7, 5),
                PickCropTile(7, 6),
                PickCropTile(7, 7),
                PickCropTile(7, 8),
                PickCropTile(7, 9),
                PickCropTile(7, 10),
                PickCropTile(7, 11),
                PickCropTile(7, 12),
                PickCropTile(7, 13),
                tilePathH,
                tilePathS2W,
                tileFenceV,
                tileLawn,
            ],
            [
                tileLawn,
                tileFenceV,
                PickCropTile(8, 0),
                PickCropTile(8, 1),
                PickCropTile(8, 2),
                PickCropTile(8, 3),
                PickCropTile(8, 4),
                PickCropTile(8, 5),
                PickCropTile(8, 6),
                PickCropTile(8, 7),
                PickCropTile(8, 8),
                PickCropTile(8, 9),
                PickCropTile(8, 10),
                PickCropTile(8, 11),
                PickCropTile(8, 12),
                PickCropTile(8, 13),
                tileRocks,
                tileWell,
                tileFenceV,
                tileShrubs2,
            ],
            [
                tileShrubs4,
                tileFenceSW,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileLawn,
                tileShrubs2,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceSE,
                tileShrubs4,
            ],
            [
                tileTrees,
                tileShrubs3,
                tileShrubs4,
                tileShrubs2,
                tileLawn,
                tileShrubs1,
                tileLawn,
                tileShrubs2,
                tileShrubs3,
                tileLawn,
                tileLawn,
                tileLawn,
                tileShrubs1,
                tileLawn,
                tileShrubs2,
                tileShrubs4,
                tileShrubs3,
                tileShrubs4,
                tileTrees,
                tileForest,
            ],
        );
    }

    if (residenceStage > 6) {
        arrayFarmGraph[4][12] = tilePathV;
        arrayFarmGraph[4][13] = tileBrewery;
        arrayFarmGraph[5][12] = tilePathH2N;
    }

    if (residenceStage > 7) {
        arrayFarmGraph[3][12] = tileWinery;
    }

    if (residenceStage > 8) {
        arrayFarmGraph[4][11] = tileKitchen;
    }

    if (residenceStage > 9) {
        arrayFarmGraph[6][11] = tilePress;
    }

    if (farmStage > 17) {
        canvasFarm.width = 24 * 16;
        canvasFarm.height = 44 * 16;
        canvasFarm.style.width = ((24 * 16) + 2) * pixelScale + 'px';
        canvasFarm.style.height = ((44 * 16) + 2) * pixelScale + 'px';

        arrayFarmGraph[0].unshift(tileTrees, tileShrubs4,);
        arrayFarmGraph[0].push(tilePathV, tileRocks,);

        arrayFarmGraph[1].unshift(tileForest, tileTrees,);
        arrayFarmGraph[1].push(tilePathV, tileLawn,);

        arrayFarmGraph[2].unshift(tileForest, tileShrubs3,);
        arrayFarmGraph[2].push(tilePathV, tileLawn,);

        arrayFarmGraph[3].unshift(tileTrees, tileLawn,);
        arrayFarmGraph[3].push(tilePathV, tileLawn,);

        arrayFarmGraph[4].unshift(tileShrubs4, tilePathV,);
        arrayFarmGraph[4].push(tilePathV, tileLawn,);

        arrayFarmGraph[5].unshift(tileShrubs2, tileLawn,);
        arrayFarmGraph[5].push(tilePathV, tileLawn,);

        arrayFarmGraph[6].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[6].push(tilePathV, tileLawn,);

        arrayFarmGraph[7].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[7].push(tilePathV, tileLawn,);

        arrayFarmGraph[8].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[8].push(tilePathV, tileLawn,);

        arrayFarmGraph[9].unshift(tileLawn, tileLawn,);
        arrayFarmGraph[9].push(tilePathV, tileLawn,);

        arrayFarmGraph[10].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[10].push(tilePathN2E, tilePathS2W,);

        arrayFarmGraph[11].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[11].push(tileRocks, tilePathV,);

        arrayFarmGraph[12].unshift(tileLawn, tileLawn,);
        arrayFarmGraph[12].push(tilePathS2E, tilePathN2W,);

        arrayFarmGraph[13].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[13].push(tilePathV, tileLawn,);

        arrayFarmGraph[14].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[14].push(tilePathV, tileLawn,);

        arrayFarmGraph[15].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[15].push(tilePathV, tileLawn,);

        arrayFarmGraph[16].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[16].push(tilePathV, tileLawn,);

        arrayFarmGraph[17].unshift(tileLawn, tilePathV2E,);
        arrayFarmGraph[17].push(tilePathV2W, tileLawn,);

        arrayFarmGraph[18].unshift(tileLawn, tilePathV,);
        arrayFarmGraph[18].push(tilePathV, tileLawn,);

        arrayFarmGraph[19].unshift(tileLawn, tileLawn,);
        arrayFarmGraph[19].push(tilePathV, tileLawn,);

        arrayFarmGraph[20].unshift(tileLawn, tileLawn,);
        arrayFarmGraph[20].push(tilePathV, tileLawn,);

        arrayFarmGraph[21].unshift(tileLawn, tileLawn,);
        arrayFarmGraph[21].push(tilePathV, tileLawn,);

        arrayFarmGraph[22].unshift(tileLawn, tileLawn,);
        arrayFarmGraph[22].push(tilePathV, tileLawn,);

        arrayFarmGraph.unshift(
            [
                tileForest,
                tileForest,
                tileForest,
                tileTrees,
                tileBigTreeSW,
                tileBigTreeSE,
                tileTrees,
                tileShrubs4,
                tileShrubs1,
                tileLawn,
                tileRoughPathR,
                tileCobblestoneW,
                tileCobblestoneE,
                tileRoughPathL,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileRiverN2E,
                tileRiverH,
                tileRiverN2W,
            ],
            [
                tileForest,
                tileForest,
                tileTrees,
                tileForest,
                tileTrees,
                tileShrubs4,
                tileShrubs3,
                tileLawn,
                tileHitchingPostV,
                tileLawn,
                tileRoughPathR,
                tileCobblestoneW,
                tileCobblestoneE,
                tileRoughPathLroad,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathS2W,
                tileRocks,
                tilePathS2E,
                tilePathH,
                tilePathS2W,
                tileLawn,
            ],
        );

        arrayFarmGraph.push(
            [
                tileLawn,
                tileLawn,
                tileShrubs1,
                tileFenceNW,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceNE,
                tileTrees,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileFenceV,
                PickDatePalmTile(0),
                PickDatePalmTile(1),
                tilePathV,
                PickDatePalmTile(2),
                PickDatePalmTile(3),
                tilePathV,
                PickFigTile(0),
                PickFigTile(1),
                PickFigTile(2),
                PickFigTile(3),
                tilePathV,
                PickFigTile(8),
                PickFigTile(9),
                tilePathV,
                PickOliveTile(9),
                PickOliveTile(10),
                tileFenceV,
                tileShrubs3,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tileFenceV,
                tileShrubs2,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                PickDatePalmTile(4),
                PickDatePalmTile(5),
                tilePathV,
                PickDatePalmTile(6),
                PickDatePalmTile(7),
                tilePathV,
                tileLawn,
                tilePathV2E,
                tileWell,
                tileLawn,
                tilePathV,
                PickFigTile(10),
                PickFigTile(11),
                tilePathV,
                PickOliveTile(11),
                PickOliveTile(12),
                tileFenceV,
                tileLawn,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileFenceV,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tileFenceV,
                tileLawn,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                PickDatePalmTile(8),
                PickDatePalmTile(9),
                tilePathV,
                PickDatePalmTile(10),
                PickDatePalmTile(11),
                tilePathV,
                PickFigTile(4),
                PickFigTile(5),
                PickFigTile(6),
                PickFigTile(7),
                tilePathV,
                PickFigTile(12),
                PickFigTile(13),
                tileLawn,
                PickOliveTile(13),
                PickOliveTile(14),
                tileFenceV,
                tileSignpostE,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceSW,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tilePathV,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tilePathV,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileGateN,
                tileLawn,
                tilePathV,
                tileLawn,
            ],
            [
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tileGateM,
                tilePathH,
                tilePathH2N,
                tilePathH,
            ],
            [
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tileGateM,
                tilePathH,
                tilePathH,
                tilePathH,
            ],
            [
                tileLawn,
                tilePathV,
                tileSignpostW,
                tileFenceNW,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tilePathV,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tilePathV,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileGateS,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                PickPomTile(0),
                PickPomTile(1),
                tilePathV,
                PickPomTile(2),
                tilePathS2E,
                tilePathH2N,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH2N,
                tilePathS2W,
                tileLawn,
                tilePathV,
                PickPomTile(9),
                PickPomTile(10),
                tileFenceV,
                tileShrubs3,
                tileHitchingPostH,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathV2W,
                PickGrapeTile(0, true),
                PickGrapeTile(1, false),
                tileGrapeTrellisPostNE,
                PickGrapeTile(4, true),
                PickGrapeTile(5, false),
                tileGrapeTrellisPostNE,
                tileLawn,
                tileLawn,
                tilePathCross,
                tilePathH,
                tilePathH,
                tileFenceV,
                tileLawn,
                tileLawnScrub1,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileFenceV,
                PickPomTile(3),
                PickPomTile(4),
                tilePathV,
                PickPomTile(5),
                tilePathV,
                PickGrapeTile(2, false),
                PickGrapeTile(3, false),
                tileGrapeTrellisEdgeE,
                PickGrapeTile(6, false),
                PickGrapeTile(7, false),
                tileGrapeTrellisEdgeE,
                tileLawn,
                tileWell,
                tileLawn,
                PickPomTile(11),
                PickPomTile(12),
                tileFenceV,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathV2W,
                tileGrapeTrellisPostSW,
                tileGrapeTrellisEdgeS,
                tileGrapeTrellisPostSE,
                tileGrapeTrellisPostSW,
                tileGrapeTrellisEdgeS,
                tileGrapeTrellisPostSE,
                tileLawn,
                tileLawn,
                tilePathCross,
                tilePathH,
                tilePathH,
                tileFenceV,
                tileLawn,
                tileShrubs2,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceV,
                PickPomTile(6),
                PickPomTile(7),
                tilePathV,
                PickPomTile(8),
                tilePathN2E,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathN2W,
                tileLawn,
                tilePathV,
                PickPomTile(13),
                PickPomTile(14),
                tileFenceV,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileFenceSW,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceH,
                tileFenceSE,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathV,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tilePathN2E,
                tilePathH,
                tilePathH,
                tileLawn,
                tilePathH,
                tilePathH,
                tileLawn,
                tilePathH,
                tileLawn,
                tileLawn,
                tilePathH2S,
                tilePathH,
                tileLawn,
                tilePathH,
                tileLawn,
                tileLawn,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathS2W,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileShrubs1,
                tileLawn,
                tileShrubs3,
                tileShrubs4,
                tileForest,
                tileTrees,
                tilePathV,
                tileLawn,
            ],
        );
    }

    if (player.hasMansion) {
        arrayFarmGraph[0][6] = tilePathV;

        arrayFarmGraph[1][2] = tilePathV;
        arrayFarmGraph[1][6] = tilePathV;
        arrayFarmGraph[1][18] = tilePathH;
        arrayFarmGraph[1][19] = tilePathH;
        arrayFarmGraph[1][20] = tilePathH;

        arrayFarmGraph[2][1] = tilePathS2E;
        arrayFarmGraph[2][2] = tilePathH2N;
        arrayFarmGraph[2][3] = tilePathH;
        arrayFarmGraph[2][4] = tilePathH;
        arrayFarmGraph[2][5] = tilePathH;
        arrayFarmGraph[2][6] = tilePathH2N;
        arrayFarmGraph[2][7] = tilePathH;
        arrayFarmGraph[2][8] = tilePathH;
        arrayFarmGraph[2][9] = tilePathH;
        arrayFarmGraph[2][10] = tileRoughPathRroad;
        arrayFarmGraph[2][18] = tileLawn;
        arrayFarmGraph[2][19] = tileLawn;
        arrayFarmGraph[2][20] = tileLawn;
        arrayFarmGraph[2][23] = tileLawn;

        arrayFarmGraph[3][1] = tilePathV;

        arrayFarmGraph[4][1] = tilePathV;
        arrayFarmGraph[4][4] = tilePathS2E;
        arrayFarmGraph[4][5] = tilePathH;
        arrayFarmGraph[4][6] = tilePathH2S;
        arrayFarmGraph[4][7] = tilePathH;
        arrayFarmGraph[4][8] = tilePathH2S;
        arrayFarmGraph[4][9] = tilePathH;
        arrayFarmGraph[4][10] = tileRoughPathRroad;

        arrayFarmGraph[5][1] = tilePathV;
        arrayFarmGraph[5][4] = tilePathV;
        arrayFarmGraph[5][8] = tilePathV;

        arrayFarmGraph[7][1] = tilePathV;
        arrayFarmGraph[7][8] = tilePathV;

        arrayFarmGraph[11][1] = tilePathV;

        arrayFarmGraph[12][22] = tilePathV;
        arrayFarmGraph[12][23] = tileLawn;

        arrayFarmGraph[13][4] = tilePathS2E;
        arrayFarmGraph[13][5] = tilePathH;
        arrayFarmGraph[13][6] = tilePathH;
        arrayFarmGraph[13][7] = tilePathH;
        arrayFarmGraph[13][15] = tilePathH;
        arrayFarmGraph[13][19] = tilePathS2W;
        arrayFarmGraph[13][22] = tilePathV;
        arrayFarmGraph[13][23] = tileLawn;

        arrayFarmGraph[14][1] = tilePathV;
        arrayFarmGraph[14][4] = tilePathN2E;
        arrayFarmGraph[14][8] = tilePathH;
        arrayFarmGraph[14][14] = tilePathH;
        arrayFarmGraph[14][17] = tilePathH;
        arrayFarmGraph[14][19] = tilePathN2W;
        arrayFarmGraph[14][22] = tilePathV;
        arrayFarmGraph[14][23] = tileLawn;

        arrayFarmGraph[15][11] = tilePathV;
        arrayFarmGraph[15][21] = tileLawn;

        arrayFarmGraph[16][11] = tilePathV;

        arrayFarmGraph[17][11] = tilePathV;
        arrayFarmGraph[17][12] = tilePathV;

        arrayFarmGraph[18][7] = tilePathV;
        arrayFarmGraph[18][11] = tilePathV;
        arrayFarmGraph[18][12] = tilePathV;
        arrayFarmGraph[18][16] = tilePathV;

        arrayFarmGraph[19][2] = tilePathH;
        arrayFarmGraph[19][3] = tilePathH;
        arrayFarmGraph[19][4] = tilePathH;
        arrayFarmGraph[19][5] = tilePathH;
        arrayFarmGraph[19][6] = tilePathH;
        arrayFarmGraph[19][7] = tilePathH2N;
        arrayFarmGraph[19][8] = tilePathH;
        arrayFarmGraph[19][9] = tilePathH;
        arrayFarmGraph[19][10] = tilePathH;
        arrayFarmGraph[19][11] = tilePathH2N;
        arrayFarmGraph[19][12] = tilePathH2N;
        arrayFarmGraph[19][13] = tilePathH;
        arrayFarmGraph[19][14] = tilePathH;
        arrayFarmGraph[19][15] = tilePathH;
        arrayFarmGraph[19][16] = tilePathH2N;
        arrayFarmGraph[19][17] = tilePathH;
        arrayFarmGraph[19][18] = tilePathH;
        arrayFarmGraph[19][19] = tilePathH2S;
        arrayFarmGraph[19][20] = tilePathH;

        arrayFarmGraph[20][19] = tilePathV;

        arrayFarmGraph[21][1] = tilePathV;
        arrayFarmGraph[21][19] = tilePathV2W;

        arrayFarmGraph[22][1] = tilePathV;
        arrayFarmGraph[22][18] = tileLawn;

        arrayFarmGraph[23][1] = tilePathV;

        arrayFarmGraph[24][1] = tilePathV;

        arrayFarmGraph[25][1] = tilePathV;

        arrayFarmGraph[26][1] = tilePathV;

        arrayFarmGraph[29][1] = tilePathV;

        arrayFarmGraph[30][17] = tilePathV;

        arrayFarmGraph[36][15] = tilePathV2E;
        arrayFarmGraph[36][16] = tilePathH;

        arrayFarmGraph[37][1] = tilePathV;
        arrayFarmGraph[37][15] = tilePathV2W;
        arrayFarmGraph[37][17] = tilePathV;

        arrayFarmGraph[38][15] = tilePathV2E;
        arrayFarmGraph[38][16] = tilePathH;

        arrayFarmGraph[42][4] = tilePathH;
        arrayFarmGraph[42][7] = tilePathH;
        arrayFarmGraph[42][9] = tilePathH;
        arrayFarmGraph[42][10] = tilePathH;
        arrayFarmGraph[42][12] = tilePathH2S;
        arrayFarmGraph[42][13] = tilePathH;
        arrayFarmGraph[42][15] = tilePathH;
        arrayFarmGraph[42][16] = tilePathH;

        arrayFarmGraph[43][11] = tilePathV;
        arrayFarmGraph[43][12] = tilePathV;
    }

    if (player.hasNewFarm) {
        canvasFarm.height = 59 * 16;
        canvasFarm.style.height = ((59 * 16) + 2) * pixelScale + 'px';

        arrayFarmGraph.push(
            [
                tileLawn,
                tileLawn,
                tileStoneFenceNW,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceEndE,
                tileLawn,
                tilePathV,
                tileLawn,
                tileLawn,
                tileStoneFenceEndW,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceNE,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceV,
                tilePathS2E,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathCross,
                tilePathCross,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathH2S,
                tilePathS2W,
                tileStoneFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceV,
                tilePathV,
                PickCropTile(9, 0),
                PickCropTile(9, 1),
                PickCropTile(9, 2),
                PickCropTile(9, 3),
                PickCropTile(9, 4),
                PickCropTile(9, 5),
                PickCropTile(9, 6),
                tilePathV,
                tilePathV,
                PickCropTile(9, 7),
                PickCropTile(9, 8),
                PickCropTile(9, 9),
                PickCropTile(9, 10),
                PickCropTile(9, 11),
                PickCropTile(9, 12),
                PickCropTile(9, 13),
                tilePathV,
                tileStoneFenceV,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceV,
                tilePathV,
                PickCropTile(10, 0),
                PickCropTile(10, 1),
                PickCropTile(10, 2),
                PickCropTile(10, 3),
                PickCropTile(10, 4),
                PickCropTile(10, 5),
                PickCropTile(10, 6),
                tilePathV,
                tilePathV,
                PickCropTile(10, 7),
                PickCropTile(10, 8),
                PickCropTile(10, 9),
                PickCropTile(10, 10),
                PickCropTile(10, 11),
                PickCropTile(10, 12),
                PickCropTile(10, 13),
                tilePathV,
                tileStoneFenceV,
                tilePathV,
                tileLawn,
            ],
            [
                tileLawn,
                tileSignpostW,
                tileStoneFenceEndS,
                tilePathV,
                PickCropTile(11, 0),
                PickCropTile(11, 1),
                PickCropTile(11, 2),
                PickCropTile(11, 3),
                PickCropTile(11, 4),
                PickCropTile(11, 5),
                PickCropTile(11, 6),
                tilePathV,
                tilePathV,
                PickCropTile(11, 7),
                PickCropTile(11, 8),
                PickCropTile(11, 9),
                PickCropTile(11, 10),
                PickCropTile(11, 11),
                PickCropTile(11, 12),
                PickCropTile(11, 13),
                tilePathV,
                tileStoneFenceEndS,
                tileLawn,
                tileLawn,
            ],
            [
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathH,
                tilePathH2N,
                tilePathH,
            ],
            [
                tileLawn,
                tileLawn,
                tileHitchingPostV,
                tilePathV2E,
                tileWell,
                tilePathCross,
                tileWell,
                tilePathCross,
                tileWell,
                tilePathCross,
                tileWell,
                tilePathCross,
                tilePathCross,
                tileWell,
                tilePathCross,
                tileWell,
                tilePathCross,
                tileWell,
                tilePathCross,
                tileWell,
                tilePathV2W,
                tileHitchingPostV,
                tileLawn,
                tileLawn,
            ],
            [
                tilePathH,
                tilePathH,
                tilePathH,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathCross,
                tilePathH,
                tilePathH,
                tilePathH,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceEndN,
                tilePathV,
                PickCropTile(12, 0),
                PickCropTile(12, 1),
                PickCropTile(12, 2),
                PickCropTile(12, 3),
                PickCropTile(12, 4),
                PickCropTile(12, 5),
                PickCropTile(12, 6),
                tilePathV,
                tilePathV,
                PickCropTile(12, 7),
                PickCropTile(12, 8),
                PickCropTile(12, 9),
                PickCropTile(12, 10),
                PickCropTile(12, 11),
                PickCropTile(12, 12),
                PickCropTile(12, 13),
                tilePathV,
                tileStoneFenceEndN,
                tileSignpostE,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceV,
                tilePathV,
                PickCropTile(13, 0),
                PickCropTile(13, 1),
                PickCropTile(13, 2),
                PickCropTile(13, 3),
                PickCropTile(13, 4),
                PickCropTile(13, 5),
                PickCropTile(13, 6),
                tilePathV,
                tilePathV,
                PickCropTile(13, 7),
                PickCropTile(13, 8),
                PickCropTile(13, 9),
                PickCropTile(13, 10),
                PickCropTile(13, 11),
                PickCropTile(13, 12),
                PickCropTile(13, 13),
                tilePathV,
                tileStoneFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceV,
                tilePathV,
                PickCropTile(14, 0),
                PickCropTile(14, 1),
                PickCropTile(14, 2),
                PickCropTile(14, 3),
                PickCropTile(14, 4),
                PickCropTile(14, 5),
                PickCropTile(14, 6),
                tilePathV,
                tilePathV,
                PickCropTile(14, 7),
                PickCropTile(14, 8),
                PickCropTile(14, 9),
                PickCropTile(14, 10),
                PickCropTile(14, 11),
                PickCropTile(14, 12),
                PickCropTile(14, 13),
                tilePathV,
                tileStoneFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceV,
                tilePathN2E,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathCross,
                tilePathCross,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathH2N,
                tilePathN2W,
                tileStoneFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileStoneFenceEndW,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceEndE,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawnScrub2,
                tileStoneFenceEndW,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceH,
                tileStoneFenceSE,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tilePathV,
                tilePathV,
                tileHitchingPostH,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
            ],
        );

        if (player.hasMansion) {
            arrayFarmGraph[44][12] = tilePathV;

            arrayFarmGraph[45][22] = tilePathV;

            arrayFarmGraph[48][22] = tilePathV;
        }
    }

    if (player.hasFlaxFarm) {
        canvasFarm.height = 76 * 16;
        canvasFarm.style.height = ((76 * 16) + 2) * pixelScale + 'px';

        arrayFarmGraph.push(
            [
                tileLawn,
                tileLawn,
                tileTallFenceNW,
                tileTallFenceH,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceH,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceEndE,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tileTallFenceSW,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceH,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceH,
                tileTallFenceNE,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceV,
                tilePathS2E,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathCross,
                tilePathCross,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathH2S,
                tilePathH,
                tilePathS2W,
                tileTallFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceWindowVTop,
                tilePathV,
                PickFlaxTile(0, 0),
                tilePathV,
                PickFlaxTile(0, 3),
                tilePathV,
                PickFlaxTile(1, 0),
                tilePathV,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tilePathV,
                PickFlaxTile(4, 3),
                tilePathV,
                PickFlaxTile(5, 0),
                tilePathV,
                PickFlaxTile(5, 3),
                tilePathV,
                tileTallFenceWindowVTop,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceWindowVBottom,
                tilePathV,
                PickFlaxTile(0, 1),
                tilePathV,
                PickFlaxTile(0, 4),
                tilePathV,
                PickFlaxTile(1, 1),
                tilePathV,
                tileWell,
                tilePathV,
                tilePathV,
                tileWell,
                tilePathV,
                PickFlaxTile(4, 4),
                tilePathV,
                PickFlaxTile(5, 1),
                tilePathV,
                PickFlaxTile(5, 4),
                tilePathV,
                tileTallFenceWindowVBottom,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceGateVTop,
                tilePathV,
                PickFlaxTile(0, 2),
                tilePathV,
                PickFlaxTile(0, 5),
                tilePathV,
                PickFlaxTile(1, 2),
                tilePathV,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tilePathV,
                PickFlaxTile(4, 5),
                tilePathV,
                PickFlaxTile(5, 2),
                tilePathV,
                PickFlaxTile(5, 5),
                tilePathV,
                tileTallFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tilePathH,
                tilePathH,
                tileTallFenceGateVMiddle,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathV2W,
                tileTallFenceWindowVTop,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileHitchingPostV,
                tileTallFenceGateVBottom,
                tilePathV,
                PickFlaxTile(1, 3),
                tilePathV,
                PickFlaxTile(2, 0),
                tilePathV,
                PickFlaxTile(2, 3),
                tilePathV,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tilePathV,
                PickFlaxTile(6, 0),
                tilePathV,
                PickFlaxTile(6, 3),
                tilePathV,
                PickFlaxTile(7, 0),
                tilePathV,
                tileTallFenceWindowVBottom,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceV,
                tilePathV,
                PickFlaxTile(1, 4),
                tilePathV,
                PickFlaxTile(2, 1),
                tilePathV,
                PickFlaxTile(2, 4),
                tilePathV,
                tileWell,
                tilePathV,
                tilePathV,
                tileWell,
                tilePathV,
                PickFlaxTile(6, 1),
                tilePathV,
                PickFlaxTile(6, 4),
                tilePathV,
                PickFlaxTile(7, 1),
                tilePathV,
                tileTallFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceWindowVTop,
                tilePathV,
                PickFlaxTile(1, 5),
                tilePathV,
                PickFlaxTile(2, 2),
                tilePathV,
                PickFlaxTile(2, 5),
                tilePathV,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tilePathV,
                PickFlaxTile(6, 2),
                tilePathV,
                PickFlaxTile(6, 5),
                tilePathV,
                PickFlaxTile(7, 2),
                tilePathV,
                tileTallFenceGateVTop,
                tileHitchingPostV,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceWindowVBottom,
                tilePathV2E,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tilePathH,
                tilePathCross,
                tileTallFenceGateVMiddle,
                tilePathH,
                tilePathH,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceV,
                tilePathV,
                PickFlaxTile(3, 0),
                tilePathV,
                PickFlaxTile(3, 3),
                tilePathV,
                PickFlaxTile(4, 0),
                tilePathV,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tilePathV,
                PickFlaxTile(7, 3),
                tilePathV,
                PickFlaxTile(8, 0),
                tilePathV,
                PickFlaxTile(8, 3),
                tilePathV,
                tileTallFenceGateVBottom,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceWindowVTop,
                tilePathV,
                PickFlaxTile(3, 1),
                tilePathV,
                PickFlaxTile(3, 4),
                tilePathV,
                PickFlaxTile(4, 1),
                tilePathV,
                tileWell,
                tilePathV,
                tilePathV,
                tileWell,
                tilePathV,
                PickFlaxTile(7, 4),
                tilePathV,
                PickFlaxTile(8, 1),
                tilePathV,
                PickFlaxTile(8, 4),
                tilePathV,
                tileTallFenceWindowVTop,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceWindowVBottom,
                tilePathV,
                PickFlaxTile(3, 2),
                tilePathV,
                PickFlaxTile(3, 5),
                tilePathV,
                PickFlaxTile(4, 2),
                tilePathV,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tilePathV,
                PickFlaxTile(7, 5),
                tilePathV,
                PickFlaxTile(8, 2),
                tilePathV,
                PickFlaxTile(8, 5),
                tilePathV,
                tileTallFenceWindowVBottom,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceV,
                tilePathN2E,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathCross,
                tilePathCross,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathH2N,
                tilePathH,
                tilePathN2W,
                tileTallFenceV,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileTallFenceSW,
                tileTallFenceH,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceH,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceEndE,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tileTallFenceSW,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceH,
                tileTallFenceWindowHLeft,
                tileTallFenceWindowHRight,
                tileTallFenceH,
                tileTallFenceSE,
                tileLawn,
                tileLawn,
            ],
            [
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawnLog,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileHitchingPostH,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tileSignpostS,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawnRocky1,
            ],
            [
                tileLawnMuddy,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tilePathV,
                tilePathV,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawn,
                tileLawnRocky2,
                tileAutograph,
            ],
        );
    }

    TileRenderer(arrayFarmGraph, canvasFarmContext);

    if (player.hasMansion) { canvasFarmContext.drawImage(mansionImage, 0, 0, 256, 128, 79, 52, 256, 128); }
    if (player.hasApiary) { canvasFarmContext.drawImage(beesImage, 0, 0, 256, 128, 79, 52, 256, 128); }
    if (player.hasCottage) { canvasFarmContext.drawImage(cottageAImage, 0, 0, 23, 41, 155, 1032, 23, 41); }
    if (player.hasBandages) { canvasFarmContext.drawImage(cottageBImage, 0, 0, 23, 36, 155 + 47, 1032 + 23, 23, 36); }
}



function RedrawForest() {
    const arrayForestGraph = [
        [
            tilePineTree,
            tileRiverV,
            tileBigTreeSW,
            tileBigTreeSE,
            tileRiverV,
            tilePineTree,
            tilePineTree,
            tileTrees,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeSE,
            tilePathV,
            tilePathV,
            tilePineTree,
            tileShrubs4,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeSE,
            tileRiverS2E,
            tileRiverH,
            tileRiverH,
            tileRiverV2W,
            tilePineTree,
            tileRiverS2E,
        ],
        [
            tileRiverS2E,
            tileRiverN2W,
            tilePineTree,
            tileTrees,
            tileRiverV,
            tilePineTree,
            tileTrees,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tileShrubs2,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tilePineTree,
            tileShrubs4,
            tileRiverS2E,
            tileRiverN2W,
            tileBigTreeNW,
            tileBigTreeNE,
            tileRiverN2E,
            tileRiverH,
            tileRiverN2W,
        ],
        [
            tileRiverN2W,
            tilePineTree,
            tileForest,
            tileRiverS2E,
            tileRiverN2W,
            tileTrees,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tileShrubs3,
            tileLawn,
            tilePathV,
            tilePathV,
            tileLawn,
            tilePineTree,
            tileShrubs4,
            tileRiverS2E,
            tileRiverN2W,
            tileBigTreeNW,
            tileBigTreeNE2,
            tileBigTreeNW2,
            tileBigTreeNE,
            tileTrees,
            tilePineTree,
        ],
        [
            tilePineTree,
            tileForest,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tilePineTree,
            tileTrees,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tileLawn,
            tilePathV,
            tilePathV,
            tilePineTree,
            tileShrubs4,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeNW2,
            tileBigTreeNE2,
            tileBigTreeSE,
            tilePineTree,
            tilePineTree,
        ],
        [
            tileForest,
            tilePineTree,
            tileForest,
            tileRiverV,
            tileForest,
            tilePineTree,
            tilePineTree,
            tileTrees,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tilePathV,
            tilePathV,
            tileLawn,
            tilePineTree,
            tileRiverS2E,
            tileRiverN2W,
            tilePineTree,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeSE,
            tilePineTree,
            tileTrees,
            tilePineTree,
        ],
        [
            tilePineTree,
            tileForest,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileBigTreeNW,
            tileBigTreeNE,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tilePineTree,
            tilePathV,
            tilePathV,
            tileLawn,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileShrubs4,
            tileRocks,
            tilePineTree,
            tilePineTree,
            tileForest,
            tilePineTree,
            tileTrees,
        ],
        [
            tilePineTree,
            tileForest,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeSE,
            tilePineTree,
            tileShrubs4,
            tileShrubs2,
            tilePineTree,
            tilePathV,
            tilePathV,
            tileLawn,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileShrubs3,
            tilePineTree,
            tileBigTreeNW,
            tileBigTreeNE,
            tileTrees,
            tileGraves,
            tileForest,
        ],
        [
            tilePineTree,
            tileForest,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileForest,
            tilePineTree,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tilePineTree,
            tilePathV,
            tilePathV,
            tileLawn,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tileShrubs4,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeSE,
            tileForest,
            tilePineTree,
            tileTrees,
        ],
        [
            tileForest,
            tilePineTree,
            tileForest,
            tileRiverN2E,
            tileRiverHForest,
            tileRiverS2W,
            tilePineTree,
            tileForest,
            tilePineTree,
            tilePineTree,
            tileTrees,
            tilePathV,
            tilePathV,
            tileLawn,
            tilePineTree,
            tileRiverV,
            tilePineTree,
            tilePineTree,
            tileLawn,
            tilePineTree,
            tileShrubs4,
            tilePineTree,
            tileRiverS2E,
            tileRiverH,
        ],
        [
            tileForest,
            tileForest,
            tilePineTree,
            tileForest,
            tileForest,
            tileRiverN2E,
            tileRiverH,
            tileRiverH,
            tileRiverH,
            tileRiverH,
            tileRiverH,
            tileBridgePrim,
            tileBridgePrim,
            tileRiverH,
            tileRiverH,
            tileRiverV2W,
            tileLawn,
            tilePineTree,
            tileLawn,
            tilePineTree,
            tileLawn,
            tilePineTree,
            tileRiverV,
            tilePineTree,
        ],
        [
            tileForest,
            tileForest,
            tileBigTreeNW,
            tileBigTreeNE,
            tileForest,
            tileTrees,
            tileTrees,
            tileTrees,
            tilePineTree,
            tileTrees,
            tilePineTree,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileRiverN2E,
            tileRiverS2W,
            tileBigTreeNW,
            tileBigTreeNE,
            tileLawn,
            tilePineTree,
            tileRiverS2E,
            tileRiverH2N,
            tileRiverH,
        ],
        [
            tilePineTree,
            tileBigTreeNW,
            tileBigTreeNE2,
            tileBigTreeSE,
            tilePineTree,
            tileTrees,
            tileShrubs4,
            tileShrubs2,
            tileLawn,
            tileLawn,
            tileLawn,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverV,
            tileBigTreeSW,
            tileBigTreeSE,
            tileRiverS2E,
            tileRiverH,
            tileRiverV2W,
            tileShrubs4,
            tilePineTree,
        ],
        [
            tileForest,
            tileBigTreeSW,
            tileBigTreeSE,
            tileForest,
            tileTrees,
            tileShrubs4,
            tileShrubs2,
            tileLawn,
            tileLawn,
            tilePineTree,
            tileLawn,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverN2E,
            tileRiverH,
            tileRiverH,
            tileRiverN2W,
            tileLawn,
            tileRiverV,
            tilePineTree,
            tileShrubs4,
        ],
        [
            tileForest,
            tilePineTree,
            tileForest,
            tilePineTree,
            tileBigTreeNW,
            tileBigTreeNE,
            tileShrubs4,
            tileShrubs2,
            tileLawn,
            tileLawn,
            tileLawn,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRocks,
            tileRiverV,
            tileRocks,
            tileRiverS2E,
        ],
    ];

    if (player.canLog) {
        arrayForestGraph[5][4] = tileLogCampNW;
        arrayForestGraph[5][5] = tileLogCampN;
        arrayForestGraph[5][6] = tileLogCampNE;
        arrayForestGraph[6][4] = tileLogCampW;
        arrayForestGraph[6][5] = tileLogCampM;
        arrayForestGraph[6][6] = tileLogCampE;
        arrayForestGraph[7][4] = tileLogCampSW;
        arrayForestGraph[7][5] = tileLogCampS;
        arrayForestGraph[7][6] = tileLogCampSE;

        arrayForestGraph[7][7] = tilePathHPeterE;
        arrayForestGraph[7][8] = tilePathH;
        arrayForestGraph[7][9] = tilePathH;
        arrayForestGraph[7][10] = tilePathH;
        arrayForestGraph[7][11] = tilePathV2W;
    }

    if (player.canSaw) {
        arrayForestGraph[7][11] = tilePathCross;
        arrayForestGraph[7][12] = tilePathCross;
        arrayForestGraph[7][13] = tilePathH;

        arrayForestGraph[7][14] = tileSawmillNW;
        arrayForestGraph[7][15] = tileSawmillNE;
        arrayForestGraph[8][14] = tileSawmillSW;
        arrayForestGraph[8][15] = tileSawmillSE;
        arrayForestGraph[8][16] = tileSawmillSEfar;

        arrayForestGraph[6][16] = tileLogCampNE;
        arrayForestGraph[7][16] = tileLogCampNE;
    }

    if (farmStage > 11) {
        arrayForestGraph[8][6] = tileStumps;
        arrayForestGraph[8][7] = tileStumps;
    }

    if (farmStage > 12) {
        arrayForestGraph[8][8] = tileStumps;
        arrayForestGraph[8][9] = tileStumps;
    }

    if (farmStage > 13) {
        arrayForestGraph[6][7] = tileStumps;
        arrayForestGraph[6][10] = tileStumps;
        arrayForestGraph[8][10] = tileStumps;
    }

    if (player.seesMountain) {
        arrayForestGraph[5][7] = tileStumps;
        arrayForestGraph[4][6] = tileStumps;
    }

    if (farmStage > 14) {
        arrayForestGraph[3][4] = tileStumps;
        arrayForestGraph[4][5] = tileStumps;
        arrayForestGraph[4][4] = tileStumps;

        arrayForestGraph[0][10] = tileRoughPathRbigTreeSE;
        arrayForestGraph[0][11] = tileCobblestoneW;
        arrayForestGraph[0][12] = tileCobblestoneE;
        arrayForestGraph[0][13] = tileRoughPathL;

        arrayForestGraph[1][10] = tileRoughPathR;
        arrayForestGraph[1][11] = tileCobblestoneW;
        arrayForestGraph[1][12] = tileCobblestoneE;
        arrayForestGraph[1][13] = tileRoughPathL;

        arrayForestGraph[2][10] = tileRoughPathR;
        arrayForestGraph[2][11] = tileCobblestoneW;
        arrayForestGraph[2][12] = tileCobblestoneE;
        arrayForestGraph[2][13] = tileRoughPathL;

        arrayForestGraph[3][10] = tileRoughPathR;
        arrayForestGraph[3][11] = tileCobblestoneW;
        arrayForestGraph[3][12] = tileCobblestoneE;
        arrayForestGraph[3][13] = tileRoughPathL;

        arrayForestGraph[4][10] = tileRoughPathR;
        arrayForestGraph[4][11] = tileCobblestoneW;
        arrayForestGraph[4][12] = tileCobblestoneE;
        arrayForestGraph[4][13] = tileRoughPathL;

        arrayForestGraph[5][10] = tileRoughPathR;
        arrayForestGraph[5][11] = tileCobblestoneW;
        arrayForestGraph[5][12] = tileCobblestoneE;
        arrayForestGraph[5][13] = tileRoughPathL;

        arrayForestGraph[6][10] = tileRoughPathR;
        arrayForestGraph[6][11] = tileCobblestoneW;
        arrayForestGraph[6][12] = tileCobblestoneE;
        arrayForestGraph[6][13] = tileRoughPathL;

        arrayForestGraph[7][10] = tileRoughPathRroad;
        arrayForestGraph[7][11] = tileCobblestoneW;
        arrayForestGraph[7][12] = tileCobblestoneE;
        arrayForestGraph[7][13] = tileRoughPathLroad;

        arrayForestGraph[8][10] = tileRoughPathR;
        arrayForestGraph[8][11] = tileCobblestoneW;
        arrayForestGraph[8][12] = tileCobblestoneE;
        arrayForestGraph[8][13] = tileRoughPathL;

        arrayForestGraph[9][10] = tileRoughPathRriver;
        arrayForestGraph[9][11] = tileBridgeNew;
        arrayForestGraph[9][12] = tileBridgeNew;
        arrayForestGraph[9][13] = tileRoughPathLriver;

        arrayForestGraph[10][10] = tileRoughPathR;
        arrayForestGraph[10][11] = tileCobblestoneW;
        arrayForestGraph[10][12] = tileCobblestoneE;
        arrayForestGraph[10][13] = tileRoughPathL;

        arrayForestGraph[11][10] = tileRoughPathR;
        arrayForestGraph[11][11] = tileCobblestoneW;
        arrayForestGraph[11][12] = tileCobblestoneE;
        arrayForestGraph[11][13] = tileRoughPathL;

        arrayForestGraph[12][10] = tileRoughPathR;
        arrayForestGraph[12][11] = tileCobblestoneW;
        arrayForestGraph[12][12] = tileCobblestoneE;
        arrayForestGraph[12][13] = tileRoughPathL;

        arrayForestGraph[13][10] = tileRoughPathR;
        arrayForestGraph[13][11] = tileCobblestoneW;
        arrayForestGraph[13][12] = tileCobblestoneE;
        arrayForestGraph[13][13] = tileRoughPathL;
    }

    if (farmStage > 15) {
        tileLogCampN = [336, 160,];
        arrayForestGraph[5][5] = tileLogCampN;
        arrayForestGraph[4][5] = tilePathV;
        arrayForestGraph[3][5] = tilePathV;
        arrayForestGraph[3][6] = tileStumps;
        arrayForestGraph[2][5] = tileStumps;
    }

    if (farmStage > 16) {
        arrayForestGraph[1][5] = tileStumps;
        arrayForestGraph[2][5] = tilePathV;
        arrayForestGraph[3][5] = tilePathV2E;
        arrayForestGraph[3][6] = tilePathH;
        arrayForestGraph[3][7] = tilePathH;
        arrayForestGraph[3][8] = tilePathH;
        arrayForestGraph[3][9] = tilePathH;
        arrayForestGraph[3][10] = tileRoughPathRroad;
    }

    if (farmStage > 17) {
        arrayForestGraph[0][5] = tileStumps;
        arrayForestGraph[1][5] = tilePathV;
        arrayForestGraph[3][13] = tileRoughPathLroad;
        arrayForestGraph[3][14] = tilePathH;
        arrayForestGraph[3][15] = tilePathH;
        arrayForestGraph[1][15] = tileStumps;
        arrayForestGraph[2][14] = tileStumps;
    }

    if (handsHired == handsMax) {
        arrayForestGraph[1][5] = tilePathV2E;
        arrayForestGraph[1][6] = tilePathH;
        arrayForestGraph[2][6] = tileStumps;
        arrayForestGraph[4][14] = tileStumps;
    }

    if (player.seesVillage) {
        arrayForestGraph[0][6] = tilePathV;
        arrayForestGraph[0][7] = tileStumps;
        arrayForestGraph[1][6] = tilePathH2N;
        arrayForestGraph[1][7] = tilePathH;
        arrayForestGraph[1][8] = tileStumps;
        arrayForestGraph[2][6] = tileStumps;
        arrayForestGraph[2][7] = tileStumps;
        arrayForestGraph[5][14] = tileStumps;
        arrayForestGraph[6][14] = tileStumps;
    }

    if (villageStage > 0) {
        arrayForestGraph[3][2] = tileStumps;
        arrayForestGraph[4][2] = tilePathH;
        arrayForestGraph[4][3] = tileBridgePrimH;
        arrayForestGraph[4][4] = tilePathH;
        arrayForestGraph[4][5] = tilePathV2W;
        arrayForestGraph[5][2] = tileStumps;
    }

    if (villageStage > 1) {
        arrayForestGraph[3][1] = tileStumps;
        arrayForestGraph[4][1] = tilePathV2E;
        arrayForestGraph[5][1] = tileStumps;
    }

    if (villageStage > 2) {
        arrayForestGraph[2][1] = tileStumps;
        arrayForestGraph[2][2] = tileStumps;
        arrayForestGraph[3][1] = tilePathV;
    }

    if (villageStage > 3) {
        arrayForestGraph[5][1] = tilePathV;
        arrayForestGraph[6][1] = tileStumps;
    }

    if (villageStage > 4) {
        arrayForestGraph[6][1] = tilePathV;
        arrayForestGraph[6][2] = tileStumps;
    }

    if (villageStage > 5) {
        arrayForestGraph[7][1] = tileStumps;
    }

    if (villageStage > 6) {
        arrayForestGraph[7][1] = tilePathV;
        arrayForestGraph[7][2] = tileStumps;
    }

    if (villageStage > 7) {
        arrayForestGraph[8][1] = tileStumps;
    }

    if (villageStage > 8) {
        arrayForestGraph[8][2] = tileStumps;
    }

    if (villageStage > 9) {
        arrayForestGraph[8][6] = tilePathVPeterN;
        arrayForestGraph[9][6] = tileBridgePrim;
        arrayForestGraph[10][6] = tilePathV;
        arrayForestGraph[11][6] = tilePathVPeterS;
    }

    if (villageStage > 10) {
        arrayForestGraph[10][7] = tileStumps;
    }

    if (villageStage > 11) {
        arrayForestGraph[10][5] = tileStumps;
        arrayForestGraph[11][5] = tileStumps;
    }

    if (villageStage > 12) {
        arrayForestGraph[10][4] = tileStumps;
        arrayForestGraph[10][5] = tilePathH;
        arrayForestGraph[10][6] = tilePathV2W;
        arrayForestGraph[11][4] = tileStumps;
    }

    if (villageStage > 13) {
        arrayForestGraph[10][6] = tilePathCross;
        arrayForestGraph[10][7] = tilePathH;
        arrayForestGraph[10][8] = tilePathH;
        arrayForestGraph[10][9] = tileStumps;
    }

    if (villageStage > 14) {
        arrayForestGraph[8][4] = tileRiverH;
        arrayForestGraph[9][4] = tileStumps;
    }

    if (villageStage > 15) {
        arrayForestGraph[8][1] = tilePathV;
        arrayForestGraph[9][1] = tileStumps;
        arrayForestGraph[9][2] = tileStumps;
        arrayForestGraph[9][3] = tileStumps;
    }

    if (villageStage > 16) {
        arrayForestGraph[3][16] = tileBridgePrimH;
        arrayForestGraph[3][17] = tilePathS2W;
        arrayForestGraph[4][17] = tilePathV2E;
        arrayForestGraph[4][18] = tileStumps;
        arrayForestGraph[5][16] = tileStumps;
        arrayForestGraph[5][17] = tilePathV;
        arrayForestGraph[6][17] = tilePathV;
        arrayForestGraph[6][18] = tileStumps;
        arrayForestGraph[7][17] = tilePathVPeterS;
        arrayForestGraph[7][18] = tileStumps;
        arrayForestGraph[8][17] = tileStumps;
    }

    if (villageStage > 17) {
        arrayForestGraph[1][2] = tileStumps;
        arrayForestGraph[1][3] = tileStumps;
        arrayForestGraph[2][2] = tilePathV;
        arrayForestGraph[3][0] = tileStumps;
        arrayForestGraph[3][1] = tilePathV2E;
        arrayForestGraph[3][2] = tilePathV2W;
        arrayForestGraph[4][0] = tilePathH;
        arrayForestGraph[4][1] = tilePathCross;
        arrayForestGraph[4][2] = tilePathH2N;
        arrayForestGraph[9][1] = tilePathH2N;
        arrayForestGraph[9][2] = tilePathH;
        arrayForestGraph[9][3] = tilePathH;
        arrayForestGraph[9][4] = tilePathS2W;
        arrayForestGraph[10][4] = tilePathN2E;
        arrayForestGraph[10][9] = tilePathH;
        arrayForestGraph[10][10] = tileRoughPathRroad;
    }

    if (player.hasMansion) {
        arrayForestGraph[5][2] = tileShrubs1;
        arrayForestGraph[5][17] = tilePathV2E;
        arrayForestGraph[5][18] = tilePathH;
        arrayForestGraph[5][19] = tilePathH;
        arrayForestGraph[5][20] = tilePathH;
        arrayForestGraph[5][21] = tilePathH;
        arrayForestGraph[5][22] = tilePathH;
        arrayForestGraph[5][23] = tilePathH;

        arrayForestGraph[6][2] = tileLawn;

        arrayForestGraph[7][2] = tileShrubs4;

        arrayForestGraph[8][2] = tileShrubs2;

        arrayForestGraph[10][4] = tilePathV2E;

        arrayForestGraph[11][4] = tilePathV;
        arrayForestGraph[11][5] = tileLawn;
        arrayForestGraph[11][6] = tilePathV;

        arrayForestGraph[12][4] = tilePathN2W;
        arrayForestGraph[12][6] = tilePathV;

        arrayForestGraph[13][6] = tilePathV;
        arrayForestGraph[13][20] = tileLawn;
    }

    TileRenderer(arrayForestGraph, canvasForestContext);
}



function RedrawMountain() {
    const arrayMountainGraph = [
        [
            tileMountain,
            tileMountainPeak,
            tileMountain,
            tileMountain,
            tileMountainPeak,
            tileMountain,
            tileMountainFoothillsM,
            tileMountainPeak,
            tileMountain,
            tileMountainFoothillsE,
            tileShrubs3,
            tilePathV,
            tilePathV,
            tileLawn,
            tileMountainFoothillsW,
            tileMountain,
            tileMountainFoothillsM,
            tileMountain,
            tileMountainPeak,
            tileMountain,
            tileRiverS2EMountain,
            tileRiverN2WMountain,
            tileMountain,
            tileMountain,
        ],
        [
            tileMountainPeak,
            tileMountain,
            tileMountain,
            tileMountainFoothillsM,
            tileMountainPeak,
            tileQuarryN,
            tileMountain,
            tileMountain,
            tileMountainFoothillsE,
            tileLawn,
            tileLawn,
            tilePathV,
            tilePathV,
            tileMountainFoothillsW,
            tileMountain,
            tileMountainFoothillsE,
            tileMountain,
            tileMountainPeak,
            tileMountain,
            tileMountain,
            tileWaterfall,
            tileMountainPeak,
            tileMountain,
            tileMountain,
        ],
        [
            tileMountain,
            tileMountain,
            tileMountainPeak,
            tileMountain,
            tileQuarryW,
            tileEarth3,
            tileQuarryE1,
            tileMountainFoothillsM,
            tileMountain,
            tileMountainFoothillsE,
            tileLawn,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileMountainFoothillsW,
            tileMountainFoothillsM,
            tileMountainFoothillsM,
            tileMineshaftBoulders,
            tileMountainPeak,
            tileRiverN2EMountain,
            tileRiverS2WMountain,
            tileMountain,
            tileMountainPeak,
        ],
        [
            tileMountain,
            tileMountainFoothillsM,
            tileMountainPeak,
            tileQuarryW,
            tileEarth3,
            tileEarth,
            tileQuarryE2,
            tileMountain,
            tileMountainFoothillsE,
            tileLawn,
            tilePineTree,
            tilePathV,
            tilePathV,
            tileLawn,
            tileMountainFoothillsW,
            tileMountainFoothillsE,
            tileMountainFoothillsW,
            tileMountainFoothillsE,
            tileMountainFoothillsW,
            tileMountainFoothillsM,
            tileMountain,
            tileWaterfall,
            tileMountainFoothillsM,
            tileMountain,
        ],
        [
            tileMountainFoothillsM,
            tileMountain,
            tileMountainFoothillsE,
            tileEarthW,
            tileQuarryBuildings,
            tileEarth2,
            tileEarth4,
            tileQuarryE3,
            tilePathHPeterE,
            tilePathH,
            tilePathH,
            tilePathCross,
            tilePathV2W,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileMountainFoothillsW,
            tileRiverS2EMountain,
            tileRiverHMountain,
            tileRiverHMountain,
            tileRiverV2WMountain,
            tileMountainPeak,
            tileMountainFoothillsM,
        ],
        [
            tileMountain,
            tileMountainFoothillsM,
            tileMountainFoothillsE,
            tileEarthSW,
            tileEarthS,
            tileEarthS,
            tileEarthS,
            tileEarthSE,
            tileMountainFoothillsW,
            tileMountainFoothillsE,
            tileShrubs3,
            tilePathV,
            tilePathV,
            tileRiverS2E,
            tileRiverH,
            tileRiverS2W,
            tileRocks,
            tileRiverS2E,
            tileRiverN2WMountain,
            tileMountain,
            tileMountainPeak,
            tileRiverV,
            tileMountainFoothillsW,
            tileMountain,
        ],
        [
            tileMountain,
            tileMountain,
            tileMountainPeak,
            tileMountainFoothillsE,
            tileLawn,
            tileMountainFoothillsW,
            tileMountainFoothillsM,
            tileMountainFoothillsE,
            tileShrubs3,
            tileShrubs4,
            tileRiverS2E,
            tileBridgePrim,
            tileBridgePrim,
            tileRiverN2W,
            tileRocks,
            tileRiverN2E,
            tileRiverH,
            tileRiverN2W,
            tileMountainFoothillsW,
            tileMountainFoothillsE,
            tileRiverS2E,
            tileRiverH2N,
            tileRiverEndE,
            tileMountainFoothillsW,
        ],
        [
            tileMountainPeak,
            tileMountain,
            tileMountainFoothillsM,
            tileMountainFoothillsM,
            tileMountainFoothillsE,
            tileLawn,
            tileLawn,
            tileShrubs3,
            tileShrubs4,
            tileRiverS2E,
            tileRiverN2W,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverV,
            tileLawn,
            tileLawn,
            tileLawn,
        ],
        [
            tileMountainFoothillsM,
            tileMountainFoothillsE,
            tileLawn,
            tileLawn,
            tileLawn,
            tileShrubs3,
            tileShrubs4,
            tileRiverS2E,
            tileRiverH,
            tileRiverN2W,
            tileShrubs2,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverEndW,
            tileRiverV2W,
            tileLawn,
            tileLawn,
            tileLawn,
        ],
        [
            tileMountainFoothillsE,
            tileLawn,
            tileShrubs4,
            tilePineTree,
            tileShrubs4,
            tileRiverS2E,
            tileRiverH,
            tileRiverN2W,
            tileShrubs2,
            tileShrubs3,
            tileShrubs1,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverV,
            tileLawn,
            tileLawn,
            tileRiverS2E,
        ],
        [
            tileShrubs4,
            tileTrees,
            tileRiverS2E,
            tileRiverHForest,
            tileRiverHForest,
            tileRiverV2W,
            tileTrees,
            tileShrubs4,
            tileShrubs4,
            tileShrubs2,
            tileLawn,
            tilePathV,
            tilePathV,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverN2E,
            tileRiverH,
            tileRiverH2S,
            tileRiverN2W,
        ],
        [
            tileTrees,
            tileRiverS2E,
            tileRiverN2W,
            tileForest,
            tileForest,
            tileRiverV,
            tilePineTree,
            tileTrees,
            tileTrees,
            tileShrubs4,
            tileShrubs2,
            tilePathV,
            tilePathV,
            tileShrubs2,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRocks,
            tileRiverV,
            tileShrubs4,
        ],
        [
            tileForest,
            tileRiverV,
            tilePineTree,
            tileForest,
            tileRiverS2E,
            tileRiverN2W,
            tileForest,
            tileForest,
            tileBigTreeNW,
            tileBigTreeNE,
            tileShrubs4,
            tilePathV,
            tilePathV,
            tileShrubs3,
            tileShrubs2,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileLawn,
            tileRiverS2E,
            tileRiverN2W,
            tileShrubs3,
        ],
        [
            tilePineTree,
            tileRiverV,
            tileBigTreeNW,
            tileBigTreeNE,
            tileRiverV,
            tilePineTree,
            tileTrees,
            tilePineTree,
            tileBigTreeSW,
            tileBigTreeNW2,
            tileBigTreeNE,
            tilePathV,
            tilePathV,
            tileShrubs4,
            tilePineTree,
            tilePineTree,
            tileBigTreeNW,
            tileBigTreeNE,
            tileLawn,
            tilePineTree,
            tileShrubs3,
            tileRiverV,
            tilePineTree,
            tileShrubs2,
        ],
    ];

    if (farmStage > 14) {
        arrayMountainGraph[0][10] = tileRoughPathR;
        arrayMountainGraph[0][11] = tileCobblestoneW;
        arrayMountainGraph[0][12] = tileCobblestoneE;
        arrayMountainGraph[0][13] = tileRoughPathL;

        arrayMountainGraph[1][10] = tileRoughPathR;
        arrayMountainGraph[1][11] = tileCobblestoneW;
        arrayMountainGraph[1][12] = tileCobblestoneE;
        arrayMountainGraph[1][13] = tileMountainFoothillsWRoad;

        arrayMountainGraph[2][10] = tileRoughPathR;
        arrayMountainGraph[2][11] = tileCobblestoneW;
        arrayMountainGraph[2][12] = tileCobblestoneE;
        arrayMountainGraph[2][13] = tileRoughPathL;

        arrayMountainGraph[3][10] = tileRoughPathRpine;
        arrayMountainGraph[3][11] = tileCobblestoneW;
        arrayMountainGraph[3][12] = tileCobblestoneE;
        arrayMountainGraph[3][13] = tileRoughPathL;

        arrayMountainGraph[4][10] = tileRoughPathRroad;
        arrayMountainGraph[4][11] = tileCobblestoneW;
        arrayMountainGraph[4][12] = tileCobblestoneE;
        arrayMountainGraph[4][13] = tileRoughPathL;

        arrayMountainGraph[5][10] = tileRoughPathR;
        arrayMountainGraph[5][11] = tileCobblestoneW;
        arrayMountainGraph[5][12] = tileCobblestoneE;
        arrayMountainGraph[5][13] = tileRiverS2ERoadL;

        arrayMountainGraph[6][10] = tileRiverS2ERoadR;
        arrayMountainGraph[6][11] = tileBridgeNew;
        arrayMountainGraph[6][12] = tileBridgeNew;
        arrayMountainGraph[6][13] = tileRiverN2WRoadL;

        arrayMountainGraph[7][10] = tileRiverN2WRoadR;
        arrayMountainGraph[7][11] = tileCobblestoneW;
        arrayMountainGraph[7][12] = tileCobblestoneE;
        arrayMountainGraph[7][13] = tileRoughPathL;

        arrayMountainGraph[8][10] = tileRoughPathR;
        arrayMountainGraph[8][11] = tileCobblestoneW;
        arrayMountainGraph[8][12] = tileCobblestoneE;
        arrayMountainGraph[8][13] = tileRoughPathL;

        arrayMountainGraph[9][10] = tileRoughPathR;
        arrayMountainGraph[9][11] = tileCobblestoneW;
        arrayMountainGraph[9][12] = tileCobblestoneE;
        arrayMountainGraph[9][13] = tileRoughPathL;

        arrayMountainGraph[10][10] = tileRoughPathR;
        arrayMountainGraph[10][11] = tileCobblestoneW;
        arrayMountainGraph[10][12] = tileCobblestoneE;
        arrayMountainGraph[10][13] = tileRoughPathL;

        arrayMountainGraph[11][10] = tileRoughPathR;
        arrayMountainGraph[11][11] = tileCobblestoneW;
        arrayMountainGraph[11][12] = tileCobblestoneE;
        arrayMountainGraph[11][13] = tileRoughPathL;

        arrayMountainGraph[12][10] = tileRoughPathR;
        arrayMountainGraph[12][11] = tileCobblestoneW;
        arrayMountainGraph[12][12] = tileCobblestoneE;
        arrayMountainGraph[12][13] = tileRoughPathL;

        arrayMountainGraph[13][10] = tileRoughPathRbigTreeNE;
        arrayMountainGraph[13][11] = tileCobblestoneW;
        arrayMountainGraph[13][12] = tileCobblestoneE;
        arrayMountainGraph[13][13] = tileRoughPathL;
    }

    if (handsHired == handsMax) {
        arrayMountainGraph[13][5] = tileStumps;
    }

    if (player.seesVillage) {
        arrayMountainGraph[12][6] = tileStumps;

        arrayMountainGraph[13][6] = tilePathV;
        arrayMountainGraph[13][7] = tileStumps;
    }

    if (villageStage > 7) {
        arrayMountainGraph[12][6] = tilePathV;
        arrayMountainGraph[12][7] = tileStumps;
    }

    if (villageStage > 8) {
        arrayMountainGraph[10][6] = tilePathVPeterN;

        arrayMountainGraph[11][6] = tilePathV;
        arrayMountainGraph[11][7] = tileStumps;
    }

    if (villageStage > 9) {
        arrayMountainGraph[10][3] = tileRiverH;
        arrayMountainGraph[10][4] = tileRiverH;

        arrayMountainGraph[11][3] = tileStumps;
        arrayMountainGraph[11][4] = tilePathHPeterE;
        arrayMountainGraph[11][5] = tileBridgePrimH;
        arrayMountainGraph[11][6] = tilePathV2W;
    }

    if (villageStage > 10) {
        arrayMountainGraph[12][3] = tileStumps;
    }

    if (villageStage > 11) {
        arrayMountainGraph[12][2] = tileStumps;
    }

    if (villageStage > 12) {
        arrayMountainGraph[11][6] = tilePathCross;
        arrayMountainGraph[11][7] = tilePathH;
        arrayMountainGraph[11][8] = tilePathH;
        arrayMountainGraph[11][9] = tilePathH;
        arrayMountainGraph[11][10] = tileRoughPathRroad;
    }

    if (villageStage > 13) {
        arrayMountainGraph[11][3] = tileLawn;
    }

    if (villageStage > 14) {
        arrayMountainGraph[12][3] = tileLawn;
    }

    if (villageStage > 15) {
        arrayMountainGraph[12][2] = tileLawn;
    }

    if (player.hasMonument) {
        arrayMountainGraph[12][2] = tileShrine;
    }

    if (player.hasFoundMine) {
        arrayMountainGraph[3][18] = tilePathN2WMountain;

        arrayMountainGraph[4][13] = tileRoughPathLroad;
        arrayMountainGraph[4][14] = tilePathH;
        arrayMountainGraph[4][15] = tilePathH;
        arrayMountainGraph[4][16] = tilePathH;
        arrayMountainGraph[4][17] = tilePathN2WMountain;
    }

    if (player.canMine) {
        arrayMountainGraph[2][18] = tileMineshaft;
    }

    if (player.canSmelt) {
        arrayMountainGraph[4][16] = tilePathH2S;

        arrayMountainGraph[5][16] = tilePathV;

        arrayMountainGraph[6][16] = tileBridgePrim;

        arrayMountainGraph[7][16] = tilePathV;

        arrayMountainGraph[8][14] = tileEarthNW;
        arrayMountainGraph[8][15] = tileEarthN;
        arrayMountainGraph[8][16] = tilePathVPeterSclay;
        arrayMountainGraph[8][17] = tileBrazierDousedNW;
        arrayMountainGraph[8][18] = tileBrazierDousedNE;

        arrayMountainGraph[9][14] = tileEarthW;
        arrayMountainGraph[9][15] = tileFurnaceNW;
        arrayMountainGraph[9][16] = tileFurnaceNE;
        arrayMountainGraph[9][17] = tileBrazierDousedSW;
        arrayMountainGraph[9][18] = tileBrazierDousedSE;
        arrayMountainGraph[9][19] = tileEarthNE;

        arrayMountainGraph[10][13] = tileRoughPathLroad;
        arrayMountainGraph[10][14] = tilePathHPeterEclay;
        arrayMountainGraph[10][15] = tileFurnaceSW;
        arrayMountainGraph[10][16] = tileFurnaceSE;
        arrayMountainGraph[10][17] = tileEarth;
        arrayMountainGraph[10][18] = tileBrazierLit;
        arrayMountainGraph[10][19] = tileEarthE;

        arrayMountainGraph[11][14] = tileEarthSW;
        arrayMountainGraph[11][15] = tileEarthS;
        arrayMountainGraph[11][16] = tileEarthS;
        arrayMountainGraph[11][17] = tileEarthS;
        arrayMountainGraph[11][18] = tileEarthS;
        arrayMountainGraph[11][19] = tileEarthSE;
    }

    if (player.hasMansion) {
        arrayMountainGraph[7][12] = tilePathV2E;
        arrayMountainGraph[7][13] = tilePathH;
        arrayMountainGraph[7][14] = tilePathH;
        arrayMountainGraph[7][15] = tilePathH;
        arrayMountainGraph[7][16] = tilePathH;
        arrayMountainGraph[7][17] = tilePathH;
        arrayMountainGraph[7][18] = tilePathH;
        arrayMountainGraph[7][19] = tilePathH;
        arrayMountainGraph[7][20] = tileBridgeNewH;
        arrayMountainGraph[7][21] = tilePathS2W;

        arrayMountainGraph[8][21] = tilePathN2E;
        arrayMountainGraph[8][22] = tilePathH;
        arrayMountainGraph[8][23] = tilePathH;
    }

    if (player.hasMansion && farmStage > 14) {
        arrayMountainGraph[7][12] = tileCobblestoneE;
        arrayMountainGraph[7][13] = tileRoughPathLroad;
    }

    if (player.hasMansion && player.canSmelt) {
        arrayMountainGraph[7][16] = tilePathCross;
    }

    TileRenderer(arrayMountainGraph, canvasMountainContext);

    if (player.hasHiredBronzeworkers) { canvasMountainContext.drawImage(smeltImage, 0 + smeltImageOffset, 0, 8, 8, 79 + 205, 52 + 88, 8, 8); }
    if (player.hasHiredGemcutters) { canvasMountainContext.drawImage(crystalMineImage, 0, 0, 32, 32, 48, 32, 32, 32); }
}



function TileRenderer(sourceArray, destinationContext) {
    const tileDimensionX = 16;
    const tileDimensionY = 16;
    let sourceX = 0;
    let sourceY = 0;
    let destinationX = 0;
    let destinationY = 0;
    let rowCount = 0;

    destinationContext.clearRect(0, 0, destinationContext.canvas.width, destinationContext.canvas.height);

    for (let i = 0; i < sourceArray.length; i++) {
        let columnCount = 0;
        for (let i = 0; i < sourceArray[rowCount].length; i++) {
            sourceX = sourceArray[rowCount][columnCount][0];
            sourceY = sourceArray[rowCount][columnCount][1];
            destinationContext.drawImage(tilemap, sourceX, sourceY, tileDimensionX, tileDimensionY, destinationX, destinationY, tileDimensionX, tileDimensionY);
            destinationX += tileDimensionX;
            columnCount++;
        }
        destinationX = 0;
        destinationY += tileDimensionY;
        rowCount++;
    }
}



function RedrawVillage() {
    let tempString = '&nbsp;';
    if (estDate[1] != 0) { tempString = 'Est. ' + RomanceNumber(estDate[1]); }
    divVillageEstDate.innerHTML = tempString;

    tempString = displayVillageTitleNEG1;
    if (villageStage > -4) { tempString = displayVillageTitle0; } // ceremony
    if (villageStage > 2) { tempString = displayVillageTitle1; } // town hall
    if (villageStage > 5) { tempString = displayVillageTitle2; } // market
    if (villageStage > 9) { tempString = displayVillageTitle3; } // third insula
    if (villageStage > 13) { tempString = displayVillageTitle4; } // bank
    if (villageStage > 17) { tempString = displayVillageTitle5; } // army
    if (villageStage > 24) { tempString = displayVillageTitle6; } // colosseum
    if (villageStage > 100) { tempString = displayVillageTitle7; } // monument
    divVillageName.innerHTML = tempString + ' ' + nameVillage;

    canvasVillageContext.drawImage(villageImageCurrent, 0, 0, 384, 224, 0, 0, 384, 224);
    if (villageImageAnimationLayerA.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerA, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerB.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerB, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerC.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerC, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerD.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerD, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerE.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerE, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerF.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerF, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerG.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerG, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerH.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerH, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerI.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerI, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerJ.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerJ, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerK.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerK, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerL.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerL, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerM.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerM, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageImageAnimationLayerN.src != 'bitmaps/blank.png') { canvasVillageContext.drawImage(villageImageAnimationLayerN, 0, 0, 384, 224, 0, 0, 384, 224); }
    if (villageStage > 25) { canvasVillageContext.drawImage(villageTheaterOverlay, 0, 0, 384, 224, 0, 0, 384, 224); }
}



function RedrawResidence() {
    canvasResidenceContext.drawImage(residenceImage, 0, 0, 384, 224, 0, 0, 384, 224);
    if (residenceStage > 2 && residenceStage < 12) { canvasResidenceContext.drawImage(residenceTorchImage, 0, 0, 384, 224, 0, 0, 384, 224); }
}



function RedrawPort() {
    if (!player.hasWentToAman) {
        canvasPortContext.drawImage(portImage, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasPortContext.drawImage(portGullImage, 0, 0, 384, 224, 0, 0, 384, 224);
    }
    else {
        canvasPortContext.drawImage(portFrodoImage, 0, 0, 384, 224, 0, 0, 384, 224);
    }
}



function RedrawMap() {
    if (player.hasHelpedMiners) { mapMinersImage.src = 'bitmaps/map_minersVassalState.png'; }
    if (player.hasHelpedShepherds) { mapShepherdsImage.src = 'bitmaps/map_shepherdsVassalState.png'; }

    canvasMapContext.globalAlpha = 1.0;
    canvasMapContext.drawImage(mapImage, 0, 0, 208, 173, 0, 0, 208, 173);
    canvasMapContext.drawImage(mapIconsImage, 0, 0, 208, 173, 0, 0, 208, 173);

    let whoGetsDrawed = mapPlayerImage;
    if (mapTarget == 1) { whoGetsDrawed = mapShepherdsImage; }
    if (mapTarget == 2) { whoGetsDrawed = mapFarmersImage; }
    if (mapTarget == 3) { whoGetsDrawed = mapMinersImage; }
    canvasMapContext.globalAlpha = mapOutlineOpacity;
    canvasMapContext.drawImage(whoGetsDrawed, 0, 0, 208, 173, 0, 0, 208, 173);

    canvasMapContext.globalAlpha = 1.0;
    if (mapTarget != 0) { canvasMapContext.drawImage(mapPlayerImage, 0, 0, 208, 173, 0, 0, 208, 173); }
    if (mapTarget != 1) { canvasMapContext.drawImage(mapShepherdsImage, 0, 0, 208, 173, 0, 0, 208, 173); }
    if (mapTarget != 2) { canvasMapContext.drawImage(mapFarmersImage, 0, 0, 208, 173, 0, 0, 208, 173); }
    if (mapTarget != 3) { canvasMapContext.drawImage(mapMinersImage, 0, 0, 208, 173, 0, 0, 208, 173); }
}



function RedrawShepherds() {
    if (player.hasHelpedShepherds) { neighborsShepherdsImage.src = 'bitmaps/neighborsShepherdsNouveauRiche.png'; }
    canvasShepherdsContext.drawImage(neighborsShepherdsImage, 0, 0, 384, 224, 0, 0, 384, 224);
    canvasShepherdsContext.drawImage(neighborsSheepFacingImage, 0, 0, 15, 23, 300 - 23, 200 - 23, 15, 23);
    canvasShepherdsContext.drawImage(neighborsSheepHeadImage, 0, 0, 24, 26, 292, 178, 24, 26);
    canvasShepherdsContext.drawImage(neighborsSheepTailImage, 0, 0, 21, 26, 316, 178, 21, 26);
}



function RedrawMiners() {
    if (player.hasHelpedMiners) { neighborsMinersImage.src = 'bitmaps/neighborsMinersFlourishingMoistInOurLane.png'; }
    canvasMinersContext.drawImage(neighborsMinersImage, 0, 0, 384, 224, 0, 0, 384, 224);
    canvasMinersContext.drawImage(neighborsMeeplesImage, 0, 0, 384, 224, 0, 0, 384, 224);
    if (!player.hasHelpedMiners) {
        canvasMinersContext.drawImage(neighborsDagsImageA, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasMinersContext.drawImage(neighborsDagsImageB, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasMinersContext.drawImage(neighborsBandidoImage, 0, 0, 384, 224, 0, 0, 384, 224);
    }
    else {
        canvasMinersContext.drawImage(neighborsCampfireImage, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasMinersContext.drawImage(neighborsCoalsImage, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasMinersContext.drawImage(neighborsNeko_tanImage, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasMinersContext.drawImage(neighborsHerpyImage, 0, 0, 384, 224, 0, 0, 384, 224);
        canvasMinersContext.drawImage(neighborsBlinksImage, 0, 0, 384, 224, 0, 0, 384, 224);
    }
}



function RedrawFarmers() {
    canvasFarmersContext.drawImage(neighborsFarmersImage, 0, 0, 384, 224, 0, 0, 384, 224);
    canvasFarmersContext.drawImage(neighborsDucksImage, 0, 0, 31, 20, 194, 137, 31, 20);
}



function AnimateHeirButton() {
    frameHeirButton++;
    if (frameHeirButton == 4) { frameHeirButton = 0; }
    const greenifyOpen = '<span style="font-weight: bold; color: green;">';
    const greenifyClose = '</span>';
    const arrayHeirFrames = [
        '<span class="icon Crown1 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown4 inlineIcon"></span><br>' + greenifyOpen + '(' + greenifyClose + '<span id="buttonChooseHeirHeart">♥</span>' + greenifyOpen + ')' + greenifyClose,
        '<span class="icon Crown2 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown3 inlineIcon"></span><br>' + greenifyOpen + '(' + greenifyClose + '<span id="buttonChooseHeirHeart">♥</span>' + greenifyOpen + ')' + greenifyClose,
        '<span class="icon Crown3 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown2 inlineIcon"></span><br>' + greenifyOpen + '(' + greenifyClose + '<span id="buttonChooseHeirHeart">♥</span>' + greenifyOpen + ')' + greenifyClose,
        '<span class="icon Crown4 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown1 inlineIcon"></span><br>' + greenifyOpen + '(' + greenifyClose + '<span id="buttonChooseHeirHeart">♥</span>' + greenifyOpen + ')' + greenifyClose,
    ];
    buttonChooseHeir.innerHTML = arrayHeirFrames[frameHeirButton];
    timeoutHeirButton = setTimeout(AnimateHeirButton, 82); // 🤰
}



function AnimateHourglass(newSpeed) {
    const arrayHourglassStandardFrames = [
        [0, 0,],
        [-16, 0,],
        [-16 * 2, 0,],
        [-16 * 3, 0,],
        [-16 * 4, 0,],
        [-16 * 5, 0,],
        [-16 * 6, 0,],
        [-16 * 7, 0,],
        [-16 * 8, 0,],
        [-16 * 9, 0,],
        [-16 * 10, 0,],
        [-16 * 11, 0,],
        [-16 * 12, 0,],
        [-16 * 13, 0,],
        [-16 * 14, 0,],
        [-16 * 15, 0,],
        [-16 * 16, 0,],
        [-16 * 16, 0,],
        [-16 * 16, 0,],
        [-16 * 16, 0,],
    ];
    const arrayHourglassFastFrames = [
        [-16 * 17, 0,],
        [-16 * 18, 0,],
    ];
    const arrayHourglassHighFrames = [
        [-16 * 19, 0,],
        [-16 * 20, 0,],
        [-16 * 21, 0,],
        [-16 * 22, 0,],
        [-16 * 23, 0,],
    ];
    const arrayHourglassUltraFrames = [
        [0, -16,],
        [0, -16,],
        [0, -16,],
        [-16, -16,],
        [-16, -16,],
        [-16, -16,],
        [-16 * 2, -16,],
        [-16 * 2, -16,],
        [-16 * 2, -16,],
        [-16 * 3, -16,],
        [-16 * 3, -16,],
        [-16 * 3, -16,],
        [-16 * 4, -16,],
        [-16 * 4, -16,],
        [-16 * 4, -16,],
        [-16 * 5, -16,],
        [-16 * 5, -16,],
        [-16 * 5, -16,],
        [-16 * 4, -16,],
        [-16 * 4, -16,],
        [-16 * 4, -16,],
        [-16 * 3, -16,],
        [-16 * 3, -16,],
        [-16 * 3, -16,],
        [-16 * 2, -16,],
        [-16 * 2, -16,],
        [-16 * 2, -16,],
        [-16, -16,],
        [-16, -16,],
        [-16, -16,],
        [0, -16,],
        [0, -16,],
        [0, -16,],
        [-16 * 6, -16,],
        [-16 * 6, -16,],
        [-16 * 6, -16,],
        [-16 * 7, -16,],
        [-16 * 7, -16,],
        [-16 * 7, -16,],
        [-16 * 8, -16,],
        [-16 * 8, -16,],
        [-16 * 8, -16,],
        [-16 * 9, -16,],
        [-16 * 9, -16,],
        [-16 * 9, -16,],
        [-16 * 10, -16,],
        [-16 * 10, -16,],
        [-16 * 10, -16,],
        [-16 * 9, -16,],
        [-16 * 9, -16,],
        [-16 * 9, -16,],
        [-16 * 8, -16,],
        [-16 * 8, -16,],
        [-16 * 8, -16,],
        [-16 * 7, -16,],
        [-16 * 7, -16,],
        [-16 * 7, -16,],
        [-16 * 6, -16,],
        [-16 * 6, -16,],
        [-16 * 6, -16,],
    ];
    const arrayHourglassPause = [
        [-16 * 24, 0,],
    ];

    if (newSpeed == oldSpeed && gameSpeed != 'paused') {
        frameHourglass++;
        if (frameHourglass == frameHourglassMax) {
            frameHourglass = 0;
            GameTurn();
        }
        if (frameHourglass != 0 && turnPerFrame) { GameTurn(); }
    }
    else {
        frameHourglass = 0;
        arrayHourglassInUse = arrayHourglassPause;

        if (newSpeed == 'standard') {
            frameHourglassMax = 20;
            turnPerFrame = false;
            delayAmountHourglassFrame = 50; // 1 second = 1 turn
            arrayHourglassInUse = arrayHourglassStandardFrames;
        }
        else if (newSpeed == 'fast') {
            frameHourglassMax = 2;
            turnPerFrame = true;
            delayAmountHourglassFrame = 100; // 1 second = 10 turns
            arrayHourglassInUse = arrayHourglassFastFrames;
        }
        else if (newSpeed == 'high') {
            frameHourglassMax = 5;
            turnPerFrame = true;
            delayAmountHourglassFrame = 10; // 1 second = 100 turns (most likely)
            arrayHourglassInUse = arrayHourglassHighFrames;
        }
        else if (newSpeed == 'ultra') {
            frameHourglassMax = 60;
            turnPerFrame = true;
            delayAmountHourglassFrame = 1; // 1 second = 1000 turns (theoretically)
            arrayHourglassInUse = arrayHourglassUltraFrames;
        }
    }
    oldSpeed = newSpeed;
    const pixelScale = window.getComputedStyle(divHourglass).getPropertyValue('--pixel-scale');
    divHourglass.style.backgroundPosition = arrayHourglassInUse[frameHourglass][0] * pixelScale + 'px ' + arrayHourglassInUse[frameHourglass][1] * pixelScale + 'px';
    if (gameSpeed != 'paused') { timeoutHourglass = setTimeout(AnimateHourglass, delayAmountHourglassFrame, newSpeed); }
}



function AnimateCanvases() {
    RedrawCanvases();
    globalAnimationFrame++;
    if (globalAnimationFrame != animationFPS) {
        clearTimeout(timeoutCanvases);
        timeoutCanvases = setTimeout(AnimateCanvases, animationInterval);
    }
}



function RedrawCanvases() {
    if (player.isAt == 'Praedium') {
        RedrawFarm();
        if (player.seesForest) { RedrawForest(); }
        if (player.seesMountain) { RedrawMountain(); }
    }
    else if (player.isAt == 'Township') { RedrawVillage(); }
    else if (player.isAt == 'Residence') { RedrawResidence(); }
    else if (player.isAt == 'Port') { RedrawPort(); }
    else if (player.isAt == 'Map') { RedrawMap(); }
    else if (player.isAt == 'Shepherds') { RedrawShepherds(); }
    else if (player.isAt == 'Miners') { RedrawMiners(); }
    else if (player.isAt == 'Farmers') { RedrawFarmers(); }

    if (player.likesAnimations) {
        animationCycleFrame++;
        if (animationCycleFrame == 16) { animationCycleFrame = 0; }

        if (player.isAt == 'Praedium') {
            const arrayWaterfallFrames = [
                [320, 14 * 16,],
                [320, 14 * 16,],
                [320 + 16, 14 * 16,],
                [320 + 16, 14 * 16,],
                [320 + 32, 14 * 16,],
                [320 + 32, 14 * 16,],
                [320 + 48, 14 * 16,],
                [320 + 48, 14 * 16,],
                [320, 14 * 16,],
                [320, 14 * 16,],
                [320 + 16, 14 * 16,],
                [320 + 16, 14 * 16,],
                [320 + 32, 14 * 16,],
                [320 + 32, 14 * 16,],
                [320 + 48, 14 * 16,],
                [320 + 48, 14 * 16,],
            ];
            tileWaterfall = arrayWaterfallFrames[animationCycleFrame];

            const arraySawmillNEFrames = [
                [21 * 16, 8 * 16,],
                [21 * 16, 8 * 16,],
                [22 * 16, 8 * 16,],
                [22 * 16, 8 * 16,],
                [23 * 16, 8 * 16,],
                [23 * 16, 8 * 16,],
                [24 * 16, 8 * 16,],
                [24 * 16, 8 * 16,],
                [21 * 16, 8 * 16,],
                [21 * 16, 8 * 16,],
                [22 * 16, 8 * 16,],
                [22 * 16, 8 * 16,],
                [23 * 16, 8 * 16,],
                [23 * 16, 8 * 16,],
                [24 * 16, 8 * 16,],
                [24 * 16, 8 * 16,],
            ];
            tileSawmillNE = arraySawmillNEFrames[animationCycleFrame];

            const arraySawmillSEFrames = [
                [21 * 16, 9 * 16,],
                [21 * 16, 9 * 16,],
                [21 * 16, 9 * 16,],
                [21 * 16, 9 * 16,],
                [22 * 16, 9 * 16,],
                [22 * 16, 9 * 16,],
                [22 * 16, 9 * 16,],
                [22 * 16, 9 * 16,],
                [23 * 16, 9 * 16,],
                [23 * 16, 9 * 16,],
                [23 * 16, 9 * 16,],
                [23 * 16, 9 * 16,],
                [24 * 16, 9 * 16,],
                [24 * 16, 9 * 16,],
                [24 * 16, 9 * 16,],
                [24 * 16, 9 * 16,],
            ];
            tileSawmillSE = arraySawmillSEFrames[animationCycleFrame];

            const arrayBrazierLitFrames = [
                [18 * 16, 10 * 16,],
                [18 * 16, 10 * 16,],
                [19 * 16, 11 * 16,],
                [19 * 16, 11 * 16,],
                [19 * 16, 12 * 16,],
                [19 * 16, 12 * 16,],
                [19 * 16, 13 * 16,],
                [19 * 16, 13 * 16,],
                [19 * 16, 14 * 16,],
                [19 * 16, 14 * 16,],
                [18 * 16, 14 * 16,],
                [18 * 16, 14 * 16,],
                [17 * 16, 14 * 16,],
                [17 * 16, 14 * 16,],
                [16 * 16, 14 * 16,],
                [16 * 16, 14 * 16,],
            ];
            tileBrazierLit = arrayBrazierLitFrames[animationCycleFrame];

            const arrayFurnaceSEFrames = [
                [15 * 16, 9 * 16,],
                [16 * 16, 9 * 16,],
                [17 * 16, 9 * 16,],
                [12 * 16, 10 * 16,],
                [14 * 16, 10 * 16,],
                [15 * 16, 10 * 16,],
                [16 * 16, 10 * 16,],
                [17 * 16, 10 * 16,],
                [15 * 16, 9 * 16,],
                [16 * 16, 9 * 16,],
                [17 * 16, 9 * 16,],
                [12 * 16, 10 * 16,],
                [14 * 16, 10 * 16,],
                [15 * 16, 10 * 16,],
                [16 * 16, 10 * 16,],
                [17 * 16, 10 * 16,],
            ];
            tileFurnaceSE = arrayFurnaceSEFrames[animationCycleFrame];

            if (smeltImageToggle) {
                smeltImageOffset += 8;
                if (smeltImageOffset == 64) { smeltImageOffset = 0; }
            }
            smeltImageToggle = !smeltImageToggle;
        }
        else if (player.isAt == 'Township') {
            villageImageCurrent.src = villageImageActual.src;
            if ((week == 1 && year % 10 == 0) && player.hasMonument) { villageImageCurrent.src = 'bitmaps/lunar_event.png'; }

            if (villageAnimationToggle) { villageAnimationToggle = false; }
            else {
                villageAnimationToggle = true;
                villagePlateFrame++;
                villageAnimationFrameA++;
                villageAnimationFrameB++;
                villageAnimationFrameC++;
                villageAnimationFrameD++;
                villageAnimationFrameE++;
                villageAnimationFrameF++;
                villageAnimationFrameH++;
                villageAnimationFrameI++;
            }
            villageAnimationFrameG++;



            if (villageStage == -3) {
                if (villagePlateFrame > 12) { villagePlateFrame = 1; }
                villageImageActual.src = 'bitmaps/villageNEG03_af' + villagePlateFrame + '.png'; // ritual
            }
            else { villagePlateFrame = 1; }



            if (villageStage == -4 || (villageStage > -2 && villageStage < 17)) {
                if (villageAnimationFrameA > 6) { villageAnimationFrameA = 1; }
                villageImageAnimationLayerA.src = 'bitmaps/bigzonies' + villageAnimationFrameA + '.png';
            }
            else if (villageStage == -2) {
                if (villageAnimationFrameA > 8) { villageAnimationFrameA = 1; }
                villageImageAnimationLayerA.src = 'bitmaps/villageNEG02_af' + villageAnimationFrameA + '.png'; // plans
            }
            else if (villageStage > 17) {
                if (villageAnimationFrameA > 9) { villageAnimationFrameA = 1; }
                villageImageAnimationLayerA.src = 'bitmaps/AAFES_af' + villageAnimationFrameA + '.png';
            }
            else {
                villageAnimationFrameA = 1;
                villageImageAnimationLayerA.src = 'bitmaps/blank.png';
            }



            if (villageStage == -4) {
                if (villageAnimationFrameB > 8) { villageAnimationFrameB = 1; }
                villageImageAnimationLayerB.src = 'bitmaps/lilzonies' + villageAnimationFrameB + '.png';
            }
            else if (villageStage == -1) {
                if (villageAnimationFrameB > 18) { villageAnimationFrameB = 1; }
                villageImageAnimationLayerB.src = 'bitmaps/villageNEG01_af' + villageAnimationFrameB + '.png'; // plow
            }
            else if (villageStage > 0) {
                if (villageAnimationFrameB > 11) { villageAnimationFrameB = 1; }
                villageImageAnimationLayerB.src = 'bitmaps/blacksmith_af' + villageAnimationFrameB + '.png';
            }
            else {
                villageAnimationFrameB = 1;
                villageImageAnimationLayerB.src = 'bitmaps/blank.png';
            }



            if (villageStage == 1) {
                if (villageAnimationFrameC > 6) { villageAnimationFrameC = 1; }
                villageImageAnimationLayerC.src = 'bitmaps/aqueductL_af' + villageAnimationFrameC + '.png';
            }
            else if (villageStage == 2) {
                if (villageAnimationFrameC > 5) { villageAnimationFrameC = 1; }
                villageImageAnimationLayerC.src = 'bitmaps/aqueductM_af' + villageAnimationFrameC + '.png';
            }
            else if (villageStage > 2) {
                if (villageAnimationFrameC > 8) { villageAnimationFrameC = 1; }
                villageImageAnimationLayerC.src = 'bitmaps/aqueductF_af' + villageAnimationFrameC + '.png';
            }
            else {
                villageAnimationFrameC = 1;
                villageImageAnimationLayerC.src = 'bitmaps/blank.png';
            }



            if (villageStage > 1) {
                if (villageAnimationFrameD > 11) { villageAnimationFrameD = 1; }
                villageImageAnimationLayerD.src = 'bitmaps/smokeA_af' + villageAnimationFrameD + '.png'; // builder hall
            }
            else {
                villageAnimationFrameD = 1;
                villageImageAnimationLayerD.src = 'bitmaps/blank.png';
            }



            if (villageStage > 10) {
                if (villageAnimationFrameE > 11) { villageAnimationFrameE = 1; }
                villageImageAnimationLayerE.src = 'bitmaps/stables_af' + villageAnimationFrameE + '.png';
            }
            else {
                villageAnimationFrameE = 1;
                villageImageAnimationLayerE.src = 'bitmaps/blank.png';
            }



            if (villageStage > 15) {
                if (villageAnimationFrameF > 20) { villageAnimationFrameF = 1; }
                villageImageAnimationLayerF.src = 'bitmaps/pools_af' + villageAnimationFrameF + '.png';
                if (villageAnimationFrameF > 10) { villageImageAnimationLayerF.src = 'bitmaps/blank.png'; }
            }
            else {
                villageAnimationFrameF = 1;
                villageImageAnimationLayerF.src = 'bitmaps/blank.png';
            }



            if (player.hasMonument) {
                villageImageAnimationLayerG.src = 'bitmaps/village100_af' + villageAnimationFrameG + '.png';
                if (villageAnimationFrameG > 22) { villageImageAnimationLayerG.src = 'bitmaps/blank.png'; }
            }
            else {
                villageImageAnimationLayerG.src = 'bitmaps/blank.png';
            }



            if (player.hasPegasi) {
                if (villageAnimationFrameH > 9) { villageAnimationFrameH = 1; }
                villageImageAnimationLayerH.src = 'bitmaps/pegasus_af' + villageAnimationFrameH + '.png';
            }
            else {
                villageAnimationFrameH = 1;
                villageImageAnimationLayerH.src = 'bitmaps/blank.png';
            }



            if (villageStage > 12 && villageStage < 25) {
                if (villageAnimationFrameI > 20) { villageAnimationFrameI = 1; }
                villageImageAnimationLayerI.src = 'bitmaps/village13_af' + villageAnimationFrameI + '.png';
                if (villageAnimationFrameI > 3) { villageImageAnimationLayerI.src = 'bitmaps/blank.png'; }
            }
            else {
                villageAnimationFrameI = 1;
                villageImageAnimationLayerI.src = 'bitmaps/blank.png';
            }



            if (villageStage > 14) {
                if (villageAnimationFrameG > 111) { villageAnimationFrameG = 1; }
                villageImageAnimationLayerJ.src = 'bitmaps/village15_af' + villageAnimationFrameG + '.png';
                if (villageAnimationFrameG > 15) { villageImageAnimationLayerJ.src = 'bitmaps/blank.png'; }
            }
            else {
                villageAnimationFrameG = 1;
                villageImageAnimationLayerJ.src = 'bitmaps/blank.png';
            }



            if (villageStage > 27) {
                villageImageAnimationLayerK.src = 'bitmaps/village28_af' + villageAnimationFrameG + '.png';
                if (villageAnimationFrameG > 18) { villageImageAnimationLayerK.src = 'bitmaps/blank.png'; }
            }
            else {
                villageImageAnimationLayerK.src = 'bitmaps/blank.png';
            }



            if (villageStage > 22) {
                villageImageAnimationLayerL.src = 'bitmaps/village23_af' + villageAnimationFrameG + '.png';
                if (villageAnimationFrameG > 10) { villageImageAnimationLayerL.src = 'bitmaps/blank.png'; }
            }
            else {
                villageImageAnimationLayerL.src = 'bitmaps/blank.png';
            }



            if (villageStage > 19) {
                villageImageAnimationLayerM.src = 'bitmaps/village20_af' + villageAnimationFrameG + '.png';
                if (villageAnimationFrameG > 13) { villageImageAnimationLayerM.src = 'bitmaps/blank.png'; }
            }
            else {
                villageImageAnimationLayerM.src = 'bitmaps/blank.png';
            }



            if (villageStage > 28) {
                villageImageAnimationLayerN.src = 'bitmaps/village29_af' + villageAnimationFrameG + '.png';
                if (villageAnimationFrameG > 21) { villageImageAnimationLayerN.src = 'bitmaps/blank.png'; }
            }
            else {
                villageImageAnimationLayerN.src = 'bitmaps/blank.png';
            }
        }
        else if (player.isAt == 'Residence') {
            if (residenceAnimationToggle) { residenceAnimationToggle = false; }
            else {
                residenceAnimationToggle = true;
                residenceAnimationFrame++;
            }
            if (residenceStage == 0) {
                if (residenceAnimationFrame > 4) { residenceAnimationFrame = 1; }
                residenceImage.src = 'bitmaps/res00_af' + residenceAnimationFrame + '.png';
            }
            else if (residenceStage == 1) {
                if (residenceAnimationFrame > 4) { residenceAnimationFrame = 1; }
                residenceImage.src = 'bitmaps/res01_af' + residenceAnimationFrame + '.png';
            }
            else if (residenceStage == 2) {
                if (residenceAnimationFrame > 4) { residenceAnimationFrame = 1; }
                residenceImage.src = 'bitmaps/res02_af' + residenceAnimationFrame + '.png';
            }
            else if (residenceStage > 2 && residenceStage < 12) {
                if (residenceAnimationFrame > 4) { residenceAnimationFrame = 1; }
                residenceTorchImage.src = 'bitmaps/res03plus_af' + residenceAnimationFrame + '.png';
            }
            else if (residenceStage == 12 || residenceStage == 13) {
                if (residenceAnimationFrame > 4) { residenceAnimationFrame = 1; }
                residenceImage.src = 'bitmaps/res07_af' + residenceAnimationFrame + '.png';
            }
            else if (residenceStage > 13) {
                if (residenceAnimationFrame > 13) { residenceAnimationFrame = 1; }
                residenceImage.src = 'bitmaps/res08_af' + residenceAnimationFrame + '.png';
            }
            else { residenceAnimationFrame = 1; }
        }
        else if (player.isAt == 'Port') {
            if (portAnimationToggle) { portAnimationToggle = false; }
            else {
                portAnimationToggle = true;
                portAnimationFrame++;
            }
            if (portAnimationFrame <= 30) {
                portGullImage.src = 'bitmaps/port_gull' + portAnimationFrame + '.png';
            }
            if (portAnimationFrame == 90) { portAnimationFrame = 1; }
        }
        else if (player.isAt == 'Map') {
            if (mapOutlineValueClimb) {
                mapOutlineOpacity += 0.1;
                if (mapOutlineOpacity > 0.99) {
                    mapOutlineOpacity = 1.0;
                    mapOutlineValueClimb = false;
                }
            }
            else {
                mapOutlineOpacity -= 0.1;
                if (mapOutlineOpacity < 0.01) {
                    mapOutlineOpacity = 0;
                    mapOutlineValueClimb = true;
                }
            }
        }
        else if (player.isAt == 'Shepherds') {
            const arraySheepFacingFrames = [
                //0, // up,           empty mouth
                //1, // half up/down, empty mouth
                //2, // down,         empty mouth
                //3, // down,         w/ food
                //4, // half up/down, w/ food
                //5, // up,           w/ food
                //6, // up,           chomp food
                //7, // up,           smallest bit of food left
                0, 0, 0,
                1, 1,
                2, 2,
                3,
                2,
                3,
                4,
                5,
                6,
                5,
                6,
                7,
                6,
                7, 7,
                0,
                7,
                0,
                7, 7,
                0, 0, 0, 0,
                1,
                2,
                3, 3,
                2,
                3,
                2,
                3, 3,
                4,
                5,
                6, 6,
                5,
                6,
                7, 7,
                6,
                7,
                0, 0,
                1,
                2,
                3,
                4,
                5,
                6,
                5,
                6,
                5, 5,
                6,
                5,
                6, 6,
                7,
                6,
                7, 7,
                6,
                7,
                6,
                7,
                6,
                7,
                0,
                7,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
            ];
            const arraySheepHeadFrames = [
                7, 7, 7, 7,
                0, 0, 0,
                7, 7, 7, 7, 7,
                0, 0, 0, 0,
                1,
                2,
                3,
                4,
                5,
                6,
                5,
                6,
                5,
                6,
                0, 0,
                1,
                2,
                3,
                2,
                3,
                2,
                3,
                4,
                5,
                6,
                5,
                6,
                5,
                6,
                0,
                6,
                0, 0, 0, 0,
                7, 7, 7, 7,
                0, 0, 0,
                1,
                2,
                3,
                2,
                3,
                4,
                5,
                6,
                5,
                6,
                0, 0, 0, 0, 0,
            ];
            const arraySheepTailFrames = [
                0,
                1,
                2,
                1,
                0, 0,
                1,
                2, 2,
                1,
                0, 0, 0,
                1,
                2,
                1,
                0, 0, 0, 0,
                1,
                2, 2,
                1,
                0,
            ];

            shepherdsAnimationToggle = !shepherdsAnimationToggle;
            if (shepherdsAnimationToggle) {
                shepherdsAnimationFrameA++;
                shepherdsAnimationFrameB++;
                shepherdsAnimationFrameC++;
            }
            if (shepherdsAnimationFrameA == arraySheepFacingFrames.length) { shepherdsAnimationFrameA = 0; }
            if (shepherdsAnimationFrameB == arraySheepHeadFrames.length) { shepherdsAnimationFrameB = 0; }
            if (shepherdsAnimationFrameC == arraySheepTailFrames.length) { shepherdsAnimationFrameC = 0; }

            neighborsSheepFacingImage.src = 'bitmaps/cell_sheepFacingCamera_' + arraySheepFacingFrames[shepherdsAnimationFrameA] + '.png';
            neighborsSheepHeadImage.src = 'bitmaps/cell_sheepHead_' + arraySheepHeadFrames[shepherdsAnimationFrameB] + '.png';
            neighborsSheepTailImage.src = 'bitmaps/cell_sheepTail_' + arraySheepTailFrames[shepherdsAnimationFrameC] + '.png';
        }
        else if (player.isAt == 'Farmers') {
            const arrayDucksFrames = [
                0, 0, 0, 0, 0,
                1,
                0,
                1,
                0, 0, 0, 0,
                1,
                0, 0, 0,
                2,
                0,
                2,
                0, 0, 0,
                2,
                0,
                1,
                0,
                1,
                0,
                3, 3, 3,
                0, 0, 0,
                1,
                0, 0, 0,
                3, 3,
                0, 0,
                3, 3,
                0, 0, 0, 0, 0,
            ];

            farmersAnimationToggle = !farmersAnimationToggle;
            if (farmersAnimationToggle) { farmersAnimationFrame++; }
            if (farmersAnimationFrame == arrayDucksFrames.length) { farmersAnimationFrame = 0; }

            neighborsDucksImage.src = 'bitmaps/cell_ducks_' + arrayDucksFrames[farmersAnimationFrame] + '.png';
        }
        else if (player.isAt == 'Miners') {
            const arrayDaggoWillyFrames = [
                0, 1, 2, 3, // ruff
                4, 5, 6, 7, // scratch

                0, 1, 2, 3, 0, 1, 1, 3,

                4, 5, 6, 7,
                4, 5, 6, 7,

                2, 1, 3, 4,

                4, 5, 6, 7,

                3, 2, 0, 1,
                3, 2, 0, 1,
                3, 2, 0, 1,

                7, 6, 5, 4,

                2, 1, 3, 4,
                3, 2, 0, 1,

                6, 7, 4, 5,
                6, 7, 4, 5,
                6, 7, 4, 5,

                0, 1, 2, 3, 0, 1, 1, 3,
            ];
            const arrayMeeplesFrames = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
            ];
            const arrayDaggoArgosFrames = [
                0, 1, 4, 5, 2, 3, 6, 7,
                0, 1, 2, 3, 4, 5, 6, 7,
                4, 5, 2, 3, 0, 1, 6, 7,
            ];
            const arrayBandidoFrames = [
                0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
                1, 1, 1, 1, 1,
                0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            ];
            const arrayCampfireFrames = [
                0, 1, 2, 3, 4,
                4, 3, 0, 2, 1,
                3, 1, 0, 4, 2,
                4, 3, 2, 1, 0,
                1, 0, 3, 4, 2,
                2, 4, 1, 0, 3,
            ];
            const arrayCoalsFrames = [
                0, 1, 2, 3,
                1, 3, 0, 2,
                3, 2, 1, 0,
                2, 0, 3, 1,
            ];
            const arrayCatgirlFrames = [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
            ];
            const arrayCobraFrames = [
                1, 1, 0, 0, 0, 1, 1, 2, 2, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 1, 1, 2, 2, 3, 3, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 5, 5, 6, 6, 7, 7, 10, 10, 8, 8, 9, 9, 8, 8,
                10, 12, 10, 12, 10, 7, 8, 9, 11, 9, 11, 12, 10, 12, 11, 9,
                10, 12, 10, 12, 10, 7, 8, 9, 11, 9, 11, 12, 10, 12, 11, 9,
                10, 12, 10, 12, 10, 7, 8, 9, 11, 9, 11, 12, 10, 12, 11, 9,
                10, 12, 10, 12, 10, 7, 8, 9, 11, 9, 11, 12, 10, 12, 11, 9,
                10, 12, 10, 12, 10, 7, 8, 9, 11, 9, 11, 12, 10, 12, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ];
            const arrayBlinksFrames = [
                3, 0, 3, 1, 3, 3, 3, 2, 3, 3, 3,
                3, 3, 0, 3, 3, 3, 3, 3, 2, 3, 3,
                3, 3, 3, 0, 3, 1, 2, 3, 3, 3, 3,
                0, 3, 3, 3, 1, 3, 3, 3, 3, 2, 3,
            ];

            minersAnimationToggle = !minersAnimationToggle;
            if (minersAnimationToggle) {
                minersAnimationFrameA++;
                minersAnimationFrameB++;
                minersAnimationFrameC++;
                minersAnimationFrameD++;
                minersAnimationFrameE++;
                minersAnimationFrameF++;
                minersAnimationFrameG++;
                minersAnimationFrameH++;
                minersAnimationFrameI++;
            }
            if (minersAnimationFrameA == arrayDaggoWillyFrames.length) { minersAnimationFrameA = 0; }
            if (minersAnimationFrameB == arrayMeeplesFrames.length) { minersAnimationFrameB = 0; }
            if (minersAnimationFrameC == arrayDaggoArgosFrames.length) { minersAnimationFrameC = 0; }
            if (minersAnimationFrameD == arrayBandidoFrames.length) { minersAnimationFrameD = 0; }
            if (minersAnimationFrameE == arrayCampfireFrames.length) { minersAnimationFrameE = 0; }
            if (minersAnimationFrameF == arrayCoalsFrames.length) { minersAnimationFrameF = 0; }
            if (minersAnimationFrameG == arrayCatgirlFrames.length) { minersAnimationFrameG = 0; }
            if (minersAnimationFrameH == arrayCobraFrames.length) { minersAnimationFrameH = 0; }
            if (minersAnimationFrameI == arrayBlinksFrames.length) { minersAnimationFrameI = 0; }

            neighborsDagsImageA.src = 'bitmaps/cell_dagsWilly_' + arrayDaggoWillyFrames[minersAnimationFrameA] + '.png';
            neighborsMeeplesImage.src = 'bitmaps/cell_meeples_' + arrayMeeplesFrames[minersAnimationFrameB] + '.png';
            neighborsDagsImageB.src = 'bitmaps/cell_dagsArgos_' + arrayDaggoArgosFrames[minersAnimationFrameC] + '.png';
            neighborsBandidoImage.src = 'bitmaps/cell_bandido_' + arrayBandidoFrames[minersAnimationFrameD] + '.png';
            neighborsCampfireImage.src = 'bitmaps/cell_loomTentFire_' + arrayCampfireFrames[minersAnimationFrameE] + '.png';
            neighborsCoalsImage.src = 'bitmaps/cell_coals_' + arrayCoalsFrames[minersAnimationFrameF] + '.png';
            neighborsNeko_tanImage.src = 'bitmaps/cell_猫娘_' + arrayCatgirlFrames[minersAnimationFrameG] + '.png';
            neighborsHerpyImage.src = 'bitmaps/cell_noodle_' + arrayCobraFrames[minersAnimationFrameH] + '.png';
            neighborsBlinksImage.src = 'bitmaps/cell_blinks_' + arrayBlinksFrames[minersAnimationFrameI] + '.png';
        }
    }
}



function DisplayStaticImages() {
    document.documentElement.style.setProperty('--agua', 'url(bitmaps/agua_still.gif)');
    if (player.hasHardtack) { imgWorkshopBakery.src = 'bitmaps/res_bakery2.png'; }
    else { imgWorkshopBakery.src = 'bitmaps/res_bakery.png'; }
    imgWorkshopOliveMill.src = 'bitmaps/res_olivemill.png';
    imgWorkshopBrewery.src = 'bitmaps/res_brewery.png';
    imgWorkshopWinery.src = 'bitmaps/res_winery.png';
    if (player.hasRations) { imgWorkshopKitchen.src = 'bitmaps/res_kitchen2.png'; }
    else { imgWorkshopKitchen.src = 'bitmaps/res_kitchen.png'; }
    imgWorkshopPress.src = 'bitmaps/res_press.png';
    if (player.hasRaisins) { imgWorkshopGreenhouse.src = 'bitmaps/res_greenhouse2.png'; }
    else { imgWorkshopGreenhouse.src = 'bitmaps/res_greenhouse.png'; }
    imgWorkshopAtelier.src = 'bitmaps/res_atelier.png';
    if (player.hasHiredGemcutters) { imgWorkshopAtelier.src = 'bitmaps/res_atelier2.png'; }
    imgWorkshopApiary.src = 'bitmaps/res_apiary.png';
    if (player.hasBandages) { imgWorkshopCottage.src = 'bitmaps/res_cottage2.png'; }
    else { imgWorkshopCottage.src = 'bitmaps/res_cottage.png'; }
}



function DisplayAnimatedImages() {
    document.documentElement.style.setProperty('--agua', 'url(bitmaps/agua_anim.gif)');
    if (player.hasHardtack) { imgWorkshopBakery.src = 'bitmaps/res_bakery2.gif'; }
    else { imgWorkshopBakery.src = 'bitmaps/res_bakery.gif'; }
    imgWorkshopOliveMill.src = 'bitmaps/res_olivemill.gif';
    imgWorkshopBrewery.src = 'bitmaps/res_brewery.gif';
    imgWorkshopWinery.src = 'bitmaps/res_winery.gif';
    if (player.hasRations) { imgWorkshopKitchen.src = 'bitmaps/res_kitchen2.gif'; }
    else { imgWorkshopKitchen.src = 'bitmaps/res_kitchen.gif'; }
    imgWorkshopPress.src = 'bitmaps/res_press.gif';
    if (player.hasRaisins) { imgWorkshopGreenhouse.src = 'bitmaps/res_greenhouse2.gif'; }
    else { imgWorkshopGreenhouse.src = 'bitmaps/res_greenhouse.gif'; }
    if (player.hasHiredGemcutters) { imgWorkshopAtelier.src = 'bitmaps/res_atelier2.gif'; }
    else { imgWorkshopAtelier.src = 'bitmaps/res_atelier.gif'; }
    imgWorkshopApiary.src = 'bitmaps/res_apiary.gif';
    if (player.hasBandages) { imgWorkshopCottage.src = 'bitmaps/res_cottage2.gif'; }
    else { imgWorkshopCottage.src = 'bitmaps/res_cottage.gif'; }
}



function PreloadImages() {
    PreloadImage('bitmaps/AAFES_af1.png');
    PreloadImage('bitmaps/AAFES_af2.png');
    PreloadImage('bitmaps/AAFES_af3.png');
    PreloadImage('bitmaps/AAFES_af4.png');
    PreloadImage('bitmaps/AAFES_af5.png');
    PreloadImage('bitmaps/AAFES_af6.png');
    PreloadImage('bitmaps/AAFES_af7.png');
    PreloadImage('bitmaps/AAFES_af8.png');
    PreloadImage('bitmaps/AAFES_af9.png');
    PreloadImage('bitmaps/agua_anim.gif');
    PreloadImage('bitmaps/agua_still.gif');
    PreloadImage('bitmaps/aqueductF_af1.png');
    PreloadImage('bitmaps/aqueductF_af2.png');
    PreloadImage('bitmaps/aqueductF_af3.png');
    PreloadImage('bitmaps/aqueductF_af4.png');
    PreloadImage('bitmaps/aqueductF_af5.png');
    PreloadImage('bitmaps/aqueductF_af6.png');
    PreloadImage('bitmaps/aqueductF_af7.png');
    PreloadImage('bitmaps/aqueductF_af8.png');
    PreloadImage('bitmaps/aqueductL_af1.png');
    PreloadImage('bitmaps/aqueductL_af2.png');
    PreloadImage('bitmaps/aqueductL_af3.png');
    PreloadImage('bitmaps/aqueductL_af4.png');
    PreloadImage('bitmaps/aqueductL_af5.png');
    PreloadImage('bitmaps/aqueductL_af6.png');
    PreloadImage('bitmaps/aqueductM_af1.png');
    PreloadImage('bitmaps/aqueductM_af2.png');
    PreloadImage('bitmaps/aqueductM_af3.png');
    PreloadImage('bitmaps/aqueductM_af4.png');
    PreloadImage('bitmaps/aqueductM_af5.png');
    PreloadImage('bitmaps/bigzonies1.png');
    PreloadImage('bitmaps/bigzonies2.png');
    PreloadImage('bitmaps/bigzonies3.png');
    PreloadImage('bitmaps/bigzonies4.png');
    PreloadImage('bitmaps/bigzonies5.png');
    PreloadImage('bitmaps/bigzonies6.png');
    PreloadImage('bitmaps/blacksmith_af1.png');
    PreloadImage('bitmaps/blacksmith_af2.png');
    PreloadImage('bitmaps/blacksmith_af3.png');
    PreloadImage('bitmaps/blacksmith_af4.png');
    PreloadImage('bitmaps/blacksmith_af5.png');
    PreloadImage('bitmaps/blacksmith_af6.png');
    PreloadImage('bitmaps/blacksmith_af7.png');
    PreloadImage('bitmaps/blacksmith_af8.png');
    PreloadImage('bitmaps/blacksmith_af9.png');
    PreloadImage('bitmaps/blacksmith_af10.png');
    PreloadImage('bitmaps/blacksmith_af11.png');
    PreloadImage('bitmaps/blank.png');
    PreloadImage('bitmaps/crystalmine.png');
    PreloadImage('bitmaps/docks.png');
    PreloadImage('bitmaps/lilzonies1.png');
    PreloadImage('bitmaps/lilzonies2.png');
    PreloadImage('bitmaps/lilzonies3.png');
    PreloadImage('bitmaps/lilzonies4.png');
    PreloadImage('bitmaps/lilzonies5.png');
    PreloadImage('bitmaps/lilzonies6.png');
    PreloadImage('bitmaps/lilzonies7.png');
    PreloadImage('bitmaps/lilzonies8.png');
    PreloadImage('bitmaps/lunar_event.png');
    PreloadImage('bitmaps/mansion.png');
    PreloadImage('bitmaps/mansion_abejas.png');
    PreloadImage('bitmaps/nirvana.png');
    PreloadImage('bitmaps/pegasus_af1.png');
    PreloadImage('bitmaps/pegasus_af2.png');
    PreloadImage('bitmaps/pegasus_af3.png');
    PreloadImage('bitmaps/pegasus_af4.png');
    PreloadImage('bitmaps/pegasus_af5.png');
    PreloadImage('bitmaps/pegasus_af6.png');
    PreloadImage('bitmaps/pegasus_af7.png');
    PreloadImage('bitmaps/pegasus_af8.png');
    PreloadImage('bitmaps/pegasus_af9.png');
    PreloadImage('bitmaps/pools_af1.png');
    PreloadImage('bitmaps/pools_af2.png');
    PreloadImage('bitmaps/pools_af3.png');
    PreloadImage('bitmaps/pools_af4.png');
    PreloadImage('bitmaps/pools_af5.png');
    PreloadImage('bitmaps/pools_af6.png');
    PreloadImage('bitmaps/pools_af7.png');
    PreloadImage('bitmaps/pools_af8.png');
    PreloadImage('bitmaps/pools_af9.png');
    PreloadImage('bitmaps/pools_af10.png');
    PreloadImage('bitmaps/port_frodo1.png');
    PreloadImage('bitmaps/port_gull1.png');
    PreloadImage('bitmaps/port_gull2.png');
    PreloadImage('bitmaps/port_gull3.png');
    PreloadImage('bitmaps/port_gull4.png');
    PreloadImage('bitmaps/port_gull5.png');
    PreloadImage('bitmaps/port_gull6.png');
    PreloadImage('bitmaps/port_gull7.png');
    PreloadImage('bitmaps/port_gull8.png');
    PreloadImage('bitmaps/port_gull9.png');
    PreloadImage('bitmaps/port_gull10.png');
    PreloadImage('bitmaps/port_gull11.png');
    PreloadImage('bitmaps/port_gull12.png');
    PreloadImage('bitmaps/port_gull13.png');
    PreloadImage('bitmaps/port_gull14.png');
    PreloadImage('bitmaps/port_gull15.png');
    PreloadImage('bitmaps/port_gull16.png');
    PreloadImage('bitmaps/port_gull17.png');
    PreloadImage('bitmaps/port_gull18.png');
    PreloadImage('bitmaps/port_gull19.png');
    PreloadImage('bitmaps/port_gull20.png');
    PreloadImage('bitmaps/port_gull21.png');
    PreloadImage('bitmaps/port_gull22.png');
    PreloadImage('bitmaps/port_gull23.png');
    PreloadImage('bitmaps/port_gull24.png');
    PreloadImage('bitmaps/port_gull25.png');
    PreloadImage('bitmaps/port_gull26.png');
    PreloadImage('bitmaps/port_gull27.png');
    PreloadImage('bitmaps/port_gull28.png');
    PreloadImage('bitmaps/port_gull29.png');
    PreloadImage('bitmaps/port_gull30.png');
    PreloadImage('bitmaps/res_apiary.gif');
    PreloadImage('bitmaps/res_apiary.png');
    PreloadImage('bitmaps/res_atelier.gif');
    PreloadImage('bitmaps/res_atelier.png');
    PreloadImage('bitmaps/res_atelier2.gif');
    PreloadImage('bitmaps/res_atelier2.png');
    PreloadImage('bitmaps/res_bakery.gif');
    PreloadImage('bitmaps/res_bakery.png');
    PreloadImage('bitmaps/res_bakery2.gif');
    PreloadImage('bitmaps/res_bakery2.png');
    PreloadImage('bitmaps/res_brewery.gif');
    PreloadImage('bitmaps/res_brewery.png');
    PreloadImage('bitmaps/res_cottage.gif');
    PreloadImage('bitmaps/res_cottage.png');
    PreloadImage('bitmaps/res_cottage2.gif');
    PreloadImage('bitmaps/res_cottage2.png');
    PreloadImage('bitmaps/res_cottageA.png');
    PreloadImage('bitmaps/res_cottageB.png');
    PreloadImage('bitmaps/res_greenhouse.gif');
    PreloadImage('bitmaps/res_greenhouse.png');
    PreloadImage('bitmaps/res_greenhouse2.gif');
    PreloadImage('bitmaps/res_greenhouse2.png');
    PreloadImage('bitmaps/res_kitchen.gif');
    PreloadImage('bitmaps/res_kitchen.png');
    PreloadImage('bitmaps/res_kitchen2.gif');
    PreloadImage('bitmaps/res_kitchen2.png');
    PreloadImage('bitmaps/res_olivemill.gif');
    PreloadImage('bitmaps/res_olivemill.png');
    PreloadImage('bitmaps/res_press.gif');
    PreloadImage('bitmaps/res_press.png');
    PreloadImage('bitmaps/res_winery.gif');
    PreloadImage('bitmaps/res_winery.png');
    PreloadImage('bitmaps/res00_af1.png');
    PreloadImage('bitmaps/res00_af2.png');
    PreloadImage('bitmaps/res00_af3.png');
    PreloadImage('bitmaps/res00_af4.png');
    PreloadImage('bitmaps/res01.png');
    PreloadImage('bitmaps/res01_af1.png');
    PreloadImage('bitmaps/res01_af2.png');
    PreloadImage('bitmaps/res01_af3.png');
    PreloadImage('bitmaps/res01_af4.png');
    PreloadImage('bitmaps/res02.png');
    PreloadImage('bitmaps/res02_af1.png');
    PreloadImage('bitmaps/res02_af2.png');
    PreloadImage('bitmaps/res02_af3.png');
    PreloadImage('bitmaps/res02_af4.png');
    PreloadImage('bitmaps/res03.png');
    PreloadImage('bitmaps/res03plus_af1.png');
    PreloadImage('bitmaps/res03plus_af2.png');
    PreloadImage('bitmaps/res03plus_af3.png');
    PreloadImage('bitmaps/res03plus_af4.png');
    PreloadImage('bitmaps/res04.png');
    PreloadImage('bitmaps/res05.png');
    PreloadImage('bitmaps/res06.png');
    PreloadImage('bitmaps/res07.png');
    PreloadImage('bitmaps/res07_af1.png');
    PreloadImage('bitmaps/res07_af2.png');
    PreloadImage('bitmaps/res07_af3.png');
    PreloadImage('bitmaps/res07_af4.png');
    PreloadImage('bitmaps/res08.png');
    PreloadImage('bitmaps/res08_af1.png');
    PreloadImage('bitmaps/res08_af2.png');
    PreloadImage('bitmaps/res08_af3.png');
    PreloadImage('bitmaps/res08_af4.png');
    PreloadImage('bitmaps/res08_af5.png');
    PreloadImage('bitmaps/res08_af6.png');
    PreloadImage('bitmaps/res08_af7.png');
    PreloadImage('bitmaps/res08_af8.png');
    PreloadImage('bitmaps/res08_af9.png');
    PreloadImage('bitmaps/res08_af10.png');
    PreloadImage('bitmaps/res08_af11.png');
    PreloadImage('bitmaps/res08_af12.png');
    PreloadImage('bitmaps/res08_af13.png');
    PreloadImage('bitmaps/route_alexandria.png');
    PreloadImage('bitmaps/route_athens.png');
    PreloadImage('bitmaps/route_damascus.png');
    PreloadImage('bitmaps/route_jerusalem.png');
    PreloadImage('bitmaps/route_memphis.png');
    PreloadImage('bitmaps/route_rhodes.png');
    PreloadImage('bitmaps/route_rome.png');
    PreloadImage('bitmaps/route_tartessos.png');
    PreloadImage('bitmaps/smokeA_af1.png');
    PreloadImage('bitmaps/smokeA_af2.png');
    PreloadImage('bitmaps/smokeA_af3.png');
    PreloadImage('bitmaps/smokeA_af4.png');
    PreloadImage('bitmaps/smokeA_af5.png');
    PreloadImage('bitmaps/smokeA_af6.png');
    PreloadImage('bitmaps/smokeA_af7.png');
    PreloadImage('bitmaps/smokeA_af8.png');
    PreloadImage('bitmaps/smokeA_af9.png');
    PreloadImage('bitmaps/smokeA_af10.png');
    PreloadImage('bitmaps/smokeA_af11.png');
    PreloadImage('bitmaps/spritesheetCheevo.png');
    PreloadImage('bitmaps/spritesheetSmelt.png');
    PreloadImage('bitmaps/stables_af1.png');
    PreloadImage('bitmaps/stables_af2.png');
    PreloadImage('bitmaps/stables_af3.png');
    PreloadImage('bitmaps/stables_af4.png');
    PreloadImage('bitmaps/stables_af5.png');
    PreloadImage('bitmaps/stables_af6.png');
    PreloadImage('bitmaps/stables_af7.png');
    PreloadImage('bitmaps/stables_af8.png');
    PreloadImage('bitmaps/stables_af9.png');
    PreloadImage('bitmaps/stables_af10.png');
    PreloadImage('bitmaps/stables_af11.png');
    PreloadImage('bitmaps/theater.png');
    PreloadImage('bitmaps/tilemap.png');
    PreloadImage('bitmaps/trade_goods.png');
    PreloadImage('bitmaps/trade_tin.png');
    PreloadImage('bitmaps/village00.png');
    PreloadImage('bitmaps/village01.png');
    PreloadImage('bitmaps/village02.png');
    PreloadImage('bitmaps/village03.png');
    PreloadImage('bitmaps/village04.png');
    PreloadImage('bitmaps/village05.png');
    PreloadImage('bitmaps/village06.png');
    PreloadImage('bitmaps/village07.png');
    PreloadImage('bitmaps/village08.png');
    PreloadImage('bitmaps/village09.png');
    PreloadImage('bitmaps/village10.png');
    PreloadImage('bitmaps/village11.png');
    PreloadImage('bitmaps/village12.png');
    PreloadImage('bitmaps/village13.png');
    PreloadImage('bitmaps/village13_af1.png');
    PreloadImage('bitmaps/village13_af2.png');
    PreloadImage('bitmaps/village13_af3.png');
    PreloadImage('bitmaps/village14.png');
    PreloadImage('bitmaps/village15.png');
    PreloadImage('bitmaps/village15_af1.png');
    PreloadImage('bitmaps/village15_af2.png');
    PreloadImage('bitmaps/village15_af3.png');
    PreloadImage('bitmaps/village15_af4.png');
    PreloadImage('bitmaps/village15_af5.png');
    PreloadImage('bitmaps/village15_af6.png');
    PreloadImage('bitmaps/village15_af7.png');
    PreloadImage('bitmaps/village15_af8.png');
    PreloadImage('bitmaps/village15_af9.png');
    PreloadImage('bitmaps/village15_af10.png');
    PreloadImage('bitmaps/village15_af11.png');
    PreloadImage('bitmaps/village15_af12.png');
    PreloadImage('bitmaps/village15_af13.png');
    PreloadImage('bitmaps/village15_af14.png');
    PreloadImage('bitmaps/village15_af15.png');
    PreloadImage('bitmaps/village16.png');
    PreloadImage('bitmaps/village17.png');
    PreloadImage('bitmaps/village18.png');
    PreloadImage('bitmaps/village19.png');
    PreloadImage('bitmaps/village20.png');
    PreloadImage('bitmaps/village20_af1.png');
    PreloadImage('bitmaps/village20_af2.png');
    PreloadImage('bitmaps/village20_af3.png');
    PreloadImage('bitmaps/village20_af4.png');
    PreloadImage('bitmaps/village20_af5.png');
    PreloadImage('bitmaps/village20_af6.png');
    PreloadImage('bitmaps/village20_af7.png');
    PreloadImage('bitmaps/village20_af8.png');
    PreloadImage('bitmaps/village20_af9.png');
    PreloadImage('bitmaps/village20_af10.png');
    PreloadImage('bitmaps/village20_af11.png');
    PreloadImage('bitmaps/village20_af12.png');
    PreloadImage('bitmaps/village20_af13.png');
    PreloadImage('bitmaps/village21.png');
    PreloadImage('bitmaps/village22.png');
    PreloadImage('bitmaps/village23.png');
    PreloadImage('bitmaps/village23_af1.png');
    PreloadImage('bitmaps/village23_af2.png');
    PreloadImage('bitmaps/village23_af3.png');
    PreloadImage('bitmaps/village23_af4.png');
    PreloadImage('bitmaps/village23_af5.png');
    PreloadImage('bitmaps/village23_af6.png');
    PreloadImage('bitmaps/village23_af7.png');
    PreloadImage('bitmaps/village23_af8.png');
    PreloadImage('bitmaps/village23_af9.png');
    PreloadImage('bitmaps/village23_af10.png');
    PreloadImage('bitmaps/village24.png');
    PreloadImage('bitmaps/village25.png');
    PreloadImage('bitmaps/village26.png');
    PreloadImage('bitmaps/village27.png');
    PreloadImage('bitmaps/village28.png');
    PreloadImage('bitmaps/village28_af1.png');
    PreloadImage('bitmaps/village28_af2.png');
    PreloadImage('bitmaps/village28_af3.png');
    PreloadImage('bitmaps/village28_af4.png');
    PreloadImage('bitmaps/village28_af5.png');
    PreloadImage('bitmaps/village28_af6.png');
    PreloadImage('bitmaps/village28_af7.png');
    PreloadImage('bitmaps/village28_af8.png');
    PreloadImage('bitmaps/village28_af9.png');
    PreloadImage('bitmaps/village28_af10.png');
    PreloadImage('bitmaps/village28_af11.png');
    PreloadImage('bitmaps/village28_af12.png');
    PreloadImage('bitmaps/village28_af13.png');
    PreloadImage('bitmaps/village28_af14.png');
    PreloadImage('bitmaps/village28_af15.png');
    PreloadImage('bitmaps/village28_af16.png');
    PreloadImage('bitmaps/village28_af17.png');
    PreloadImage('bitmaps/village28_af18.png');
    PreloadImage('bitmaps/village29.png');
    PreloadImage('bitmaps/village29_af1.png');
    PreloadImage('bitmaps/village29_af2.png');
    PreloadImage('bitmaps/village29_af3.png');
    PreloadImage('bitmaps/village29_af4.png');
    PreloadImage('bitmaps/village29_af5.png');
    PreloadImage('bitmaps/village29_af6.png');
    PreloadImage('bitmaps/village29_af7.png');
    PreloadImage('bitmaps/village29_af8.png');
    PreloadImage('bitmaps/village29_af9.png');
    PreloadImage('bitmaps/village29_af10.png');
    PreloadImage('bitmaps/village29_af11.png');
    PreloadImage('bitmaps/village29_af12.png');
    PreloadImage('bitmaps/village29_af13.png');
    PreloadImage('bitmaps/village29_af14.png');
    PreloadImage('bitmaps/village29_af15.png');
    PreloadImage('bitmaps/village29_af16.png');
    PreloadImage('bitmaps/village29_af17.png');
    PreloadImage('bitmaps/village29_af18.png');
    PreloadImage('bitmaps/village29_af19.png');
    PreloadImage('bitmaps/village29_af20.png');
    PreloadImage('bitmaps/village29_af21.png');
    PreloadImage('bitmaps/village100.png');
    PreloadImage('bitmaps/village100_af1.png');
    PreloadImage('bitmaps/village100_af2.png');
    PreloadImage('bitmaps/village100_af3.png');
    PreloadImage('bitmaps/village100_af4.png');
    PreloadImage('bitmaps/village100_af5.png');
    PreloadImage('bitmaps/village100_af6.png');
    PreloadImage('bitmaps/village100_af7.png');
    PreloadImage('bitmaps/village100_af8.png');
    PreloadImage('bitmaps/village100_af9.png');
    PreloadImage('bitmaps/village100_af10.png');
    PreloadImage('bitmaps/village100_af11.png');
    PreloadImage('bitmaps/village100_af12.png');
    PreloadImage('bitmaps/village100_af13.png');
    PreloadImage('bitmaps/village100_af14.png');
    PreloadImage('bitmaps/village100_af15.png');
    PreloadImage('bitmaps/village100_af16.png');
    PreloadImage('bitmaps/village100_af17.png');
    PreloadImage('bitmaps/village100_af18.png');
    PreloadImage('bitmaps/village100_af19.png');
    PreloadImage('bitmaps/village100_af20.png');
    PreloadImage('bitmaps/village100_af21.png');
    PreloadImage('bitmaps/village100_af22.png');
    PreloadImage('bitmaps/villageNEG01.png');
    PreloadImage('bitmaps/villageNEG01_af1.png');
    PreloadImage('bitmaps/villageNEG01_af2.png');
    PreloadImage('bitmaps/villageNEG01_af3.png');
    PreloadImage('bitmaps/villageNEG01_af4.png');
    PreloadImage('bitmaps/villageNEG01_af5.png');
    PreloadImage('bitmaps/villageNEG01_af6.png');
    PreloadImage('bitmaps/villageNEG01_af7.png');
    PreloadImage('bitmaps/villageNEG01_af8.png');
    PreloadImage('bitmaps/villageNEG01_af9.png');
    PreloadImage('bitmaps/villageNEG01_af10.png');
    PreloadImage('bitmaps/villageNEG01_af11.png');
    PreloadImage('bitmaps/villageNEG01_af12.png');
    PreloadImage('bitmaps/villageNEG01_af13.png');
    PreloadImage('bitmaps/villageNEG01_af14.png');
    PreloadImage('bitmaps/villageNEG01_af15.png');
    PreloadImage('bitmaps/villageNEG01_af16.png');
    PreloadImage('bitmaps/villageNEG01_af17.png');
    PreloadImage('bitmaps/villageNEG01_af18.png');
    PreloadImage('bitmaps/villageNEG02.png');
    PreloadImage('bitmaps/villageNEG02_af1.png');
    PreloadImage('bitmaps/villageNEG02_af2.png');
    PreloadImage('bitmaps/villageNEG02_af3.png');
    PreloadImage('bitmaps/villageNEG02_af4.png');
    PreloadImage('bitmaps/villageNEG02_af5.png');
    PreloadImage('bitmaps/villageNEG02_af6.png');
    PreloadImage('bitmaps/villageNEG02_af7.png');
    PreloadImage('bitmaps/villageNEG02_af8.png');
    PreloadImage('bitmaps/villageNEG03_af1.png');
    PreloadImage('bitmaps/villageNEG03_af2.png');
    PreloadImage('bitmaps/villageNEG03_af3.png');
    PreloadImage('bitmaps/villageNEG03_af4.png');
    PreloadImage('bitmaps/villageNEG03_af5.png');
    PreloadImage('bitmaps/villageNEG03_af6.png');
    PreloadImage('bitmaps/villageNEG03_af7.png');
    PreloadImage('bitmaps/villageNEG03_af8.png');
    PreloadImage('bitmaps/villageNEG03_af9.png');
    PreloadImage('bitmaps/villageNEG03_af10.png');
    PreloadImage('bitmaps/villageNEG03_af11.png');
    PreloadImage('bitmaps/villageNEG03_af12.png');
    PreloadImage('bitmaps/villageNEG04.png');
    PreloadImage('bitmaps/villageNEG05.png');

    function PreloadImage(url) {
        let img = new Image();
        img.src = url;
    }
}



// End of Document