// ۞ PLAYER INPUT **********************************************************************************
// *************************************************************************************************

buttonSystemMessageDismiss.addEventListener('click', function () { DismissSystemMessage(); });
buttonSystemMessageDismiss.addEventListener('touchstart', function () { GodMenuHold(); }, { passive: true });
buttonSystemMessageDismiss.addEventListener('touchend', function () { GodMenuLift(); }, { passive: true });
buttonForewordEnglish.addEventListener('click', function () { BeginGame('English'); });
buttonForewordSpanish.addEventListener('click', function () { BeginGame('Spanish'); });
buttonForewordDismiss.addEventListener('click', function () { DismissForeword(); });
buttonGameEventDismiss.addEventListener('click', function () { DismissGameEvent(); });
buttonSubmitModCode.addEventListener('click', function () { SubmitModCode(); });
buttonModsDismiss.addEventListener('click', function () { DismissModsWindow(); });
buttonOptionsDismiss.addEventListener('click', function () { DismissOptions(); });

buttonBarterOlive.addEventListener('click', function () { BarterFruit(2); });
buttonBarterDate.addEventListener('click', function () { BarterFruit(3); });
buttonBarterFig.addEventListener('click', function () { BarterFruit(4); });
buttonBarterPom.addEventListener('click', function () { BarterFruit(5); });
buttonBarterGrape.addEventListener('click', function () { BarterFruit(6); });
buttonSellWheat.addEventListener('click', function () { SellCommodities(0); });
buttonSellBarley.addEventListener('click', function () { SellCommodities(1); });
buttonSellFlax.addEventListener('click', function () { SellCommodities(5); });
buttonSellLogs.addEventListener('click', function () { SellCommodities(2); });
buttonSellBoards.addEventListener('click', function () { SellCommodities(3); });
buttonSellStone.addEventListener('click', function () { SellCommodities(4); });
buttonBuyWheat.addEventListener('click', function () { PurchaseCommodities(0); });
buttonBuyBarley.addEventListener('click', function () { PurchaseCommodities(1); });
buttonBuyLogs.addEventListener('click', function () { PurchaseCommodities(2); });
buttonBuyBoards.addEventListener('click', function () { PurchaseCommodities(3); });
buttonBuyStone.addEventListener('click', function () { PurchaseCommodities(4); });

buttonGoHome.addEventListener('click', function () { GoHerm(); });
buttonGoFishing.addEventListener('click', function () { GoFishing(); });
buttonGoToPraediumFromRes.addEventListener('click', function () { GoToPraedium(); });
buttonGoToResidence.addEventListener('click', function () { GoToResidence(); });
buttonGoToTownship.addEventListener('click', function () { GoToTownship(); });
buttonGoToPraedium.addEventListener('click', function () { GoToPraedium(); });
buttonGoToPort.addEventListener('click', function () { GoToPort(); });
buttonGoToTownshipFromPort.addEventListener('click', function () { GoToTownship(); });

buttonOptions.addEventListener('click', function () { SummonOptions(); });
buttonEnglish.addEventListener('click', function () { Translate('English'); });
buttonSpanish.addEventListener('click', function () { Translate('Spanish'); });
buttonStar.addEventListener('click', function () { SummonModsWindow(); });
buttonQ.addEventListener('click', function () { Help(); });
buttonI.addEventListener('click', function () { Info(); });
buttonCC0.addEventListener('click', function () { Legal(); });

buttonHeirBegin.addEventListener('click', function () { HeirBegin(); });
buttonHeirChooseName.addEventListener('click', function () { HeirChooseName(); });
buttonHeirGendersLeft.addEventListener('click', function () { HeirChangeGender('previous'); });
buttonHeirGendersRight.addEventListener('click', function () { HeirChangeGender('next'); });
buttonHeirChooseGender.addEventListener('click', function () { HeirChooseGender(); });
buttonHeirChooseEthnicity.addEventListener('click', function () { HeirChooseEthnicity(); });
buttonHeirChooseTitle.addEventListener('click', function () { HeirChooseTitle(); });
buttonHeirChooseFace1.addEventListener('click', function () { HeirChooseFace(0); });
buttonHeirChooseFace2.addEventListener('click', function () { HeirChooseFace(1); });
buttonHeirChooseFace3.addEventListener('click', function () { HeirChooseFace(2); });
buttonHeirChooseFace4.addEventListener('click', function () { HeirChooseFace(3); });
buttonHeirChooseFace5.addEventListener('click', function () { HeirChooseFace(4); });
buttonHeirChooseFace6.addEventListener('click', function () { HeirChooseFace(5); });
buttonHeirChooseFace7.addEventListener('click', function () { HeirChooseFace(6); });
buttonHeirChooseFace8.addEventListener('click', function () { HeirChooseFace(7); });
buttonHeirChooseFace9.addEventListener('click', function () { HeirChooseFace(8); });
buttonHeirGoBack.addEventListener('click', function () { HeirGoBack(); });



document.body.onkeyup = function (e) {
    if (e.key == '~') {
        player.isGod = !player.isGod;
        player.likesDelay = !player.isGod;
        let theVoice = '<div id="divSoyMessage">☞ I Ain’t No Soy ☜</div>But don’t you think for one second any bets are suddenly now back *on*, Buster Brown';
        if (player.isGod) { theVoice = '<div id="divSoyMessage">☛ I Am Soy ☚</div>And that means all bets are *off*, partner'; }
        SystemMessage(theVoice);
    }

    const stepFactor = 100; // ⚠️ DEFAULT 100!
    const stepDelays = [
        0,
        10,
        10,

        1,
        1,
        1,
        1,

        10,
        10,

        1,
        1,
        1,
        1,

        10,
        1,
        10,
        10,
        1,
    ];
    let stepBegin = null;
    let stepEnd = null;

    if (player.isGod) {
        if (e.key == ' ' && localStorage.getItem(save_key) && !player.hasBegun) { StartNewGame(); }
        else if (e.key == ' ' && (player.seesForeword && !player.seesSystemMessage && !player.hasBegun)) { BeginGame('English'); }
        else if (e.key == ' ' && (player.seesForeword && !player.seesSystemMessage && player.hasBegun)) { DismissForeword(); }

        if (e.key == '1' && !e.altKey && player.canTill) { PlotTill(); }
        if (e.key == '2' && !e.altKey && player.canPlant) { PlotPlant(); }
        if (e.key == '3' && !e.altKey && player.canWater) { PlotWater(); }
        if (e.key == '4' && !e.altKey && player.canHarvest) { PlotHarvest(); }

        if (e.key == '5' && !e.altKey) { AdvanceGame(); }
        function AdvanceGame() {
            if (player.canRentWarehouse) { RentWarehouse(); }
            else if (player.canBuyForest) { BuyForest(); }
            else if (farmStage == 11 && !player.canLog) { ForestEvents(); }
            else if (farmStage == 11 && !player.canSaw) { ForestEvents(); }
            else if (player.canBuyMountain) { BuyMountain(); }
            else if (player.canBuyLand) { BuyLand(); }
            else if (player.canFound) { Found(); }
            else if (player.canBuild) { Build(); }
            else if (player.canBuyNewFarm && !player.hasNewFarm) { BuyNewFarm(); }
            else if (player.canBuyNewFarm && !player.hasFlaxFarm) { BuyNewFarm(); }
            else if (player.hasFoundCopperEvidence && !player.hasFoundMine) { MountainEvents(); }
            else if (player.hasFoundMine && !player.canMine) { MountainEvents(); }
            else if (player.canMine && !player.canSmelt) { MountainEvents(); }
            else if (player.canHireBronzeworkers) { MountainEvents(); }
            else if (player.hasFoundCrystalEvidence && !player.hasHiredGemcutters) { MountainEvents(); }
            else { ImproveResidence(); }
        }

        if (e.key == '6' && !e.altKey && player.canHire) {
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

        if (e.key == '7' && !e.altKey) { EstablishTradeRoute(); }
        if (e.key == '8' && !e.altKey) { EstablishShippingLanes(); }

        if (e.key == '9' && !e.altKey) { ConsultOracle(); }

        if (e.key == '0' && !e.altKey) { SummonOptions(); }

        if (e.key == '-' && !e.altKey) { ShowToast(); }
        if (e.key == '=' && !e.altKey) { Achievement(); }

        if (e.key == '!' && player.canBarter) { BarterFruit(2); }
        if (e.key == '@' && player.canBarter) { BarterFruit(3); }
        if (e.key == '#' && player.canBarter) { BarterFruit(4); }
        if (e.key == '$' && player.canBarter) { BarterFruit(5); }
        if (e.key == '%' && player.canBarter) { BarterFruit(6); }
        if (e.key == '^' && player.canBarter) { BarterAll(); }

        // & AVAILABLE
        // * AVAILABLE
        // ( AVAILABLE
        // ) AVAILABLE
        // _ AVAILABLE

        if (e.key == '+') { DetermineDevice(true); }

        if (e.key == '1' && e.altKey && player.canSell) { SellCommodities(0); }
        if (e.key == '2' && e.altKey && player.canSell) { SellCommodities(1); }
        if (e.key == '3' && e.altKey && player.canSell) { SellCommodities(5); }
        if (e.key == '4' && e.altKey && player.canSell) { SellCommodities(2); }
        if (e.key == '5' && e.altKey && player.canSell) { SellCommodities(3); }
        if (e.key == '6' && e.altKey && player.canSell) { SellCommodities(4); }
        if (e.key == '7' && e.altKey && player.canSell) { SellLivestock(); }
        if (e.key == '8' && e.altKey && player.canSell) { PurchaseCommodities(0); }
        if (e.key == '9' && e.altKey && player.canSell) { PurchaseCommodities(1); }
        if (e.key == '0' && e.altKey && player.canSell) { PurchaseCommodities(2); }
        if (e.key == '-' && e.altKey && player.canSell) { PurchaseCommodities(3); }
        if (e.key == '=' && e.altKey && player.canSell) { PurchaseCommodities(4); }
        if (e.key == ']' && e.altKey && player.canSell) { PurchaseLivestock(); }

        if (e.key == 'z' && player.isAt == 'Residence') { GoFishing(); }
        else if (e.key == 'x' && player.canGoHome && player.isAt == 'Praedium') { GoToResidence(); }
        else if (e.key == 'x' && player.isAt == 'Creek') { GoHerm(); }
        else if (e.key == 'c' && (player.isAt == 'Residence' || player.isAt == 'Township')) { GoToPraedium(); }
        else if (e.key == 'v' && player.seesVillage && (player.isAt == 'Praedium' || player.isAt == 'Port')) { GoToTownship(); }
        else if (e.key == 'b' && player.canSell && player.isAt == 'Township') { GoToPort(); }
        if (e.key == '[' && !e.altKey && player.isAt == 'Map') { MapChangeTarget('previous'); }
        if (e.key == ']' && !e.altKey && player.isAt == 'Map') { MapChangeTarget('next'); }
        if (e.key == '\\' && !e.altKey && player.isAt == 'Map') { VisitProvince(); }
        if (e.key == '|' && !e.altKey && player.isAt != 'Creek' && player.isAt != 'Wharf' && player.isAt != 'Arena') { ReturnToMapView(); }
        if (e.key == '|' && !e.altKey && player.isAt == 'Creek') { GoHerm(); }
        if (e.key == '|' && !e.altKey && player.isAt == 'Wharf') { LeaveTheStore(); }
        if (e.key == '|' && !e.altKey && player.isAt == 'Arena') { LeaveArena(); }

        // { AVAILABLE
        // } AVAILABLE

        if (e.key == 'G') { // 🚨🚨🚨 USE WITH CAUTION!!! ONLY WORKS AT START OF GAME, AND IN *EXACT* SEQUENCE 🚨🚨🚨
            if (e.altKey) {
                console.log('==================================================');
                console.log('🚨 COMMENCING AUTOMATIC WALKTHROUGH SEQUENCE! 🚨');
                console.log('⚠️ (Please do not touch anything until complete!)');
                if (toggleMusic.checked) { toggleMusic.checked = false; }
                ToggleMusic();
                console.log('🔇 (🎵🚫 Music Disabled)');
                console.log('🕰️ Game time at start: Y' + year + ' W' + week);
                stepBegin = new Date();
                console.log('🕰️ Real time at start: ' + stepBegin);
                AutoWalkthrough();
            }
            else { WalkthroughSteps(); }
        }
        function AutoWalkthrough() {
            if (debugCounter > 0) {
                console.log('-----------------------------------');
                console.log('⌛ Waiting For STEP ' + debugCounter + ' Complete!');
            }

            if (debugCounter == 8) {
                console.log('-----------------------------------');
                console.log('🛎️ Initiating Barter Check Loop!');
                BarterCheck();
            }
            else {
                console.log('-----------------------------------');
                console.log('🛎️ Automatically Performing STEP ' + debugCounter);
                WalkthroughSteps();
                if (debugCounter < stepDelays.length) {
                    console.log('-----------------------------------');
                    console.log('🛎️ STEP ' + (debugCounter - 1) + ' Complete!');
                    console.log('-----------------------------------');
                    console.log('⏳ Now Waiting For STEP ' + debugCounter + '...');
                    console.log('-----------------------------------');
                    console.log('⏲️ Waiting For ' + (stepDelays[debugCounter]) * stepFactor + 'ms (STEP ' + debugCounter + ' Delay: ' + stepDelays[debugCounter] + 'ms * Factor: ' + stepFactor + ')');
                    setTimeout(AutoWalkthrough, (stepDelays[debugCounter]) * stepFactor);
                }
                else {
                    console.log('-----------------------------------');
                    console.log('🛎️ STEP ' + (debugCounter - 1) + ' Complete!');
                    console.log('-----------------------------------');
                    //alert('🚨 AUTOMATIC WALKTHROUGH SEQUENCE COMPLETE! 🚨');
                    console.log('🚨 AUTOMATIC WALKTHROUGH SEQUENCE COMPLETE! 🚨');
                    console.log('⚠️ (You are now free to move about the cabin)');
                    console.log('🛎️ debugCounter Current Value: ' + debugCounter);
                    console.log('🕰️ Game time at end: Y' + year + ' W' + week);
                    stepEnd = new Date();
                    console.log('🕰️ Real time at end: ' + stepEnd);
                    console.log('⏱️ Elapsed time for total sequence: ' + (stepEnd - stepBegin) + 'ms');
                    console.log('==================================================');
                }
            }
        }
        function BarterCheck() {
            if (!player.canBarter) {
                console.log('🙂‍↔️ Can not barter!');
                setTimeout(BarterCheck, 1000);
            }
            else {
                console.log('🙂‍↕️ Barter is OK!');
                console.log('-----------------------------------');
                console.log('🛎️ Automatically Performing: STEP ' + debugCounter);
                WalkthroughSteps();
                console.log('-----------------------------------');
                console.log('🛎️ STEP ' + (debugCounter - 1) + ' Complete!');
                console.log('-----------------------------------');
                console.log('⏳ Now Waiting For: STEP ' + debugCounter);
                console.log('-----------------------------------');
                console.log('⏲️ Waiting For: ' + (stepDelays[debugCounter]) * stepFactor + 'ms (STEP ' + debugCounter + ' Delay: ' + stepDelays[debugCounter] + 'ms * Factor: ' + stepFactor + ')');
                setTimeout(AutoWalkthrough, (stepDelays[debugCounter]) * stepFactor);
            }
        }
        function WalkthroughSteps() {
            console.log('===================================');
            console.log('📆 STEP ' + debugCounter);
            if (debugCounter == 0) {
                player.likesStory = false;
                StartTime();
                StartTime();
                PlotTill();
                PlotPlant();
                PlotWater();
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 fast-forward time;');
                console.log('🆗 first round of farming tasks;');
                console.log('🆗 wait for first growth; (⏰❗)');
            }
            else if (debugCounter == 1) {
                player.likesStory = false;
                PlotHarvest();
                PlotTill();
                PlotPlant();
                PlotWater();
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 second round of farming tasks;');
                console.log('🆗 wait for second growth; (⏰❗)');
            }
            else if (debugCounter == 2) {
                player.likesStory = false;
                PlotHarvest();
                StartTime();
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 pause time; (⚠️ regular gameplay can resume from here)');
            }
            else if (debugCounter == 3) {
                player.likesStory = false;
                setValues(1000000000);
                for (let i = 0; i < 25; i++) { AdvanceGame(); } // completely upgrade praedium
                HireAccountant();
                for (let i = 0; i < 36; i++) { HireHand(); }
                AdvanceGame(); // buy town
                setValues(5800858008);
                PauseTime();
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 completely upgrade praedium tab;');
                console.log('🆗 set dummy name;');
                console.log('🆗 hire all staff;');
                console.log('🆗 buy town;');
            }
            else if (debugCounter == 4) {
                player.likesStory = false;
                for (let i = 0; i < 35; i++) { AdvanceGame(); } // upgrade village to capital
                setValues(5800858008);
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 completely upgrade township tab;');
            }
            else if (debugCounter == 5) {
                player.likesStory = false;
                for (let i = 0; i < 16; i++) { AdvanceGame(); } // ugprade residence to mansion + purchase both new farms
                setValues(5800858008);
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 upgrade residence to mansion;');
                console.log('🆗 purchase both new farms;');
            }
            else if (debugCounter == 6) { // discover mine
                player.likesStory = false;
                StartTime();
                StartTime();
                StartTime();
                debugCounter++;
                console.log('🆗 start time;');
                console.log('🆗 fast-forward time;');
                console.log('🆗 wait to discover mine; (⏰❗)');
            }
            else if (debugCounter == 7) {
                PauseTime();
                for (let i = 0; i < 3; i++) { AdvanceGame(); } // mine & foundry
                for (let i = 0; i < 7; i++) { EstablishTradeRoute(); }
                EstablishShippingLanes(); // tin
                AdvanceGame(); // bronzeworkers
                StartTime();
                StartTime();
                StartTime();
                setValues(5800858008);
                debugCounter++;
                console.log('🆗 upgrade mountain to bronze;');
                console.log('🆗 unlock all trade;');
                console.log('🆗 wait for barter; (⏰❗)');
            }
            else if (debugCounter == 8) {
                PauseTime();
                AdvanceGame(); // crystals
                setValues(5800858008);
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 pause time;');
                console.log('🆗 completely upgrade mountain;');
            }
            else if (debugCounter == 9) {
                player.likesStory = false;
                AdvanceGame(); // bees
                AdvanceGame(); // raisins
                EstablishShippingLanes(); // salt
                AdvanceGame(); // hard tack
                AdvanceGame(); // rations
                AdvanceGame(); // cottage
                AdvanceGame(); // bandages
                setValues(5800858008);
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 completely upgrade residence tab;');
            }
            else if (debugCounter == 10) {
                BurnItDown();
                FinalReset();
                debugCounter++;
                console.log('🆗 zero all values;');
                console.log('🆗 force conservative values; (⚠️ regular gameplay can resume from here)');
            }
            else if (debugCounter == 11) {
                player.likesStory = false;
                ChooseHeir();
                HeirBegin();
                HeirChooseName();
                HeirChooseGender();
                HeirChooseEthnicity();
                HeirChooseTitle();
                HeirChooseFace(0);
                HeirConfirmAll(false);
                debugCounter++;
                player.likesStory = true;
                console.log('🆗 install puppet heir on the throne;');
            }
            else if (debugCounter == 12) { // updates military counts
                player.likesStory = false;
                StartTime();
                StartTime();
                StartTime();
                debugCounter++;
                console.log('🆗 start time;');
                console.log('🆗 fast-forward time;');
                console.log('🆗 wait for military values to update; (⏰❗)');
            }
            else if (debugCounter == 13) {
                PauseTime();
                ShepherdsEvents();
                ShepherdsEvents();
                ShepherdsEvents();
                MinersEvents();
                MinersEvents();
                MinersEvents();
                player.likesStory = true;
                debugCounter++;
                console.log('🆗 pause time;');
                console.log('🆗 perform all diplomacy;');
            }
            else if (debugCounter == 14) {
                player.likesStory = false;
                StartTime();
                StartTime();
                StartTime();
                debugCounter++;
                console.log('🆗 start time;');
                console.log('🆗 fast-forward time;');
                console.log('🆗 wait for Alavi invite; (⏰❗)');
            }
            else if (debugCounter == 15) {
                PauseTime();
                MapChangeTarget('next');
                MapChangeTarget('next');
                VisitProvince();
                StartTime();
                StartTime();
                StartTime();
                debugCounter++;
                console.log('🆗 visit Alavi;');
                console.log('🆗 wait for Alavi introduction; (⏰❗)');
            }
            else if (debugCounter == 16) {
                PauseTime();
                FarmersEvents(); // meet with your advisors
                BurnItDown();
                FinalReset();
                player.likesStory = true;
                debugCounter++;
                console.log('🆗 pause time;');
                console.log('🆗 meet with your advisors;');
                console.log('🆗 zero all values;');
                console.log('🆗 force conservative values;');
            }
            else if (debugCounter == 17) {
                StartTime();
                debugCounter++;
                RecordProgress();
                console.log('🆗 save game;');
                console.log('🆗 start time; (⚠️ regular gameplay can resume from here)');
            }
            else if (debugCounter == 18) {
                console.log('🚨 SEQUENCE COMPLETE!');
                alert('🚨 SEQUENCE COMPLETE!');
            }
        }
        if (e.key == 'F') { BurnItDown(); }
        function BurnItDown() {
            console.log('🚨 ZERO ALL VALUES!');
            ZeroArray(bushelCount);
            ZeroArray(seededCount);
            ZeroArray(farmedCount);
            ZeroArray(harvestedCount);
            ZeroArray(spentCount);
            ZeroArray(purchasedCount);
            ZeroArray(soldCount);
            weeksOfHoliday = 0;
            manweeksLost = 0;
            ZeroArray(paidOutWheat);
            logsCount = 0;
            boardsCount = 0;
            ZeroArray(forestProducedCount);
            ZeroArray(forestSpentCount);
            ZeroArray(forestPurchasedCount);
            ZeroArray(forestSoldCount);
            stoneCount = 0;
            crystalsCount = 0;
            oreCopperCount = 0;
            ingotsCopperCount = 0;
            ingotsTinCount = 0;
            ingotsBronzeCount = 0;
            ZeroArray(mountainProducedCount);
            ZeroArray(mountainSpentCount);
            ZeroArray(mountainPurchasedCount);
            ZeroArray(mountainSoldCount);
            ZeroArray(residenceIngredientInStockCount);
            residenceIngredientInStockCount[9] = [0, 0,];
            residenceIngredientInStockCount[14] = [0, 0,];
            ZeroArray(residenceIngredientConsumedCount);
            residenceIngredientConsumedCount[9] = [0, 0,];
            residenceIngredientConsumedCount[14] = [0, 0,];
            ZeroArray(residenceInStockCount);
            ZeroArray(residenceProducedCount);
            ZeroArray(residenceSpentCount);
            saltSpent = 0;
            ZeroArray(residenceShippedCount);
            saltShipped = 0;
            residentsCount = 0;
            asCount = 0;
            asSpent = 0;
            commercialLifetimeSpend = 0;
            commoditiesLifetimeSpend = 0;
            rentLifetimeCollected = 0;
            taxesLifetimeCollected = 0;
            lifetimeSpentOnCats = 0;
            clowdersOfCatsReleased = 0;
            horsesCount = 0;
            horsesEaten = 0;
            beadsCount = 0;
            trophiesCount = 0;
            tourismLifetimeProfit = 0;
            scrollsCount = 0;
            militaryLifetimeCost = 0;
            medicalLifetimeCost = 0;
            patientsCount = 0;
            totalPatientsSeen = 0;
            pilgrimsCount = 0;
            pilgrimsLifetimeCount = 0;
            pilgrimLifetimeIncome = 0;
            relicCount = 0;
            ghostsCount = 0;
            marketLifetimeRevenue = 0;
            tributeLifetimePaid = 0;
            ZeroArray(shipmentProfits);
            ZeroArray(shipmentCosts);
            interestLifetimeCollected = 0;
            ratsCount = 1;
            ZeroArray(shepherdsInventory);
            ZeroArray(minersInventory);
            filetCount = 0;
            ZeroArray(filetsSpent);
            lifetimeFishEarnings = 0;
            ZeroArray(caughtFishSession);
            ZeroArray(caughtFishLifetime);
            fishMissCountLifetime = 0;
            fishMissCountSession = 0;
            fishEscapeCountLifetime = 0;
            fishEscapeCountSession = 0;
            totalCatches = 0;
            ZeroArray(lifetimeFishermanCaught);
            lifetimeFishermenEarnings = 0;
            stockfishCount = 0;
            lifetimeStockfishProduced = 0;
            lifetimeStockfishProfit = 0;
            lifetimeStockfishShipped = 0;
            lesArtsLifetimeCollected = 0;
            patronsCount = 0;
            totalPatronsHosted = 0;
            statecraftLifetimeSpend = 0;
            treasuresCount = 0;
            pegasiCount = 0;
            messiahCount = 0;
            meditateCount = 0;
            prayersCount = 0;
            arenaTotalBet = 0;
            arenaTotalWin = 0;
            arenaTotalLoss = 0;
            ZeroArray(arenaWins);
            ZeroArray(arenaLosses);
        }
        if (e.key == 'g') { FinalReset(); }
        function FinalReset() {
            console.log('🚨 FORCE CONSERVATIVE VALUES!');
            bushelCount[0] = 1000000;
            bushelCount[1] = 1000000;
            bushelCount[7] = 1000000;
            bushelCount[2] = 1000;
            bushelCount[3] = 1000;
            bushelCount[4] = 1000;
            bushelCount[5] = 1000;
            bushelCount[6] = 1000;
            logsCount = 100000;
            boardsCount = 100000;
            stoneCount = 100000;
            crystalsCount = 10000;
            residenceInStockCount[8] = 10000;
            oreCopperCount = 10000;
            ingotsCopperCount = 10000;
            ingotsTinCount = 10000;
            ingotsBronzeCount = 10000;
            asCount = 1000000000;
            residentsCount = residentsMax;
            horsesCount = 50;
            beadsCount = 10000;
            trophiesCount = 100;
            scrollsCount = 1000;
            filetCount = 1000;
            caughtFishLifetime[0] = 50;
            caughtFishLifetime[2] = 50;
            totalCatches = 100;
        }

        if (e.key == 'e') { Translate('English'); }
        if (e.key == 'E') { Translate('English', false); }
        if (e.key == 'r') { Translate('Spanish'); }
        if (e.key == 'R') { Translate('Spanish', false); }

        if (e.code == 'KeyA') {
            if (e.shiftKey) {
                if (residentsCount != 1000) { residentsCount = 1000; }
                else { residentsCount = 0; }
            }
            else if (e.altKey) { residentsCount -= 1; }
            else { residentsCount += 1; }
        }
        if (e.key == 'D') {
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
                FillArray(bushelCount, amount);
                logsCount = amount;
                boardsCount = amount;
                stoneCount = amount;
                crystalsCount = amount;
                oreCopperCount = amount;
                ingotsCopperCount = amount;
                ingotsTinCount = amount;
                ingotsBronzeCount = amount;
                asCount = amount;
                horsesCount = amount;
                beadsCount = amount;
                trophiesCount = amount;
                scrollsCount = amount;
                ghostsCount = amount;
                relicCount = amount;
                FillArray(residenceInStockCount, amount);
                residenceIngredientInStockCount[14][1] = amount;
                FillArray(shepherdsInventory, amount);
                FillArray(minersInventory, amount);
                filetCount = amount;
                stockfishCount = amount;
                pegasiCount = amount;
            }
            else if (e.altKey) {
                GooseArray(bushelCount, -amount);
                logsCount -= amount;
                boardsCount -= amount;
                stoneCount -= amount;
                crystalsCount -= amount;
                oreCopperCount -= amount;
                ingotsCopperCount -= amount;
                ingotsTinCount -= amount;
                ingotsBronzeCount -= amount;
                asCount -= amount;
                horsesCount -= amount;
                beadsCount -= amount;
                trophiesCount -= amount;
                scrollsCount -= amount;
                ghostsCount -= amount;
                relicCount -= amount;
                GooseArray(residenceInStockCount, -amount);
                residenceIngredientInStockCount[14][1] -= amount;
                GooseArray(shepherdsInventory, -amount);
                GooseArray(minersInventory, -amount);
                filetCount -= amount;
                stockfishCount -= amount;
                pegasiCount -= amount;
            }
            else {
                GooseArray(bushelCount, amount);
                logsCount += amount;
                boardsCount += amount;
                stoneCount += amount;
                crystalsCount += amount;
                oreCopperCount += amount;
                ingotsCopperCount += amount;
                ingotsTinCount += amount;
                ingotsBronzeCount += amount;
                asCount += amount;
                horsesCount += amount;
                beadsCount += amount;
                trophiesCount += amount;
                scrollsCount += amount;
                ghostsCount += amount;
                relicCount += amount;
                GooseArray(residenceInStockCount, amount);
                residenceIngredientInStockCount[14][1] += amount;
                GooseArray(shepherdsInventory, amount);
                GooseArray(minersInventory, amount);
                filetCount += amount;
                stockfishCount += amount;
                pegasiCount += amount;
            }
        }

        if (e.key == 's') { player.likesStory = false; }
        if (e.key == 'S') { player.likesStory = true; }

        if (e.key == 'q') { PauseTime(); }
        if (e.code == 'KeyT') {
            if (e.shiftKey) { StartTime(true); }
            else { StartTime(); }
        }

        if (e.key == '/') { CollateGameStateReport(true); }
        if (e.key == '?') { ToggleRecords(); }

        UpdateDisplay();
        UpdateFishDisplay();
        UpdateArenaDisplay();
    }
}



// ۞ PLAYER ACTIONS ********************************************************************************
// *************************************************************************************************

function ToggleRecords() {
    player.likesRecords = !player.likesRecords;
    UpdateDisplay();
}



function BeginGame(language) {
    Translate(language, false);
    player.hasBegun = true;
    JumpToTopPlease();
    UpdateDisplay();
    if (player.likesMusic) { audioTheme.play(); }
}



function DismissSystemMessage() {
    player.seesSystemMessage = false;
    godMenuCounter++;
    UpdateDisplay();
}



function GodMenuHold() {
    godHoldToggle = true;
    if (godMenuTimer != null) { clearTimeout(godMenuTimer); }
    godMenuTimer = setTimeout(() => {
        if (godHoldToggle && godMenuCounter > 2) { SummonGodMenu(); }
    }, 10000);
}



function GodMenuLift() {
    godHoldToggle = false;
}



function DismissForeword() {
    player.seesForeword = false;
    player.canTill = true;
    StartTime();
    JumpToTopPlease();
    UpdateDisplay();
}



function DismissGameEvent() {
    if (player.canDismissEvent) {
        if (gameSpeed == 'paused' && player.isAt != 'Creek' && player.isAt != 'Wharf' && player.isAt != 'Arena' && player.isAt != 'Hike' && player.isAt != 'Workshop' && player.isAt != 'Temple' && player.isAt != 'Oracle' && player.isAt != 'Stage') { StartTime(); }
        player.seesGameEvent = false;
        UpdateDisplay();
    }
}



function PlotTill(robota = false) {
    if (hintLevel == 0 || hintLevel == 4) { hintLevel++; }

    if (farmStage == 0 && !player.canPlant) {
        player.canPlant = true;
        player.seesInventory = true;
        if (player.likesStory) { GameEvent(displayStoryFirstTill, null, true, false); }
    }

    let taskComplete = false;

    if (player.hasFlaxFarm) {
        let plotSearchResult = FindPlot(0, 'flax');
        if (plotSearchResult.row != -1) {
            arrayFlaxPlots[plotSearchResult.row][plotSearchResult.col] = 1;
            taskComplete = true;
            tillCount++;
            if (!robota) { UpdateDisplay(); }
        }
    }

    if (!taskComplete) {
        let plotSearchResult = FindPlot(0, 'cereals');
        if (plotSearchResult.row != -1) {
            arrayFarmPlots[plotSearchResult.row][plotSearchResult.col] = 1;
            taskComplete = true;
            tillCount++;
            if (!robota) { UpdateDisplay(); }
        }
    }

    if (taskComplete && tillCount == 25 && !player.seesForest && player.likesStory) { GameEvent('<span class="icon BrokenHoe inlineIcon quadrupleSize"></span><br><br>' + displayStoryBrokenHoe); }

    return taskComplete;
}



function PlotPlant(robota = false) {
    if (hintLevel == 1 || hintLevel == 5) { hintLevel++; }

    if (farmStage == 0 && !player.canWater) {
        player.canWater = true;
        if (player.likesStory) { GameEvent(displayStoryFirstPlant, null, true, false); }
    }

    let taskComplete = false;
    let foundRow = '';
    let foundCol = '';
    let targetArray = arrayFarmPlots;

    if (bushelCount[7] >= plantCost && player.hasFlaxFarm) {
        let plotSearchResult = FindPlot(1, 'flax');
        if (plotSearchResult.row != -1) {
            taskComplete = true;
            foundRow = plotSearchResult.row;
            foundCol = plotSearchResult.col;
            targetArray = arrayFlaxPlots;
            if (!player.isDegreeless) { bushelCount[7] -= plantCost; }
            seededCount[2] += plantCost;
        }
    }

    if (bushelCount[0] >= plantCost && !taskComplete) {
        let plotSearchResult = FindPlot(1, 'wheat');
        if (plotSearchResult.row != -1) {
            taskComplete = true;
            foundRow = plotSearchResult.row;
            foundCol = plotSearchResult.col;
            if (!player.isDegreeless) { bushelCount[0] -= plantCost; }
            seededCount[0] += plantCost;
            if (seededCount[0] == 5 && !player.seesForest && player.likesStory) { GameEvent(displayStoryRudeJerk); }
        }
    }

    if (bushelCount[1] >= plantCost && !taskComplete) {
        let plotSearchResult = FindPlot(1, 'barley');
        if (plotSearchResult.row != -1) {
            taskComplete = true;
            foundRow = plotSearchResult.row;
            foundCol = plotSearchResult.col;
            if (!player.isDegreeless) { bushelCount[1] -= plantCost; }
            seededCount[1] += plantCost;
        }
    }

    if (taskComplete) {
        targetArray[foundRow][foundCol] = 2;
        if (!robota) { UpdateDisplay(); }
    }

    return taskComplete;
}



function PlotWater(robota = false) {
    if (hintLevel == 2 || hintLevel == 6) { hintLevel++; }

    if (farmStage == 0 && !player.canHarvest) {
        player.canHarvest = true;
        if (player.likesStory) { GameEvent(displayStoryFirstWater, null, true, false); }
    }

    let taskComplete = false;

    if (player.hasFlaxFarm) {
        let plotSearchResult = FindPlot(2, 'flax');
        if (plotSearchResult.row != -1) {
            arrayFlaxPlots[plotSearchResult.row][plotSearchResult.col] = 3;
            taskComplete = true;
            if (!robota) { UpdateDisplay(); }
        }
    }

    if (!taskComplete) {
        let plotSearchResult = FindPlot(2, 'cereals');
        if (plotSearchResult.row != -1) {
            arrayFarmPlots[plotSearchResult.row][plotSearchResult.col] = 3;
            taskComplete = true;
            if (!robota) { UpdateDisplay(); }
        }
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
        const originalBounty = bounty;
        if (player.hasWinery) {
            const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[3]);
            residenceIngredientInStockCount[3] += workshopShare;
            residenceIngredientConsumedCount[3] += workshopShare;
            bounty = bounty - workshopShare;
        }
        if (player.hasRaisins) {
            const workshopShare = Math.floor(originalBounty * residenceIngredientWorkshopPortion[10]);
            residenceIngredientInStockCount[10] += workshopShare;
            residenceIngredientConsumedCount[10] += workshopShare;
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

    if (!taskComplete && player.hasFlaxFarm) {
        let plotSearchResult = FindPlot(14, 'flax');
        if (plotSearchResult.row != -1) {
            arrayFlaxPlots[plotSearchResult.row][plotSearchResult.col] = 0;
            let bounty = FindWholeRandom(yieldMin, yieldMax) * flaxFactor;
            harvestedCount[7] += bounty;
            if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
            if (player.hasCottage) {
                const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[12]);
                residenceIngredientInStockCount[12] += workshopShare;
                residenceIngredientConsumedCount[12] += workshopShare;
                bounty = bounty - workshopShare;
            }
            if ((bushelCount[7] + bounty) > bushelMax[7]) { bounty = bushelMax[7] - bushelCount[7]; }
            bushelCount[7] += bounty;
            farmedCount[7] += 1;
            taskComplete = true;
        }
    }

    if (!taskComplete) {
        let plotSearchResult = FindPlot(14, 'cereals');
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
                if ((bushelCount[1] + bounty) > bushelMax[1]) { bounty = bushelMax[1] - bushelCount[1]; }
                bushelCount[1] += bounty;
                farmedCount[1] += 1;
            }
            else {
                harvestedCount[0] += bounty;
                if (ratsSpawn) { bounty = Math.floor(bounty - (bounty * (ratPenaltyFactor / 100))); }
                const originalBounty = bounty;
                if (player.hasBakery) {
                    const workshopShare = Math.floor(bounty * residenceIngredientWorkshopPortion[0]);
                    residenceIngredientInStockCount[0] += workshopShare;
                    residenceIngredientConsumedCount[0] += workshopShare;
                    bounty = bounty - workshopShare;
                }
                if (player.hasHardtack) {
                    const workshopShare = Math.floor(originalBounty * residenceIngredientWorkshopPortion[14][0]);
                    residenceIngredientInStockCount[14][0] += workshopShare;
                    residenceIngredientConsumedCount[14][0] += workshopShare;
                    bounty = bounty - workshopShare;
                }
                if ((bushelCount[0] + bounty) > bushelMax[0]) { bounty = bushelMax[0] - bushelCount[0]; }
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
            if (player.likesStory) { GameEvent(displayStoryFirstStorage); }
            JumpToBottom();
        }
        if (farmStage == 0 && !player.hasFarmedOnce) {
            player.hasFarmedOnce = true;
            player.canBuyLand = true;
            if (player.likesStory) { GameEvent(displayStoryFirstHarvest, null, true, false); }
        }
        if (hintLevel == 3 || hintLevel == 7) { hintLevel++; }
        UpdateDisplay();
    }
    return taskComplete;
}



function BuyLand() {
    if (farmStage == 0 && bushelCount[0] == priceStage1) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 1 && bushelCount[0] == priceStage2) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 2 && bushelCount[0] == priceStage3) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 3 && bushelCount[0] == priceStage4) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 4 && bushelCount[0] == priceStage5) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 5 && bushelCount[0] == priceStage6) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 10 && bushelCount[0] == priceStage11) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 11 && bushelCount[0] == priceStage12[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (farmStage == 12 && bushelCount[0] == priceStage13) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 13 && bushelCount[0] == priceStage14[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (farmStage == 14 && bushelCount[0] == priceStage15[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (farmStage == 15 && bushelCount[0] == priceStage16[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (farmStage == 16 && bushelCount[0] == priceStage17[0]) {
        GameEvent(displayStoryNotEnoughWheat);
    }
    else if (farmStage == 17 && (bushelCount[0] == priceStage18[0] || bushelCount[1] == priceStage18[1])) {
        GameEvent(displayStoryNotEnoughWheat);
    }

    else if (farmStage == 0 && bushelCount[0] > priceStage1) {
        if (player.likesStory) { GameEvent(displayStoryFarm0, 'farm_stage_0'); }
        farmStage++;
        hintLevel++;
        bushelCount[0] -= priceStage1;
        spentCount[0] += priceStage1;

        farmSize[0] = 2;
    }
    else if (farmStage == 1 && bushelCount[0] > priceStage2) {
        if (player.likesStory) { GameEvent(displayStoryFarm1, 'farm_stage_1'); }
        farmStage++;
        hintLevel++;
        bushelCount[0] -= priceStage2;
        spentCount[0] += priceStage2;

        farmSize[0] = 4;
    }
    else if (farmStage == 2 && bushelCount[0] > priceStage3) {
        if (player.likesStory) {
            GetNewPlayerName();
            GameEvent(displayStoryFarm2, 'farm_stage_2');
        }
        else { player.names.push('Pee-Pee Boy'); }
        farmStage++;
        hintLevel++;
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
        JumpToTopPlease();
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

    else {
        let message = displayStoryPoorFarm;
        if (farmStage < 11 || farmStage == 12) { message = displayStoryPoorWheat; }
        if (farmStage == 0) { message = displayStoryPoorWheatTutorialA + (priceStage1 - bushelCount[0]) + displayStoryPoorWheatTutorialB; }
        if (farmStage == 0 && (priceStage1 - bushelCount[0] == 1)) { message = displayStoryPoorWheatTutorialC; }
        if (player.likesStory) { GameEvent(message); }
    }

    UpdateDisplay();
}



function RentWarehouse() {
    if ((warehouseStage == 0 && bushelCount[0] == priceWarehouse0) || (warehouseStage == 1 && bushelCount[0] == priceWarehouse1) || (warehouseStage == 2 && bushelCount[0] == priceWarehouse2)) {
        GameEvent(displayStoryNotEnoughWarehouse);
    }

    else if (warehouseStage == 0 && bushelCount[0] > priceWarehouse0) {
        hintLevel++;
        if (player.likesStory) { GameEvent(displayStoryWarehouse0, 'warehouse_stage_0'); }
        bushelCount[0] -= priceWarehouse0;
        spentCount[0] += priceWarehouse0;
        player.canRentWarehouse = false;
        warehouseStage++;
        bushelMax[0] = warehouseCapacityUpgrades[0];
    }
    else if (warehouseStage == 1 && bushelCount[0] > priceWarehouse1) {
        if (player.likesStory) { GameEvent(displayStoryWarehouse1, 'warehouse_stage_1'); }
        bushelCount[0] -= priceWarehouse1;
        spentCount[0] += priceWarehouse1;
        player.canRentWarehouse = false;
        warehouseStage++;
        bushelMax[0] = warehouseCapacityUpgrades[1];
    }
    else if (warehouseStage == 2 && bushelCount[0] > priceWarehouse2) {
        if (player.likesStory) { GameEvent(displayStoryWarehouse2, 'warehouse_stage_2'); }
        bushelCount[0] -= priceWarehouse2;
        spentCount[0] += priceWarehouse2;
        player.canRentWarehouse = false;
        warehouseStage++;
        bushelMax[0] = warehouseCapacityUpgrades[2][0];
        bushelMax[2] = warehouseCapacityUpgrades[2][1];
    }

    else {
        let message = displayStoryPoorWheat;
        if (warehouseStage == 0) { message = displayStoryPoorWheatTutorialA + (priceWarehouse0 - bushelCount[0]) + displayStoryPoorWheatTutorialB; }
        if (warehouseStage == 0 && (priceWarehouse0 - bushelCount[0] == 1)) { message = displayStoryPoorWheatTutorialC; }
        if (player.likesStory) { GameEvent(message); }
    }

    UpdateDisplay();
}



function BuyForest() {
    if (bushelCount[0] == priceForest) {
        GameEvent(displayStoryNotEnoughWheat);
    }

    else if (bushelCount[0] > priceForest) {
        if (player.likesStory) { GameEvent(displayStoryForest, 'buy_forest'); }
        bushelCount[0] -= priceForest;
        spentCount[0] += priceForest;
        player.canBuyForest = false;
        player.seesForest = true;
        player.seesForestButton = true;
        JumpToTopPlease();
        UpdateDisplay();
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorWheat); }
    }
}



function BuyMountain() {
    if (bushelCount[0] == priceQuarry) {
        GameEvent(displayStoryNotEnoughWheat);
    }

    else if (bushelCount[0] > priceQuarry) {
        if (player.likesStory) { GameEvent(displayStoryQuarry, 'buy_mountain'); }
        bushelCount[0] -= priceQuarry;
        spentCount[0] += priceQuarry;
        player.canBuyMountain = false;
        player.seesMountain = true;
        JumpToTopPlease();
        UpdateDisplay();
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorWheat); }
    }
}



function ForestEvents() {
    if (!player.canLog && bushelCount[0] == priceLoggingCamp) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (player.canLog && !player.canSaw && bushelCount[0] == priceSawmill) {
        GameEvent(displayStoryNotEnoughGeneral);
    }

    else if (!player.canLog && bushelCount[0] > priceLoggingCamp) {
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
    }
    else if (!player.hasLoggingUpgrade && boardsCount >= priceLoggingUpgrade[0] && stoneCount >= priceLoggingUpgrade[1]) {
        if (player.likesStory) { GameEvent(displayStoryLoggingUpgrade); }
        boardsCount -= priceLoggingUpgrade[0];
        forestSpentCount[1] += priceLoggingUpgrade[0];
        stoneCount -= priceLoggingUpgrade[1];
        mountainSpentCount[0] += priceLoggingUpgrade[1];
        player.hasLoggingUpgrade = true;
    }
    else if (player.hasLoggingUpgrade && !player.hasSawmillUpgrade && stoneCount >= priceSawmillUpgrade[0] && ingotsCopperCount >= priceSawmillUpgrade[1]) {
        if (player.likesStory) { GameEvent(displayStorySawmillUpgrade); }
        stoneCount -= priceSawmillUpgrade[0];
        mountainSpentCount[0] += priceSawmillUpgrade[0];
        ingotsCopperCount -= priceSawmillUpgrade[1];
        mountainSpentCount[2] += priceSawmillUpgrade[1];
        player.hasSawmillUpgrade = true;
        player.seesForestButton = false;
    }

    else {
        if (!player.canSaw) {
            if (player.likesStory) { GameEvent(displayStoryPoorWheat); }
        }
        else {
            if (player.likesStory) { GameEvent(displayStoryPoorFarm); }
        }
    }

    UpdateDisplay();
}



function MountainEvents() {
    if (!player.hasFoundMine && bushelCount[0] == priceMineScout) {
        GameEvent(displayStoryNotEnoughGeneral);
    }

    else if (!player.hasFoundMine && bushelCount[0] > priceMineScout) {
        if (player.likesStory) { GameEvent(displayStoryMineScout); }
        bushelCount[0] -= priceMineScout;
        spentCount[0] += priceMineScout;
        player.hasFoundMine = true;
    }
    else if (!player.canMine && asCount >= priceMineDig[0] && logsCount >= priceMineDig[1]) {
        if (player.likesStory) { GameEvent(displayStoryMineDig); }
        asCount -= priceMineDig[0];
        asSpent += priceMineDig[0];
        commercialLifetimeSpend += priceMineDig[0];
        logsCount -= priceMineDig[1];
        forestSpentCount[0] += priceMineDig[1];
        player.canMine = true;
    }
    else if (!player.canSmelt && asCount >= priceFoundry[0] && logsCount >= priceFoundry[1] && stoneCount >= priceFoundry[2]) {
        if (player.likesStory) { GameEvent(displayStoryFoundry); }
        asCount -= priceFoundry[0];
        asSpent += priceFoundry[0];
        commercialLifetimeSpend += priceFoundry[0];
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
        player.canHireBronzeworkers = false;
        player.hasHiredBronzeworkers = true;
    }
    else if (player.hasFoundCrystalEvidence && !player.hasHiredGemcutters) {
        if (player.likesStory) { GameEvent(displayStoryCrystal); }
        player.seesMountainButton = false;
        player.hasHiredGemcutters = true;
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorFarm); }
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

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorHire); }
    }
}



function HireAccountant() {
    if (bushelCount[0] == priceAccountant) {
        GameEvent(displayStoryNotEnoughAbacus);
    }

    else if (bushelCount[0] > priceAccountant) {
        if (player.likesStory) { GameEvent(displayStoryAccountant, 'hire_accountant'); }
        bushelCount[0] -= priceAccountant;
        spentCount[0] += priceAccountant;
        player.canAudit = false;
        player.seesReport = true;
        UpdateDisplay();
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorAcct); }
    }
}



function TogglePriority() {
    if (priority == 'Reap') {
        priority = 'Sow';
        if (!player.hasDelegatedOnce) {
            player.hasDelegatedOnce = true;
            if (player.likesStory) { GameEvent(displayStoryDelegateOnce); }
        }
    }
    else if (priority == 'Sow') {
        priority = '🤪';
        if (!player.hasDelegatedTwice) {
            player.hasDelegatedTwice = true;
            if (player.likesStory) { GameEvent(displayStoryDelegateTwice); }
        }
    }
    else {
        priority = 'Reap';
        if (!player.hasDelegatedThrice) {
            player.hasDelegatedThrice = true;
            if (player.likesStory) { GameEvent(displayStoryDelegateThrice); }
        }
    }
    UpdateDisplay();
}



function BarterAll() {
    if (bushelCount[2] > bushelMax[2] || bushelCount[3] > bushelMax[3] || bushelCount[4] > bushelMax[4] || bushelCount[5] > bushelMax[5] || bushelCount[6] > bushelMax[6]) {
        alert('⚠ TOO MUCH FRUITS! THIS WILL CRASH YOUR BROWSER, HOMIE!');
    }
    else if (bushelCount[2] == 0 && bushelCount[3] == 0 && bushelCount[4] == 0 && bushelCount[5] == 0 && bushelCount[6] == 0) {
        if (player.likesStory) { GameEvent(displayStoryPoorBarter); }
    }
    else {
        if (!player.hasSoldTheFarm) {
            player.hasSoldTheFarm = true;
            if (player.likesStory) { GameEvent(displayStoryFirstTradeAll); }
        }
        while (bushelCount[2] > 0) { BarterFruit(2, false); }
        while (bushelCount[3] > 0) { BarterFruit(3, false); }
        while (bushelCount[4] > 0) { BarterFruit(4, false); }
        while (bushelCount[5] > 0) { BarterFruit(5, false); }
        while (bushelCount[6] > 0) { BarterFruit(6, false); }
        UpdateDisplay();
    }
}



function BarterFruit(crop, refresh = true) {
    let barterAmount = bushelCount[crop];

    if (barterAmount == 0) {
        if (player.likesStory) { GameEvent(displayStoryPoorBarter); }
    }

    if (crop == '2' && barterAmount != 0 && !player.hasBarteredOlive) {
        player.hasBarteredOlive = true;
        Translate(player.speaks, false); // this repopulates the bindings in the following string
        if (player.likesStory) { GameEvent(displayStoryFirstTradeOlive); }
    }

    if (crop == '3' && barterAmount != 0 && !player.hasBarteredDate) {
        player.hasBarteredDate = true;
        if (player.likesStory) { GameEvent(displayStoryFirstTradeDate); }
    }

    if (crop == '4' && barterAmount != 0 && !player.hasBarteredFig) {
        player.hasBarteredFig = true;
        if (player.likesStory) { GameEvent(displayStoryFirstTradeFig); }
    }

    if (crop == '5' && barterAmount != 0 && !player.hasBarteredPom) {
        player.hasBarteredPom = true;
        if (player.likesStory) { GameEvent(displayStoryFirstTradePom); }
    }

    if (crop == '6' && barterAmount != 0 && !player.hasBarteredGrape) {
        player.hasBarteredGrape = true;
        if (player.likesStory) { GameEvent(displayStoryFirstTradeGrape); }
    }

    if (bushelCount[crop] > barterMaxBulkCount) { barterAmount = barterMaxBulkCount; }
    bushelCount[crop] -= barterAmount;
    soldCount[crop] += barterAmount;
    bushelCount[0] += barterAmount * barterExchangeRate[crop];
    purchasedCount[0] += barterAmount * barterExchangeRate[crop];
    if (bushelCount[0] > bushelMax[0]) { bushelCount[0] = bushelMax[0]; }

    if (refresh) UpdateDisplay();
}



function Found() {
    if (bushelCount[0] == priceVillage) {
        GameEvent(displayStoryNotEnoughWheat);
    }

    else if (bushelCount[0] > priceVillage) {
        if (player.likesStory) { GameEvent(displayStoryFound, 'buy_village'); }
        bushelCount[0] -= priceVillage;
        spentCount[0] += priceVillage;
        player.canFound = false;
        player.canBuild = true;
        player.seesVillage = true;
        Translate(player.speaks, false); // this repopulates the 'Go Fishin(’/g)' label
        JumpToTopPlease();
        UpdateDisplay();
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorFound); }
    }
}



function BuyNewFarm() {
    if (asCount >= priceNewFarm && !player.hasNewFarm) {
        if (player.likesStory) { GameEvent(displayStoryNewFarm); }
        asCount -= priceNewFarm;
        asSpent += priceNewFarm;
        commercialLifetimeSpend += priceNewFarm;
        player.hasNewFarm = true;
        farmSize[1] = 15;
        handsHired += newFarmHandsCount;
        handsMax += newFarmHandsCount;
        UpdateDisplay();
    }
    else if (asCount >= priceFlaxFarm) {
        if (player.likesStory) { GameEvent(displayStoryFlaxFarm); }
        asCount -= priceFlaxFarm;
        asSpent += priceFlaxFarm;
        commercialLifetimeSpend += priceFlaxFarm;
        player.canBuyNewFarm = false;
        player.hasFlaxFarm = true;
        handsHired += flaxFarmHandsCount;
        handsMax += flaxFarmHandsCount;
        UpdateDisplay();
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorFound); }
    }
}



function ImproveResidence() {
    if (residenceStage == 0 && bushelCount[0] == priceResidence00) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 1 && bushelCount[0] == priceResidence01[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 2 && bushelCount[0] == priceResidence02[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 3 && bushelCount[0] == priceResidence03[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 4 && bushelCount[0] == priceResidence04[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 5 && bushelCount[0] == priceResidence05[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 6 && bushelCount[0] == priceResidence06[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 7 && bushelCount[0] == priceResidence07[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 8 && bushelCount[0] == priceResidence08[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 9 && bushelCount[0] == priceResidence09[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 10 && bushelCount[0] == priceResidence10[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 11 && bushelCount[0] == priceResidence11[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }
    else if (residenceStage == 12 && bushelCount[0] == priceResidence12[0]) {
        GameEvent(displayStoryNotEnoughGeneral);
    }

    else if (residenceStage == 0 && bushelCount[0] > priceResidence00) {
        if (player.likesStory) { GameEvent(displayStoryResidence00); }
        bushelCount[0] -= priceResidence00;
        spentCount[0] += priceResidence00;
        residenceStage += 1;
    }
    else if (residenceStage == 1 && bushelCount[0] > priceResidence01[0] && logsCount >= priceResidence01[1]) {
        if (player.likesStory) { GameEvent(displayStoryResidence01); }
        bushelCount[0] -= priceResidence01[0];
        spentCount[0] += priceResidence01[0];
        logsCount -= priceResidence01[1];
        forestSpentCount[0] += priceResidence01[1];
        residenceStage += 1;
    }
    else if (residenceStage == 2 && bushelCount[0] > priceResidence02[0] && boardsCount >= priceResidence02[1]) {
        if (player.likesStory) { GameEvent(displayStoryResidence02); }
        bushelCount[0] -= priceResidence02[0];
        spentCount[0] += priceResidence02[0];
        boardsCount -= priceResidence02[1];
        forestSpentCount[1] += priceResidence02[1];
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
        residenceStage += 1;
        player.hasBakery = true;
        JumpToBottom();
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
        residenceStage += 1;
        player.hasOliveMill = true;
        JumpToBottom();
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
        JumpToBottom();
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
        JumpToBottom();
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
        JumpToBottom();
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
        JumpToBottom();
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
        JumpToBottom();
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
        residenceStage += 1;
        player.seesHikeButton = true;
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
        JumpToBottom();
    }
    else if (residenceStage == 13 && asCount >= priceResidence13[0] && stoneCount >= priceResidence13[1] && boardsCount >= priceResidence13[2] && ingotsBronzeCount >= priceResidence13[3] && crystalsCount >= priceResidence13[4] && residenceInStockCount[8] >= priceResidence13[5]) {
        if (player.likesStory) { GameEvent(displayStoryResidence13); }
        asCount -= priceResidence13[0];
        asSpent += priceResidence13[0];
        commercialLifetimeSpend += priceResidence13[0];
        stoneCount -= priceResidence13[1];
        mountainSpentCount[0] += priceResidence13[1];
        boardsCount -= priceResidence13[2];
        forestSpentCount[1] += priceResidence13[2];
        ingotsBronzeCount -= priceResidence13[3];
        mountainSpentCount[4] += priceResidence13[3];
        crystalsCount -= priceResidence13[4];
        mountainSpentCount[5] += priceResidence13[4];
        residenceInStockCount[8] -= priceResidence13[5];
        residenceSpentCount[8] += priceResidence13[5];
        residenceStage += 1;
        player.hasMansion = true;
    }
    else if (residenceStage == 14 && asCount >= priceResidence14[0]) {
        if (player.likesStory) { GameEvent(displayStoryResidence14); }
        asCount -= priceResidence14[0];
        asSpent += priceResidence14[0];
        commercialLifetimeSpend += priceResidence14[0];
        residenceStage++;
        player.hasApiary = true;
        JumpToBottom();
    }
    else if (residenceStage == 15) {
        if (player.likesStory) { GameEvent(displayStoryResidence15); }
        residenceStage++;
        player.hasRaisins = true;
        player.seesImportButton = true;
    }
    else if (residenceStage == 16 && player.canImportSalt) {
        if (player.likesStory) { GameEvent(displayStoryResidence16); }
        residenceStage++;
        player.hasHardtack = true;
    }
    else if (residenceStage == 16 && !player.canImportSalt) {
        if (player.likesStory) { GameEvent(displayStoryPoorSalt); }
    }
    else if (residenceStage == 17) {
        if (player.likesStory) { GameEvent(displayStoryResidence17); }
        residenceStage++;
        player.hasRations = true;
    }
    else if (residenceStage == 18 && asCount >= priceResidence18[0] && bushelCount[7] >= priceResidence18[1]) {
        if (player.likesStory) { GameEvent(displayStoryResidence18); }
        asCount -= priceResidence18[0];
        asSpent += priceResidence18[0];
        commercialLifetimeSpend += priceResidence18[0];
        bushelCount[7] -= priceResidence18[1];
        spentCount[7] += priceResidence18[1];
        residenceStage++;
        player.hasCottage = true;
        JumpToBottom();
    }
    else if (residenceStage == 19 && player.hasHospital) {
        if (player.likesStory) { GameEvent(displayStoryResidence19); }
        residenceStage++;
        player.hasBandages = true;
    }
    else if (residenceStage == 19 && !player.hasHospital) {
        if (player.likesStory) { GameEvent(displayStoryPoorMedicine); }
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorFarm); }
    }

    UpdateDisplay();
}



function ThrowParty() {
    if (asCount >= priceResidenceParty) {
        if (player.likesStory) { GameEvent(displayStoryParty); }
        asCount -= priceResidenceParty;
        asSpent += priceResidenceParty;
        statecraftLifetimeSpend += priceResidenceParty;

        player.hasHosted = true;
        UpdateDisplay();
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPoorVillage); }
    }
}



function GoHerm() {
    if (!fishGameStarted && !fishWarmup) {
        if (gameSpeed == 'paused') { StartTime(); }
        divGameWindow.style.display = '';
        divViewResidence.style.display = 'block';
        divMinigameFishing.style.display = '';
        divWidthClamp.appendChild(divFooter);
        player.isAt = 'Residence';
        UpdateDisplay();
        JumpToTopPlease();
    }
}



function GoFishing() {
    if (!fishState.hasVisited) {
        fishState.hasVisited = true;
        if (player.likesStory) { GameEvent(displayStoryFishFirstVisit); }
    }
    PauseTime();
    divGameWindow.style.display = 'none';
    divViewResidence.style.display = '';
    divMinigameFishing.style.display = 'block';
    divMinigameFishing.appendChild(divFooter);
    player.isAt = 'Creek';
    fishGameOver = false;
    UpdateDisplay();
    UpdateFishDisplay();
    JumpToTopPlease();
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



function GoToOracle() {
    if (!player.hasSeenOracle) {
        player.hasSeenOracle = true;
        if (player.likesStory) { GameEvent(displayStoryOracleFirstVisit); }
    }

    PauseTime();
    divGameWindow.style.display = 'none';
    divViewTownship.style.display = '';
    divMinigameOracle.style.display = 'block';
    divMinigameOracle.appendChild(divFooter);
    player.isAt = 'Oracle';
    UpdateDisplay();
    JumpToTopPlease();
}



function ConsultOracle() {
    GameEvent(displayRandomWisdomsDisplay[revealedWisdom]);
    revealedWisdom++;
    if (revealedWisdom == displayRandomWisdomsDisplay.length) {
        if (!player.hasAllWisdom) {
            player.hasAllWisdom = true;
            Achievement();
        }
        revealedWisdom = 0;
    }
}



function LeaveOracle() {
    if (gameSpeed == 'paused') { StartTime(); }
    divGameWindow.style.display = '';
    divViewTownship.style.display = 'block';
    divMinigameOracle.style.display = '';
    divWidthClamp.appendChild(divFooter);
    player.isAt = 'Township';
    UpdateDisplay();
    JumpToTopPlease();
}



function GoToTemple() {
    if (!player.hasSeenTemple) {
        player.hasSeenTemple = true;
        if (player.likesStory) { GameEvent(displayStoryTempleFirstVisit); }
    }

    PauseTime();
    divGameWindow.style.display = 'none';
    divViewTownship.style.display = '';
    divMinigameTemple.style.display = 'block';
    divMinigameTemple.appendChild(divFooter);
    player.isAt = 'Temple';
    UpdateDisplay();
    JumpToTopPlease();
}



function Pray() {
    if (player.likesStory) { GameEvent(displayStoryTemplePray); }
    prayersCount++;
}



function Offer() {
    if (templeStage == 0 && logsCount >= priceTemple0) {
        if (player.likesStory) { GameEvent(displayStoryTemple0); }
        logsCount -= priceTemple0;
        forestSpentCount[0] += priceTemple0;
        templeStage++;
    }
    else if (templeStage == 1 && shepherdsInventory[5] >= priceTemple1) {
        if (player.likesStory) { GameEvent(displayStoryTemple1); }
        shepherdsInventory[5] -= priceTemple1;
        templeSpentCount[0] += priceTemple1;
        templeStage++;
    }
    else if (templeStage == 2 && minersInventory[3] >= priceTemple2 && minersInventory[4] >= priceTemple2 && ingotsBronzeCount >= priceTemple2) {
        if (player.likesStory) { GameEvent(displayStoryTemple2); }
        minersInventory[3] -= priceTemple2;
        templeSpentCount[1] += priceTemple2;
        minersInventory[4] -= priceTemple2;
        templeSpentCount[2] += priceTemple2;
        ingotsBronzeCount -= priceTemple2;
        mountainSpentCount[4] += priceTemple2;
        templeStage++;
    }
    else if (templeStage == 3 && minersInventory[0] >= priceTemple3 && minersInventory[1] >= priceTemple3 && residenceInStockCount[8] >= priceTemple3) {
        if (player.likesStory) { GameEvent(displayStoryTemple3); }
        minersInventory[0] -= priceTemple3;
        templeSpentCount[3] += priceTemple3;
        minersInventory[1] -= priceTemple3;
        templeSpentCount[4] += priceTemple3;
        residenceInStockCount[8] -= priceTemple3;
        residenceSpentCount[8] += priceTemple3;
        templeStage++;
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPoorTemple); }
    }
    UpdateDisplay();
}



function LeaveTemple() {
    if (gameSpeed == 'paused') { StartTime(); }
    divGameWindow.style.display = '';
    divViewTownship.style.display = 'block';
    divMinigameTemple.style.display = '';
    divWidthClamp.appendChild(divFooter);
    player.isAt = 'Township';
    UpdateDisplay();
    JumpToTopPlease();
}



function TakeInAShow() {
    if (player.likesStory) {
        Translate(player.speaks, false); // this repopulates the bindings in the following string
        GameEvent(displayStoryStartPlay);
    }
    PauseTime();
    buttonNextScene.style.display = 'block';
    buttonLeaveEarly.style.display = 'block';
    buttonLeaveStage.style.display = 'none';
    divGameWindow.style.display = 'none';
    divViewTownship.style.display = '';
    divMinigameStage.style.display = 'block';
    divMinigameStage.appendChild(divFooter);
    player.isAt = 'Stage';
    stageDressing = 'Theater';
    player.hasGoodTaste = true;
    UpdateDisplay();
    JumpToTopPlease();
}



function AdvanceScene() {
    stageStage++;
    UpdateDisplay();
    JumpToTopPlease();
}



function LeaveEarly() {
    if (confirm(displayEndPlayEarlyConfirm)) {
        buttonLeaveStage.style.display = '';
        LeaveStage(true);
    }
}



function BenHur() {
    if (player.likesStory) { GameEvent(displayStoryStartRace); }
    PauseTime();
    divGameWindow.style.display = 'none';
    divViewTownship.style.display = '';
    divMinigameStage.style.display = 'block';
    divMinigameStage.appendChild(divFooter);
    player.isAt = 'Stage';
    stageDressing = 'Racetrack';
    player.hasSeenRace = true;
    UpdateDisplay();
    JumpToTopPlease();
}



function LeaveStage(leftEarly = false) {
    if (gameSpeed == 'paused') { StartTime(); }
    buttonNextScene.style.display = '';
    buttonLeaveEarly.style.display = '';
    divGameWindow.style.display = '';
    divViewTownship.style.display = 'block';
    divMinigameStage.style.display = '';
    divWidthClamp.appendChild(divFooter);
    player.isAt = 'Township';
    UpdateDisplay();
    JumpToTopPlease();
    if (stageDressing == 'Theater' && player.likesStory) {
        if (leftEarly) { GameEvent(displayStoryEndPlayEarly); }
        else { GameEvent(displayStoryEndPlay); }
    }
    stageDressing = 'Empty';
}



function Build() {
    if (villageStage == -5 && bushelCount[0] == priceBuildNEG5) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == -4 && bushelCount[0] == priceBuildNEG4[0]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == -3 && bushelCount[0] == priceBuildNEG3) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == -2 && bushelCount[0] == priceBuildNEG2) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == -1 && bushelCount[0] == priceBuildNEG1[0]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == 0 && bushelCount[0] == priceBuild0[0]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == 1 && bushelCount[0] == priceBuild1[0]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == 2 && bushelCount[0] == priceBuild2[0]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == 3 && bushelCount[0] == priceBuild3[0]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == 4 && bushelCount[0] == priceBuild4[1]) {
        GameEvent(displayStoryNotEnoughTown);
    }
    else if (villageStage == 5 && bushelCount[0] == priceBuild5[1]) {
        GameEvent(displayStoryNotEnoughTown);
    }

    else if (villageStage == -5 && bushelCount[0] > priceBuildNEG5) {
        if (player.likesStory) { GameEvent(displayStoryVillageNEG5); }
        villageImageActual.src = 'bitmaps/villageNEG04.png';
        villageStage++;
        bushelCount[0] -= priceBuildNEG5;
        spentCount[0] += priceBuildNEG5;
    }
    else if (villageStage == -4 && bushelCount[0] > priceBuildNEG4[0] && residenceInStockCount[1] >= priceBuildNEG4[1] && bushelCount[5] >= priceBuildNEG4[2] && boardsCount >= priceBuildNEG4[3] && stoneCount >= priceBuildNEG4[4]) {
        if (player.likesStory) { GameEvent(displayStoryVillageNEG4); }
        villageImageActual.src = arrayVillageNEG03[0];
        villageStage++;
        bushelCount[0] -= priceBuildNEG4[0];
        spentCount[0] += priceBuildNEG4[0];
        residenceInStockCount[1] -= priceBuildNEG4[1];
        residenceSpentCount[1] += priceBuildNEG4[1];
        bushelCount[5] -= priceBuildNEG4[2];
        spentCount[5] += priceBuildNEG4[2];
        boardsCount -= priceBuildNEG4[3];
        forestSpentCount[1] += priceBuildNEG4[3];
        stoneCount -= priceBuildNEG4[4];
        mountainSpentCount[0] += priceBuildNEG4[4];
        estDate[0] = week;
        estDate[1] = year;
    }
    else if (villageStage == -3 && bushelCount[0] > priceBuildNEG3) {
        if (player.likesStory) { GameEvent(displayStoryVillageNEG3); }
        villageImageActual.src = 'bitmaps/villageNEG02.png';
        villageStage++;
        bushelCount[0] -= priceBuildNEG3;
        spentCount[0] += priceBuildNEG3;
    }
    else if (villageStage == -2 && bushelCount[0] > priceBuildNEG2) {
        if (player.likesStory) { GameEvent(displayStoryVillageNEG2); }
        villageImageActual.src = 'bitmaps/villageNEG01.png';
        villageStage++;
        bushelCount[0] -= priceBuildNEG2;
        spentCount[0] += priceBuildNEG2;
    }
    else if (villageStage == -1 && bushelCount[0] > priceBuildNEG1[0] && stoneCount >= priceBuildNEG1[1]) {
        if (player.likesStory) { GameEvent(displayStoryVillageNEG1); }
        villageImageActual.src = 'bitmaps/village00.png';
        villageStage++;
        bushelCount[0] -= priceBuildNEG1[0];
        spentCount[0] += priceBuildNEG1[0];
        stoneCount -= priceBuildNEG1[1];
        mountainSpentCount[0] += priceBuildNEG1[1];
    }
    else if (villageStage == 0 && bushelCount[0] > priceBuild0[0] && logsCount >= priceBuild0[1] && boardsCount >= priceBuild0[2] && stoneCount >= priceBuild0[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage0); }
        villageImageActual.src = 'bitmaps/village01.png';
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
        villageImageActual.src = 'bitmaps/village02.png';
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
        villageImageActual.src = 'bitmaps/village03.png';
        villageStage += 1;
        bushelCount[0] -= priceBuild2[0];
        spentCount[0] += priceBuild2[0];
        stoneCount -= priceBuild2[1];
        mountainSpentCount[0] += priceBuild2[1];
    }
    else if (villageStage == 3 && bushelCount[0] > priceBuild3[0] && boardsCount >= priceBuild3[1] && stoneCount >= priceBuild3[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage3); }
        villageImageActual.src = 'bitmaps/village04.png';
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
        villageImageActual.src = 'bitmaps/village05.png';
        villageStage += 1;
        asCount -= priceBuild4[0];
        asSpent += priceBuild4[0];
        commercialLifetimeSpend += priceBuild4[0];
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
        villageImageActual.src = 'bitmaps/village06.png';
        villageStage += 1;
        asCount -= priceBuild5[0];
        asSpent += priceBuild5[0];
        commercialLifetimeSpend += priceBuild5[0];
        bushelCount[0] -= priceBuild5[1];
        spentCount[0] += priceBuild5[1];
        boardsCount -= priceBuild5[2];
        forestSpentCount[1] += priceBuild5[2];

        rentPrice += 4;
        player.canSell = true;
        JumpToTopPlease();
    }
    else if (villageStage == 6 && asCount >= priceBuild6[0] && bushelCount[0] >= priceBuild6[1] && boardsCount >= priceBuild6[2] && stoneCount >= priceBuild6[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage6); }
        villageImageActual.src = 'bitmaps/village07.png';
        villageStage += 1;
        asCount -= priceBuild6[0];
        asSpent += priceBuild6[0];
        commercialLifetimeSpend += priceBuild6[0];
        bushelCount[0] -= priceBuild6[1];
        spentCount[0] += priceBuild6[1];
        boardsCount -= priceBuild6[2];
        forestSpentCount[1] += priceBuild6[2];
        stoneCount -= priceBuild6[3];
        mountainSpentCount[0] += priceBuild6[3];

        residentsMax += 14;
        rentPrice += 1;
        actualBushelPrice -= 500;
        SetMarketPrice();
    }
    else if (villageStage == 7 && asCount >= priceBuild7[0] && bushelCount[0] >= priceBuild7[1] && boardsCount >= priceBuild7[2] && stoneCount >= priceBuild7[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage7); }
        villageImageActual.src = 'bitmaps/village08.png';
        villageStage += 1;
        asCount -= priceBuild7[0];
        asSpent += priceBuild7[0];
        commercialLifetimeSpend += priceBuild7[0];
        bushelCount[0] -= priceBuild7[1];
        spentCount[0] += priceBuild7[1];
        boardsCount -= priceBuild7[2];
        forestSpentCount[1] += priceBuild7[2];
        stoneCount -= priceBuild7[3];
        mountainSpentCount[0] += priceBuild7[3];

        loggersHired += loggersHired;
        residentsMax += 42;
        rentPrice += 3;
        actualBushelPrice -= 500;
        SetMarketPrice();
    }
    else if (villageStage == 8 && asCount >= priceBuild8[0] && bushelCount[0] >= priceBuild8[1] && boardsCount >= priceBuild8[2] && stoneCount >= priceBuild8[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage8); }
        villageImageActual.src = 'bitmaps/village09.png';
        villageStage += 1;
        asCount -= priceBuild8[0];
        asSpent += priceBuild8[0];
        commercialLifetimeSpend += priceBuild8[0];
        bushelCount[0] -= priceBuild8[1];
        spentCount[0] += priceBuild8[1];
        boardsCount -= priceBuild8[2];
        forestSpentCount[1] += priceBuild8[2];
        stoneCount -= priceBuild8[3];
        mountainSpentCount[0] += priceBuild8[3];

        rentPrice += 6;
        actualBushelPrice -= 1000;
        SetMarketPrice();
        yieldMax += 4;
        olivesMax += 6;
        datesMax += 11;
        figsMax += 14;
        pomegranateMax += 12;
        grapesMax += 18;
    }
    else if (villageStage == 9 && asCount >= priceBuild9[0] && bushelCount[0] >= priceBuild9[1] && boardsCount >= priceBuild9[2] && stoneCount >= priceBuild9[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage9); }
        villageImageActual.src = 'bitmaps/village10.png';
        villageStage += 1;
        asCount -= priceBuild9[0];
        asSpent += priceBuild9[0];
        commercialLifetimeSpend += priceBuild9[0];
        bushelCount[0] -= priceBuild9[1];
        spentCount[0] += priceBuild9[1];
        boardsCount -= priceBuild9[2];
        forestSpentCount[1] += priceBuild9[2];
        stoneCount -= priceBuild9[3];
        mountainSpentCount[0] += priceBuild9[3];

        masonsHired += masonsHired;
        residentsMax += 42;
        rentPrice += 5;
        actualBushelPrice -= 500;
        SetMarketPrice();
    }
    else if (villageStage == 10 && asCount >= priceBuild10[0] && bushelCount[1] >= priceBuild10[1] && boardsCount >= priceBuild10[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage10); }
        villageImageActual.src = 'bitmaps/village11.png';
        villageStage += 1;
        asCount -= priceBuild10[0];
        asSpent += priceBuild10[0];
        commercialLifetimeSpend += priceBuild10[0];
        bushelCount[1] -= priceBuild10[1];
        spentCount[1] += priceBuild10[1];
        boardsCount -= priceBuild10[2];
        forestSpentCount[1] += priceBuild10[2];

        buttonBuyStone.classList.add('BuyStoneMarginOverrideClass');
        horsesSpawn = true;
        rentPrice += 2;
        actualBushelPrice += 1000;
        SetMarketPrice();
    }
    else if (villageStage == 11 && asCount >= priceBuild11[0] && ingotsCopperCount >= priceBuild11[1] && bushelCount[0] > priceBuild11[2] && bushelCount[1] > priceBuild11[3] && bushelCount[2] >= priceBuild11[4] && bushelCount[3] >= priceBuild11[5] && bushelCount[4] >= priceBuild11[6] && bushelCount[5] >= priceBuild11[7] && bushelCount[6] >= priceBuild11[8] && stoneCount >= priceBuild11[9] && horsesCount >= priceBuild11[10]) {
        if (player.likesStory) { GameEvent(displayStoryVillage11); }
        villageImageActual.src = 'bitmaps/village12.png';
        villageStage += 1;
        asCount -= priceBuild11[0];
        asSpent += priceBuild11[0];
        commercialLifetimeSpend += priceBuild11[0];
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
        actualBushelPrice -= 500;
        SetMarketPrice();
    }
    else if (villageStage == 12 && asCount >= priceBuild12[0] && bushelCount[1] >= priceBuild12[1] && stoneCount >= priceBuild12[2] && horsesCount >= priceBuild12[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage12); }
        villageImageActual.src = 'bitmaps/village13.png';
        villageStage += 1;
        asCount -= priceBuild12[0];
        asSpent += priceBuild12[0];
        commercialLifetimeSpend += priceBuild12[0];
        bushelCount[1] -= priceBuild12[1];
        spentCount[1] += priceBuild12[1];
        stoneCount -= priceBuild12[2];
        mountainSpentCount[0] += priceBuild12[2];
        horsesCount -= priceBuild12[3];

        rentPrice += 12;
        actualBushelPrice += 1000;
        SetMarketPrice();
        trophiesSpawn = true;
    }
    else if (villageStage == 13 && asCount >= priceBuild13[0] && ingotsCopperCount >= priceBuild13[1] && stoneCount >= priceBuild13[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage13); }
        villageImageActual.src = 'bitmaps/village14.png';
        villageStage += 1;
        asCount -= priceBuild13[0];
        asSpent += priceBuild13[0];
        commercialLifetimeSpend += priceBuild13[0];
        ingotsCopperCount -= priceBuild13[1];
        mountainSpentCount[2] += priceBuild13[1];
        stoneCount -= priceBuild13[2];
        mountainSpentCount[0] += priceBuild13[2];

        rentPrice += 10;
        tourismValue += 16;
        actualBushelPrice -= 12000;
        player.hasBank = true;
        SetMarketPrice();
    }
    else if (villageStage == 14 && asCount >= priceBuild14[0] && beadsCount >= priceBuild14[1] && stoneCount >= priceBuild14[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage14); }
        villageImageActual.src = 'bitmaps/village15.png';
        villageStage += 1;
        asCount -= priceBuild14[0];
        asSpent += priceBuild14[0];
        commercialLifetimeSpend += priceBuild14[0];
        beadsCount -= priceBuild14[1];
        stoneCount -= priceBuild14[2];
        mountainSpentCount[0] += priceBuild14[2];

        rentPrice += 1;
        tourismValue += 8;
        taxesValue += 2;
        interestRate += 0.0001;
        scrollsSpawn = true;
    }
    else if (villageStage == 15 && asCount >= priceBuild15[0] && stoneCount >= priceBuild15[1]) {
        if (player.likesStory) { GameEvent(displayStoryVillage15); }
        villageImageActual.src = 'bitmaps/village16.png';
        villageStage += 1;
        asCount -= priceBuild15[0];
        asSpent += priceBuild15[0];
        commercialLifetimeSpend += priceBuild15[0];
        stoneCount -= priceBuild15[1];
        mountainSpentCount[0] += priceBuild15[1];

        rentPrice += 8;
        tourismValue += 4;
        taxesValue += 28;
        actualBushelPrice -= 500;
        SetMarketPrice();
        interestRate += 0.0012;
        ratsSpawn = true;
    }
    else if (villageStage == 16 && asCount >= priceBuild16[0] && bushelCount[1] >= priceBuild16[1] && boardsCount >= priceBuild16[2] && stoneCount >= priceBuild16[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage16); }
        villageImageActual.src = 'bitmaps/village17.png';
        villageStage++;
        asCount -= priceBuild16[0];
        asSpent += priceBuild16[0];
        commercialLifetimeSpend += priceBuild16[0];
        bushelCount[1] -= priceBuild16[1];
        spentCount[1] += priceBuild16[1];
        boardsCount -= priceBuild16[2];
        forestSpentCount[1] += priceBuild16[2];
        stoneCount -= priceBuild16[3];
        mountainSpentCount[0] += priceBuild16[3];

        rentPrice += 16;
        tourismValue += 22;
        taxesValue += 32;
        actualBushelPrice -= 500;
        SetMarketPrice();
        interestRate += 0.0023;
        player.hasCityWalls = true;
    }
    else if (villageStage == 17 && asCount >= priceBuild17[0] && stoneCount >= priceBuild17[1] && ingotsBronzeCount >= priceBuild17[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage17); }
        villageImageActual.src = 'bitmaps/village18.png';
        villageStage++;
        asCount -= priceBuild17[0];
        asSpent += priceBuild17[0];
        commercialLifetimeSpend += priceBuild17[0];
        stoneCount -= priceBuild17[1];
        mountainSpentCount[0] += priceBuild17[1];
        ingotsBronzeCount -= priceBuild17[2];
        mountainSpentCount[4] += priceBuild17[2];

        rentPrice += 20;
        tourismValue += 8;
        taxesValue += 28;
        actualBushelPrice += 2000;
        SetMarketPrice();
        interestRate += 0.0019;
        player.hasArmy = true;
    }
    else if (villageStage == 18 && asCount >= priceBuild18[0] && boardsCount >= priceBuild18[1] && stoneCount >= priceBuild18[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage18); }
        villageImageActual.src = 'bitmaps/village19.png';
        villageStage++;
        asCount -= priceBuild18[0];
        asSpent += priceBuild18[0];
        commercialLifetimeSpend += priceBuild18[0];
        boardsCount -= priceBuild18[1];
        forestSpentCount[1] += priceBuild18[1];
        stoneCount -= priceBuild18[2];
        mountainSpentCount[0] += priceBuild18[2];

        rentPrice += 2;
        tourismValue += 1;
        taxesValue += 6;
        residentsMax += 168;
        actualBushelPrice -= 500;
        SetMarketPrice();
        interestRate += 0.0033;
    }
    else if (villageStage == 19 && asCount >= priceBuild19[0] && stoneCount >= priceBuild19[1] && oreCopperCount >= priceBuild19[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage19); }
        villageImageActual.src = 'bitmaps/village20.png';
        villageStage++;
        asCount -= priceBuild19[0];
        asSpent += priceBuild19[0];
        commercialLifetimeSpend += priceBuild19[0];
        stoneCount -= priceBuild19[1];
        mountainSpentCount[0] += priceBuild19[1];
        oreCopperCount -= priceBuild19[2];
        mountainSpentCount[1] += priceBuild19[2];

        tourismValue += 2;
        taxesValue += 12;
        SetMarketPrice();
        interestRate += 0.0004;
        player.hasGraveyard = true;
    }
    else if (villageStage == 20 && asCount >= priceBuild20[0] && bushelCount[0] >= priceBuild20[1] && boardsCount >= priceBuild20[2] && stoneCount >= priceBuild20[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage20); }
        villageImageActual.src = 'bitmaps/village21.png';
        villageStage++;
        asCount -= priceBuild20[0];
        asSpent += priceBuild20[0];
        commercialLifetimeSpend += priceBuild20[0];
        bushelCount[0] -= priceBuild20[1];
        spentCount[0] += priceBuild20[1];
        boardsCount -= priceBuild20[2];
        forestSpentCount[1] += priceBuild20[2];
        stoneCount -= priceBuild20[3];
        mountainSpentCount[0] += priceBuild20[3];

        rentPrice += 4;
        tourismValue += 4;
        taxesValue += 6;
        actualBushelPrice += 500;
        SetMarketPrice();
        interestRate += 0.004;
        residenceProductOut[0] = 32; // bread
        residenceIngredientsIn[1] = 7; // oil
        residenceIngredientsIn[2] = 3; // beer
        residenceIngredientsIn[3] = 40; // wine
        residenceIngredientsIn[4] = 5; // syrup
        residenceIngredientsIn[5] = 2; // juice
        residenceIngredientsIn[6] = 4; // fruit leather
        residenceProductOut[7] = 6; // trinkets
        residenceIngredientsIn[8] = 80; // gems
        residenceIngredientsIn[9] = 4; // honey
        residenceIngredientsIn[10] = 4; // raisins
        residenceProductOut[11] = 300; // rations
        residenceIngredientsIn[12] = 8; // linen
        residenceProductOut[13] = 5; // bandages (*req. hospital, which is after uni, so player will not see this happen)
        residenceProductOut[14] = 2; // hardtack
        CalculatePortValues();
    }
    else if (villageStage == 21 && asCount >= priceBuild21[0] && stoneCount >= priceBuild21[1] && ingotsCopperCount >= priceBuild21[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage21); }
        villageImageActual.src = 'bitmaps/village22.png';
        villageStage++;
        asCount -= priceBuild21[0];
        asSpent += priceBuild21[0];
        commercialLifetimeSpend += priceBuild21[0];
        stoneCount -= priceBuild21[1];
        mountainSpentCount[0] += priceBuild21[1];
        ingotsCopperCount -= priceBuild21[2];
        mountainSpentCount[2] += priceBuild21[2];

        rentPrice += 8;
        tourismValue += 1;
        taxesValue += 33;
        actualBushelPrice += 500;
        SetMarketPrice();
        interestRate += 0.009;
        player.hasHospital = true;
    }
    else if (villageStage == 22 && asCount >= priceBuild22[0] && stoneCount >= priceBuild22[1] && ingotsCopperCount >= priceBuild22[2] && ingotsTinCount >= priceBuild22[3] && ingotsBronzeCount >= priceBuild22[4]) {
        if (player.likesStory) { GameEvent(displayStoryVillage22); }
        villageImageActual.src = 'bitmaps/village23.png';
        villageStage++;
        asCount -= priceBuild22[0];
        asSpent += priceBuild22[0];
        commercialLifetimeSpend += priceBuild22[0];
        stoneCount -= priceBuild22[1];
        mountainSpentCount[0] += priceBuild22[1];
        ingotsCopperCount -= priceBuild22[2];
        mountainSpentCount[2] += priceBuild22[2];
        ingotsTinCount -= priceBuild22[3];
        mountainSpentCount[3] += priceBuild22[3];
        ingotsBronzeCount -= priceBuild22[4];
        mountainSpentCount[4] += priceBuild22[4];

        rentPrice += 1;
        tourismValue += 3;
        taxesValue += 50;
        actualBushelPrice += 1000;
        SetMarketPrice();
        interestRate += 0.01;
        player.hasCourthouse = true;
    }
    else if (villageStage == 23 && asCount >= priceBuild23[0] && stoneCount >= priceBuild23[1] && oreCopperCount >= priceBuild23[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage23); }
        villageImageActual.src = 'bitmaps/village24.png';
        villageStage++;
        asCount -= priceBuild23[0];
        asSpent += priceBuild23[0];
        commercialLifetimeSpend += priceBuild23[0];
        stoneCount -= priceBuild23[1];
        mountainSpentCount[0] += priceBuild23[1];
        oreCopperCount -= priceBuild23[2];
        mountainSpentCount[1] += priceBuild23[2];

        rentPrice += 3;
        tourismValue += 111;
        taxesValue -= 4;
        actualBushelPrice -= 500;
        SetMarketPrice();
        interestRate += 0.005;
        horsesIncAmount++;
        player.hasRacetrack = true;
    }
    else if (villageStage == 24 && asCount >= priceBuild24[0] && stoneCount >= priceBuild24[1] && oreCopperCount >= priceBuild24[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage24); }
        villageImageActual.src = 'bitmaps/village25.png';
        villageStage++;
        asCount -= priceBuild24[0];
        asSpent += priceBuild24[0];
        commercialLifetimeSpend += priceBuild24[0];
        stoneCount -= priceBuild24[1];
        mountainSpentCount[0] += priceBuild24[1];
        oreCopperCount -= priceBuild24[2];
        mountainSpentCount[1] += priceBuild24[2];

        rentPrice += 4;
        tourismValue += 99;
        taxesValue -= 6;
        actualBushelPrice -= 500;
        SetMarketPrice();
        interestRate += 0.004;
        trophyChance = 20;
        arenaBet = 1000000;
    }
    else if (villageStage == 25 && asCount >= priceBuild25[0] && stoneCount >= priceBuild25[1]) {
        if (player.likesStory) { GameEvent(displayStoryVillage25); }
        villageImageActual.src = 'bitmaps/village26.png';
        villageStage++;
        asCount -= priceBuild25[0];
        asSpent += priceBuild25[0];
        commercialLifetimeSpend += priceBuild25[0];
        stoneCount -= priceBuild25[1];
        mountainSpentCount[0] += priceBuild25[1];

        rentPrice += 6;
        tourismValue += 222;
        taxesValue -= 1;
        actualBushelPrice -= 500;
        SetMarketPrice();
        interestRate += 0.001;
    }
    else if (villageStage == 26 && asCount >= priceBuild26) {
        if (player.likesStory) { GameEvent(displayStoryVillage26); }
        villageImageActual.src = 'bitmaps/village27.png';
        villageStage++;
        asCount -= priceBuild26;
        asSpent += priceBuild26;
        commercialLifetimeSpend += priceBuild26;

        taxesValue += 100;
        actualBushelPrice -= 2500;
        SetMarketPrice();
        interestRate -= 0.025;
        residentsMax += 333;
    }
    else if (villageStage == 27 && asCount >= priceBuild27[0] && stoneCount >= priceBuild27[1] && crystalsCount >= priceBuild27[2]) {
        if (player.likesStory) { GameEvent(displayStoryVillage27); }
        villageImageActual.src = 'bitmaps/village28.png';
        villageStage++;
        asCount -= priceBuild27[0];
        asSpent += priceBuild27[0];
        commercialLifetimeSpend += priceBuild27[0];
        stoneCount -= priceBuild27[1];
        mountainSpentCount[0] += priceBuild27[1];
        crystalsCount -= priceBuild27[2];
        mountainSpentCount[5] += priceBuild27[2];

        player.hasOracle = true;
        residentsMax += 111;
    }
    else if (villageStage == 28 && asCount >= priceBuild28[0] && stoneCount >= priceBuild28[1] && ingotsBronzeCount >= priceBuild28[2] && residenceInStockCount[8] >= priceBuild28[3]) {
        if (player.likesStory) { GameEvent(displayStoryVillage28); }
        villageImageActual.src = 'bitmaps/village29.png';
        villageStage = 100;
        asCount -= priceBuild28[0];
        asSpent += priceBuild28[0];
        commercialLifetimeSpend += priceBuild28[0];
        stoneCount -= priceBuild28[1];
        mountainSpentCount[0] += priceBuild28[1];
        ingotsBronzeCount -= priceBuild28[2];
        mountainSpentCount[4] += priceBuild28[2];
        residenceInStockCount[8] -= priceBuild28[3];
        residenceSpentCount[8] += priceBuild28[3];

        residentsMax += 39;
    }
    else if (villageStage == 100 && asCount >= priceBuild100[0] && beadsCount >= priceBuild100[1] && scrollsCount >= priceBuild100[2] && ingotsBronzeCount >= priceBuild100[3] && boardsCount >= priceBuild100[4] && stoneCount >= priceBuild100[5] && crystalsCount >= priceBuild100[6] && residenceInStockCount[8] >= priceBuild100[7]) {
        if (player.likesStory) { GameEvent(displayStoryVillage100); }
        villageImageActual.src = 'bitmaps/village100.png';
        villageStage += 1;
        asCount -= priceBuild100[0];
        asSpent += priceBuild100[0];
        commercialLifetimeSpend += priceBuild100[0];
        beadsCount -= priceBuild100[1];
        scrollsCount -= priceBuild100[2];
        ingotsBronzeCount -= priceBuild100[3];
        mountainSpentCount[4] += priceBuild100[3];
        boardsCount -= priceBuild100[4];
        forestSpentCount[1] += priceBuild100[4];
        stoneCount -= priceBuild100[5];
        mountainSpentCount[0] += priceBuild100[5];
        crystalsCount -= priceBuild100[6];
        mountainSpentCount[5] += priceBuild100[6];
        residenceInStockCount[8] -= priceBuild100[7];
        residenceSpentCount[8] += priceBuild100[7];

        rentPrice += 12;
        tourismValue += 48;
        taxesValue += 16;
        actualBushelPrice += 2000;
        SetMarketPrice();
        interestRate += 0.0077;
        player.canBuild = false;
        player.hasMonument = true;
        player.canChooseHeir = true;
        AnimateHeirButton();
    }

    else {
        if (player.likesStory) { GameEvent(displayStoryPoorVillage); }
    }

    UpdateDisplay();
}



function TakeCruise() {
    if (asCount >= priceCruise) {
        if (player.likesStory) { GameEvent(displayStoryCruise); }
        player.hasTakenCruise = true;
        asCount -= priceCruise;
        asSpent += priceCruise;
        statecraftLifetimeSpend += priceCruise;
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPoorCruise); }
    }
    UpdateDisplay();
}



function SponsorNavy() {
    if (asCount >= priceNavy) {
        if (player.likesStory) { GameEvent(displayStoryNavy); }
        asCount -= priceNavy;
        asSpent += priceNavy;
        statecraftLifetimeSpend += priceNavy;
        player.hasNavy = true;
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPoorCruise); }
    }
    UpdateDisplay();
}



function EstablishTradeRoute() {
    if (!player.canExport && asCount >= pricePort0 && player.hasOliveMill) {
        if (player.likesStory) { GameEvent(displayStoryPort00); }
        asCount -= pricePort0;
        asSpent += pricePort0;
        commercialLifetimeSpend += pricePort0;
        player.canExport = true;
        player.canExportOil = true;
    }
    else if (!player.canExport && !player.hasOliveMill) {
        if (player.likesStory) { GameEvent(displayStoryPoorOil); }
    }
    else if (!player.canExport && asCount < pricePort0 && player.hasOliveMill) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    else if (player.canExport && asCount >= pricePort1 && player.hasBrewery && !player.canExportBeer) {
        if (player.likesStory) { GameEvent(displayStoryPort01); }
        asCount -= pricePort1;
        asSpent += pricePort1;
        commercialLifetimeSpend += pricePort1;
        player.canExportBeer = true;
    }
    else if (player.canExport && !player.hasBrewery && !player.canExportBeer) {
        if (player.likesStory) { GameEvent(displayStoryPoorBeer); }
    }
    else if (player.canExport && asCount < pricePort1 && player.hasBrewery && !player.canExportBeer) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    else if (player.canExport && asCount >= pricePort2 && player.hasWinery && !player.canExportWine) {
        if (player.likesStory) { GameEvent(displayStoryPort02); }
        asCount -= pricePort2;
        asSpent += pricePort2;
        commercialLifetimeSpend += pricePort2;
        player.canExportWine = true;
    }
    else if (player.canExport && !player.hasWinery && !player.canExportWine) {
        if (player.likesStory) { GameEvent(displayStoryPoorWine); }
    }
    else if (player.canExport && asCount < pricePort2 && player.hasWinery && !player.canExportWine) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    else if (player.canExport && asCount >= pricePort3 && player.hasKitchen && !player.canExportSyrup) {
        if (player.likesStory) { GameEvent(displayStoryPort03); }
        asCount -= pricePort3;
        asSpent += pricePort3;
        commercialLifetimeSpend += pricePort3;
        player.canExportSyrup = true;
    }
    else if (player.canExport && !player.hasKitchen && !player.canExportSyrup) {
        if (player.likesStory) { GameEvent(displayStoryPoorSyrup); }
    }
    else if (player.canExport && asCount < pricePort3 && player.hasKitchen && !player.canExportSyrup) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    else if (player.canExport && asCount >= pricePort4 && player.hasPress && !player.canExportJuice) {
        if (player.likesStory) { GameEvent(displayStoryPort04); }
        asCount -= pricePort4;
        asSpent += pricePort4;
        commercialLifetimeSpend += pricePort4;
        player.canExportJuice = true;
    }
    else if (player.canExport && !player.hasPress && !player.canExportJuice) {
        if (player.likesStory) { GameEvent(displayStoryPoorJuice); }
    }
    else if (player.canExport && asCount < pricePort4 && player.hasPress && !player.canExportJuice) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    else if (player.canExport && asCount >= pricePort5 && player.hasGreenhouse && !player.canExportFigs) {
        if (player.likesStory) { GameEvent(displayStoryPort05); }
        asCount -= pricePort5;
        asSpent += pricePort5;
        commercialLifetimeSpend += pricePort5;
        player.canExportFigs = true;
        player.hasMerchantGuildWrit = true;
    }
    else if (player.canExport && !player.hasGreenhouse && !player.canExportFigs) {
        if (player.likesStory) { GameEvent(displayStoryPoorFigs); }
    }
    else if (player.canExport && asCount < pricePort5 && player.hasGreenhouse && !player.canExportFigs) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    else if (player.canExport && asCount >= pricePort6 && player.hasAtelier && !player.canExportTrinkets) {
        if (player.likesStory) { GameEvent(displayStoryPort06); }
        asCount -= pricePort6;
        asSpent += pricePort6;
        commercialLifetimeSpend += pricePort6;
        player.canExportTrinkets = true;
        player.seesExportButton = false;
    }
    else if (player.canExport && !player.hasAtelier && !player.canExportTrinkets) {
        if (player.likesStory) { GameEvent(displayStoryPoorTrinkets); }
    }
    else if (player.canExport && asCount < pricePort6 && player.hasAtelier && !player.canExportTrinkets) {
        if (player.likesStory) { GameEvent(displayStoryPoorExport); }
    }

    UpdateDisplay();
}



function ExportFish() {
    player.hasExportedFish = true;
    if (player.likesStory) { GameEvent(displayStoryExportFish); }
    UpdateDisplay();
}



function EstablishShippingLanes() {
    if (player.hasMerchantGuildWrit && player.hasBank && !player.canImportTin) {
        if (player.likesStory) { GameEvent(displayStoryPort07); }
        player.canImport = true;
        player.canImportTin = true;
        player.canHireBronzeworkers = true;
        player.seesMountainButton = true;
        player.seesImportButton = false;
    }
    else if (!player.hasMerchantGuildWrit && player.hasBank && !player.canImportTin) {
        if (player.likesStory) { GameEvent(displayStoryPoorWrit); }
    }
    else if (player.hasMerchantGuildWrit && !player.hasBank && !player.canImportTin) {
        if (player.likesStory) { GameEvent(displayStoryPoorBank); }
    }
    else if (!player.hasMerchantGuildWrit && !player.hasBank && !player.canImportTin) {
        if (player.likesStory) { GameEvent(displayStoryPoorBankWrit); }
    }

    else if (player.canImportTin && !player.canImportSalt) {
        if (player.likesStory) { GameEvent(displayStoryPort08); }
        player.seesImportButton = false;
        player.canImportSalt = true;
    }

    UpdateDisplay();
}



function SellCommodities(type) {
    const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);

    if (type == 0 && bushelCount[0] > commodityBulkCount) {
        if (!player.hasSoldWheat) {
            player.hasSoldWheat = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellWheat); }
        }

        bushelCount[0] -= commodityBulkCount;
        soldCount[0] += commodityBulkCount;
        asCount += currentBushelPrice;
        marketLifetimeRevenue += currentBushelPrice;
        UpdateDisplay();
    }
    else if (type == 1 && bushelCount[1] > commodityBulkCount) {
        if (!player.hasSoldBarley) {
            player.hasSoldBarley = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellBarley); }
        }

        bushelCount[1] -= commodityBulkCount;
        soldCount[1] += commodityBulkCount;
        const currentBarleySellPrice = Math.floor((currentBushelPrice - currentBarleyAdjustment) / 2);
        asCount += currentBarleySellPrice;
        marketLifetimeRevenue += currentBarleySellPrice;
        UpdateDisplay();
    }
    else if (type == 2 && logsCount >= commodityBulkCount) {
        if (!player.hasSoldLogs) {
            player.hasSoldLogs = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellLogs); }
        }

        logsCount -= commodityBulkCount;
        forestSoldCount[0] += commodityBulkCount;
        const currentLogBulkSellPrice = commodityBulkCount * valueInWheat1Log * currentDollarPriceOfOneWheat / 2;
        asCount += currentLogBulkSellPrice;
        marketLifetimeRevenue += currentLogBulkSellPrice;
        UpdateDisplay();
    }
    else if (type == 3 && boardsCount >= commodityBulkCount) {
        if (!player.hasSoldBoards) {
            player.hasSoldBoards = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellBoards); }
        }

        boardsCount -= commodityBulkCount;
        forestSoldCount[1] += commodityBulkCount;
        const currentBoardBulkSellPrice = commodityBulkCount * valueInWheat1Board * currentDollarPriceOfOneWheat / 2;
        asCount += currentBoardBulkSellPrice;
        marketLifetimeRevenue += currentBoardBulkSellPrice;
        UpdateDisplay();
    }
    else if (type == 4 && stoneCount >= commodityBulkCount) {
        if (!player.hasSoldStone) {
            player.hasSoldStone = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellStone); }
        }

        stoneCount -= commodityBulkCount;
        mountainSoldCount[0] += commodityBulkCount;
        const currentStoneBulkSellPrice = commodityBulkCount * valueInWheat1Stone * currentDollarPriceOfOneWheat / 2;
        asCount += currentStoneBulkSellPrice;
        marketLifetimeRevenue += currentStoneBulkSellPrice;
        UpdateDisplay();
    }
    else if (type == 5 && bushelCount[7] > commodityBulkCount) {
        if (!player.hasSoldFlax) {
            player.hasSoldFlax = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellFlax); }
        }

        bushelCount[7] -= commodityBulkCount;
        soldCount[7] += commodityBulkCount;
        const currentFlaxSellPrice = Math.floor((currentBushelPrice - currentBarleyAdjustment) / 2);
        asCount += currentFlaxSellPrice;
        marketLifetimeRevenue += currentFlaxSellPrice;
        UpdateDisplay();
    }
}



function PurchaseCommodities(type) {
    const currentWheatBulkCost = currentBushelPrice * 2;
    const currentBarleyBulkCost = currentBushelPrice - currentBarleyAdjustment;
    const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);
    const currentLogBulkCost = commodityBulkCount * valueInWheat1Log * currentDollarPriceOfOneWheat;
    const currentBoardBulkCost = commodityBulkCount * valueInWheat1Board * currentDollarPriceOfOneWheat;
    const currentStoneBulkCost = commodityBulkCount * valueInWheat1Stone * currentDollarPriceOfOneWheat;

    if (type == 0 && asCount >= currentWheatBulkCost) {
        if (!player.hasBoughtWheat) {
            player.hasBoughtWheat = true;
            if (player.likesStory) { GameEvent(displayStoryFirstBuyWheat); }
        }

        asCount -= currentWheatBulkCost;
        asSpent += currentWheatBulkCost;
        commoditiesLifetimeSpend += currentWheatBulkCost;
        bushelCount[0] += commodityBulkCount;
        purchasedCount[0] += commodityBulkCount;
        UpdateDisplay();
    }
    else if (type == 1 && asCount >= currentBarleyBulkCost) {
        if (!player.hasBoughtBarley) {
            player.hasBoughtBarley = true;
            if (player.likesStory) { GameEvent(displayStoryFirstBuyBarley); }
        }

        asCount -= currentBarleyBulkCost;
        asSpent += currentBarleyBulkCost;
        commoditiesLifetimeSpend += currentBarleyBulkCost;
        bushelCount[1] += commodityBulkCount;
        purchasedCount[1] += commodityBulkCount;
        UpdateDisplay();
    }
    else if (type == 2 && asCount >= currentLogBulkCost) {
        if (!player.hasBoughtLogs) {
            player.hasBoughtLogs = true;
            if (player.likesStory) { GameEvent(displayStoryFirstBuyLogs); }
        }

        asCount -= currentLogBulkCost;
        asSpent += currentLogBulkCost;
        commoditiesLifetimeSpend += currentLogBulkCost;
        logsCount += commodityBulkCount;
        forestPurchasedCount[0] += commodityBulkCount;
        UpdateDisplay();
    }
    else if (type == 3 && asCount >= currentBoardBulkCost) {
        if (!player.hasBoughtBoards) {
            player.hasBoughtBoards = true;
            if (player.likesStory) { GameEvent(displayStoryFirstBuyBoards); }
        }

        asCount -= currentBoardBulkCost;
        asSpent += currentBoardBulkCost;
        commoditiesLifetimeSpend += currentBoardBulkCost;
        boardsCount += commodityBulkCount;
        forestPurchasedCount[1] += commodityBulkCount;
        UpdateDisplay();
    }
    else if (type == 4 && asCount >= currentStoneBulkCost) {
        if (!player.hasBoughtStone) {
            player.hasBoughtStone = true;
            if (player.likesStory) { GameEvent(displayStoryFirstBuyStone); }
        }

        asCount -= currentStoneBulkCost;
        asSpent += currentStoneBulkCost;
        commoditiesLifetimeSpend += currentStoneBulkCost;
        stoneCount += commodityBulkCount;
        mountainPurchasedCount[0] += commodityBulkCount;
        UpdateDisplay();
    }
}



function SellLivestock() {
    if (horsesCount >= commodityHorseCount) {
        if (!player.hasSoldPonies) {
            player.hasSoldPonies = true;
            if (player.likesStory) { GameEvent(displayStoryFirstSellPonies); }
        }
        const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);
        const currentHorseSellCost = (commodityHorseCount * commodityHorsePrice * currentDollarPriceOfOneWheat) / 2;
        horsesCount -= commodityHorseCount;
        horsesSold += commodityHorseCount;
        asCount += currentHorseSellCost;
        marketLifetimeRevenue += currentHorseSellCost;
        UpdateDisplay();
    }
}



function PurchaseLivestock() {
    const currentDollarPriceOfOneWheat = Math.ceil(currentBushelPrice / commodityBulkCount);
    const currentHorseBuyCost = commodityHorseCount * commodityHorsePrice * currentDollarPriceOfOneWheat;
    if (asCount >= currentHorseBuyCost) {
        if (!player.hasBoughtPonies) {
            player.hasBoughtPonies = true;
            if (player.likesStory) { GameEvent(displayStoryFirstBuyPonies); }
        }
        horsesCount += commodityHorseCount;
        horsesBought += commodityHorseCount;
        asCount -= currentHorseBuyCost;
        asSpent += currentHorseBuyCost;
        commoditiesLifetimeSpend += currentHorseBuyCost;
        UpdateDisplay();
    }
}



function Win() {
    //if (player.likesStory) { GameEvent(displayWinMessage); }
    //window.open(winTarget, 'PRAEDIUM_requested_new_tab');

    player.hasWon = true;
    player.saṃsāra += null; // namasté, pendejos 🖕🧘‍♂️🖕
    if (timeAtWin == null) { timeAtWin = new Date(); }
    RecordProgress();
    PauseTime();

    audioTheme.pause();
    if (player.likesMusic) { audioEnding.play(); }

    divWidthClamp.style.display = 'none';

    const divEndingBackdrop = document.createElement('div');
    divEndingBackdrop.id = 'divEndingBackdrop';
    let lastString = '<div id="divEndingFoil"><div id="divEndingSeal"><div id="divEndingSheet">';
    lastString += '<div id="divFinalStory">' + displayLastStory + '</div>';
    lastString += '<br><br><br>';
    lastString += '<i>' + displayToBeContinued + '</i>';
    lastString += '<br><br>';
    lastString += '<img id="endingPlate" src="curves/PRÆDIVM2.svg">';
    lastString += '<br><br>';
    lastString += '<button onclick="WriteReportToDisk(true);">' + displayLabelDownload + '</button>';
    lastString += '<br><br><br><br>';
    lastString += '<b>' + displayTheEnd + '</b>';
    lastString += '<br><br><br><br>';
    lastString += displayThankYouForPlaying;
    lastString += ' 🙏';
    lastString += '</div></div></div>';
    //lastString += '<canvas id="canvasFireworks"></canvas>';
    divEndingBackdrop.innerHTML = lastString;
    body.appendChild(divEndingBackdrop);
    //canvasFireworks = document.getElementById('canvasFireworks');
    //canvasFireworksContext = canvasFireworks.getContext('2d');
    //canvasFireworks.width = window.innerWidth;
    //canvasFireworks.height = window.innerHeight;
    //AnimateFireworks();
}



function ChooseHeir() {
    Translate(player.speaks, false); // this repopulates the bindings in the following string
    if (player.likesStory) { GameEvent(displayStoryHeir); }

    heirDate[0] = week;
    heirDate[1] = year;

    player.canChooseHeir = false;
    player.isAt = 'Workshop';

    divViewResidence.style.display = '';
    divViewPraedium.style.display = 'none';
    divViewTownship.style.display = '';
    divViewPort.style.display = '';
    divViewHeirWorkshop.style.display = 'block';

    UpdateDisplay();
    JumpToTopPlease();
    clearTimeout(timeoutHeirButton);
}



function HeirBegin() {
    PauseTime();
    heirStage++;
    const defaultName = selectHeirNames.options[selectHeirNames.selectedIndex].text;
    player.names.push(defaultName);
    UpdateDisplay();
    JumpToTopPlease();
}



function HeirChangeName() {
    const newChoice = selectHeirNames.options[selectHeirNames.selectedIndex].text;
    player.names[2] = newChoice;
    UpdateDisplay();
}



function HeirChooseName() {
    heirStage++;
    UpdateDisplay();
    JumpToTopPlease();
}



function HeirChangeGender(direction) {
    if (direction == 'previous') {
        player.gender--;
        if (player.gender == -1) { player.gender = 7; }
    }
    else if (direction == 'next') {
        player.gender++;
        if (player.gender == 8) { player.gender = 0; }
    }
    heirFacesPageCurrent = 1;
    UpdateDisplay();
}



function HeirChooseGender() {
    heirStage++;
    RebuildFacesArray();
    Translate(player.speaks, false); // this repopulates the correct honorific binding in Spanish for the string used in the following method call
    HeirChangeEthnicity(); // this updates the ethnicity button with the correct string
    //UpdateDisplay(); // redundant because of above method call
    JumpToTopPlease();
}



function HeirChangeEthnicity() {
    let selectionsString = '';
    function AddChoiceToList(choice) {
        if (selectHeirEthnicities.selectedIndex == choice) { selectionsString += '<option value="' + displayNations[choice] + '" selected>' + displayNations[choice] + '</option>'; }
        else { selectionsString += '<option value="' + displayNations[choice] + '">' + displayNations[choice] + '</option>'; }
    }
    for (let i = 0; i < displayEthnicities.length; i++) { AddChoiceToList(i); }
    selectHeirEthnicities.innerHTML = selectionsString;
    player.ethnicity = selectHeirEthnicities.selectedIndex;
    UpdateDisplay();
}



function HeirChooseEthnicity() {
    heirStage++;
    HeirChangeTitle(); // populates the selections
    //UpdateDisplay(); // redundant because of above method call
    JumpToTopPlease();
}



function HeirChangeTitle() {
    let selectionsString = '';
    function AddChoiceToList(choice) {
        if (selectHeirTitles.selectedIndex == choice) { selectionsString += '<option value="' + displayTitles[choice] + '" selected>' + displayTitles[choice] + '</option>'; }
        else { selectionsString += '<option value="' + displayTitles[choice] + '">' + displayTitles[choice] + '</option>'; }
    }
    for (let i = 0; i < displayTitles.length; i++) { AddChoiceToList(i); }
    selectHeirTitles.innerHTML = selectionsString;
    player.title = selectHeirTitles.selectedIndex;
    UpdateDisplay();
}



function HeirChooseTitle() {
    heirStage++;
    UpdateDisplay();
    JumpToTopPlease();
}



function HeirChangeFaces(direction) {
    if (direction == 'next') {
        if (heirFacesPageCurrent != heirFacesPageTotal) { heirFacesPageCurrent++; }
    }
    else if (direction == 'previous') {
        if (heirFacesPageCurrent != 1) { heirFacesPageCurrent--; }
    }
    UpdateDisplay();
}



function HeirChooseFace(chosenChoice) {
    heirFaceChoice = chosenChoice;
    heirStage++;
    UpdateDisplay();
    JumpToTopPlease();
}



function HeirConfirmAll(ask = true) {
    let nopeDate = false;
    if (heirAttributes.birthday[1] == 'February' && (heirAttributes.birthday[0] == '30' || heirAttributes.birthday[0] == '31')) { nopeDate = true; }
    else if (heirAttributes.birthday[1] == 'April' && heirAttributes.birthday[0] == '31') { nopeDate = true; }
    else if (heirAttributes.birthday[1] == 'June' && heirAttributes.birthday[0] == '31') { nopeDate = true; }
    else if (heirAttributes.birthday[1] == 'September' && heirAttributes.birthday[0] == '31') { nopeDate = true; }
    else if (heirAttributes.birthday[1] == 'November' && heirAttributes.birthday[0] == '31') { nopeDate = true; }
    if (nopeDate) {
        let ordinal = 'th';
        if (heirAttributes.birthday[0] == '31') { ordinal = 'st'; }
        if (player.speaks == 'Spanish') { ordinal = '.º'; }
        //Translate() is not necessary here for the following string; it already happened at time of gender selection
        SystemMessage(displayNoSuchThing[0] + heirAttributes.birthday[0] + ordinal + displayNoSuchThing[1] + heirAttributes.birthday[1] + displayNoSuchThing[2]);
    }
    else if (heirAttributes.neuroses[5]) {
        //Translate() is not necessary here for the following string; it already happened at time of gender selection
        SystemMessage(displayHeirAnthropophagy);
    }
    else {
        let doTheThing = false;

        if (!ask) { doTheThing = true; }
        else { if (confirm(displayHeirConfirm)) { doTheThing = true; } }

        if (doTheThing) {
            player.hasBecomeHeir = true;
            function CalcBirthDOY() {
                let dayCounter = 0;
                if (heirAttributes.birthday[1] == 'January') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                else {
                    dayCounter += 31;
                    if (heirAttributes.birthday[1] == 'February') {
                        let tempCalcValue = parseInt(heirAttributes.birthday[0], 10);
                        if (tempCalcValue == 29) { tempCalcValue = 28; }
                        dayCounter += tempCalcValue;
                    }
                    else {
                        dayCounter += 28;
                        if (heirAttributes.birthday[1] == 'March') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                        else {
                            dayCounter += 31;
                            if (heirAttributes.birthday[1] == 'April') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                            else {
                                dayCounter += 30;
                                if (heirAttributes.birthday[1] == 'May') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                else {
                                    dayCounter += 31;
                                    if (heirAttributes.birthday[1] == 'June') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                    else {
                                        dayCounter += 30;
                                        if (heirAttributes.birthday[1] == 'July') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                        else {
                                            dayCounter += 31;
                                            if (heirAttributes.birthday[1] == 'August') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                            else {
                                                dayCounter += 31;
                                                if (heirAttributes.birthday[1] == 'September') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                                else {
                                                    dayCounter += 30;
                                                    if (heirAttributes.birthday[1] == 'October') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                                    else {
                                                        dayCounter += 31;
                                                        if (heirAttributes.birthday[1] == 'November') { dayCounter += parseInt(heirAttributes.birthday[0], 10); }
                                                        else {
                                                            dayCounter += 30;
                                                            dayCounter += parseInt(heirAttributes.birthday[0], 10);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return dayCounter;
            }
            heirAttributes.birthday[2] = CalcBirthDOY();
            heirAttributes.birthday[3] = Math.ceil(heirAttributes.birthday[2] / 7);
            player.isAt = 'Map';
            divViewMap.style.display = 'block';
            divViewHeirWorkshop.style.display = '';
            UpdateDisplay();
            JumpToTopPlease();
            if (player.likesStory) { GameEvent(displayHeirComplete); }
        }
    }
}



function HeirGoBack() {
    heirStage--;
    UpdateDisplay();
    JumpToTopPlease();
}



function VisitProvince() {
    if (mapTarget == 0) {
        if (!player.hasReturned) {
            player.hasReturned = true;
            if (player.likesStory) { GameEvent(displayStoryReturned); }
        }
        divViewMap.style.display = '';
        divViewPraedium.style.display = '';
        player.isAt = 'Praedium';
        buttonReturnToMap.style.display = 'inline-block';
        UpdateDisplay();
        JumpToTopPlease();
    }
    else if (mapTarget == 1) {
        divViewMap.style.display = '';
        divViewShepherds.style.display = 'block';
        player.isAt = 'Shepherds';
        buttonReturnToMap.style.display = 'inline-block';
        UpdateDisplay();
        JumpToTopPlease();
        if (!player.hasSeenShepherds) {
            player.hasSeenShepherds = true;
            if (player.likesStory) { GameEvent(displayStoryShepherdsFirstVisit); }
        }
    }
    else if (mapTarget == 2) {
        if (player.hasHelpedMiners && player.hasHelpedShepherds) {
            divViewMap.style.display = '';
            divViewFarmers.style.display = 'block';
            player.isAt = 'Farmers';
            buttonReturnToMap.style.display = 'inline-block';
            UpdateDisplay();
            JumpToTopPlease();
            if (!player.hasSeenFarmers) {
                player.hasSeenFarmers = true;
                if (player.likesStory) { GameEvent(displayStoryFarmersFirstVisit); }
            }
        }
        else {
            if (player.likesStory) { GameEvent(displayStoryFarmersRejection); }
        }
    }
    else if (mapTarget == 3) {
        divViewMap.style.display = '';
        divViewMiners.style.display = 'block';
        player.isAt = 'Miners';
        buttonReturnToMap.style.display = 'inline-block';
        UpdateDisplay();
        JumpToTopPlease();
        if (!player.hasSeenMiners) {
            player.hasSeenMiners = true;
            if (player.likesStory) { GameEvent(displayStoryMinersFirstVisit); }
        }
    }
}



function ReturnToMapView() {
    divViewMap.style.display = 'block';
    divViewPraedium.style.display = 'none';
    divViewResidence.style.display = '';
    divViewTownship.style.display = '';
    divViewPort.style.display = '';
    divViewShepherds.style.display = '';
    divViewFarmers.style.display = '';
    divViewMiners.style.display = '';
    buttonReturnToMap.style.display = '';
    player.isAt = 'Map';
    UpdateDisplay();
    JumpToTopPlease();
}



function MapChangeTarget(direction) {
    if (direction == 'next') {

        if (mapTarget != mapProvinces.length - 1) {
            while (mapProvinces[mapTarget + 1][1] == false) {
                mapTarget++;
            }
        }

        mapTarget++;
        if (mapTarget == mapProvinces.length) { mapTarget = 0; }
    }
    else if (direction == 'previous') {

        if (mapTarget != 0) {
            while (mapProvinces[mapTarget - 1][1] == false) {
                mapTarget--;
            }
        }

        mapTarget--;
        if (mapTarget == -1) { mapTarget = mapProvinces.length - 1; }
    }

    if (mapTarget == 3 && !player.hasTargettedMiners) {
        player.hasTargettedMiners = true;
        if (player.likesStory) { GameEvent(displayStoryMinersFirstTarget); }
    }
    else if (mapTarget == 1 && !player.hasTargettedShepherds) {
        player.hasTargettedShepherds = true;
        if (player.likesStory) { GameEvent(displayStoryShepherdsFirstTarget); }
    }
    else if (mapTarget == 2 && !player.hasTargettedFarmers) {
        player.hasTargettedFarmers = true;
        if (player.likesStory) { GameEvent(displayStoryFarmersFirstTarget); }
    }
    else if (mapTarget == 0 && !player.hasTargettedSelf) {
        player.hasTargettedSelf = true;
        if (player.likesStory) { GameEvent(displayStoryHeroFirstTarget); }
    }

    mapOutlineOpacity = 0;
    UpdateDisplay();
}



function MapChangeDetails(format) {
    mapDetailsCurrent = format;
    UpdateDisplay();
}



function MinersEvents() {
    if (!player.hasMetMiners) {
        mapProvinces[3][2] = 1;
        player.hasMetMiners = true;
        Translate(player.speaks, false); // populates the following string correctly
        if (player.likesStory) { GameEvent(displayStoryMinersMeeting); }
    }
    else if (player.hasMetMiners && !player.hasConsultedMiners) {
        player.hasConsultedMiners = true;
        if (player.likesStory) { GameEvent(displayStoryMinersToadies); }
    }
    else if (player.hasMetMiners && player.hasConsultedMiners && !player.hasHelpedMiners && player.hasBandages && asCount >= priceMiners[0] && stoneCount >= priceMiners[1] && militaryCavalryCurrent >= priceMiners[2]) {
        mapProvinces[3][2] = 2;
        asCount -= priceMiners[0];
        asSpent += priceMiners[0];
        commercialLifetimeSpend += priceMiners[0];
        stoneCount -= priceMiners[1];
        mountainSpentCount[0] += priceMiners[1];
        residentsCount -= priceMiners[2];
        horsesCount -= priceMiners[2];

        player.hasHelpedMiners = true;
        Translate(player.speaks, false); // populates the map details header correctly
        if (player.likesStory) { GameEvent(displayStoryMinersHelp); }
    }
    else {
        if (!player.hasRations) {
            if (player.likesStory) { GameEvent(displayStoryPoorMinersRations); }
        }
        else if (!player.hasBandages) {
            if (player.likesStory) { GameEvent(displayStoryPoorMinersBandages); }
        }
        else if (militaryCavalryCurrent < priceMiners[2]) {
            if (player.likesStory) { GameEvent(displayStoryPoorMinersSoldiers); }
        }
        else {
            if (player.likesStory) { GameEvent(displayStoryPoorMinersPrice); }
        }
    }
    UpdateDisplay();
}



function FarmersEvents() {
    if (!player.hasPrepared) {
        player.hasPrepared = true;
        if (player.likesStory) { GameEvent(displayStoryFarmersPrepare); }
    }
    else if (player.hasPrepared && !player.hasMetFarmers) {
        // 🚨🚨🚨
        //player.hasMetFarmers = true;
        //alert('"sup sup" -King Alavi');
        // 🚨🚨🚨

        Win();
    }
    else {
        alert('third thing');
    }
    UpdateDisplay();
}



function ShepherdsEvents() {
    if (!player.hasMetShepherds) {
        mapProvinces[1][2] = 1;
        player.hasMetShepherds = true;
        Translate(player.speaks, false); // populates the following string correctly
        if (player.likesStory) { GameEvent(displayStoryShepherdsMeeting); }
    }
    else if (player.hasMetShepherds && !player.hasConsultedShepherds) {
        player.hasConsultedShepherds = true;
        if (player.likesStory) { GameEvent(displayStoryShepherdsToadies); }
    }
    else if (player.hasMetShepherds && player.hasConsultedShepherds && !player.hasHelpedShepherds && militarySoldiers >= priceShepherds) {
        mapProvinces[1][2] = 3;
        residentsCount -= priceShepherds;
        player.hasHelpedShepherds = true;
        Translate(player.speaks, false); // populates the map details header correctly
        if (player.likesStory) { GameEvent(displayStoryShepherdsHelp); }
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPoorShepherds); }
    }
    UpdateDisplay();
}



function SetOutOnSojourn() {
    if (player.likesStory) { GameEvent(displayStoryHikeGo); }
    PauseTime();
    divGameWindow.style.display = 'none';
    divViewResidence.style.display = '';
    divMinigameHike.style.display = 'block';
    divMinigameHike.appendChild(divFooter);
    player.isAt = 'Hike';
    UpdateDisplay();
    JumpToTopPlease();
}



function LeaveHike() {
    player.seesHikeButton = false;
    player.hasHiked = true;
    if (gameSpeed == 'paused') { StartTime(); }
    divGameWindow.style.display = '';
    divViewResidence.style.display = 'block';
    divMinigameHike.style.display = '';
    divWidthClamp.appendChild(divFooter);
    player.isAt = 'Residence';
    UpdateDisplay();
    JumpToTopPlease();
    if (player.likesStory) { GameEvent(displayStoryHikeLeave); }
}



function Relax() {
    //alert('*******🚨🚨🚨YOU ARE VERY RELAXED NOW!!!!!🚨🚨🚨*******');
    if (player.likesStory) {
        GameEvent('<div id="divMeetings">' + (superMeditatorWizardPowersActivated ? displayStoryHikeEnough : displayStoryHikeRelax[relaxStage]) + '</div>');
    }
    relaxStage++;
    if (relaxStage == displayStoryHikeRelax.length) {
        relaxStage--;
        meditateCount++;
        if (meditateCount > meditateLimit) { superMeditatorWizardPowersActivated = true; }
    }
    UpdateDisplay();
}



function Info() {
    SystemMessage(displayInfoFinal);
}



function Help() {
    player.seesHint = !player.seesHint;
    if (player.seesHint) { GameEvent(displayHintsOn, null, true, false); }
    else { SystemMessage(displayHintsOff); }
    UpdateDisplay();
}



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
    PauseTime();
    UpdateDisplay();
    buttonOptionsDismiss.focus({ focusVisible: false });
    divOverlayOptions.scrollTo(0, 0);
}



function DismissOptions() {
    player.seesOptions = false;
    if (gameSpeed == 'paused' && player.isAt != 'Creek' && player.isAt != 'Wharf' && player.isAt != 'Arena' && player.isAt != 'Hike' && player.isAt != 'Workshop' && player.isAt != 'Temple' && player.isAt != 'Oracle' && player.isAt != 'Stage') { StartTime(); }
    UpdateDisplay();
}



function ToggleMusic() {
    if (toggleMusic.checked) {
        player.likesMusic = true;
        audioTheme.play();
    }
    else {
        player.likesMusic = false;
        audioTheme.pause();
        audioFish.pause();
        audioEnding.pause(); // this is meaningless lol
        audioMuppets.pause();
    }
}



function ToggleSound() {
    if (toggleSounds.checked) {
        player.likesSounds = true;
        audioPeasant.currentTime = 0;
        audioPeasant.play();
    }
    else {
        audioTrophy.pause();
        achievementSoundRare.pause();
        audioPeasant.pause();
        audioWhistle.pause();
        player.likesSounds = false;
    }
}



function ToggleAnimation() {
    if (toggleAnimation.checked) {
        player.likesAnimations = true;
        DisplayAnimatedImages();
    }
    else {
        player.likesAnimations = false;
        DisplayStaticImages();
    }
}



function ToggleProfanity() {
    if (toggleProfanity.checked) {
        player.likesProfanity = true;
        //play sfx: Bart Simpson saying 'damn'
    }
    else {
        player.likesProfanity = false;
        //play sfx: Church Lady saying 'isnt that special'
    }
}



function Legal() {
    SystemMessage(displayLegalFinal);
    //window.open(legalTarget, 'PraediumRequestedWindow');
}



function SailWest() {
    if (player.likesStory) { GameEvent(displayStorySailWest); }
    player.hasWentToAman = true;
    RecordProgress();
    UpdateDisplay();
    //window.open(sailWestTarget, 'PRAEDIUM_requested_new_tab');
}



function PlayGod() {
    if (relicCount >= pricePegasus) {
        relicCount -= pricePegasus;
        if (player.likesStory) { GameEvent(displayStoryPegasus); }
        player.hasPegasi = true;
        RecordProgress();
        UpdateDisplay();
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPegasusNo); }
    }
}



function ReleaseCats() {
    let exterminatorBill = ratsCount;
    if (exterminatorBill > ratMeterMaxValue) { exterminatorBill = ratMeterMaxValue; }
    if (asCount >= exterminatorBill) {
        if (!player.hasReleasedCats) {
            player.hasReleasedCats = true;
            if (player.likesStory) { GameEvent(displayStoryReleaseTheCats); }
        }
        asCount -= exterminatorBill;
        asSpent += exterminatorBill;
        lifetimeSpentOnCats += exterminatorBill;
        clowdersOfCatsReleased++;
        ratsCount = 2;
        UpdateDisplay();
    }
    else {
        if (player.likesStory) { GameEvent(displayStoryPoorCruise); }
    }
}



function TrueEnding() {
    if (superMeditatorWizardPowersActivated && prayersCount > 0) {
        player.hasDoneEverything = true;
        if (player.likesMusic) {
            audioTheme.pause();
            audioMuppets.play();
        }
        if (player.hasNotRaisedDongers) {
            player.hasNotRaisedDongers = false;
            if (player.likesStory) { GameEvent(displayWinMessage); }
            imgNirvana.src = 'bitmaps/godEnding.png';
        }
        else {
            player.hasNotRaisedDongers = true;
            if (player.likesStory) { GameEvent(displayMsgDongers); }
            imgNirvana.src = 'bitmaps/nimoy.png';
        }
    }
    else {
        if (!player.hasSeenDog) {
            player.hasSeenDog = true;
            imgNirvana.src = 'bitmaps/dogEnding.png';
            if (player.likesStory) { GameEvent(displayMsgDenial); }
        }
        else {
            if (player.hasHiked && !superMeditatorWizardPowersActivated) {
                imgNirvana.src = 'bitmaps/大コスモの王様.png';
                if (player.likesStory) { GameEvent(displayMsgTooLate); }
            }
            else {
                imgNirvana.src = 'bitmaps/kururinpa.png';
                let msgHint = displayMsgNotYetPray;
                if (!player.hasHiked) { msgHint = displayMsgNotYetHike; }
                if (player.likesStory) { GameEvent(displayMsgNotYetA + msgHint + displayMsgNotYetB); }
            }
        }
    }
    UpdateDisplay();
}



function BuyTreasure() {
    if (asCount >= priceWorkOfArt) {
        if (!player.hasBoughtArt) {
            player.hasBoughtArt = true;
            if (player.likesStory) { GameEvent(displayStoryBuyArt); }
        }
        else {
            if (player.likesStory) { GameEvent(displayStoryBuyArtAgain); }
        }
        asCount -= priceWorkOfArt;
        asSpent += priceWorkOfArt;
        statecraftLifetimeSpend += priceWorkOfArt;
        treasuresCount++;
        UpdateDisplay();
    }
    else {
        if (player.likesStory) {
            Translate(player.speaks, false); // populates the following string correctly
            GameEvent(displayStoryPoorTreasure);
        }
    }
}



// End of Document