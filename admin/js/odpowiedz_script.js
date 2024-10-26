function showAnswer(){
    var message = { is_answer_clicked: true };
    sendMessage(JSON.stringify(message)); 
    createWrongCorrectButtons();
    deleteAnswerButton();
    setButtonState({ start: false, stop: true, reset: false });
    sendTimerMessage('stop');
}