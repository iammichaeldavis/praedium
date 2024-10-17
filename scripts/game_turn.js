// GAME TURN ***************************************************************************************
// *************************************************************************************************

function GameTurn() {
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
    if (horsesSpawn) {
        GrowHorses();
        if (cityWalls) {
            const knightsMax = Math.floor(residentsCount / 2);
            let knightsCount = horsesCount;
            if (knightsCount > knightsMax) { knightsCount = knightsMax; }
            asCount -= knightsCount * 10;
            asSpent += knightsCount * 10;

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

    UpdateDisplay();
    if (gameSpeed == 'standard' && player.likesAnimations) {
        globalAnimationFrame = 1;
        setTimeout(AnimateCanvases, animationInterval);
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



function FieldhandWork() {
    if (bushelCount[0] <= handsHired + starvingBuffer) { starving[0] = true; }
    else {
        starving[0] = false;
        bushelCount[0] -= handsHired;
        handsEaten += handsHired;
    }

    if (vigneronsHired > 0) {
        if (bushelCount[0] <= vigneronsHired + starvingBuffer) { starving[6] = true; }
        else {
            starving[6] = false;
            bushelCount[0] -= vigneronsHired;
            vigneronsEaten += vigneronsHired;
        }
    }

    if (arboristsHired > 0) {
        if (bushelCount[0] <= arboristsHired + starvingBuffer) { starving[7] = true; }
        else {
            starving[7] = false;
            bushelCount[0] -= arboristsHired;
            arboristsEaten += arboristsHired;
        }
    }

    if (horticulturalistsHired > 0) {
        if (bushelCount[0] <= horticulturalistsHired + starvingBuffer) { starving[8] = true; }
        else {
            starving[8] = false;
            bushelCount[0] -= horticulturalistsHired;
            horticulturalistsEaten += horticulturalistsHired;
        }
    }

    const finalLaborForceTally = handsHired + vigneronsHired + arboristsHired + horticulturalistsHired;

    if (priority == 'Reap') {
        for (let i = 0; i < (finalLaborForceTally); i++) {
            let taskComplete = false;
            taskComplete = PlotHarvest(true);
            if (!taskComplete) { taskComplete = PlotWater(true); }
            if (!taskComplete) { taskComplete = PlotPlant(true); }
            if (!taskComplete) { PlotTill(true); }
        }
    }
    else if (priority == 'Sow') {
        for (let i = 0; i < (finalLaborForceTally); i++) {
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
        manweeksLost += finalLaborForceTally;
    }
}



function FellTrees() {
    const loggedAmount = FindWholeRandom(logsMin, logsMax) * loggersHired;
    logsCount += loggedAmount;
    forestProducedCount[0] += loggedAmount;

    if (bushelCount[0] <= loggersHired + starvingBuffer) { starving[1] = true; }
    else {
        starving[1] = false;
        bushelCount[0] -= loggersHired;
        loggersEaten += loggersHired;
    }
}



function SawLogs() {
    const processedAmount = sawyersHired * logsSawnPerWeek;
    const producedAmount = processedAmount * boardsPerLog;
    logsCount -= processedAmount;
    forestSpentCount[0] += processedAmount;
    boardsCount += producedAmount;
    forestProducedCount[1] += producedAmount;

    if (bushelCount[0] <= sawyersHired + starvingBuffer) { starving[2] = true; }
    else {
        starving[2] = false;
        bushelCount[0] -= sawyersHired;
        sawyersEaten += sawyersHired;
    }
}



function QuarryStone() {
    const producedAmount = masonsHired * FindWholeRandom(stoneMin, stoneMax);
    stoneCount += producedAmount;
    mountainProducedCount[0] += producedAmount;

    if (bushelCount[0] <= masonsHired + starvingBuffer) { starving[3] = true; }
    else {
        starving[3] = false;
        bushelCount[0] -= masonsHired;
        masonsEaten += masonsHired;
    }
}



function MineCopper() {
    const producedAmount = minersHired * FindWholeRandom(oreCopperMin, oreCopperMax);
    oreCopperCount += producedAmount;
    mountainProducedCount[1] += producedAmount;

    if (bushelCount[0] <= minersHired + starvingBuffer) { starving[4] = true; }
    else {
        starving[4] = false;
        bushelCount[0] -= minersHired;
        minersEaten += minersHired;
    }
}



function SmeltCopper() {
    const producedAmount = smeltersHired * ingotsCopperYieldPerTurn;
    const processedAmount = producedAmount * ingotsOreCostPerIngot;
    ingotsCopperCount += producedAmount;
    mountainProducedCount[2] += producedAmount;
    oreCopperCount -= processedAmount;
    mountainSpentCount[1] += processedAmount;

    if (bushelCount[0] <= smeltersHired + starvingBuffer) { starving[5] = true; }
    else {
        starving[5] = false;
        bushelCount[0] -= smeltersHired;
        smeltersEaten += smeltersHired;
    }
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
    asCount += rentPrice * residentsCount;
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