// GAME TURN ***************************************************************************
// *************************************************************************************

function GameTurn() {
    gameTurn += 1;
    week += 1;
    if (week == 53) {
        week = 1;
        year += 1;
    }

    let cell = [-1, -1];
    for (let i = 0; i < farmSize[1]; i++) {
        cell[0] += 1;
        cell[1] = -1;
        for (let i = 0; i < farmSize[0]; i++) {
            cell[1] += 1;
            AdvanceTime(cell);
        }
    }

    if (week == 41) { FruitOlives(); }
    if (week == 25 || week == 28 || week == 31) { FruitDates(); }
    if (week == 19) { FruitFigs(); }
    if (week == 44) { FruitPoms(); }
    if (week == 47) { FruitGrapes(); }

    if (handsHired > 0) { FieldhandWork(); }

    if (player.canLog) { FellTrees(); }
    if (player.canSaw) { SawLogs(); }
    if (player.seesMountain) {
        QuarryStone();
        if (player.canMine) { MineCopper(); }
        if (player.canSmelt) { SmeltCopper(); }
    }

    if (residentsCount < residentsMax) { Migration(); }
    if (residentsCount > 0) { ChargeRent(); }
    if (week % 4 == 0) {
        SetMarketPrice();
        if (beadsSpawn) { MakeBeads(); }
        if (trophiesSpawn) { HostGladiatorGames(); }
    }
    if (horsesSpawn) { GrowHorses(); }
    if (scrollsSpawn) { ScribeWisdom(); }
    if (ratsSpawn) { BreedRats(); }

    UpdateDisplay();
}



function AdvanceTime(cell) {
    if (arrayFarmPlots[cell[0]][cell[1]] == 3 || arrayFarmPlots[cell[0]][cell[1]] == 4 || arrayFarmPlots[cell[0]][cell[1]] == 5 || arrayFarmPlots[cell[0]][cell[1]] == 6 || arrayFarmPlots[cell[0]][cell[1]] == 7 || arrayFarmPlots[cell[0]][cell[1]] == 8 || arrayFarmPlots[cell[0]][cell[1]] == 9 || arrayFarmPlots[cell[0]][cell[1]] == 10 || arrayFarmPlots[cell[0]][cell[1]] == 11 || arrayFarmPlots[cell[0]][cell[1]] == 12 || arrayFarmPlots[cell[0]][cell[1]] == 13) {
        arrayFarmPlots[cell[0]][cell[1]] += 1;
    }
}



function FruitOlives() {
    if (olivePlantDate[1] != 0 && year >= (olivePlantDate[1] + 8)) {
        if (year == (olivePlantDate[1] + 8)) {
            if (story) { alert(displayStoryOlives); }
            player.canBarter = true;
        }
        for (let i = 0; i < arrayOlivar.length; i++) { arrayOlivar[i] = 1; }
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

    if (priority == 'Reap') {
        for (let i = 0; i < handsHired; i++) {
            let taskComplete = false;
            taskComplete = PlotHarvest(true);
            if (!taskComplete) { taskComplete = PlotWater(true); }
            if (!taskComplete) { taskComplete = PlotPlant(true); }
            if (!taskComplete) { PlotTill(true); }
        }
    }
    else if (priority == 'Sow') {
        for (let i = 0; i < handsHired; i++) {
            let taskComplete = false;
            taskComplete = PlotTill(true);
            if (!taskComplete) { taskComplete = PlotPlant(true); }
            if (!taskComplete) { taskComplete = PlotWater(true); }
            if (!taskComplete) { PlotHarvest(true); }
        }
    }
    else { console.log('🍕 cowabunga, dude 🤙'); } // (truly, Turtle Power knows no limit 🥋🐢🗡️)
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

    mineTimer++;

    if (bushelCount[0] <= masonsHired + starvingBuffer) { starving[3] = true; }
    else {
        starving[3] = false;
        bushelCount[0] -= masonsHired;
        masonsEaten += masonsHired;
    }
}



function MineCopper() {
    //if (mineTimer > mineDiscoveryTime) {
    //if (player.canMine) {}
    //}

    if (bushelCount[0] <= minersHired + starvingBuffer) { starving[4] = true; }
    else {
        starving[4] = false;
        bushelCount[0] -= minersHired;
        minersEaten += minersHired;
    }
}



function SmeltCopper() {
    //smelt that shit bro

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
}



// End of Document  