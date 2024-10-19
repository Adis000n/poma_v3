function showAnswer(){
    var answer_clicked = true;
    var message = { is_answer_clicked: answer_clicked };
    sendMessage(JSON.stringify(message)); 
    createWrongCorrectButtons();
    deleteAnswerButton();
}