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
                alert('It appears that there is data saved on your device from a previous version of PRAEDIUM. It is not compatible with this newer version.');
            }
            else {
                alert('Parece que hay datos guardados en su dispositivo de una versión anterior de PRAEDIUM. No es compatible con esta versión más reciente.');
            }
            localStorage.removeItem(save_key);
        }
    }
}



function AskToResume() {
    player.speaks = loadedReport.hero.speaks;
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
    if (loadedReport.hero.isGod) { player.isGod = true; }
    Translate(player.speaks, false);
    divOverlayResume.style.display = 'block';
}



function ContinuePreviousGame() {
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
        player.likesSounds = loadedReport.hero.likesSounds;
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
        //player.hasAllWisdom = loadedReport.hero.hasAllWisdom;
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
        player.hasTargettedFarmers = loadedReport.hero.hasTargettedFarmers;
        player.hasMetFarmers = loadedReport.hero.hasMetFarmers;
        player.hasConsultedFarmers = loadedReport.hero.hasConsultedFarmers;
        player.hasHelpedFarmers = loadedReport.hero.hasHelpedFarmers;
        player.hasWon = loadedReport.hero.hasWon;
        player.hasPegasi = loadedReport.hero.hasPegasi;
        player.hasWentToAman = loadedReport.hero.hasWentToAman;
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
        /////////////////////////////////////////////////////////////////////////////////////////
        farmStage = loadedReport.stages[0];
        warehouseStage = loadedReport.stages[1];
        residenceStage = loadedReport.stages[2];
        villageStage = loadedReport.stages[3];
        hintLevel = loadedReport.stages[4];
        /////////////////////////////////////////////////////////////////////////////////////////
        mapProvinces[1][2] = loadedReport.relations[0];
        mapProvinces[2][2] = loadedReport.relations[1];
        mapProvinces[3][2] = loadedReport.relations[2];
        /////////////////////////////////////////////////////////////////////////////////////////
        CloneArray(loadedReport.counts.farmInventory, bushelCount);
        CloneArray(loadedReport.counts.farmMax, bushelMax);
        CloneArray(loadedReport.counts.farmSeeded, seededCount);
        CloneArray(loadedReport.counts.farmFarmed, farmedCount);
        CloneArray(loadedReport.counts.farmHarvested, harvestedCount);
        CloneArray(loadedReport.counts.farmSpent, spentCount);
        CloneArray(loadedReport.counts.farmPurchased, purchasedCount);
        CloneArray(loadedReport.counts.farmSold, soldCount);
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
        manweeksLost = loadedReport.counts.staffHoliday[1];
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

        residentsCount = loadedReport.counts.villageDemographics[0];
        residentsMax = loadedReport.counts.villageDemographics[1];
        pilgrimsCount = loadedReport.counts.villageDemographics[2];
        pilgrimsMax = loadedReport.counts.villageDemographics[3];
        pilgrimsLifetimeCount = loadedReport.counts.villageDemographics[4];
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
        commercialLifetimeSpend = loadedReport.counts.villageSpend[0];
        commoditiesLifetimeSpend = loadedReport.counts.villageSpend[1];
        militaryLifetimeCost = loadedReport.counts.villageSpend[2];
        medicalLifetimeCost = loadedReport.counts.villageSpend[3];
        tributeLifetimePaid = loadedReport.counts.villageSpend[4];
        horsesCount = loadedReport.counts.villageInventory[0];
        beadsCount = loadedReport.counts.villageInventory[1];
        trophiesCount = loadedReport.counts.villageInventory[2];
        scrollsCount = loadedReport.counts.villageInventory[3];
        ratsCount = loadedReport.counts.villageInventory[4];
        ghostsCount = loadedReport.counts.villageInventory[5];
        patientsCount = loadedReport.counts.villageInventory[6];
        relicCount = loadedReport.counts.villageInventory[7];
        messiahCount = loadedReport.counts.villageInventory[8];
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
        CloneArray(loadedReport.farmland.olives, arrayOlivar);
        CloneArray(loadedReport.farmland.dates, arrayDatePalmGrove);
        CloneArray(loadedReport.farmland.figs, arrayFigOrchard);
        CloneArray(loadedReport.farmland.poms, arrayPomOrchard);
        CloneArray(loadedReport.farmland.grapes, arrayVineyard);
        /////////////////////////////////////////////////////////////////////////////////////////
        residenceImage.src = loadedReport.bitmaps[0];
        villageImageActual.src = loadedReport.bitmaps[1];
        tileGrowingOlive = loadedReport.bitmaps[2];
        /////////////////////////////////////////////////////////////////////////////////////////
        CalculatePortValues();

        militarySoldiers = Math.floor(residentsCount * militaryEnlistment);
        militaryCavalryMax = militarySoldiers;
        militaryCavalryCurrent = horsesCount;
        if (militaryCavalryCurrent > militaryCavalryMax) { militaryCavalryCurrent = militaryCavalryMax; }
        militaryInfantry = militarySoldiers - militaryCavalryCurrent;

        if (player.canChooseHeir) { AnimateHeirButton(); }

        if (farmStage > 17) { buttonBarterOlive.classList.add('noMargin'); }
        /////////////////////////////////////////////////////////////////////////////////////////
        loadedReport = null;
        divOverlayResume.style.display = '';
        UpdateDisplay();
        if (player.likesMusic) { audioTheme.play(); }
        else { toggleMusic.checked = false; }
        if (!player.likesSounds) { toggleSounds.checked = false; }
        if (!player.likesProfanity) { toggleProfanity.checked = false; }
        if (player.hasBecomeHeir) { buttonReturnToMap.style.display = 'inline-block'; }
        if (villageStage > 10) { buttonBuyStone.classList.add('BuyStoneMarginOverrideClass'); }
        if (hintLevel == 13) { buttonQ.style.display = 'none'; }
        Translate(player.speaks, false); // populates the map details header correctly
        StartTime(); // ...and everything *should* just work 🤞😬
    }
}



function StartNewGame() {
    if (confirm(displayRestartConfirm)) {
        localStorage.removeItem(save_key);
        divOverlayResume.style.display = '';
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



function Achievement() {
    if (player.likesSounds) { achievementSoundRare.play(); }
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



function WriteReportToDisk(gameOver = false) {
    const d = new Date();
    let stamp = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + '.';
    let hour = d.getHours();
    if (hour < 10) { hour = '0' + hour; }
    let minute = d.getMinutes();
    if (minute < 10) { minute = '0' + minute; }
    let second = d.getSeconds();
    if (second < 10) { second = '0' + second; }
    stamp += hour + minute + ';' + second;
    let filename = 'PRAEDIUM_FULL_REPORT-' + stamp;

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
        farmSeeded: seededCount,
        farmFarmed: farmedCount,
        farmHarvested: harvestedCount,
        farmSpent: spentCount,
        farmPurchased: purchasedCount,
        farmSold: soldCount,
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
        staffHoliday: [weeksOfHoliday, manweeksLost,],
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

        villageDemographics: [residentsCount, residentsMax, pilgrimsCount, pilgrimsMax, pilgrimsLifetimeCount,],
        villageFiat: [asCount, asSpent, rentPrice, taxesValue, interestRate, tourismValue, actualBushelPrice, currentBushelPrice, actualBarleyAdjustment, currentBarleyAdjustment, valueInWheat1Log, valueInWheat1Board, valueInWheat1Stone,],
        villageEarn: [rentLifetimeCollected, taxesLifetimeCollected, interestLifetimeCollected, tourismLifetimeProfit, pilgrimLifetimeIncome, marketLifetimeRevenue,],
        villageSpend: [commercialLifetimeSpend, commoditiesLifetimeSpend, militaryLifetimeCost, medicalLifetimeCost, tributeLifetimePaid,],
        villageInventory: [horsesCount, beadsCount, trophiesCount, scrollsCount, ratsCount, ghostsCount, patientsCount, relicCount, messiahCount,],
        villageState: [horsesSpawn, horsesStarving, beadsSpawn, trophiesSpawn, scrollsSpawn, ratsSpawn,],
        villageCounters: [horseClock, tributeTimer,],
        villageDetritus: [horsesIncAmount, horsesEaten, trophyChance, ratsHighScore, patientCost, pilgrimPrayerValue, relicSpawnCount, horsesBought, horsesSold, messiahSpawnCount,],

        portDuration: shipmentDuration,
        portYields: [wheatValuePerUnit, valueFactor, importCost, importAmount,],
        portProfits: shipmentProfits,
        portCosts: shipmentCosts,
        portCounters: [shipmentTimersCurrent, shipmentTimersDefault,],

        civShepherds: shepherdsInventory,
        civMiners: minersInventory,

        debugCounters: [debugCounter,],
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
    const report = {
        bitmaps: [residenceImage.src, villageImageActual.src, tileGrowingOlive,],
        calendar: [gameTurn, year, week, olivePlantDate, estDate, heirDate,],
        counts: integerCounts,
        farmland: farmlandArrays,
        hero: player,
        stages: [farmStage, warehouseStage, residenceStage, villageStage, hintLevel],
        relations: [mapProvinces[1][2], mapProvinces[2][2], mapProvinces[3][2],],
        timestamp: Date(),
        v: version,
    };
    if (loud) {
        console.log('--------🚨 Report Start 🚨--------');
        console.log(report);
        console.log('--------🚨 Report End 🚨--------');
    };
    return report;
}



function DetermineDevice() {
    const regexp = /android|iphone|kindle|ipad/i; // regular expression containing known mobile device keywords; this may need to grow 🤔
    player.isOnMobile = regexp.test(navigator.userAgent);

    if (player.isOnMobile) {
        alert('I am a mobile device 📱');
    } else {
        alert('I am a desktop 🖥️ or laptop 💻');
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
    divSystemMessageCorpus.innerHTML = messageCorpus;
    player.seesSystemMessage = true;
    UpdateDisplay();
    buttonSystemMessageDismiss.focus({ focusVisible: false });
    divOverlaySystemMessage.scrollTo(0, 0);
}



function GameEvent(eventCorpus, eventFaçade = null, stopThePresses = true) {
    if (stopThePresses) { PauseTime(); }
    ///////////////////////////////////////////////////////////////////////////////////////////
    eventFaçade = null; // !!!!!!!!!!!!! 🚨🚨🚨 blank out ALL event art 🚨🚨🚨 !!!!!!!!!!!!!
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (eventFaçade != null) {
        divGameEventFaçade.innerHTML = '<img src="bitmaps/' + eventFaçade + '.gif" />';
        divGameEventFaçade.style.display = 'block';
    }
    else {
        divGameEventFaçade.style.display = 'none';
    }
    divGameEventCorpus.innerHTML = eventCorpus;
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



function ZeroArray(targetArray) {
    for (i = 0; i < targetArray.length; i++) { targetArray[i] = 0; }
}



function FillArray(targetArray, fillValue) {
    for (i = 0; i < targetArray.length; i++) { targetArray[i] = fillValue; }
}



function CloneArray(source, destination) {
    for (let i = 0; i < source.length; i++) { destination[i] = source[i]; }
}



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
            mansionImage.src = 'data:image/png;base64,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';
            crystalMineImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAATlJREFUWMPtVbttAzEMfXKVdMkGAbRClnCfDVxliVtDVTZwr1WuSIBsYHd291JE8jE0z5eciFR6gHAH6sMn8pECANaRSEaSGEZKuzXEukYM4+RYEKm2JOyaaNnTBu3ccpYMcmJNM27eVpMx7E0IDoeEls0byxhJRBIYxstXpW1a4yHCK3VboS/rtB5cNHDL+RKJfyOg5xPJ7BCBjcz7R5jXk5xPJJ5EGbuLUGnEdL4NAZ+CRAuRKcxCkFE1qFxCXsL+oxXnQmAdCd33h9HMtXwj6r9uxatIzD0+9TB5a901o1cZWu9Bdbo7nEznc2X418q4tOJU9r2KSsjFtj+e8fxwdzXv0YoXN9cb7Y9nAMDb432AIxbLcBu+r/xSIlBSgt3hxHcnDfwK2anzNedPk6gR6ujo6OjoWIsvwN+97ZfrI9gAAAAASUVORK5CYII=';
            smeltImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAICAYAAABJYvnfAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAmhJREFUSMfdlLFqG0EQhj8LlSZc4cKFDRYooDxCwDF4QYXqVDbYQUpiGIGbkC4kpQo3KVIITHBIAnbhIg8gIoEtUOFH8IEMEtiPcJBCKfY/3+jIE+TgEKNvd2bnn/92BViY7XKxNgQgSwGgnQQA+v0R/zNfMdtdXKwNyVLIToBboANMwbpx0SN/H//nF/AF7EOJvwXugDYwB+uV+DNgBuzFdXZT4qtAChxo/32JP6h+J+axaolPxI9iHmuU+HnMy6H6awVWko+LxdLmObAB1GKcfIqqZZXYNFOx4xgnn1lOfgs8VY45JKcsi5Pn34pxMhVvis2ATbf/D8vipUBda2aQrLMsXn6+eoyTbZbFy7n6q4AOdx2twaEUdE/2Enin4DXwpsSbwEhBRzk8XwXGCtp6PX8AJgr2/sEnLv+B1nh+Dgxc/YMSPwGGCo60Rk8lSzWxARBcAbkhS6XWlfgrYL9wQ5ZqmmPghTuA3JClmtYIaDqB71z+uupvOwHlhsf6Q+C5xOkUbnjk18CuEzh159tw9XOB5YYqaAFOJYBvagwngOff1RgScOxclO/P8+a/Azedn2ocl2fspnOmuutu3URvEzh1vCY+ck75obr74meqP3D551BpJyEuaLpmpZZdhnhbHgM74scSYgfst/iGppc3q2najfiWpoNEncTYqm5/0+3P6zfEN+W+XCy51VridbkPiTWMsXXFa66+c4v1QrwDrBWKwpqi9QL9fpTTnoTChroL7Kvj3VB8RpqAXTp+qfyT4i6we8dvQvGZ6C6wquP3ofhM8vwNx6vufJqwtRxvhKJxudi6kf8FO25PfEAsgBsAAAAASUVORK5CYII=';
            if (gameSpeed == 'paused') { DisplayStaticImages(); }
            else { DisplayAnimatedImages(); }
            player.isKonamified = true;
            window.alert(displayGenieAlert);

            setTimeout(() => {
                tilemap.src = 'bitmaps/tilemap.png';
                aguaAnimString = 'url(bitmaps/agua_anim.gif)';
                aguaStillString = 'url(bitmaps/agua_still.gif)';
                mansionImage.src = 'bitmaps/mansion.png';
                crystalMineImage.src = 'bitmaps/crystalmine.png';
                smeltImage.src = 'bitmaps/spritesheetSmelt.png';
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



// End of Document