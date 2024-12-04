// UTILITIES ***************************************************************************************
// *************************************************************************************************

function JumpToTopPlease() {
    divOverlayLoading.scrollTo(0, 0);
    divOverlayForeword.scrollTo(0, 0);
    divGameWindow.scrollTo(0, 0);
    window.scrollTo(0, 0);
}



function Achievement() {
    achievementSoundRare.play();
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



function CollateGameStateReport(loud = false) {
    const integerCounts = {
        farmInventory: bushelCount,
        farmSeeded: seededCount,
        farmFarmed: farmedCount,
        farmHarvested: harvestedCount,
        farmSpent: spentCount,
        farmPurchased: purchasedCount,
        farmSold: soldCount,
        farmHolidays: [weeksOfHoliday, manweeksLost,],

        forestInventory: [logsCount, boardsCount,],
        forestProduced: forestProducedCount,
        forestSpent: forestSpentCount,
        forestPurchased: forestPurchasedCount,
        forestSold: forestSoldCount,

        mountainInventory: [stoneCount, oreCopperCount, ingotsCopperCount, ingotsTinCount, ingotsBronzeCount, crystalsCount,],
        mountainProduced: mountainProducedCount,
        mountainSpent: mountainSpentCount,
        mountainPurchased: mountainPurchasedCount,
        mountainSold: mountainSoldCount,

        staffWheatPaid: paidOutWheat,
        staffStarving: starving,
        staffPriority: priority,
        staffHired: handsHired,

        residenceResourceInventory: residenceIngredientInStockCount,
        residenceResourceSpent: residenceIngredientConsumedCount,
        residenceOutputInventory: residenceInStockCount,
        residenceOutputProduced: residenceProducedCount,
        residenceOutputSpent: residenceSpentCount,
        residenceOutputShipped: residenceShippedCount,

        villageDemographics: [residentsCount, [pilgrimsCount, pilgrimsLifetimeCount,],],
        villageFiat: [asCount, asSpent, commercialLifetimeSpend, commoditiesLifetimeSpend, rentLifetimeCollected, taxesLifetimeCollected, interestLifetimeCollected, tourismLifetimeProfit, militaryLifetimeCost, medicalLifetimeCost, currentBushelPrice, currentBarleyAdjustment, marketLifetimeRevenue, shipmentProfits, shipmentCosts, tributeLifetimePaid,],
        villageMateriel: [[horsesCount, horsesEaten,], [beadsCount, pilgrimLifetimeIncome,], trophiesCount, scrollsCount, [ratsCount, ratsHighScore,], ghostsCount, patientsCount, relicCount,],
    };
    const farmlandArrays = {
        grain: arrayFarmPlots,
        olives: arrayOlivar,
        dates: arrayDatePalmGrove,
        figs: arrayFigOrchard,
        poms: arrayPomOrchard,
        grapes: arrayVineyard,
    };
    const report = {
        hero: player,
        calendar: [gameTurn, year, week, olivePlantDate, estDate,],
        stages: [farmStage, warehouseStage, residenceStage, villageStage,],
        counts: integerCounts,
        farmland: farmlandArrays,
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
    player.canDismissEvent = false;
    buttonGameEventDismiss.innerHTML = '<span class="icon AnkhTile inlineIcon"></span>';
    setTimeout(() => {
        buttonGameEventDismiss.innerHTML = player.hasWon ? displayEndButton : displayOK;
        player.canDismissEvent = true;
    }, gameEventDismissDelay);
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