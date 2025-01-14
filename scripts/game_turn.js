// ۞ GAME TURN *************************************************************************************
// *************************************************************************************************

let gameEventTrigger = false;
let gameEventContainer = '';



function GameTurn() {
    if (player.likesRecords) { snapshotLastTurn = snapshotThisTurn; }

    gameTurn++;

    week++;
    if (week == 21) { player.age++; }
    if (week == 53) {
        week = 1;
        year++;
    }

    let cell = [-1, -1];
    for (let i = 0; i < farmSize[1]; i++) {
        cell[0]++;
        cell[1] = -1;
        for (let i = 0; i < farmSize[0]; i++) {
            cell[1]++;
            AdvanceTime(arrayFarmPlots, cell);
        }
    }
    if (player.hasFlaxFarm) {
        cell = [-1, -1];
        for (let i = 0; i < flaxSize[1]; i++) {
            cell[0]++;
            cell[1] = -1;
            for (let i = 0; i < flaxSize[0]; i++) {
                cell[1]++;
                AdvanceTime(arrayFlaxPlots, cell);
            }
        }
    }

    if (week == 41) { FruitOlives(); }
    if (week == 25 || week == 28 || week == 31) { FruitDates(); }
    if (week == 19) { FruitFigs(); }
    if (week == 44) { FruitPoms(); }
    if (week == 47) { FruitGrapes(); }

    if (handsHired > 0 || vigneronsHired > 0) { FieldhandWork(); }

    if (player.canLog) { FellTrees(); }
    if (player.canSaw) { SawLogs(); }
    if (player.seesMountain) {
        QuarryStone();
        if (player.canMine) { MineCopper(); }
        if (player.canSmelt) { SmeltCopper(); }
    }

    if (residentsCount < residentsMax) { Migration(); }
    if (residentsCount > 0) {
        ChargeRent();
        if (mineTimer < mineTimerLimit) {
            mineTimer++;
            if (mineTimer == mineTimerLimit) {
                gameEventTrigger = true;
                gameEventContainer = displayStoryFoundCopper;
                player.seesMountainButton = true;
                player.hasFoundCopperEvidence = true;
            }
        }
    }

    if (week % 4 == 0) {
        SetMarketPrice();
        if (beadsSpawn) { MakeBeads(); }
        if (trophiesSpawn) { HostGladiatorGames(); }
        if (player.hasBank) { AccrueInterest(); }
    }

    if (week % 2 == 0 && trophiesSpawn) {
        const tourismTotalIncome = tourismValue * trophiesCount;
        asCount += tourismTotalIncome;
        tourismLifetimeProfit += tourismTotalIncome;
    }

    if (horsesSpawn) { GrowHorses(); }
    if (horsesCount > 0) { FeedHorses(); }

    if (scrollsSpawn) { ScribeWisdom(); }

    if (ratsSpawn) { BreedRats(); }

    if (player.hasCityWalls) {
        if (tributeTimer < tributeTimerLimit) {
            tributeTimer++;
            if (tributeTimer == tributeTimerLimit) {
                gameEventTrigger = true;
                gameEventContainer = displayStoryTribute;
                player.hasBeenLevied = true;
            }
        }
        if (player.hasBeenLevied) {
            const weeklyLevy = tributeAmount * 7;
            asCount -= weeklyLevy;
            asSpent += weeklyLevy;
            tributeLifetimePaid += weeklyLevy;
        }
    }

    if (player.hasArmy) {
        militarySoldiers = Math.floor(residentsCount * militaryEnlistment);
        militaryCavalryMax = militarySoldiers;
        militaryCavalryCurrent = horsesCount;
        if (militaryCavalryCurrent > militaryCavalryMax) { militaryCavalryCurrent = militaryCavalryMax; }
        militaryInfantry = militarySoldiers - militaryCavalryCurrent;
        const militarySalary = (militaryInfantry * militaryUnitCost) + (militaryCavalryCurrent * (militaryUnitCost * militaryUnitCostFactor));
        asCount -= militarySalary;
        asSpent += militarySalary;
        militaryLifetimeCost += militarySalary;
    }

    if (farmStage == 1 && bushelCount[0] > 88 && !player.hasMildewed) {
        player.hasMildewed = true;
        bushelCount[0] = Math.floor((bushelCount[0] * 0.1));
        gameEventTrigger = true;
        gameEventContainer = displayStoryFarmMildew;
    }

    if (villageStage > 13 && (week == 52 || week == 26)) {
        const calculatedTaxValue = residentsCount * taxesValue;
        asCount += calculatedTaxValue;
        taxesLifetimeCollected += calculatedTaxValue;
    }

    if (player.hasMonument) {
        pilgrimsMax = Math.floor(residentsCount / 2);
        pilgrimsCount = FindWholeRandom(0, pilgrimsMax);
        pilgrimsLifetimeCount += pilgrimsCount;
        const thisWeeksTake = pilgrimsCount * pilgrimPrayerValue;
        beadsCount += thisWeeksTake;
        pilgrimLifetimeIncome += thisWeeksTake;
        if (week == 1 && year % 10 == 0) { relicCount++; }
    }

    if (player.canExport) { Shipping(); }

    if (player.hasHiredBronzeworkers) {
        ForgeBronze();
        if (crystalTimer < crystalTimerLimit && player.hasAtelier) {
            crystalTimer++;
            if (crystalTimer == crystalTimerLimit) {
                gameEventTrigger = true;
                gameEventContainer = displayStoryFoundCrystal;
                player.seesMountainButton = true;
                player.hasFoundCrystalEvidence = true;
            }
        }
    }

    if (player.hasHiredGemcutters) { CutCrystals(); }

    if (player.hasHospital) { TreatPatients(); }

    if (player.hasBakery) { WorkshopProduction(); }

    if (year == 55 && week == 10) {
        gameEventTrigger = true;
        gameEventContainer = displayStoryRomanConquestofGreece;
    }

    if (player.likesRecords) {
        snapshotThisTurn = CollateGameStateReport();
        //reportOutputToWriteToDiskForDataAnalysis = snapshotThisTurn - snapshotLastTurn;
    }

    if (week == 1 && year > 1) { RecordProgress(); }

    UpdateDisplay();

    if (gameSpeed == 'standard' && player.likesAnimations) {
        globalAnimationFrame = 1;
        clearTimeout(timeoutCanvases);
        timeoutCanvases = setTimeout(AnimateCanvases, animationInterval);
    }

    if (gameEventTrigger) {
        gameEventTrigger = false;
        setTimeout(FireGameEvent, 50);
    }
}



function FireGameEvent() {
    if (player.likesStory) { GameEvent(gameEventContainer, null, true); }
}



function AdvanceTime(target, cell) {
    if (target[cell[0]][cell[1]] == 3 || target[cell[0]][cell[1]] == 4 || target[cell[0]][cell[1]] == 5 || target[cell[0]][cell[1]] == 6 || target[cell[0]][cell[1]] == 7 || target[cell[0]][cell[1]] == 8 || target[cell[0]][cell[1]] == 9 || target[cell[0]][cell[1]] == 10 || target[cell[0]][cell[1]] == 11 || target[cell[0]][cell[1]] == 12 || target[cell[0]][cell[1]] == 13) {
        target[cell[0]][cell[1]]++;
    }
}



function FruitOlives() {
    if (olivePlantDate[1] != 0) {
        if (olivesGrowthCounter < 8) {
            olivesGrowthCounter++;
            tileGrowingOlive = [(22 + olivesGrowthCounter) * 16, 96,];
        }

        if (year >= (olivePlantDate[1] + 8)) {
            if (year == (olivePlantDate[1] + 8)) {
                gameEventTrigger = true;
                gameEventContainer = displayStoryOlives;
                //if (player.likesStory) { GameEvent(displayStoryOlives, 'buy_olives', false); }
                player.canBarter = true;
            }
            for (let i = 0; i < arrayOlivar.length; i++) { arrayOlivar[i] = 1; }
        }
    }
}



function FruitDates() {
    if (farmStage > 17) {
        for (let i = 0; i < arrayDatePalmGrove.length; i++) { arrayDatePalmGrove[i] = 1; }
    }
}



function FruitFigs() {
    if (farmStage > 17) {
        for (let i = 0; i < arrayFigOrchard.length; i++) { arrayFigOrchard[i] = 1; }
    }
}



function FruitPoms() {
    if (farmStage > 17) {
        for (let i = 0; i < arrayPomOrchard.length; i++) { arrayPomOrchard[i] = 1; }
    }
}



function FruitGrapes() {
    if (farmStage > 17) {
        for (let i = 0; i < arrayVineyard.length; i++) {
            if (FindWholeRandom(1, 5) != 1) {
                arrayVineyard[i] = 1;
            }
        }
    }
}



function WorkshopProduction() {
    let bloop = false;
    Render(0);
    Render(1);
    Render(2);
    Render(3);
    Render(4);
    Render(5);
    Render(6);
    Render(7);
    Render(8);
    Render9();
    Render(10);
    if (player.hasRations) { Render11(); }
    Render(12);
    Render(13);
    Render14();

    function Render(ingredient) {
        while (residenceIngredientInStockCount[ingredient] >= residenceIngredientsIn[ingredient]) {
            residenceIngredientInStockCount[ingredient] -= residenceIngredientsIn[ingredient];
            bloop = !bloop;
            if (ingredient == 4 && player.hasApiary && bloop) {
                residenceIngredientInStockCount[9][0]++;
                residenceIngredientConsumedCount[9][0]++;
                residenceSpentCount[4]++;
            }
            else if (ingredient == 5 && player.hasApiary && bloop) {
                residenceIngredientInStockCount[9][1]++;
                residenceIngredientConsumedCount[9][1]++;
                residenceSpentCount[5]++;
            }
            else {
                if (ingredient == 12 && player.hasBandages) {
                    residenceIngredientInStockCount[13]++;
                    residenceIngredientConsumedCount[13]++;
                    residenceSpentCount[12]++;
                }
                else { residenceInStockCount[ingredient] += residenceProductOut[ingredient]; }
            }
            residenceProducedCount[ingredient] += residenceProductOut[ingredient];
        }
    }

    function Render9() {
        while ((residenceIngredientInStockCount[9][0] >= residenceIngredientsIn[9]) && (residenceIngredientInStockCount[9][1] >= residenceIngredientsIn[9])) {
            residenceIngredientInStockCount[9][0] -= residenceIngredientsIn[9];
            residenceIngredientInStockCount[9][1] -= residenceIngredientsIn[9];

            residenceInStockCount[9] += residenceProductOut[9];
            residenceProducedCount[9] += residenceProductOut[9];
        }
    }

    function Render11() {
        while ((residenceInStockCount[9] >= residenceIngredientsIn[11][0]) && (residenceInStockCount[10] >= residenceIngredientsIn[11][1]) && (residenceInStockCount[14] >= residenceIngredientsIn[11][2])) {
            residenceInStockCount[9] -= residenceIngredientsIn[11][0];
            residenceSpentCount[9] += residenceIngredientsIn[11][0];
            residenceInStockCount[10] -= residenceIngredientsIn[11][1];
            residenceSpentCount[10] += residenceIngredientsIn[11][1];
            residenceInStockCount[14] -= residenceIngredientsIn[11][2];
            residenceSpentCount[14] += residenceIngredientsIn[11][2];

            residenceInStockCount[11] += residenceProductOut[11];
            residenceProducedCount[11] += residenceProductOut[11];
        }
    }

    function Render14() {
        while ((residenceIngredientInStockCount[14][0] >= residenceIngredientsIn[14][0]) && (residenceIngredientInStockCount[14][1] >= residenceIngredientsIn[14][1])) {
            residenceIngredientInStockCount[14][0] -= residenceIngredientsIn[14][0];
            residenceIngredientInStockCount[14][1] -= residenceIngredientsIn[14][1];
            saltSpent += residenceIngredientsIn[14][1];

            residenceInStockCount[14] += residenceProductOut[14];
            residenceProducedCount[14] += residenceProductOut[14];
        }
    }
}



function ForgeBronze() {
    bronzeworkCountdownTimer--;
    if (bronzeworkCountdownTimer == 0) {
        bronzeworkCountdownTimer = bronzeworkCountdownTimerMax;
        if (ingotsCopperCount >= bronzeCopperNeed && ingotsTinCount >= bronzeTinNeed) {
            ingotsCopperCount -= bronzeCopperNeed;
            mountainSpentCount[2] += bronzeCopperNeed;
            ingotsTinCount -= bronzeTinNeed;
            mountainSpentCount[3] += bronzeTinNeed;
            const bounty = bronzeCopperNeed + bronzeTinNeed;
            ingotsBronzeCount += bounty;
            mountainProducedCount[4] += bounty;
        }
    }
    PayWorkerGroup(metallurgistsHired, 9);
}



function CutCrystals() {
    let bounty = crystalHarvest;
    mountainProducedCount[5] += bounty;
    const workshopShare = Math.floor(crystalHarvest * residenceIngredientWorkshopPortion[8]);
    residenceIngredientInStockCount[8] += workshopShare;
    residenceIngredientConsumedCount[8] += workshopShare;
    bounty = bounty - workshopShare;
    crystalsCount += bounty;
    mountainSpentCount[5] += bounty;
    PayWorkerGroup(gemcuttersHired, 10);
}



function TreatPatients() {
    patientsCount = FindWholeRandom(0, 10);
    const thisTurnCost = patientsCount * patientCost;
    asCount -= thisTurnCost;
    asSpent += thisTurnCost;
    medicalLifetimeCost += thisTurnCost;
}



function AccrueInterest() {
    const interestAmount = Math.floor(asCount * (interestRate / 12));
    asCount += interestAmount;
    interestLifetimeCollected += interestAmount;
}



function Shipping() {
    const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);

    shipmentTimersCurrent[0]--;
    shipmentTimersCurrent[1]--;
    shipmentTimersCurrent[2]--;
    shipmentTimersCurrent[3]--;
    shipmentTimersCurrent[4]--;
    shipmentTimersCurrent[5]--;
    shipmentTimersCurrent[6]--;
    shipmentTimersCurrent[7]--;
    shipmentTimersCurrent[8]--;

    if (shipmentTimersCurrent[0] == 0) {
        shipmentTimersCurrent[0] = shipmentTimersDefault[0];
        if (player.canExportOil) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[0] * currentDollarPriceOfOneWheat) * valueFactor[0];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[1];
            residenceShippedCount[1] += residenceInStockCount[1];
            residenceInStockCount[1] = 0;
            asCount += bounty;
            shipmentProfits[0] += bounty;
        }
    }

    if (shipmentTimersCurrent[1] == 0) {
        shipmentTimersCurrent[1] = shipmentTimersDefault[1];
        if (player.canExportBeer) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[1] * currentDollarPriceOfOneWheat) * valueFactor[1];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[2];
            residenceShippedCount[2] += residenceInStockCount[2];
            residenceInStockCount[2] = 0;
            asCount += bounty;
            shipmentProfits[1] += bounty;
        }
    }

    if (shipmentTimersCurrent[2] == 0) {
        shipmentTimersCurrent[2] = shipmentTimersDefault[2];
        if (player.canExportWine) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[2] * currentDollarPriceOfOneWheat) * valueFactor[2];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[3];
            residenceShippedCount[3] += residenceInStockCount[3];
            residenceInStockCount[3] = 0;
            asCount += bounty;
            shipmentProfits[2] += bounty;
        }
    }

    if (shipmentTimersCurrent[3] == 0) {
        shipmentTimersCurrent[3] = shipmentTimersDefault[3];
        if (player.canExportSyrup) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[3] * currentDollarPriceOfOneWheat) * valueFactor[3];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[4];
            residenceShippedCount[4] += residenceInStockCount[4];
            residenceInStockCount[4] = 0;
            asCount += bounty;
            shipmentProfits[3] += bounty;
        }
    }

    if (shipmentTimersCurrent[4] == 0) {
        shipmentTimersCurrent[4] = shipmentTimersDefault[4];
        if (player.canExportJuice) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[4] * currentDollarPriceOfOneWheat) * valueFactor[4];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[5];
            residenceShippedCount[5] += residenceInStockCount[5];
            residenceInStockCount[5] = 0;
            asCount += bounty;
            shipmentProfits[4] += bounty;
        }
    }

    if (shipmentTimersCurrent[5] == 0) {
        shipmentTimersCurrent[5] = shipmentTimersDefault[5];
        if (player.canExportFigs) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[5] * currentDollarPriceOfOneWheat) * valueFactor[5];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[6];
            residenceShippedCount[6] += residenceInStockCount[6];
            residenceInStockCount[6] = 0;
            asCount += bounty;
            shipmentProfits[5] += bounty;
        }
    }

    if (shipmentTimersCurrent[6] == 0) {
        shipmentTimersCurrent[6] = shipmentTimersDefault[6];
        if (player.canExportTrinkets) {
            const bounty = residenceInStockCount[7] * trinketValue;
            residenceShippedCount[7] += residenceInStockCount[7];
            residenceInStockCount[7] = 0;
            asCount += bounty;
            shipmentProfits[6] += bounty;
        }
    }

    if (shipmentTimersCurrent[7] == 0) {
        shipmentTimersCurrent[7] = shipmentTimersDefault[7];
        if (player.canImportTin && asCount >= importCost[0]) {
            asCount -= importCost[0];
            asSpent += importCost[0];
            shipmentCosts[0] += importCost[0];
            let bounty = importAmount[0];
            mountainPurchasedCount[3] += bounty;
            if (player.hasAtelier) {
                const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[7]);
                residenceIngredientInStockCount[7] += workshopShare;
                residenceIngredientConsumedCount[7] += workshopShare;
                bounty = bounty - workshopShare;
            }
            ingotsTinCount += bounty;
        }
    }

    if (shipmentTimersCurrent[8] == 0) {
        shipmentTimersCurrent[8] = shipmentTimersDefault[8];
        if (player.canImportSalt && asCount >= importCost[1]) {
            asCount -= importCost[1];
            asSpent += importCost[1];
            shipmentCosts[1] += importCost[1];
            let bounty = importAmount[1];
            residenceIngredientInStockCount[14][1] += bounty;
            residenceIngredientConsumedCount[14][1] += bounty;
        }
    }
}



function PayWorkerGroup(howManyToPay, whoToPay) {
    let hasBeenPayed = false;
    const costInBread = howManyToPay * loavesPaymentAmount;
    if (residenceInStockCount[0] >= costInBread) {
        residenceInStockCount[0] -= costInBread;
        residenceSpentCount[0] += costInBread;
        hasBeenPayed = true;
    }
    if (!hasBeenPayed && bushelCount[0] >= howManyToPay + starvingBuffer) {
        bushelCount[0] -= howManyToPay;
        paidOutWheat[whoToPay] += howManyToPay;
        hasBeenPayed = true;
    }
    if (!hasBeenPayed) { starving[whoToPay] = true; }
    else { starving[whoToPay] = false; }
}



function FieldhandWork() {
    PayWorkerGroup(handsHired, 0);
    if (vigneronsHired > 0) { PayWorkerGroup(vigneronsHired, 6); }
    if (arboristsHired > 0) { PayWorkerGroup(arboristsHired, 7); }
    if (horticulturalistsHired > 0) { PayWorkerGroup(horticulturalistsHired, 8); }
    const laborForceTally = handsHired + vigneronsHired + arboristsHired + horticulturalistsHired;
    if (priority == 'Reap') {
        for (let i = 0; i < (laborForceTally); i++) {
            let taskComplete = false;
            taskComplete = PlotHarvest(true);
            if (!taskComplete) { taskComplete = PlotWater(true); }
            if (!taskComplete) { taskComplete = PlotPlant(true); }
            if (!taskComplete) { PlotTill(true); }
        }
    }
    else if (priority == 'Sow') {
        for (let i = 0; i < (laborForceTally); i++) {
            let taskComplete = false;
            taskComplete = PlotTill(true);
            if (!taskComplete) { taskComplete = PlotPlant(true); }
            if (!taskComplete) { taskComplete = PlotWater(true); }
            if (!taskComplete) { PlotHarvest(true); }
        }
    }
    else {
        //console.log('🍕 cowabunga, dude 🤙'); // truly, Turtle Power knows no limit 🥋🐢🗡️
        weeksOfHoliday++;
        manweeksLost += laborForceTally;
    }
}



function FellTrees() {
    const loggedAmount = FindWholeRandom(logsMin, logsMax) * loggersHired;
    logsCount += loggedAmount;
    forestProducedCount[0] += loggedAmount;
    PayWorkerGroup(loggersHired, 1);
}



function SawLogs() {
    const processedAmount = sawyersHired * logsSawnPerWeek;
    const producedAmount = processedAmount * boardsPerLog;
    logsCount -= processedAmount;
    forestSpentCount[0] += processedAmount;
    boardsCount += producedAmount;
    forestProducedCount[1] += producedAmount;
    PayWorkerGroup(sawyersHired, 2);
}



function QuarryStone() {
    const producedAmount = masonsHired * FindWholeRandom(stoneMin, stoneMax);
    stoneCount += producedAmount;
    mountainProducedCount[0] += producedAmount;
    PayWorkerGroup(masonsHired, 3);
}



function MineCopper() {
    const producedAmount = minersHired * FindWholeRandom(oreCopperMin, oreCopperMax);
    oreCopperCount += producedAmount;
    mountainProducedCount[1] += producedAmount;
    PayWorkerGroup(minersHired, 4);
}



function SmeltCopper() {
    const producedAmount = smeltersHired * ingotsCopperYieldPerTurn;
    const processedAmount = producedAmount * ingotsOreCostPerIngot;
    ingotsCopperCount += producedAmount;
    mountainProducedCount[2] += producedAmount;
    oreCopperCount -= processedAmount;
    mountainSpentCount[1] += processedAmount;
    PayWorkerGroup(smeltersHired, 5);
}



function Migration() {
    if (FindWholeRandom(1, 3) != 3) {
        let newResidents = 1;
        if (FindWholeRandom(1, 10) == 1) {
            newResidents = 2;
            if (FindWholeRandom(1, 2) == 1) { newResidents = 3; }
        }
        residentsCount += newResidents;
        if (residentsCount > residentsMax) { residentsCount = residentsMax; }
    }
}



function ChargeRent() {
    const tabulatedRentalSum = rentPrice * residentsCount;
    asCount += tabulatedRentalSum;
    rentLifetimeCollected += tabulatedRentalSum;
}



function SetMarketPrice() {
    currentBushelPrice = actualBushelPrice + (FindWholeRandom(-2, 2) * 1000);
    currentBarleyAdjustment = actualBarleyAdjustment + (FindWholeRandom(-2, 2) * 500);
}



function MakeBeads() {
    beadsCount += beadsIncAmount;
}



function HostGladiatorGames() {
    let chanceMax = 10;
    if (trophyChance == 20) { chanceMax = 5; }
    if (FindWholeRandom(1, chanceMax) == 1) { trophiesCount += 1; }
}



function GrowHorses() {
    horseClock += 1;
    if (horseClock == 52) {
        horseClock = 0;
        horsesCount += horsesIncAmount;
    }
}



function FeedHorses() {
    if (bushelCount[1] <= horsesCount + starvingBuffer) { horsesStarving = true; }
    else {
        horsesStarving = false;
        bushelCount[1] -= horsesCount;
        horsesEaten += horsesCount;
    }
}



function ScribeWisdom() {
    if (week == 1 || week == 14 || week == 27 || week == 40) { scrollsCount += scrollsIncAmount; }
}



function BreedRats() {
    ratsOutbreak = false;
    if (FindWholeRandom(1, 20) == 1) {
        ratsCount = Math.floor(ratsCount / 10);
        if (ratsCount < 1) { ratsCount = 1; }
        ratsOutbreak = true;
    }
    else { ratsCount = Math.ceil(ratsCount * 1.1); }
    if (ratsCount > ratsHighScore) { ratsHighScore = ratsCount; }

    SetRatPenaltyFactor('I think so');

    function SetRatPenaltyFactor(shouldWeSetFactor) {
        if (shouldWeSetFactor === 'I think so') {
            // ❗ begin to set factor here:
            ratPenaltyFactor = 0;
            if (ratPenaltyFactor != !0) {
                if (ratsCount > 99999) { ratPenaltyFactor = 1; }
                if (ratsCount > 199999) { ratPenaltyFactor = 2; }
                if (ratsCount > 299999) { ratPenaltyFactor = 3; }
                if (ratsCount > 399999) { ratPenaltyFactor = 4; }
                if (ratsCount > 499999) { ratPenaltyFactor = 5; }
                if (ratsCount > 599999) { ratPenaltyFactor = 6; }
                if (ratsCount > 699999) { ratPenaltyFactor = 7; }
                if (ratsCount > 799999) { ratPenaltyFactor = 8; }
                if (ratsCount > 899999) { ratPenaltyFactor = 9; }
                if (ratsCount > 999999) { ratPenaltyFactor = 10; }
            } // ❗ factor successfully set above:
        }
    } // ⚠️ END of rat penalty factor setting function
}



// End of Document