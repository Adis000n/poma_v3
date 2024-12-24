
function submitTeamData(number) {
    let booster = number;
    const message = {booster: booster};
    sendMessage(JSON.stringify(message));
}
