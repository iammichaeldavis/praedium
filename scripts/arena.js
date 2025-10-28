// ۞ ARENA *****************************************************************************************
// *************************************************************************************************

// --- PLAYER ACTIONS ------------------------------------------------------------------------------

function GoToArena() {
    if (!player.hasSeenArena) {
        player.hasSeenArena = true;
        if (player.likesStory) { GameEvent(displayStoryArenaFirstVisit); }
    }

    PauseTime();
    divGameWindow.style.display = 'none';
    divViewTownship.style.display = '';
    divMinigameArena.style.display = 'block';
    divMinigameArena.appendChild(divFooter);
    player.isAt = 'Arena';
    UpdateDisplay();
    UpdateArenaDisplay();
    JumpToTopPlease();
}

function LeaveArena() {
    if (gameSpeed == 'paused') { StartTime(); }
    divGameWindow.style.display = '';
    divViewTownship.style.display = 'block';
    divMinigameArena.style.display = '';
    divWidthClamp.appendChild(divFooter);
    player.isAt = 'Township';
    UpdateDisplay();
    JumpToTopPlease();
}

function PlaceBet(side) {
    // 0 - 🟦 Blue, 1 - 🟥 Red
    if (asCount >= arenaBet) {
        asCount -= arenaBet;
        asSpent += arenaBet;
        arenaTotalBet += arenaBet;
        const payout = arenaBet + ((arenaBet / 10) * 9);

        //console.log('--------- NEW BET ---------');
        const winner = FindWholeRandom(0, 1);
        //console.log('Bet: ' + ((side == 0) ? '🟦 Blue' : '🟥 Red') );
        //console.log('Win: ' + ((winner == 0) ? '🟦 Blue' : '🟥 Red') );
        if (winner == side) {
            //console.log('Good choice!');
            asCount += payout;
            arenaTotalWin += payout;
            arenaWins[side]++;
        }
        else {
            //console.log('YOU LOSE GOOD DAY SIR I SAID GOOD DAY');
            arenaTotalLoss += arenaBet;
            arenaLosses[side]++;
        }

        let taleOfTheTape = displayTOTT1 + ' <span class="icon PlainMessage inlineIcon"></span>:';
        taleOfTheTape += '<div id="nasirMessage">';
        taleOfTheTape += '<span class="icon ' + ((side == 0) ? 'doorShieldBlue' : 'doorShieldRed') + ' inlineIcon"></span>';
        taleOfTheTape += ' ' + ((side == 0) ? displayTOTTBlue : displayTOTTRed) + ' ' + displayTOTTTeamToWin;
        taleOfTheTape += '<br>';
        taleOfTheTape += '-------';
        taleOfTheTape += '<br>';
        taleOfTheTape += displayTOTTWager + ' <span class="icon MoneyBag inlineIcon"></span>: ';
        taleOfTheTape += currencySymbol + formatterCurrent.format(arenaBet);
        taleOfTheTape += '</div>';
        taleOfTheTape += '<br>';
        taleOfTheTape += displayTOTT2;
        taleOfTheTape += '<br><br>——— ⦿ ———<br><br>';
        const victorRound1 = FindWholeRandom(0, 1);
        const victorRound2 = FindWholeRandom(0, 1);
        taleOfTheTape += displayTOTT3 + ' ';
        taleOfTheTape += (victorRound1 == 0) ? '<span class="blueTeam">' + displayTOTTBlue.toLowerCase() + '</span>' : '<span class="redTeam">' + displayTOTTRed.toLowerCase() + '</span>';
        taleOfTheTape += ' ' + displayTOTT4 + '...<br><br>';
        taleOfTheTape += '<img id="imgArenaWinnerR1" src="bitmaps/arena/arena' + ((victorRound1 == 0) ? 'Blue' : 'Red') + 'Round1.png">';
        taleOfTheTape += '<br><br>...' + displayTOTT5 + ' ' + ((victorRound2 == 0) ? '<span class="blueTeam">' + displayTOTTBlue.toLowerCase() + '</span>' : '<span class="redTeam">' + displayTOTTRed.toLowerCase() + '</span>') + ' ' + displayTOTT6 + '...<br><br>';
        taleOfTheTape += '<img id="imgArenaWinnerR2" src="bitmaps/arena/arena' + ((victorRound2 == 0) ? 'Blue' : 'Red') + 'Round2.png">';
        taleOfTheTape += '<br><br>...' + ((victorRound2 == winner) ? displayTOTTy : displayTOTTpero) + ' ' + displayTOTT7 + ' ';
        taleOfTheTape += (winner == 0) ? '<span class="blueTeam">' + displayTOTTBlue.toLowerCase() + '</span>' : '<span class="redTeam">' + displayTOTTRed.toLowerCase() + '</span>';
        taleOfTheTape += ' ' + displayTOTT8 + '<br><br>';
        taleOfTheTape += '<img id="imgArenaWinnerR3" src="bitmaps/arena/arena' + ((winner == 0) ? 'Blue' : 'Red') + 'Round3.png">';
        taleOfTheTape += '<br><br>——— ⦿ ———<br><br>';
        taleOfTheTape += displayTOTT9 + ' ' + ((winner == side) ? displayTOTTalto : displayTOTTpasar) + ' ' + displayTOTT10 + ' ' + ((winner == side) ? displayTOTTexclaims : displayTOTTsighs) + ': ';
        if (winner == side) {
            taleOfTheTape += displayTOTT11;
        }
        else {
            taleOfTheTape += displayTOTT12;
        }
        taleOfTheTape += '<br><br>';
        taleOfTheTape += displayTOTTWinTeam + ': ';
        taleOfTheTape += '<span class="icon ' + ((winner == 0) ? 'doorShieldBlue' : 'doorShieldRed') + ' inlineIcon"></span>';
        taleOfTheTape += ' ' + ((winner == 0) ? '<span class="blueTeam">' + displayTOTTBlue : '<span class="redTeam">' + displayTOTTRed) + ' ' + displayTOTTTeam + '</span><br>';
        taleOfTheTape += displayTOTTYouBetOn + ': ';
        taleOfTheTape += '<span class="icon ' + ((side == 0) ? 'doorShieldBlue' : 'doorShieldRed') + ' inlineIcon"></span>';
        taleOfTheTape += ' ' + ((side == 0) ? '<span class="blueTeam">' + displayTOTTBlue : '<span class="redTeam">' + displayTOTTRed) + ' ' + displayTOTTTeam + '</span><br>';
        taleOfTheTape += displayTOTTAmount + ' ';
        taleOfTheTape += ((winner == side) ? displayTOTTWon + ' <span class="icon Trophy inlineIcon"></span>' : displayTOTTLost + ' <span class="icon MoneyBagSpent inlineIcon"></span>') + ': ' + currencySymbol;
        taleOfTheTape += ((winner == side) ? formatterCurrent.format(payout) : formatterCurrent.format(arenaBet));
        GameEvent(taleOfTheTape);

        RecordProgress();
    }
    UpdateArenaDisplay();
}



// --- UI ------------------------------------------------------------------------------------------

function UpdateArenaDisplay() {
    buttonLeaveArena.innerHTML = displayLabelLeaveArena;

    let labelString = displayLabelBetBlue + '<br><span class="icon ';
    labelString += ((asCount < arenaBet) ? 'doorShieldGrey' : 'doorShieldBlue');
    labelString += ' inlineIcon"></span><br>' + '(' + currencySymbol + formatterCurrent.format(arenaBet) + ')';
    buttonArenaBetBlue.innerHTML = labelString;

    labelString = displayLabelBetRed + '<br><span class="icon ';
    labelString += ((asCount < arenaBet) ? 'doorShieldGrey' : 'doorShieldRed');
    labelString += ' inlineIcon"></span><br>' + '(' + currencySymbol + formatterCurrent.format(arenaBet) + ')';
    buttonArenaBetRed.innerHTML = labelString;

    if (asCount < arenaBet) {
        buttonArenaBetBlue.classList.add('disabled');
        buttonArenaBetRed.classList.add('disabled');
    }
    else {
        buttonArenaBetBlue.classList.remove('disabled');
        buttonArenaBetRed.classList.remove('disabled');
    }

    let chosenPlate = imageArena_Backdrop1;
    if (villageStage > 24) { chosenPlate = imageArena_Backdrop2; }
    if (player.hasWon) { chosenPlate = imageArena_Backdrop3; }
    canvasArenaContext.drawImage(chosenPlate, 0, 0);

    if (arenaTotalBet > 0) {
        let arenaStandings = '<table id="tableArenaStandings">';
        arenaStandings += '<thead>';
        arenaStandings += '<tr>';
        arenaStandings += '<td colspan="3">';
        arenaStandings += displayLabelArenaStandings;
        arenaStandings += '</td>';
        arenaStandings += '</tr>';
        arenaStandings += '</thead>';
        arenaStandings += '<tbody>';
        arenaStandings += '<tr>';
        arenaStandings += '<td style="text-align: center;">';
        arenaStandings += displayLabelArenaBetsPlaced + ' <span class="icon PlainMessage inlineIcon"></span>: ';
        arenaStandings += DrawRoundsNumberWithZeros((arenaWins[0] + arenaWins[1] + arenaLosses[0] + arenaLosses[1]));
        arenaStandings += '</td>';
        arenaStandings += '<td class="noPadColumn">';
        arenaStandings += displayLabelArenaTotalWagered + ' <span class="icon MoneyBag inlineIcon"></span>:';
        arenaStandings += '</td>';
        arenaStandings += '<td>';
        arenaStandings += currencySymbol;
        if (arenaTotalBet == 0) {
            if (player.speaks == 'English') { arenaStandings += '<span class="inertNumerals">0,000,000,000</span>'; }
            else { arenaStandings += '<span class="inertNumerals">0.000.000.000</span>'; }
        }
        else {
            arenaStandings += AddInertDigitsArena(arenaTotalBet.toString().length, 10) + formatterCurrent.format(arenaTotalBet);
        }
        arenaStandings += '</td>';
        arenaStandings += '</tr>';
        arenaStandings += '<tr>';
        arenaStandings += '<td>';
        arenaStandings += displayLabelArenaWins + ' <span class="icon ArenaWin inlineIcon"></span>: ';
        arenaStandings += '<span class="icon doorShieldBlue inlineIcon"></span>' + DrawRoundsNumberWithZeros(arenaWins[0]) + ' ';
        arenaStandings += '<span class="icon doorShieldRed inlineIcon"></span>' + DrawRoundsNumberWithZeros(arenaWins[1]);
        arenaStandings += '</td>';
        arenaStandings += '<td class="noPadColumn">';
        arenaStandings += displayLabelArenaTotalWon + ' <span class="icon Trophy inlineIcon"></span>:';
        arenaStandings += '</td>';
        arenaStandings += '<td>';
        arenaStandings += currencySymbol;
        if (arenaTotalWin == 0) {
            if (player.speaks == 'English') { arenaStandings += '<span class="inertNumerals">0,000,000,000</span>'; }
            else { arenaStandings += '<span class="inertNumerals">0.000.000.000</span>'; }
        }
        else {
            arenaStandings += AddInertDigitsArena(arenaTotalWin.toString().length, 10) + formatterCurrent.format(arenaTotalWin);
        }
        arenaStandings += '</td>';
        arenaStandings += '</tr>';
        arenaStandings += '<tr>';
        arenaStandings += '<td>';
        arenaStandings += displayLabelArenaLosses + ' <span class="icon ArenaLoss inlineIcon"></span>: ';
        arenaStandings += '<span class="icon doorShieldBlue inlineIcon"></span>' + DrawRoundsNumberWithZeros(arenaLosses[0]) + ' ';
        arenaStandings += '<span class="icon doorShieldRed inlineIcon"></span>' + DrawRoundsNumberWithZeros(arenaLosses[1]);
        arenaStandings += '</td>';
        arenaStandings += '<td class="noPadColumn">';
        arenaStandings += displayLabelArenaTotalLost + ' <span class="icon MoneyBagSpent inlineIcon"></span>:';
        arenaStandings += '</td>';
        arenaStandings += '<td>';
        arenaStandings += currencySymbol;
        if (arenaTotalLoss == 0) {
            if (player.speaks == 'English') { arenaStandings += '<span class="inertNumerals">0,000,000,000</span>'; }
            else { arenaStandings += '<span class="inertNumerals">0.000.000.000</span>'; }
        }
        else {
            arenaStandings += AddInertDigitsArena(arenaTotalLoss.toString().length, 10) + formatterCurrent.format(arenaTotalLoss);
        }
        arenaStandings += '</td>';
        arenaStandings += '</tr>';
        arenaStandings += '</tbody>';
        arenaStandings += '</table>';
        divArenaTables.innerHTML = arenaStandings;
        divArenaTables.style.display = 'block';
    }
    else {
        divArenaTables.style.display = '';
    }
}

function DrawRoundsNumberWithZeros(number) {
    if (number == 0) {
        return '<span class="inertNumerals">000</span>';
    }
    else {
        let stringForReturn = '<span class="inertNumerals">';
        if (number.toString().length == 1) {
            stringForReturn += '00';
        }
        else if (number.toString().length == 2) {
            stringForReturn += '0';
        }
        stringForReturn += '</span>';
        stringForReturn += number;
        return stringForReturn;
    }
}

function AddInertDigitsArena(comparedDigits, maxDigits, removeLastCharacter = false) {
    if (comparedDigits < maxDigits) {
        let neededDigitsCount = maxDigits - comparedDigits;
        let divider = ',';
        if (player.speaks == 'Spanish') { divider = '.'; }
        if (neededDigitsCount > 1) {
            let lilStringGuy = '<span class="inertNumerals">';
            lilStringGuy += '0' + divider;
            neededDigitsCount--;
            while (neededDigitsCount > 0) {
                let tick = 0;
                while (neededDigitsCount > 0 && tick < 3) {
                    tick++;
                    neededDigitsCount--;
                    lilStringGuy += '0';
                }
                if (neededDigitsCount > 0 || (neededDigitsCount == 0 && tick == 3)) { lilStringGuy += divider; }
            }
            if (removeLastCharacter) { lilStringGuy = lilStringGuy.slice(0, -1); }
            lilStringGuy += '</span>';
            return lilStringGuy;
        }
        else { return '<span class="inertNumerals">0' + divider + '</span>'; }
    }
    else { return ''; }
}



// End of Document