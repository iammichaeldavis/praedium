// UI **********************************************************************************************
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

const tileLawn = [0, 9 * 16,];
const tileTrees = [16, 9 * 16,];
const tileForest = [32, 9 * 16,];
const tileStump = [48, 9 * 16,];
const tileDeadTree = [64, 9 * 16,];
//const tileLawnMuddy = [80, 8 * 16,];
//const tileLawnLog = [96, 8 * 16,];
//const tileLawnRocky1 = [112, 8 * 16,];
//const tileLawnScrub1 = [80, 9 * 16,];
//const tileLawnScrub2 = [96, 9 * 16,];
//const tileLawnRocky2 = [112, 9 * 16,];

const tileShrubs1 = [0, 160,];
const tileShrubs2 = [16, 160,];
const tileShrubs3 = [32, 160,];
const tileShrubs4 = [48, 160,];
const tilePineTree = [64, 160,];
const tilePlinth = [5 * 16, 160,];
const tileRocks = [6 * 16, 160,];
const tileShrine = [176, 8 * 16,];

const tileBigTreeNW = [8 * 16, 9 * 16,];
const tileBigTreeNE = [9 * 16, 9 * 16,];
const tileBigTreeNW2 = [8 * 16, 8 * 16,];
const tileBigTreeNE2 = [9 * 16, 8 * 16,];
const tileBigTreeSW = [8 * 16, 160,];
const tileBigTreeSE = [9 * 16, 160,];

const tilePathCross = [0, 176,];
const tilePathH2N = [16, 176,];
const tilePathH2S = [32, 176,];
const tilePathH = [48, 176,];
const tilePathHPeterE = [112, 160,];
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

let tileGrowingOlive = [22 * 16, 96,];



function UpdateDisplay() {
    UpdateCalendar();
    UpdateText();
    UpdateVisibilities();
    RedrawCanvases();
}



function UpdateCalendar() {
    divYear.innerHTML = displayYear + '&nbsp;' + year;
    divWeek.innerHTML = displayWeek + '&nbsp;' + week;

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
    divRuneSeason.style.backgroundPosition = chosenRune[0] + 'px ' + chosenRune[1] + 'px';

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
    divStonesSeason.style.backgroundPosition = chosenStone[0] + 'px ' + chosenStone[1] + 'px';

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
    divEmbossZodiacChinese.style.backgroundPosition = chosenEmboss[0] + 'px ' + chosenEmboss[1] + 'px';

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
    divEmbossSeason.style.backgroundPosition = chosenEmboss[0] + 'px ' + chosenEmboss[1] + 'px';

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
    divStonesWeek.style.backgroundPosition = chosenStone[0] + 'px ' + chosenStone[1] + 'px';

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
    divRuneMonth.style.backgroundPosition = chosenRune[0] + 'px ' + chosenRune[1] + 'px';
    divRuneElement.style.backgroundPosition = chosenElement[0] + 'px ' + chosenElement[1] + 'px';
}



function UpdateText() {
    // FOREWORD ----------------------------
    if (player.seesForeword) {
        divForewordCorpus.innerHTML = displayForewordA + '<div id="divForewordScripture">' + displayForewordScripture + '<div id="divForewordSource">' + displayForewordSource + '</div></div>' + displayForewordB;
        buttonForewordDismiss.innerHTML = displayForewordLabel;
    }

    if (player.isAt == 'Praedium') {
        buttonGoToTownship.innerHTML = displayGoToTownship;

        // FARM --------------------------------
        theadFarmInventory.innerHTML = '<tr><td colspan="2">' + displayInStock + '</td></tr>';
        let countWheat = formatterStandard.format(bushelCount[0]);
        let fruitGap = '&nbsp;&nbsp;';
        if (warehouseStage > 2) { fruitGap += '&nbsp;'; }
        if (player.seesWarehouse) { countWheat += '<span class="warehouseTotal">/' + formatterStandard.format(bushelMax[0]) + '</span>'; }
        let tableString = '<tr><td>' + displayWheat + '&nbsp;<span class="icon Wheat inlineIcon"></span>:</td><td class="rightPadColumn">' + countWheat + '</td></tr>';
        if (farmStage > 16) { tableString += '<tr><td>' + displayBarley + '&nbsp;<span class="icon Barley inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterStandard.format(bushelCount[1]) + '<span class="warehouseTotal">/' + formatterStandard.format(bushelMax[1]) + '</span></td></tr>'; }
        if (player.seesOlives) { tableString += '<tr><td>' + displayOlive + '&nbsp;<span class="icon Olive inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterStandard.format(bushelCount[2]) + '<span class="warehouseTotal">/' + fruitGap + formatterStandard.format(bushelMax[2]) + '</span></td></tr>'; }
        if (farmStage > 17) {
            tableString += '<tr><td>' + displayDate + '&nbsp;<span class="icon Date inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterStandard.format(bushelCount[3]) + '<span class="warehouseTotal">/' + fruitGap + formatterStandard.format(bushelMax[3]) + '</span></td></tr>';
            tableString += '<tr><td>' + displayFig + '&nbsp;<span class="icon Fig inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterStandard.format(bushelCount[4]) + '<span class="warehouseTotal">/' + fruitGap + formatterStandard.format(bushelMax[4]) + '</span></td></tr>';
            tableString += '<tr><td>' + displayPomegranate + '&nbsp;<span class="icon Pom inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterStandard.format(bushelCount[5]) + '<span class="warehouseTotal">/' + fruitGap + formatterStandard.format(bushelMax[5]) + '</span></td></tr>';
            tableString += '<tr><td>' + displayGrape + '&nbsp;<span class="icon Grape inlineIcon"></span>:</td><td class="rightPadColumn">' + formatterStandard.format(bushelCount[6]) + '<span class="warehouseTotal">/' + fruitGap + formatterStandard.format(bushelMax[6]) + '</span></td></tr>';
        }
        tbodyFarmInventory.innerHTML = tableString;

        theadFarmStaff.innerHTML = '<tr><td colspan="3">' + displayStaff + '</td></tr>';
        let fieldhandCost = '(-' + formatterStandard.format(handsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        let vigneronCost = '(-' + formatterStandard.format(vigneronsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        let arboristCost = '(-' + formatterStandard.format(arboristsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        let horticulturalistsCost = '(-' + formatterStandard.format(horticulturalistsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        if (starving[0]) { fieldhandCost = '<span class="starving">' + displayStarving + '</span>'; }
        if (starving[6]) { vigneronCost = '<span class="starving">' + displayStarving + '</span>'; }
        if (starving[7]) { arboristCost = '<span class="starving">' + displayStarving + '</span>'; }
        if (starving[8]) { horticulturalistsCost = '<span class="starving">' + displayStarving + '</span>'; }
        tableString = '<tr><td>' + displayFieldhands + '&nbsp;<span class="icon Fieldhand inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(handsHired) + '</td><td>' + fieldhandCost + '</td></tr>';
        if (vigneronsHired > 0) { tableString += '<tr><td>' + displayVignerons + '&nbsp;<span class="icon Vigneron inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(vigneronsHired) + '</td><td>' + vigneronCost + '</td></tr>'; }
        if (arboristsHired > 0) { tableString += '<tr><td>' + displayArborists + '&nbsp;<span class="icon Arborist inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(arboristsHired) + '</td><td>' + arboristCost + '</td></tr>'; }
        if (horticulturalistsHired > 0) { tableString += '<tr><td>' + displayHorticulturalists + '&nbsp;<span class="icon Horticulturalist inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(horticulturalistsHired) + '</td><td>' + horticulturalistsCost + '</td></tr>'; }
        tbodyFarmStaff.innerHTML = tableString;

        if (player.seesReport) {
            theadFarmReport.innerHTML = '<tr><td><br>' + displayCrop + '</td><td>' + displayAcresFarmed + '</td><td>' + displayHarvested + '</td><td>' + displaySpent + '</td></tr>';
            const totalEaten = handsEaten + loggersEaten + sawyersEaten + masonsEaten + minersEaten + smeltersEaten + vigneronsEaten + arboristsEaten + horticulturalistsEaten;
            tableString = '<tr><td><span class="icon Wheat"></span></td><td>' + formatterStandard.format(farmedCount[0]) + '</td><td>' + formatterStandard.format(harvestedCount[0]) + '</td><td>' + formatterStandard.format(spentCount[0] + soldCount[0] + seededCount[0] + totalEaten) + '</td></tr>';
            if (farmStage > 16) { tableString += '<tr><td><span class="icon Barley"></span></td><td>' + formatterStandard.format(farmedCount[1]) + '</td><td>' + formatterStandard.format(harvestedCount[1]) + '</td><td>' + formatterStandard.format(spentCount[1] + soldCount[1] + seededCount[1] + horsesEaten) + '</td></tr>'; }
            if (player.seesOlives) { tableString += '<tr><td><span class="icon Olive"></span></td><td>' + formatterStandard.format(farmedCount[2]) + '</td><td>' + formatterStandard.format(harvestedCount[2]) + '</td><td>' + formatterStandard.format(spentCount[2] + soldCount[2]) + '</td></tr>'; }
            if (farmStage > 17) {
                tableString += '<tr><td><span class="icon Date"></span></td><td>' + formatterStandard.format(farmedCount[3]) + '</td><td>' + formatterStandard.format(harvestedCount[3]) + '</td><td>' + formatterStandard.format(spentCount[3] + soldCount[3]) + '</td></tr>';
                tableString += '<tr><td><span class="icon Fig"></span></td><td>' + formatterStandard.format(farmedCount[4]) + '</td><td>' + formatterStandard.format(harvestedCount[4]) + '</td><td>' + formatterStandard.format(spentCount[4] + soldCount[4]) + '</td></tr>';
                tableString += '<tr><td><span class="icon Pom"></span></td><td>' + formatterStandard.format(farmedCount[5]) + '</td><td>' + formatterStandard.format(harvestedCount[5]) + '</td><td>' + formatterStandard.format(spentCount[5] + soldCount[5]) + '</td></tr>';
                tableString += '<tr><td><span class="icon Grape"></span></td><td>' + formatterStandard.format(farmedCount[6]) + '</td><td>' + formatterStandard.format(harvestedCount[6]) + '</td><td>' + formatterStandard.format(spentCount[6] + soldCount[6]) + '</td></tr>';
            }
            tbodyFarmReport.innerHTML = tableString;
        }

        // FOREST ------------------------------
        if (player.seesForest) {
            theadForestInventory.innerHTML = '<tr><td colspan="3">' + displayInStock + '</td></tr>';
            tableString = '<tr><td>' + displayLogs + '&nbsp;<span class="icon Log inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(logsCount) + '</td><td></td></tr>';
            if (player.canSaw) { tableString += '<tr><td>' + displayBoards + '&nbsp;<span class="icon Board inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(boardsCount) + '</td><td>(-' + (sawyersHired * logsSawnPerWeek) + '<span class="icon Log inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)</td></tr>'; }
            tbodyForestInventory.innerHTML = tableString;

            theadForestStaff.innerHTML = '<tr><td colspan="3">' + displayStaff + '</td></tr>';
            let loggerCost = '(-' + formatterStandard.format(loggersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let sawyerCost = '(-' + formatterStandard.format(sawyersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            if (starving[1]) { loggerCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[2]) { sawyerCost = '<span class="starving">' + displayStarving + '</span>'; }
            tableString = '<tr><td>' + displayLumberjacks + '&nbsp;<span class="icon Logger inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(loggersHired) + '</td><td>' + loggerCost + '</td></tr>';
            if (player.canSaw) { tableString += '<tr><td>' + displaySawyers + '&nbsp;<span class="icon Sawyer inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(sawyersHired) + '</td><td>' + sawyerCost + '</td></tr>'; }
            tbodyForestStaff.innerHTML = tableString;


            if (player.seesReport) {
                theadForestReport.innerHTML = '<tr><td><br>' + displayGood + '</td><td>' + displayScoreProduced + '</td><td>' + displayScoreSpent + '</td></tr>';
                tableString = '<tr><td><span class="icon Log"></span></td><td>' + formatterStandard.format(forestProducedCount[0]) + '</td><td>' + formatterStandard.format(forestSpentCount[0]) + '</td></tr>';
                if (player.canSaw) { tableString += '<tr><td><span class="icon Board"></span></td><td>' + formatterStandard.format(forestProducedCount[1]) + '</td><td>' + formatterStandard.format(forestSpentCount[1]) + '</td></tr>'; }
                tbodyForestReport.innerHTML = tableString;
            }

            if (!player.canLog) { buttonForest.innerHTML = displayLabelLogCamp + '<br>(' + priceLoggingCamp + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (!player.canSaw) { buttonForest.innerHTML = displayLabelSawmill + '<br>(' + priceSawmill + '<span class="icon Wheat inlineIcon"></span>)'; }
        }

        // MOUNTAIN ----------------------------
        if (player.seesMountain) {
            theadMountainInventory.innerHTML = '<tr><td colspan="3">' + displayInStock + '</td></tr>';
            tableString = '<tr><td>' + displayStone + '&nbsp;<span class="icon Stone inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(stoneCount) + '</td><td></td></tr>';
            if (player.canMine) { tableString += '<tr><td>' + displayOre + '&nbsp;<span class="icon OreCopper inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(oreCopperCount) + '</td><td></td></tr>'; }
            if (player.canSmelt) { tableString += '<tr><td>' + displayCopper + '&nbsp;<span class="icon IngotCopper inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(ingotsCopperCount) + '</td><td>(-' + (smeltersHired * ingotsCopperYieldPerTurn * ingotsOreCostPerIngot) + '<span class="icon OreCopper inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)</td></tr>'; }
            tbodyMountainInventory.innerHTML = tableString;

            theadMountainStaff.innerHTML = '<tr><td colspan="3">' + displayStaff + '</td></tr>';
            let masonCost = '(-' + formatterStandard.format(masonsHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let minerCost = '(-' + formatterStandard.format(minersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            let smelterCost = '(-' + formatterStandard.format(smeltersHired) + '<span class="icon Wheat inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
            if (starving[3]) { masonCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[4]) { minerCost = '<span class="starving">' + displayStarving + '</span>'; }
            if (starving[5]) { smelterCost = '<span class="starving">' + displayStarving + '</span>'; }
            tableString = '<tr><td>' + displayMasons + '&nbsp;<span class="icon Mason inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(masonsHired) + '</td><td>' + masonCost + '</td></tr>';
            if (player.canMine) { tableString += '<tr><td>' + displayMiners + '&nbsp;<span class="icon Miner inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(minersHired) + '</td><td>' + minerCost + '</td></tr>'; }
            if (player.canSmelt) { tableString += '<tr><td>' + displayCindermen + '&nbsp;<span class="icon Cinderman inlineIcon"></span>:</td><td class="noPadColumn">' + formatterStandard.format(smeltersHired) + '</td><td>' + smelterCost + '</td></tr>'; }
            tbodyMountainStaff.innerHTML = tableString;

            if (player.seesReport) {
                theadMountainReport.innerHTML = '<tr><td><br>' + displayGood + '</td><td>' + displayHomersProduced + '</td><td>' + displayHomersSpent + '</td></tr>';
                tableString = '<tr><td><span class="icon Stone"></span></td><td>' + formatterStandard.format(mountainProducedCount[0]) + '</td><td>' + formatterStandard.format(mountainSpentCount[0]) + '</td></tr>';
                if (player.canMine) { tableString += '<tr><td><span class="icon OreCopper"></span></td><td>' + formatterStandard.format(mountainProducedCount[1]) + '</td><td>' + formatterStandard.format(mountainSpentCount[1]) + '</td></tr>'; }
                if (player.canSmelt) { tableString += '<tr><td><span class="icon IngotCopper"></span></td><td>' + formatterStandard.format(mountainProducedCount[2]) + '</td><td>' + formatterStandard.format(mountainSpentCount[2]) + '</td></tr>'; }
                tbodyMountainReport.innerHTML = tableString;
            }

            if (player.hasFoundCopperEvidence && !player.hasFoundMine) { buttonMountain.innerHTML = displayLabelMineScout + '<br>(' + priceMineScout + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (player.hasFoundMine && !player.canMine) { buttonMountain.innerHTML = displayLabelMineDig + '<br>(' + currencySymbol + formatterStandard.format(priceMineDig[0]) + ' + ' + priceMineDig[1] + '<span class="icon Log inlineIcon"></span>)'; }
            else if (player.canMine && !player.canSmelt) { buttonMountain.innerHTML = displayLabelFoundry + '<br>(' + currencySymbol + formatterStandard.format(priceFoundry[0]) + ' + ' + priceFoundry[1] + '<span class="icon Log inlineIcon"></span> + ' + formatterStandard.format(priceFoundry[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
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
            else if (farmStage == 11) { buttonBuyLand.innerHTML = displayLabelBuyLand11 + '<br>(' + priceStage12[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceStage12[1]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (farmStage == 12) { buttonBuyLand.innerHTML = displayLabelBuyLand12 + '<br>(' + priceStage13 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (farmStage == 13) { buttonBuyLand.innerHTML = displayLabelBuyLand13 + '<br>(' + priceStage14[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceStage14[1]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (farmStage == 14) { buttonBuyLand.innerHTML = displayLabelBuyLand14 + '<br>(' + priceStage15[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceStage15[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (farmStage == 15) { buttonBuyLand.innerHTML = displayLabelBuyLand15 + '<br>(' + priceStage16[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceStage16[1] + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (farmStage == 16) { buttonBuyLand.innerHTML = displayLabelBuyLand16 + '<br>(' + priceStage17[0] + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceStage17[1]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (farmStage == 17) { buttonBuyLand.innerHTML = displayLabelBuyLand17 + '<br>(' + priceStage18[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceStage18[1] + '<span class="icon Barley inlineIcon"></span>)'; }
        }

        // RENT WAREHOUSE BUTTON ---------------
        if (player.canRentWarehouse) {
            if (warehouseStage == 0) { buttonRentWarehouse.innerHTML = displayLabelRentWarehouse0 + '<br>(' + priceWarehouse0 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (warehouseStage == 1) { buttonRentWarehouse.innerHTML = displayLabelRentWarehouse1 + '<br>(' + priceWarehouse1 + '<span class="icon Wheat inlineIcon"></span>)'; }
            else if (warehouseStage == 2) { buttonRentWarehouse.innerHTML = displayLabelRentWarehouse2 + '<br>(' + priceWarehouse2 + '<span class="icon Wheat inlineIcon"></span>)'; }
        }

        // HIRE BUTTONS ------------------------
        buttonHire.innerHTML = displayHireHand + '&nbsp;<span class="icon Fieldhand inlineIcon"></span><br>(' + handsAvailable + '&nbsp;' + displayLabelAvailable + ')';
        buttonAudit.innerHTML = displayHireAccountant + '&nbsp;<span class="icon Accountant inlineIcon"></span><br>(' + priceAccountant + '<span class="icon Wheat inlineIcon"></span>)';

        // NEW VIEW BUTTONS --------------------
        buttonBuyForest.innerHTML = displayLabelForest + '<br>(' + priceForest + '<span class="icon Wheat inlineIcon"></span>)';
        buttonBuyMountain.innerHTML = displayLabelQuarry + '<br>(' + priceQuarry + '<span class="icon Wheat inlineIcon"></span>)';
        buttonFound.innerHTML = displayLabelFound + '<br>(' + formatterStandard.format(priceVillage) + '<span class="icon Wheat inlineIcon"></span>)';

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

            buttonBarterOlive.innerHTML = barterInventoryOlive + '<span class="icon Olive inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterStandard.format(barterValueOlive) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterDate.innerHTML = barterInventoryDate + '<span class="icon Date inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterStandard.format(barterValueDate) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterFig.innerHTML = barterInventoryFig + '<span class="icon Fig inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterStandard.format(barterValueFig) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterPom.innerHTML = barterInventoryPom + '<span class="icon Pom inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterStandard.format(barterValuePom) + '<span class="icon Wheat inlineIcon"></span>';
            buttonBarterGrape.innerHTML = barterInventoryGrape + '<span class="icon Grape inlineIcon"></span> <span class="icon Sell inlineIcon"></span> ' + formatterStandard.format(barterValueGrape) + '<span class="icon Wheat inlineIcon"></span>';
        }
    }

    else { // player.isAt == 'Township'
        buttonGoToPraedium.innerHTML = displayGoToPraedium;

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
            tableString += '<td class="rightPadColumn">' + currencySymbol + formatterStandard.format(asCount) + '</td>';
            tableString += '</tr>';
            if (asSpent > 0) {
                tableString += '<tr>';
                tableString += '<td>' + displayAsSpent + ' <span class="icon MoneyBagSpent inlineIcon"></span>:' + '</td>';
                tableString += '<td class="rightPadColumn">' + currencySymbol + formatterStandard.format(asSpent) + '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableString += '</table>';

            tableString += '<table id="tableVillageIncome">';
            tableString += '<thead>';
            tableString += '<tr>';
            tableString += '<td colspan="3">' + displayIncome + '</td>';
            tableString += '</tr>';
            tableString += '</thead>';
            tableString += '<tbody>';
            tableString += '<tr>';
            tableString += '<td>' + displayRent + ' <span class="icon Key inlineIcon"></span>:' + '</td>';
            tableString += '<td class="noPadColumn">+' + currencySymbol + rentPrice + '/<span class="icon Citizen inlineIcon"></span>' + '</td>';
            tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayWeek + '</span>' + '</td>';
            tableString += '</tr>';
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
            if (horsesSpawn) {
                tableString += '<tr>';
                tableString += '<td>' + displayHusbandry + ' <span class="icon FarmerJoe inlineIcon"></span>:' + '</td>';
                tableString += '<td class="noPadColumn">' + '+' + horsesIncAmount + '<span class="icon Horsey inlineIcon"></span>' + '</td>';
                tableString += '<td class="rightPadColumn" style="text-align: left;">' + '<span class="warehouseTotal">/' + displayYear + '</span>' + '</td>';
                tableString += '</tr>';
            }
            tableString += '</tbody>';
            tableString += '</table>';

            if (horsesSpawn) {
                tableString += '<table id="tableVillageMateriel">';
                tableString += '<thead>';
                tableString += '<tr>';
                tableString += '<td colspan="3">' + displayMateriel + '</td>';
                tableString += '</tr>';
                tableString += '</thead>';
                tableString += '<tbody>';
                tableString += '<tr>';
                let tempHorseIcon = '<span class="icon Horsey inlineIcon"></span>';
                if (trophiesSpawn) { tempHorseIcon = '<span class="icon HorseyMounted inlineIcon"></span>'; }
                tableString += '<td>' + displayPonies + ' ' + tempHorseIcon + ':' + '</td>';
                tableString += '<td class="noPadColumn">' + formatterStandard.format(horsesCount) + '</td>';
                let horsesCost = '(-' + formatterStandard.format(horsesCount) + '<span class="icon Barley inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
                if (horsesStarving) { horsesCost = '<span class="starving">' + displayStarvingHorse + '</span>'; }
                tableString += '<td>' + horsesCost + '</td>';
                tableString += '</tr>';
                const knightsMax = Math.floor(residentsCount / 2);
                let knightsCount = horsesCount;
                if (knightsCount > knightsMax) { knightsCount = knightsMax; }
                if (cityWalls) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayCavalry + ' <span class="icon BowAndArrow inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterStandard.format(knightsCount) + '<span class="warehouseTotal">/' + knightsMax + '</span>' + '</td>';
                    tableString += '<td>(-' + currencySymbol + formatterStandard.format(knightsCount * 10) + '<span class="warehouseTotal">/' + displayWeek + '</span>)</td>';
                    tableString += '</tr>';
                }
                if (trophiesSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayChampionships + ' <span class="icon Trophy inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterStandard.format(trophiesCount) + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (beadsSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayPrayers + ' <span class="icon Mala inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterStandard.format(beadsCount) + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (scrollsSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayScripture + ' <span class="icon Scroll inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="noPadColumn">' + formatterStandard.format(scrollsCount) + '</td>';
                    tableString += '<td></td>';
                    tableString += '</tr>';
                }
                if (ratsSpawn) {
                    tableString += '<tr>';
                    tableString += '<td>' + displayRats + ' <span class="icon Rattata inlineIcon"></span>:' + '</td>';
                    let ratCountDisplay = '' + formatterStandard.format(ratsCount);
                    if (ratsCount > 1000000) { ratCountDisplay = '+1,000,000'; }
                    if (ratsOutbreak) { ratCountDisplay = '<span class="starving">' + displayRatPlague + '</span>'; }
                    tableString += '<td class="noPadColumn">' + ratCountDisplay + '</td>';
                    tableString += '<td>(-' + ratPenaltyFactor + '%<span class="warehouseTotal">/' + displayHarvest + '</span>)</td>';
                    tableString += '</tr>';
                }
                tableString += '</tbody>';
                tableString += '</table>';

                if (cityWalls) {
                    const calculatedOffenseScore = knightsCount * 20;
                    const calculatedDefenseScore = 1000;
                    tableString += '<table id="tableVillageStatistics">';
                    tableString += '<thead>';
                    tableString += '<tr>';
                    tableString += '<td colspan="2">' + displayStatistics + '</td>';
                    tableString += '</tr>';
                    tableString += '</thead>';
                    tableString += '<tbody>';
                    tableString += '<tr>';
                    tableString += '<td>' + displayOffense + ' <span class="icon Sword inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="rightPadColumn">' + formatterStandard.format(calculatedOffenseScore) + '</td>';
                    tableString += '</tr>';
                    tableString += '<tr>';
                    tableString += '<td>' + displayDefense + ' <span class="icon Shield inlineIcon"></span>:' + '</td>';
                    tableString += '<td class="rightPadColumn">' + formatterStandard.format(calculatedDefenseScore) + '</td>';
                    tableString += '</tr>';
                    tableString += '</tbody>';
                    tableString += '</table>';
                }
            }
        }
        if (tableString == null) { tableString = ''; }
        divVillageLasTablas.innerHTML = tableString;

        // BUILD BUTTON ------------------------
        if (player.canBuild) {
            if (villageStage == 0) { buttonBuild.innerHTML = displayLabelBuild0 + '<br>(' + priceBuild0[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild0[1] + '<span class="icon Log inlineIcon"></span> + ' + priceBuild0[2] + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild0[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 1) { buttonBuild.innerHTML = displayLabelBuild1 + '<br>(' + priceBuild1[0] + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild1[1] + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild1[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 2) { buttonBuild.innerHTML = displayLabelBuild2 + '<br>(' + formatterStandard.format(priceBuild2[0]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceBuild2[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 3) { buttonBuild.innerHTML = displayLabelBuild3 + '<br>(' + formatterStandard.format(priceBuild3[0]) + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild3[1] + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild3[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 4) { buttonBuild.innerHTML = displayLabelBuild4 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild4[0]) + ' + ' + formatterStandard.format(priceBuild4[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild4[2] + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild4[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 5) { buttonBuild.innerHTML = displayLabelBuild5 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild5[0]) + ' + ' + formatterStandard.format(priceBuild5[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceBuild5[2]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (villageStage == 6) { buttonBuild.innerHTML = displayLabelBuild6 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild6[0]) + ' + ' + formatterStandard.format(priceBuild6[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceBuild6[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild6[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 7) { buttonBuild.innerHTML = displayLabelBuild7 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild7[0]) + ' + ' + formatterStandard.format(priceBuild7[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceBuild7[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild7[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 8) { buttonBuild.innerHTML = displayLabelBuild8 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild8[0]) + ' + ' + formatterStandard.format(priceBuild8[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceBuild8[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild8[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 9) { buttonBuild.innerHTML = displayLabelBuild9 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild9[0]) + ' + ' + formatterStandard.format(priceBuild9[1]) + '<span class="icon Wheat inlineIcon"></span> + ' + formatterStandard.format(priceBuild9[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild9[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 10) { buttonBuild.innerHTML = displayLabelBuild10 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild10[0]) + ' + ' + priceBuild10[1] + '<span class="icon Barley inlineIcon"></span> + ' + formatterStandard.format(priceBuild10[2]) + '<span class="icon Board inlineIcon"></span>)'; }
            else if (villageStage == 11) { buttonBuild.innerHTML = displayLabelBuild11 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild11[0]) + ' + ' + priceBuild11[2] + '<span class="icon Wheat inlineIcon"></span> + ' + priceBuild11[3] + '<span class="icon Barley inlineIcon"></span> + ' + priceBuild11[4] + '<span class="icon Olive inlineIcon"></span><br>+ ' + priceBuild11[5] + '<span class="icon Date inlineIcon"></span> + ' + priceBuild11[6] + '<span class="icon Fig inlineIcon"></span> + ' + priceBuild11[7] + '<span class="icon Pom inlineIcon"></span> + ' + priceBuild11[8] + '<span class="icon Grape inlineIcon"></span><br>+ ' + formatterStandard.format(priceBuild11[9]) + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild11[1] + '<span class="icon IngotCopper inlineIcon"></span> + ' + priceBuild11[10] + '<span class="icon Horsey inlineIcon"></span>)'; }
            else if (villageStage == 12) { buttonBuild.innerHTML = displayLabelBuild12 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild12[0]) + ' + ' + priceBuild12[1] + '<span class="icon Barley inlineIcon"></span> + ' + formatterStandard.format(priceBuild12[2]) + '<span class="icon Stone inlineIcon"></span> + ' + priceBuild12[3] + '<span class="icon Horsey inlineIcon"></span>)'; }
            else if (villageStage == 13) { buttonBuild.innerHTML = displayLabelBuild13 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild13[0]) + ' + ' + priceBuild13[1] + '<span class="icon IngotCopper inlineIcon"></span> + ' + formatterStandard.format(priceBuild13[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 14) { buttonBuild.innerHTML = displayLabelBuild14 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild14[0]) + ' + ' + priceBuild14[1] + '<span class="icon Mala inlineIcon"></span> + ' + formatterStandard.format(priceBuild14[2]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 15) { buttonBuild.innerHTML = displayLabelBuild15 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild15[0]) + ' + ' + formatterStandard.format(priceBuild15[1]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 16) { buttonBuild.innerHTML = displayLabelBuild16 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild16[0]) + ' + ' + formatterStandard.format(priceBuild16[1]) + '<span class="icon Barley inlineIcon"></span> + ' + formatterStandard.format(priceBuild16[2]) + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild16[3]) + '<span class="icon Stone inlineIcon"></span>)'; }
            else if (villageStage == 17) { buttonBuild.innerHTML = displayLabelBuild17 + '<br>(' + currencySymbol + formatterStandard.format(priceBuild17[0]) + ' + ' + priceBuild17[1] + '<span class="icon Mala inlineIcon"></span> + ' + priceBuild17[2] + '<span class="icon Scroll inlineIcon"></span> + ' + priceBuild17[3] + '<span class="icon IngotCopper inlineIcon"></span><br>+ ' + formatterStandard.format(priceBuild17[4]) + '<span class="icon Board inlineIcon"></span> + ' + formatterStandard.format(priceBuild17[5]) + '<span class="icon Stone inlineIcon"></span>)'; }
        }

        // SELL BUTTONS ------------------------
        let tempGrainIcon = 'WheatDisable';
        let tempSellIcon = 'SellDisable';
        buttonSellWheat.classList.add('disabled');
        if (bushelCount[0] > (bushelBulkCount * 10)) {
            tempGrainIcon = 'Wheat'
            tempSellIcon = 'Sell';
            buttonSellWheat.classList.remove('disabled');
        }
        buttonSellWheat.innerHTML = formatterStandard.format((bushelBulkCount * 10)) + '<span class="icon ' + tempGrainIcon + ' inlineIcon"></span> <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + currencySymbol + formatterStandard.format((currentBushelPrice * 10));

        tempGrainIcon = 'BarleyDisable'
        tempSellIcon = 'SellDisable';
        buttonSellBarley.classList.add('disabled');
        const adjustedPrice = (currentBushelPrice - currentBarleyAdjustment) * 10;
        if (asCount >= adjustedPrice) {
            tempGrainIcon = 'Barley'
            tempSellIcon = 'Sell';
            buttonSellBarley.classList.remove('disabled');
        }
        buttonSellBarley.innerHTML = currencySymbol + formatterStandard.format(adjustedPrice) + ' <span class="icon ' + tempSellIcon + ' inlineIcon"></span> ' + formatterStandard.format((bushelBulkCount * 10)) + '<span class="icon ' + tempGrainIcon + ' inlineIcon"></span>';
    }

    // SYSTEM ------------------------------
    buttonSystemMessageDismiss.innerHTML = displayIUnderstand;
    buttonGameEventDismiss.innerHTML = player.hasWon ? displayEndButton : displayOK;
    buttonOptionsDismiss.innerHTML = displayOK;
    labelToggleMusic.innerHTML = displayMusic;
    labelToggleSounds.innerHTML = displaySounds;
    labelToggleAnimation.innerHTML = displayAnimations;
    divOptionsFlavour.innerHTML = displayOptionsFlavourFinal;
    buttonOptions.innerHTML = displayOptions;
}



function UpdateVisibilities() {
    divOverlayForeword.style.display = player.seesForeword ? 'block' : '';
    divOverlaySystemMessage.style.display = player.seesSystemMessage ? 'block' : '';
    divOverlayGameEvent.style.display = player.seesGameEvent ? 'block' : '';
    divOverlayOptions.style.display = player.seesOptions ? 'block' : '';
    divOverlayMods.style.display = player.seesModsWindow ? 'block' : '';

    if (player.seesForeword && player.hasBegun) {
        divForewordTitle.style.display = 'none';
        divForewordSubtitle.style.display = 'none';
        buttonForewordEnglish.style.display = 'none';
        buttonForewordSpanish.style.display = 'none';
        divForewordCorpus.style.display = 'block';
        buttonForewordDismiss.style.display = 'block';
    }

    buttonWin.style.display = player.canWin ? 'inline-block' : '';

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

        buttonGoToTownship.style.display = player.seesVillage ? 'block' : '';

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

        buttonHire.style.display = player.canHire ? 'block' : '';
        buttonAudit.style.display = player.canAudit ? 'block' : '';

        buttonBarterOlive.style.display = player.canBarter ? 'block' : '';
        buttonBarterDate.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';
        buttonBarterFig.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';
        buttonBarterPom.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';
        buttonBarterGrape.style.display = (player.canBarter && farmStage > 17) ? 'block' : '';

        let plotSearchResult = FindPlot(0, 'all');
        if (plotSearchResult.row != -1) {
            buttonTill.classList.remove('disabled');
            buttonTillDecal.style.backgroundPosition = '-208px -32px';
        }
        else {
            buttonTill.classList.add('disabled');
            buttonTillDecal.style.backgroundPosition = '-336px -32px';
        }

        plotSearchResult = FindPlot(1, 'wheat');
        let plotSearchResultAlt = FindPlot(1, 'barley');
        if ((plotSearchResult.row != -1 && bushelCount[0] >= plantCost) || (plotSearchResultAlt.row != -1 && bushelCount[1] >= plantCost)) {
            buttonPlant.classList.remove('disabled');
            buttonPlantDecal.style.backgroundPosition = '-240px -32px';
        }
        else {
            buttonPlant.classList.add('disabled');
            buttonPlantDecal.style.backgroundPosition = '-368px -32px';
        }

        plotSearchResult = FindPlot(2, 'all');
        if (plotSearchResult.row != -1) {
            buttonWater.classList.remove('disabled');
            buttonWaterDecal.style.backgroundPosition = '-272px -32px';
        }
        else {
            buttonWater.classList.add('disabled');
            buttonWaterDecal.style.backgroundPosition = '-400px -32px';
        }

        plotSearchResult = FindPlot(14, 'all');
        if (plotSearchResult.row != -1 || arrayVineyard.includes(1) || arrayPomOrchard.includes(1) || arrayOlivar.includes(1) || arrayDatePalmGrove.includes(1) || arrayFigOrchard.includes(1)) {
            buttonHarvest.classList.remove('disabled');
            buttonHarvestDecal.style.backgroundPosition = '-304px -32px';
        }
        else {
            buttonHarvest.classList.add('disabled');
            buttonHarvestDecal.style.backgroundPosition = '-432px -32px';
        }

        buttonPriorityOption.style.backgroundPosition = '-304px -32px';
        if (priority == 'Sow') { buttonPriorityOption.style.backgroundPosition = '-208px -32px'; }
        else if (priority == '🤪') { buttonPriorityOption.style.backgroundPosition = '-240px -16px'; }
    }

    else {
        buttonBuild.style.display = player.canBuild ? 'block' : '';
        buttonSellWheat.style.display = player.canSell ? 'block' : '';
        buttonSellBarley.style.display = player.canSell ? 'block' : '';
    }
}



function RedrawFarm() {
    function PickCropTile(row, col) {
        let tileChoice = null;
        let arrayCropTiles = [
            [0, 64,],
            [16, 64,],
            [16 * 2, 64,],
            [16 * 3, 64,],
            [16 * 4, 64,],
            [16 * 5, 64,],
            [16 * 6, 64,],
            [16 * 7, 64,],
            [16 * 8, 64,],
            [16 * 9, 64,],
            [16 * 10, 64,],
            [16 * 11, 64,],
            [16 * 12, 64,],
            [16 * 13, 64,],
        ];
        if (arrayFarmPlots[row][col] == 14) {
            arrayCropTiles = [
                [16 * 14, 64,],
                [16 * 15, 64,],
                [16 * 16, 64,],
                [16 * 17, 64,],
                [16 * 18, 64,],
            ];
            if (row > 5) {
                arrayCropTiles = [
                    [16 * 19, 64,],
                    [16 * 20, 64,],
                    [16 * 21, 64,],
                    [16 * 22, 64,],
                    [16 * 23, 64,],
                ];
            }
            tileChoice = arrayCropTiles[FindWholeRandom(0, 4)];
        }
        else { tileChoice = arrayCropTiles[arrayFarmPlots[row][col]]; }
        return tileChoice;
    }

    function PickOliveTile(tree) { return (arrayOlivar[tree] == 0) ? tileGrowingOlive : [31 * 16, 96,]; }

    function PickDatePalmTile(palm) { return (arrayDatePalmGrove[palm] == 0) ? [24 * 16, 80,] : [25 * 16, 80,]; }

    function PickFigTile(fig) { return (arrayFigOrchard[fig] == 0) ? [30 * 16, 64,] : [31 * 16, 64,]; }

    function PickPomTile(pom) { return (arrayPomOrchard[pom] == 0) ? [24 * 16, 64,] : [25 * 16, 64,]; }

    function PickGrapeTile(grape, post) {
        let tileChoice = [26 * 16, 64,];
        if (post) { tileChoice = [28 * 16, 64,]; }
        return (arrayVineyard[grape] == 0) ? tileChoice : [27 * 16, 64,];
    }

    const arrayFarmGraph = [
        [
            PickCropTile(0, 0),
        ],
    ];

    if (farmStage > 0) {
        canvasFarm.width = 32;
        canvasFarm.style.width = '258px';
        canvasFarm.style.height = '130px';

        arrayFarmGraph[0].push(
            PickCropTile(0, 1),
        );
    }

    if (farmStage > 1) {
        canvasFarm.width = 64;
        canvasFarm.style.width = '322px';
        canvasFarm.style.height = '82px';

        arrayFarmGraph[0].push(
            PickCropTile(0, 2),
            PickCropTile(0, 3),
        );
    }

    if (farmStage > 2) {
        canvasFarm.height = 32;
        canvasFarm.style.width = '258px';
        canvasFarm.style.height = '130px';

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
        canvasFarm.style.width = '296px';
        canvasFarm.style.height = '128px';

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
        canvasFarm.style.width = '290px';
        canvasFarm.style.height = ((5 * 32) + 2) + 'px';

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
        canvasFarm.style.height = ((11 * 32) + 2) + 'px';

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
        arrayFarmGraph[4][1] = tileLawn;
        arrayFarmGraph[5][4] = tileLawn;
    }

    if (farmStage > 7) {
        arrayFarmGraph[3][3] = tileLawn;
        arrayFarmGraph[4][6] = tileLawn;
        arrayFarmGraph[5][2] = tileLawn;
    }

    if (farmStage > 8) {
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
        canvasFarm.style.width = ((18 * 16) + 2) + 'px';
        canvasFarm.style.height = ((11 * 16) + 2) + 'px';

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

    if (farmStage > 11) {
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
        canvasFarm.style.width = ((20 * 16) + 2) + 'px';
        canvasFarm.style.height = ((18 * 16) + 2) + 'px';

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
        canvasFarm.style.height = ((23 * 16) + 2) + 'px';

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

    if (farmStage > 17) {
        canvasFarm.width = 24 * 16;
        canvasFarm.height = 44 * 16;
        canvasFarm.style.width = ((24 * 16) + 2) + 'px';
        canvasFarm.style.height = ((44 * 16) + 2) + 'px';

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
                tileShrubs2,
                tileLawn,
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
                tileLawn,
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
        );
    }

    TileRenderer(arrayFarmGraph, canvasFarmContext);
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
            tileRocks,
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

    if (villageStage > 17) {
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
        arrayMountainGraph[8][16] = tileEarthN;
        arrayMountainGraph[8][17] = tileBrazierDousedNW;
        arrayMountainGraph[8][18] = tileBrazierDousedNE;

        arrayMountainGraph[9][14] = tileEarthW;
        arrayMountainGraph[9][15] = tileFurnaceNW;
        arrayMountainGraph[9][16] = tileFurnaceNE;
        arrayMountainGraph[9][17] = tileBrazierDousedSW;
        arrayMountainGraph[9][18] = tileBrazierDousedSE;
        arrayMountainGraph[9][19] = tileEarthNE;

        arrayMountainGraph[10][13] = tileRoughPathLroad;
        arrayMountainGraph[10][14] = tileEarthW;
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

    TileRenderer(arrayMountainGraph, canvasMountainContext);
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
    let tempString = '';
    if (villageStage > 2) { tempString = 'Est. ' + RomanceNumber(estDate[1]); }
    divVillageEstDate.innerHTML = tempString;

    tempString = displayVillageTitle0;
    if (villageStage > 2) { tempString = displayVillageTitle1; }
    if (villageStage > 5) { tempString = displayVillageTitle2; }
    if (villageStage > 8) { tempString = displayVillageTitle3; }
    if (villageStage > 11) { tempString = displayVillageTitle4; }
    if (villageStage > 14) { tempString = displayVillageTitle5; }
    if (villageStage > 17) { tempString = displayVillageTitle6; }
    divVillageName.innerHTML = tempString + ' ' + nameVillage;

    canvasVillageContext.drawImage(villagemap, 0, 0, 384, 224, 0, 0, 384, 224);
}



// disable or enable this based on player.likesAnimations 🚨🚨🚨
function AnimateWinButton() {
    frameWinButton++;
    if (frameWinButton == 4) { frameWinButton = 0; }
    const arrayWinFrames = [
        '<span class="icon Crown1 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown4 inlineIcon"></span><br>(<span id="buttonWinHeart">♥</span>)',
        '<span class="icon Crown2 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown3 inlineIcon"></span><br>(<span id="buttonWinHeart">♥</span>)',
        '<span class="icon Crown3 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown2 inlineIcon"></span><br>(<span id="buttonWinHeart">♥</span>)',
        '<span class="icon Crown4 inlineIcon"></span> ' + displayHeir + ' <span class="icon Crown1 inlineIcon"></span><br>(<span id="buttonWinHeart">♥</span>)',
    ];
    buttonWin.innerHTML = arrayWinFrames[frameWinButton];
    timeoutWinButton = setTimeout(AnimateWinButton, 69); // ☯️
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
    divHourglass.style.backgroundPosition = arrayHourglassInUse[frameHourglass][0] + 'px ' + arrayHourglassInUse[frameHourglass][1] + 'px';
    if (gameSpeed != 'paused') { timeoutHourglass = setTimeout(AnimateHourglass, delayAmountHourglassFrame, newSpeed); }
}



function AnimateCanvases() {
    RedrawCanvases();
    globalAnimationFrame++;
    if (globalAnimationFrame != animationFPS) { setTimeout(AnimateCanvases, animationInterval); }
}



//                           ||
// tile animation is in here \/
function RedrawCanvases() {
    if (player.isAt == 'Praedium') {
        RedrawFarm();
        if (player.seesForest) { RedrawForest(); }
        if (player.seesMountain) { RedrawMountain(); }
    }
    else {
        RedrawVillage();
    }

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
        }
        else {
            //township animations go here
        }
    }
}



// End of Document