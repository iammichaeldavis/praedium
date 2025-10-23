// ۞ FISHING ***************************************************************************************
// *************************************************************************************************

// --- UTILITIES/SYSTEM ----------------------------------------------------------------------------

function FishTimerBehaviour() {
    fishTimeLeft -= fishTimerIntervalSeconds;

    if (fishTimeLeft > 2.95 && fishTimeLeft < 3.05) {
        if (player.likesSounds) {
            audioChime.currentTime = 0;
            audioChime.play();
        }
    }
    if (fishTimeLeft > 1.95 && fishTimeLeft < 2.05) {
        if (player.likesSounds) {
            audioChime.currentTime = 0;
            audioChime.play();
        }
    }
    if (fishTimeLeft > 0.95 && fishTimeLeft < 1.05) {
        if (player.likesSounds) {
            audioChime.currentTime = 0;
            audioChime.play();
        }
    }

    if (fishTimeLeft > 0) {
        if (!fishAvailable) {
            if (FindWholeRandom(1, fishAvailableChanceUpperLimit) == 1) {
                fishAvailable = true;
                const threeSidedDie = FindWholeRandom(1, 3);
                let modifier = 0;
                if (threeSidedDie == 1) { modifier = 0.1; }
                if (threeSidedDie == 3) { modifier = -0.1; }
                fishAvailableCountdown = fishAvailableCountdownMax + modifier;
            }
        }
        else {
            if (fishAvailableCountdown > 0) {
                fishAvailableCountdown -= fishTimerIntervalSeconds;
            }
            else {
                fishEscapeCountSession++;
                fishEscapeCountLifetime++;
                fishAvailable = false;
            }
        }
        fishTimerLoop = setTimeout(FishTimerBehaviour, fishTimerIntervalMilliseconds);
    }
    else {
        if (fishAvailableCountdown > 0) {
            fishEscapeCountSession++;
            fishEscapeCountLifetime++;
        }
        EndFishGame();
    }
    UpdateFishDisplay();
}



function EndFishGame() {
    audioFish.pause();
    if (player.likesSounds) {
        audioWhistle.currentTime = 0;
        audioWhistle.play();
    }

    fishGameOver = true;
    fishGameStarted = false;
    player.hasFishRecords = true;

    buttonFish.style.display = '';
    buttonInitFish.style.display = '';

    clearTimeout(stunnedFishButtonCountdown);
    clearTimeout(splashTimer);

    const fish0reward = caughtFishSession[0] * caughtFishBounty[0];
    const fish1reward = caughtFishSession[1] * caughtFishBounty[1];
    const fish2reward = caughtFishSession[2] * caughtFishBounty[2];
    const fish3reward = caughtFishSession[3] * caughtFishBounty[3];
    const fish4reward = caughtFishSession[4] * caughtFishBounty[4];
    const fish5reward = caughtFishSession[5] * caughtFishBounty[5];
    const fishRewardTotal = fish0reward + fish1reward + fish2reward + fish3reward + fish4reward + fish5reward;
    filetCount += fishRewardTotal;
    lifetimeFishEarnings += fishRewardTotal;
    UpdateDisplay();

    //populate final window====================
    let finalString = displayCatchReportTitle;
    finalString += '<div id="divCatchReportDivider"></div>'
    finalString += displayCatchReportYouCaught + ':';
    finalString += '<table id="tableCatchReport">';
    finalString += '<thead>';
    finalString += '<tr>';
    finalString += '<td>';
    finalString += displayCatchReportSpecies;
    finalString += '</td>';
    finalString += '<td>';
    finalString += displayCatchReportCount;
    finalString += '</td>';
    finalString += '<td>';
    finalString += displayCatchReportYield;
    finalString += '</td>';
    finalString += '</tr>';
    finalString += '</thead>';
    finalString += '<tbody>';

    finalString += '<tr>';
    finalString += '<td style="text-align: right;">';
    finalString += displayCatchReportMinnow + ' <span class="icon FishSmallCommon inlineIcon"></span>';
    finalString += '</td>';
    finalString += '<td>';
    finalString += caughtFishSession[0];
    finalString += '</td>';
    finalString += '<td>';
    finalString += fish0reward + '<span class="icon FishSteak inlineIcon"></span>';
    finalString += '</td>';
    finalString += '</tr>';

    finalString += '<tr>';
    finalString += '<td style="text-align: right;">';
    finalString += '<span class="flawless">FL </span>' + displayCatchReportMinnow + ' <span class="icon FishSmallGreat inlineIcon"></span>';
    finalString += '</td>';
    finalString += '<td>';
    finalString += caughtFishSession[1];
    finalString += '</td>';
    finalString += '<td>';
    finalString += fish1reward + '<span class="icon FishSteak inlineIcon"></span>';
    finalString += '</td>';
    finalString += '</tr>';

    finalString += '<tr>';
    finalString += '<td style="text-align: right;">';
    finalString += displayCatchReportTilapia + ' <span class="icon FishLargeCommon inlineIcon"></span>';
    finalString += '</td>';
    finalString += '<td>';
    finalString += caughtFishSession[2];
    finalString += '</td>';
    finalString += '<td>';
    finalString += fish2reward + '<span class="icon FishSteak inlineIcon"></span>';
    finalString += '</td>';
    finalString += '</tr>';

    finalString += '<tr>';
    finalString += '<td style="text-align: right;">';
    finalString += '<span class="flawless">FL </span>' + displayCatchReportTilapia + ' <span class="icon FishLargeGreat inlineIcon"></span>';
    finalString += '</td>';
    finalString += '<td>';
    finalString += caughtFishSession[3];
    finalString += '</td>';
    finalString += '<td>';
    finalString += fish3reward + '<span class="icon FishSteak inlineIcon"></span>';
    finalString += '</td>';
    finalString += '</tr>';

    finalString += '<tr>';
    finalString += '<td style="text-align: right;">';
    finalString += displayCatchReportBream + ' <span class="icon FishRareCommon inlineIcon"></span>';
    finalString += '</td>';
    finalString += '<td>';
    finalString += caughtFishSession[4];
    finalString += '</td>';
    finalString += '<td>';
    finalString += fish4reward + '<span class="icon FishSteak inlineIcon"></span>';
    finalString += '</td>';
    finalString += '</tr>';

    finalString += '<tr>';
    finalString += '<td style="text-align: right;">';
    finalString += '<span class="flawless">FL </span>' + displayCatchReportBream + ' <span class="icon FishRareGreat inlineIcon"></span>';
    finalString += '</td>';
    finalString += '<td>';
    finalString += caughtFishSession[5];
    finalString += '</td>';
    finalString += '<td>';
    finalString += fish5reward + '<span class="icon FishSteak inlineIcon"></span>';
    finalString += '</td>';
    finalString += '</tr>';

    finalString += '</tbody>';
    finalString += '</table>';
    finalString += displayCatchReportYouMissed + ': ';
    finalString += fishMissCountSession;
    finalString += ' ';
    finalString += (fishMissCountSession == 1) ? displayCatchReportTime : displayCatchReportTimes;
    finalString += ',<br>';
    finalString += displayCatchReportAnd;
    finalString += (player.speaks == 'Spanish') ? ' ¡' : ' ';
    finalString += fishEscapeCountSession;
    finalString += ' ';
    finalString += (fishEscapeCountSession == 1) ? displayCatchReportFishEscaped : displayCatchReportFishesEscaped;
    finalString += '!<br><br>';
    finalString += ' ' + displayCatchReportTotal + ': ' + fishRewardTotal + '<span class="icon FishSteak inlineIcon"></span><br><br>';
    finalString += '<div id="divCatchReportFinePrint">';
    if (player.speaks == 'Spanish') {
        finalString += 'Se estima que la carga de informe público para esta recopilación de información es en promedio de cinco (5) minutos por respuesta, incluido el tiempo para revisar las instrucciones, buscar en las fuentes de datos existentes, reunir y mantener los datos necesarios, y completar y revisar la recopilación de información. ';
        finalString += 'Envíe comentarios sobre esta estimación de la carga o cualquier otro aspecto de esta carga a Abdullah ibn Salam, Servicio de Pesca Marina del Mediterráneo, 100 Ave. Ω, Roma, Imperio Romano 00001. ';
        finalString += 'Este informe es requerido y está autorizado según 50 CFR 622.5(a)(1)(iii). ';
        finalString += 'La información enviada será tratada de forma confidencial de acuerdo con las Órdenes Administrativas de ROAA. ';
        finalString += 'Sin perjuicio de cualquier otra disposición de la ley, ninguna persona estará obligada a responder, ni ninguna persona estará sujeta a una sanción por no cumplir con, una recopilación de información sujeta a los requisitos de la Ley de Reducción de Trámites, a menos que dicha recopilación muestre un Número de Control de la OMB actualmente válido. ';
        finalString += 'El RMFS requiere esta información para la conservación y gestión de los recursos pesqueros marinos.';
        finalString += '<br><br>';
        finalString += 'PROPORCIONAR INFORMACIÓN FALSA A SABIENDAS ES UNA VIOLACIÓN DEL DERECHO ROMANO CASTIGADA CON MULTA Y/O PRISIÓN. ';
        finalString += 'Todos los datos enviados serán tratados como material confidencial de acuerdo con la Orden Administrativa ROAA 216-100, Protección de Estadísticas Pesqueras Confidenciales.';
    }
    else {
        finalString += 'Public reporting burden for this collection of information is estimated to average five (5) minutes per response including the time for reviewing the instructions, searching the existing data sources, gathering and maintaining the data needed, and completing and reviewing the collection of information. ';
        finalString += 'Send comments regarding this burden estimate or any other aspects of this burden to Abdhullah ibn Salam, Mediterranean Marine Fisheries Service, 100 Ave. Ω, Rome, Roman Empire 00001. ';
        finalString += 'This reporting is required under and is authorized under 50 CFR 622.5(a)(1)(iii). ';
        finalString += 'Information submitted will be treated as confidential in accordance with ROAA Administrative Orders. ';
        finalString += 'Notwithstanding any other provision of the law, no person is required to respond to, nor shall any person be subject to a penalty for failure to comply with, a collection of information subject to the requirements of the Paperwork Reduction Act, unless that collection displays a currently valid OMB Control Number. ';
        finalString += 'The RMFS requires this information for the conservation and management of marine fishery resources.';
        finalString += '<br><br>';
        finalString += 'KNOWINGLY SUPPLYING FALSE INFORMATION IS A VIOLATION OF ROMAN LAW PUNISHABLE BY A FINE AND/OR IMPRISONMENT. ';
        finalString += 'All data submitted will be handled as confidential material in accordance with ROAA Administrative Order 216-100, Protection of Confidential Fishery Statistics.';
    }
    finalString += '</div>'

    //pop up final window==================
    GameEvent(finalString);

    RecordProgress();
}



// --- PLAYER ACTIONS ------------------------------------------------------------------------------

function InitNewFishGame() {
    audioTheme.pause();
    audioFish.currentTime = 0;
    if (player.likesMusic) { audioFish.play(); }
    player.hasFished = true;
    fishWarmup = false;
    fishGameOver = false;
    fishTimeLeft = fishTimeLeftMax;
    fishAvailable = false;
    fishButtonStunned = false;
    fishInNet = false;
    fishGreatCatch = false;
    fishGameStarted = false;
    ZeroArray(caughtFishSession);
    mostRecentCatch = 0;
    fishMissCountSession = 0;
    fishEscapeCountSession = 0;
    const wormLottery = FindWholeRandom(1, 4);
    if (wormLottery == 1) { imageFish_SuperwormChoice = imageFish_Superworm1; }
    else if (wormLottery == 2) { imageFish_SuperwormChoice = imageFish_Superworm2; }
    else if (wormLottery == 3) { imageFish_SuperwormChoice = imageFish_Superworm3; }
    else if (wormLottery == 4) { imageFish_SuperwormChoice = imageFish_Superworm4; }
    splashTimer = setTimeout(CycleSplashSprite, Math.ceil(1000 / splashFPS));
    rippleTimer = setTimeout(CycleRippleSprite, Math.ceil(1000 / rippleFPS));
    buttonFish.style.display = 'block';
    buttonInitFish.style.display = 'none';
    NodFishButton();
    FishWarmupSequence();
    setTimeout(() => {
        fishGameStarted = true;
        fishWarmup = false;
        fishTimerLoop = setTimeout(FishTimerBehaviour, fishTimerIntervalMilliseconds);
    }, 3800);
    UpdateFishDisplay();
}



function FishButton() {
    if (!fishGameOver && !fishInNet && fishGameStarted) {
        if (!fishButtonStunned) {
            if (fishAvailable) {
                clearTimeout(fishTimerLoop);
                fishAvailable = false;
                fishInNet = true;
                NodFishButton();
                let caughtFishType = 0;
                if (FindWholeRandom(1, fishRareChanceUpperLimit) == 1) { caughtFishType = 4; }
                else if (FindWholeRandom(1, fishLargeChanceUpperLimit) == 1) { caughtFishType = 2; }
                let totalityOfFish = 1;
                totalityOfFish += caughtFishLifetime[0];
                totalityOfFish += caughtFishLifetime[1];
                totalityOfFish += caughtFishLifetime[2];
                totalityOfFish += caughtFishLifetime[3];
                totalityOfFish += caughtFishLifetime[4];
                totalityOfFish += caughtFishLifetime[5];
                let hasCaughtTheBigOne = false;
                if (caughtFishLifetime[4] > 0) { hasCaughtTheBigOne = true; }
                else if (caughtFishLifetime[5] > 0) { hasCaughtTheBigOne = true; }
                if (totalityOfFish > 19 && !hasCaughtTheBigOne) { caughtFishType = 4; }
                if (caughtFishType == 4) { ShowToast(); }
                fishGreatCatch = false;
                if (fishAvailableCountdownMax - fishAvailableCountdown < fishGreatCatchThresholdS) {
                    fishGreatCatch = true;
                    caughtFishType++;
                }
                fishAvailableCountdown = 0;
                caughtFishSession[caughtFishType]++;
                caughtFishLifetime[caughtFishType]++;
                totalCatches++;
                mostRecentCatch = caughtFishType;
                setTimeout(() => {
                    fishInNet = false;
                    setTimeout(FishTimerBehaviour, fishTimerIntervalMilliseconds);
                }, fishInNetDurationMS);
            }
            else {
                fishButtonStunned = true;
                ShiverMeFishButton();
            }
        }
        else { ShiverMeFishButton(); }
    }
    UpdateFishDisplay();
}



function WharfEvents() {
    if (!fishGameStarted && !fishWarmup) {
        if (totalCatches < priceWharf[0]) {
            //alert('You must catch more fish for some arbitrary reason!');
        }
        else {
            if (fishState.hasWharf) {
                divMinigameFishing.style.display = '';
                divViewWharf.style.display = 'block';
                divViewWharf.appendChild(divFooter);
                player.isAt = 'Wharf';
                JumpToTopPlease();
                if (!fishState.hasSeenWharf) {
                    fishState.hasSeenWharf = true;
                    if (player.likesStory) { GameEvent(displayStoryWharfFirstVisit); }
                }
            }
            else {
                if (bushelCount[0] == priceWharf[1]) {
                    if (player.likesStory) { GameEvent(displayStoryNotEnoughFish); }
                }
                else if (bushelCount[0] > priceWharf[1] && logsCount >= priceWharf[2] && boardsCount >= priceWharf[3] && stoneCount >= priceWharf[4]) {
                    bushelCount[0] -= priceWharf[1];
                    spentCount[0] += priceWharf[1];
                    logsCount -= priceWharf[2];
                    forestSpentCount[0] += priceWharf[2];
                    boardsCount -= priceWharf[3];
                    forestSpentCount[1] += priceWharf[3];
                    stoneCount -= priceWharf[4];
                    mountainSpentCount[0] += priceWharf[4];
                    if (player.likesStory) { GameEvent(displayStoryWharf); }
                    fishState.hasWharf = true;
                }
                else {
                    if (player.seesVillage) { if (player.likesStory) { GameEvent(displayStoryPoorVillage); } }
                    else { if (player.likesStory) { GameEvent(displayStoryPoorFarm); } }
                }
            }
        }
        UpdateFishDisplay();
    }
}



function PurchaseWharfItem(item) {
    if (item == 0 && player.hasBrewery) {
        fishState.hasPosca = true;
        stunnedFishButtonWiggleDurationS = '0.24s';
        stunnedFishButtonCountdownDurationMS = 300;
        if (player.likesStory) { GameEvent('<span class="icon Grog inlineIcon quadrupleSize"></span><br><br>' + displayStoryWharfBuyPosca); }
    }
    if (item == 1 && (caughtFishLifetime[0] + caughtFishLifetime[1] >= 20)) {
        fishState.hasPrey = true;
        fishLargeChanceUpperLimit = 8;
        if (player.likesStory) { GameEvent(displayStoryWharfBuyPrey); }
    }
    if (item == 2 && (caughtFishLifetime[2] + caughtFishLifetime[3] >= 10)) {
        fishState.hasChum = true;
        fishAvailableChanceUpperLimit = 8;
        if (player.likesStory) { GameEvent('<span class="icon Chumbucket inlineIcon quadrupleSize"></span><br><br>' + displayStoryWharfBuyChum); }
    }
    if (item == 3 && villageStage > 0) {
        fishState.hasKnife = true;
        caughtFishBounty = [2, 4, 10, 20, 100, 200,];
        if (player.likesStory) { GameEvent('<span class="icon BoningKnife inlineIcon sextupleSize"></span><br>' + displayStoryWharfBuyKnife); }
    }
    if (item == 4 && player.canSell) {
        fishState.hasBait = true;
        fishGreatCatchThresholdS = 0.4;
        if (player.likesStory) { GameEvent(displayStoryWharfBuyBait); }
    }
    if (item == 5 && beadsSpawn) {
        fishState.hasRod = true;
        fishAvailableCountdownMax = 1.0;
        if (player.likesStory) { GameEvent(displayStoryWharfBuyRod); }
    }
    if (item == 6 && villageStage > 20) {
        fishState.hasWWF = true;
        fishRareChanceUpperLimit = 80;
        if (player.likesStory) { GameEvent(displayStoryWharfBuyWWF); }
    }
    UpdateFishDisplay();
}



function HireFishboys() {
    if (residenceStage > 11) {
        if (player.likesStory) { GameEvent(displayStoryWharfFishboys); }
        fishState.hasFishermen = true;
    }
    UpdateFishDisplay();
}



function ChewFat() {
    let gossipTopic = [
        'politics',
        'religion',
        'the sweetest taboos',
        'all the many things that are better left unsaid',
        'all the things she said, all the things she said, running through my head, running through my head, all the things she said',
        'family secrets you’ve never had the courage to tell anyone else before',
        'his failed marriages',
        'his son, who is drowning in debt',
        'witchcraft and wizardry',
        'paganism vs. monotheism',
        'drugs and addiction',
        'sexuality and gender identity',
        'sexism, misogyny (which is made up) and misandry (which is all too real!)',
        'feminism',
        'ableism and discrimination',
        'climate change',
        'the weather',
        'immigration',
        'foreigners',
        'police brutality',
        'racism',
        'foreign policy',
        'international trade',
        'fish',
        'your favourite gladiators',
        'time and space',
        'the Peloponnesian War',
        'pretty girls',
        'cute boys',
        'local restaurants',
        'childhood obesity',
        'kids these days',
        'mental health',
        'money',
        'death and dying',
        'the hottest tourist destinations',
        'gun control',
        'how to get your whites whiter',
        'the O.J. Simpson verdict',
        //'the Diddy trial',
    ];
    let gossipDuration = [
        'a brief moment',
        'a few minutes',
        '15 minutes',
        '17 minutes',
        'half an hour',
        'the better part of an hour',
        'almost 45 minutes',
        'an hour',
        'a couple of hours',
        'a few hours',
        'all morning',
        'most of the afternoon',
        'the entire afternoon',
        'a lovely evening',
        'the whole day',
        'what feels like ages',
        'too long',
    ];
    if (player.speaks == 'Spanish') {
        gossipTopic = [
            'política',
            'religión',
            'los tabúes más dulces',
            'todas las muchas cosas que es mejor no decir',
            'todas las cosas que ella dijo, todas las cosas que ella dijo, corren por mi mente, corren por mi mente, todas las cosas que ella dijo',
            'secretos familiares que nunca has tenido el coraje de contarle a nadie antes',
            'suyo matrimonios fallidos',
            'suyo hijo, que se está ahogando en deudas',
            'brujería y hechicería',
            'paganismo vs. monoteísmo',
            'drogas y adicción',
            'sexualidad e identidad de género',
            'sexismo, misoginia (que es inventada) y misandria (¡que es demasiado real!)',
            'feminismo',
            'capacitismo y discriminación',
            'cambio climático',
            'el clima',
            'inmigración',
            'extranjeros',
            'brutalidad policial',
            'racismo',
            'política exterior',
            'comercio internacional',
            'pescado',
            'tus gladiadores favoritos',
            'tiempo y espacio',
            'la Guerra del Peloponeso',
            'chicas guapas',
            'chicos lindos',
            'restaurantes locales',
            'obesidad infantil',
            'niños en estos días',
            'salud psíquica',
            'moneda',
            'muerte y morir',
            'los destinos turísticos más populares',
            'control de armas',
            'cómo hacer que tus blancas sean más blancas',
            'el veredicto de O.J. Simpson',
            //'el juicio de Diddy',
        ];
        gossipDuration = [
            'un breve momento',
            'unos minutos',
            '15 minutos',
            '17 minutos',
            'media hora',
            'la mayor parte de una hora',
            'casi 45 minutos',
            'una hora',
            'un par de horas',
            'unas horas',
            'toda la mañana',
            'la mayor parte de la tarde',
            'toda la tarde',
            'una velada encantadora',
            'todo el día',
            'lo que parece una eternidad',
            'demasiado largo',
        ];
    }
    const chosenTopic = FindWholeRandom(0, gossipTopic.length - 1);
    const chosenDuration = FindWholeRandom(0, gossipDuration.length - 1);
    let gossipString = 'You and the old man spend ' + gossipDuration[chosenDuration] + ' discussing ' + gossipTopic[chosenTopic] + '.';
    if (player.speaks == 'Spanish') { gossipString = 'Tú y el anciano pasáis ' + gossipDuration[chosenDuration] + ' hablando de ' + gossipTopic[chosenTopic] + '.'; }
    GameEvent(gossipString);
}



function LeaveTheStore() {
    divViewWharf.style.display = '';
    divMinigameFishing.style.display = 'block';
    divMinigameFishing.appendChild(divFooter);
    player.isAt = 'Creek';
    UpdateFishDisplay();
    JumpToTopPlease();
}



// --- UI ------------------------------------------------------------------------------------------

const imageFish_Backdrop = new Image();
imageFish_Backdrop.src = 'bitmaps/fish/fish_backdrop.png';
const imageFish_BackdropInca = new Image();
imageFish_BackdropInca.src = 'data:image/png;base64,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';
const imageFish_BackdropBirds = new Image();
imageFish_BackdropBirds.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAdVJREFUeNrt3bsNgCAUBVAtnMglGNklnMgCW0MsLDDA45xGQ0ty36dhWQAAAAAAAAAAAAAAAAAAAAAYUdrOnLYzl//0cTfPL0D1gPkSMsKo/R0BCCMAiFRYreCA5mEkkMaYrtwN0E0gAQAAUGsa+zqVmd4AAhYBAAAAAAAAAAAAAAAAAAAAAAAAgF94jAZAEQAgSqjr7gEm7ugFPwAAVLaONhUc176W588zAIIo10Bvb95aFQFMWhQAAIBeu3bdO8DERQAAoQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCA3YrtmZyT97XYAAAAASUVORK5CYII=';
const imageFish_BackdropBoys = new Image();
imageFish_BackdropBoys.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABJ9JREFUeNrt3b1OI1cUAODjKFWsFCu5ylZIdsVDIBoqmkhbrabjBXiDfYW8wHZWnoBqG2ufIaJaJFfpkCgiF0kzKbxXjGcNxuOZ8cD9PgkBXpgfFp1zz7n3DhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxeMYvy88W4zPX+f/IrACABAGTl/GQci+Uqcq0CJAAAFQBAvlVAMYvsqoCR/34gW8Wvj0F//k928VAFABARH4soPxZR+kkA5FAAfG/7VNs/OSUBFQBAxZ/zx9b4W08GEgBATQr81WQAAAAAAAAAAL0oZlE22clsFRDAK3d+Mm70fRIAYFS8x/GG9uTQdI9NkoAEABgZ73msoTw4rphFech1SQCA4L/HKHuxXK1ffF8cLQmkamT+bXOj2vnJOMunmgL8ECDbOlZq+2y0gY6YADYS0/uiTO8jIj5fjF987yoA4E2O/tsYDacWy9WX1ah63Kvb36P4ZT7Ie0/XKgEA2alO0h7SBro8jXLy22ZAvfqyGi2Wq4i/58N5RlC6lso11VtDAFkmgSardq7Pnq4ctj1C+liGdC0Ag/Bh+qn8MP3UKChen0V5ebo7oLa9zLTr426jBQRkUQm0ras2S5urlwCyk0bQ+yaAl47+u7rm6iqjPjac/exXBXhrwb/p6PzuPmI62T4H8MfX7iZW0zWnoL9YrnqpBMwUA8R61c90sg70l6dR3tyu30dE3Nx2GyurgT/isQ20z5LOJswBAIL/94B/d//jv1UTQVf++ncVi+Uq5t9i1FfwVwEA2XtuyWddF22glHzS50W8KyMi5vEgPgN0OfKvf7zrtbbPX09ARbwr01vX968FBGQb/Lvu7e86/3SynnjeMHuI84v/ImYPnV+DVUBA9sF/VzK4uY1RfaR+SDuoOsk8nWyef72CadXLUlQ9JiA7+/T9k7v79lYDpfOnZaf1Y6d9DJ7pA9Dy6L+eALb1/euftzUPUD1eupZtCanPR0IAZDv6f2lwPzQJ1BPNruTSdQJQXgDZVwQvbe1cn0V5SCuoeq50rOlk82u63HEsAQAMoPpIq39SQjj2qiQAOqw06h9ve63JBLUKAKCFIF0dkadnA3V1nnSOKi0ggB7sGm3X+/3p65sG6ermr23LP7WBAI5cBXSVbOqtn2P97QEVAMAzlUCbG7+eqgTSeY7ZBgKgFqCf2qDVdpVx7CoAgGeC9Gs6NgCZJhcAAOC16HMTWIRVQACDUd0n0Md+AH8RDGAg+gz+EgDAQDz1dFAAaN3/BGecmjiO3l0AAAAASUVORK5CYII=';
const imageFish_BackdropStock = new Image();
imageFish_BackdropStock.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABE1JREFUeNrt3D9olGccB/DvFYcULF2ExiBVscGURiicFmlP7BBHzwzBqUWhq1ZbCnHI6JBAkbZ27KA0Q5E65LIIuaEhsUiPOKUQscEoIbVboUsG4e1wuTPpHzBW2nj9fODg/ry8B8/B7/v+nud9LgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4fpQMwdOZXXhYzN65235dn77Wfj5w9GSS5MKJI8YXEACd5r3PrxT9e/ZlfmkxX394KqXS46Ec+PhsuneX079nnyAAtqxthmDziqIoxmqzGa5WklRSKpUy+Kgvp3MxZ2aHUn/3cpJkdGJm0+feMZ7ik5dqqU9PresojiVJKvvfSqWvW5gAz8QLhuCfGavNJknqny5kcGgo9cpCtp1Jdown1ydvbOpcoxO1YnU5uXCimoGjx9qP4erx3L33U2bv/JAPPrtUGHVAB7AFiv9wtZJyo5G5ldVczJH0n+9L167kzdtn032gN/NLi09c/JNkdTnJYDME2iZq+ercR2vfOZmiKIrS+jknAAHw7yiVSqXWInCrAyj3dGUkM5l/cTEP78+le3c5p95+I8cOHXriQj0yVc2j5STLa28MJtsPr4XBRC3D1eMGH3h2tcwQPL2iKIqbd37J+ruByj1d7edzK6tPvADcmtq5/+Bee87/wolqOwR+Gy4yVptMkgxXj0cHAAiALWCq0SjmVlYzv9S8+h84enLTd/6MTtSKcs/OfHNzJvcf3MvuV/emd+9rKffszNzKz+3jLAQDAqADtULgcQexsfC/s/8VV/7AM2MNYItpFf369NSGLuDvrvpHJ2aK5vF/3ojWDI5eHQOgA+isbqFZ+FvTTvVLl9ufFUWR97+4mtZGtfFzp/3OgA6g04yfO50k2fVd8mXl21zJSEqlUoqiuV1grBa3jQICoNNcn7yRHePJr7eSemUhfUN92X44a4W/tVMZQAB0lPmlxew/0JuXb5/NrV2X03++WfxHXp9JudGVgYMH23sUAP6KaYHn2FSjUVz9/sf2xrP+PftS7unK3Mpq+xiLwIAA6ECjEzPFHzeerS/8bhsFBMD/IAjq09c2dAGb+QsKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/yO+wMhMvS3blswAAAABJRU5ErkJggg==';
const imageFish_Wharf = new Image();
imageFish_Wharf.src = 'data:image/png;base64,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';
const imageWharf_Backdrop = new Image();
imageWharf_Backdrop.src = 'bitmaps/fish/wharf_backdrop.png';
const imageWharf_BackdropWIN = new Image();
imageWharf_BackdropWIN.src = 'bitmaps/fish/wharf_backdropPostwin.png';

const imageFish_HUD_gameOver = new Image();
imageFish_HUD_gameOver.src = 'bitmaps/fish/fish_HUD_gameOver.png';
const imageFish_HUD_goodCatch = new Image();
imageFish_HUD_goodCatch.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAvxJREFUeNrt2zFW20AQAFApLw0lZUq4AVxDR8hRUucoOYI4BumcLpSUlKTbFEExMlrvil0h+fn/iodnvMNIxYywmwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhrtYBaQggh66Zr715+6tot5Jeeu5X+pd6ntG/xetq2Zv9z65zbh6Wv3yn6pAUANgB4l99PzWjSur7sI3FdMxUX+/1W8/ev15kkS/s31BF7n1Re0/Rh3nl149L1pfo0fR3mxtsAADgbn7WA5YwnrevLPpTkN02zifxXm0BYdqLM619q0h3yhrpn1B/K+lp6/bEBAGADYJuuHo6/Hu6HCXH8rLe97bPyU+esnb90/45M3kN+yMlLxy3dl7z6w303vVk8LNVXGwAANgCY58+v468Pk/7zj+5d+am4tfOX7t/c/Fd9DiXnfFRfDvMvvk5/iih2/6TuO2wAANgAqG6XCnh59ruLPIPeFZ7zwfkX3yt/njzz/Odv4/79r2M3noz39R3md4vUVbv+N/fN/pxZ/8M4/HtjfbEBAHB2fCOOCv59vvvxJm/C/PJz+puoa+U/3uRNlm/P3Ub/DuuP1ZkbNz/+1Ou3AQBgA4CySTYtNoGtlV967tr960PduNrxp1K/DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgLP1Fw6xNlpmkV/aAAAAAElFTkSuQmCC';
const imageFish_HUD_greatCatch = new Image();
imageFish_HUD_greatCatch.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABClJREFUeNrt3TFrHEcUAOBZO6DC6K5QFzDYjRAYlAMF0iWkS5NfEUPSunB+hFO4tSH5A2nTpBNRkU7gBAQuA4Z0V5yCi1SXQnC7q+zLznB7ur3c91XHaufN7LsZDW/ZlVICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGVklB25sv0rLk/NnP/TksjXmX8Uv7Kh1DFHOoMQ81/jHPn/9T/u9yfZVee05fy2+rVdvffq/DfHRaN61eLKsxtf0v9/zKB9hPNgCAPfWBFLTLq8j01eHq8+Kbv+q2p3U5GZVgzTItitk0VPxSk18PV31dX19XQ+QtijnUmNcZ/67Mn13P/7bWV+m1Z82fjx/V/aY/Oo9PJvPuONtqqwIAwAYAQErJLaB/lVGtsvTpvOj8nPKtrY6/+P6ocfyoN377/FQ2/nVud/z4uPDpkXlvyd+0resa9fzZ9fyPYH3l5S3juo4fZRyfj6utCgAAGwAAKaU9vgW0fPN5Z0k4/fSy8/xmyTl92v8ySxS/VW5fBKVxMIaskjAjflM1Oy97HOS4f8yLi7POMVSz8858tuOfFZXqd/m0z13On13P/5jXV/FaazqaNXIVHE+X42qrAgDABgBASmmfnwJqlU6ps4xaXH3Vqjq7zq4evqyC+N0l8JMfusvVRl+Lq9ng8SOTyaT/yZN3z8r6CnI7mVz2v6gStC29rjHMn9bLUEEOw+931/O/6fyssb5yxhNpjqe5dnJuv2yrrQoAABsAADf29xbQ/ZPeU5rl5OLtd0FZHdxCyYh/6/zOknb55+v6b6F8+HVv/GicYWnZjBn0GyntK5LTV5i3Ec+fnPOj+bPz+d9wfoZaX8W5WvxSx3n/tv7Bg3o81fSzakxtVQAA2AAAuLG3t4CmJ8/rUvrdT52fw7YPv+zv4MHJIOOJyuHS+JGwxA7i51x7Tg7XydUOzZ/l0PNnV/K/rfxs+hr/Pvhk9fkgOB6tqW21VQEAYAMA4IZ/Cp9uv1hRJiq1cmKu03YTmuPZ9PhL+8rp1/wZZ/7HkJ918rnOdY3h+1UBAGADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgzD8K3Bm2xpO5+AAAAABJRU5ErkJggg==';
const imageFish_HUD_missed = new Image();
imageFish_HUD_missed.src = 'data:image/png;base64,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';

const imageFish_WaterRipple0 = new Image();
imageFish_WaterRipple0.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAiZJREFUeNrt3M0NgjAABtDiEKzAAt5djdW4s4AruEQ9kSj/RsBa3jtaEk0Tvq9tYkMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6CtMAQzFGOu3F6UoarOCAoAThP7egd99l2JBAUAmoV9WTTv2+eN+uyoCFAAkFPxHBe9rMYyVQYyxVgIAOwd//3z/aFO7hF//LoDsV/0pUAIAiaz8pwK5G5sb37oEADho9b8U/mYPIEPCnzO7mALYrkyUBsCf7wC+CXIlgB0AAAoAAAUAWSurpp269gGAxAJ7buyT8/w1z/qjFylxFxBKYGHVvrYEllb+Ln4DOKEU7iACQPBDCMEREGwa9oMXzHEPgJU+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOXkCQYKOYKHqDdUAAAAASUVORK5CYII=';
const imageFish_WaterRipple1 = new Image();
imageFish_WaterRipple1.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAjJJREFUeNrt3cENgjAUBmBqnIEVWMC7q7EadxZwBZeop0YTE5XUhgd838kLCenh/f1LwK4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgXTnnMec8WgkAQQDAUYPAKrC2ZAmgvX6Y5vL7frteSgiklAQBQMRdd4sjm9cwACDY8G99Vi8EAIIO/9b3JAAAggVA7fBf0hyEAGs7WwJ4Du/ah7Ll+hICHvICBLJk590P01yzU//WBrQAgKDD/1/NQgAQ0ckSQNugcQwEsLEGULtD/+VaDQANAIIqb+0CQPPmABoAGNgAbCkAhAmAFgChOQICAPjUAvyJC3vjW0Ac1tJv/6SU3j705iUvgI0GwNIWAMCOA0AIAAiBWRAAHDQEABACAAgBAAAAAAAAAAAAAAAAAAAAAAAAqPcAQPSlB99bZ8cAAAAASUVORK5CYII=';
const imageFish_WaterRipple2 = new Image();
imageFish_WaterRipple2.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAlhJREFUeNrt3MENgjAUBmDrEKzAAt5djdW4s4AruMTzpDGGEmOwtPB9R2OIaeL732tJTycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWFhFDRAxWgr1JlgDmi/7rT5KS4g+g2wcTAOyy4/+m2+/6cfr87H67XqwiAgAaLP65wv9e7JeK/PN7ggCgsc5/LV0/TnMTAgA7Lv7QmrMlgHLmpgNBBFCo4Nb2mwQAJgBYQYvFNKXk1VMEABzB/Xa9OCgG+GP3X3ORtQ2ECQAOFko5toEQAFBBNw4CAAABAIAAgGq1cm1z14/T3J1Brp1GAMBKcq9bljpsXbpkDoBCHfdSAPzjEDgXMg6cMQHAjuU6/9zWDwAbTQAlOvPc800EABt06TUUYwEAUEEAlC7Iij9bcwYAb1zUBnBwW50JACBcAAAAAKhTRLjXH+CIxd8qAAAAAAAAAAAAAAAAAAAAAAA/eADRN629sygM6QAAAABJRU5ErkJggg==';
let imageFish_WaterRippleChoice = imageFish_WaterRipple0;

const imageFish_WaterSplash0 = new Image();
imageFish_WaterSplash0.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABUpJREFUeNrt3d1x2kAUBtAlkwpcAENTtICb8KObwC3QlIYC3AJ5ASIJrbT6WQnBOTN5iIOtGCf327vaXYUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDCx9fFm8Ar++stAIWf9/THWwDV4r/bb8Nuv/Ve8PI23gKoFv+y4nQO4ffb/xN0APBOxR8EACj+IABA8QcBAK9hqvn9j6+L1UMIAFjR6D+EEIrjYTP48xV+Vsw+AN62+O/221Acx31+WXE6e1/RAcAain8IIew+f/p3Ae4bIADg9e322+rOYMUfAQDrH/3fi/yQLiDxWt5wBAA8+0g/JQT6jP4Vf1bATWDeevSf4xohhPtZQsXp6+IoCQQAZCq2dxMV2uJ42Nw6gj7h4d4AAgBmVC66Y0bbk8//wwr4R89qR/9NI+77Wvx6ELSM4GPF/6ELiF2rY/TvRFF0ADBjR5DaDbSN/Jumgm6vv318t9+mbQCL3RQWDAgAmD4IitO16GYossXxsGlb6VPvDorTOdg5zLOxDJSX7wZihTpl3r/8msrra1NKTcW868liD5vMYGbaT9apx5LOxtH3mJu+kXOA/k8/nUPs/kT0voWpIHQAkF/OFT+xIg8CABYwaUFuW02k+CMA4HlH99b7gwDghYt/cTxsshT6jvsOKTuFRy0ZBQEA6YHQuIrnyZ7iVVkNpPgjACBfEGQr4omvi3YBnjWAAICZR91PEDhdewZAAMBSEkfn0Y1jqV0ACADoP+peogtIWXUUe01np3C7V+G+AAKAdxlpZy14tZH8VCHQVczrf16+bqVruHUG17+naSEEAG/lXhxnGvl2hkDs6OkBXUfq5yj8zMFpoDxvCIT4sc5rLpDRKSE7idEB8NZ+vzcPD1pp6AamXtbZdypo6uu7KYwAgEhxnuPo5MWOZ649SB7mYgqIVQVBeUpoqXN9clxX8UcHAKmj9Ewj9YcuYI7duZ4FgACA/wWxbU68MiWUa8pm5qkgp5QiAKDnaD3HvH3b1y1O52HXs6ELAQDTdAH1gj17ge1zrRHTSB4XiQCADN1A17RLbCfuXKuSFH8EALqAnkHQpxtoCoHidL7/qn/cah0EACwcAm2j9743iZu+VkqhT+oCnPGPAIDpJU/hDAyB26h/dAgM+H5M/yAAoKULSAmBSpHuKNRNJ3aOOrvf6B8BANOHwO7z535WfnnOPlask49WHjCan7oLcC4Qc3EUBCsLgYbz/OtF9FpAh46+65+X0gXUj6kY+336YaMDgI5OoG203/S6qUIBBAAsJMuSzIY5+4eneHWFhN2+CADI2wWkjtq77g0khU3LM339MBAAsFAXkBICo1fz9AiB8ooj00YIAFg4BB46go4HuMeKe68QAAEA+bSN7GPFOjpP3/PoiK5wEAIIAJgpCBrP7ukZAuWi3dYhmPtHAMCThUDl958/l0GdwAiCAQEAS7nuEbjN8ycX5o/qBq4pC3nq/QYQADB29P37vWlaJho98bPWBYwt1oo9a/IPGxqUhMG+yYEAAAAASUVORK5CYII=';
const imageFish_WaterSplash1 = new Image();
imageFish_WaterSplash1.src = 'data:image/png;base64,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';
const imageFish_WaterSplash2 = new Image();
imageFish_WaterSplash2.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABSpJREFUeNrt3dtx4jAUAFC8sxVQQIam0gJpgk+aIC3QlIcCaIH9SMwaIRv5IbDxOV/ZhMeEzN6XZHm1AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYrda7iw+Bd1b4CCAhAZz3/q/wdv74CKDZ5vNjtfn80A2gA4AlVf+bz4+bb5XHk04AHQAstRvQCSABgCQAEgBIAiABwLStd5exArckwDv46yNgkYmgYlEXCQCW4W5nz2HYa5XH3UUSYa6MgFh2Qvj6HjTGMQpCAoB3ErkGACQAmFkg1wWABIAkkDUJgAQAEwr8N+f4ZK7QdQHMkV1AvL3Uef7m6/tSHrbFz66e246gPGyLUTqFMEnYQYQOAKarCv7h10O6EovMTIHqg/fzYBdPeTy1dgdhtR8L+k2dQPTE0N+qP/peThjlhYyAmHWg7/vUn4u4TtGAX42C2qr98rAtksZBtpQiAUAesTP768G9qfIOq/1cyUnwZ8qsATDb6r8tuDbN2e8SQ62L6JoMGh8v+CMBwHODf1X9h4mgHvTDwDx2EqheW/BHAoAJiCWBXpX9SI8HCQAmkgTGvohL9Y8EAAvyqAvQJSABQB8J1Xls/t+lMs91lEN9O6kkgAQAQ5LA1PbV184ZCq8YFvCZOtcBMAvXu2/1rP5TuoCxKn5/LXQAkCEJdA3gWStxV/kiAcDrtFX/XQ9xc6QzEgC8WjVXbwnGbZV9StU/uCvoWf0bETEl1gCYpCq4VnP/eqV/DaJBEH7aVszgfa/rE7lO9awSoVND0QGwxESQo7KOHvP8aAz0zLn/bxdknQEdALqBcN5/3hflYf6/W/R3EPjRAUBQtXc402f0ziFDUL57/0jV76YxSADoBKqg+IqdOs+oyOs3socnMAJidkkgRxcw+GbvQ7sOIx90AJAg8zjkbiE4Z3C20IsOAAZUzznlGjcl3jXM/B8JALoE664Bc727RK8ozlWZq/iZCCMgpue8L/rO+Tsf5/DMBeWO4x7VPxIAkkDGgNy06yZlN06fLaQqf6bECAhW/3cX3e2/r3cWfYJ/4qxf9Y8OAEYK5g9HO4mjmNhjkoJ/bdzT9j6x1xL8kQAgGAPlOsytsQJPDNhNrz/qCAkyMALibbuAvid0xnYEJVf9q7RxT+NR1qp/JADIFBT7bsFcP04mraOesKOIJAvBHwkA6sYMiImjn/AxQ46fqJ4XXUuoj7cEfyQAeK2+2zSbAnzSOEjw50UsArMMCdV/293FctwvOMfBdqADgARNp4AO2Z3Tdu1AI9U/EgCM67oTaJV+IdfQ4N9lhKT6RwKAJySCPsE/5T4BTTeoF/yZA2sALDr4V//uerRD+L2m4N90pa9zgZAAYALagn/9Z9GA3SH4l8dT5zERSACQOdD3khD8wxGS4I8EAJkD/ZjB/ua1zvvi0XbQ+uPLw7aoKn+7fZAAYIbV/93zG6r/6Puc90UV/B0Ax5T8A062Z978J6mbAAAAAElFTkSuQmCC';
const imageFish_WaterSplash3 = new Image();
imageFish_WaterSplash3.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADgCAYAAAAKRLFRAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABZxJREFUeNrt3d1xo0gUBlC0NRE4AJWSUgreJPyoJLwpKCmVAlAK3oc1LIKmoZs/gc6pctV4xgKNH+53b9OgogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYuoNfAW/h4+un+vPjcnj6u/J7EACwzwA4nY/Vt7fvz0NRFMXp739+btd70QoHeAN//ArYTOc+U4F+CoarqQATALxc1/5fgb63f66vWAeO05wCWv9WnmeuILD8hAkA8rv1qbr22/fnoRkC5Xlu16+fKYt08zwmDkwAMLBrjxbyUNfe0/33FejquBMU6PLYocBpneNj2uCBkL/8CtjTdHA6H9vXDRKngeDUMeKY9WN3Bk95jt+vqc4JAoDNdf9jgyB2jKciXP+53z+HCvXUBbkzaGY8JwgANtPNdxbP6736yg2BsuCfzsf/l30aSy5rhUDr/x4IKRAAvIXOjrwoekOgtYsoYe0/eO7H5TB3CAT/D0IAAcDuNYpbvUDevj8Pt+u9KuqpF4lD3f+Q91B/H1VQrFGEMy6MQ4xdBrxcAFTdfag77ro34HE5dHXxrTCJFNK+jnxunZNILfim2pUE7gPgtTwuh9t3YtE8H4vb9esndmPXqpNMQrEObREdNO3YNkoGS0BscjoIFsjILp4h3f8k4VHbxjnFtlQQADBwEqgX29zlnKwQaBT+2PtqvmbSaQMSWAJi15p7/me5iJpz3N/XxHYxgQkAcqaAxK64tc20OQV0HW/tnTl2BiEA4DkEUtbey+LfWjIaeCPZ1EW78/3AxCwBsesgqJ62WXQ8STRSZE/nY9G5I2nmzntQ8df9YwKA7qIZfLRCwjGCj4kY2MHPWrQVfwQAb2NgwSu3gHY9OmJIoe4s4AOuLUSXbwKvnWKbqBvDEADQEQbJXXqzSDemgKF3Ede/z318xRRTDQgAdl/sc4Jg6PG6nhiaEiiKNq/GRWCExIzH7Hq0A5gA4EULe2wKsE0TAQBvHC4pxT92bWD0+3MBGAEA25swYG2uAbC/4ty1rXJEpzw2BMprATnHab7WNQUEAITEPuylvCt4pSWTMSGi+DMHS0Dsq/uP8Hx+EAC8uWgICAcEAOyr+x8UAuXykRBAAMAbTQK1awdLh0D2ZxjYAooAgIkngQVCIDjBKOYszC4gNmfqffmTPaPnI3+XUfSzB8AEAMvelLXkUpCbzRAA0NVZj7yJK7fALhEC1XsbcB5BgQDg7eTeRbtkSC15n4ELwAgAaE4KM3TPcxX1p8nEFlQEAAQ8LoctdP/ZgeHzfREAMF5fIQ0FyeBP8woVdcUbAQDbkRsCyUE0ZAoQIAgAWD8M+kKgVdQVbwQA7Hs6mI0AQQDAOoU+p9jXn9vTV7xzdvXYCcSSPAqC15Ja/GbYC19+AldvoV6p+3czGAKAXRb/1KJYfcrXgizbsBeWgHgpt+s9uRhXd+BOPAWk/nzoNdHPHQABAL9GLue8QlG1PIMAgBEhkDoFrFnMQ51/9HW6fwQApBXitTrr2HmT3pOdPbwg4yqvqdYpxwpt326d5EI98DyDHh9Re0051TS7/9COI0/6ZCl2AbH56SAnFHLOUx531FNFJw4mMAGw2ylg651wVxg1i78pgDX8C5At2AD9ZcvDAAAAAElFTkSuQmCC';
let imageFish_WaterSplashChoice = imageFish_WaterSplash0;

const imageFish_HandEmpty = new Image();
imageFish_HandEmpty.src = 'bitmaps/fish/fish_hand_in_empty.png';
const imageFish_HandFish0 = new Image();
imageFish_HandFish0.src = 'bitmaps/fish/fish_hand_in_fish0.png';
const imageFish_HandFish1 = new Image();
imageFish_HandFish1.src = 'bitmaps/fish/fish_hand_in_fish1.png';
const imageFish_HandFish2 = new Image();
imageFish_HandFish2.src = 'bitmaps/fish/fish_hand_in_fish2.png';
const imageFish_HandFish3 = new Image();
imageFish_HandFish3.src = 'bitmaps/fish/fish_hand_in_fish3.png';
const imageFish_HandFish4 = new Image();
imageFish_HandFish4.src = 'bitmaps/fish/fish_hand_in_fish4.png';
const imageFish_HandFish5 = new Image();
imageFish_HandFish5.src = 'bitmaps/fish/fish_hand_in_fish5.png';
const imageFish_HandOut = new Image();
imageFish_HandOut.src = 'bitmaps/fish/fish_hand_out.png';
const imageFish_HandFight = new Image();
imageFish_HandFight.src = 'bitmaps/fish/fish_hand_outFIGHT.png';
const imageFish_HandWarmup = new Image();
imageFish_HandWarmup.src = 'bitmaps/fish/fish_hand_warmup.png';
const imageFish_Superworm1 = new Image();
imageFish_Superworm1.src = 'bitmaps/fish/fish_superworm1.png';
const imageFish_Superworm2 = new Image();
imageFish_Superworm2.src = 'bitmaps/fish/fish_superworm2.png';
const imageFish_Superworm3 = new Image();
imageFish_Superworm3.src = 'bitmaps/fish/fish_superworm3.png';
const imageFish_Superworm4 = new Image();
imageFish_Superworm4.src = 'bitmaps/fish/fish_superworm4.png';
let imageFish_SuperwormChoice = null;



function UpdateFishDisplay() {
    ChooseArmSprites();
    UpdateFishTables();
    UpdateWharf();
    UpdateFishVisibilities();

    buttonGoHome.innerHTML = displayGoHome;
    buttonLeaveWharf.innerHTML = displayLeaveStore;
    buttonInitFish.innerHTML = '<span class="icon LineBasic inlineIcon"></span><br>' + displayFishBegin;
    if (fishState.hasRod) { buttonInitFish.innerHTML = '<span class="icon LineMagic inlineIcon"></span><br>' + displayFishBegin; }
    divFishTimerLabel.innerHTML = displayFishTimeLeft + ':';

    let cellHand = imageFish_HandOut;
    let cellWater = null;
    let cellBillboard = null;

    if (fishTimeLeft > 0) {
        const valueToWrite = fishTimeLeft.toFixed(1);
        divFishTimerDisplay.innerHTML = valueToWrite;
        divFishTimerDisplay.classList.remove('divFishTimerDisplayA');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayB');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayC');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayD');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayE');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayF');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayG');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayH');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayI');
        divFishTimerDisplay.classList.remove('divFishTimerDisplayJ');
        if (valueToWrite == '3.0') { divFishTimerDisplay.classList.add('divFishTimerDisplayA'); }
        else if (valueToWrite == '2.9') { divFishTimerDisplay.classList.add('divFishTimerDisplayB'); }
        else if (valueToWrite == '2.8') { divFishTimerDisplay.classList.add('divFishTimerDisplayC'); }
        else if (valueToWrite == '2.7') { divFishTimerDisplay.classList.add('divFishTimerDisplayD'); }
        else if (valueToWrite == '2.6') { divFishTimerDisplay.classList.add('divFishTimerDisplayE'); }
        else if (valueToWrite == '2.5') { divFishTimerDisplay.classList.add('divFishTimerDisplayF'); }
        else if (valueToWrite == '2.4') { divFishTimerDisplay.classList.add('divFishTimerDisplayG'); }
        else if (valueToWrite == '2.3') { divFishTimerDisplay.classList.add('divFishTimerDisplayH'); }
        else if (valueToWrite == '2.2') { divFishTimerDisplay.classList.add('divFishTimerDisplayI'); }
        else if (valueToWrite == '2.1') { divFishTimerDisplay.classList.add('divFishTimerDisplayJ'); }
        else if (valueToWrite == '2.0') { divFishTimerDisplay.classList.add('divFishTimerDisplayA'); }
        else if (valueToWrite == '1.9') { divFishTimerDisplay.classList.add('divFishTimerDisplayB'); }
        else if (valueToWrite == '1.8') { divFishTimerDisplay.classList.add('divFishTimerDisplayC'); }
        else if (valueToWrite == '1.7') { divFishTimerDisplay.classList.add('divFishTimerDisplayD'); }
        else if (valueToWrite == '1.6') { divFishTimerDisplay.classList.add('divFishTimerDisplayE'); }
        else if (valueToWrite == '1.5') { divFishTimerDisplay.classList.add('divFishTimerDisplayF'); }
        else if (valueToWrite == '1.4') { divFishTimerDisplay.classList.add('divFishTimerDisplayG'); }
        else if (valueToWrite == '1.3') { divFishTimerDisplay.classList.add('divFishTimerDisplayH'); }
        else if (valueToWrite == '1.2') { divFishTimerDisplay.classList.add('divFishTimerDisplayI'); }
        else if (valueToWrite == '1.1') { divFishTimerDisplay.classList.add('divFishTimerDisplayJ'); }
        else if (valueToWrite == '1.0') { divFishTimerDisplay.classList.add('divFishTimerDisplayA'); }
        else if (valueToWrite == '0.9') { divFishTimerDisplay.classList.add('divFishTimerDisplayB'); }
        else if (valueToWrite == '0.8') { divFishTimerDisplay.classList.add('divFishTimerDisplayC'); }
        else if (valueToWrite == '0.7') { divFishTimerDisplay.classList.add('divFishTimerDisplayD'); }
        else if (valueToWrite == '0.6') { divFishTimerDisplay.classList.add('divFishTimerDisplayE'); }
        else if (valueToWrite == '0.5') { divFishTimerDisplay.classList.add('divFishTimerDisplayF'); }
        else if (valueToWrite == '0.4') { divFishTimerDisplay.classList.add('divFishTimerDisplayG'); }
        else if (valueToWrite == '0.3') { divFishTimerDisplay.classList.add('divFishTimerDisplayH'); }
        else if (valueToWrite == '0.2') { divFishTimerDisplay.classList.add('divFishTimerDisplayI'); }
        else if (valueToWrite == '0.1') { divFishTimerDisplay.classList.add('divFishTimerDisplayJ'); }
    }
    else { divFishTimerDisplay.innerHTML = '0.0'; }

    if (fishAvailable) {
        cellHand = imageFish_HandFight;
        cellWater = imageFish_WaterSplashChoice;
        buttonFish.classList.remove('disabled');
        buttonFish.innerHTML = displayFishPull;
    }
    else {
        cellWater = imageFish_WaterRippleChoice;
        buttonFish.classList.add('disabled');
        buttonFish.innerHTML = displayFishWait;
    }

    if (fishButtonStunned) {
        cellHand = imageFish_HandEmpty;
        cellBillboard = imageFish_HUD_missed;
        buttonFish.innerHTML = displayFishMiss;
    }

    if (fishInNet) {
        cellWater = null;
        if (mostRecentCatch == 0) { cellHand = imageFish_HandFish0; }
        else if (mostRecentCatch == 1) { cellHand = imageFish_HandFish1; }
        else if (mostRecentCatch == 2) { cellHand = imageFish_HandFish2; }
        else if (mostRecentCatch == 3) { cellHand = imageFish_HandFish3; }
        else if (mostRecentCatch == 4) { cellHand = imageFish_HandFish4; }
        else if (mostRecentCatch == 5) { cellHand = imageFish_HandFish5; }
        cellBillboard = imageFish_HUD_goodCatch;
        buttonFish.innerHTML = displayFishCatchGood;
        if (fishGreatCatch) {
            cellBillboard = imageFish_HUD_greatCatch;
            buttonFish.innerHTML = displayFishCatchGreat;
        }
    }

    if (!fishGameStarted) {
        cellBillboard = null;
        cellWater = null;
        cellHand = null;
        buttonFish.classList.add('disabled');
    }

    if (fishGameOver) {
        cellBillboard = imageFish_HUD_gameOver;
        cellWater = null;
        cellHand = null;
    }

    if (fishWarmup) {
        cellBillboard = null;
        cellWater = null;
        cellHand = imageFish_HandWarmup;
        buttonFish.innerHTML = displayFishReady;
    }

    canvasFishingHoleContext.drawImage(imageFish_Backdrop, 0, 0);
    if (fishState.hasWWF) { canvasFishingHoleContext.drawImage(imageFish_BackdropBirds, 0, 0); }
    if (fishState.hasFishermen) { canvasFishingHoleContext.drawImage(imageFish_BackdropBoys, 0, 0); }
    if (fishState.hasPrey) { canvasFishingHoleContext.drawImage(imageFish_BackdropStock, 0, 0); }
    if (fishState.hasWharf) { canvasFishingHoleContext.drawImage(imageFish_Wharf, 0, 0); }
    if (player.hasWon) { canvasFishingHoleContext.drawImage(imageFish_BackdropInca, 0, 0); }
    if (cellHand != null) {
        canvasFishingHoleContext.drawImage(cellHand, 0, 0);
        if (fishState.hasBait && cellHand == imageFish_HandWarmup) { canvasFishingHoleContext.drawImage(imageFish_SuperwormChoice, 0, 0); }
    }
    if (cellWater != null) { canvasFishingHoleContext.drawImage(cellWater, 0, 0); }
    if (cellBillboard != null) { canvasFishingHoleContext.drawImage(cellBillboard, 0, 0); }

    canvasWharfContext.drawImage(imageWharf_Backdrop, 0, 0);
    if (player.hasWon) { canvasWharfContext.drawImage(imageWharf_BackdropWIN, 0, 0); }
}



function ChooseArmSprites() {
    if (player.seesVillage) {
        imageFish_HandEmpty.src = 'bitmaps/fish/fish_hand2_in_empty.png';
        imageFish_HandFish0.src = 'bitmaps/fish/fish_hand2_in_fish0.png';
        imageFish_HandFish1.src = 'bitmaps/fish/fish_hand2_in_fish1.png';
        imageFish_HandFish2.src = 'bitmaps/fish/fish_hand2_in_fish2.png';
        imageFish_HandFish3.src = 'bitmaps/fish/fish_hand2_in_fish3.png';
        imageFish_HandFish4.src = 'bitmaps/fish/fish_hand2_in_fish4.png';
        imageFish_HandFish5.src = 'bitmaps/fish/fish_hand2_in_fish5.png';
        imageFish_HandOut.src = 'bitmaps/fish/fish_hand2_out.png';
        imageFish_HandFight.src = 'bitmaps/fish/fish_hand2_outFIGHT.png';
        imageFish_HandWarmup.src = 'bitmaps/fish/fish_hand2_warmup.png';
    }
    if (player.hasMansion) {
        imageFish_HandEmpty.src = 'bitmaps/fish/fish_hand3_in_empty.png';
        imageFish_HandFish0.src = 'bitmaps/fish/fish_hand3_in_fish0.png';
        imageFish_HandFish1.src = 'bitmaps/fish/fish_hand3_in_fish1.png';
        imageFish_HandFish2.src = 'bitmaps/fish/fish_hand3_in_fish2.png';
        imageFish_HandFish3.src = 'bitmaps/fish/fish_hand3_in_fish3.png';
        imageFish_HandFish4.src = 'bitmaps/fish/fish_hand3_in_fish4.png';
        imageFish_HandFish5.src = 'bitmaps/fish/fish_hand3_in_fish5.png';
        imageFish_HandOut.src = 'bitmaps/fish/fish_hand3_out.png';
        imageFish_HandFight.src = 'bitmaps/fish/fish_hand3_outFIGHT.png';
        imageFish_HandWarmup.src = 'bitmaps/fish/fish_hand3_warmup.png';
    }
}



function UpdateFishTables() {
    let chosenHeader = displayFishPreviousSesh;
    if (fishGameStarted || fishWarmup) { chosenHeader = displayFishCurrentSesh; }

    let fishLetters = '<thead>';
    fishLetters += '<tr>';
    fishLetters += '<td colspan="8">';
    fishLetters += chosenHeader;
    fishLetters += '</td>';
    fishLetters += '</tr>';
    fishLetters += '</thead>';
    fishLetters += '<tbody>';
    fishLetters += '<tr class="fishTableFirstRow">';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishSession[0]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishSession[1]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishSession[2]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishSession[3]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishSession[4]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishSession[5]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(fishEscapeCountSession) + '</td>';
    fishLetters += '<td class="lastFishCell">' + formatterCurrent.format(fishMissCountSession) + '</td>';
    fishLetters += '</tr>';
    fishLetters += '<tr class="fishTableSecondRow">';
    fishLetters += '<td><span class="icon FishSmallCommon inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishSmallGreat inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishLargeCommon inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishLargeGreat inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishRareCommon inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishRareGreat inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishEscape inlineIcon"></span></td>';
    fishLetters += '<td class="lastFishCell"><span class="icon FishMiss inlineIcon"></span></td>';
    fishLetters += '</tr>';
    fishLetters += '</tbody>';
    tableFishSession.innerHTML = fishLetters;

    fishLetters = '<thead>';
    fishLetters += '<tr>';
    fishLetters += '<td colspan="8">';
    fishLetters += displayFishRecords;
    fishLetters += '</td>';
    fishLetters += '</tr>';
    fishLetters += '</thead>';
    fishLetters += '<tbody>';
    fishLetters += '<tr class="fishTableFirstRow">';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishLifetime[0]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishLifetime[1]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishLifetime[2]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishLifetime[3]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishLifetime[4]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(caughtFishLifetime[5]) + '</td>';
    fishLetters += '<td>' + formatterCurrent.format(fishEscapeCountLifetime) + '</td>';
    fishLetters += '<td class="lastFishCell">' + formatterCurrent.format(fishMissCountLifetime) + '</td>';
    fishLetters += '</tr>';
    fishLetters += '<tr class="fishTableSecondRow">';
    fishLetters += '<td><span class="icon FishSmallCommon inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishSmallGreat inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishLargeCommon inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishLargeGreat inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishRareCommon inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishRareGreat inlineIcon"></span></td>';
    fishLetters += '<td><span class="icon FishEscape inlineIcon"></span></td>';
    fishLetters += '<td class="lastFishCell"><span class="icon FishMiss inlineIcon"></span></td>';
    fishLetters += '</tr>';
    fishLetters += '</tbody>';
    tableFishRecords.innerHTML = fishLetters;

    fishLetters = '<thead>';
    fishLetters += '<tr>';
    fishLetters += '<td colspan="3">' + displayStaff + '</td>';
    fishLetters += '</tr>';
    fishLetters += '</thead>';
    fishLetters += '<tbody>';
    fishLetters += '<tr>';
    fishLetters += '<td>';
    fishLetters += displayFishermen + '&nbsp;<span class="icon Fisherman inlineIcon"></span>:';
    fishLetters += '</td>';
    fishLetters += '<td class="noPadColumn">';
    fishLetters += formatterCurrent.format(fishermenHired);
    fishLetters += '</td>';
    fishLetters += '<td>';
    fishLetters += '(-' + formatterCurrent.format(fishermenHired * fishermenPay) + '<span class="icon FishSteak inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
    fishLetters += '</td>';
    fishLetters += '</tr>';
    fishLetters += '<tr>';
    fishLetters += '<td>';
    fishLetters += displayFilleters + '&nbsp;<span class="icon FishCutter inlineIcon"></span>:';
    fishLetters += '</td>';
    fishLetters += '<td class="noPadColumn">';
    fishLetters += formatterCurrent.format(fishcuttersHired);
    fishLetters += '</td>';
    fishLetters += '<td>';
    fishLetters += '(-' + formatterCurrent.format(fishcuttersHired * fishcuttersPay) + '<span class="icon FishSteak inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
    fishLetters += '</td>';
    fishLetters += '</tr>';
    if (lifetimeStockfishProduced > 0) {
        fishLetters += '<tr>';
        fishLetters += '<td>';
        fishLetters += displayTanners + '&nbsp;<span class="icon Tanner inlineIcon"></span>:';
        fishLetters += '</td>';
        fishLetters += '<td class="noPadColumn">';
        fishLetters += formatterCurrent.format(tannersHired);
        fishLetters += '</td>';
        fishLetters += '<td>';
        fishLetters += '(-' + formatterCurrent.format(tannersHired * tannersPay) + '<span class="icon FishSteak inlineIcon"></span><span class="warehouseTotal">/' + displayWeek + '</span>)';
        fishLetters += '</td>';
        fishLetters += '</tr>';
    }
    fishLetters += '</tbody>';
    tableFishStaff.innerHTML = fishLetters;

    fishLetters = '<thead>';
    fishLetters += '<tr>';
    if (stockfishCount > 0) { fishLetters += '<td colspan="3">'; }
    else { fishLetters += '<td colspan="2">'; }
    fishLetters += displayFishFishery;
    fishLetters += '</td>';
    fishLetters += '</tr>';
    fishLetters += '</thead>';
    fishLetters += '<tbody>';
    fishLetters += '<tr>';
    fishLetters += '<td>';
    fishLetters += displayFishFilets + '&nbsp;' + '<span class="icon FishSteak inlineIcon"></span>' + ':';
    fishLetters += '</td>';
    fishLetters += '<td class="rightPadColumn">';
    fishLetters += formatterCurrent.format(filetCount);
    fishLetters += '</td>';
    if (stockfishCount > 0) {
        fishLetters += '<td class="rightPadColumn">';
        fishLetters += '';
        fishLetters += '</td>';
    }
    fishLetters += '</tr>';
    if (stockfishCount > 0) {
        fishLetters += '<tr>';
        fishLetters += '<td>';
        fishLetters += displayFishStockfish + '&nbsp;' + '<span class="icon DriedFish inlineIcon"></span>' + ':';
        fishLetters += '</td>';
        fishLetters += '<td class="rightPadColumn">';
        fishLetters += formatterCurrent.format(stockfishCount);
        fishLetters += '</td>';
        fishLetters += '<td class="rightPadColumn">';
        fishLetters += '(-1' + '<span class="icon FishSteak inlineIcon"></span>' + '<span class="warehouseTotal">/' + displayUnit + '</span>)';
        fishLetters += '</td>';
        fishLetters += '</tr>';
    }
    fishLetters += '</tbody>';
    tableFishInventory.innerHTML = fishLetters;

    fishLetters = '<thead>';
    fishLetters += '<tr>';
    fishLetters += '<td>';
    if (lifetimeStockfishProduced > 0) { fishLetters += '<br>' + displayProvisionShort; }
    else { fishLetters += '<br>' + displayProvision; }
    fishLetters += '</td>';
    fishLetters += '<td>';
    fishLetters += displayFishSteaks;
    if (fishState.hasFishermen) {
        if (lifetimeStockfishProduced > 0) { fishLetters += '<br>' + displayLineCaughtShort; }
        else { fishLetters += '<br>' + displayLineCaught; }
    }
    if (lifetimeStockfishProduced > 0) { fishLetters += '<br>' + displayProducedShort; }
    else { fishLetters += '<br>' + displayProduced; }
    fishLetters += '</td>';
    if (fishState.hasFishermen) {
        fishLetters += '<td>';
        fishLetters += displayFishSteaks + '<br>';
        if (lifetimeStockfishProduced > 0) { fishLetters += displayNetCaughtShort; }
        else { fishLetters += displayNetCaught; }
        if (lifetimeStockfishProduced > 0) { fishLetters += '<br>' + displayProducedShort; }
        else { fishLetters += '<br>' + displayProduced; }
        fishLetters += '</td>';
    }
    if (lifetimeStockfishProduced > 0) {
        fishLetters += '<td>';
        fishLetters += displayQuintals + '<br>';
        fishLetters += displayDried + '<br>';
        fishLetters += displayProducedShort;
        fishLetters += '</td>';
    }
    fishLetters += '<td>';
    if (lifetimeStockfishProduced > 0) { fishLetters += displayUnits; }
    else { fishLetters += displayFishSteaks; }
    fishLetters += '<br>' + displayDispensed;
    fishLetters += '</td>';
    fishLetters += '</tr>';
    fishLetters += '</thead>';
    fishLetters += '<tbody>';
    fishLetters += '<tr>';
    fishLetters += '<td>';
    fishLetters += '<span class="icon FishSteak inlineIcon"></span>';
    fishLetters += '</td>';
    fishLetters += '<td>';
    fishLetters += formatterCurrent.format(lifetimeFishEarnings);
    fishLetters += '</td>';
    if (fishState.hasFishermen) {
        fishLetters += '<td>';
        fishLetters += formatterCurrent.format(lifetimeFishermenEarnings);
        fishLetters += '</td>';
    }
    if (lifetimeStockfishProduced > 0) {
        fishLetters += '<td class="stripedCellLight">';
        fishLetters += '';
        fishLetters += '</td>';
    }
    fishLetters += '<td>';
    fishLetters += formatterCurrent.format(filetsSpent[0] + filetsSpent[1] + filetsSpent[2] + filetsSpent[3] + filetsSpent[4] + filetsSpent[5] + filetsSpent[6] + filetsSpent[7] + filetsSpent[8] + filetsSpent[9] + lifetimeStockfishProduced);
    fishLetters += '</td>';
    fishLetters += '</tr>';
    if (lifetimeStockfishProduced > 0) {
        fishLetters += '<tr>';
        fishLetters += '<td>';
        fishLetters += '<span class="icon DriedFish inlineIcon"></span>';
        fishLetters += '</td>';
        fishLetters += '<td class="stripedCellDark">';
        fishLetters += '';
        fishLetters += '</td>';
        fishLetters += '<td class="stripedCellDark">';
        fishLetters += '';
        fishLetters += '</td>';
        fishLetters += '<td>';
        fishLetters += formatterCurrent.format(stockfishCount);
        fishLetters += '</td>';
        fishLetters += '<td>';
        fishLetters += '0';
        fishLetters += '</td>';
        fishLetters += '</tr>';
    }
    fishLetters += '</tbody>';
    tableFishReport.innerHTML = fishLetters;
}



function UpdateWharf() {
    let disableWharfButton = false;
    if ((totalCatches < priceWharf[0]) || fishGameStarted || fishWarmup) { disableWharfButton = true; }

    if (disableWharfButton) { buttonFishWharf.classList.add('disabled'); }
    else { buttonFishWharf.classList.remove('disabled'); }

    let labelString = displayLabelBuildWharf + '<br>';
    if (totalCatches < priceWharf[0]) {
        let gobbledygook = displayLabelWharfUnlockB;
        if (priceWharf[0] - totalCatches == 1) { gobbledygook = displayLabelWharfUnlockBsing; }
        labelString += '(' + displayLabelWharfUnlockA + '&nbsp;' + (priceWharf[0] - totalCatches) + '&nbsp;' + gobbledygook + ')';
    }
    else {
        if (fishState.hasWharf) {
            labelString = '↑ ' + displayLabelVisitWharf;
        }
        else {
            labelString += '(';
            labelString += priceWharf[1] + '<span class="icon ' + ((disableWharfButton) ? 'WheatDisable' : 'Wheat') + ' inlineIcon"></span>';
            labelString += ' + ';
            labelString += priceWharf[2] + '<span class="icon ' + ((disableWharfButton) ? 'LogsDisable' : 'Log') + ' inlineIcon"></span>';
            labelString += ' + ';
            labelString += priceWharf[3] + '<span class="icon ' + ((disableWharfButton) ? 'BoardsDisable' : 'Board') + ' inlineIcon"></span>';
            labelString += ' + ';
            labelString += priceWharf[4] + '<span class="icon ' + ((disableWharfButton) ? 'StoneDisable' : 'Stone') + ' inlineIcon"></span>';
            labelString += ')';
        }
    }
    buttonFishWharf.innerHTML = labelString;

    buttonWharfPosca.innerHTML = displayWharfPosca;
    buttonWharfPrey.innerHTML = displayWharfPrey;
    buttonWharfChum.innerHTML = displayWharfChum;
    buttonWharfKnife.innerHTML = displayWharfKnife;
    buttonWharfBait.innerHTML = displayWharfBait;
    buttonWharfRod.innerHTML = displayWharfRod;
    buttonWharfWWF.innerHTML = displayWharfEnvironment;
    buttonWharfFishermen.innerHTML = displayWharfFishboys;
    buttonWharfChewFat.innerHTML = displayWharfChewTheFat;

    if (player.hasBrewery) {
        buttonWharfPosca.classList.remove('disabled');
    }
    else {
        buttonWharfPosca.classList.add('disabled');
    }
    if (caughtFishLifetime[0] + caughtFishLifetime[1] >= 20) {
        buttonWharfPrey.classList.remove('disabled');
    }
    else {
        buttonWharfPrey.classList.add('disabled');
    }
    if (caughtFishLifetime[2] + caughtFishLifetime[3] >= 10) {
        buttonWharfChum.classList.remove('disabled');
    }
    else {
        buttonWharfChum.classList.add('disabled');
    }
    if (villageStage > 0) {
        buttonWharfKnife.classList.remove('disabled');
    }
    else {
        buttonWharfKnife.classList.add('disabled');
    }
    if (player.canSell) {
        buttonWharfBait.classList.remove('disabled');
    }
    else {
        buttonWharfBait.classList.add('disabled');
    }
    if (beadsSpawn) {
        buttonWharfRod.classList.remove('disabled');
    }
    else {
        buttonWharfRod.classList.add('disabled');
    }
    if (villageStage > 20) {
        buttonWharfWWF.classList.remove('disabled');
    }
    else {
        buttonWharfWWF.classList.add('disabled');
    }
    if (residenceStage > 11) {
        buttonWharfFishermen.classList.remove('disabled');
    }
    else {
        buttonWharfFishermen.classList.add('disabled');
    }

    if (fishState.hasPosca) {
        buttonWharfPosca.style.display = 'none';
    }
    if (fishState.hasPrey) {
        buttonWharfPrey.style.display = 'none';
    }
    if (fishState.hasChum) {
        buttonWharfChum.style.display = 'none';
    }
    if (fishState.hasKnife) {
        buttonWharfKnife.style.display = 'none';
    }
    if (fishState.hasBait) {
        buttonWharfBait.style.display = 'none';
    }
    if (fishState.hasRod) {
        buttonWharfRod.style.display = 'none';
    }
    if (fishState.hasWWF) {
        buttonWharfWWF.style.display = 'none';
    }
    if (fishState.hasFishermen) {
        buttonWharfFishermen.style.display = 'none';
    }

    if (fishState.hasPosca && fishState.hasPrey && fishState.hasChum && fishState.hasKnife && fishState.hasBait && fishState.hasRod && fishState.hasWWF && fishState.hasFishermen) {
        buttonWharfChewFat.style.display = 'block';
    }
}



function UpdateFishVisibilities() {
    if (fishGameStarted || fishWarmup) {
        buttonGoHome.classList.add('disabled');
        divFishTimerContainer.style.display = '';
    }
    else {
        buttonGoHome.classList.remove('disabled');
        divFishTimerContainer.style.display = 'none';
    }

    let showSessionTable = false;
    let showRecordsTable = false;
    if (player.hasFishRecords) {
        showSessionTable = true;
        showRecordsTable = true;
    }
    else {
        for (let i = 0; i < caughtFishSession.length; i++) {
            if (caughtFishSession[i] > 0) { showSessionTable = true; }
        }
        if (fishMissCountSession > 0) { showSessionTable = true; }
        if (fishEscapeCountSession > 0) { showSessionTable = true; }
    }
    if (showSessionTable) { tableFishSession.style.display = 'table'; }
    if (showRecordsTable) {
        tableFishRecords.style.display = 'table';
        tableFishInventory.style.display = 'table';
    }

    if (fishState.hasFishermen) { tableFishStaff.style.display = 'table'; }
    else { tableFishStaff.style.display = ''; }

    if ((filetsSpent[0] + filetsSpent[1] + filetsSpent[2] + filetsSpent[3] + filetsSpent[4] + filetsSpent[5] + filetsSpent[6] + filetsSpent[7] + filetsSpent[8] + filetsSpent[9]) > 0) {
        tableFishReport.style.display = 'table';
    }
    else {
        tableFishReport.style.display = '';
    }
}



function ClearFishButtonAnimation() {
    buttonFish.style.animationName = 'wiggleClear';
    buttonFish.style.animationDuration = '0.0s';
    buttonFish.style.animationTimingFunction = 'ease-out';
    buttonFish.style.animationFillMode = 'both';
}



function ShiverMeFishButton() {
    fishMissCountSession++;
    fishMissCountLifetime++;
    ClearFishButtonAnimation();
    setTimeout(() => {
        buttonFish.style.animationName = 'wiggle';
        buttonFish.style.animationDuration = stunnedFishButtonWiggleDurationS;
    }, 1);
    clearTimeout(stunnedFishButtonCountdown);
    stunnedFishButtonCountdown = setTimeout(() => {
        fishButtonStunned = false;
        UpdateFishDisplay();
    }, stunnedFishButtonCountdownDurationMS);
}



function NodFishButton() {
    ClearFishButtonAnimation();
    setTimeout(() => {
        buttonFish.style.animationName = 'nod';
        buttonFish.style.animationDuration = fishInNetNodDurationS;
        buttonFish.style.animationTimingFunction = 'ease-out';
        buttonFish.style.animationFillMode = 'both';
    }, 1);
}



function CycleSplashSprite() {
    splashFrame++;
    if (splashFrame == 4) { splashFrame = 0; }
    if (splashFrame == 0) { imageFish_WaterSplashChoice = imageFish_WaterSplash0; }
    else if (splashFrame == 1) { imageFish_WaterSplashChoice = imageFish_WaterSplash1; }
    else if (splashFrame == 2) { imageFish_WaterSplashChoice = imageFish_WaterSplash2; }
    else if (splashFrame == 3) { imageFish_WaterSplashChoice = imageFish_WaterSplash3; }
    splashTimer = setTimeout(CycleSplashSprite, Math.ceil(1000 / splashFPS));
}



function CycleRippleSprite() {
    rippleFrame++;
    if (rippleFrame == 3) { rippleFrame = 0; }
    if (rippleFrame == 0) { imageFish_WaterRippleChoice = imageFish_WaterRipple0; }
    else if (rippleFrame == 1) { imageFish_WaterRippleChoice = imageFish_WaterRipple1; }
    else if (rippleFrame == 2) { imageFish_WaterRippleChoice = imageFish_WaterRipple2; }
    rippleTimer = setTimeout(CycleRippleSprite, Math.ceil(1000 / rippleFPS));
}



function FishWarmupSequence() {
    fishWarmup = true;
    const divTHREE = document.createElement('div');
    const divTWOOO = document.createElement('div');
    const divONEEE = document.createElement('div');
    const divFISHH = document.createElement('div');
    divTHREE.id = 'divTHREE';
    divTWOOO.id = 'divTWOOO';
    divONEEE.id = 'divONEEE';
    divFISHH.id = 'divFISHH';
    divTHREE.innerHTML = '3';
    divTWOOO.innerHTML = '2';
    divONEEE.innerHTML = '1';
    divFISHH.innerHTML = displayFishFish;
    divTHREE.style.animationName = 'fishCount3';
    divTHREE.style.animationDuration = '4s';
    divTHREE.style.animationTimingFunction = 'linear';
    divTHREE.style.animationFillMode = 'forwards';
    divTWOOO.style.animationName = 'fishCount2';
    divTWOOO.style.animationDuration = '4s';
    divTWOOO.style.animationTimingFunction = 'linear';
    divTWOOO.style.animationFillMode = 'forwards';
    divONEEE.style.animationName = 'fishCount1';
    divONEEE.style.animationDuration = '4s';
    divONEEE.style.animationTimingFunction = 'linear';
    divONEEE.style.animationFillMode = 'forwards';
    divFISHH.style.animationName = 'fishCountFISH';
    divFISHH.style.animationDuration = '4s';
    divFISHH.style.animationTimingFunction = 'linear';
    divFISHH.style.animationFillMode = 'forwards';
    divFishDisplayWrapper.appendChild(divTHREE);
    divFishDisplayWrapper.appendChild(divTWOOO);
    divFishDisplayWrapper.appendChild(divONEEE);
    divFishDisplayWrapper.appendChild(divFISHH);
    setTimeout(() => {
        divTHREE.remove();
        divTWOOO.remove();
        divONEEE.remove();
        divFISHH.remove();
    }, 5000);
}



// End of Document