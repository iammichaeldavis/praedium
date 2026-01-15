// ۞ UTILITIES *************************************************************************************
// *************************************************************************************************

function RecordProgress() {
    localStorage.setItem(save_key, JSON.stringify(CollateGameStateReport()));
}



function CheckForPreviousGame() {
    if (localStorage.getItem(save_key)) {
        loadedReport = JSON.parse(localStorage.getItem(save_key));
        if (version.substring(0, 7) == loadedReport.v.substring(0, 7)) { AskToResume(); }
        else {
            if (loadedReport.hero.speaks == 'English') {
                alert('💾🚫 It appears that there is data saved on your device from a previous version of PRAEDIUM. It is not compatible with this newer version.');
            }
            else {
                alert('💾🚫 Parece que hay datos guardados en su dispositivo de una versión anterior de PRAEDIUM. No es compatible con esta versión más reciente.');
            }
            loadedReport = null;
            localStorage.removeItem(save_key);
        }
    }
}



function AskToResume() {
    SetWidth(loadedReport.system[0], false);
    player.speaks = loadedReport.hero.speaks;
    player.likesSounds = loadedReport.hero.likesSounds;
    loadedIcon = 'Bushel';
    if (loadedReport.counts.staff[2] > 0) { loadedIcon = 'Fieldhand'; }
    if (loadedReport.hero.seesReport) { loadedIcon = 'Accountant'; }
    if (loadedReport.calendar[3][0] != 0) { loadedIcon = 'Olive'; }
    if (loadedReport.hero.canSaw) { loadedIcon = 'Board'; }
    if (loadedReport.hero.seesMountain) { loadedIcon = 'Stone'; }
    if (loadedReport.hero.hasBakery) { loadedIcon = 'Loaves'; }
    if (loadedReport.stages[0] > 16) { loadedIcon = 'Barley'; }
    if (loadedReport.stages[0] > 17) { loadedIcon = 'Grape'; }
    if (loadedReport.hero.seesVillage) { loadedIcon = 'FarmerJoe'; }
    if (loadedReport.stages[3] > 3) { loadedIcon = 'Citizen'; }
    if (loadedReport.hero.canSell) { loadedIcon = 'Scales'; }
    if (loadedReport.hero.canSmelt) { loadedIcon = 'IngotCopper'; }
    if (loadedReport.counts.villageState[0]) { loadedIcon = 'Horsey'; }
    if (loadedReport.hero.hasBank) { loadedIcon = 'MoneyTemple'; }
    if (loadedReport.hero.hasMerchantGuildWrit) { loadedIcon = 'Decree'; }
    if (loadedReport.hero.canImportTin) { loadedIcon = 'IngotTin'; }
    if (loadedReport.hero.hasCityWalls) { loadedIcon = 'CityWalls'; }
    if (loadedReport.hero.hasArmy) { loadedIcon = 'TaxCollector'; }
    if (loadedReport.hero.hasMansion) { loadedIcon = 'LordBritish'; }
    if (loadedReport.hero.canImportSalt) { loadedIcon = 'Sal'; }
    if (loadedReport.hero.hasFlaxFarm) { loadedIcon = 'Flax'; }
    if (loadedReport.hero.hasBandages) { loadedIcon = 'Bandage'; }
    if (loadedReport.hero.hasMonument) { loadedIcon = 'Relic'; }
    if (loadedReport.hero.hasBecomeHeir) { loadedIcon = 'Scepter'; }
    if (loadedReport.hero.hasHelpedShepherds) { loadedIcon = 'Dolly'; }
    if (loadedReport.hero.hasHelpedMiners) { loadedIcon = 'IngotGold'; }
    if (loadedReport.hero.hasWon) { loadedIcon = 'Sphinx'; }
    if (loadedReport.hero.hasWon && loadedReport.hero.hasWentToAman && loadedReport.hero.hasPegasi) {
        loadedIcon = 'SphinxSecondQuest';
        trueEnding = true;
    }
    if (loadedReport.hero.isGod) {
        player.isGod = true;
        player.likesDelay = false;
    }
    Translate(player.speaks, false);
    divOverlayResume.style.display = 'block';
}



function ContinuePreviousGame() {
    PlaySound(audioClack);
    if (!loadedReport.hero.seesVillage) { PlaySound(audioWorkToDo); }
    else { PlaySound(audioApologeticDenial); }
    if (confirm(displayResumeConfirm)) {
        /////////////////////////////////////////////////////////////////////////////////////////
        if (loadedReport.hero.names.length > 1) { player.names.push(loadedReport.hero.names[1]); }
        if (loadedReport.hero.names.length > 2) { player.names.push(loadedReport.hero.names[2]); }
        player.age = loadedReport.hero.age;
        player.gender = loadedReport.hero.gender;
        player.ethnicity = loadedReport.hero.ethnicity;
        player.title = loadedReport.hero.title;
        player.saṃsāra = loadedReport.hero.saṃsāra;

        //player.speaks = loadedReport.hero.speaks;

        player.likesMusic = loadedReport.hero.likesMusic;
        //player.likesSounds = loadedReport.hero.likesSounds;
        player.likesTickTock = loadedReport.hero.likesTickTock;
        player.likesAnimations = loadedReport.hero.likesAnimations;
        player.likesStory = loadedReport.hero.likesStory;
        player.likesRecords = loadedReport.hero.likesRecords;
        player.likesProfanity = loadedReport.hero.likesProfanity;
        player.likesDelay = loadedReport.hero.likesDelay;

        //player.isOnMobile = loadedReport.hero.isOnMobile;
        //player.isGod = loadedReport.hero.isGod;
        //player.isDegreeless = loadedReport.hero.isDegreeless;
        //player.isKonamified = loadedReport.hero.isKonamified;
        //player.isAt = loadedReport.hero.isAt;

        //player.seesHint = loadedReport.hero.seesHint;
        //player.seesModsWindow = loadedReport.hero.seesModsWindow;
        player.seesForeword = loadedReport.hero.seesForeword;
        //player.seesSystemMessage = loadedReport.hero.seesSystemMessage;
        //player.seesGameEvent = loadedReport.hero.seesGameEvent;
        //player.seesOptions = loadedReport.hero.seesOptions;
        player.seesInventory = loadedReport.hero.seesInventory;
        player.seesWarehouse = loadedReport.hero.seesWarehouse;
        player.seesStaff = loadedReport.hero.seesStaff;
        player.seesReport = loadedReport.hero.seesReport;
        player.seesOlives = loadedReport.hero.seesOlives;
        player.seesForest = loadedReport.hero.seesForest;
        player.seesForestButton = loadedReport.hero.seesForestButton;
        player.seesMountain = loadedReport.hero.seesMountain;
        player.seesMountainButton = loadedReport.hero.seesMountainButton;
        player.seesVillage = loadedReport.hero.seesVillage;
        player.seesExportButton = loadedReport.hero.seesExportButton;
        player.seesImportButton = loadedReport.hero.seesImportButton;
        player.seesHikeButton = loadedReport.hero.seesHikeButton;

        //player.canDismissEvent = loadedReport.hero.canDismissEvent;
        player.canTill = loadedReport.hero.canTill;
        player.canPlant = loadedReport.hero.canPlant;
        player.canWater = loadedReport.hero.canWater;
        player.canHarvest = loadedReport.hero.canHarvest;
        player.canBuyLand = loadedReport.hero.canBuyLand;
        player.canRentWarehouse = loadedReport.hero.canRentWarehouse;
        player.canGoHome = loadedReport.hero.canGoHome;
        player.canBuyForest = loadedReport.hero.canBuyForest;
        player.canBuyMountain = loadedReport.hero.canBuyMountain;
        player.canBarter = loadedReport.hero.canBarter;
        player.canHire = loadedReport.hero.canHire;
        player.canAudit = loadedReport.hero.canAudit;
        player.canDelegate = loadedReport.hero.canDelegate;
        player.canFound = loadedReport.hero.canFound;
        player.canBuyNewFarm = loadedReport.hero.canBuyNewFarm;
        player.canBuild = loadedReport.hero.canBuild;
        player.canSell = loadedReport.hero.canSell;
        player.canLog = loadedReport.hero.canLog;
        player.canSaw = loadedReport.hero.canSaw;
        player.canMine = loadedReport.hero.canMine;
        player.canSmelt = loadedReport.hero.canSmelt;
        player.canExport = loadedReport.hero.canExport;
        player.canExportOil = loadedReport.hero.canExportOil;
        player.canExportBeer = loadedReport.hero.canExportBeer;
        player.canExportWine = loadedReport.hero.canExportWine;
        player.canExportSyrup = loadedReport.hero.canExportSyrup;
        player.canExportJuice = loadedReport.hero.canExportJuice;
        player.canExportFigs = loadedReport.hero.canExportFigs;
        player.canExportTrinkets = loadedReport.hero.canExportTrinkets;
        player.canImport = loadedReport.hero.canImport;
        player.canImportTin = loadedReport.hero.canImportTin;
        player.canImportSalt = loadedReport.hero.canImportSalt;
        player.canHireBronzeworkers = loadedReport.hero.canHireBronzeworkers;
        player.canChooseHeir = loadedReport.hero.canChooseHeir;
        player.hasBegun = loadedReport.hero.hasBegun;
        player.hasFarmedOnce = loadedReport.hero.hasFarmedOnce;
        player.hasDelegatedOnce = loadedReport.hero.hasDelegatedOnce;
        player.hasDelegatedTwice = loadedReport.hero.hasDelegatedTwice;
        player.hasDelegatedThrice = loadedReport.hero.hasDelegatedThrice;
        player.hasBarteredOlive = loadedReport.hero.hasBarteredOlive;
        player.hasBarteredDate = loadedReport.hero.hasBarteredDate;
        player.hasBarteredFig = loadedReport.hero.hasBarteredFig;
        player.hasBarteredPom = loadedReport.hero.hasBarteredPom;
        player.hasBarteredGrape = loadedReport.hero.hasBarteredGrape;
        player.hasSoldWheat = loadedReport.hero.hasSoldWheat;
        player.hasSoldBarley = loadedReport.hero.hasSoldBarley;
        player.hasSoldFlax = loadedReport.hero.hasSoldFlax;
        player.hasSoldLogs = loadedReport.hero.hasSoldLogs;
        player.hasSoldBoards = loadedReport.hero.hasSoldBoards;
        player.hasSoldStone = loadedReport.hero.hasSoldStone;
        player.hasSoldPonies = loadedReport.hero.hasSoldPonies;
        player.hasSoldTheFarm = loadedReport.hero.hasSoldTheFarm;
        player.hasBoughtWheat = loadedReport.hero.hasBoughtWheat;
        player.hasBoughtBarley = loadedReport.hero.hasBoughtBarley;
        player.hasBoughtLogs = loadedReport.hero.hasBoughtLogs;
        player.hasBoughtBoards = loadedReport.hero.hasBoughtBoards;
        player.hasBoughtStone = loadedReport.hero.hasBoughtStone;
        player.hasBoughtPonies = loadedReport.hero.hasBoughtPonies;
        player.hasMildewed = loadedReport.hero.hasMildewed;
        player.hasNewFarm = loadedReport.hero.hasNewFarm;
        player.hasFlaxFarm = loadedReport.hero.hasFlaxFarm;
        player.hasBank = loadedReport.hero.hasBank;
        player.hasBakery = loadedReport.hero.hasBakery;
        player.hasOliveMill = loadedReport.hero.hasOliveMill;
        player.hasBrewery = loadedReport.hero.hasBrewery;
        player.hasWinery = loadedReport.hero.hasWinery;
        player.hasKitchen = loadedReport.hero.hasKitchen;
        player.hasPress = loadedReport.hero.hasPress;
        player.hasGreenhouse = loadedReport.hero.hasGreenhouse;
        player.hasAtelier = loadedReport.hero.hasAtelier;
        player.hasMansion = loadedReport.hero.hasMansion;
        player.hasApiary = loadedReport.hero.hasApiary;
        player.hasCottage = loadedReport.hero.hasCottage;
        player.hasRaisins = loadedReport.hero.hasRaisins;
        player.hasHardtack = loadedReport.hero.hasHardtack;
        player.hasRations = loadedReport.hero.hasRations;
        player.hasBandages = loadedReport.hero.hasBandages;
        player.hasCityWalls = loadedReport.hero.hasCityWalls;
        player.hasArmy = loadedReport.hero.hasArmy;
        player.hasGraveyard = loadedReport.hero.hasGraveyard;
        player.hasHospital = loadedReport.hero.hasHospital;
        player.hasCourthouse = loadedReport.hero.hasCourthouse;
        player.hasRacetrack = loadedReport.hero.hasRacetrack;
        player.hasOracle = loadedReport.hero.hasOracle;
        player.hasMonument = loadedReport.hero.hasMonument;
        player.hasSeenResidence = loadedReport.hero.hasSeenResidence;
        player.hasSeenVillage = loadedReport.hero.hasSeenVillage;
        player.hasBeenBackToPraedium = loadedReport.hero.hasBeenBackToPraedium;
        player.hasSeenOracle = loadedReport.hero.hasSeenOracle;
        player.hasSeenTemple = loadedReport.hero.hasSeenTemple;
        player.hasSeenArena = loadedReport.hero.hasSeenArena;
        player.hasSeenPort = loadedReport.hero.hasSeenPort;
        player.hasSeenMiners = loadedReport.hero.hasSeenMiners;
        player.hasSeenFarmers = loadedReport.hero.hasSeenFarmers;
        player.hasSeenShepherds = loadedReport.hero.hasSeenShepherds;
        player.hasMerchantGuildWrit = loadedReport.hero.hasMerchantGuildWrit;
        player.hasFoundCopperEvidence = loadedReport.hero.hasFoundCopperEvidence;
        player.hasFoundMine = loadedReport.hero.hasFoundMine;
        player.hasHiredBronzeworkers = loadedReport.hero.hasHiredBronzeworkers;
        player.hasFoundCrystalEvidence = loadedReport.hero.hasFoundCrystalEvidence;
        player.hasHiredGemcutters = loadedReport.hero.hasHiredGemcutters;
        player.hasBeenLevied = loadedReport.hero.hasBeenLevied;
        player.hasAllWisdom = loadedReport.hero.hasAllWisdom;
        player.hasBecomeHeir = loadedReport.hero.hasBecomeHeir;
        player.hasReturned = loadedReport.hero.hasReturned;
        player.hasTargettedMiners = loadedReport.hero.hasTargettedMiners;
        player.hasMetMiners = loadedReport.hero.hasMetMiners;
        player.hasConsultedMiners = loadedReport.hero.hasConsultedMiners;
        player.hasHelpedMiners = loadedReport.hero.hasHelpedMiners;
        player.hasTargettedShepherds = loadedReport.hero.hasTargettedShepherds;
        player.hasMetShepherds = loadedReport.hero.hasMetShepherds;
        player.hasConsultedShepherds = loadedReport.hero.hasConsultedShepherds;
        player.hasHelpedShepherds = loadedReport.hero.hasHelpedShepherds;
        player.hasBeenSummoned = loadedReport.hero.hasBeenSummoned;
        player.hasBeenReceived = loadedReport.hero.hasBeenReceived;
        player.hasPrepared = loadedReport.hero.hasPrepared;
        player.hasTargettedSelf = loadedReport.hero.hasTargettedSelf;
        player.hasTargettedFarmers = loadedReport.hero.hasTargettedFarmers;
        player.hasMetFarmers = loadedReport.hero.hasMetFarmers;
        player.hasConsultedFarmers = loadedReport.hero.hasConsultedFarmers;
        player.hasHelpedFarmers = loadedReport.hero.hasHelpedFarmers;
        player.hasWon = loadedReport.hero.hasWon;
        player.hasPegasi = loadedReport.hero.hasPegasi;
        player.hasWentToAman = loadedReport.hero.hasWentToAman;
        player.hasFished = loadedReport.hero.hasFished;
        player.hasFishRecords = loadedReport.hero.hasFishRecords;
        player.hasHosted = loadedReport.hero.hasHosted;
        player.hasHiked = loadedReport.hero.hasHiked;
        player.hasTakenCruise = loadedReport.hero.hasTakenCruise;
        player.hasLoggingUpgrade = loadedReport.hero.hasLoggingUpgrade;
        player.hasSawmillUpgrade = loadedReport.hero.hasSawmillUpgrade;
        player.hasGoodTaste = loadedReport.hero.hasGoodTaste;
        player.hasSeenRace = loadedReport.hero.hasSeenRace;
        player.hasNavy = loadedReport.hero.hasNavy;
        player.hasReleasedCats = loadedReport.hero.hasReleasedCats;
        player.hasExportedFish = loadedReport.hero.hasExportedFish;
        player.hasBoughtArt = loadedReport.hero.hasBoughtArt;
        player.hasNotRaisedDongers = loadedReport.hero.hasNotRaisedDongers;
        player.hasCelebratedBirthday = loadedReport.hero.hasCelebratedBirthday;
        player.hasCelebratedAnniversary = loadedReport.hero.hasCelebratedAnniversary;
        player.hasSeenDog = loadedReport.hero.hasSeenDog;
        player.hasDoneEverything = loadedReport.hero.hasDoneEverything;
        player.hasLeftTemple = loadedReport.hero.hasLeftTemple;
        player.hasCrashed = loadedReport.hero.hasCrashed;
        /////////////////////////////////////////////////////////////////////////////////////////
        gameTurn = loadedReport.calendar[0];
        year = loadedReport.calendar[1];
        week = loadedReport.calendar[2];
        olivePlantDate[0] = loadedReport.calendar[3][0];
        olivePlantDate[1] = loadedReport.calendar[3][1];
        estDate[0] = loadedReport.calendar[4][0];
        estDate[1] = loadedReport.calendar[4][1];
        heirDate[0] = loadedReport.calendar[5][0];
        heirDate[1] = loadedReport.calendar[5][1];
        timeAtStart = loadedReport.timestamps[1];
        timeAtWin = loadedReport.timestamps[2];
        /////////////////////////////////////////////////////////////////////////////////////////
        yearFormat = loadedReport.system[1];
        SetMusicVolume(loadedReport.system[2][0], false);
        SetSoundVolume(loadedReport.system[2][1], false, false);
        /////////////////////////////////////////////////////////////////////////////////////////
        heirFacesPageCurrent = loadedReport.heir[0];
        heirFaceChoice = loadedReport.heir[1];
        heirAttributes = loadedReport.heir[2];
        /////////////////////////////////////////////////////////////////////////////////////////
        farmStage = loadedReport.stages[0];
        warehouseStage = loadedReport.stages[1];
        residenceStage = loadedReport.stages[2];
        villageStage = loadedReport.stages[3];
        hintLevel = loadedReport.stages[4];
        relaxStage = loadedReport.stages[5];
        meditateCount = loadedReport.stages[6];
        prayersCount = loadedReport.stages[7];
        templeStage = loadedReport.stages[8];
        revealedWisdom = loadedReport.stages[9];
        stageStage = loadedReport.stages[10];
        /////////////////////////////////////////////////////////////////////////////////////////
        mapProvinces[1][2] = loadedReport.relations[0];
        mapProvinces[2][2] = loadedReport.relations[1];
        mapProvinces[3][2] = loadedReport.relations[2];
        /////////////////////////////////////////////////////////////////////////////////////////
        CloneArray(loadedReport.counts.farmInventory, bushelCount);
        CloneArray(loadedReport.counts.farmMax, bushelMax);
        tillCount = loadedReport.counts.farmTilled;
        CloneArray(loadedReport.counts.farmSeeded, seededCount);
        CloneArray(loadedReport.counts.farmFarmed, farmedCount);
        CloneArray(loadedReport.counts.farmHarvested, harvestedCount);
        CloneArray(loadedReport.counts.farmSpent, spentCount);
        CloneArray(loadedReport.counts.farmPurchased, purchasedCount);
        CloneArray(loadedReport.counts.farmSold, soldCount);
        CloneArray(loadedReport.counts.farmLoss, lifetimeLostToRats);
        yieldMin = loadedReport.counts.farmYields[0];
        yieldMax = loadedReport.counts.farmYields[1];
        olivesMin = loadedReport.counts.farmYields[2];
        olivesMax = loadedReport.counts.farmYields[3];
        datesMin = loadedReport.counts.farmYields[4];
        datesMax = loadedReport.counts.farmYields[5];
        figsMin = loadedReport.counts.farmYields[6];
        figsMax = loadedReport.counts.farmYields[7];
        pomegranateMin = loadedReport.counts.farmYields[8];
        pomegranateMax = loadedReport.counts.farmYields[9];
        grapesMin = loadedReport.counts.farmYields[10];
        grapesMax = loadedReport.counts.farmYields[11];
        olivesGrowthCounter = loadedReport.counts.farmCounters[0];
        farmSize[0] = loadedReport.counts.farmDimensions[0];
        farmSize[1] = loadedReport.counts.farmDimensions[1];

        logsCount = loadedReport.counts.forestInventory[0];
        boardsCount = loadedReport.counts.forestInventory[1];
        logsMin = loadedReport.counts.forestYields[0];
        logsMax = loadedReport.counts.forestYields[1];
        boardsPerLog = loadedReport.counts.forestYields[2];
        logsSawnPerWeek = loadedReport.counts.forestYields[3];
        CloneArray(loadedReport.counts.forestProduced, forestProducedCount);
        CloneArray(loadedReport.counts.forestSpent, forestSpentCount);
        CloneArray(loadedReport.counts.forestPurchased, forestPurchasedCount);
        CloneArray(loadedReport.counts.forestSold, forestSoldCount);

        stoneCount = loadedReport.counts.mountainInventory[0];
        oreCopperCount = loadedReport.counts.mountainInventory[1];
        ingotsCopperCount = loadedReport.counts.mountainInventory[2];
        ingotsTinCount = loadedReport.counts.mountainInventory[3];
        ingotsBronzeCount = loadedReport.counts.mountainInventory[4];
        crystalsCount = loadedReport.counts.mountainInventory[5];
        stoneMin = loadedReport.counts.mountainYields[0];
        stoneMax = loadedReport.counts.mountainYields[1];
        oreCopperMin = loadedReport.counts.mountainYields[2];
        oreCopperMax = loadedReport.counts.mountainYields[3];
        crystalHarvest = loadedReport.counts.mountainYields[4];
        ingotsOreCostPerIngot = loadedReport.counts.mountainYields[5];
        ingotsCopperYieldPerTurn = loadedReport.counts.mountainYields[6];
        bronzeTinNeed = loadedReport.counts.mountainYields[7];
        bronzeCopperNeed = loadedReport.counts.mountainYields[8];
        CloneArray(loadedReport.counts.mountainProduced, mountainProducedCount);
        CloneArray(loadedReport.counts.mountainSpent, mountainSpentCount);
        CloneArray(loadedReport.counts.mountainPurchased, mountainPurchasedCount);
        CloneArray(loadedReport.counts.mountainSold, mountainSoldCount);
        mineTimer = loadedReport.counts.mountainCounters[0];
        crystalTimer = loadedReport.counts.mountainCounters[1];
        bronzeworkCountdownTimer = loadedReport.counts.mountainCounters[2];
        bronzeworkCountdownTimerMax = loadedReport.counts.mountainCounters[3];

        handsAvailable = loadedReport.counts.staff[0];
        handsMax = loadedReport.counts.staff[1];
        handsHired = loadedReport.counts.staff[2];
        vigneronsHired = loadedReport.counts.staff[3];
        arboristsHired = loadedReport.counts.staff[4];
        horticulturalistsHired = loadedReport.counts.staff[5];
        loggersHired = loadedReport.counts.staff[6];
        sawyersHired = loadedReport.counts.staff[7];
        masonsHired = loadedReport.counts.staff[8];
        minersHired = loadedReport.counts.staff[9];
        gemcuttersHired = loadedReport.counts.staff[10];
        smeltersHired = loadedReport.counts.staff[11];
        metallurgistsHired = loadedReport.counts.staff[12];
        priority = loadedReport.counts.staffPriority;
        weeksOfHoliday = loadedReport.counts.staffHoliday[0];
        manweeksShamefullyLost = loadedReport.counts.staffHoliday[1];
        CloneArray(loadedReport.counts.staffWheatPaid, paidOutWheat);
        CloneArray(loadedReport.counts.staffStarving, starving);
        loavesPaymentAmount = loadedReport.counts.staffSalary;

        CloneArray(loadedReport.counts.residenceResourceInventory, residenceIngredientInStockCount);
        CloneArray(loadedReport.counts.residenceYields[0], residenceIngredientsIn);
        CloneArray(loadedReport.counts.residenceYields[1], residenceProductOut);
        CloneArray(loadedReport.counts.residenceResourceSpent, residenceIngredientConsumedCount);
        CloneArray(loadedReport.counts.residenceOutputInventory, residenceInStockCount);
        CloneArray(loadedReport.counts.residenceOutputProduced, residenceProducedCount);
        CloneArray(loadedReport.counts.residenceOutputSpent, residenceSpentCount);
        saltSpent = loadedReport.counts.residenceSaltSpent;
        CloneArray(loadedReport.counts.residenceOutputShipped, residenceShippedCount);
        saltShipped = loadedReport.counts.residenceSaltShipped;
        treasuresCount = loadedReport.counts.residenceTreasures;

        residentsCount = loadedReport.counts.villageDemographics[0];
        residentsMax = loadedReport.counts.villageDemographics[1];
        pilgrimsCount = loadedReport.counts.villageDemographics[2];
        pilgrimsMax = loadedReport.counts.villageDemographics[3];
        pilgrimsLifetimeCount = loadedReport.counts.villageDemographics[4];
        totalPatientsSeen = loadedReport.counts.villageDemographics[5];
        totalPatronsHosted = loadedReport.counts.villageDemographics[6];
        asCount = loadedReport.counts.villageFiat[0];
        asSpent = loadedReport.counts.villageFiat[1];
        rentPrice = loadedReport.counts.villageFiat[2];
        taxesValue = loadedReport.counts.villageFiat[3];
        interestRate = loadedReport.counts.villageFiat[4];
        tourismValue = loadedReport.counts.villageFiat[5];
        actualBushelPrice = loadedReport.counts.villageFiat[6];
        currentBushelPrice = loadedReport.counts.villageFiat[7];
        actualBarleyAdjustment = loadedReport.counts.villageFiat[8];
        currentBarleyAdjustment = loadedReport.counts.villageFiat[9];
        valueInWheat1Log = loadedReport.counts.villageFiat[10];
        valueInWheat1Board = loadedReport.counts.villageFiat[11];
        valueInWheat1Stone = loadedReport.counts.villageFiat[12];
        rentLifetimeCollected = loadedReport.counts.villageEarn[0];
        taxesLifetimeCollected = loadedReport.counts.villageEarn[1];
        interestLifetimeCollected = loadedReport.counts.villageEarn[2];
        tourismLifetimeProfit = loadedReport.counts.villageEarn[3];
        pilgrimLifetimeIncome = loadedReport.counts.villageEarn[4];
        marketLifetimeRevenue = loadedReport.counts.villageEarn[5];
        lesArtsLifetimeCollected = loadedReport.counts.villageEarn[6];
        commercialLifetimeSpend = loadedReport.counts.villageSpend[0];
        commoditiesLifetimeSpend = loadedReport.counts.villageSpend[1];
        militaryLifetimeCost = loadedReport.counts.villageSpend[2];
        medicalLifetimeCost = loadedReport.counts.villageSpend[3];
        tributeLifetimePaid = loadedReport.counts.villageSpend[4];
        statecraftLifetimeSpend = loadedReport.counts.villageSpend[5];
        lifetimeSpentOnCats = loadedReport.counts.villageSpend[6];
        medicalLifetimeProfit = loadedReport.counts.villageSpend[7];
        horsesCount = loadedReport.counts.villageInventory[0];
        beadsCount = loadedReport.counts.villageInventory[1];
        trophiesCount = loadedReport.counts.villageInventory[2];
        scrollsCount = loadedReport.counts.villageInventory[3];
        ratsCount = loadedReport.counts.villageInventory[4];
        ghostsCount = loadedReport.counts.villageInventory[5];
        patientsCount = loadedReport.counts.villageInventory[6];
        relicCount = loadedReport.counts.villageInventory[7];
        messiahCount = loadedReport.counts.villageInventory[8];
        patronsCount = loadedReport.counts.villageInventory[9];
        lawsCount = loadedReport.counts.villageInventory[10];
        horsesSpawn = loadedReport.counts.villageState[0];
        horsesStarving = loadedReport.counts.villageState[1];
        beadsSpawn = loadedReport.counts.villageState[2];
        trophiesSpawn = loadedReport.counts.villageState[3];
        scrollsSpawn = loadedReport.counts.villageState[4];
        ratsSpawn = loadedReport.counts.villageState[5];
        horseClock = loadedReport.counts.villageCounters[0];
        tributeTimer = loadedReport.counts.villageCounters[1];
        horsesIncAmount = loadedReport.counts.villageDetritus[0];
        horsesEaten = loadedReport.counts.villageDetritus[1];
        trophyChance = loadedReport.counts.villageDetritus[2];
        ratsHighScore = loadedReport.counts.villageDetritus[3];
        patientCost = loadedReport.counts.villageDetritus[4];
        pilgrimPrayerValue = loadedReport.counts.villageDetritus[5];
        relicSpawnCount = loadedReport.counts.villageDetritus[6];
        horsesBought = loadedReport.counts.villageDetritus[7];
        horsesSold = loadedReport.counts.villageDetritus[8];
        messiahSpawnCount = loadedReport.counts.villageDetritus[9];
        clowdersOfCatsReleased = loadedReport.counts.villageDetritus[10];

        CloneArray(loadedReport.counts.portDuration, shipmentDuration);
        CloneArray(loadedReport.counts.portYields[0], wheatValuePerUnit);
        CloneArray(loadedReport.counts.portYields[1], valueFactor);
        CloneArray(loadedReport.counts.portYields[2], importCost);
        CloneArray(loadedReport.counts.portYields[3], importAmount);
        CloneArray(loadedReport.counts.portProfits, shipmentProfits);
        CloneArray(loadedReport.counts.portCosts, shipmentCosts);
        CloneArray(loadedReport.counts.portCounters[0], shipmentTimersCurrent);
        CloneArray(loadedReport.counts.portCounters[1], shipmentTimersDefault);

        CloneArray(loadedReport.counts.civShepherds, shepherdsInventory);
        CloneArray(loadedReport.counts.civMiners, minersInventory);

        debugCounter = loadedReport.counts.debugCounters[0];

        fishAvailableChanceUpperLimit = loadedReport.counts.miniGameFish[0];
        fishAvailableCountdownMax = loadedReport.counts.miniGameFish[1];
        stunnedFishButtonWiggleDurationS = loadedReport.counts.miniGameFish[2];
        stunnedFishButtonCountdownDurationMS = loadedReport.counts.miniGameFish[3];
        fishGreatCatchThresholdS = loadedReport.counts.miniGameFish[4];
        fishLargeChanceUpperLimit = loadedReport.counts.miniGameFish[5];
        fishRareChanceUpperLimit = loadedReport.counts.miniGameFish[6];
        fishMissCountLifetime = loadedReport.counts.miniGameFish[7];
        fishMissCountSession = loadedReport.counts.miniGameFish[8];
        fishEscapeCountLifetime = loadedReport.counts.miniGameFish[9];
        fishEscapeCountSession = loadedReport.counts.miniGameFish[10];
        lifetimeFishEarnings = loadedReport.counts.miniGameFish[11];
        CloneArray(loadedReport.counts.miniGameFish[12], caughtFishSession);
        CloneArray(loadedReport.counts.miniGameFish[13], caughtFishLifetime);
        CloneArray(loadedReport.counts.miniGameFish[14], caughtFishBounty);
        filetCount = loadedReport.counts.miniGameFish[15];
        filetsSpent = loadedReport.counts.miniGameFish[16];
        fishState = loadedReport.counts.miniGameFish[17];
        totalCatches = loadedReport.counts.miniGameFish[18];
        CloneArray(loadedReport.counts.miniGameFish[19], lifetimeFishermanCaught);
        lifetimeFishermenEarnings = loadedReport.counts.miniGameFish[20];
        stockfishCount = loadedReport.counts.miniGameFish[21];
        lifetimeStockfishProduced = loadedReport.counts.miniGameFish[22];
        lifetimeStockfishShipped = loadedReport.counts.miniGameFish[23];
        lifetimeStockfishProfit = loadedReport.counts.miniGameFish[24];

        arenaTotalBet = loadedReport.counts.miniGameArena[0];
        arenaTotalWin = loadedReport.counts.miniGameArena[1];
        arenaTotalLoss = loadedReport.counts.miniGameArena[2];
        CloneArray(loadedReport.counts.miniGameArena[3], arenaWins);
        CloneArray(loadedReport.counts.miniGameArena[4], arenaLosses);

        templeSpentCount = loadedReport.counts.templeSacrifices;
        /////////////////////////////////////////////////////////////////////////////////////////
        CloneArray(loadedReport.farmland.grain[0], arrayFarmPlots[0]);
        CloneArray(loadedReport.farmland.grain[1], arrayFarmPlots[1]);
        CloneArray(loadedReport.farmland.grain[2], arrayFarmPlots[2]);
        CloneArray(loadedReport.farmland.grain[3], arrayFarmPlots[3]);
        CloneArray(loadedReport.farmland.grain[4], arrayFarmPlots[4]);
        CloneArray(loadedReport.farmland.grain[5], arrayFarmPlots[5]);
        CloneArray(loadedReport.farmland.grain[6], arrayFarmPlots[6]);
        CloneArray(loadedReport.farmland.grain[7], arrayFarmPlots[7]);
        CloneArray(loadedReport.farmland.grain[8], arrayFarmPlots[8]);
        CloneArray(loadedReport.farmland.grain[9], arrayFarmPlots[9]);
        CloneArray(loadedReport.farmland.grain[10], arrayFarmPlots[10]);
        CloneArray(loadedReport.farmland.grain[11], arrayFarmPlots[11]);
        CloneArray(loadedReport.farmland.grain[12], arrayFarmPlots[12]);
        CloneArray(loadedReport.farmland.grain[13], arrayFarmPlots[13]);
        CloneArray(loadedReport.farmland.grain[14], arrayFarmPlots[14]);
        CloneArray(loadedReport.farmland.linseed[0], arrayFlaxPlots[0]);
        CloneArray(loadedReport.farmland.linseed[1], arrayFlaxPlots[1]);
        CloneArray(loadedReport.farmland.linseed[2], arrayFlaxPlots[2]);
        CloneArray(loadedReport.farmland.linseed[3], arrayFlaxPlots[3]);
        CloneArray(loadedReport.farmland.linseed[4], arrayFlaxPlots[4]);
        CloneArray(loadedReport.farmland.linseed[5], arrayFlaxPlots[5]);
        CloneArray(loadedReport.farmland.linseed[6], arrayFlaxPlots[6]);
        CloneArray(loadedReport.farmland.linseed[7], arrayFlaxPlots[7]);
        CloneArray(loadedReport.farmland.linseed[8], arrayFlaxPlots[8]);
        if (loadedReport.farmland.olives.length != arrayOlivar.length) { arrayOlivar.push(0, 0, 0, 0, 0, 0,); }
        CloneArray(loadedReport.farmland.olives, arrayOlivar);
        CloneArray(loadedReport.farmland.dates, arrayDatePalmGrove);
        CloneArray(loadedReport.farmland.figs, arrayFigOrchard);
        CloneArray(loadedReport.farmland.poms, arrayPomOrchard);
        CloneArray(loadedReport.farmland.grapes, arrayVineyard);
        /////////////////////////////////////////////////////////////////////////////////////////
        villageImageActual.src = loadedReport.bitmaps[0];
        tileGrowingOlive = loadedReport.bitmaps[1];
        /////////////////////////////////////////////////////////////////////////////////////////
        CalculatePortValues();

        militarySoldiers = Math.floor(residentsCount * militaryEnlistment);
        militaryCavalryMax = militarySoldiers;
        militaryCavalryCurrent = horsesCount;
        if (militaryCavalryCurrent > militaryCavalryMax) { militaryCavalryCurrent = militaryCavalryMax; }
        militaryInfantry = militarySoldiers - militaryCavalryCurrent;

        if (player.canChooseHeir) { AnimateHeirButton(); }

        if (farmStage > 17) { buttonBarterOlive.classList.add('noMargin'); }

        if (villageStage > 24) { arenaBet = arenaHighBet; }
        /////////////////////////////////////////////////////////////////////////////////////////
        loadedReport = null;
        divOverlayResume.style.display = '';
        UpdateDisplay();
        if (player.likesMusic) { toggleMusic.checked = true; }
        if (player.likesSounds) { toggleSounds.checked = true; }
        if (!player.likesTickTock) { toggleTickTock.checked = false; }
        rangeVolumeMusic.value = audioVolumes[0];
        rangeVolumeSounds.value = audioVolumes[1];
        PlayMusic(audioLoad);
        PlaySound(audioHuzzah);
        FirePRÆDIVM_TM_ExtendedAmbience();
        //if (!player.likesProfanity) { toggleProfanity.checked = false; } * DEPRECATED *
        if (player.hasBecomeHeir) { buttonReturnToMap.style.display = 'inline-block'; }
        if (villageStage > 10) { buttonBuyStone.classList.add('BuyStoneMarginOverrideClass'); }
        if (hintLevel == 13) { buttonQ.style.display = 'none'; }
        if (meditateCount > meditateLimit) { superMeditatorWizardPowersActivated = true; }
        if (player.hasDoneEverything) { imgNirvana.src = 'bitmaps/nirvana.png'; }
        if (residenceStage > 13) { residenceAmbience = ambienceBells; }
        else if (residenceStage > 2) { residenceAmbience = ambienceCracklingFire; }
        else if (residenceStage > 0) { residenceAmbience = ambienceCrickets; }
        if (player.hasPegasi) { residenceAmbience = ambienceVincent; }
        if (villageStage == -3) { townshipAmbience = ambienceCeremony; }
        Translate(player.speaks, false); // populates the map details header correctly
        SetYearFormat(yearFormat, false);
        if (player.hasWon) {
            currencySymbol = '£';
            shepherdsProduction = [12000, 8000, 2000, 4000, 1000, 6000, 18000, 1600, 1600, 3200, 6400,];
            minersProduction = [100, 500, 1000, 100, 500, 1000, 1500, 500, 2500, 5000, 5000,];
            barterMaxBulkCount = 10000;
            bushelMax[0] = 3000000000000;
            bushelMax[1] = 3000000000000;
            bushelMax[2] = 30000000;
            bushelMax[3] = 30000000;
            bushelMax[4] = 30000000;
            bushelMax[5] = 30000000;
            bushelMax[6] = 30000000;
            bushelMax[7] = 3000000000000;
            taxesValue = 8000;
            tourismValue = 20000;
            rentPrice = 400;
            tributeAmount = 131313;
            horsesIncAmount = 20;
            militaryUnitCost = 1000;
        }
        StartTime(); // ...and everything *should* just work 🤞😬
    }
}



function StartNewGame() {
    PlaySound(audioClack);
    PlaySound(audioMilord);
    if (confirm(displayRestartConfirm)) {
        PlaySound(audioHuzzah);
        if (player.likesSounds) { ToggleAudio(); }
        localStorage.removeItem(save_key);
        trueEnding = false;
        divOverlayResume.style.display = '';
        UpdateDisplay();
    }
}



function JumpToTopPlease() {
    divOverlayLoading.scrollTo(0, 0);
    divOverlayForeword.scrollTo(0, 0);
    divGameWindow.scrollTo(0, 0);
    window.scrollTo(0, 0);
}



function JumpToBottom() {
    divGameWindow.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.body.scrollHeight);
}



function ScrollToBottomGently() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth', // positively ought to be ‘behaviour’, if’n ye ask me, guv’na 🇬🇧🫖💂🏻‍♂️👑 >:( hup hup hup
    });
}



function Achievement() {
    PlaySound(achievementSoundRare);
    document.querySelector('.achievement').classList.add('rare');
    document.querySelector('.circle').classList.add('circle_animate');
    document.querySelector('.banner').classList.add('banner-animate');
    document.querySelector('.achieve_disp').classList.add('achieve_disp_animate');
    setTimeout(() => {
        document.querySelector('.circle').classList.remove('circle_animate');
        document.querySelector('.banner').classList.remove('banner-animate');
        document.querySelector('.achieve_disp').classList.remove('achieve_disp_animate');
        document.querySelector('.achievement').classList.remove('rare');
    }, 12000);
}



function ShowToast() {
    PlaySound(audioTrophy);
    const container = document.getElementById('toast-container');
    const urToast = document.getElementById('urToast');
    const toast = document.createElement('div');
    toast.className = 'psxToast';
    toast.innerHTML = urToast.innerHTML;
    container.appendChild(toast);

    toast.style.animationName = 'slide_in';
    toast.style.animationDuration = '0.4s';
    toast.style.animationTimingFunction = 'ease-out';
    toast.style.animationFillMode = 'both';

    const rings = document.getElementsByClassName('psxRing');
    const ring = rings[rings.length - 1];
    ring.style.animationName = 'psxRingSequence';
    ring.style.animationDuration = '7s';
    ring.style.animationTimingFunction = 'ease-out';
    ring.style.animationFillMode = 'both';

    setTimeout(() => {
        toast.style.animationName = 'slide_out';
        toast.style.animationDuration = '0.4s';
        toast.style.animationTimingFunction = 'ease-in';
        toast.style.animationFillMode = 'both';
    }, 7000);
    setTimeout(() => toast.remove(), 8000);
}



function WriteReportToDisk(gameOver = false) {
    const d = new Date();
    let stamp = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();
    let hour = d.getHours();
    if (hour < 10) { hour = '0' + hour; }
    let minute = d.getMinutes();
    if (minute < 10) { minute = '0' + minute; }
    let second = d.getSeconds();
    if (second < 10) { second = '0' + second; }
    stamp += '-';
    stamp += hour + ';' + minute + ';' + second;
    let filename = 'PRAEDIUM_REPORT-' + stamp;

    const JSONToFile = (obj, filename) => {
        const blob = new Blob([JSON.stringify(obj, null, 2)], {
            type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    if (gameOver) {
        stamp = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();
        filename = 'PRAEDIUM Final Empire Export (' + stamp + ')';
        if (player.speaks == 'Spanish') { filename = 'PRAEDIUM Exportación Imperio Final (' + stamp + ')'; }
    }

    JSONToFile(CollateGameStateReport(), filename);
}



function CollateGameStateReport(loud = false) {
    const integerCounts = {
        farmInventory: bushelCount,
        farmMax: bushelMax,
        farmTilled: tillCount,
        farmSeeded: seededCount,
        farmFarmed: farmedCount,
        farmHarvested: harvestedCount,
        farmSpent: spentCount,
        farmPurchased: purchasedCount,
        farmSold: soldCount,
        farmLoss: lifetimeLostToRats,
        farmYields: [yieldMin, yieldMax, olivesMin, olivesMax, datesMin, datesMax, figsMin, figsMax, pomegranateMin, pomegranateMax, grapesMin, grapesMax],
        farmCounters: [olivesGrowthCounter,],
        farmDimensions: farmSize,

        forestInventory: [logsCount, boardsCount,],
        forestYields: [logsMin, logsMax, boardsPerLog, logsSawnPerWeek,],
        forestProduced: forestProducedCount,
        forestSpent: forestSpentCount,
        forestPurchased: forestPurchasedCount,
        forestSold: forestSoldCount,

        mountainInventory: [stoneCount, oreCopperCount, ingotsCopperCount, ingotsTinCount, ingotsBronzeCount, crystalsCount,],
        mountainYields: [stoneMin, stoneMax, oreCopperMin, oreCopperMax, crystalHarvest, ingotsOreCostPerIngot, ingotsCopperYieldPerTurn, bronzeTinNeed, bronzeCopperNeed,],
        mountainProduced: mountainProducedCount,
        mountainSpent: mountainSpentCount,
        mountainPurchased: mountainPurchasedCount,
        mountainSold: mountainSoldCount,
        mountainCounters: [mineTimer, crystalTimer, bronzeworkCountdownTimer, bronzeworkCountdownTimerMax,],

        staff: [handsAvailable, handsMax, handsHired, vigneronsHired, arboristsHired, horticulturalistsHired, loggersHired, sawyersHired, masonsHired, minersHired, gemcuttersHired, smeltersHired, metallurgistsHired,],
        staffPriority: priority,
        staffHoliday: [weeksOfHoliday, manweeksShamefullyLost,],
        staffWheatPaid: paidOutWheat,
        staffStarving: starving,
        staffSalary: loavesPaymentAmount,

        residenceResourceInventory: residenceIngredientInStockCount,
        residenceYields: [residenceIngredientsIn, residenceProductOut,],
        residenceResourceSpent: residenceIngredientConsumedCount,
        residenceOutputInventory: residenceInStockCount,
        residenceOutputProduced: residenceProducedCount,
        residenceOutputSpent: residenceSpentCount,
        residenceSaltSpent: saltSpent,
        residenceOutputShipped: residenceShippedCount,
        residenceSaltShipped: saltShipped,
        residenceTreasures: treasuresCount,

        villageDemographics: [residentsCount, residentsMax, pilgrimsCount, pilgrimsMax, pilgrimsLifetimeCount, totalPatientsSeen, totalPatronsHosted,],
        villageFiat: [asCount, asSpent, rentPrice, taxesValue, interestRate, tourismValue, actualBushelPrice, currentBushelPrice, actualBarleyAdjustment, currentBarleyAdjustment, valueInWheat1Log, valueInWheat1Board, valueInWheat1Stone,],
        villageEarn: [rentLifetimeCollected, taxesLifetimeCollected, interestLifetimeCollected, tourismLifetimeProfit, pilgrimLifetimeIncome, marketLifetimeRevenue, lesArtsLifetimeCollected,],
        villageSpend: [commercialLifetimeSpend, commoditiesLifetimeSpend, militaryLifetimeCost, medicalLifetimeCost, tributeLifetimePaid, statecraftLifetimeSpend, lifetimeSpentOnCats, medicalLifetimeProfit,],
        villageInventory: [horsesCount, beadsCount, trophiesCount, scrollsCount, ratsCount, ghostsCount, patientsCount, relicCount, messiahCount, patronsCount, lawsCount,],
        villageState: [horsesSpawn, horsesStarving, beadsSpawn, trophiesSpawn, scrollsSpawn, ratsSpawn,],
        villageCounters: [horseClock, tributeTimer,],
        villageDetritus: [horsesIncAmount, horsesEaten, trophyChance, ratsHighScore, patientCost, pilgrimPrayerValue, relicSpawnCount, horsesBought, horsesSold, messiahSpawnCount, clowdersOfCatsReleased,],

        portDuration: shipmentDuration,
        portYields: [wheatValuePerUnit, valueFactor, importCost, importAmount,],
        portProfits: shipmentProfits,
        portCosts: shipmentCosts,
        portCounters: [shipmentTimersCurrent, shipmentTimersDefault,],

        civShepherds: shepherdsInventory,
        civMiners: minersInventory,

        debugCounters: [debugCounter,],

        miniGameFish: [
            fishAvailableChanceUpperLimit,
            fishAvailableCountdownMax,
            stunnedFishButtonWiggleDurationS,
            stunnedFishButtonCountdownDurationMS,
            fishGreatCatchThresholdS,
            fishLargeChanceUpperLimit,
            fishRareChanceUpperLimit,
            fishMissCountLifetime,
            fishMissCountSession,
            fishEscapeCountLifetime,
            fishEscapeCountSession,
            lifetimeFishEarnings,
            caughtFishSession,
            caughtFishLifetime,
            caughtFishBounty,
            filetCount,
            filetsSpent,
            fishState,
            totalCatches,
            lifetimeFishermanCaught,
            lifetimeFishermenEarnings,
            stockfishCount,
            lifetimeStockfishProduced,
            lifetimeStockfishShipped,
            lifetimeStockfishProfit,
        ],

        miniGameArena: [
            arenaTotalBet,
            arenaTotalWin,
            arenaTotalLoss,
            arenaWins,
            arenaLosses,
        ],

        templeSacrifices: templeSpentCount,
    };
    const farmlandArrays = {
        grain: arrayFarmPlots,
        linseed: arrayFlaxPlots,
        olives: arrayOlivar,
        dates: arrayDatePalmGrove,
        figs: arrayFigOrchard,
        poms: arrayPomOrchard,
        grapes: arrayVineyard,
    };
    const timeAtSave = new Date();
    const report = {
        bitmaps: [villageImageActual.src, tileGrowingOlive,],
        calendar: [gameTurn, year, week, olivePlantDate, estDate, heirDate,],
        counts: integerCounts,
        farmland: farmlandArrays,
        hero: player,
        heir: [heirFacesPageCurrent, heirFaceChoice, heirAttributes,],
        stages: [farmStage, warehouseStage, residenceStage, villageStage, hintLevel, relaxStage, meditateCount, prayersCount, templeStage, revealedWisdom, stageStage,],
        relations: [mapProvinces[1][2], mapProvinces[2][2], mapProvinces[3][2],],
        timestamps: [timeAtSave, timeAtStart, timeAtWin,],
        system: [resolutionScale, yearFormat, audioVolumes,],
        v: version,
    };
    if (loud) {
        console.log('--------🚨 Report Start 🚨--------');
        console.log(report);
        console.log('--------🚨 Report End 🚨--------');
    };
    return report;
}



function DetermineDevice(bark) {
    const regexp = /android|iphone|ipod|ipad|kindle/i; // regular expression containing known mobile device keywords; this may need to grow 🤔
    player.isOnMobile = regexp.test(navigator.userAgent);

    if (player.isOnMobile) {
        if (bark) { alert('I am a mobile device 📱'); }
        SetWidth(0, bark);
    } else {
        if (bark) { alert('I am a desktop 🖥️⌨️🖱️ or laptop 💻'); }
        SetWidth(2, bark);
    }
}



function PauseTime() {
    clearTimeout(timeoutHourglass);
    clearTimeout(timeoutCanvases);
    gameSpeed = 'paused';
    AnimateHourglass(gameSpeed);
    DisplayStaticImages();
}



function StartTime(punchIt = false) {
    clearTimeout(timeoutHourglass);
    if (gameSpeed == 'standard') { gameSpeed = 'fast'; }
    else if (gameSpeed == 'fast') { gameSpeed = 'high'; }
    else { gameSpeed = 'standard'; }
    if (punchIt) { gameSpeed = 'ultra'; }
    AnimateHourglass(gameSpeed);
    if (player.likesAnimations) { DisplayAnimatedImages(); }

    if (gameSpeed == 'standard' && player.likesAnimations) {
        globalAnimationFrame = 1;
        clearTimeout(timeoutCanvases);
        timeoutCanvases = setTimeout(AnimateCanvases, animationInterval);
    }

}



function SystemMessage(messageCorpus) {
    PlaySound(audioClick);
    divSystemMessageCorpus.innerHTML = messageCorpus;
    player.seesSystemMessage = true;
    UpdateDisplay();
    buttonSystemMessageDismiss.focus({ focusVisible: false });
    divOverlaySystemMessage.scrollTo(0, 0);
}



function GameEvent(eventCorpus, eventFaçade = null, stopThePresses = true, showDateline = true, honourPreference = true) {
    if (player.likesStory || !honourPreference) {
        PlaySound(audioClick);
        if (stopThePresses) { PauseTime(); }
        ///////////////////////////////////////////////////////////////////////////////////////////
        eventFaçade = null; // !!!!!!!!!!!!! 🚨🚨🚨 blank out ALL event art 🚨🚨🚨 !!!!!!!!!!!!!
        ///////////////////////////////////////////////////////////////////////////////////////////

        if (eventFaçade != null) {
            divGameEventFaçade.innerHTML = '<img src="bitmaps/' + eventFaçade + '.gif">';
            divGameEventFaçade.style.display = 'block';
        }
        else {
            divGameEventFaçade.style.display = 'none';
        }
        let finalContent = '';
        if (showDateline) {
            let stringMonthPortion = displayMonthPortions[0];
            if (week % 4 == 0) { stringMonthPortion = displayMonthPortions[1]; }
            else if (week % 4 == 1) { stringMonthPortion = displayMonthPortions[2]; }
            const monthSet = 2;
            let stringMonthName = displayMonthNames[0][monthSet];
            if (week > 48) { stringMonthName = displayMonthNames[12][monthSet]; }
            else if (week > 44) { stringMonthName = displayMonthNames[11][monthSet]; }
            else if (week > 40) { stringMonthName = displayMonthNames[10][monthSet]; }
            else if (week > 36) { stringMonthName = displayMonthNames[9][monthSet]; }
            else if (week > 32) { stringMonthName = displayMonthNames[8][monthSet]; }
            else if (week > 28) { stringMonthName = displayMonthNames[7][monthSet]; }
            else if (week > 24) { stringMonthName = displayMonthNames[6][monthSet]; }
            else if (week > 20) { stringMonthName = displayMonthNames[5][monthSet]; }
            else if (week > 16) { stringMonthName = displayMonthNames[4][monthSet]; }
            else if (week > 12) { stringMonthName = displayMonthNames[3][monthSet]; }
            else if (week > 8) { stringMonthName = displayMonthNames[2][monthSet]; }
            else if (week > 4) { stringMonthName = displayMonthNames[1][monthSet]; }
            const stringDatelineMonth = stringMonthPortion + stringMonthName;

            let seasonalWeek = 1;
            if (week < 14) { seasonalWeek = week; }
            else if (week % 13 == 0) { seasonalWeek = 13; }
            else { seasonalWeek = (week % 13); }
            let ordinalAbbrev = 'th';
            if (seasonalWeek == 1) { ordinalAbbrev = 'st'; }
            else if (seasonalWeek == 2) { ordinalAbbrev = 'nd'; }
            else if (seasonalWeek == 3) { ordinalAbbrev = 'rd'; }
            if (player.speaks == 'Spanish') {
                if (seasonalWeek == 1) { ordinalAbbrev = 'er'; }
                else if (seasonalWeek == 2) { ordinalAbbrev = 'do'; }
                else if (seasonalWeek == 3) { ordinalAbbrev = 'er'; }
                else if (seasonalWeek == 4) { ordinalAbbrev = 'to'; }
                else if (seasonalWeek == 5) { ordinalAbbrev = 'to'; }
                else if (seasonalWeek == 6) { ordinalAbbrev = 'to'; }
                else if (seasonalWeek == 7) { ordinalAbbrev = 'mo'; }
                else if (seasonalWeek == 8) { ordinalAbbrev = 'vo'; }
                else if (seasonalWeek == 9) { ordinalAbbrev = 'no'; }
                else if (seasonalWeek == 10) { ordinalAbbrev = 'mo'; }
                else if (seasonalWeek == 11) { ordinalAbbrev = 'mo'; }
                else if (seasonalWeek == 12) { ordinalAbbrev = 'mo'; }
                else if (seasonalWeek == 13) { ordinalAbbrev = 'er'; }
            }
            let currentSeason = 0;
            if (week > 39) { currentSeason = 3; }
            else if (week > 26) { currentSeason = 2; }
            else if (week > 13) { currentSeason = 1; }
            const stringDatelineSeason = seasonalWeek + ordinalAbbrev + displayWeekOf + displaySeasons[currentSeason];

            let stringDatelineYear = '';
            let yearToShow = year;
            if (player.hasWon) { yearToShow += endingYearDelta; }
            if (yearFormat == 0) {
                let formattedYear = 0;
                let currentEra = displayEras[0];
                if (yearToShow < 201) { formattedYear = 201 - yearToShow; }
                else {
                    formattedYear = yearToShow - 200;
                    currentEra = displayEras[1];
                }
                stringDatelineYear = formattedYear + '&nbsp;' + currentEra;
            }
            else if (yearFormat == 1) {
                let formattedYear = yearAtStartRoman + (yearToShow - 1);
                stringDatelineYear = displayYear + ' ' + RomanceNumber(formattedYear);
            }
            else if (yearFormat == 2) {
                let formattedYear = yearAtStartHebrew + (yearToShow - 1);
                stringDatelineYear = 'שָׁנָה' + ' ' + CircumciseNumber(formattedYear);
            }
            else if (yearFormat == 3) {
                let formattedYear = yearAtStartHanDynasty + (yearToShow - 1);
                stringDatelineYear = '<div id="chineseNumerals">年' + SteepNumberInGreenTea(formattedYear) + '</div>';
            }

            finalContent += '<div id="divDateline"><div id="divDatelineMonth">' + stringDatelineMonth + '</div>' + stringDatelineSeason + '<div id="divDatelineYear">' + stringDatelineYear + '</div></div>';
        }
        finalContent += eventCorpus;
        divGameEventCorpus.innerHTML = finalContent;
        player.seesGameEvent = true;
        UpdateDisplay();
        buttonGameEventDismiss.focus({ focusVisible: false });
        divOverlayGameEvent.scrollTo(0, 0);
        player.canDismissEvent = false;
        buttonGameEventDismiss.innerHTML = '<span class="icon AnkhTile inlineIcon"></span>';
        clearTimeout(timeoutGameEventDismiss);
        let conditionalDelay = gameEventDismissDelay;
        if (!player.likesDelay) { conditionalDelay = 10; }
        timeoutGameEventDismiss = setTimeout(() => {
            // 🚨🚨🚨
            //buttonGameEventDismiss.innerHTML = player.hasWon ? displayEndButton : displayOK;
            buttonGameEventDismiss.innerHTML = displayOK;
            // 🚨🚨🚨
            player.canDismissEvent = true;
        }, conditionalDelay);
    }
}



function FindPlot(typeSought, crop) {
    let cell = [-1, -1,];
    let row = -1;
    let col = -1;
    let rowCount = farmSize[1];

    if (crop == 'flax') {
        rowCount = flaxSize[1];
        for (let i = 0; i < rowCount; i++) {
            cell[0] += 1;
            cell[1] = -1;
            for (let i = 0; i < flaxSize[0]; i++) {
                cell[1] += 1;
                if (arrayFlaxPlots[cell[0]][cell[1]] == typeSought) {
                    row = cell[0];
                    col = cell[1];
                    return { row, col };
                }
            }
        }
        return { row, col };
    }

    if (crop == 'barley') {
        if (rowCount > 6) {
            cell[0] += 6;
            rowCount = 3;
        }
        else return { row, col };
    }

    for (let i = 0; i < rowCount; i++) {
        cell[0] += 1;
        cell[1] = -1;
        if (crop == 'wheat' && cell[0] == 6) {
            if (rowCount > 9) {
                cell[0] = 9;
                rowCount -= 3;
            }
            else {
                return { row, col };
            }
        }
        for (let i = 0; i < farmSize[0]; i++) {
            cell[1] += 1;
            if (arrayFarmPlots[cell[0]][cell[1]] == typeSought) {
                row = cell[0];
                col = cell[1];
                return { row, col };
            }
        }
    }
    return { row, col };
}



function FindWholeRandom(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}



function GetNewPlayerName() {
    PlaySound(audioClack);
    PlaySound(audioInquiry);
    let newName = prompt(displayNamePlayer).trim();
    player.names.push(newName);
}



function RomanceNumber(originalNumber) {
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',];
    let result = '';
    for (let i = 0; i < arabic.length; i++) {
        while (arabic[i] <= originalNumber) {
            result += roman[i];
            originalNumber -= arabic[i];
        }
    }
    return result;
}



function CircumciseNumber(originalNumber) {
    if (originalNumber <= 0) {
        return ''; // Hebrew numerals typically don't represent zero or negative numbers
    }
    const hebrewThousands = [
        '',
        'א׳',
        'ב׳',
        'ג׳',
        'ד׳',
        'ה׳',
        'ו׳',
        'ז׳',
        'ח׳',
        'ט׳',
    ];
    const hebrewHundreds = [
        '',
        'ק',
        'ר',
        'ש',
        'ת',
        'תק',
        'תר',
        'תש',
        'תת',
        'תתק',
    ];
    const hebrewTens = [
        '',
        'י',
        'כ',
        'ל',
        'מ',
        'נ',
        'ס',
        'ע',
        'פ',
        'צ',
    ];
    const hebrewOnes = [
        '',
        'א',
        'ב',
        'ג',
        'ד',
        'ה',
        'ו',
        'ז',
        'ח',
        'ט',
    ];
    let result = '';

    const digitThousands = Math.floor(originalNumber / 1000);
    if (digitThousands > 0) {
        result += hebrewThousands[digitThousands];
        originalNumber %= 1000;
    }
    const digitHundreds = Math.floor(originalNumber / 100);
    if (digitHundreds > 0) {
        result += hebrewHundreds[digitHundreds];
        originalNumber %= 100;
    }
    if (originalNumber === 15) {
        result += 'טו'; // Tet-Vav
    }
    else if (originalNumber === 16) {
        result += 'טז'; // Tet-Zayin
    }
    else {
        const digitTens = Math.floor(originalNumber / 10);
        const digitOnes = originalNumber % 10;
        result += hebrewTens[digitTens];
        result += hebrewOnes[digitOnes];
    }
    return result;
}



function SteepNumberInGreenTea(originalNumber) {
    if (!Number.isInteger(originalNumber) || originalNumber < 0) {
        return ''; // Input must be a non-negative integer
    }
    if (originalNumber === 0) {
        return '零';
    }
    const digits = [
        '零',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九',
    ];
    const units = [
        '',
        '十',
        '百',
        '千',
    ];
    const bigUnits = [
        '',
        '万',
        '亿',
        '兆',
    ];
    let result = '';
    let numStr = String(originalNumber);
    let len = numStr.length;
    // Process in groups of four (万, 亿, etc.)
    for (let i = 0; i < len; i += 4) {
        let chunk = numStr.substring(Math.max(0, len - i - 4), len - i);
        let chunkResult = '';
        let zeroCount = 0;
        for (let j = 0; j < chunk.length; j++) {
            let digit = parseInt(chunk[j]);
            let unitIndex = chunk.length - 1 - j;
            if (digit === 0) {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chunkResult += '零';
                    zeroCount = 0;
                }
                chunkResult += digits[digit] + units[unitIndex];
            }
        }
        // Handle trailing zeros in a chunk
        if (zeroCount > 0 && chunkResult.length > 0 && !chunkResult.endsWith('零')) {
            chunkResult += '零';
        }
        // Add big unit if applicable
        if (chunkResult.length > 0 && i / 4 < bigUnits.length) {
            chunkResult += bigUnits[i / 4];
        }
        result = chunkResult + result;
    }
    // Special handling for numbers less than 20 (e.g., '十一' instead of '一十')
    if (originalNumber < 20 && originalNumber % 10 !== 0) {
        result = result.replace('一十', '十');
    }
    // Clean up leading '零' if not just '零'
    if (result.startsWith('零') && result.length > 1) {
        result = result.substring(1);
    }
    // Clean up trailing '零' if not just '零'
    if (result.endsWith('零') && result.length > 1) {
        result = result.substring(0, result.length - 1);
    }
    return result;
}



function ZeroArray(targetArray) {
    FillArray(targetArray, 0);
}



function FillArray(targetArray, fillValue) {
    for (i = 0; i < targetArray.length; i++) { targetArray[i] = fillValue; }
}



function GooseArray(targetArray, gooseAmount) {
    for (i = 0; i < targetArray.length; i++) { targetArray[i] += gooseAmount; }
}



function CloneArray(source, destination) {
    if (source.length == destination.length) {
        for (let i = 0; i < source.length; i++) { destination[i] = source[i]; }
    }
    else { alert('Can not clone arrays of different lengths!\n\nSource: ' + source + '\nDestination: ' + destination); }
}



function SummonGodMenu() {
    player.isGod = true;
    player.likesDelay = false;

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

    const divGodMenu = document.createElement('div');
    divGodMenu.id = 'divGodMenu';
    let godMenuContents = '';
    godMenuContents += '<button onclick="StartTime();">CHANGE SPEED</button>';
    godMenuContents += '<button onclick="PauseTime();">PAUSE TIME</button>';
    godMenuContents += '<button onclick="bushelCount[0] = 1000000; asCount = 1000000000;">JUICE COUNTS</button>';
    godMenuContents += '<button onclick="player.likesStory = !player.likesStory;">TOGGLE VERBOSE</button>';
    godMenuContents += '<button onclick="divGodMenu.remove();">DISMISS</button>';
    divGodMenu.innerHTML = godMenuContents;
    body.appendChild(divGodMenu);
}



function SetWidth(multiplier, bark = true) {
    resolutionScale = multiplier;
    buttonWindow1x.classList.remove('selectedOption');
    buttonWindow2x.classList.remove('selectedOption');
    buttonWindowAuto.classList.remove('selectedOption');
    divCalendar.classList.remove('divCalendarWidthClamped');
    divCalendar.classList.remove('divCalendarWidthAuto');
    let messageOutput = '';
    if (resolutionScale == 1) {
        buttonWindow1x.classList.add('selectedOption');
        divCalendar.classList.add('divCalendarWidthClamped');
        stylesheetActive.setAttribute('href', 'styleClamped.css?v=7777');
        const rootElement = document.documentElement;
        rootElement.style.setProperty('--pixel-scale', '1');
        messageOutput = displayResolution1x;
    }
    else if (resolutionScale == 2) {
        buttonWindow2x.classList.add('selectedOption');
        divCalendar.classList.add('divCalendarWidthClamped');
        stylesheetActive.setAttribute('href', 'styleClamped.css?v=8888');
        const rootElement = document.documentElement;
        rootElement.style.setProperty('--pixel-scale', '2');
        messageOutput = displayResolution2x;
    }
    else {
        buttonWindowAuto.classList.add('selectedOption');
        divCalendar.classList.add('divCalendarWidthAuto');
        stylesheetActive.setAttribute('href', 'style.css?v=9999');
        const rootElement = document.documentElement;
        rootElement.style.setProperty('--pixel-scale', '');
        messageOutput = displayResolutionAuto;
    }
    messageOutput += '<div class="divider">♦♦♦ ♦ ♦♦♦</div>' + displayResolutionQuote;
    if (bark) { SystemMessage(messageOutput); }
}



function SetYearFormat(desiredFormat, bark = true) {
    yearFormat = desiredFormat;
    Translate(player.speaks, false); // this repopulates the binding of the year format in the info window
    buttonYearModern.classList.remove('selectedOption');
    buttonYearRoman.classList.remove('selectedOption');
    buttonYearHebrew.classList.remove('selectedOption');
    buttonYearHan.classList.remove('selectedOption');
    let messageOutput = displayYearStyle[0];
    if (desiredFormat == 0) {
        buttonYearModern.classList.add('selectedOption');
        messageOutput += displayArabic;
    }
    else if (desiredFormat == 1) {
        buttonYearRoman.classList.add('selectedOption');
        messageOutput += displayRoman;
    }
    else if (desiredFormat == 2) {
        buttonYearHebrew.classList.add('selectedOption');
        messageOutput += displayHebrew;
    }
    else if (desiredFormat == 3) {
        buttonYearHan.classList.add('selectedOption');
        messageOutput += displayChinese;
    }
    messageOutput += displayYearStyle[1] + '<div class="divider">♦♦♦ ♦ ♦♦♦</div>' + displayYearQuote;
    if (bark) { SystemMessage(messageOutput); }
}



function Braghettone() {
    PlaySound(audioMeow);
    const victoriasLeaf = document.getElementById('imgFigLeaf');
    victoriasLeaf.remove();
}



// ۞ UTILITIES / FRACTIONS *************************************************************************
// *************************************************************************************************

// 🚨🚨🚨 ☢️ 🚨🚨🚨
function GetHyphy() {
    KillAllSounds();
    StopMusic();
    PauseTime();
    divOverlayLoading.remove();
    divFontPreloads.remove();
    divWidthClamp.remove();
    divOverlayGameEvent.remove();
    divOverlayForeword.remove();
    divOverlaySystemMessage.remove();
    divOverlayMods.remove();
    divOverlayOptions.remove();
    divOverlayResume.remove();
    divCheevo.remove();
    stylesheetActive.href = '';
    stylesheetLoading.href = '';
    //divScriptsFlushableBinB.remove();
    //divScriptsFlushableBinA.remove();
    FireToadDenominators();
}
// 🚨🚨🚨 ☢️ 🚨🚨🚨

/// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ QUACK //// \\\
///  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \|/ ////  \\\
///   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ v ////   \\\
///    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ////    \\\

let fractionsCanvasBasket = null;
let fractionsCanvas = null;
let fractionsCanvasContext = null;
const splashRevealSpeed = 6;
const firstPauseDuration = 1982;
const redrawPauseDuration = 222;
const iconBlinkDuration = 666;
const installerSplashRevealSpeed = 16;
const secondPauseDuration = firstPauseDuration;
const thirdPauseDuration = firstPauseDuration;
let iconBlinkDriver = null;
let blinkToggle = false;
let iconContainer = null;
let desktopContainer = null;
let wizardWallpaper = null;
let wizardStage = 0;
let saveAfterCrash = true;

function FireToadDenominators() {
    html.style.margin = '0px';
    html.style.border = '0px';
    html.style.padding = '0px';
    body.style.background = '#005574';
    body.style.margin = '0px';
    body.style.border = '0px';
    body.style.padding = '0px';
    const divCanvasBasket = document.createElement('div');
    fractionsCanvasBasket = divCanvasBasket;
    fractionsCanvasBasket.id = 'fractionsCanvasBasket';
    fractionsCanvasBasket.style.position = 'relative';
    fractionsCanvasBasket.style.width = '642px';
    fractionsCanvasBasket.style.height = '482px';
    fractionsCanvasBasket.style.margin = '0px auto';
    const canvasBinbowsDesktop = document.createElement('canvas');
    fractionsCanvas = canvasBinbowsDesktop;
    fractionsCanvas.id = 'fractionsCanvas';
    fractionsCanvas.style.border = '1px solid black';
    fractionsCanvasContext = fractionsCanvas.getContext('2d');
    fractionsCanvasBasket.appendChild(fractionsCanvas);
    const divCanvasSpacer = document.createElement('div');
    divCanvasSpacer.id = 'divCanvasSpacer';
    divCanvasSpacer.style.height = '20px';
    divCanvasSpacer.style.width = '20px';
    body.appendChild(divCanvasSpacer);
    body.appendChild(fractionsCanvasBasket);
    const imageBinbowsSplash = new Image();
    imageBinbowsSplash.src = 'bitmaps/System32/binbowsSplash.png';
    imageBinbowsSplash.onload = function () { DrawSplash(); }

    function DrawSplash() {
        PlaySound(audioBoot);
        fractionsCanvas.width = imageBinbowsSplash.width;
        fractionsCanvas.height = imageBinbowsSplash.height;
        fractionsCanvasContext.fillStyle = 'black';
        fractionsCanvasContext.fillRect(0, 0, fractionsCanvas.width, fractionsCanvas.height);
        function WipeUp(stepDuration, imageToReveal) {
            let drawStep = 1;
            function RenderSplashLines(lines) {
                const sw = imageToReveal.width;
                const sh = lines;
                const sy = imageToReveal.height - sh;
                const dw = sw;
                const dh = sh;
                const dy = sy;
                fractionsCanvasContext.drawImage(imageToReveal, 0, sy, sw, sh, 0, dy, dw, dh);
            }
            function IterateStep() {
                drawStep++;
                RenderSplashLines(drawStep);
                if (drawStep < imageToReveal.height) { setTimeout(() => { IterateStep(); }, stepDuration); }
                else { setTimeout(() => { DrawDesktop(); }, firstPauseDuration); }
            }
            RenderSplashLines(drawStep);
            setTimeout(() => { IterateStep(); }, stepDuration);
        }
        WipeUp(splashRevealSpeed, imageBinbowsSplash);
    }

    function DrawDesktop() {
        PlaySound(audioTada);
        body.style.backgroundImage = 'url("bitmaps/System32/BlissUXGA.jpg")';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center center';
        body.style.backgroundSize = 'cover';
        body.style.backgroundAttachment = 'fixed';
        body.style.minHeight = '100vh';

        fractionsCanvasContext.fillStyle = 'white';
        fractionsCanvasContext.fillRect(0, 0, fractionsCanvas.width, fractionsCanvas.height);
        const imageBinbowsDesktop = new Image();
        imageBinbowsDesktop.src = 'bitmaps/System32/binbowsDesktop.png';
        imageBinbowsDesktop.onload = function () {
            setTimeout(() => {
                desktopContainer = imageBinbowsDesktop;
                fractionsCanvasContext.drawImage(desktopContainer, 0, 0);
                const imageBinbowsIconInGreen = new Image();
                imageBinbowsIconInGreen.src = 'bitmaps/System32/binbowsIcon.png';
                imageBinbowsIconInGreen.onload = function () {
                    iconContainer = imageBinbowsIconInGreen;
                    const divTouchTarget = document.createElement('div');
                    divTouchTarget.id = 'divTouchTarget';
                    //divTouchTarget.innerHTML = 'HEY!';
                    divTouchTarget.style.width = '128px';
                    divTouchTarget.style.height = '128px';
                    //divTouchTarget.style.background = 'pink';
                    divTouchTarget.style.position = 'absolute';
                    divTouchTarget.style.top = '171px';
                    divTouchTarget.style.left = '257px';
                    divTouchTarget.addEventListener('click', TriggerInstall, false);
                    fractionsCanvasBasket.appendChild(divTouchTarget);
                    FireIconAttract();
                }
            }, redrawPauseDuration);
        }
    }

    function FireIconAttract() {
        iconBlinkDriver = setTimeout(() => {
            blinkToggle = !blinkToggle;
            if (blinkToggle) { fractionsCanvasContext.drawImage(iconContainer, 280, 186); }
            else { fractionsCanvasContext.drawImage(desktopContainer, 0, 0); }
            FireIconAttract();
        }, iconBlinkDuration);
    }
}

function TriggerInstall() {
    PlaySound(audioQuack);
    PlayMusic(audioFrogWar);
    clearTimeout(iconBlinkDriver);
    iconBlinkDriver = null;
    const divTouchTarget = document.getElementById('divTouchTarget');
    divTouchTarget.remove();
    const imageInstallerWindow = new Image();
    imageInstallerWindow.src = 'bitmaps/System32/installerWindow.png';
    imageInstallerWindow.onload = function () {
        fractionsCanvasContext.drawImage(imageInstallerWindow, 0, 0);
        DrawInstallerSplash();
    };
}

function DrawInstallerSplash() {
    const imageInstallerSplash = new Image();
    imageInstallerSplash.src = 'bitmaps/System32/installerSplash.png';
    imageInstallerSplash.onload = function () {
        function WipeDown(stepDuration, imageToReveal) {
            let drawStep = 1;
            let offset = 38;
            function RenderSplashLines(lines) {
                const sw = imageToReveal.width;
                const sh = lines;
                const dw = sw;
                const dh = sh;
                fractionsCanvasContext.drawImage(imageToReveal, 0, 0, sw, sh, 0, 0 + offset, dw, dh);
            }
            function IterateStep() {
                drawStep++;
                RenderSplashLines(drawStep);
                if (drawStep < imageToReveal.height) { setTimeout(() => { IterateStep(); }, stepDuration); }
                else { setTimeout(() => { DrawInstallerLogo(imageInstallerSplash); }, secondPauseDuration); }
            }
            RenderSplashLines(drawStep);
            setTimeout(() => { IterateStep(); }, stepDuration);
        }
        WipeDown(installerSplashRevealSpeed, imageInstallerSplash);
    }
}

function DrawInstallerLogo(imageInstallerSplash) {
    const imageInstallerLogo = new Image();
    imageInstallerLogo.src = 'bitmaps/System32/installerLogo.png';
    imageInstallerLogo.onload = function () {
        function WipeDown(stepDuration, imageToReveal) {
            let drawStep = 1;
            let offsetX = 64;
            let offsetY = 166;
            function RenderSplashLines(lines) {
                const sw = imageToReveal.width;
                const sh = lines;
                const dw = sw;
                const dh = sh;
                fractionsCanvasContext.drawImage(imageToReveal, 0, 0, sw, sh, 0 + offsetX, 0 + offsetY, dw, dh);
            }
            function IterateStep() {
                drawStep++;
                RenderSplashLines(drawStep);
                if (drawStep < imageToReveal.height) { setTimeout(() => { IterateStep(); }, stepDuration); }
                else { setTimeout(() => { DrawWizardWindow(imageInstallerSplash); }, thirdPauseDuration); }
            }
            RenderSplashLines(drawStep);
            setTimeout(() => { IterateStep(); }, stepDuration);
        }
        WipeDown(installerSplashRevealSpeed, imageInstallerLogo);
    }
}

function DrawWizardWindow(imageInstallerSplash) {
    fractionsCanvasContext.drawImage(imageInstallerSplash, 0, 38);
    setTimeout(() => {
        const imageInstallerWizard = new Image();
        imageInstallerWizard.src = 'bitmaps/System32/installerWizard.png';
        imageInstallerWizard.onload = function () {
            wizardWallpaper = imageInstallerWizard;
            fractionsCanvasContext.drawImage(wizardWallpaper, 12, 60);
            setTimeout(() => {
                const imageInstallerWizard1 = new Image();
                imageInstallerWizard1.src = 'bitmaps/System32/installerWizardPage1.png';
                imageInstallerWizard1.onload = function () {
                    wizardStage = 1;
                    fractionsCanvasContext.drawImage(imageInstallerWizard1, 13, 61);
                    setTimeout(() => { WizardPageTwo(); }, 3600);
                }
            }, 100);
        }
    }, 100);
}

function WizardPageTwo() {
    fractionsCanvasContext.drawImage(wizardWallpaper, 12, 60);
    setTimeout(() => {
        const imageInstallerWizard2 = new Image();
        imageInstallerWizard2.src = 'bitmaps/System32/installerWizardPage2.png';
        imageInstallerWizard2.onload = function () {
            wizardStage = 2;
            fractionsCanvasContext.drawImage(imageInstallerWizard2, 13, 61);
            setTimeout(() => {
                const buttonFF_Learn = document.createElement('button');
                buttonFF_Learn.id = 'buttonFF_Learn';
                buttonFF_Learn.innerHTML = 'VIEW DEMONSTRATION OF INSTALLATION';
                buttonFF_Learn.style.position = 'absolute';
                buttonFF_Learn.style.bottom = '187px';
                buttonFF_Learn.style.left = '169px';
                fractionsCanvasBasket.appendChild(buttonFF_Learn);
                buttonFF_Learn.addEventListener('click', WizardTriggerA, false);
                //PlaySound(audioGunshot);
            }, 100);
        }
    }, 100);
}

function WizardTriggerA() {
    if (wizardStage == 2) {
        const buttonFF_Learn = document.getElementById('buttonFF_Learn');
        buttonFF_Learn.remove();
    }
    else if (wizardStage == 4) {
        const buttonFF_Great = document.getElementById('buttonFF_Great');
        buttonFF_Great.remove();
    }
    setTimeout(() => {
        fractionsCanvasContext.drawImage(wizardWallpaper, 12, 60);
        setTimeout(() => {
            const imageInstallerWizard3 = new Image();
            imageInstallerWizard3.src = 'bitmaps/System32/installerWizardPage3.png';
            imageInstallerWizard3.onload = function () {
                wizardStage = 3;
                fractionsCanvasContext.drawImage(imageInstallerWizard3, 13, 61);
                setTimeout(() => {
                    const buttonFF_Understand = document.createElement('button');
                    buttonFF_Understand.id = 'buttonFF_Understand';
                    buttonFF_Understand.innerHTML = 'I UNDERSTAND';
                    buttonFF_Understand.style.position = 'absolute';
                    buttonFF_Understand.style.bottom = '111px';
                    buttonFF_Understand.style.left = '107px';
                    fractionsCanvasBasket.appendChild(buttonFF_Understand);
                    buttonFF_Understand.addEventListener('click', WizardTriggerC, false);
                    const buttonFF_Confound = document.createElement('button');
                    buttonFF_Confound.id = 'buttonFF_Confound';
                    buttonFF_Confound.innerHTML = 'I DO NOT UNDERSTAND, COULD YOU PLEASE REPEAT THAT?';
                    buttonFF_Confound.style.position = 'absolute';
                    buttonFF_Confound.style.bottom = '66px';
                    buttonFF_Confound.style.left = '107px';
                    fractionsCanvasBasket.appendChild(buttonFF_Confound);
                    buttonFF_Confound.addEventListener('click', WizardTriggerB, false);
                    //PlaySound(audioGunshot);
                }, 100);
            }
        }, 100);
    }, 100);
}

function WizardTriggerB() {
    const buttonFF_Understand = document.getElementById('buttonFF_Understand');
    buttonFF_Understand.remove();
    const buttonFF_Confound = document.getElementById('buttonFF_Confound');
    buttonFF_Confound.remove();
    setTimeout(() => {
        fractionsCanvasContext.drawImage(wizardWallpaper, 12, 60);
        setTimeout(() => {
            const imageInstallerWizard4 = new Image();
            imageInstallerWizard4.src = 'bitmaps/System32/installerWizardPage4.png';
            imageInstallerWizard4.onload = function () {
                wizardStage = 4;
                fractionsCanvasContext.drawImage(imageInstallerWizard4, 13, 61);
                setTimeout(() => {
                    const buttonFF_Great = document.createElement('button');
                    buttonFF_Great.id = 'buttonFF_Great';
                    buttonFF_Great.innerHTML = 'GREAT';
                    buttonFF_Great.style.position = 'absolute';
                    buttonFF_Great.style.bottom = '187px';
                    buttonFF_Great.style.left = '169px';
                    fractionsCanvasBasket.appendChild(buttonFF_Great);
                    buttonFF_Great.addEventListener('click', WizardTriggerA, false);
                    //PlaySound(audioGunshot);
                }, 100);
            }
        }, 100);
    }, 100);
}

function WizardTriggerC() {
    const buttonFF_Understand = document.getElementById('buttonFF_Understand');
    buttonFF_Understand.remove();
    const buttonFF_Confound = document.getElementById('buttonFF_Confound');
    buttonFF_Confound.remove();
    setTimeout(() => {
        fractionsCanvasContext.drawImage(wizardWallpaper, 12, 60);
        setTimeout(() => {
            const imageInstallerWizard5 = new Image();
            imageInstallerWizard5.src = 'bitmaps/System32/installerWizardPage5.png';
            imageInstallerWizard5.onload = function () {
                wizardStage = 5;
                fractionsCanvasContext.drawImage(imageInstallerWizard5, 13, 61);
                setTimeout(() => {
                    const inputFF_File = document.createElement('input');
                    inputFF_File.type = 'file';
                    inputFF_File.id = 'inputFF_File';
                    inputFF_File.name = 'inputFF_File';
                    inputFF_File.style.position = 'absolute';
                    inputFF_File.style.bottom = '275px';
                    inputFF_File.style.left = '188px';
                    inputFF_File.style.background = 'white';
                    fractionsCanvasBasket.appendChild(inputFF_File);
                    inputFF_File.addEventListener('change', WizardTriggerD, false);
                    //PlaySound(audioGunshot);
                }, 100);
            }
        }, 100);
    }, 100);
}

function WizardTriggerD() {
    let scotsman = false;
    const inputFF_File = document.getElementById('inputFF_File');
    const arrayFilePath = inputFF_File.value.split('\\');
    const fileName = arrayFilePath[arrayFilePath.length - 1];
    if (fileName == 'fart.barf') { scotsman = true; }
    inputFF_File.remove();
    fractionsCanvasContext.drawImage(wizardWallpaper, 12, 60);
    setTimeout(() => {
        if (scotsman) {
            const imageInstallerWizard7 = new Image();
            imageInstallerWizard7.src = 'bitmaps/System32/installerWizardPage7.png';
            imageInstallerWizard7.onload = function () {
                wizardStage = 7;
                PlaySound(audioTrumpet);
                fractionsCanvasContext.drawImage(imageInstallerWizard7, 13, 61);
                // ╔════════════════════════════════════════════════════════════════════════════════════════════════════════╗
                // ║                                                                                                        ║
                // ║                                                                                                        ║
                // ║                                                                                                        ║
                // ║    To Whomsoever It May Possibly Concern:                                                              ║
                // ║                                                                                                        ║
                // ║    Okay so listen, I hope this isn’t too disappointing but I’m just gonna be fully honest with you:    ║
                // ║    I feel like the only conceivable way for anyone to  possibly discover this last gag would be for    ║
                // ║    them to have come looking here in the code, right?                                                  ║
                // ║                                                                                                        ║
                // ║    Like, ok, maybe,  ***maybe*** someone might get this  far into the game——which,  that isn’t even    ║
                // ║    *remotely* a given, right?,  that any other living human being even plays this stupid game, much    ║
                // ║    less finishes it,  and then reloads their completed save,  and then finds this whole hidden Frog    ║
                // ║    Fractions Easter Egg section in  the first place, right?  All of that nonsense  is certainly not    ║
                // ║    guaranteed to ever happen——and so then, if someone DID, for them to actually  say to themselves:    ║
                // ║    “hmm, I wonder if there’s a secret extra joke, if one were to try opening some ‘correct’ file?”,    ║
                // ║    like...  holy *moley*,  what a long-shot, right?  For anyone to even consider that?  And then if    ║
                // ║    they somehow DID, well,  the most likely way for them to  find out what the ‘correct’  file name    ║
                // ║    would be, would be for them to come looking here,  in the code, like you’ve just done, right?  I    ║
                // ║    mean,  here we all are now,  correct?  (And, bully to you, by the way,  may I just say.   It  is    ║
                // ║    practically unbelievable to me that you have found this message.  You’re so clever!  You must be    ║
                // ║    super good at doing puzzles!)                                                                       ║
                // ║                                                                                                        ║
                // ║    So, again, I hope you’re not too disappointed, but it’s just that anything I could think of that    ║
                // ║    might be a fun surprise, as an outcome for you trying to open some dummy file you’d need to make    ║
                // ║    called ‘fart dot barf’ or whatever else I maybe  could think of that could hopefully be a little    ║
                // ║    funnier,  *whatever* that surprise  might be...  you’d see  what it was  right here in the code,    ║
                // ║    right now, alongside this comment, you know what I mean? So what would be the point of putting a    ║
                // ║    bunch of effort into some silly super-hidden outcome, when the surprise would be spoiled for you    ║
                // ║    whenever you got here just looking for the way to see that outcome? Am I making any sense?          ║
                // ║                                                                                                        ║
                // ║    So listen, champ†, I’m just  gonna leave this comment here for you.  I know it might be a little    ║
                // ║    underwhelming,  but I mean:  ‘BE SURE TO DRINK YOUR OVALTINE’, you know what I mean?  What could    ║
                // ║    have been here that wouldn’t have been underwhelming, you know? God bless, you rascal.              ║ (´˘ -˘ 人)
                // ║                                                                                                        ║
                // ║    If it’s any consolation,  you’re probably the only other human being  in all of recorded history    ║
                // ║    who has ever or will ever read these words, so, you know. That’s something, I suppose!              ║
                // ║                                                                                                        ║
                // ║    (†that’s short for ‘champion’)                                                                      ║
                // ║                                                                                                        ║
                // ║                                                                                                        ║
                // ║                                                                                                        ║
                // ║                                                                     Yours,                             ║
                // ║                                                                     Michael David Davis II             ║
                // ║                                                                                                        ║
                // ║                                                                                                        ║
                // ║                                                                                                        ║
                // ╚════════════════════════════════════════════════════════════════════════════════════════════════════════╝
            }
        }
        else {
            const imageInstallerWizard6_3 = new Image();
            imageInstallerWizard6_3.src = 'bitmaps/System32/installerWizardPage6-3.png';
            imageInstallerWizard6_3.onload = function () {
                const imageInstallerWizard6_2 = new Image();
                imageInstallerWizard6_2.src = 'bitmaps/System32/installerWizardPage6-2.png';
                imageInstallerWizard6_2.onload = function () {
                    const imageInstallerWizard6 = new Image();
                    imageInstallerWizard6.src = 'bitmaps/System32/installerWizardPage6.png';
                    imageInstallerWizard6.onload = function () {
                        const imageInstallerWizard6_4 = new Image();
                        imageInstallerWizard6_4.src = 'bitmaps/System32/installerWizardPage6-4.png';
                        imageInstallerWizard6_4.onload = function () {
                            const imageInstallerWizard6_5 = new Image();
                            imageInstallerWizard6_5.src = 'bitmaps/System32/installerWizardPage6-5.png';
                            imageInstallerWizard6_5.onload = function () {
                                const imageInstallerWizard6_6 = new Image();
                                imageInstallerWizard6_6.src = 'bitmaps/System32/installerWizardPage6-6.png';
                                imageInstallerWizard6_6.onload = function () {
                                    wizardStage = 6;
                                    ScriptedSequence(imageInstallerWizard6, imageInstallerWizard6_2, imageInstallerWizard6_3, imageInstallerWizard6_4, imageInstallerWizard6_5, imageInstallerWizard6_6);
                                }
                            }
                        }
                    }
                }
            }
            function ScriptedSequence(imageInstallerWizard6, imageInstallerWizard6_2, imageInstallerWizard6_3, imageInstallerWizard6_4, imageInstallerWizard6_5, imageInstallerWizard6_6) {
                StopMusic();
                let errWindowX = 50;
                let errWindowY = 120;
                function ThrowError(style = 0, xxx = errWindowX, yyy = errWindowY) {
                    PlaySound(audioSosumi);
                    let chosenArt = imageInstallerWizard6;
                    if (style == 1) { chosenArt = imageInstallerWizard6_2; }
                    else if (style == 2) { chosenArt = imageInstallerWizard6_3; }
                    else if (style == 3) { chosenArt = imageInstallerWizard6_4; }
                    else if (style == 4) { chosenArt = imageInstallerWizard6_5; }
                    else if (style == 5) { chosenArt = imageInstallerWizard6_6; }
                    fractionsCanvasContext.drawImage(chosenArt, xxx, yyy);
                }
                ThrowError(0, 126, 160);
                setTimeout(() => { ThrowError(0, 100, 140); }, 3333);
                setTimeout(() => { ThrowError(1, 150, 170); }, 7000);
                setTimeout(() => { ThrowError(2, 100, 155); }, 8888);
                setTimeout(() => { ThrowError(1, 110, 160); }, 10000);
                setTimeout(() => { ThrowError(2, 115, 164); }, 10234);
                setTimeout(() => { ThrowError(3, 115, 164); }, 10567);
                setTimeout(() => { ThrowError(4, 115 - 20, 164 + 20); }, 11000);
                setTimeout(() => { ThrowError(4, 115 + 20, 164 - 20); }, 11111);
                setTimeout(() => { ThrowError(4, 115, 164); }, 11222);
                setTimeout(() => { ThrowError(4, 115 + 10, 164 - 10); }, 11333);
                setTimeout(() => {
                    let errCount = 0;
                    const maxErrCount = 512;
                    function FranticError() {
                        errCount++;
                        errWindowX -= 2;
                        errWindowY -= 2;
                        if (errWindowX < 1) { errWindowX = 638; }
                        if (errWindowY < 1) { errWindowY = 478; }
                        ThrowError(5);
                        if (errCount != maxErrCount) { setTimeout(FranticError, 0); }
                        else { LoadDosFont(); }
                    }
                    FranticError();
                }, 13333);
            }
        }
    }, 100);
}

function LoadDosFont() {
    const dosFont = new FontFace(
        'DOS437',
        'url("fonts/DOS437.ttf")',
        {
            style: 'normal',
            weight: 'normal',
            stretch: 'normal',
        }
    );
    document.fonts.add(dosFont);
    dosFont.load().then(() => {
        console.log('Good load: ``DOS437.TTF``');
        SetupFinalCrash();
    }).catch((error) => {
        console.error('Error loading ``DOS437.TTF``: ', error);
        SetupFinalCrash();
    });

}

function SetupFinalCrash() {
    PlaySound(audioSosumi);
    PlaySound(audioCrash);
    Object.assign(body.style, {
        background: '#000082',
        color: 'white',
        fontFamily: '"DOS437"',
        fontSize: '16px',
        padding: '32px 64px',
        pointerEvents: 'none',
        touchAction: 'none',
        userSelect: 'none',
        minHeight: '',
    });
    body.innerHTML = '';
    FinalCrash();
}

function AppendToLog(lorem) {
    body.insertAdjacentHTML("beforeend", lorem);
    ScrollToBottomGently();
}

function FinalCrash() {
    AppendToLog('Michaelsoft (R) Binbows TNG (TM) Version 3.11 [64 KiB LoMEM, 65536 KiB HiMEM]<br>');
    AppendToLog('=============================================================================<br><br>');

    setTimeout(() => { AppendToLog('******* STOP:&nbsp;'); }, 100);
    setTimeout(() => { AppendToLog(' 0xC0000218'); }, 200);
    setTimeout(() => { AppendToLog('&nbsp; (0x00000000,'); }, 250);
    setTimeout(() => { AppendToLog('0x00000034,'); }, 300);
    setTimeout(() => { AppendToLog('0xFCCBFFFF,'); }, 2400);
    setTimeout(() => { AppendToLog('0x00000000)<br>'); }, 2500);
    setTimeout(() => { AppendToLog('REGISTRY_FILE_FAILURE (0E : 016F : BFF9B3D4)<br><br>'); }, 2550);

    setTimeout(() => { AppendToLog('pp3-0000'); }, 2650);
    setTimeout(() => { AppendToLog(' irql:2'); }, 2700);
    setTimeout(() => { AppendToLog(' SYSVER 0xf0000421<br><br>'); }, 2900);

    setTimeout(() => { AppendToLog('eax=ffdff13c ebx=80088968 ecx=08000800'); }, 3000);
    setTimeout(() => { AppendToLog(' edx=ff0a8f60 esi=80087010 edi=8008a048<br>'); }, 3000 + 50);
    setTimeout(() => { AppendToLog('eip=801b9dc5 esp=ff0a8b8c ebp=e10076c8'); }, 3000 + 150);
    setTimeout(() => { AppendToLog(' &nbsp;p6-0707 &nbsp; &nbsp; &nbsp; nv up ei ng nz na po nc<br>'); }, 3000 + 200);
    setTimeout(() => { AppendToLog('cr0=80050039 cr2=e1052002 cr3=00030000'); }, 3000 + 300);
    setTimeout(() => { AppendToLog(' cr4=00000000 irql:0 &nbsp; &nbsp; &nbsp; efl=ff0a8b84<br>'); }, 3000 + 350);
    setTimeout(() => { AppendToLog('gdtr=80036000 &nbsp; gdtl=03ff idtr=80036400'); }, 3000 + 450);
    setTimeout(() => { AppendToLog(' &nbsp; idtl=07ff &nbsp; &nbsp; &nbsp;tr=0028 &nbsp; &nbsp;ldtr=0000<br><br>'); }, 3000 + 500);

    setTimeout(() => { AppendToLog('Dll Base DateStmp - Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dll Base DateStmp - Name<br>'); }, 3550);
    setTimeout(() => { AppendToLog('80100000 2fc653bc - ntoskrnl.exe'); }, 4200);
    setTimeout(() => { AppendToLog(' &nbsp; &nbsp; &nbsp; &nbsp;80400000 2fb24f68 - hal.dll<br>'); }, 4200 + 69); // nice 🤘
    setTimeout(() => { AppendToLog('80010000 2fc28575 - atapi.sys &nbsp; '); }, 4200 + 150);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; 80013000 2faae8ca - SCSIPORT.SYS<br>'); }, 4200 + 160);
    setTimeout(() => { AppendToLog('8001b000 2faae85d - BusLogic.sys'); }, 4200 + 170);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; 80001000 2faae8c5 - Scsidisk.sys<br>'); }, 4200 + 180);
    setTimeout(() => { AppendToLog('80f00000 2fc4f4b2 - Ntfs.sys &nbsp; &nbsp;'); }, 4200 + 190);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fcc00000 2faae8af - Floppy.SYS<br>'); }, 4200 + 220);
    setTimeout(() => { AppendToLog('fcc10000 2fb16eef - Scsicdrm.SYS'); }, 4200 + 230);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fcc20000 2faae8a2 - Cdaudio.SYS<br>'); }, 4200 + 240);
    setTimeout(() => { AppendToLog('fcc30000 2faae8ff - Fs_Rec.SYS &nbsp;'); }, 4200 + 250);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fcc40000 2faae8b7 - Null.SYS<br>'); }, 4200 + 300);
    setTimeout(() => { AppendToLog('fcc50000 2faae8a1 - Beep.SYS &nbsp; &nbsp;'); }, 4200 + 310);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fcc60000 2faae8de - sndblst.SYS<br>'); }, 4200 + 320);
    setTimeout(() => { AppendToLog('fcc70000 2faae8b2 - i8042prt.SYS'); }, 4200 + 333);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fcc80000 2faae8b5 - Mouclass.SYS<br>'); }, 4200 + 400);
    setTimeout(() => { AppendToLog('fcc90000 2faae8b4 - Kbdclass.SYS'); }, 4200 + 410);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fccb0000 2faae88d - VIDEOPRT.SYS<br>'); }, 4200 + 420); // sweet 🤙
    setTimeout(() => { AppendToLog('fcca0000 54a49c11 - vbemp.sys &nbsp; '); }, 4200 + 430);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fccc0000 2faae892 - vga.sys<br>'); }, 4200 + 444);
    setTimeout(() => { AppendToLog('fccd0000 2faae8fd - Msfs.SYS &nbsp; &nbsp;'); }, 4200 + 500);
    setTimeout(() => { AppendToLog('&nbsp; &nbsp; &nbsp; &nbsp; fcce0000 2faae8ec - Nofaps.SYS<br><br>'); }, 4200 + 555);
    setTimeout(() => {
        AppendToLog('Address &nbsp;dword dump &nbsp; Build [1057] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Name<br><div id="divDwords"></div>');
        let divDwords = document.getElementById('divDwords');
        divDwords.style.fontFamily = '"DOS437"';
        divDwords.style.fontSize = '16px';
        divDwords.style.color = 'white';
        setTimeout(() => { DrawDwords(divDwords); }, 777);
    }, 5000);
}

function DrawDwords(divDwords) {
    let dwordsMaxRows = 22;
    const arrayDwords = [];
    const arrayApps = [
        'ntoskrnl.exe',
        'hal.dll',
        'diaper.bin',
        'systemd.so',
        'finder.dylib',
    ];
    function LoremHex(prefix = '', length = 8) {
        const hexChars = '0123456789abcdef';
        let result = prefix;
        while (result.length < length) {
            const r = Math.floor(Math.random() * 16);
            result += hexChars[r];
        }
        return result.slice(0, length);
    }
    function NewDword() {
        let dwordApp = arrayApps[0];
        if (FindWholeRandom(0, 4) == 0) { dwordApp = arrayApps[FindWholeRandom(0, arrayApps.length - 1)]; }
        const generatedDword = LoremHex('fcca') + ' ' + LoremHex('801c') + ' ' + LoremHex('801f') + ' 00000000 ' + LoremHex('fcce') + ' 00000000 ' + LoremHex() + ' - ' + dwordApp;
        arrayDwords.push(generatedDword);
        if (arrayDwords.length > dwordsMaxRows) { arrayDwords.shift(); }
        let dwordString = '';
        for (let i = 0; i < arrayDwords.length; i++) {
            dwordString += arrayDwords[i] + '<br>';
        }
        divDwords.innerHTML = dwordString;
        ScrollToBottomGently();
    }
    const arrayDwordTimeline = [
        500,
        200,
        300,
        10,
        10,
        10,
        10,
        20,
        30,
        40,
        50,
        60,
        100,
        200,
        250,
        100,
        100,
        200,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        50,
        50,
        40,
        40,
        30,
        20,
        20,
        20,
        40,
        40,
        40,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        33,
        22, 22, 22, 22,
        22, 22, 22, 22,
        22, 22, 22, 22,
        22, 22, 22, 22,
        22, 22, 22, 22,
        22, 22, 22, 333,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
    ];
    function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
    async function resolveDwordTimeline() {
        for (const step of arrayDwordTimeline) {
            await wait(step);
            NewDword();
        }
        CrashDump();
    }
    resolveDwordTimeline();
}

function CrashDump(withExtremePrejudice = true) {
    setTimeout(() => { AppendToLog('<br>Collecting data for crash dump ...<br>'); }, 200);
    setTimeout(() => { AppendToLog('Initializing disk for crash dump ...<br>'); }, 250);
    setTimeout(() => { AppendToLog('Beginning dump of physical memory.<br>'); }, 300);
    setTimeout(() => {
        AppendToLog('Dumping physical memory to disk:&nbsp;');
        const gerpGorpA = document.createElement('span');
        gerpGorpA.id = 'jesusManHowLongIsThisGoingToGoOnForBroReleaseThisGameReleaseMePleeaaasssseeeeee';
        Object.assign(gerpGorpA.style, {
            color: 'white',
            fontFamily: '"DOS437"',
            fontSize: '16px',
        });
        body.appendChild(gerpGorpA);
        gerpGorpA.style.color = 'white';
        animateCounter(gerpGorpA, 2000, () => {
            KeepThisGoingIGuess();
        });
    }, 310);
}

function animateCounter(targetElement, duration, onComplete) {
    const start = Date.now();
    const end = start + duration;
    function update() {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        targetElement.textContent = Math.floor(progress * 69); // this number just never isnt funny huh 🙄
        if (now < end) {
            requestAnimationFrame(update);
        } else if (onComplete) {
            onComplete();
        }
    }
    update();
}

function KeepThisGoingIGuess() {
    AppendToLog('<br>ERROR; Stopcode √-1: unencounterable error encountered!<br>Physical memory dump critical failure!<br>'); // (You may need to contact your system admin or technical support group for further assistance.)
    setTimeout(() => { AppendToLog('UNABLE TO RECOVER!<br><br>'); }, 300);
    setTimeout(() => {
        AppendToLog('FORMATTING MAIN DRIVE TO PREVENT HARDWARE CORRUPTION (IN PROGRESS):<br><div id="final_progress_container_final_i_mean_it"></div><br>');
        const proggo_counter = document.getElementById('final_progress_container_final_i_mean_it');
        Object.assign(proggo_counter.style, {
            color: 'white',
            fontFamily: '"DOS437"',
            fontSize: '16px',
        });
        animateDOSProgressBar(proggo_counter);
    }, 350);
    setTimeout(() => { AppendToLog('(!!!WARNING!!! **ALL** DATA ON DEVICE IS UNRECOVERABLE AND WILL BE LOST,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO **NOT** POWER DOWN)<br>'); }, 400);
}

function animateDOSProgressBar(target, options = {}) {
    const config = {
        duration: 3000,
        barLength: 70,
        onComplete: null,
        emptyChar: "░",
        filledChar: "▓",
        showCursor: true,
        prefix: "",
        ...options
    };
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (!element) {
        console.error("Target element not found");
        return;
    }
    const cursorFrames = ["|", "/", "─", "\\"];
    let cursorIndex = 0;

    // Animation state
    let progress = 0;
    let pausedProgress = null; // Holds progress value during stutter
    let pauseEndTime = 0; // When the current pause should end
    const startTime = Date.now();

    function render() {
        const filledCount = Math.floor((progress / 100) * config.barLength);
        const emptyCount = config.barLength - filledCount;
        const bar = config.filledChar.repeat(filledCount) + config.emptyChar.repeat(emptyCount);
        const percentage = progress.toString().padStart(3, "0");
        const cursor = config.showCursor ? cursorFrames[cursorIndex] + " " : "";
        element.textContent = `${config.prefix}${bar} ${cursor}${percentage}%`;
        cursorIndex = (cursorIndex + 1) % cursorFrames.length;
    }

    function animate() {
        class EscapeHatch extends Error {
            constructor() {
                super("Intentional early exit — not a bug");
            }
        }
        try {
            const now = Date.now();
            if (pausedProgress !== null) {
                if (now < pauseEndTime) {
                    // Still paused - keep showing the frozen progress
                    progress = pausedProgress;
                    render();
                    requestAnimationFrame(animate);
                    return;
                } else {
                    // Pause is over - resume normal animation
                    pausedProgress = null;
                }
            }
            const elapsed = now - startTime;
            const newProgress = Math.min(100, (elapsed / config.duration) * 100);

            // Update progress (round to whole numbers for that chunky DOS feel)
            progress = Math.floor(newProgress);
            //console.log(progress); ////////////////////////////////////////////////////////////////////////////////////////////
            if (progress > 82) { throw new EscapeHatch(); }
            render();

            // Random stuttering - occasionally pause the progress
            // More likely to stutter in the middle range (30-70%)
            if (pausedProgress === null && progress >= 30 && progress <= 70 && Math.random() < 0.06) {
                // Freeze at current progress
                pausedProgress = progress;
                const pauseDuration = Math.floor(Math.random() * 200) + 150;
                pauseEndTime = now + pauseDuration;
            }

            // Continue animation or complete
            if (progress < 100) { requestAnimationFrame(animate); }
            else {
                // Final render at 100%
                progress = 100;
                render();
                // Call completion callback if provided
                if (config.onComplete && typeof config.onComplete === "function") { config.onComplete(); }
            }
        } catch (e) {
            if (e instanceof EscapeHatch) {
                // All good. We meant to leave.
                derpDerpDerp();
                //return;
            }
            // Something else actually broke
            console.log('sup sup');
            //throw e;
        }
    }
    animate();
}

//animateDOSProgressBar("#progress-container", {
//    duration: 12000,
//    barLength: 60,
//    prefix: "FORMATTING... ",
//    onComplete: () => { derpDerpDerp(); }
//});

function derpDerpDerp() {
    AppendToLog('<br>******** EXCEPTION OCCURRED! ********<br>');
    setTimeout(() => { AppendToLog('CANNOT WRITE TO BAD SECTOR!<br><br>FrameMemory:8049C3A0H<br>CONTEXT:80395E80H &nbsp;(DSI EXCEPTION)<br>SRR0: &nbsp; 80211BB8H &nbsp; SRR1:0000B032H<br>DSISR: &nbsp;40000000H &nbsp; DAR: 11111121H<br>--------------------------------- GPR<br>'); }, 300);
    setTimeout(() => {
        AppendToLog('<div id="killMePleaseJustDoIt"></div>');
        const registerTub = document.getElementById('killMePleaseJustDoIt');
        Object.assign(registerTub.style, {
            color: 'white',
            fontFamily: '"DOS437"',
            fontSize: '16px',
        });
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H';ScrollToBottomGently(); }, 50);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H';ScrollToBottomGently(); }, 150);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H';ScrollToBottomGently(); }, 250);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H';ScrollToBottomGently(); }, 350);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H';ScrollToBottomGently(); }, 450);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H';ScrollToBottomGently(); }, 550);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H';ScrollToBottomGently(); }, 650);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH';ScrollToBottomGently(); }, 750);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H';ScrollToBottomGently(); }, 850);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H<br>R09:00000000H';ScrollToBottomGently(); }, 950);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H<br>R09:00000000H<br>R10:00000000H';ScrollToBottomGently(); }, 1000);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H R11:804002A8H<br>R01:804001F8H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H<br>R09:00000000H<br>R10:00000000H'; }, 1500);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H R11:804002A8H<br>R01:804001F8H R12:11111111H<br>R02:803F31A0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H<br>R09:00000000H<br>R10:00000000H'; }, 1550);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H R11:804002A8H<br>R01:804001F8H R12:11111111H<br>R02:803F31A0H R13:803F15C0H<br>R03:81579C88H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H<br>R09:00000000H<br>R10:00000000H'; }, 1600);
        setTimeout(() => { registerTub.innerHTML = 'R00:43300000H R11:804002A8H<br>R01:804001F8H R12:11111111H<br>R02:803F31A0H R13:803F15C0H<br>R03:81579C88H R14:00000000H<br>R04:803E0000H<br>R05:43300000H<br>R06:00000000H<br>R07:8040018CH<br>R08:00000004H<br>R09:00000000H<br>R10:00000000H'; }, 1650);
        setTimeout(() => { AppendToLog('============================================================================================<br>STOP:  {Registry File Failure}<br>The registry cannot load the hive (file):\\SystemRoot\\System\\Config\\SOFTWARE or its log or alternate.<br>It is corrupt, absent, or not writable.<br><br><br>'); }, 1776); //🇺🇸
        setTimeout(() => { AppendToLog('0x00000080 (NMI_HARDWARE_FAILURE)<br>Hardware Malfunction<br>Call your hardware vendor for support.<br>NMI: Parity Check / Memory Parity Error<br>The system has halted.<br>Power down device immediately to prevent damage to battery!<br><br><br>'); }, 1999); //☥
    }, 350);
}











function PostCrash() {
    player.hasCrashed = true;
    if (saveAfterCrash) { RecordProgress(); }
}

///    //// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\    \\\
///   //// ^ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   \\\
///  //// /|\ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  \\\
/// //// QUACK \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\\



// ۞ UTILITIES / CHEATS ****************************************************************************
// *************************************************************************************************

// ↑↑ ↓↓ ← → ← → Ⓑ Ⓐ
const コナミコマンド = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
];
let correctInputsKonami = 0;
const keyHandlerKonami = function (event) {
    if (コナミコマンド.indexOf(event.key) < 0 || event.key !== コナミコマンド[correctInputsKonami]) {
        correctInputsKonami = 0;
        return;
    }
    correctInputsKonami++;
    if (コナミコマンド.length === correctInputsKonami) {
        correctInputsKonami = 0;

        if (!player.isKonamified) {
            tilemap.src = 'bitmaps/tilemapAlt.png';
            aguaAnimString = 'url(bitmaps/agua_animAlt.gif)';
            aguaStillString = 'url(bitmaps/agua_stillAlt.gif)';
            mansionImage.src = mansionImageSrcStringAlt;
            crystalMineImage.src = crystalMineImageSrcStringAlt;
            smeltImage.src = smeltImageSrcStringAlt;
            if (gameSpeed == 'paused') { DisplayStaticImages(); }
            else { DisplayAnimatedImages(); }
            player.isKonamified = true;
            window.alert(displayGenieAlert);

            setTimeout(() => {
                tilemap.src = 'bitmaps/tilemap.png';
                aguaAnimString = 'url(bitmaps/agua_anim.gif)';
                aguaStillString = 'url(bitmaps/agua_still.gif)';
                mansionImage.src = mansionImageSrcString;
                crystalMineImage.src = crystalMineImageSrcString;
                smeltImage.src = smeltImageSrcString;
                if (gameSpeed == 'paused') { DisplayStaticImages(); }
                else { DisplayAnimatedImages(); }
                player.isKonamified = false;
                window.alert(displayGenieCancel);
            }, 5000);
        }
        else { alert(displayGenieAttempt); }
    }
};
document.addEventListener('keydown', keyHandlerKonami, false);



// id Delta-Quit-Delta
const DegreelessnessMode = [
    'i',
    'd',
    'd',
    'q',
    'd',
];
let correctInputsId = 0;
const keyHandlerId = function (event) {
    if (DegreelessnessMode.indexOf(event.key) < 0 || event.key !== DegreelessnessMode[correctInputsId]) {
        correctInputsId = 0;
        return;
    }
    correctInputsId++;
    if (DegreelessnessMode.length === correctInputsId) {
        correctInputsId = 0;
        player.isDegreeless = !player.isDegreeless;
        if (player.isDegreeless) { window.alert('DEGREELESSNESS MODE ON'); }
        else { window.alert('DEGREELESSNESS MODE OFF'); }
    }
};
document.addEventListener('keydown', keyHandlerId, false);



// ۞ UTILITIES / AUDIO *****************************************************************************
// *************************************************************************************************

function SetMusicVolume(newValue, refreshDisplay = true) {
    audioVolumes[0] = newValue;
    if (refreshDisplay) { UpdateDisplay(); }
    const volumeToPercent = (audioVolumes[0] / 100);
    for (let i = 0; i < arraySongs.length; i++) { arraySongs[i].volume = volumeToPercent; }
}



function SetSoundVolume(newValue, meow = false, refreshDisplay = true) {
    audioVolumes[1] = newValue;
    if (refreshDisplay) { UpdateDisplay(); }
    const volumeToPercent = (audioVolumes[1] / 100);
    for (let i = 0; i < arraySounds.length; i++) { arraySounds[i].volume = volumeToPercent; }
    for (let i = 0; i < arrayAmbience.length; i++) { arrayAmbience[i].volume = volumeToPercent; }
    for (let i = 0; i < arrayVoices.length; i++) { arrayVoices[i].volume = volumeToPercent; }
    if (meow) { PlaySound(audioMeow); }
}



function PlayMusic(audioSelection, fromTheTop = true) {
    if (player.likesMusic) {
        StopMusic();
        FireAudio(audioSelection, fromTheTop);
    }
}



function StopMusic() {
    for (let i = 0; i < arraySongs.length; i++) { arraySongs[i].pause(); }
}



function PlaySound(audioSelection) {
    if (player.likesSounds) { FireAudio(audioSelection, true); }
}



function KillSound(audioSelection) {
    audioSelection.pause();
}



function KillAllSounds() {
    for (let i = 0; i < arraySounds.length; i++) { arraySounds[i].pause(); }
    KillAmbience();
    KillVoices();
}



function KillAmbience() {
    for (let i = 0; i < arrayAmbience.length; i++) { arrayAmbience[i].pause(); }
}



function KillVoices() {
    for (let i = 0; i < arrayVoices.length; i++) { arrayVoices[i].pause(); }
}



function FirePRÆDIVM_TM_ExtendedAmbience() {
    if (player.hasHiredGemcutters) { PlaySound(audioChimes); }
    if (player.hasHiredBronzeworkers) { PlaySound(audioSmith); }
    else if (player.canSmelt) { PlaySound(audioSmelt); }
    else if (player.canMine) { PlaySound(audioMine); }
    else if (player.seesMountain) { PlaySound(audioBricks); }
    else if (player.canLog) {
        PlaySound(audioWoodChop);
        if (player.canSaw) { PlaySound(audioSaws); }
    }
    else if (player.seesForest) { PlaySound(audioBirds); }
    else { PlaySound(audioFarm); }
}



function FireTownshipExtendedAmbience() {
    if (villageStage < 14) PlaySound(townshipAmbience);
    if (villageStage > -1 && villageStage < 23) { PlaySound(ambienceStream); }
    if (villageStage > 0 && villageStage < 27) { PlaySound(audioSmith); }
    if (villageStage > 1 && villageStage < 19) { PlaySound(audioSaws); }
    if (villageStage > 10 && villageStage < 19) { PlaySound(audioHorse); }
    if (villageStage > 13 && villageStage < 27) { PlaySound(audioChaChing); } // replaces crickets
    if (villageStage > 18 && villageStage != 101) { PlaySound(ambienceMarket); } // replaces horse and saws
    if (villageStage > 22 && villageStage < 27) { PlaySound(audioGavel); } // replaces stream
    if (villageStage > 26) { PlaySound(ambienceMetropolis); } // replaces smith, gavel and cha-ching
    if (villageStage == 101) {
        //replaces market
        PlaySound(audioChant);
        PlaySound(audioChimes);
    }
}



function ContextAwareClack(myGuy) {
    if (myGuy.checked) { PlaySound(audioClick); }
    else { PlaySound(audioClack); }
}



function FireAudio(audioSelection, fromTheTop) {
    if (fromTheTop) { audioSelection.currentTime = 0; }
    audioSelection.play();
}



// End of Document