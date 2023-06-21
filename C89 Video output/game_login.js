function addUser() {
player_1_name =document.getElementById("player1_name_input").value;   
player_2_name =document.getElementById("player2_name_input").value;
localStorage.setItem("player_1_name" ,player_1_name);  
localStorage.setItem("player_2_name" ,player_2_name);  
window.location="game_page.html";
}
player_1_name=localStorage.getItem("player_1_name");
player_2_name=localStorage.getItem("player_2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+": ";
document.getElementById("player_2_name").innerHTML=player_2_name+": ";
document.getElementById("player_1_name").innerHTML=player_1_name+": ";