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
    GameEvent(finalString, null, true, false);

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
    if (item == 7 && player.hasCottage && fishState.hasFishermen) {
        fishState.hasNets = true;
        if (player.likesStory) { GameEvent(displayStoryWharfBuyNets); }
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
    if (lifetimeStockfishProduced > 0) { fishLetters += '<td colspan="3">'; }
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
    if (lifetimeStockfishProduced > 0) {
        fishLetters += '<td class="rightPadColumn">';
        fishLetters += '';
        fishLetters += '</td>';
    }
    fishLetters += '</tr>';
    if (lifetimeStockfishProduced > 0) {
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
        fishLetters += formatterCurrent.format(lifetimeStockfishProduced);
        fishLetters += '</td>';
        fishLetters += '<td>';
        fishLetters += formatterCurrent.format(lifetimeStockfishShipped);
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
    buttonWharfNets.innerHTML = displayWharfNets;
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
    if (player.hasCottage && fishState.hasFishermen) {
        buttonWharfNets.classList.remove('disabled');
    }
    else {
        buttonWharfNets.classList.add('disabled');
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
    if (fishState.hasNets) {
        buttonWharfNets.style.display = 'none';
    }

    if (fishState.hasPosca && fishState.hasPrey && fishState.hasChum && fishState.hasKnife && fishState.hasBait && fishState.hasRod && fishState.hasWWF && fishState.hasFishermen && fishState.hasNets) {
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