// PLAYER INPUT ************************************************************************************
// *************************************************************************************************

buttonSystemMessageDismiss.addEventListener('click', function () { DismissSystemMessage(); });
buttonForewordEnglish.addEventListener('click', function () { BeginGame('English'); });
buttonForewordSpanish.addEventListener('click', function () { BeginGame('Spanish'); });
buttonForewordDismiss.addEventListener('click', function () { DismissForeword(); });
buttonGameEventDismiss.addEventListener('click', function () { DismissGameEvent(); });
buttonSubmitModCode.addEventListener('click', function () { SubmitModCode(); });
buttonModsDismiss.addEventListener('click', function () { DismissModsWindow(); });
buttonOptionsDismiss.addEventListener('click', function () { DismissOptions(); });

buttonTill.addEventListener('click', function () { PlotTill(); });
buttonPlant.addEventListener('click', function () { PlotPlant(); });
buttonWater.addEventListener('click', function () { PlotWater(); });
buttonHarvest.addEventListener('click', function () { PlotHarvest(); });

buttonBuyLand.addEventListener('click', function () { BuyLand(); });
buttonRentWarehouse.addEventListener('click', function () { RentWarehouse(); });
buttonBuyForest.addEventListener('click', function () { BuyForest(); });
buttonBuyMountain.addEventListener('click', function () { BuyMountain(); });

buttonForest.addEventListener('click', function () { ForestEvents(); });
buttonMountain.addEventListener('click', function () { MountainEvents(); });

buttonHire.addEventListener('click', function () { HireHand(); });
buttonAudit.addEventListener('click', function () { HireAccountant(); });
buttonPriority.addEventListener('click', function () { TogglePriority(); });

buttonBarterOlive.addEventListener('click', function () { BarterFruit(2); });
buttonBarterDate.addEventListener('click', function () { BarterFruit(3); });
buttonBarterFig.addEventListener('click', function () { BarterFruit(4); });
buttonBarterPom.addEventListener('click', function () { BarterFruit(5); });
buttonBarterGrape.addEventListener('click', function () { BarterFruit(6); });
buttonSellWheat.addEventListener('click', function () { SellGrain(0); });
buttonSellBarley.addEventListener('click', function () { SellGrain(1); });

buttonFound.addEventListener('click', function () { Found(); });
buttonNewFarm.addEventListener('click', function () { BuyNewFarm(); });

buttonImproveResidence.addEventListener('click', function () { ImproveResidence(); });

buttonGoToPraediumFromRes.addEventListener('click', function () { GoToPraedium(); });
buttonGoToResidence.addEventListener('click', function () { GoToResidence(); });
buttonGoToTownship.addEventListener('click', function () { GoToTownship(); });
buttonGoToPraedium.addEventListener('click', function () { GoToPraedium(); });
buttonGoToPort.addEventListener('click', function () { GoToPort(); });
buttonGoToTownshipFromPort.addEventListener('click', function () { GoToTownship(); });

buttonBuild.addEventListener('click', function () { Build(); });

buttonEstablishTradeRoute.addEventListener('click', function () { EstablishTradeRoute(); });
buttonImportTin.addEventListener('click', function () { EstablishShippingLanes(); });

buttonWin.addEventListener('click', function () { Win(); });

buttonOptions.addEventListener('click', function () { SummonOptions(); });
buttonEnglish.addEventListener('click', function () { Translate('English'); });
buttonSpanish.addEventListener('click', function () { Translate('Spanish'); });
buttonStar.addEventListener('click', function () { SummonModsWindow(); });
buttonQ.addEventListener('click', function () { Help(); });
buttonI.addEventListener('click', function () { Info(); });
buttonCC0.addEventListener('click', function () { Legal(); });



document.body.onkeyup = function (e) {
    if (e.key == '~') {
        player.isGod = !player.isGod;
        if (player.isGod) { SystemMessage('<div id="divSoyMessage">☛ I Am Soy ☚</div>And that means all bets are *off*, partner'); }
        else { SystemMessage('<div id="divSoyMessage">☞ I Ain’t No Soy ☜</div>But don’t you think for one second any bets are suddenly now back *on*, Buster Brown'); }
    }

    if (player.isGod) {
        if (e.key == 'F') {
            ZeroArray(bushelCount);
            ZeroArray(seededCount);
            ZeroArray(farmedCount);
            ZeroArray(harvestedCount);
            ZeroArray(spentCount);
            ZeroArray(soldCount);
            weeksOfHoliday = 0;
            manweeksLost = 0;
            ZeroArray(paidOutWheat);
            logsCount = 0;
            boardsCount = 0;
            ZeroArray(forestProducedCount);
            ZeroArray(forestSpentCount);
            stoneCount = 0;
            oreCopperCount = 0;
            ingotsCopperCount = 0;
            ingotsTinCount = 0;
            ingotsBronzeCount = 0;
            ZeroArray(mountainProducedCount);
            ZeroArray(mountainSpentCount);
            ZeroArray(residenceIngredientInStockCount);
            ZeroArray(residenceIngredientConsumedCount);
            ZeroArray(residenceInStockCount);
            ZeroArray(residenceProducedCount);
            ZeroArray(residenceSpentCount);
            residentsCount = 0;
            asCount = 0;
            asSpent = 0;
            rentLifetimeCollected = 0;
            taxesLifetimeCollected = 0;
            horsesCount = 0;
            horsesEaten = 0;
            beadsCount = 0;
            trophiesCount = 0;
            tourismLifetimeProfit = 0;
            scrollsCount = 0;
            militaryLifetimeCost = 0;
            pilgrimsCount = 0;
            pilgrimsLifetimeCount = 0;
            pilgrimLifetimeIncome = 0;
            relicCount = 0;
            marketLifetimeRevenue = 0;
            tributeLifetimePaid = 0;
        }

        if (e.key == '`') { CollateGameStateReport(true); }

        if (e.key == ' ' && (player.seesForeword && !player.seesSystemMessage && !player.hasBegun)) { BeginGame('English'); }
        else if (e.key == ' ' && (player.seesForeword && !player.seesSystemMessage && player.hasBegun)) { DismissForeword(); }

        if (e.key == '1' && player.canTill) { PlotTill(); }
        if (e.key == '2' && player.canPlant) { PlotPlant(); }
        if (e.key == '3' && player.canWater) { PlotWater(); }
        if (e.key == '4' && player.canHarvest) { PlotHarvest(); }

        function AdvanceGame() {
            // add mine improvements here
            if (player.canRentWarehouse) { RentWarehouse(); }
            else if (player.canBuyForest) { BuyForest(); }
            else if (farmStage == 11 && !player.canLog) { ForestEvents(); }
            else if (farmStage == 11 && !player.canSaw) { ForestEvents(); }
            else if (player.canBuyMountain) { BuyMountain(); }
            else if (player.canBuyLand) { BuyLand(); }
            else if (player.canFound) { Found(); }
            else if (player.canBuild) { Build(); }
            else { ImproveResidence(); }
        }
        if (e.key == '5') { AdvanceGame(); }

        if (e.key == '6' && player.canHire) {
            if (!player.seesReport) { HireAccountant(); }
            else { HireHand(); }
        }
        if (e.code == 'KeyW') {
            if (e.shiftKey) {
                if (handsHired != 1000) { handsHired = 1000; }
                else { handsHired = 0; }
            }
            else if (e.altKey) { handsHired -= 1; }
            else { handsHired += 1; }
        }
        if (e.key == 'd' && player.canDelegate) { TogglePriority(); }

        if (e.key == '7' && player.canBarter) {
            if (bushelCount[2] > 1) { BarterFruit(2); }
            else if (bushelCount[3] > 1) { BarterFruit(3); }
            else if (bushelCount[4] > 1) { BarterFruit(4); }
            else if (bushelCount[5] > 1) { BarterFruit(5); }
            else if (bushelCount[6] > 1) { BarterFruit(6); }
        }
        if (e.key == '8' && player.canSell) { SellGrain(0); }
        if (e.key == '9' && player.canSell) { SellGrain(1); }

        if (e.key == 'x' && player.canGoHome && player.isAt == 'Praedium') { GoToResidence(); }
        if (e.key == 'c' && (player.isAt == 'Residence' || player.isAt == 'Township')) { GoToPraedium(); }
        if (e.key == 'v' && player.seesVillage && (player.isAt == 'Praedium' || player.isAt == 'Port')) { GoToTownship(); }
        if (e.key == 'b' && player.canSell && player.isAt == 'Township') { GoToPort(); }

        if (e.key == 'G') { // 🚨🚨🚨 USE WITH CAUTION!!! ONLY WORKS AT GAME START AND IN *EXACT* SEQUENCE 🚨🚨🚨
            if (!player.canPlant) {
                StartTime();
                StartTime();
                PlotTill();
                PlotPlant();
                PlotWater();
            }
            else if (!player.canBuyLand && player.likesStory) {
                PlotHarvest();
                PlotTill();
                PlotPlant();
                PlotWater();
            }
            else if (player.likesStory) {
                PlotHarvest();
                StartTime();
                player.likesStory = false;
            }
            else if (player.canRentWarehouse) {
                setValues(1000000000);
                for (let i = 0; i < 25; i++) { AdvanceGame(); }
                HireAccountant();
                for (let i = 0; i < 36; i++) { HireHand(); }
                AdvanceGame();
                setValues(1000000000);
                PauseTime();
            }
            else if (villageStage == 0) {
                for (let i = 0; i < (18 + 14); i++) { AdvanceGame(); }
                setValues(58008);
            }
        }
        if (e.key == 'g') {
            bushelCount[0] = 1000000;
            bushelCount[1] = 10000;
            bushelCount[2] = 1000;
            bushelCount[3] = 1000;
            bushelCount[4] = 1000;
            bushelCount[5] = 1000;
            bushelCount[6] = 1000;
            logsCount = 100000;
            boardsCount = 100000;
            stoneCount = 100000;
            oreCopperCount = 10000;
            ingotsCopperCount = 10000;
            ingotsTinCount = 10000;
            ingotsBronzeCount = 10000;
            asCount = 1000000000;
            horsesCount = 10;
            beadsCount = 10000;
            trophiesCount = 100;
            scrollsCount = 1000;
        }

        if (e.key == 'e') { Translate('English'); }
        if (e.key == 'E') { Translate('English', false); }
        if (e.key == 'r') { Translate('Spanish'); }
        if (e.key == 'R') { Translate('Spanish', false); }

        if (e.key == 'z') { SummonOptions(); }

        if (e.code == 'KeyA') {
            if (e.shiftKey) {
                if (residentsCount != 1000) { residentsCount = 1000; }
                else { residentsCount = 0; }
            }
            else if (e.altKey) { residentsCount -= 1; }
            else { residentsCount += 1; }
        }

        if (e.key == 'd') {
            if (ratsCount != 100000000) { ratsCount = 100000000; }
            else { ratsCount = 0; }
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
        if (e.code == 'KeyN') { setValues(1); }
        if (e.code == 'KeyM') { setValues(0); }

        function setValues(amount) {
            if (e.shiftKey) {
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
                ingotsTinCount = amount;
                ingotsBronzeCount = amount;
                asCount = amount;
                horsesCount = amount;
                beadsCount = amount;
                trophiesCount = amount;
                scrollsCount = amount;
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
                ingotsTinCount -= amount;
                ingotsBronzeCount -= amount;
                asCount -= amount;
                horsesCount -= amount;
                beadsCount -= amount;
                trophiesCount -= amount;
                scrollsCount -= amount;
            }
            else {
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
                ingotsTinCount += amount;
                ingotsBronzeCount += amount;
                asCount += amount;
                horsesCount += amount;
                beadsCount += amount;
                trophiesCount += amount;
                scrollsCount += amount;
            }
        }

        if (e.key == 's') { player.likesStory = false; }
        if (e.key == 'S') { player.likesStory = true; }

        if (e.key == 'q') { PauseTime(); }
        if (e.code == 'KeyT') {
            if (e.shiftKey) { StartTime(true); }
            else { StartTime(); }
        }
    }
    UpdateDisplay();
}



// PLAYER ACTIONS **********************************************************************************
// *************************************************************************************************

function BeginGame(language) {
    Translate(language, false);
    player.hasBegun = true;
    UpdateDisplay();
}



function DismissSystemMessage() {
    player.seesSystemMessage = false;
    UpdateDisplay();
}



function DismissForeword() {
    player.seesForeword = false;
    player.canTill = true;
    StartTime();
    UpdateDisplay();
}



function DismissGameEvent() {
    if (gameSpeed == 'paused') { StartTime(); }
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

        let bounty = FindWholeRandom(grapesMin, grapesMax);
        harvestedCount[6] += bounty;
        if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
        if (player.hasWinery) {
            const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[3]);
            residenceIngredientInStockCount[3] += workshopShare;
            residenceIngredientConsumedCount[3] += workshopShare;
            bounty = bounty - workshopShare;
        }
        if (bushelCount[6] + bounty > bushelMax[6]) { bounty = bushelMax[6] - bushelCount[6]; }
        bushelCount[6] += bounty;
        farmedCount[6] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayPomOrchard.includes(1)) {
        arrayPomOrchard[arrayPomOrchard.findIndex((element) => element == 1)] = 0;

        let bounty = FindWholeRandom(pomegranateMin, pomegranateMax);
        harvestedCount[5] += bounty;
        if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
        if (player.hasPress) {
            const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[5]);
            residenceIngredientInStockCount[5] += workshopShare;
            residenceIngredientConsumedCount[5] += workshopShare;
            bounty = bounty - workshopShare;
        }
        if (bushelCount[5] + bounty > bushelMax[5]) { bounty = bushelMax[5] - bushelCount[5]; }
        bushelCount[5] += bounty;
        farmedCount[5] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayOlivar.includes(1)) {
        arrayOlivar[arrayOlivar.findIndex((element) => element == 1)] = 0;

        let bounty = FindWholeRandom(olivesMin, olivesMax);
        harvestedCount[2] += bounty;
        if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
        if (player.hasOliveMill) {
            const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[1]);
            residenceIngredientInStockCount[1] += workshopShare;
            residenceIngredientConsumedCount[1] += workshopShare;
            bounty = bounty - workshopShare;
        }
        if (bushelCount[2] + bounty > bushelMax[2]) { bounty = bushelMax[2] - bushelCount[2]; }
        bushelCount[2] += bounty;
        farmedCount[2] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayDatePalmGrove.includes(1)) {
        arrayDatePalmGrove[arrayDatePalmGrove.findIndex((element) => element == 1)] = 0;

        let bounty = FindWholeRandom(datesMin, datesMax);
        harvestedCount[3] += bounty;
        if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
        if (player.hasKitchen) {
            const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[4]);
            residenceIngredientInStockCount[4] += workshopShare;
            residenceIngredientConsumedCount[4] += workshopShare;
            bounty = bounty - workshopShare;
        }
        if (bushelCount[3] + bounty > bushelMax[3]) { bounty = bushelMax[3] - bushelCount[3]; }
        bushelCount[3] += bounty;
        farmedCount[3] += 1;
        taskComplete = true;
    }

    if (!taskComplete && arrayFigOrchard.includes(1)) {
        arrayFigOrchard[arrayFigOrchard.findIndex((element) => element == 1)] = 0;

        let bounty = FindWholeRandom(figsMin, figsMax);
        harvestedCount[4] += bounty;
        if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
        if (player.hasGreenhouse) {
            const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[6]);
            residenceIngredientInStockCount[6] += workshopShare;
            residenceIngredientConsumedCount[6] += workshopShare;
            bounty = bounty - workshopShare;
        }
        if (bushelCount[4] + bounty > bushelMax[4]) { bounty = bushelMax[4] - bushelCount[4]; }
        bushelCount[4] += bounty;
        farmedCount[4] += 1;
        taskComplete = true;
    }

    if (!taskComplete) {
        let plotSearchResult = FindPlot(14, 'all');
        if (plotSearchResult.row != -1) {

            arrayFarmPlots[plotSearchResult.row][plotSearchResult.col] = 0;
            let bounty = FindWholeRandom(yieldMin, yieldMax);
            if (plotSearchResult.row > 5 && plotSearchResult.row < 9) {
                harvestedCount[1] += bounty;
                if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
                if (player.hasBrewery) {
                    const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[2]);
                    residenceIngredientInStockCount[2] += workshopShare;
                    residenceIngredientConsumedCount[2] += workshopShare;
                    bounty = bounty - workshopShare;
                }
                if (bushelCount[1] + bounty > bushelMax[1]) { bounty = bushelMax[1] - bushelCount[1]; }
                bushelCount[1] += bounty;
                farmedCount[1] += 1;
            }
            else {
                harvestedCount[0] += bounty;
                if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
                if (player.hasBakery) {
                    const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[0]);
                    residenceIngredientInStockCount[0] += workshopShare;
                    residenceIngredientConsumedCount[0] += workshopShare;
                    bounty = bounty - workshopShare;
                }
                if (bushelCount[0] + bounty > bushelMax[0]) { bounty = bushelMax[0] - bushelCount[0]; }
                bushelCount[0] += bounty;
                farmedCount[0] += 1;
            }
            taskComplete = true;
        }
    }

    if (!robota && taskComplete) {
        if (farmStage == 0 && warehouseStage == 0 && player.canBuyLand && !player.canRentWarehouse) {
            player.canRentWarehouse = true;
            player.seesWarehouse = true;
        }
        if (farmStage == 0) { player.canBuyLand = true; }
        UpdateDisplay();
    }
    return taskComplete;
}



function BuyLand() {
    if (farmStage == 0 && bushelCount[0] > priceStage1) {
        if (player.likesStory) { GameEvent(displayStoryFarm0, 'farm_stage_0'); }
        farmStage++;
        bushelCount[0] -= priceStage1;
        spentCount[0] += priceStage1;

        farmSize[0] = 2;
    }
    else if (farmStage == 1 && bushelCount[0] > priceStage2) {
        if (player.likesStory) { GameEvent(displayStoryFarm1, 'farm_stage_1'); }
        farmStage++;
        bushelCount[0] -= priceStage2;
        spentCount[0] += priceStage2;

        farmSize[0] = 4;
    }
    else if (farmStage == 2 && bushelCount[0] > priceStage3) {
        if (player.likesStory) {
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
        player.canRentWarehouse = true;
    }
    else if (farmStage == 3 && bushelCount[0] > priceStage4) {
        if (player.likesStory) { GameEvent(displayStoryFarm3, 'farm_stage_3'); }
        farmStage++;
        bushelCount[0] -= priceStage4;
        spentCount[0] += priceStage4;

        farmSize[0] = 7;
        farmSize[1] = 3;
        handsAvailable += 2;
    }
    else if (farmStage == 4 && bushelCount[0] > priceStage5) {
        if (player.likesStory) { GameEvent(displayStoryFarm4, 'farm_stage_4'); }
        farmStage++;
        bushelCount[0] -= priceStage5;
        spentCount[0] += priceStage5;

        handsAvailable += 2;
    }
    else if (farmStage == 5 && bushelCount[0] > priceStage6) {
        if (player.likesStory) { GameEvent(displayStoryFarm5, 'farm_stage_5'); }
        farmStage++;
        bushelCount[0] -= priceStage6;
        spentCount[0] += priceStage6;
    }
    else if (farmStage == 6 && bushelCount[0] > priceStage7) {
        if (player.likesStory) { GameEvent(displayStoryFarm6, 'farm_stage_6'); }
        farmStage++;
        bushelCount[0] -= priceStage7;
        spentCount[0] += priceStage7;
    }
    else if (farmStage == 7 && bushelCount[0] > priceStage8) {
        if (player.likesStory) { GameEvent(displayStoryFarm7, 'farm_stage_7'); }
        farmStage++;
        bushelCount[0] -= priceStage8;
        spentCount[0] += priceStage8;
    }
    else if (farmStage == 8 && bushelCount[0] > priceStage9) {
        if (player.likesStory) { GameEvent(displayStoryFarm8, 'farm_stage_8'); }
        farmStage++;
        bushelCount[0] -= priceStage9;
        spentCount[0] += priceStage9;
    }
    else if (farmStage == 9 && bushelCount[0] > priceStage10) {
        if (player.likesStory) { GameEvent(displayStoryFarm9, 'farm_stage_9'); }
        farmStage++;
        bushelCount[0] -= priceStage10;
        spentCount[0] += priceStage10;

        olivePlantDate[0] = week;
        olivePlantDate[1] = year;
        player.seesOlives = true;
    }
    else if (farmStage == 10 && bushelCount[0] > priceStage11) {
        if (player.likesStory) { GameEvent(displayStoryFarm10, 'farm_stage_10'); }
        farmStage++;
        bushelCount[0] -= priceStage11;
        spentCount[0] += priceStage11;

        farmSize[0] = 14;
        handsAvailable += 4;
        player.canBuyForest = true;
        player.canGoHome = true;

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
        if (player.likesStory) { GameEvent(displayStoryFarm11, 'farm_stage_11'); }
        farmStage++;
        bushelCount[0] -= priceStage12[0];
        spentCount[0] += priceStage12[0];
        boardsCount -= priceStage12[1];
        forestSpentCount[1] += priceStage12[1];

        handsAvailable += 2;
        player.canRentWarehouse = true;
    }
    else if (farmStage == 12 && bushelCount[0] > priceStage13) {
        if (player.likesStory) { GameEvent(displayStoryFarm12, 'farm_stage_12'); }
        farmStage++;
        bushelCount[0] -= priceStage13;
        spentCount[0] += priceStage13;

        farmSize[1] = 6;
        handsAvailable += 8;
    }
    else if (farmStage == 13 && bushelCount[0] > priceStage14[0] && boardsCount >= priceStage14[1]) {
        if (player.likesStory) { GameEvent(displayStoryFarm13, 'farm_stage_13'); }
        farmStage++;
        bushelCount[0] -= priceStage14[0];
        spentCount[0] += priceStage14[0];
        boardsCount -= priceStage14[1];
        forestSpentCount[1] += priceStage14[1];

        handsAvailable += 4;
        player.canBuyMountain = true;
    }
    else if (farmStage == 14 && bushelCount[0] > priceStage15[0] && stoneCount >= priceStage15[1]) {
        if (player.likesStory) { GameEvent(displayStoryFarm14, 'farm_stage_14'); }
        farmStage++;
        bushelCount[0] -= priceStage15[0];
        spentCount[0] += priceStage15[0];
        stoneCount -= priceStage15[1];
        mountainSpentCount[0] += priceStage15[1];

        handsAvailable += 2;
    }
    else if (farmStage == 15 && bushelCount[0] > priceStage16[0] && stoneCount >= priceStage16[1]) {
        if (player.likesStory) { GameEvent(displayStoryFarm15, 'farm_stage_15'); }
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
        if (player.likesStory) {
            Translate(player.speaks, false); // this repopulates the 'year' binding in the following string
            GameEvent(displayStoryFarm16, 'farm_stage_16');
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
        if (player.likesStory) { GameEvent(displayStoryFarm17, 'farm_stage_17'); }
        farmStage++;
        bushelCount[0] -= priceStage18[0];
        bushelCount[1] -= priceStage18[1];
        spentCount[0] += priceStage18[0];
        spentCount[1] += priceStage18[1];

        arrayOlivar.push(0, 0, 0, 0, 0, 0,);
        vigneronsHired = 4;
        arboristsHired = 8;
        horticulturalistsHired = 2;
        buttonBarterOlive.classList.add('noMargin');
        player.canBuyLand = false;
        player.canBuyNewFarm = true;
    }
    UpdateDisplay();
}



function RentWarehouse() {
    if (warehouseStage == 0 && bushelCount[0] > priceWarehouse0) {
        if (player.likesStory) { GameEvent(displayStoryWarehouse0, 'warehouse_stage_0'); }
        bushelCount[0] -= priceWarehouse0;
        spentCount[0] += priceWarehouse0;
        player.canRentWarehouse = false;
        warehouseStage++;
        bushelMax[0] = 300;
    }
    else if (warehouseStage == 1 && bushelCount[0] > priceWarehouse1) {
        if (player.likesStory) { GameEvent(displayStoryWarehouse1, 'warehouse_stage_1'); }
        bushelCount[0] -= priceWarehouse1;
        spentCount[0] += priceWarehouse1;
        player.canRentWarehouse = false;
        warehouseStage++;
        bushelMax[0] = 3000;
    }
    else if (warehouseStage == 2 && bushelCount[0] > priceWarehouse2) {
        if (player.likesStory) { GameEvent(displayStoryWarehouse2, 'warehouse_stage_2'); }
        bushelCount[0] -= priceWarehouse2;
        spentCount[0] += priceWarehouse2;
        player.canRentWarehouse = false;
        warehouseStage++;
        bushelMax[0] = 3000000;
        bushelMax[2] = 30000;
    }
    UpdateDisplay();
}



function BuyForest() {
    if (bushelCount[0] > priceForest) {
        if (player.likesStory) { GameEvent(displayStoryForest, 'buy_forest'); }
        bushelCount[0] -= priceForest;
        spentCount[0] += priceForest;
        player.canBuyForest = false;
        player.seesForest = true;
        player.seesForestButton = true;
        UpdateDisplay();
    }
}



function BuyMountain() {
    if (bushelCount[0] > priceQuarry) {
        if (player.likesStory) { GameEvent(displayStoryQuarry, 'buy_mountain'); }
        bushelCount[0] -= priceQuarry;
        spentCount[0] += priceQuarry;
        player.canBuyMountain = false;
        player.seesMountain = true;
        UpdateDisplay();
    }
}



function ForestEvents() {
    if (!player.canLog && bushelCount[0] > priceLoggingCamp) {
        if (player.likesStory) { GameEvent(displayStoryLoggingCamp, 'buy_loggingcamp'); }
        bushelCount[0] -= priceLoggingCamp;
        spentCount[0] += priceLoggingCamp;
        player.canLog = true;
    }
    else if (!player.canSaw && bushelCount[0] > priceSawmill) {
        if (player.likesStory) { GameEvent(displayStorySawmill, 'buy_sawmill'); }
        bushelCount[0] -= priceSawmill;
        spentCount[0] += priceSawmill;
        player.canSaw = true;
        player.seesForestButton = false;
    }
    UpdateDisplay();
}



function MountainEvents() {
    if (!player.hasFoundMine && bushelCount[0] > priceMineScout) {
        if (player.likesStory) { GameEvent(displayStoryMineScout); }
        bushelCount[0] -= priceMineScout;
        spentCount[0] += priceMineScout;
        player.hasFoundMine = true;
    }
    else if (!player.canMine && asCount >= priceMineDig[0] && logsCount >= priceMineDig[1]) {
        if (player.likesStory) { GameEvent(displayStoryMineDig); }
        asCount -= priceMineDig[0];
        asSpent += priceMineDig[0];
        logsCount -= priceMineDig[1];
        forestSpentCount[0] += priceMineDig[1];
        player.canMine = true;
    }
    else if (!player.canSmelt && asCount >= priceFoundry[0] && logsCount >= priceFoundry[1] && stoneCount >= priceFoundry[2]) {
        if (player.likesStory) { GameEvent(displayStoryFoundry); }
        asCount -= priceFoundry[0];
        asSpent += priceFoundry[0];
        logsCount -= priceFoundry[1];
        forestSpentCount[0] += priceFoundry[1];
        stoneCount -= priceFoundry[2];
        mountainSpentCount[0] += priceFoundry[2];
        player.canSmelt = true;
        player.seesMountainButton = false;
    }
    else if (player.canSmelt && player.canHireBronzeworkers) {
        if (player.likesStory) { GameEvent(displayStoryBronzeworkers); }
        metallurgistsHired += 4;
        player.seesMountainButton = false;
        player.hasHiredBronzeworkers = true;
    }
    UpdateDisplay();
}



function HireHand() {
    if (handsAvailable > 0) {
        player.canDelegate = true;
        handsAvailable -= 1;
        handsHired += 1;
        if (player.likesStory) {
            if (handsHired == 1) { GameEvent(displayStoryHands0, 'hire_fieldhand_0'); }
            else if (handsHired == 2) { GameEvent(displayStoryHands1, 'hire_fieldhand_1'); }
            else if (handsHired == 3) { GameEvent(displayStoryHands2, 'hire_fieldhand_2'); }
            else if (handsHired == 4) { GameEvent(displayStoryHands3, 'hire_fieldhand_3'); }
            else if (handsHired == 5) { GameEvent(displayStoryHands4, 'hire_fieldhand_4'); }
            else if (handsHired == 6) { GameEvent(displayStoryHands5, 'hire_fieldhand_5'); }
            else if (handsHired == 7) { GameEvent(displayStoryHands6, 'hire_fieldhand_6'); }
            else if (handsHired == 8) { GameEvent(displayStoryHands7, 'hire_fieldhand_7'); }
            else if (handsHired == 9) { GameEvent(displayStoryHands8, 'hire_fieldhand_8'); }
            else if (handsHired == 10) { GameEvent(displayStoryHands9, 'hire_fieldhand_9'); }
            else if (handsHired == 11) { GameEvent(displayStoryHands10, 'hire_fieldhand_10'); }
            else if (handsHired == 12) { GameEvent(displayStoryHands11, 'hire_fieldhand_11'); }
            else if (handsHired == 13) { GameEvent(displayStoryHands12, 'hire_fieldhand_12'); }
            else if (handsHired == 14) { GameEvent(displayStoryHands13, 'hire_fieldhand_13'); }
            else if (handsHired == 15) { GameEvent(displayStoryHands14, 'hire_fieldhand_14'); }
            else if (handsHired == 16) { GameEvent(displayStoryHands15, 'hire_fieldhand_15'); }
            else if (handsHired == 17) { GameEvent(displayStoryHands16, 'hire_fieldhand_16'); }
            else if (handsHired == 18) { GameEvent(displayStoryHands17, 'hire_fieldhand_17'); }
            else if (handsHired == 19) { GameEvent(displayStoryHands18, 'hire_fieldhand_18'); }
            else if (handsHired == 20) { GameEvent(displayStoryHands19, 'hire_fieldhand_19'); }
            else if (handsHired == 21) { GameEvent(displayStoryHands20, 'hire_fieldhand_20'); }
            else if (handsHired == 22) { GameEvent(displayStoryHands21, 'hire_fieldhand_21'); }
            else if (handsHired == 23) { GameEvent(displayStoryHands22, 'hire_fieldhand_22'); }
            else if (handsHired == 24) { GameEvent(displayStoryHands23, 'hire_fieldhand_23'); }
            else if (handsHired == 25) { GameEvent(displayStoryHands24, 'hire_fieldhand_24'); }
            else if (handsHired == 26) { GameEvent(displayStoryHands25, 'hire_fieldhand_25'); }
            else if (handsHired == 27) { GameEvent(displayStoryHands26, 'hire_fieldhand_26'); }
            else if (handsHired == 28) { GameEvent(displayStoryHands27, 'hire_fieldhand_27'); }
            else if (handsHired == 29) { GameEvent(displayStoryHands28, 'hire_fieldhand_28'); }
            else if (handsHired == 30) { GameEvent(displayStoryHands29, 'hire_fieldhand_29'); }
            else if (handsHired == 31) { GameEvent(displayStoryHands30, 'hire_fieldhand_30'); }
            else if (handsHired == 32) { GameEvent(displayStoryHands31, 'hire_fieldhand_31'); }
            else if (handsHired == 33) { GameEvent(displayStoryHands32, 'hire_fieldhand_32'); }
            else if (handsHired == 34) { GameEvent(displayStoryHands33, 'hire_fieldhand_33'); }
            else if (handsHired == 35) { GameEvent(displayStoryHands34, 'hire_fieldhand_34'); }
            else if (handsHired == 36) { GameEvent(displayStoryHands35, 'hire_fieldhand_35'); }
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
        if (player.likesStory) { GameEvent(displayStoryAccountant, 'hire_accountant'); }
        bushelCount[0] -= priceAccountant;
        spentCount[0] += priceAccountant;
        player.canAudit = false;
        player.seesReport = true;
        UpdateDisplay();
    }
}



function TogglePriority() {
    if (priority == 'Reap') { priority = 'Sow'; }
    else if (priority == 'Sow') { priority = '🤪'; }
    else { priority = 'Reap'; }
    UpdateDisplay();
}



function BarterFruit(crop) {
    let barterAmount = bushelCount[crop];
    if (bushelCount[crop] > barterMaxBulkCount) { barterAmount = barterMaxBulkCount; }
    bushelCount[crop] -= barterAmount;
    soldCount[crop] += barterAmount;
    bushelCount[0] += barterAmount * barterExchangeRate[crop];
    if (bushelCount[0] > bushelMax[0]) { bushelCount[0] = bushelMax[0]; }
    UpdateDisplay();
}



function Found() {
    if (bushelCount[0] > priceVillage) {
        if (player.likesStory) { GameEvent(displayStoryFound, 'buy_village'); }
        bushelCount[0] -= priceVillage;
        spentCount[0] += priceVillage;
        player.canFound = false;
        player.canBuild = true;
        player.seesVillage = true;
        UpdateDisplay();
    }
}



function BuyNewFarm() {
    if (asCount >= priceNewFarm) {
        if (player.likesStory) { GameEvent(displayStoryNewFarm); }
        asCount -= priceNewFarm;
        asSpent += priceNewFarm;
        player.canBuyNewFarm = false;
        player.hasNewFarm = true;
        farmSize[1] = 15;
        handsHired += 28;
        handsMax += 28;
        UpdateDisplay();
    }
}



function ImproveResidence() {
    if (residenceStage == 0 && bushelCount[0] > priceResidence00) {
        if (player.likesStory) { GameEvent(displayStoryResidence00); }
        bushelCount[0] -= priceResidence00;
        spentCount[0] += priceResidence00;
        residenceImage.src = 'bitmaps/res01.png';
        residenceStage += 1;
    }
    else if (residenceStage == 1 && bushelCount[0] > priceResidence01[0] && logsCount >= priceResidence01[1]) {
        if (player.likesStory) { GameEvent(displayStoryResidence01); }
        bushelCount[0] -= priceResidence01[0];
        spentCount[0] += priceResidence01[0];
        logsCount -= priceResidence01[1];
        forestSpentCount[0] += priceResidence01[1];
        residenceImage.src = 'bitmaps/res02.png';
        residenceStage += 1;
    }
    else if (residenceStage == 2 && bushelCount[0] > priceResidence02[0] && boardsCount >= priceResidence02[1]) {
        if (player.likesStory) { GameEvent(displayStoryResidence02); }
        bushelCount[0] -= priceResidence02[0];
        spentCount[0] += priceResidence02[0];
        boardsCount -= priceResidence02[1];
        forestSpentCount[1] += priceResidence02[1];
        residenceImage.src = 'bitmaps/res03.png';
        residenceStage += 1;
    }
    else if (residenceStage == 3 && bushelCount[0] > priceResidence03[0] && stoneCount >= priceResidence03[1] && boardsCount >= priceResidence03[2]) {
        if (player.likesStory) { GameEvent(displayStoryResidence03); }
        bushelCount[0] -= priceResidence03[0];
        spentCount[0] += priceResidence03[0];
        stoneCount -= priceResidence03[1];
        mountainSpentCount[0] += priceResidence03[1];
        boardsCount -= priceResidence03[2];
        forestSpentCount[1] += priceResidence03[2];
        residenceImage.src = 'bitmaps/res04.png';
        residenceStage += 1;
        player.hasBakery = true;
    }
    else if (residenceStage == 4 && bushelCount[0] > priceResidence04[0] && stoneCount >= priceResidence04[1] && boardsCount >= priceResidence04[2] && bushelCount[2] >= priceResidence04[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence04); }
        bushelCount[0] -= priceResidence04[0];
        spentCount[0] += priceResidence04[0];
        stoneCount -= priceResidence04[1];
        mountainSpentCount[0] += priceResidence04[1];
        boardsCount -= priceResidence04[2];
        forestSpentCount[1] += priceResidence04[2];
        bushelCount[2] -= priceResidence04[3];
        spentCount[2] += priceResidence04[3];
        residenceImage.src = 'bitmaps/res05.png';
        residenceStage += 1;
        player.hasOliveMill = true;
    }
    else if (residenceStage == 5 && bushelCount[0] > priceResidence05[0] && stoneCount >= priceResidence05[1] && boardsCount >= priceResidence05[2] && ingotsCopperCount >= priceResidence05[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence05); }
        bushelCount[0] -= priceResidence05[0];
        spentCount[0] += priceResidence05[0];
        stoneCount -= priceResidence05[1];
        mountainSpentCount[0] += priceResidence05[1];
        boardsCount -= priceResidence05[2];
        forestSpentCount[1] += priceResidence05[2];
        ingotsCopperCount -= priceResidence05[3];
        mountainSpentCount[2] += priceResidence05[3];
        residenceImage.src = 'bitmaps/res06.png';
        residenceStage += 1;
    }
    else if (residenceStage == 6 && bushelCount[0] > priceResidence06[0] && stoneCount >= priceResidence06[1] && boardsCount >= priceResidence06[2] && bushelCount[1] > priceResidence06[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence06); }
        bushelCount[0] -= priceResidence06[0];
        spentCount[0] += priceResidence06[0];
        stoneCount -= priceResidence06[1];
        mountainSpentCount[0] += priceResidence06[1];
        boardsCount -= priceResidence06[2];
        forestSpentCount[1] += priceResidence06[2];
        bushelCount[1] -= priceResidence06[3];
        spentCount[1] += priceResidence06[3];
        residenceStage += 1;
        player.hasBrewery = true;
    }
    else if (residenceStage == 7 && bushelCount[0] > priceResidence07[0] && stoneCount >= priceResidence07[1] && boardsCount >= priceResidence07[2] && bushelCount[6] >= priceResidence07[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence07); }
        bushelCount[0] -= priceResidence07[0];
        spentCount[0] += priceResidence07[0];
        stoneCount -= priceResidence07[1];
        mountainSpentCount[0] += priceResidence07[1];
        boardsCount -= priceResidence07[2];
        forestSpentCount[1] += priceResidence07[2];
        bushelCount[6] -= priceResidence07[3];
        spentCount[6] += priceResidence07[3];
        residenceStage += 1;
        player.hasWinery = true;
    }
    else if (residenceStage == 8 && bushelCount[0] > priceResidence08[0] && stoneCount >= priceResidence08[1] && boardsCount >= priceResidence08[2] && bushelCount[3] >= priceResidence08[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence08); }
        bushelCount[0] -= priceResidence08[0];
        spentCount[0] += priceResidence08[0];
        stoneCount -= priceResidence08[1];
        mountainSpentCount[0] += priceResidence08[1];
        boardsCount -= priceResidence08[2];
        forestSpentCount[1] += priceResidence08[2];
        bushelCount[3] -= priceResidence08[3];
        spentCount[3] += priceResidence08[3];
        residenceStage += 1;
        player.hasKitchen = true;
    }
    else if (residenceStage == 9 && bushelCount[0] > priceResidence09[0] && stoneCount >= priceResidence09[1] && boardsCount >= priceResidence09[2] && bushelCount[5] >= priceResidence09[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence09); }
        bushelCount[0] -= priceResidence09[0];
        spentCount[0] += priceResidence09[0];
        stoneCount -= priceResidence09[1];
        mountainSpentCount[0] += priceResidence09[1];
        boardsCount -= priceResidence09[2];
        forestSpentCount[1] += priceResidence09[2];
        bushelCount[5] -= priceResidence09[3];
        spentCount[5] += priceResidence09[3];
        residenceStage += 1;
        player.hasPress = true;
    }
    else if (residenceStage == 10 && bushelCount[0] > priceResidence10[0] && stoneCount >= priceResidence10[1] && boardsCount >= priceResidence10[2] && bushelCount[4] >= priceResidence10[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence10); }
        bushelCount[0] -= priceResidence10[0];
        spentCount[0] += priceResidence10[0];
        stoneCount -= priceResidence10[1];
        mountainSpentCount[0] += priceResidence10[1];
        boardsCount -= priceResidence10[2];
        forestSpentCount[1] += priceResidence10[2];
        bushelCount[4] -= priceResidence10[3];
        spentCount[4] += priceResidence10[3];
        residenceStage += 1;
        player.hasGreenhouse = true;
    }
    else if (residenceStage == 11 && bushelCount[0] > priceResidence11[0] && stoneCount >= priceResidence11[1] && boardsCount >= priceResidence11[2] && ingotsCopperCount >= priceResidence11[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence11); }
        bushelCount[0] -= priceResidence11[0];
        spentCount[0] += priceResidence11[0];
        stoneCount -= priceResidence11[1];
        mountainSpentCount[0] += priceResidence11[1];
        boardsCount -= priceResidence11[2];
        forestSpentCount[1] += priceResidence11[2];
        ingotsCopperCount -= priceResidence11[3];
        mountainSpentCount[2] += priceResidence11[3];
        residenceImage.src = 'bitmaps/res07.png';
        residenceStage += 1;
    }
    else if (residenceStage == 12 && bushelCount[0] > priceResidence12[0] && stoneCount >= priceResidence12[1] && boardsCount >= priceResidence12[2] && ingotsTinCount >= priceResidence12[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence12); }
        bushelCount[0] -= priceResidence12[0];
        spentCount[0] += priceResidence12[0];
        stoneCount -= priceResidence12[1];
        mountainSpentCount[0] += priceResidence12[1];
        boardsCount -= priceResidence12[2];
        forestSpentCount[1] += priceResidence12[2];
        ingotsTinCount -= priceResidence12[3];
        mountainSpentCount[3] += priceResidence12[3];
        residenceStage += 1;
        player.hasAtelier = true;
    }
    else if (residenceStage == 13 && bushelCount[0] > priceResidence13[0] && stoneCount >= priceResidence13[1] && boardsCount >= priceResidence13[2] && ingotsBronzeCount >= priceResidence13[3]) {
        if (player.likesStory) { GameEvent(displayStoryResidence13); }
        bushelCount[0] -= priceResidence13[0];
        spentCount[0] += priceResidence13[0];
        stoneCount -= priceResidence13[1];
        mountainSpentCount[0] += priceResidence13[1];
        boardsCount -= priceResidence13[2];
        forestSpentCount[1] += priceResidence13[2];
        ingotsBronzeCount -= priceResidence13[3];
        mountainSpentCount[4] += priceResidence13[3];
        residenceImage.src = 'bitmaps/res08.png';
        residenceStage += 1;
        player.hasMansion = true;
    }
    UpdateDisplay();
}



function GoToResidence() {
    divViewPraedium.style.display = 'none';
    divViewResidence.style.display = 'block';
    player.isAt = 'Residence';
    if (!player.hasSeenResidence) {
        player.hasSeenResidence = true;
        if (player.likesStory) { GameEvent(displayStoryResidenceFirstVisit); }
    }
    UpdateDisplay();
}



function GoToTownship() {
    divViewPraedium.style.display = 'none';
    divViewTownship.style.display = 'block';
    divViewPort.style.display = '';
    player.isAt = 'Township';
    if (!player.hasSeenVillage) {
        player.hasSeenVillage = true;
        if (player.likesStory) { GameEvent(displayStoryVillageFirstVisit); }
    }
    UpdateDisplay();
}



function GoToPraedium() {
    divViewPraedium.style.display = '';
    divViewResidence.style.display = '';
    divViewTownship.style.display = '';
    player.isAt = 'Praedium';
    UpdateDisplay();
}



function GoToPort() {
    divViewTownship.style.display = '';
    divViewPort.style.display = 'block';
    player.isAt = 'Port';
    if (!player.hasSeenPort) {
        player.hasSeenPort = true;
        if (player.likesStory) { GameEvent(displayStoryPortFirstVisit); }
    }
    UpdateDisplay();
}



function Build() {
    if (villageStage == 0 && bushelCount[0] > priceBuild0[0] && logsCount >= priceBuild0[1] && boardsCount >= priceBuild0[2] && stoneCount >= priceBuild0[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage0); }
        villageImage.src = 'bitmaps/village01.png';
        villageStage += 1;
        bushelCount[0] -= priceBuild0[0];
        spentCount[0] += priceBuild0[0];
        logsCount -= priceBuild0[1];
        forestSpentCount[0] += priceBuild0[1];
        boardsCount -= priceBuild0[2];
        forestSpentCount[1] += priceBuild0[2];
        stoneCount -= priceBuild0[3];
        mountainSpentCount[0] += priceBuild0[3];
    }
    else if (villageStage == 1 && bushelCount[0] > priceBuild1[0] && boardsCount >= priceBuild1[1] && stoneCount >= priceBuild1[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage1); }
        villageImage.src = 'bitmaps/village02.png';
        villageStage += 1;
        bushelCount[0] -= priceBuild1[0];
        spentCount[0] += priceBuild1[0];
        boardsCount -= priceBuild1[1];
        forestSpentCount[1] += priceBuild1[1];
        stoneCount -= priceBuild1[2];
        mountainSpentCount[0] += priceBuild1[2];
    }
    else if (villageStage == 2 && bushelCount[0] > priceBuild2[0] && stoneCount >= priceBuild2[1]) {
        if (player.likesStory) { GameEvent(displayStoryVillage2); }
        villageImage.src = 'bitmaps/village03.png';
        villageStage += 1;
        bushelCount[0] -= priceBuild2[0];
        spentCount[0] += priceBuild2[0];
        stoneCount -= priceBuild2[1];
        mountainSpentCount[0] += priceBuild2[1];

        estDate[0] = week;
        estDate[1] = year + yearAtStartHebrew;
    }
    else if (villageStage == 3 && bushelCount[0] > priceBuild3[0] && boardsCount >= priceBuild3[1] && stoneCount >= priceBuild3[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage3); }
        villageImage.src = 'bitmaps/village04.png';
        villageStage += 1;
        bushelCount[0] -= priceBuild3[0];
        spentCount[0] += priceBuild3[0];
        boardsCount -= priceBuild3[1];
        forestSpentCount[1] += priceBuild3[1];
        stoneCount -= priceBuild3[2];
        mountainSpentCount[0] += priceBuild3[2];

        residentsMax += 14;
    }
    else if (villageStage == 4 && asCount >= priceBuild4[0] && bushelCount[0] > priceBuild4[1] && boardsCount >= priceBuild4[2] && stoneCount >= priceBuild4[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage4); }
        villageImage.src = 'bitmaps/village05.png';
        villageStage += 1;
        asCount -= priceBuild4[0];
        asSpent += priceBuild4[0];
        bushelCount[0] -= priceBuild4[1];
        spentCount[0] += priceBuild4[1];
        boardsCount -= priceBuild4[2];
        forestSpentCount[1] += priceBuild4[2];
        stoneCount -= priceBuild4[3];
        mountainSpentCount[0] += priceBuild4[3];

        residentsMax += 14;
        rentPrice += 2;
    }
    else if (villageStage == 5 && asCount >= priceBuild5[0] && bushelCount[0] > priceBuild5[1] && boardsCount >= priceBuild5[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage5); }
        villageImage.src = 'bitmaps/village06.png';
        villageStage += 1;
        asCount -= priceBuild5[0];
        asSpent += priceBuild5[0];
        bushelCount[0] -= priceBuild5[1];
        spentCount[0] += priceBuild5[1];
        boardsCount -= priceBuild5[2];
        forestSpentCount[1] += priceBuild5[2];

        rentPrice += 4;
        player.canSell = true;
    }
    else if (villageStage == 6 && asCount >= priceBuild6[0] && bushelCount[0] > priceBuild6[1] && boardsCount >= priceBuild6[2] && stoneCount >= priceBuild6[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage6); }
        villageImage.src = 'bitmaps/village07.png';
        villageStage += 1;
        asCount -= priceBuild6[0];
        asSpent += priceBuild6[0];
        bushelCount[0] -= priceBuild6[1];
        spentCount[0] += priceBuild6[1];
        boardsCount -= priceBuild6[2];
        forestSpentCount[1] += priceBuild6[2];
        stoneCount -= priceBuild6[3];
        mountainSpentCount[0] += priceBuild6[3];

        residentsMax += 14;
        rentPrice += 1;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 7 && asCount >= priceBuild7[0] && bushelCount[0] > priceBuild7[1] && boardsCount >= priceBuild7[2] && stoneCount >= priceBuild7[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage7); }
        villageImage.src = 'bitmaps/village08.png';
        villageStage += 1;
        asCount -= priceBuild7[0];
        asSpent += priceBuild7[0];
        bushelCount[0] -= priceBuild7[1];
        spentCount[0] += priceBuild7[1];
        boardsCount -= priceBuild7[2];
        forestSpentCount[1] += priceBuild7[2];
        stoneCount -= priceBuild7[3];
        mountainSpentCount[0] += priceBuild7[3];

        residentsMax += 42;
        rentPrice += 3;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 8 && asCount >= priceBuild8[0] && bushelCount[0] > priceBuild8[1] && boardsCount >= priceBuild8[2] && stoneCount >= priceBuild8[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage8); }
        villageImage.src = 'bitmaps/village09.png';
        villageStage += 1;
        asCount -= priceBuild8[0];
        asSpent += priceBuild8[0];
        bushelCount[0] -= priceBuild8[1];
        spentCount[0] += priceBuild8[1];
        boardsCount -= priceBuild8[2];
        forestSpentCount[1] += priceBuild8[2];
        stoneCount -= priceBuild8[3];
        mountainSpentCount[0] += priceBuild8[3];

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
    else if (villageStage == 9 && asCount >= priceBuild9[0] && bushelCount[0] > priceBuild9[1] && boardsCount >= priceBuild9[2] && stoneCount >= priceBuild9[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage9); }
        villageImage.src = 'bitmaps/village10.png';
        villageStage += 1;
        asCount -= priceBuild9[0];
        asSpent += priceBuild9[0];
        bushelCount[0] -= priceBuild9[1];
        spentCount[0] += priceBuild9[1];
        boardsCount -= priceBuild9[2];
        forestSpentCount[1] += priceBuild9[2];
        stoneCount -= priceBuild9[3];
        mountainSpentCount[0] += priceBuild9[3];

        residentsMax += 42;
        rentPrice += 5;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 10 && asCount >= priceBuild10[0] && bushelCount[1] > priceBuild10[1] && boardsCount >= priceBuild10[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage10); }
        villageImage.src = 'bitmaps/village11.png';
        villageStage += 1;
        asCount -= priceBuild10[0];
        asSpent += priceBuild10[0];
        bushelCount[1] -= priceBuild10[1];
        spentCount[1] += priceBuild10[1];
        boardsCount -= priceBuild10[2];
        forestSpentCount[1] += priceBuild10[2];

        horsesSpawn = true;
        rentPrice += 2;
        actualBushelPrice += 100;
        SetMarketPrice();
    }
    else if (villageStage == 11 && asCount >= priceBuild11[0] && ingotsCopperCount >= priceBuild11[1] && bushelCount[0] > priceBuild11[2] && bushelCount[1] > priceBuild11[3] && bushelCount[2] >= priceBuild11[4] && bushelCount[3] >= priceBuild11[5] && bushelCount[4] >= priceBuild11[6] && bushelCount[5] >= priceBuild11[7] && bushelCount[6] >= priceBuild11[8] && stoneCount >= priceBuild11[9] && horsesCount >= priceBuild11[10]) {
        if (player.likesStory) { GameEvent(displayStoryVillage11); }
        villageImage.src = 'bitmaps/village12.png';
        villageStage += 1;
        asCount -= priceBuild11[0];
        asSpent += priceBuild11[0];
        ingotsCopperCount -= priceBuild11[1];
        mountainSpentCount[2] += priceBuild11[1];
        bushelCount[0] -= priceBuild11[2];
        spentCount[0] += priceBuild11[2];
        bushelCount[1] -= priceBuild11[3];
        spentCount[1] += priceBuild11[3];
        bushelCount[2] -= priceBuild11[4];
        spentCount[2] += priceBuild11[4];
        bushelCount[3] -= priceBuild11[5];
        spentCount[3] += priceBuild11[5];
        bushelCount[4] -= priceBuild11[6];
        spentCount[4] += priceBuild11[6];
        bushelCount[5] -= priceBuild11[7];
        spentCount[5] += priceBuild11[7];
        bushelCount[6] -= priceBuild11[8];
        spentCount[6] += priceBuild11[8];
        stoneCount -= priceBuild11[9];
        mountainSpentCount[0] += priceBuild11[9];
        horsesCount -= priceBuild11[10];

        beadsSpawn = true;
        rentPrice += 8;
        actualBushelPrice -= 50;
        SetMarketPrice();
    }
    else if (villageStage == 12 && asCount >= priceBuild12[0] && bushelCount[1] > priceBuild12[1] && stoneCount >= priceBuild12[2] && horsesCount >= priceBuild12[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage12); }
        villageImage.src = 'bitmaps/village13.png';
        villageStage += 1;
        asCount -= priceBuild12[0];
        asSpent += priceBuild12[0];
        bushelCount[1] -= priceBuild12[1];
        spentCount[1] += priceBuild12[1];
        stoneCount -= priceBuild12[2];
        mountainSpentCount[0] += priceBuild12[2];
        horsesCount -= priceBuild12[3];

        rentPrice += 12;
        actualBushelPrice += 100;
        SetMarketPrice();
        trophiesSpawn = true;
    }
    else if (villageStage == 13 && asCount >= priceBuild13[0] && ingotsCopperCount >= priceBuild13[1] && stoneCount >= priceBuild13[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage13); }
        villageImage.src = 'bitmaps/village14.png';
        villageStage += 1;
        asCount -= priceBuild13[0];
        asSpent += priceBuild13[0];
        ingotsCopperCount -= priceBuild13[1];
        mountainSpentCount[2] += priceBuild13[1];
        stoneCount -= priceBuild13[2];
        mountainSpentCount[0] += priceBuild13[2];

        rentPrice += 10;
        tourismValue += 16;
        actualBushelPrice -= 1200;
        player.hasBank = true;
        SetMarketPrice();
    }
    else if (villageStage == 14 && asCount >= priceBuild14[0] && beadsCount >= priceBuild14[1] && stoneCount >= priceBuild14[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage14); }
        villageImage.src = 'bitmaps/village15.png';
        villageStage += 1;
        asCount -= priceBuild14[0];
        asSpent += priceBuild14[0];
        beadsCount -= priceBuild14[1];
        stoneCount -= priceBuild14[2];
        mountainSpentCount[0] += priceBuild14[2];

        rentPrice += 1;
        tourismValue += 8;
        taxesValue += 2;
        scrollsSpawn = true;
    }
    else if (villageStage == 15 && asCount >= priceBuild15[0] && stoneCount >= priceBuild15[1]) {
        if (player.likesStory) { GameEvent(displayStoryVillage15); }
        villageStage += 1;
        asCount -= priceBuild15[0];
        asSpent += priceBuild15[0];
        stoneCount -= priceBuild15[1];
        mountainSpentCount[0] += priceBuild15[1];

        rentPrice += 8;
        tourismValue += 4;
        taxesValue += 28;
        actualBushelPrice -= 50;
        SetMarketPrice();
        ratsSpawn = true;
    }
    else if (villageStage == 16 && asCount >= priceBuild16[0] && bushelCount[1] > priceBuild16[1] && boardsCount >= priceBuild16[2] && stoneCount >= priceBuild16[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage16); }
        villageImage.src = 'bitmaps/village17.png';
        villageStage += 1;
        asCount -= priceBuild16[0];
        asSpent += priceBuild16[0];
        bushelCount[1] -= priceBuild16[1];
        spentCount[1] += priceBuild16[1];
        boardsCount -= priceBuild16[2];
        forestSpentCount[1] += priceBuild16[2];
        stoneCount -= priceBuild16[3];
        mountainSpentCount[0] += priceBuild16[3];

        rentPrice += 16;
        tourismValue += 22;
        taxesValue += 32;
        actualBushelPrice -= 50;
        SetMarketPrice();
        cityWalls = true;
    }
    else if (villageStage == 17 && asCount >= priceBuild17[0] && beadsCount >= priceBuild17[1] && scrollsCount >= priceBuild17[2] && ingotsBronzeCount >= priceBuild17[3] && boardsCount >= priceBuild17[4] && stoneCount >= priceBuild17[5]) {
        if (player.likesStory) { GameEvent(displayStoryVillage17); }
        villageImage.src = 'bitmaps/village18.png';
        villageStage += 1;
        asCount -= priceBuild17[0];
        asSpent += priceBuild17[0];
        beadsCount -= priceBuild17[1];
        scrollsCount -= priceBuild17[2];
        ingotsBronzeCount -= priceBuild17[3];
        mountainSpentCount[4] += priceBuild17[3];
        boardsCount -= priceBuild17[4];
        forestSpentCount[1] += priceBuild17[4];
        stoneCount -= priceBuild17[5];
        mountainSpentCount[0] += priceBuild17[5];

        rentPrice += 12;
        tourismValue += 48;
        taxesValue += 16;
        player.canBuild = false;

        player.canWin = true;
        AnimateWinButton();
    }
    UpdateDisplay();
}



function EstablishTradeRoute() {
    if (!player.canExport && asCount >= pricePort0 && player.hasOliveMill) {
        if (player.likesStory) { GameEvent(displayStoryPort00); }
        asCount -= pricePort0;
        asSpent += pricePort0;
        player.canExport = true;
        player.canExportOil = true;
    }
    else if (player.canExport && asCount >= pricePort1 && player.hasBrewery && !player.canExportBeer) {
        if (player.likesStory) { GameEvent(displayStoryPort01); }
        asCount -= pricePort1;
        asSpent += pricePort1;
        player.canExportBeer = true;
    }
    else if (player.canExport && asCount >= pricePort2 && player.hasWinery && !player.canExportWine) {
        if (player.likesStory) { GameEvent(displayStoryPort02); }
        asCount -= pricePort2;
        asSpent += pricePort2;
        player.canExportWine = true;
    }
    else if (player.canExport && asCount >= pricePort3 && player.hasKitchen && !player.canExportSyrup) {
        if (player.likesStory) { GameEvent(displayStoryPort03); }
        asCount -= pricePort3;
        asSpent += pricePort3;
        player.canExportSyrup = true;
    }
    else if (player.canExport && asCount >= pricePort4 && player.hasPress && !player.canExportJuice) {
        if (player.likesStory) { GameEvent(displayStoryPort04); }
        asCount -= pricePort4;
        asSpent += pricePort4;
        player.canExportJuice = true;
    }
    else if (player.canExport && asCount >= pricePort5 && player.hasGreenhouse && !player.canExportFigs) {
        if (player.likesStory) { GameEvent(displayStoryPort05); }
        asCount -= pricePort5;
        asSpent += pricePort5;
        player.canExportFigs = true;
        player.hasMerchantGuildWrit = true;
    }
    else if (player.canExport && asCount >= pricePort6 && player.hasAtelier && !player.canExportTrinkets) {
        if (player.likesStory) { GameEvent(displayStoryPort06); }
        asCount -= pricePort6;
        asSpent += pricePort6;
        player.canExportTrinkets = true;
        player.seesExportButton = false;
    }
    UpdateDisplay();
}



function EstablishShippingLanes() {
    if (player.hasMerchantGuildWrit && player.hasBank) {
        if (player.likesStory) { GameEvent(displayStoryPort07); }
        player.canImport = true;
        player.canImportTin = true;
        player.canHireBronzeworkers = true;
        player.seesMountainButton = true;
        player.seesImportButton = false;
    }
    UpdateDisplay();
}



function SellGrain(grainType) {
    const adjustedPrice = (currentBushelPrice - currentBarleyAdjustment) * 10;

    if (grainType == 0 && bushelCount[0] > (bushelBulkCount * 10)) {
        bushelCount[0] -= (bushelBulkCount * 10);
        soldCount[0] += (bushelBulkCount * 10);
        asCount += (currentBushelPrice * 10);
        marketLifetimeRevenue += (currentBushelPrice * 10);
        UpdateDisplay();
    }
    else if (grainType == 1 && asCount >= adjustedPrice) {
        bushelCount[1] += bushelBulkCount * 10;
        asCount -= adjustedPrice;
        asSpent += adjustedPrice;
        UpdateDisplay();
    }
}



function Win() {
    player.canWin = false;
    player.hasWon = true;
    if (player.likesStory) { GameEvent(displayWinMessage); }
    //window.open(winTarget, 'PRAEDIUM_requested_new_tab');
    player.saṃsāra += null; // namasté, pendejos 🖕🧘‍♂️🖕
    UpdateDisplay();
}



function Info() {
    SystemMessage(displayInfoFinal);
}



//function Help() {
//    let hintedElement = null; <- this needs to go to init, of course
//    hintedElement = buttonTill;
//    //keep track of what WOULD need a hint. so hintLevel is 0, successfully pressing Till for the very
//    //first time changes it to 1, so the game just keeps track of what SHOULD be the hintedElement target
//
//    if (!player.seesHint) {
//        player.seesHint = true;
//        hintedElement.classList.add('hinted');
//        alert('Hints are not working yet 😬 click [?] again to turn off');
//    }
//    else {
//        player.seesHint = false;
//        hintedElement.classList.remove('hinted');
//    }
//    /*
//    maybe on ANY click or tap of any kind, it turns off the hint? so just have 
//    a global clicker catch, like....... just onClick in a general sense, not the onClick
//    of any specific element
//    like how the wheat sparkle updates on every keypress... there's a general keyPress catch,
//    then a function that sorts it out, there's most likely something similar for click/taps 
//    */
//}



function SummonModsWindow() {
    player.seesModsWindow = true;
    player.isGod = false; // so one can type in the text box without keypresses triggering debug functions, and you have to be God to even see this window, so it will be turned back on in DismissModsWindow();
    UpdateDisplay();
    textareaModCode.focus({ focusVisible: true });
    divOverlayMods.scrollTo(0, 0);
}



function SubmitModCode() {
    const grabbedModCode = textareaModCode.value;
    RecordModCode(grabbedModCode);
}



function DismissModsWindow() {
    player.seesModsWindow = false;
    player.isGod = true;
    UpdateDisplay();
}



function SummonOptions() {
    player.seesOptions = true;
    UpdateDisplay();
    buttonOptionsDismiss.focus({ focusVisible: false });
    divOverlayOptions.scrollTo(0, 0);
}



function DismissOptions() {
    player.seesOptions = false;
    UpdateDisplay();
}



function ToggleAnimation() {
    if (toggleAnimation.checked) {
        player.likesAnimations = true;
        document.documentElement.style.setProperty('--agua', 'url(bitmaps/agua_anim.gif)');
    }
    else {
        player.likesAnimations = false;
        document.documentElement.style.setProperty('--agua', 'url(bitmaps/agua_still.gif)');
    }
}



function Legal() {
    SystemMessage(displayLegalFinal);
    window.open(legalTarget, 'PraediumRequestedWindow');
}



// End of Document