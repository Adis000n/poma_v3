function start_stop_media(){

}
function clear_pytania(){
    const message = { clear_questions: true }; 
    sendMessage(JSON.stringify(message));
}