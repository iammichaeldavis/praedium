// UTILITIES ***************************************************************************************
// *************************************************************************************************

function DetermineDevice() {
    const regexp = /android|iphone|kindle|ipad/i; // regular expression containing known mobile device keywords; this may need to grow 🤔
    player.isOnMobile = regexp.test(navigator.userAgent);

    if (player.isOnMobile) {
        alert('I am a mobile device 📱');
    } else {
        alert('I am a desktop 🖥️ or laptop 💻');
    }
}



function SystemMessage(messageCorpus) {
    divSystemMessageCorpus.innerHTML = messageCorpus;
    player.seesSystemMessage = true;
    UpdateDisplay();
    buttonSystemMessageDismiss.focus({ focusVisible: false });
    divOverlaySystemMessage.scrollTo(0, 0);
}



function GameEvent(eventCorpus, eventFaçade = null) {
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

    if (crop == 'wheat' && rowCount > 6) { rowCount = 6; }

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



// End of Document