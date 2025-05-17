// ۞ INIT ******************************************************************************************
// *************************************************************************************************

const version = '1.15.09-F';

const arrayFarmPlots = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,],
    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 0,],
    [0, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,],
    [11, 12, 13, 13, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,],
    [12, 13, 14, 14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,],
    [13, 14, 14, 14, 14, 14, 13, 12, 11, 10, 9, 8, 7, 6,],
];

const arrayOlivar = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayDatePalmGrove = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayFigOrchard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayPomOrchard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const arrayVineyard = [0, 0, 0, 0, 0, 0, 0, 0,];

const arrayFlaxPlots = [
    [3, 4, 5, 6, 7, 8,],
    [9, 10, 11, 12, 13, 14,],
    [3, 4, 5, 6, 7, 8,],
    [9, 10, 11, 12, 13, 14,],
    [3, 4, 5, 6, 7, 8,],
    [9, 10, 11, 12, 13, 14,],
    [3, 4, 5, 6, 7, 8,],
    [9, 10, 11, 12, 13, 14,],
    [3, 4, 5, 6, 7, 8,],
];

const player = {
    names: ['Mud',],
    age: 7, // longest verified documented human lifespan: Jeanne Calment of France, 122 years and 164 days
    gender: 0,
    ethnicity: 0,
    title: 0,
    saṃsāra: -0,

    speaks: null,

    likesMusic: true, // 🚨🚨🚨
    likesSounds: true,
    likesAnimations: true,
    likesStory: true,
    likesRecords: false,
    likesProfanity: true,
    likesDelay: true,

    isOnMobile: null,
    isGod: false,
    isDegreeless: false,
    isKonamified: false,
    isAt: 'Praedium',

    seesHint: false,
    seesModsWindow: false,
    seesForeword: true,
    seesSystemMessage: false,
    seesGameEvent: false,
    seesOptions: false,
    seesInventory: false,
    seesWarehouse: false,
    seesStaff: false,
    seesReport: false,
    seesOlives: false,
    seesForest: false,
    seesForestButton: false,
    seesMountain: false,
    seesMountainButton: false,
    seesVillage: false,
    seesExportButton: true,
    seesImportButton: true,

    canDismissEvent: false,
    canTill: false,
    canPlant: false,
    canWater: false,
    canHarvest: false,
    canBuyLand: false,
    canRentWarehouse: false,
    canGoHome: false,
    canBuyForest: false,
    canBuyMountain: false,
    canBarter: false,
    canHire: false,
    canAudit: false,
    canDelegate: false,
    canFound: false,
    canBuyNewFarm: false,
    canBuild: false,
    canSell: false,
    canLog: false,
    canSaw: false,
    canMine: false,
    canSmelt: false,
    canExport: false,
    canExportOil: false,
    canExportBeer: false,
    canExportWine: false,
    canExportSyrup: false,
    canExportJuice: false,
    canExportFigs: false,
    canExportTrinkets: false,
    canImport: false,
    canImportTin: false,
    canImportSalt: false,
    canHireBronzeworkers: false,
    canChooseHeir: false,

    hasBegun: false,
    hasFarmedOnce: false,
    hasDelegatedOnce: false,
    hasDelegatedTwice: false,
    hasDelegatedThrice: false,
    hasBarteredOlive: false,
    hasBarteredDate: false,
    hasBarteredFig: false,
    hasBarteredPom: false,
    hasBarteredGrape: false,
    hasSoldWheat: false,
    hasSoldBarley: false,
    hasSoldFlax: false,
    hasSoldLogs: false,
    hasSoldBoards: false,
    hasSoldStone: false,
    hasSoldPonies: false,
    hasSoldTheFarm: false,
    hasBoughtWheat: false,
    hasBoughtBarley: false,
    hasBoughtLogs: false,
    hasBoughtBoards: false,
    hasBoughtStone: false,
    hasBoughtPonies: false,
    hasMildewed: false,
    hasNewFarm: false,
    hasFlaxFarm: false,
    hasBank: false,
    hasBakery: false,
    hasOliveMill: false,
    hasBrewery: false,
    hasWinery: false,
    hasKitchen: false,
    hasPress: false,
    hasGreenhouse: false,
    hasAtelier: false,
    hasMansion: false,
    hasApiary: false,
    hasCottage: false,
    hasRaisins: false,
    hasHardtack: false,
    hasRations: false,
    hasBandages: false,
    hasCityWalls: false,
    hasArmy: false,
    hasGraveyard: false,
    hasHospital: false,
    hasCourthouse: false,
    hasRacetrack: false,
    hasOracle: false,
    hasMonument: false,
    hasSeenResidence: false,
    hasSeenVillage: false,
    hasSeenPort: false,
    hasSeenMiners: false,
    hasSeenFarmers: false,
    hasSeenShepherds: false,
    hasMerchantGuildWrit: false,
    hasFoundCopperEvidence: false,
    hasFoundMine: false,
    hasHiredBronzeworkers: false,
    hasFoundCrystalEvidence: false,
    hasHiredGemcutters: false,
    hasBeenLevied: false,
    hasAllWisdom: false,
    hasBecomeHeir: false,
    hasReturned: false,
    hasTargettedMiners: false,
    hasMetMiners: false,
    hasConsultedMiners: false,
    hasHelpedMiners: false,
    hasTargettedShepherds: false,
    hasMetShepherds: false,
    hasConsultedShepherds: false,
    hasHelpedShepherds: false,
    hasBeenSummoned: false,
    hasBeenReceived: false,
    hasPrepared: false,
    hasTargettedFarmers: false,
    hasMetFarmers: false,
    hasConsultedFarmers: false,
    hasHelpedFarmers: false,
    hasWon: false,
    hasPegasi: false,
    hasWentToAman: false,
};

const tilemap = new Image();
tilemap.src = 'bitmaps/tilemap.png';
const residenceImage = new Image();
residenceImage.src = 'bitmaps/res00.png';
const residenceTorchImage = new Image();
residenceTorchImage.src = 'bitmaps/res03plus_af1.png';
const villageImageActual = new Image();
villageImageActual.src = 'bitmaps/villageNEG05.png';
const villageImageCurrent = new Image();
villageImageCurrent.src = villageImageActual.src;
const villageImageAnimationLayerA = new Image();
villageImageAnimationLayerA.src = 'bitmaps/blank.png';
const villageImageAnimationLayerB = new Image();
villageImageAnimationLayerB.src = 'bitmaps/blank.png';
const villageImageAnimationLayerC = new Image();
villageImageAnimationLayerC.src = 'bitmaps/blank.png';
const villageImageAnimationLayerD = new Image();
villageImageAnimationLayerD.src = 'bitmaps/blank.png';
const villageImageAnimationLayerE = new Image();
villageImageAnimationLayerE.src = 'bitmaps/blank.png';
const villageImageAnimationLayerF = new Image();
villageImageAnimationLayerF.src = 'bitmaps/blank.png';
const villageImageAnimationLayerG = new Image();
villageImageAnimationLayerG.src = 'bitmaps/blank.png';
const villageImageAnimationLayerH = new Image();
villageImageAnimationLayerH.src = 'bitmaps/blank.png';
const villageImageAnimationLayerI = new Image();
villageImageAnimationLayerI.src = 'bitmaps/blank.png';
const villageImageAnimationLayerJ = new Image();
villageImageAnimationLayerJ.src = 'bitmaps/blank.png';
const villageImageAnimationLayerK = new Image();
villageImageAnimationLayerK.src = 'bitmaps/blank.png';
const villageImageAnimationLayerL = new Image();
villageImageAnimationLayerL.src = 'bitmaps/blank.png';
const villageImageAnimationLayerM = new Image();
villageImageAnimationLayerM.src = 'bitmaps/blank.png';
const villageImageAnimationLayerN = new Image();
villageImageAnimationLayerN.src = 'bitmaps/blank.png';
const villageImageAnimationLayerO = new Image();
villageImageAnimationLayerO.src = 'bitmaps/blank.png';
const villageTheaterOverlay = new Image();
villageTheaterOverlay.src = 'bitmaps/theater.png';
const portImage = new Image();
portImage.src = 'bitmaps/docks.png';
const portGullImage = new Image();
portGullImage.src = 'bitmaps/port_gull1.png';
const portFrodoImage = new Image();
portFrodoImage.src = 'bitmaps/port_frodo1.png';
const mansionImage = new Image();
mansionImage.src = 'bitmaps/mansion.png';
const beesImage = new Image();
beesImage.src = 'bitmaps/mansion_abejas.png';
const cottageAImage = new Image();
cottageAImage.src = 'bitmaps/res_cottageA.png';
const cottageBImage = new Image();
cottageBImage.src = 'bitmaps/res_cottageB.png';
const smeltImage = new Image();
smeltImage.src = 'bitmaps/spritesheetSmelt.png';
const crystalMineImage = new Image();
crystalMineImage.src = 'bitmaps/crystalmine.png';
const mapImage = new Image();
mapImage.src = 'bitmaps/map.png';
const mapPlayerImage = new Image();
mapPlayerImage.src = 'bitmaps/map_player.png';
const mapShepherdsImage = new Image();
mapShepherdsImage.src = 'bitmaps/map_shepherds.png';
const mapFarmersImage = new Image();
mapFarmersImage.src = 'bitmaps/map_farmers.png';
const mapMinersImage = new Image();
mapMinersImage.src = 'bitmaps/map_miners.png';
const mapIconsImage = new Image();
mapIconsImage.src = 'bitmaps/map_icons.png';
const neighborsShepherdsImage = new Image();
neighborsShepherdsImage.src = 'bitmaps/neighborsShepherds.png';
const neighborsSheepFacingImage = new Image();
neighborsSheepFacingImage.src = 'bitmaps/cell_sheepFacingCamera_0.png';
const neighborsSheepHeadImage = new Image();
neighborsSheepHeadImage.src = 'bitmaps/cell_sheepHead_0.png';
const neighborsSheepTailImage = new Image();
neighborsSheepTailImage.src = 'bitmaps/cell_sheepTail_0.png';
const neighborsMinersImage = new Image();
neighborsMinersImage.src = 'bitmaps/neighborsMiners.png';
const neighborsFarmersImage = new Image();
neighborsFarmersImage.src = 'bitmaps/neighborsFarmers.png';
const neighborsDucksImage = new Image();
neighborsDucksImage.src = 'bitmaps/cell_ducks_0.png';
const neighborsDagsImageA = new Image();
neighborsDagsImageA.src = 'bitmaps/cell_dagsWilly_0.png';
const neighborsDagsImageB = new Image();
neighborsDagsImageB.src = 'bitmaps/cell_dagsArgos_0.png';
const neighborsMeeplesImage = new Image();
neighborsMeeplesImage.src = 'bitmaps/cell_meeples_0.png';
const neighborsBandidoImage = new Image();
neighborsBandidoImage.src = 'bitmaps/cell_bandido_0.png';
const neighborsCampfireImage = new Image();
neighborsCampfireImage.src = 'bitmaps/cell_loomTentFire_0.png';
const neighborsCoalsImage = new Image();
neighborsCoalsImage.src = 'bitmaps/cell_coals_0.png';
const neighborsNeko_tanImage = new Image();
neighborsNeko_tanImage.src = 'bitmaps/cell_猫娘_0.png';
const neighborsHerpyImage = new Image();
neighborsHerpyImage.src = 'bitmaps/cell_noodle_0.png';
const neighborsBlinksImage = new Image();
neighborsBlinksImage.src = 'bitmaps/cell_blinks_3.png';

const divGameWindow = document.getElementById('divGameWindow');

const divOverlayLoading = document.getElementById('divOverlayLoading');

const divOverlayResume = document.getElementById('divOverlayResume');
const divResumeCorpus = document.getElementById('divResumeCorpus');
const buttonResumeYes = document.getElementById('buttonResumeYes');
const buttonResumeNo = document.getElementById('buttonResumeNo');

const divOverlayForeword = document.getElementById('divOverlayForeword');
const divForewordTitle = document.getElementById('divForewordTitle');
const divForewordSubtitle = document.getElementById('divForewordSubtitle');
const buttonForewordEnglish = document.getElementById('buttonForewordEnglish');
const buttonForewordSpanish = document.getElementById('buttonForewordSpanish');
const divForewordCorpus = document.getElementById('divForewordCorpus');
const buttonForewordDismiss = document.getElementById('buttonForewordDismiss');

const divOverlaySystemMessage = document.getElementById('divOverlaySystemMessage');
const divSystemMessageCorpus = document.getElementById('divSystemMessageCorpus');
const buttonSystemMessageDismiss = document.getElementById('buttonSystemMessageDismiss');

const divOverlayGameEvent = document.getElementById('divOverlayGameEvent');
const divGameEventFaçade = document.getElementById('divGameEventFaçade');
const divGameEventCorpus = document.getElementById('divGameEventCorpus');
const buttonGameEventDismiss = document.getElementById('buttonGameEventDismiss');

const divOverlayMods = document.getElementById('divOverlayMods');
const labelModCode = document.getElementById('labelModCode');
const textareaModCode = document.getElementById('textareaModCode');
const buttonSubmitModCode = document.getElementById('buttonSubmitModCode');
const buttonModsDismiss = document.getElementById('buttonModsDismiss');

const divOverlayOptions = document.getElementById('divOverlayOptions');
const toggleMusic = document.getElementById('toggleMusic');
const labelToggleMusic = document.getElementById('labelToggleMusic');
const toggleSounds = document.getElementById('toggleSounds');
const labelToggleSounds = document.getElementById('labelToggleSounds');
const toggleAnimation = document.getElementById('toggleAnimation');
const labelToggleAnimation = document.getElementById('labelToggleAnimation');
const toggleProfanity = document.getElementById('toggleProfanity');
const labelToggleProfanity = document.getElementById('labelToggleProfanity');
const buttonEnglish = document.getElementById('buttonEnglish');
const buttonSpanish = document.getElementById('buttonSpanish');
const divOptionsFlavour = document.getElementById('divOptionsFlavour');
const buttonOptionsDismiss = document.getElementById('buttonOptionsDismiss');

const divYear = document.getElementById('divYear');
const divRuneSeason = document.getElementById('divRuneSeason');
const divStonesSeason = document.getElementById('divStonesSeason');
const divEmbossZodiacChinese = document.getElementById('divEmbossZodiacChinese');
const divHourglass = document.getElementById('divHourglass');
const divEmbossSeason = document.getElementById('divEmbossSeason');
const divWeek = document.getElementById('divWeek');
const divStonesWeek = document.getElementById('divStonesWeek');
const divRuneMonth = document.getElementById('divRuneMonth');
const divRuneElement = document.getElementById('divRuneElement');

const divViewResidence = document.getElementById('divViewResidence');
const buttonGoToPraediumFromRes = document.getElementById('buttonGoToPraediumFromRes');
const canvasResidence = document.getElementById('canvasResidence');
const canvasResidenceContext = canvasResidence.getContext('2d');
const buttonWasteTime = document.getElementById('buttonWasteTime');
const buttonImproveResidence = document.getElementById('buttonImproveResidence');
const tableResidenceInventory = document.getElementById('tableResidenceInventory');
const tableResidenceReport = document.getElementById('tableResidenceReport');

const divWorkshopBakery = document.getElementById('divWorkshopBakery');
const imgWorkshopBakery = document.getElementById('imgWorkshopBakery');
const tableWorkshopBakery = document.getElementById('tableWorkshopBakery');
const divWorkshopOliveMill = document.getElementById('divWorkshopOliveMill');
const imgWorkshopOliveMill = document.getElementById('imgWorkshopOliveMill');
const tableWorkshopOliveMill = document.getElementById('tableWorkshopOliveMill');
const divWorkshopBrewery = document.getElementById('divWorkshopBrewery');
const imgWorkshopBrewery = document.getElementById('imgWorkshopBrewery');
const tableWorkshopBrewery = document.getElementById('tableWorkshopBrewery');
const divWorkshopWinery = document.getElementById('divWorkshopWinery');
const imgWorkshopWinery = document.getElementById('imgWorkshopWinery');
const tableWorkshopWinery = document.getElementById('tableWorkshopWinery');
const divWorkshopKitchen = document.getElementById('divWorkshopKitchen');
const imgWorkshopKitchen = document.getElementById('imgWorkshopKitchen');
const tableWorkshopKitchen = document.getElementById('tableWorkshopKitchen');
const divWorkshopPress = document.getElementById('divWorkshopPress');
const imgWorkshopPress = document.getElementById('imgWorkshopPress');
const tableWorkshopPress = document.getElementById('tableWorkshopPress');
const divWorkshopGreenhouse = document.getElementById('divWorkshopGreenhouse');
const imgWorkshopGreenhouse = document.getElementById('imgWorkshopGreenhouse');
const tableWorkshopGreenhouse = document.getElementById('tableWorkshopGreenhouse');
const divWorkshopAtelier = document.getElementById('divWorkshopAtelier');
const imgWorkshopAtelier = document.getElementById('imgWorkshopAtelier');
const tableWorkshopAtelier = document.getElementById('tableWorkshopAtelier');
const divWorkshopApiary = document.getElementById('divWorkshopApiary');
const imgWorkshopApiary = document.getElementById('imgWorkshopApiary');
const tableWorkshopApiary = document.getElementById('tableWorkshopApiary');
const divWorkshopCottage = document.getElementById('divWorkshopCottage');
const imgWorkshopCottage = document.getElementById('imgWorkshopCottage');
const tableWorkshopCottage = document.getElementById('tableWorkshopCottage');

const divViewPraedium = document.getElementById('divViewPraedium');
const buttonGoToResidence = document.getElementById('buttonGoToResidence');
const buttonGoToTownship = document.getElementById('buttonGoToTownship');
const canvasFarm = document.getElementById('canvasFarm');
const canvasFarmContext = canvasFarm.getContext('2d');
const tableFarmInventory = document.getElementById('tableFarmInventory');
const theadFarmInventory = document.getElementById('theadFarmInventory');
const tbodyFarmInventory = document.getElementById('tbodyFarmInventory');
const tableFarmStaff = document.getElementById('tableFarmStaff');
const theadFarmStaff = document.getElementById('theadFarmStaff');
const tbodyFarmStaff = document.getElementById('tbodyFarmStaff');
const tableFarmReport = document.getElementById('tableFarmReport');
const theadFarmReport = document.getElementById('theadFarmReport');
const tbodyFarmReport = document.getElementById('tbodyFarmReport');
const divViewForest = document.getElementById('divViewForest');
const canvasForest = document.getElementById('canvasForest');
const canvasForestContext = canvasForest.getContext('2d');
const tableForestInventory = document.getElementById('tableForestInventory');
const theadForestInventory = document.getElementById('theadForestInventory');
const tbodyForestInventory = document.getElementById('tbodyForestInventory');
const tableForestStaff = document.getElementById('tableForestStaff');
const theadForestStaff = document.getElementById('theadForestStaff');
const tbodyForestStaff = document.getElementById('tbodyForestStaff');
const tableForestReport = document.getElementById('tableForestReport');
const theadForestReport = document.getElementById('theadForestReport');
const tbodyForestReport = document.getElementById('tbodyForestReport');
const divViewMountain = document.getElementById('divViewMountain');
const canvasMountain = document.getElementById('canvasMountain');
const canvasMountainContext = canvasMountain.getContext('2d');
const tableMountainInventory = document.getElementById('tableMountainInventory');
const theadMountainInventory = document.getElementById('theadMountainInventory');
const tbodyMountainInventory = document.getElementById('tbodyMountainInventory');
const tableMountainStaff = document.getElementById('tableMountainStaff');
const theadMountainStaff = document.getElementById('theadMountainStaff');
const tbodyMountainStaff = document.getElementById('tbodyMountainStaff');
const tableMountainReport = document.getElementById('tableMountainReport');
const theadMountainReport = document.getElementById('theadMountainReport');
const tbodyMountainReport = document.getElementById('tbodyMountainReport');
const buttonTill = document.getElementById('buttonTill');
const buttonTillDecal = document.getElementById('buttonTillDecal');
const buttonPlant = document.getElementById('buttonPlant');
const buttonPlantDecal = document.getElementById('buttonPlantDecal');
const buttonWater = document.getElementById('buttonWater');
const buttonWaterDecal = document.getElementById('buttonWaterDecal');
const buttonHarvest = document.getElementById('buttonHarvest');
const buttonHarvestDecal = document.getElementById('buttonHarvestDecal');
const buttonPriority = document.getElementById('buttonPriority');
const buttonPriorityDecal = document.getElementById('buttonPriorityDecal');
const buttonPriorityOption = document.getElementById('buttonPriorityOption');
const buttonBuyLand = document.getElementById('buttonBuyLand');
const buttonRentWarehouse = document.getElementById('buttonRentWarehouse');
const buttonBuyForest = document.getElementById('buttonBuyForest');
const buttonForest = document.getElementById('buttonForest');
const buttonBuyMountain = document.getElementById('buttonBuyMountain');
const buttonMountain = document.getElementById('buttonMountain');
const buttonFound = document.getElementById('buttonFound');
const buttonNewFarm = document.getElementById('buttonNewFarm');
const buttonHire = document.getElementById('buttonHire');
const buttonAudit = document.getElementById('buttonAudit');
const buttonBarterAll = document.getElementById('buttonBarterAll');
const buttonBarterOlive = document.getElementById('buttonBarterOlive');
const buttonBarterDate = document.getElementById('buttonBarterDate');
const buttonBarterFig = document.getElementById('buttonBarterFig');
const buttonBarterPom = document.getElementById('buttonBarterPom');
const buttonBarterGrape = document.getElementById('buttonBarterGrape');

const divViewTownship = document.getElementById('divViewTownship');
const buttonGoToPraedium = document.getElementById('buttonGoToPraedium');
const buttonGoToPort = document.getElementById('buttonGoToPort');
const divVillageName = document.getElementById('divVillageName');
const divVillageEstDate = document.getElementById('divVillageEstDate');
const canvasVillage = document.getElementById('canvasVillage');
const canvasVillageContext = canvasVillage.getContext('2d');
const divVillageLasTablas = document.getElementById('divVillageLasTablas');
const buttonBuild = document.getElementById('buttonBuild');
const buttonVisitOracle = document.getElementById('buttonVisitOracle');
const buttonBuyWheat = document.getElementById('buttonBuyWheat');
const buttonSellWheat = document.getElementById('buttonSellWheat');
const buttonBuyBarley = document.getElementById('buttonBuyBarley');
const buttonSellBarley = document.getElementById('buttonSellBarley');
const buttonSellFlax = document.getElementById('buttonSellFlax');
const buttonBuyLogs = document.getElementById('buttonBuyLogs');
const buttonSellLogs = document.getElementById('buttonSellLogs');
const buttonBuyBoards = document.getElementById('buttonBuyBoards');
const buttonSellBoards = document.getElementById('buttonSellBoards');
const buttonBuyStone = document.getElementById('buttonBuyStone');
const buttonSellStone = document.getElementById('buttonSellStone');
const buttonBuyHorses = document.getElementById('buttonBuyHorses');
const buttonSellHorses = document.getElementById('buttonSellHorses');

const divViewPort = document.getElementById('divViewPort');
const buttonGoToTownshipFromPort = document.getElementById('buttonGoToTownshipFromPort');
const divPortName = document.getElementById('divPortName');
const divPortSubtitle = document.getElementById('divPortSubtitle');
const canvasPort = document.getElementById('canvasPort');
const canvasPortContext = canvasPort.getContext('2d');
const imgTradeGoods = document.getElementById('imgTradeGoods');
const tableExports = document.getElementById('tableExports');
const buttonEstablishTradeRoute = document.getElementById('buttonEstablishTradeRoute');
const imgTradeTin = document.getElementById('imgTradeTin');
const tableImports = document.getElementById('tableImports');
const buttonImportTin = document.getElementById('buttonImportTin');

const divViewHeirWorkshop = document.getElementById('divViewHeirWorkshop');
const divHeirWorkshopForeward = document.getElementById('divHeirWorkshopForeward');
const divHeirWorkshopForewardHeadline = document.getElementById('divHeirWorkshopForewardHeadline');
const buttonHeirBegin = document.getElementById('buttonHeirBegin');
const divHeirWorkshopName = document.getElementById('divHeirWorkshopName');
const divHeirWorkshopNameHeadline = document.getElementById('divHeirWorkshopNameHeadline');
const selectHeirNames = document.getElementById('selectHeirNames');
const buttonHeirChooseName = document.getElementById('buttonHeirChooseName');
const divHeirWorkshopGender = document.getElementById('divHeirWorkshopGender');
const divHeirWorkshopGenderHeadline = document.getElementById('divHeirWorkshopGenderHeadline');
const divHeirGenderIcon = document.getElementById('divHeirGenderIcon');
const buttonHeirGendersLeft = document.getElementById('buttonHeirGendersLeft');
const buttonHeirChooseGender = document.getElementById('buttonHeirChooseGender');
const buttonHeirGendersRight = document.getElementById('buttonHeirGendersRight');
const divHeirWorkshopEthnicity = document.getElementById('divHeirWorkshopEthnicity');
const divHeirWorkshopEthnicityHeadline = document.getElementById('divHeirWorkshopEthnicityHeadline');
const selectHeirEthnicities = document.getElementById('selectHeirEthnicities');
const buttonHeirChooseEthnicity = document.getElementById('buttonHeirChooseEthnicity');
const divHeirWorkshopTitle = document.getElementById('divHeirWorkshopTitle');
const divHeirWorkshopTitleHeadline = document.getElementById('divHeirWorkshopTitleHeadline');
const selectHeirTitles = document.getElementById('selectHeirTitles');
const buttonHeirChooseTitle = document.getElementById('buttonHeirChooseTitle');
const divHeirWorkshopFaces = document.getElementById('divHeirWorkshopFaces');
const divHeirWorkshopFacesHeadline = document.getElementById('divHeirWorkshopFacesHeadline');
const buttonHeirChooseFace1 = document.getElementById('buttonHeirChooseFace1');
const buttonHeirChooseFace2 = document.getElementById('buttonHeirChooseFace2');
const buttonHeirChooseFace3 = document.getElementById('buttonHeirChooseFace3');
const buttonHeirChooseFace4 = document.getElementById('buttonHeirChooseFace4');
const buttonHeirChooseFace5 = document.getElementById('buttonHeirChooseFace5');
const buttonHeirChooseFace6 = document.getElementById('buttonHeirChooseFace6');
const buttonHeirChooseFace7 = document.getElementById('buttonHeirChooseFace7');
const buttonHeirChooseFace8 = document.getElementById('buttonHeirChooseFace8');
const buttonHeirChooseFace9 = document.getElementById('buttonHeirChooseFace9');
const spanHeirFacesPagination = document.getElementById('spanHeirFacesPagination');
const buttonHeirFacesLeft = document.getElementById('buttonHeirFacesLeft');
const buttonHeirFacesRight = document.getElementById('buttonHeirFacesRight');
const divHeirWorkshopSummary = document.getElementById('divHeirWorkshopSummary');
const buttonHeirGoBack = document.getElementById('buttonHeirGoBack');

const divViewMap = document.getElementById('divViewMap');
const buttonReturnToMap = document.getElementById('buttonReturnToMap');
const canvasMap = document.getElementById('canvasMap');
const canvasMapContext = canvasMap.getContext('2d');
const buttonMapTargetPrev = document.getElementById('buttonMapTargetPrev');
const buttonMapTargetNext = document.getElementById('buttonMapTargetNext');
const divMapTarget = document.getElementById('divMapTarget');
const spanDetailsLabel = document.getElementById('spanDetailsLabel');
const buttonMapEcon = document.getElementById('buttonMapEcon');
const buttonMapMil = document.getElementById('buttonMapMil');
const buttonMapPol = document.getElementById('buttonMapPol');
const divMapDetailsView = document.getElementById('divMapDetailsView');
const buttonMapVisitProvince = document.getElementById('buttonMapVisitProvince');

const divViewShepherds = document.getElementById('divViewShepherds');
const divShepherdsName = document.getElementById('divShepherdsName');
const divShepherdsSubtitle = document.getElementById('divShepherdsSubtitle');
const canvasShepherds = document.getElementById('canvasShepherds');
const canvasShepherdsContext = canvasShepherds.getContext('2d');
const divShepherdsReport = document.getElementById('divShepherdsReport');
const buttonShepherdsEvents = document.getElementById('buttonShepherdsEvents');

const divViewMiners = document.getElementById('divViewMiners');
const divMinersName = document.getElementById('divMinersName');
const divMinersSubtitle = document.getElementById('divMinersSubtitle');
const canvasMiners = document.getElementById('canvasMiners');
const canvasMinersContext = canvasMiners.getContext('2d');
const divMinersReport = document.getElementById('divMinersReport');
const buttonMinersEvents = document.getElementById('buttonMinersEvents');

const divViewFarmers = document.getElementById('divViewFarmers');
const divFarmersName = document.getElementById('divFarmersName');
const divFarmersSubtitle = document.getElementById('divFarmersSubtitle');
const canvasFarmers = document.getElementById('canvasFarmers');
const canvasFarmersContext = canvasFarmers.getContext('2d');
const divFarmersReport = document.getElementById('divFarmersReport');
const buttonFarmersEvents = document.getElementById('buttonFarmersEvents');

const buttonOptions = document.getElementById('buttonOptions');
const buttonQ = document.getElementById('buttonQ');
const buttonStar = document.getElementById('buttonStar');
const buttonI = document.getElementById('buttonI');
const buttonCC0 = document.getElementById('buttonCC0');
const buttonRecords = document.getElementById('buttonRecords');

const buttonChooseHeir = document.getElementById('buttonChooseHeir');
const imgNirvana = document.getElementById('imgNirvana');
const buttonSailWest = document.getElementById('buttonSailWest');
const buttonPlayGod = document.getElementById('buttonPlayGod');

const spanCheevoText = document.getElementById('spanCheevoText');

let canvasFireworks = null;
let canvasFireworksContext = null;

const formatterEnglish = new Intl.NumberFormat('en-US');
const formatterSpanish = new Intl.NumberFormat('es');
const formatterSpanishInventory = new Intl.NumberFormat('de-DE');
let formatterCurrent = formatterEnglish;

let gameTurn = 1; // 📅
const yearAtStartProlepticGregorian = -200; // 200 B.C. ✝️
const yearAtStartHebrew = 3560; // according to https://sacred-texts.com/time/cal/jdate.htm ✡️
const yearAtStartRoman = 554; // according to https://en.wikipedia.org/wiki/Ab_urbe_condita 🔥🐂🔥
const playerBirthYear = yearAtStartHebrew - player.age;
const playerBirthWeek = 21;
let year = 1;
let week = 1;

// 0. Wheat 🌾, 1. Barley 🌾, 2. Olive 🫒, 3. Date 🫐, 4. Fig 🍅, 5. Pomegranate 🍎, 6. Grape 🍇, 7. Flax 🌾
const bushelCount = [10, 0, 0, 0, 0, 0, 0, 0,];
const bushelMax = [30, 3000000, 300, 30000, 30000, 30000, 30000, 3000000,];
const seededCount = [0, 0, 0,];
const farmedCount = [0, 0, 0, 0, 0, 0, 0, 0,];
const harvestedCount = [0, 0, 0, 0, 0, 0, 0, 0,];
const spentCount = [0, 0, 0, 0, 0, 0, 0, 0,];
const purchasedCount = [0, 0, 0, 0, 0, 0, 0, 0,];
const soldCount = [0, 0, 0, 0, 0, 0, 0, 0,];
const barterMaxBulkCount = 1000;
const barterExchangeRate = [1, 1, 10, 14, 18, 24, 32,];

let plantCost = 1;
let yieldMin = 4;
let yieldMax = 12;
let flaxFactor = 2;
let olivesGrowthCounter = 0;
let olivesMin = 12;
let olivesMax = 18;
let datesMin = 24;
let datesMax = 33;
let figsMin = 32;
let figsMax = 42;
let pomegranateMin = 28;
let pomegranateMax = 36;
let grapesMin = 40;
let grapesMax = 54;

const farmSize = [1, 1,];
const flaxSize = [6, 9,];
let farmStage = 0;
let warehouseStage = 0;
const olivePlantDate = [0, 0,];

let handsAvailable = 2;
let handsMax = 36;
let priority = 'Reap';
let weeksOfHoliday = 0;
let manweeksLost = 0;
let handsHired = 0;
let vigneronsHired = 0;
let arboristsHired = 0;
let horticulturalistsHired = 0;

let logsCount = 0;
let logsMin = 10;
let logsMax = 15;
let loggersHired = 4;

let boardsCount = 0;
let boardsPerLog = 4;
let logsSawnPerWeek = 10;
let sawyersHired = 4;

// 0. Logs 🪵, 1. Boards 📏
const forestProducedCount = [0, 0,];
const forestSpentCount = [0, 0,];
const forestPurchasedCount = [0, 0,];
const forestSoldCount = [0, 0,];

let stoneCount = 0;
let stoneMin = 40;
let stoneMax = 44;
let masonsHired = 10;

let mineTimer = 0;
const mineTimerLimit = 21;
let oreCopperCount = 0;
let oreCopperMin = 40;
let oreCopperMax = 44;
let minersHired = 10;

let crystalTimer = 0;
const crystalTimerLimit = 8;
let crystalsCount = 0;
let crystalHarvest = 100;
let gemcuttersHired = 5;

let ingotsCopperCount = 0;
let ingotsOreCostPerIngot = 100;
let ingotsCopperYieldPerTurn = 1;
let smeltersHired = 4;

let ingotsTinCount = 0;
let ingotsBronzeCount = 0;
let bronzeTinNeed = 2;
let bronzeCopperNeed = 8;
let metallurgistsHired = 0;
let bronzeworkCountdownTimerMax = 4;
let bronzeworkCountdownTimer = bronzeworkCountdownTimerMax;

// 0. Stone 🪨, 1. Copper Ore ⛏️, 2. Copper Ingots 🧱, 3. Tin Ingots 🧱, 4. Bronze Ingots 🧱, 5. Crystal 💎
const mountainProducedCount = [0, 0, 0, 0, 0, 0,];
const mountainSpentCount = [0, 0, 0, 0, 0, 0,];
const mountainPurchasedCount = [0, 0, 0, 0, 0, 0,];
const mountainSoldCount = [0, 0, 0, 0, 0, 0,];

// 0. Hands 🧑‍🌾, 1. Loggers 🪓, 2. Sawyers 🪚, 3. Masons 🔨, 4. Miners ⛏️, 5. Smelters 🔥, 6. Vignerons 🍇, 7. Arborists 🌲, 8. Horticulturalists 🐌, 9. Metallurgists 💍, 10. Gemcutters 💎, 11. Police 👮
const paidOutWheat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const starving = [false, false, false, false, false, false, false, false, false, false, false, false,];
const starvingBuffer = 10;

let residenceStage = 0;
let loavesPaymentAmount = 14;

// 0. Loaves 🥖, 1. Oil 🪔, 2. Beer 🍺, 3. Wine 🍷, 4. Syrup 🍯, 5. Juice 🧃, 6. Fruit Leather (Sun-Dried Fig) 🫐, 7. Trinkets 💍, 8. Gems 💎, 9. Honey 🍯, 10. Raisins 🍇, 11. Rations 🫔, 12. Linen 🧶, 13. Bandages 🩹, 14. Hardtack 🥮
const residenceIngredientWorkshopPortion = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5, 0.8, 0.5, 0.2, 1.0, 0.75, 1.0, [0.2, 1.0,],];
const residenceIngredientsIn = [1, 8, 4, 50, 6, 3, 5, 1, 100, 5, 5, [10, 1, 30,], 10, 1, [1, 1,],];
const residenceProductOut = [30, 1, 1, 1, 1, 1, 1, 5, 1, 20, 1, 240, 1, 4, 1,];
const residenceIngredientInStockCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 0,], 0, '𝑻𝑯𝑰𝑺 𝑺𝑷𝑨𝑪𝑬 𝑰𝑵𝑻𝑬𝑵𝑻𝑰𝑶𝑵𝑨𝑳𝑳𝒀 𝑳𝑬𝑭𝑻 𝑩𝑳𝑨𝑵𝑲', 0, 0, [0, 0,],];
const residenceIngredientConsumedCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 0,], 0, 0, 0, 0, [0, 0,],];
const residenceInStockCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const residenceProducedCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const residenceSpentCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let saltSpent = 0;
const residenceShippedCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let saltShipped = 0;

const nameVillage = 'Alʿard al-Janubia'; // الأرض الجنوبية == Terra Australis. HBD, Grant! 🎂🫂
const estDate = [0, 0,];
let villageStage = -5;

let residentsCount = 0;
let residentsMax = 0;

let asCount = 0;
let asSpent = 0;
let commercialLifetimeSpend = 0;
let commoditiesLifetimeSpend = 0;

let rentPrice = 10;
let rentLifetimeCollected = 0;

let taxesValue = 69; // ☯️
let taxesLifetimeCollected = 0;

let interestRate = 0.0056; // Nov. 2024 U.S. Nat'l Ave.
let interestLifetimeCollected = 0;

let horsesSpawn = false;
let horseClock = 0;
let horsesIncAmount = 1;
let horsesCount = 0;
let pegasiCount = 0;
let horsesEaten = 0;
let horsesStarving = false;
let horsesBought = 0;
let horsesSold = 0;

let beadsSpawn = false;
const beadsIncAmount = 42; // Life, the Universe and Everything 👽🤖📖
let beadsCount = 0;

let trophiesSpawn = false;
let trophiesCount = 0;
let trophyChance = 10;
let tourismValue = 10;
let tourismLifetimeProfit = 0;

let scrollsSpawn = false;
const scrollsIncAmount = 1;
let scrollsCount = 0;

let ratsSpawn = false;
let ratsOutbreak = false;
let ratsCount = 1;
let ratsHighScore = 1;
let ratPenaltyFactor = 0;

let militaryLifetimeCost = 0;
let militaryUnitCost = 30;
let militaryUnitCostFactor = 3;
let militaryEnlistment = 0.2;
let militarySoldiers = 0;
let militaryInfantry = 0;
let militaryInfantryCombatValue = 5;
let militaryCavalryMax = 0;
let militaryCavalryCurrent = 0;
let militaryCavalryCombatValue = 20;

let ghostsCount = 0;

let patientsCount = 0;
let patientCost = 100;
let medicalLifetimeCost = 0;

let pilgrimsCount = 0;
let pilgrimsMax = 0;
let pilgrimsLifetimeCount = 0;
let pilgrimPrayerValue = 1;
let pilgrimLifetimeIncome = 0;
let relicSpawnCount = 1;
let relicCount = 0;

const commodityBulkCount = 10000;
const commodityHorseCount = 10;
const commodityHorsePrice = 60000;
let actualBushelPrice = 50000;
let currentBushelPrice = actualBushelPrice;
let actualBarleyAdjustment = 10000;
let currentBarleyAdjustment = actualBarleyAdjustment;
let marketLifetimeRevenue = 0;

let valueInWheat1Log = 2;
let valueInWheat1Board = 4;
let valueInWheat1Stone = 8;

// 0. Oil 🪔, 1. Beer 🍺, 2. Wine 🍷, 3. Syrup 🍯, 4. Juice 🧃, 5. Fruit Leather (Sun-Dried Fig) 🫐, 6. Trinkets 💎, 7. Tin 🧱, 8. Salt 🧂
const wheatValuePerUnit = [null, null, null, null, null, null,];
const shipmentTimersCurrent = [24, 4, 16, 8, 2, 12, 48, 12, 24,];
const shipmentTimersDefault = [24, 4, 16, 8, 2, 12, 48, 12, 24,];
const shipmentDuration = [6, 1, 4, 2, 2, 3, 1, 3, 6,];
const shipmentProfits = [0, 0, 0, 0, 0, 0, 0,];
const valueFactor = [12, 42, 24, 16, 9, 6, 10,];
const shipmentCosts = [0, 0,];
const importCost = [8000, 100000,];
const importAmount = [40, 100,];
let trinketValue = null;
function CalculatePortValues() {
    wheatValuePerUnit[0] = Math.ceil(barterExchangeRate[2] * (residenceIngredientsIn[1] / residenceProductOut[1])); // Oil
    wheatValuePerUnit[1] = Math.ceil(barterExchangeRate[1] * (residenceIngredientsIn[2] / residenceProductOut[2])); // Beer
    wheatValuePerUnit[2] = Math.ceil(barterExchangeRate[6] * (residenceIngredientsIn[3] / residenceProductOut[3])); // Wine
    wheatValuePerUnit[3] = Math.ceil(barterExchangeRate[3] * (residenceIngredientsIn[4] / residenceProductOut[4])); // Syrup
    wheatValuePerUnit[4] = Math.ceil(barterExchangeRate[5] * (residenceIngredientsIn[5] / residenceProductOut[5])); // Juice
    wheatValuePerUnit[5] = Math.ceil(barterExchangeRate[4] * (residenceIngredientsIn[6] / residenceProductOut[6])); // Figs
    trinketValue = Math.ceil(((importCost[0] / importAmount[0]) / residenceProductOut[7]) * valueFactor[6]);
}
CalculatePortValues();

const priceStage1 = 50;
const priceStage2 = 100;
const priceStage3 = 200;
const priceAccountant = 150;
const priceStage4 = 500;
const priceStage5 = 300;
const priceStage6 = 1000;
const priceStage7 = 0;
const priceStage8 = 0;
const priceStage9 = 0;
const priceStage10 = 0;
const priceStage11 = 1200;
const priceForest = 600;
const priceLoggingCamp = 400;
const priceSawmill = 800;
const priceStage12 = [400, 8000,];
const priceStage13 = 2400;
const priceStage14 = [600, 16000,];
const priceQuarry = 1600;
const priceStage15 = [4000, 60000,];
const priceStage16 = [100, 100,];
const priceStage17 = [3200, 32000,];
const priceStage18 = [4800, 2400,];
const priceNewFarm = 1000000;
const priceFlaxFarm = 5000000;

const priceWarehouse0 = 20;
const priceWarehouse1 = 50;
const priceWarehouse2 = 1000;

const priceResidence00 = 21; // Straw Shanty ⛺
const priceResidence01 = [42, 21,]; // Log Cabin 🏕️
const priceResidence02 = [84, 42,]; // Board House 🛖
const priceResidence03 = [168, 84, 42,]; // Bakery 🥖
const priceResidence04 = [168, 84, 42, 21,]; // Olive Mill 🪔
const priceResidence05 = [168, 84, 42, 21,]; // Plaster House 🎪
const priceResidence06 = [168, 84, 42, 21,]; // Brewery 🍺
const priceResidence07 = [168, 84, 42, 21,]; // Winery 🍷
const priceResidence08 = [168, 84, 42, 21,]; // Kitchen 🍯
const priceResidence09 = [168, 84, 42, 21,]; // Press 🧃
const priceResidence10 = [168, 84, 42, 21,]; // Greenhouse 🫐
const priceResidence11 = [336, 168, 84, 42,]; // Stone House 🏠
const priceResidence12 = [336, 168, 84, 42,]; // Atelier 💎
const priceResidence13 = [2500000, 12000, 16000, 500, 2000, 100,]; // Mansion 🏡
const priceResidence14 = [1000000,]; // Apiary 🐝
const priceResidence18 = [1000000, 100,]; // Weavers Cottage 🧵

const priceVillage = 64000;
const priceBuildNEG5 = 500; // Survey
const priceBuildNEG4 = [1000, 3, 25, 200, 100,]; // Groundbreaking
const priceBuildNEG3 = 200; // Plans
const priceBuildNEG2 = 100; // Trench
const priceBuildNEG1 = [10000, 50000,]; // Aqueduct
const priceBuild0 = [500, 8000, 4000, 500,]; // Blacksmith
const priceBuild1 = [2000, 8000, 100,]; // Workshop
const priceBuild2 = [10000, 50000,]; // Town Hall (Forum)
const priceBuild3 = [25000, 5000, 10000,]; // Insula (ground floor)
const priceMineScout = 100;
const priceMineDig = [128000, 4000,];
const priceFoundry = [256000, 6000, 60000];
const priceBuild4 = [12000, 32000, 6000, 12000,]; // Insula (2nd floor)
const priceBuild5 = [24000, 32000, 20000,]; // Market (& Port)
const priceBuild6 = [128000, 48000, 12000, 24000,]; // Insula (3rd floor)
const priceBuild7 = [256000, 64000, 25000, 50000,]; // 2nd Insula
const priceBuild8 = [200000, 80000, 30000, 60000,]; // School
const priceBuild9 = [256000, 64000, 25000, 50000,]; // 3rd Insula
const priceBuild10 = [256000, 8000, 12000,]; // Stables
const priceBuild11 = [512000, 100, 7, 7, 7, 7, 7, 7, 7, 20000, 3,]; // Temple
const priceBuild12 = [2000000, 4000, 60000, 6,]; // Arena
const priceBuild13 = [4000000, 200, 30000,]; // Bank
const priceBuild14 = [123456, 810, 20000,]; // Monks
const priceBuild15 = [1200000, 60000,]; // Sewers
const priceBuild16 = [2400000, 30000, 60000, 200000,]; // Gates
const priceBuild17 = [3600000, 100000, 200,]; // Standing Army
const priceBuild18 = [2048000, 100000, 200000,]; // 4x Insulas
const priceBuild19 = [250000, 20000, 10000,]; // Graveyard
const priceBuild20 = [400000, 160000, 60000, 120000,]; // University
const priceBuild21 = [1200000, 60000, 100,]; // Hospital
const priceBuild22 = [1500000, 40000, 100, 100, 100,]; // Courthouse
const priceBuild23 = [1750000, 10000, 10000,]; // Hippodrome
const priceBuild24 = [2500000, 20000, 10000,]; // Colosseum
const priceBuild25 = [1750000, 16000,]; // Theater
const priceBuild26 = 100000; // Private Development
const priceBuild27 = [500000, 5000, 5000,]; // Oracle
const priceBuild28 = [1111111, 2222, 333, 333,]; // Astronomers Guild
const priceBuild100 = [20000000, 9001, 77, 1000, 100000, 100000, 10000, 333,]; // Monument

const pricePort0 = 8000;
const pricePort1 = 16000;
const pricePort2 = 32000;
const pricePort3 = 64000;
const pricePort4 = 128000;
const pricePort5 = 256000;
const pricePort6 = 512000;

const priceMiners = [10000000, 100000, 50,];
const priceFarmers = [];
const priceShepherds = 50;

const pricePegasus = 3;

const tributeAmount = 616; // 😈 NRO QSR
let tributeLifetimePaid = 0;
let tributeTimer = 0;
const tributeTimerLimit = 100;

let revealedWisdom = 0;
const achievementSoundRare = new Audio('waveforms/XboxOneRareAchievement.mp3');

const audioTheme = new Audio('waveforms/moraffsAria.mp3');
const audioEnding = new Audio('waveforms/tquestAnthem.mp3');
const audioPeasant = new Audio('waveforms/warcraft.mp3');

const heirDate = [0, 0,];
let heirStage = 0;

const arrayFacesSorted = [];
let heirFacesPageCurrent = 1;
let heirFacesPageTotal = 13;
let heirFaceChoice = 0;

// 0. Wool 🧶, 1. Milk 🥛, 2. Yoghurt 🍦, 3. Butter 🧈, 4. Cheese 🧀, 5. Mutton 🥩, 6. Offal 🍖, 7. Hide 🏈, 8. Bone 🦴, 9. Blood 🩸, 10. Manure 💩
const shepherdsInventory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const shepherdsProduction = [120, 80, 20, 40, 10, 60, 180, 16, 16, 32, 64,];
const shepherdsCount = 240;
const shepherdsCost = 1;
const policeCost = 2;

// 0. Diamonds 💎, 1. Jacinth 💎, 2. Bismuth 💎, 3. Gold 🧱, 4. Silver 🧱, 5. Iron 🧱, 6. White Copper 🧱, 7. False Silver 🧱, 8. Lead 🧱, 9. Kobold Ore 🪨, 10. Magnes Rock 🪨
const minersInventory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const minersProduction = [1, 5, 10, 1, 5, 10, 15, 5, 25, 50, 50,];
const minersCost = [200, 100, 250000,];

// 0. XXX, 1. XXX, 2. XXX, 3. XXX, 4. XXX, 5. XXX, 6. XXX, 7. XXX, 8. XXX, 9. XXX, 10. XXX
const farmersInventory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const farmersProduction = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
const ranchersCount = 420;

const legalTarget = 'https://creativecommons.org/publicdomain/zero/1.0/';
const winTarget = 'https://youtu.be/dOjFcx3GJHg'; // ♠️♣️♦️♥️ // 'https://youtu.be/AQmFlAB15f8'; // 👨‍🎤💃🎻 // 'https://youtu.be/YnDLlajMxyo'; // 🌼☀️🍂❄️
const sailWestTarget = 'https://youtu.be/wgtMW38vsUs'; // 🧙‍♂️💍👹

let snapshotLastTurn = null;
let snapshotThisTurn = null;

let loadedReport = null;
let loadedIcon = null;

let debugCounter = 0;

let gameSpeed = 'paused';
let oldSpeed = null;
let timeoutHourglass = null;
let timeoutCanvases = null;
let frameHourglass = 0;
let frameHourglassMax = 20;
let turnPerFrame = false;
let delayAmountHourglassFrame = 50;
let arrayHourglassInUse = null;

const animationFPS = 20;
const animationInterval = 1000 / animationFPS;
let globalAnimationFrame = 1;
let residenceAnimationFrame = 1;
let residenceAnimationToggle = false;
let portAnimationFrame = 1;
let portAnimationToggle = false;
let villagePlateFrame = 1;
let villageAnimationFrameA = 1;
let villageAnimationFrameB = 1;
let villageAnimationFrameC = 1;
let villageAnimationFrameD = 1;
let villageAnimationFrameE = 1;
let villageAnimationFrameF = 1;
let villageAnimationFrameG = 1;
let villageAnimationFrameH = 1;
let villageAnimationFrameI = 1;
let villageAnimationToggle = false;
let animationCycleFrame = 0;
let smeltImageOffset = 0;
let smeltImageToggle = false;
let shepherdsAnimationFrameA = 0;
let shepherdsAnimationFrameB = 0;
let shepherdsAnimationFrameC = 0;
let shepherdsAnimationToggle = false;
let farmersAnimationFrame = 0;
let farmersAnimationToggle = false;
let minersAnimationFrameA = 0;
let minersAnimationFrameB = 0;
let minersAnimationFrameC = 0;
let minersAnimationFrameD = 0;
let minersAnimationFrameE = 0;
let minersAnimationFrameF = 0;
let minersAnimationFrameG = 0;
let minersAnimationFrameH = 0;
let minersAnimationFrameI = 0;
let minersAnimationToggle = false;

let mapOutlineOpacity = 0;
let mapOutlineValueClimb = true;

let mapTarget = 0;
let mapDetailsCurrent = 'econ';
let mapProvinces = [
    [nameVillage, true,],
    ['Çoban Kasabası', true, 0,], // 'Shepherd Town' in Turkish
    ['Agrόktima Georgios', true, 0,], // 'Farm of George' in Greek, 'georgos' (γεωργός) means 'farmer': Farmer's Farm (y=r³/3)
    ['Na’ari Harim', true, 0,], // 'Mountain Boys' in Hebrew
]; // first and last entry MUST remain targettable for MapChangeTarget method

const gameEventDismissDelay = 1600;
let timeoutGameEventDismiss = null;

let timeoutHeirButton = null;
let frameHeirButton = 0;

const save_key = 'PRAEDIUM_save_data';

let gameEventTrigger = false;
let gameEventContainer = '';

let aguaAnimString = 'url(bitmaps/agua_anim.gif)';
let aguaStillString = 'url(bitmaps/agua_still.gif)';



// To anyone wondering why I've done anything the way I've done: let me just say, tech debt is real.
// This game started out as a single-page 20-minute hack on CodePen. Now just look where we are smdh



// End of Document