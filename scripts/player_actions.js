// PLAYER INPUT ************************************************************************************
// *************************************************************************************************

buttonSystemMessageDismiss.addEventListener('click', function () { DismissSystemMessage(); });
buttonForewordDismiss.addEventListener('click', function () { DismissForeword(); });
buttonForewordEnglish.addEventListener('click', function () { Translate('English'); });
buttonForewordSpanish.addEventListener('click', function () { Translate('Spanish'); });
buttonGameEventDismiss.addEventListener('click', function () { DismissGameEvent(); });
buttonTill.addEventListener('click', function () { PlotTill(); });
buttonPlant.addEventListener('click', function () { PlotPlant(); });
buttonWater.addEventListener('click', function () { PlotWater(); });
buttonHarvest.addEventListener('click', function () { PlotHarvest(); });
buttonBuyLand.addEventListener('click', function () { BuyLand(); });
buttonBuyForest.addEventListener('click', function () { BuyForest(); });
buttonBuyMountain.addEventListener('click', function () { BuyMountain(); });
buttonForest.addEventListener('click', function () { ForestEvents(); });
buttonHire.addEventListener('click', function () { HireHand(); });
buttonAudit.addEventListener('click', function () { HireAccountant(); });
buttonPriority.addEventListener('click', function (e) { TogglePriority(e); });
buttonBarterOlive.addEventListener('click', function () { BarterFruit(2); });
buttonBarterDate.addEventListener('click', function () { BarterFruit(3); });
buttonBarterFig.addEventListener('click', function () { BarterFruit(4); });
buttonBarterPom.addEventListener('click', function () { BarterFruit(5); });
buttonBarterGrape.addEventListener('click', function () { BarterFruit(6); });
buttonSellGrain.addEventListener('click', function () { SellGrain(); });
buttonFound.addEventListener('click', function () { Found(); });
buttonBuild.addEventListener('click', function () { Build(); });
buttonWin.addEventListener('click', function () { Win(); });
buttonEnglish.addEventListener('click', function () { Translate('English'); });
buttonSpanish.addEventListener('click', function () { Translate('Spanish'); });
buttonQ.addEventListener('click', function () { Help(); });
buttonI.addEventListener('click', function () { Info(); });
buttonCC0.addEventListener('click', function () { Legal(); });



document.body.onkeyup = function (e) {
    if (e.key == 'G') {
        god = !god;
        if (god) { SystemMessage('I Am Soy'); }
        else { SystemMessage('I Ain’t No Soy'); }
    }
    if (e.key == ' ' && (player.seesForeword && !player.seesSystemMessage)) { DismissForeword(); }
    if (e.code == 'KeyD' && player.canDelegate) { TogglePriority(e); }
    if (e.key == 'e') { Translate('English'); }
    if (e.key == 'r') { Translate('Spanish'); }
    if (e.key == '1' && player.canTill) { PlotTill(); }
    if (e.key == '2' && player.canPlant) { PlotPlant(); }
    if (e.key == '3' && player.canWater) { PlotWater(); }
    if (e.key == '4' && player.canHarvest) { PlotHarvest(); }
    if (e.key == '5') {
        if (player.canBuyForest) { BuyForest(); }
        else if (farmStage == 11 && !player.canLog) { ForestEvents(); }
        else if (farmStage == 11 && !player.canSaw) { ForestEvents(); }
        else if (player.canBuyMountain) { BuyMountain(); }
        else if (player.canBuyLand) { BuyLand(); }
        else if (player.canFound) { Found(); }
        else if (player.canBuild) { Build(); }
    }
    if (e.key == '6' && player.canHire) {
        if (!player.seesReport) { HireAccountant(); }
        else { HireHand(); }
    }
    if (e.key == '7') {
        if (bushelCount[2] > 1) { BarterFruit(2); }
        else if (bushelCount[3] > 1) { BarterFruit(3); }
        else if (bushelCount[4] > 1) { BarterFruit(4); }
        else if (bushelCount[5] > 1) { BarterFruit(5); }
        else if (bushelCount[6] > 1) { BarterFruit(6); }
    }
    if (e.key == '8' && player.canSell) { SellGrain(); }
    if (e.key == '9') { console.log('9'); }
    if (e.key == '0') { console.log('0'); }

    if (god) {
        if (e.code == 'KeyW') {
            if (e.shiftKey) { handsHired += 1; }
            else if (e.altKey) { handsHired -= 1; }
            else {
                if (handsHired != 1000) { handsHired = 1000; }
                else { handsHired = 0; }
            }
        }

        if (e.code == 'KeyY') { setValues(1000000000); }
        if (e.code == 'KeyU') { setValues(100000000); }
        if (e.code == 'KeyI') { setValues(10000000); }
        if (e.code == 'KeyO') { setValues(1000000); }
        if (e.code == 'KeyP') { setValues(100000); }
        if (e.code == 'KeyH') { setValues(10000); }
        if (e.code == 'KeyJ') { setValues(1000); }
        if (e.code == 'KeyK') { setValues(100); }
        if (e.code == 'KeyL') { setValues(10); }
        if (e.code == 'KeyM') { setValues(1); }

        function setValues(amount) {
            if (e.shiftKey) {
                bushelCount[0] += amount;
                bushelCount[1] += amount;
                bushelCount[2] += amount;
                bushelCount[3] += amount;
                bushelCount[4] += amount;
                bushelCount[5] += amount;
                bushelCount[6] += amount;
                logsCount += amount;
                boardsCount += amount;
                stoneCount += amount;
                oreCopperCount += amount;
                ingotsCopperCount += amount;
                asCount += amount;
                horsesCount += amount;
                beadsCount += amount;
                trophiesCount += amount;
                scrollsCount += amount;
            }
            else if (e.altKey) {
                bushelCount[0] -= amount;
                bushelCount[1] -= amount;
                bushelCount[2] -= amount;
                bushelCount[3] -= amount;
                bushelCount[4] -= amount;
                bushelCount[5] -= amount;
                bushelCount[6] -= amount;
                logsCount -= amount;
                boardsCount -= amount;
                stoneCount -= amount;
                oreCopperCount -= amount;
                ingotsCopperCount -= amount;
                asCount -= amount;
                horsesCount -= amount;
                beadsCount -= amount;
                trophiesCount -= amount;
                scrollsCount -= amount;
            }
            else {
                bushelCount[0] = amount;
                bushelCount[1] = amount;
                bushelCount[2] = amount;
                bushelCount[3] = amount;
                bushelCount[4] = amount;
                bushelCount[5] = amount;
                bushelCount[6] = amount;
                logsCount = amount;
                boardsCount = amount;
                stoneCount = amount;
                oreCopperCount = amount;
                ingotsCopperCount = amount;
                asCount = amount;
                horsesCount = amount;
                beadsCount = amount;
                trophiesCount = amount;
                scrollsCount = amount;
            }
        }

        if (e.key == 's') { story = false; }
        if (e.key == 'S') { story = true; }

        if (e.key == 'q') {
            clearTimeout(timeoutHourglass);
            gameSpeed = 'paused';
            AnimateHourglass(gameSpeed);
        }

        if (e.code == 'KeyT') {
            clearTimeout(timeoutHourglass);
            if (gameSpeed == 'standard') { gameSpeed = 'fast'; }
            else if (gameSpeed == 'fast') { gameSpeed = 'high'; }
            else { gameSpeed = 'standard'; }

            if (e.shiftKey) { gameSpeed = 'ultra'; }

            AnimateHourglass(gameSpeed);
        }
    }
    UpdateDisplay();
}



// PLAYER ACTIONS **********************************************************************************
// *************************************************************************************************

function DismissSystemMessage() {
    player.seesSystemMessage = false;
    UpdateDisplay();
}



function DismissForeword() {
    player.seesForeword = false;
    player.canTill = true;
    AnimateHourglass(gameSpeed);
    UpdateDisplay();
}



function DismissGameEvent() {
    player.seesGameEvent = false;
    UpdateDisplay();
}



function PlotTill(robota = false) {
    if (farmStage == 0 && !player.canPlant) {
        player.canPlant = true;
        player.seesInventory = true;
    }

    let taskComplete = false;

    let plotSearchResult = FindPlot(0, 'all');
    if (plotSearchResult.row != -1) {
        arrayFarmPlots[plotSearchResult.row][plotSearchResult.col] = 1;
        taskComplete = true;
        if (!robota) { UpdateDisplay(); }
    }

    return taskComplete;
}



function PlotPlant(robota = false) {
    if (farmStage == 0 && !player.canWater) { player.canWater = true; }

    let taskComplete = false;
    let foundRow = '';
    let foundCol = '';

    if (bushelCount[0] >= plantCost) {
        let plotSearchResult = FindPlot(1, 'wheat');
        if (plotSearchResult.row != -1) {
            taskComplete = true;
            foundRow = plotSearchResult.row;
            foundCol = plotSearchResult.col;
            bushelCount[0] -= plantCost;
            seededCount[0] += plantCost;
        }
    }

    if (bushelCount[1] >= plantCost && !taskComplete) {
        let plotSearchResult = FindPlot(1, 'barley');
        if (plotSearchResult.row != -1) {
            taskComplete = true;
            foundRow = plotSearchResult.row;
            foundCol = plotSearchResult.col;
            bushelCount[1] -= plantCost;
            seededCount[1] += plantCost;
        }
    }

    if (taskComplete) {
        arrayFarmPlots[foundRow][foundCol] = 2;
        if (!robota) { UpdateDisplay(); }
    }

    return taskComplete;
}



function PlotWater(robota = false) {
    if (farmStage == 0 && !player.canHarvest) { player.canHarvest = true; }

    let taskComplete = false;

    let plotSearchResult = FindPlot(2, 'all');
    if (plotSearchResult.row != -1) {
        arrayFarmPlots[plotSearchResult.row][plotSearchResult.col] = 3;
        taskComplete = true;
        if (!robota) { UpdateDisplay(); }
    }

    return taskComplete;
}



function PlotHarvest(robota = false) {
    let taskComplete = false;

    if (!taskComplete && arrayVineyard.includes(1)) {
        arrayVineyard[arrayVineyard.findIndex((element) => element == 1)] = 0;

        const bounty = FindWholeRandom(grapesMin, grapesMax);
        bushelCount[6] += bounty;
        harvestedCount[6] += bounty;
        farmedCount[6] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayPomOrchard.includes(1)) {
        arrayPomOrchard[arrayPomOrchard.findIndex((element) => element == 1)] = 0;

        const bounty = FindWholeRandom(pomegranateMin, pomegranateMax);
        bushelCount[5] += bounty;
        harvestedCount[5] += bounty;
        farmedCount[5] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayOlivar.includes(1)) {
        arrayOlivar[arrayOlivar.findIndex((element) => element == 1)] = 0;

        const bounty = FindWholeRandom(olivesMin, olivesMax);
        bushelCount[2] += bounty;
        harvestedCount[2] += bounty;
        farmedCount[2] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayDatePalmGrove.includes(1)) {
        arrayDatePalmGrove[arrayDatePalmGrove.findIndex((element) => element == 1)] = 0;

        const bounty = FindWholeRandom(datesMin, datesMax);
        bushelCount[3] += bounty;
        harvestedCount[3] += bounty;
        farmedCount[3] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayFigOrchard.includes(1)) {
        arrayFigOrchard[arrayFigOrchard.findIndex((element) => element == 1)] = 0;

        const bounty = FindWholeRandom(figsMin, figsMax);
        bushelCount[4] += bounty;
        harvestedCount[4] += bounty;
        farmedCount[4] += 1;
        taskComplete = true;
    }

    if (!taskComplete) {
        let plotSearchResult = FindPlot(14, 'all');
        if (plotSearchResult.row != -1) {

            arrayFarmPlots[plotSearchResult.row][plotSearchResult.col] = 0;
            const bounty = FindWholeRandom(yieldMin, yieldMax);
            if (plotSearchResult.row > 5) {
                bushelCount[1] += bounty;
                harvestedCount[1] += bounty;
                farmedCount[1] += 1;
            }
            else {
                bushelCount[0] += bounty;
                harvestedCount[0] += bounty;
                farmedCount[0] += 1;
            }
            taskComplete = true;
        }
    }

    if (!robota && taskComplete) {
        if (farmStage == 0) { player.canBuyLand = true; }
        UpdateDisplay();
    }
    return taskComplete;
}



function BuyLand() {
    if (farmStage == 0 && bushelCount[0] > priceStage1) {
        if (story) { GameEvent(displayStoryFarm0, 'farm_stage_0'); }
        farmStage++;
        bushelCount[0] -= priceStage1;
        spentCount[0] += priceStage1;

        farmSize[0] = 2;
    }
    else if (farmStage == 1 && bushelCount[0] > priceStage2) {
        if (story) { GameEvent(displayStoryFarm1, 'farm_stage_1'); }
        farmStage++;
        bushelCount[0] -= priceStage2;
        spentCount[0] += priceStage2;

        farmSize[0] = 4;
    }
    else if (farmStage == 2 && bushelCount[0] > priceStage3) {
        if (story) {
            GetNewPlayerName();
            GameEvent(displayStoryFarm2, 'farm_stage_2');
        }
        farmStage++;
        bushelCount[0] -= priceStage3;
        spentCount[0] += priceStage3;

        farmSize[1] = 2;
        player.canHire = true;
        player.canAudit = true;
        player.seesStaff = true;
    }
    else if (farmStage == 3 && bushelCount[0] > priceStage4) {
        if (story) { GameEvent(displayStoryFarm3); }
        farmStage++;
        bushelCount[0] -= priceStage4;
        spentCount[0] += priceStage4;

        farmSize[0] = 7;
        farmSize[1] = 3;
        handsAvailable += 2;
    }
    else if (farmStage == 4 && bushelCount[0] > priceStage5) {
        if (story) { GameEvent(displayStoryFarm4, 'farm_stage_4'); }
        farmStage++;
        bushelCount[0] -= priceStage5;
        spentCount[0] += priceStage5;

        handsAvailable += 2;
    }
    else if (farmStage == 5 && bushelCount[0] > priceStage6) {
        if (story) { GameEvent(displayStoryFarm5); }
        farmStage++;
        bushelCount[0] -= priceStage6;
        spentCount[0] += priceStage6;
    }
    else if (farmStage == 6 && bushelCount[0] > priceStage7) {
        if (story) { GameEvent(displayStoryFarm6); }
        farmStage++;
        bushelCount[0] -= priceStage7;
        spentCount[0] += priceStage7;
    }
    else if (farmStage == 7 && bushelCount[0] > priceStage8) {
        if (story) { GameEvent(displayStoryFarm7); }
        farmStage++;
        bushelCount[0] -= priceStage8;
        spentCount[0] += priceStage8;
    }
    else if (farmStage == 8 && bushelCount[0] > priceStage9) {
        if (story) { GameEvent(displayStoryFarm8); }
        farmStage++;
        bushelCount[0] -= priceStage9;
        spentCount[0] += priceStage9;
    }
    else if (farmStage == 9 && bushelCount[0] > priceStage10) {
        if (story) { GameEvent(displayStoryFarm9); }
        farmStage++;
        bushelCount[0] -= priceStage10;
        spentCount[0] += priceStage10;

        olivePlantDate[0] = week;
        olivePlantDate[1] = year;
        player.seesOlives = true;
    }
    else if (farmStage == 10 && bushelCount[0] > priceStage11) {
        if (story) { GameEvent(displayStoryFarm10); }
        farmStage++;
        bushelCount[0] -= priceStage11;
        spentCount[0] += priceStage11;

        farmSize[0] = 14;
        handsAvailable += 4;
        player.canBuyForest = true;

        arrayFarmPlots[0][7] = arrayFarmPlots[1][0];
        arrayFarmPlots[0][8] = arrayFarmPlots[1][1];
        arrayFarmPlots[0][9] = arrayFarmPlots[1][2];
        arrayFarmPlots[0][10] = arrayFarmPlots[1][3];
        arrayFarmPlots[0][11] = arrayFarmPlots[1][4];
        arrayFarmPlots[0][12] = arrayFarmPlots[1][5];
        arrayFarmPlots[0][13] = arrayFarmPlots[1][6];

        arrayFarmPlots[1][0] = arrayFarmPlots[2][0];
        arrayFarmPlots[1][1] = arrayFarmPlots[2][1];
        arrayFarmPlots[1][2] = arrayFarmPlots[2][2];
        arrayFarmPlots[1][3] = arrayFarmPlots[2][3];
        arrayFarmPlots[1][4] = arrayFarmPlots[2][4];
        arrayFarmPlots[1][5] = arrayFarmPlots[2][5];
        arrayFarmPlots[1][6] = arrayFarmPlots[2][6];

        arrayFarmPlots[2][0] = 0;
        arrayFarmPlots[2][1] = 0;
        arrayFarmPlots[2][2] = 0;
        arrayFarmPlots[2][3] = 0;
        arrayFarmPlots[2][4] = 0;
        arrayFarmPlots[2][5] = 0;
        arrayFarmPlots[2][6] = 0;
    }
    else if (farmStage == 11 && bushelCount[0] > priceStage12[0] && boardsCount >= priceStage12[1]) {
        if (story) { GameEvent(displayStoryFarm11); }
        farmStage++;
        bushelCount[0] -= priceStage12[0];
        spentCount[0] += priceStage12[0];
        boardsCount -= priceStage12[1];
        forestSpentCount[1] += priceStage12[1];

        handsAvailable += 2;
    }
    else if (farmStage == 12 && bushelCount[0] > priceStage13) {
        if (story) { GameEvent(displayStoryFarm12); }
        farmStage++;
        bushelCount[0] -= priceStage13;
        spentCount[0] += priceStage13;

        farmSize[1] = 6;
        handsAvailable += 8;
    }
    else if (farmStage == 13 && bushelCount[0] > priceStage14[0] && boardsCount >= priceStage14[1]) {
        if (story) { GameEvent(displayStoryFarm13); }
        farmStage++;
        bushelCount[0] -= priceStage14[0];
        spentCount[0] += priceStage14[0];
        boardsCount -= priceStage14[1];
        forestSpentCount[1] += priceStage14[1];

        handsAvailable += 4;
        player.canBuyMountain = true;
    }
    else if (farmStage == 14 && bushelCount[0] > priceStage15[0] && stoneCount >= priceStage15[1]) {
        if (story) { GameEvent(displayStoryFarm14); }
        farmStage++;
        bushelCount[0] -= priceStage15[0];
        spentCount[0] += priceStage15[0];
        stoneCount -= priceStage15[1];
        mountainSpentCount[0] += priceStage15[1];

        handsAvailable += 2;
    }
    else if (farmStage == 15 && bushelCount[0] > priceStage16[0] && stoneCount >= priceStage16[1]) {
        if (story) { GameEvent(displayStoryFarm15); }
        farmStage++;
        bushelCount[0] -= priceStage16[0];
        spentCount[0] += priceStage16[0];
        stoneCount -= priceStage16[1];
        mountainSpentCount[0] += priceStage16[1];

        handsAvailable += 2;
        yieldMin += 1;
        olivesMin += 3;
        datesMin += 6;
        figsMin += 8;
        pomegranateMin += 7;
        grapesMin += 10;
    }
    else if (farmStage == 16 && bushelCount[0] > priceStage17[0] && boardsCount >= priceStage17[1]) {
        if (story) {
            Translate(currentLanguage, false); // this repopulates the 'year' binding in the following string
            GameEvent(displayStoryFarm16);
        }
        farmStage++;
        bushelCount[0] -= priceStage17[0];
        spentCount[0] += priceStage17[0];
        boardsCount -= priceStage17[1];
        forestSpentCount[1] += priceStage17[1];

        farmSize[1] = 9;
        handsAvailable += 8;
        arrayFarmPlots[6] = [5, 6, 7, 6, 5, 4, 5, 5, 2, 4, 2, 1, 0, 1,];
        arrayFarmPlots[7] = [6, 5, 6, 5, 6, 5, 5, 4, 4, 1, 1, 0, 1, 0,];
        arrayFarmPlots[8] = [5, 4, 5, 4, 4, 4, 2, 2, 1, 0, 0, 1, 0, 1,];
    }
    else if (farmStage == 17 && bushelCount[0] > priceStage18[0] && bushelCount[1] > priceStage18[1]) {
        if (story) { GameEvent(displayStoryFarm17); }
        farmStage++;
        bushelCount[0] -= priceStage18[0];
        bushelCount[1] -= priceStage18[1];
        spentCount[0] += priceStage18[0];
        spentCount[1] += priceStage18[1];

        arrayOlivar.push(0, 0, 0, 0, 0, 0,);
        vigneronsHired = 5;
        buttonBarterOlive.classList.add('noMargin');
        player.canBuyLand = false;
    }
    UpdateDisplay();
}



function BuyForest() {
    if (bushelCount[0] > priceForest) {
        if (story) { GameEvent(displayStoryForest); }
        bushelCount[0] -= priceForest;
        spentCount[0] += priceForest;
        player.canBuyForest = false;
        player.seesForest = true;
        UpdateDisplay();
    }
}



function BuyMountain() {
    if (bushelCount[0] > priceQuarry) {
        if (story) { GameEvent(displayStoryQuarry); }
        bushelCount[0] -= priceQuarry;
        spentCount[0] += priceQuarry;
        player.canBuyMountain = false;
        player.seesMountain = true;
        UpdateDisplay();
    }
}



function ForestEvents() {
    if (!player.canLog && bushelCount[0] > priceLoggingCamp) {
        if (story) { GameEvent(displayStoryLoggingCamp); }
        bushelCount[0] -= priceLoggingCamp;
        spentCount[0] += priceLoggingCamp;

        player.canLog = true;
    }
    else if (!player.canSaw && bushelCount[0] > priceSawmill) {
        if (story) { GameEvent(displayStorySawmill); }
        bushelCount[0] -= priceSawmill;
        spentCount[0] += priceSawmill;

        player.canSaw = true;
    }
    UpdateDisplay();
}



function HireHand() {
    if (handsAvailable > 0) {
        player.canDelegate = true;
        handsAvailable -= 1;
        handsHired += 1;
        if (story) {
            if (handsHired == 1) { GameEvent(displayStoryHands0); }
            else if (handsHired == 2) { GameEvent(displayStoryHands1); }
            else if (handsHired == 3) { GameEvent(displayStoryHands2); }
            else if (handsHired == 4) { GameEvent(displayStoryHands3); }
            else if (handsHired == 5) { GameEvent(displayStoryHands4); }
            else if (handsHired == 6) { GameEvent(displayStoryHands5); }
            else if (handsHired == 7) { GameEvent(displayStoryHands6); }
            else if (handsHired == 8) { GameEvent(displayStoryHands7); }
            else if (handsHired == 9) { GameEvent(displayStoryHands8); }
            else if (handsHired == 10) { GameEvent(displayStoryHands9); }
            else if (handsHired == 11) { GameEvent(displayStoryHands10); }
            else if (handsHired == 12) { GameEvent(displayStoryHands11); }
            else if (handsHired == 13) { GameEvent(displayStoryHands12); }
            else if (handsHired == 14) { GameEvent(displayStoryHands13); }
            else if (handsHired == 15) { GameEvent(displayStoryHands14); }
            else if (handsHired == 16) { GameEvent(displayStoryHands15); }
            else if (handsHired == 17) { GameEvent(displayStoryHands16); }
            else if (handsHired == 18) { GameEvent(displayStoryHands17); }
            else if (handsHired == 19) { GameEvent(displayStoryHands18); }
            else if (handsHired == 20) { GameEvent(displayStoryHands19); }
            else if (handsHired == 21) { GameEvent(displayStoryHands20); }
            else if (handsHired == 22) { GameEvent(displayStoryHands21); }
            else if (handsHired == 23) { GameEvent(displayStoryHands22); }
            else if (handsHired == 24) { GameEvent(displayStoryHands23); }
            else if (handsHired == 25) { GameEvent(displayStoryHands24); }
            else if (handsHired == 26) { GameEvent(displayStoryHands25); }
            else if (handsHired == 27) { GameEvent(displayStoryHands26); }
            else if (handsHired == 28) { GameEvent(displayStoryHands27); }
            else if (handsHired == 29) { GameEvent(displayStoryHands28); }
            else if (handsHired == 30) { GameEvent(displayStoryHands29); }
            else if (handsHired == 31) { GameEvent(displayStoryHands30); }
            else if (handsHired == 32) { GameEvent(displayStoryHands31); }
            else if (handsHired == 33) { GameEvent(displayStoryHands32); }
            else if (handsHired == 34) { GameEvent(displayStoryHands33); }
            else if (handsHired == 35) { GameEvent(displayStoryHands34); }
            else if (handsHired == 36) { GameEvent(displayStoryHands35); }
        }
        if (handsHired == handsMax) {
            player.canHire = false;
            player.canFound = true;
        }
        UpdateDisplay();
    }
}



function HireAccountant() {
    if (bushelCount[0] > priceAccountant) {
        if (story) { GameEvent(displayStoryAccountant, 'accountant'); }
        bushelCount[0] -= priceAccountant;
        spentCount[0] += priceAccountant;
        player.canAudit = false;
        player.seesReport = true;
        UpdateDisplay();
    }
}



function TogglePriority(e) {
    (priority != 'Sow') ? priority = 'Sow' : priority = 'Reap';
    if (e.shiftKey && god) { priority = '🤪'; }
    UpdateDisplay();
}



function BarterFruit(crop) {
    let barterAmount = bushelCount[crop];
    if (bushelCount[crop] > barterMaxBulkCount) { barterAmount = barterMaxBulkCount; }
    bushelCount[crop] -= barterAmount;
    soldCount[crop] += barterAmount;
    bushelCount[0] += barterAmount * barterExchangeRate[crop];
    UpdateDisplay();
}



function Found() {
    if (bushelCount[0] > priceVillage) {
        bushelCount[0] -= priceVillage;
        spentCount[0] += priceVillage;
        player.canFound = false;
        player.canBuild = true;
        player.seesVillage = true;

        //put the following three lines into the UI UpdateVisibilites, obviously
        //seesVillage now displays divViewVillage, this stuff is all contents of that and can be appropriately cleaned up now
        divVillageName.style.display = 'block';
        divVillage.style.display = 'inline-block';
        divVillageStatistics.style.display = 'block';
        /////////////////////////////////////////////////

        if (story) { GameEvent(displayStoryFound); }
        UpdateDisplay();
    }
}



function SellGrain() {
    if (bushelCount[0] > bushelBulkCount) {
        bushelCount[0] -= bushelBulkCount;
        soldCount[0] += bushelBulkCount;
        asCount += currentBushelPrice;
        UpdateDisplay();
    }
}



function Build() {
    if (villageStage == 0 && bushelCount[0] > priceBuild0) {
        if (story) { GameEvent(displayStoryVillage0); }
        villageStage += 1;
        bushelCount[0] -= priceBuild0;
        spentCount[0] += priceBuild0;
    }
    else if (villageStage == 1 && bushelCount[0] > priceBuild1) {
        if (story) { GameEvent(displayStoryVillage1); }
        villageStage += 1;
        bushelCount[0] -= priceBuild1;
        spentCount[0] += priceBuild1;
    }
    else if (villageStage == 2 && bushelCount[0] > priceBuild2) {
        if (story) { GameEvent(displayStoryVillage2); }
        villageStage += 1;
        bushelCount[0] -= priceBuild2;
        spentCount[0] += priceBuild2;

        estDate[0] = week;
        estDate[1] = year + currentYearJewish;
    }
    else if (villageStage == 3 && bushelCount[0] > priceBuild3) {
        if (story) { GameEvent(displayStoryVillage3); }
        villageStage += 1;
        bushelCount[0] -= priceBuild3;
        spentCount[0] += priceBuild3;

        residentsMax += 14;
    }
    else if (villageStage == 4 && asCount >= priceBuild4) {
        if (story) { GameEvent(displayStoryVillage4); }
        villageStage += 1;
        asCount -= priceBuild4;

        residentsMax += 14;
        rentPrice += 2;
    }
    else if (villageStage == 5 && asCount >= priceBuild5[0] && bushelCount[0] > priceBuild5[1]) {
        if (story) { GameEvent(displayStoryVillage5); }
        villageStage += 1;
        asCount -= priceBuild5[0];
        bushelCount[0] -= priceBuild5[1];
        spentCount[0] += priceBuild5[1];

        rentPrice += 4;
        player.canSell = true;
    }
    else if (villageStage == 6 && asCount >= priceBuild6) {
        if (story) { GameEvent(displayStoryVillage6); }
        villageStage += 1;
        asCount -= priceBuild6;

        residentsMax += 14;
        rentPrice += 1;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 7 && asCount >= priceBuild7) {
        if (story) { GameEvent(displayStoryVillage7); }
        villageStage += 1;
        asCount -= priceBuild7;

        residentsMax += 42;
        rentPrice += 3;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 8 && asCount >= priceBuild8[0] && bushelCount[0] > priceBuild8[1]) {
        if (story) { GameEvent(displayStoryVillage8); }
        villageStage += 1;
        asCount -= priceBuild8[0];
        bushelCount[0] -= priceBuild8[1];
        spentCount[0] += priceBuild8[1];

        rentPrice += 6;
        actualBushelPrice -= 100;
        SetMarketPrice();
        yieldMax += 4;
        olivesMax += 6;
        datesMax += 11;
        figsMax += 14;
        pomegranateMax += 12;
        grapesMax += 18;
    }
    else if (villageStage == 9 && asCount >= priceBuild9) {
        if (story) { GameEvent(displayStoryVillage9); }
        villageStage += 1;
        asCount -= priceBuild9;

        residentsMax += 42;
        rentPrice += 5;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 10 && asCount >= priceBuild10[0] && bushelCount[0] > priceBuild10[1]) {
        if (story) { GameEvent(displayStoryVillage10); }
        villageStage += 1;
        asCount -= priceBuild10[0];
        bushelCount[0] -= priceBuild10[1];
        spentCount[0] += priceBuild10[1];

        horsesSpawn = true;
        rentPrice += 2;
        actualBushelPrice += 100;
        SetMarketPrice();
    }
    else if (villageStage == 11 && asCount >= priceBuild11[0] && bushelCount[0] > priceBuild11[1] && horsesCount >= priceBuild11[2]) {
        if (story) { GameEvent(displayStoryVillage11); }
        villageStage += 1;
        asCount -= priceBuild11[0];
        bushelCount[0] -= priceBuild11[1];
        spentCount[0] += priceBuild11[1];
        horsesCount -= priceBuild11[2];

        beadsSpawn = true;
        rentPrice += 8;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 12 && asCount >= priceBuild12[0] && horsesCount >= priceBuild12[1]) {
        if (story) { GameEvent(displayStoryVillage12); }
        villageStage += 1;
        asCount -= priceBuild12[0];
        horsesCount -= priceBuild12[1];

        rentPrice += 12;
        actualBushelPrice += 100;
        SetMarketPrice();
        trophiesSpawn = true;
    }
    else if (villageStage == 13 && asCount >= priceBuild13) {
        if (story) { GameEvent(displayStoryVillage13); }
        villageStage += 1;
        asCount -= priceBuild13;

        rentPrice += 4;
        actualBushelPrice -= 200;
        SetMarketPrice();
        displayTreasury = '🏛️';
    }
    else if (villageStage == 14 && asCount >= priceBuild14[0] && beadsCount >= priceBuild14[1]) {
        if (story) { GameEvent(displayStoryVillage14); }
        villageStage += 1;
        asCount -= priceBuild14[0];
        beadsCount -= priceBuild14[1];

        scrollsSpawn = true;
    }
    else if (villageStage == 15 && asCount >= priceBuild15) {
        if (story) { GameEvent(displayStoryVillage15); }
        villageStage += 1;
        asCount -= priceBuild15;

        rentPrice += 8;
        actualBushelPrice -= 50;
        SetMarketPrice();
        ratsSpawn = true;
    }
    else if (villageStage == 16 && asCount >= priceBuild16) {
        if (story) { GameEvent(displayStoryVillage16); }
        villageStage += 1;
        asCount -= priceBuild16;

        rentPrice += 16;
        actualBushelPrice -= 50;
        SetMarketPrice();
        cityWalls = true;
    }
    else if (villageStage == 17 && asCount >= priceBuild17[0] && beadsCount >= priceBuild17[1] && scrollsCount >= priceBuild17[2]) {
        if (story) { GameEvent(displayStoryVillage17); }
        villageStage += 1;
        asCount -= priceBuild17[0];
        beadsCount -= priceBuild17[1];
        scrollsCount -= priceBuild17[2];

        rentPrice += 12;
        player.canBuild = false;

        buttonWin.style.display = 'inline-block';
        timeoutWinButton = setTimeout(AnimateWinButton, 111);
    }
    UpdateDisplay();
}



function Win() {
    GameEvent(displayWinMessage);
    window.open(winTarget, 'PRAEDIUM_requested_new_tab');
    saṃsāra += null; // namasté, pendejos 🖕🧘‍♂️🖕
}



function Help() {
    Info();
}



function Info() {
    SystemMessage(displayInfoFinal);
}



function Legal() {
    SystemMessage(displayLegalFinal);
    window.open(legalTarget, 'PraediumRequestedWindow');
}



// End of Document