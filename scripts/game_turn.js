// GAME TURN ***************************************************************************************
// *************************************************************************************************

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
            AdvanceTime(cell);
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
                if (player.likesStory) { GameEvent(displayStoryFoundCopper, null, false); }
                player.seesMountainButton = true;
                player.hasFoundCopperEvidence = true;
            }
        }
    }

    if (week % 4 == 0) {
        SetMarketPrice();
        if (beadsSpawn) { MakeBeads(); }
        if (trophiesSpawn) { HostGladiatorGames(); }
    }

    if (week % 2 == 0 && trophiesSpawn) {
        const tourismTotalIncome = tourismValue * trophiesCount;
        asCount += tourismTotalIncome;
        tourismLifetimeProfit += tourismTotalIncome;
    }

    if (horsesSpawn) {
        GrowHorses();
        if (cityWalls) {
            const knightsMax = Math.floor(residentsCount / 2);
            let knightsCount = horsesCount;
            if (knightsCount > knightsMax) { knightsCount = knightsMax; }
            const militarySalary = knightsCount * 10;
            asCount -= militarySalary;
            asSpent += militarySalary;
            militaryLifetimeCost += militarySalary;

            if (tributeTimer < tributeTimerLimit) {
                tributeTimer++;
                if (tributeTimer == tributeTimerLimit) {
                    if (player.likesStory) { GameEvent(displayStoryTribute, null, false); }
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
    }

    if (horsesCount > 0) { FeedHorses(); }

    if (scrollsSpawn) { ScribeWisdom(); }

    if (ratsSpawn) { BreedRats(); }

    if (farmStage == 1 && bushelCount[0] > 88 && !player.hasMildewed) {
        player.hasMildewed = true;
        bushelCount[0] = Math.floor((bushelCount[0] * 0.1));
        if (player.likesStory) { GameEvent(displayStoryFarmMildew, null, false); }
    }

    if (villageStage > 13 && (week == 52 || week == 26)) {
        const calculatedTaxValue = residentsCount * taxesValue;
        asCount += calculatedTaxValue;
        taxesLifetimeCollected += calculatedTaxValue;
    }

    if (villageStage > 17) {
        pilgrimsMax = Math.floor(residentsCount / 2);
        pilgrimsCount = FindWholeRandom(0, pilgrimsMax);
        pilgrimsLifetimeCount += pilgrimsCount;
        const thisWeeksTake = pilgrimsCount * pilgrimPrayerValue;
        beadsCount += thisWeeksTake;
        pilgrimLifetimeIncome += thisWeeksTake;
        if (week == 1 && year % 10 == 0) { relicCount++; }
    }

    if (player.canExport) { Shipping(); }

    if (player.hasBakery) { WorkshopProduction(); }

    if (player.hasHiredBronzeworkers) { ForgeBronze(); }

    UpdateDisplay();

    if (gameSpeed == 'standard' && player.likesAnimations) {
        globalAnimationFrame = 1;
        setTimeout(AnimateCanvases, animationInterval);
    }

    if (player.likesRecords) {
        snapshotThisTurn = CollateGameStateReport();
        //reportOutputToWriteToDiskForDataAnalysis = snapshotThisTurn - snapshotLastTurn;
    }
}



function AdvanceTime(cell) {
    if (arrayFarmPlots[cell[0]][cell[1]] == 3 || arrayFarmPlots[cell[0]][cell[1]] == 4 || arrayFarmPlots[cell[0]][cell[1]] == 5 || arrayFarmPlots[cell[0]][cell[1]] == 6 || arrayFarmPlots[cell[0]][cell[1]] == 7 || arrayFarmPlots[cell[0]][cell[1]] == 8 || arrayFarmPlots[cell[0]][cell[1]] == 9 || arrayFarmPlots[cell[0]][cell[1]] == 10 || arrayFarmPlots[cell[0]][cell[1]] == 11 || arrayFarmPlots[cell[0]][cell[1]] == 12 || arrayFarmPlots[cell[0]][cell[1]] == 13) {
        arrayFarmPlots[cell[0]][cell[1]]++;
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
                if (player.likesStory) { GameEvent(displayStoryOlives, 'buy_olives', false); }
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
    Render(0);
    Render(1);
    Render(2);
    Render(3);
    Render(4);
    Render(5);
    Render(6);
    Render(7);

    function Render(ingredient) {
        while (residenceIngredientInStockCount[ingredient] >= residenceIngredientsIn[ingredient]) {
            residenceIngredientInStockCount[ingredient] -= residenceIngredientsIn[ingredient];
            residenceInStockCount[ingredient] += residenceProductOut[ingredient];
            residenceProducedCount[ingredient] += residenceProductOut[ingredient];
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



function Shipping() {
    const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / bushelBulkCount);

    shipmentTimersCurrent[0]--;
    shipmentTimersCurrent[1]--;
    shipmentTimersCurrent[2]--;
    shipmentTimersCurrent[3]--;
    shipmentTimersCurrent[4]--;
    shipmentTimersCurrent[5]--;
    shipmentTimersCurrent[6]--;
    shipmentTimersCurrent[7]--;

    if (shipmentTimersCurrent[0] == 0) {
        shipmentTimersCurrent[0] = shipmentTimersDefault[0];
        if (player.canExportOil) {
            const currentDollarValueOfUnit = (wheatValuePerUnit[0] * currentDollarPriceOfOneWheat) * valueFactor[0];
            const bounty = currentDollarValueOfUnit * residenceInStockCount[1];
            residenceSpentCount[1] += residenceInStockCount[1];
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
            residenceSpentCount[2] += residenceInStockCount[2];
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
            residenceSpentCount[3] += residenceInStockCount[3];
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
            residenceSpentCount[4] += residenceInStockCount[4];
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
            residenceSpentCount[5] += residenceInStockCount[5];
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
            residenceSpentCount[6] += residenceInStockCount[6];
            residenceInStockCount[6] = 0;
            asCount += bounty;
            shipmentProfits[5] += bounty;
        }
    }

    if (shipmentTimersCurrent[6] == 0) {
        shipmentTimersCurrent[6] = shipmentTimersDefault[6];
        if (player.canExportTrinkets) {
            const bounty = residenceInStockCount[7] * trinketValue;
            residenceSpentCount[7] += residenceInStockCount[7];
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
            mountainProducedCount[3] += bounty;
            if (player.hasAtelier) {
                const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[7]);
                residenceIngredientInStockCount[7] += workshopShare;
                residenceIngredientConsumedCount[7] += workshopShare;
                bounty = bounty - workshopShare;
            }
            ingotsTinCount += bounty;
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
    currentBushelPrice = actualBushelPrice + (FindWholeRandom(-2, 2) * 100);
    currentBarleyAdjustment = 1000 + (FindWholeRandom(-2, 2) * 50);
}



function MakeBeads() {
    beadsCount += beadsIncAmount;
}



function HostGladiatorGames() {
    if (FindWholeRandom(1, 10) == 1) { trophiesCount += 1; }
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