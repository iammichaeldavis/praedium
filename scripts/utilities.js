// UTILITIES ***************************************************************************************
// *************************************************************************************************

function CollateGameStateReport(loud = false) {
    const integerCounts = {
        farmBushels: bushelCount,
        farmSeeded: seededCount,
        farmFarmed: farmedCount,
        farmHarvested: harvestedCount,
        farmSpent: spentCount,
        farmSold: soldCount,
        farmHolidays: [weeksOfHoliday, manweeksLost,],
        forestProduced: forestProducedCount,
        forestSpent: forestSpentCount,
        mountainProduced: mountainProducedCount,
        mountainSpent: mountainSpentCount,
        staffWheatPaid: paidOutWheat,
        villageFiat: [asCount, asSpent, rentLifetimeCollected, marketLifetimeRevenue, tourismLifetimeProfit, taxesLifetimeCollected, militaryLifetimeCost, tributeLifetimePaid, currentBushelPrice,],
        villageDemographics: [residentsCount, [pilgrimsCount, pilgrimsLifetimeCount,],],
        villageMateriel: [[horsesCount, horsesEaten,], trophiesCount, [beadsCount, pilgrimLifetimeIncome,], scrollsCount, relicCount, [ratsCount, ratsHighScore,],],
        residenceResourceInStockCount: residenceIngredientInStockCount,
        residenceResourceConsumedCount: residenceIngredientConsumedCount,
        residenceOutputInStockCount: residenceInStockCount,
        residenceOutputProducedCount: residenceProducedCount,
        residenceOutputSpentCount: residenceSpentCount,
    }
    const gameStateSnapshot = {
        hero: [player.names, player.age, player.saṃsāra, player.isAt, player.hasWon,],
        preferences: [player.speaks, player.likesMusic, player.likesSounds, player.likesAnimations, player.likesStory, player.isGod, player.isOnMobile,],
        calendar: [gameTurn, year, week, olivePlantDate, estDate,],
        stages: [farmStage, warehouseStage, residenceStage, villageStage,],
        counts: integerCounts,
    };
    if (loud) {
        console.log('--------🚨 Game State Report Start 🚨--------');
        console.log(gameStateSnapshot);
        console.log('--------🚨 Game State Report End 🚨--------');
    }
    return gameStateSnapshot;
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
    gameSpeed = 'paused';
    AnimateHourglass(gameSpeed);
}



function StartTime(punchIt = false) {
    clearTimeout(timeoutHourglass);
    if (gameSpeed == 'standard') { gameSpeed = 'fast'; }
    else if (gameSpeed == 'fast') { gameSpeed = 'high'; }
    else { gameSpeed = 'standard'; }
    if (punchIt) { gameSpeed = 'ultra'; }
    AnimateHourglass(gameSpeed);
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
}



function FindPlot(typeSought, crop) {
    let cell = [-1, -1,];
    let row = -1;
    let col = -1;
    let rowCount = farmSize[1];

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



// End of Document