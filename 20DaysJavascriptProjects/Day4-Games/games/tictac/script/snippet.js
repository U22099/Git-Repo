
function aiMove(){
    let found = false;
    while(!found){
        //Check to Win
        if(col1.innerHTML == ""){
            col1.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col1.innerHTML = "";
            }
        }
        if(col2.innerHTML == ""){
            col2.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col2.innerHTML = "";
            }
        }
        if(col3.innerHTML == ""){
            col3.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col3.innerHTML = "";
            }
        }
        if(col4.innerHTML == ""){
            col4.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col4.innerHTML = "";
            }
        }
        if(col5.innerHTML == ""){
            col5.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col5.innerHTML = "";
            }
        }
        if(col6.innerHTML == ""){
            col6.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col1.innerHTML = "";
            }
        }
        if(col7.innerHTML == ""){
            col7.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col8.innerHTML = "";
            }
        }
        if(col8.innerHTML == ""){
            col8.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col8.innerHTML = "";
            }
        }
        if(col9.innerHTML == ""){
            col9.innerHTML = aiSign;
            let x = checkWin();
            if(x == aiSign){
                showWin(aiSign);
                found = true;
            }
            else{
                col9.innerHTML = "";
            }
        }
    
    //Block PlayerWin
        if(col1.innerHTML == ""){
            col1.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col1.innerHTML = aiSign;
                found = true;
            }
            else{
                col1.innerHTML = "";
            }
        }
        if(col2.innerHTML == ""){
            col2.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col2.innerHTML = aiSign;
                found = true;
            }
            else{
                col2.innerHTML = "";
            }
        }
        if(col3.innerHTML == ""){
            col3.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col3.innerHTML = aiSign;
                found = true;
            }
            else{
                col3.innerHTML = "";
            }
        }
        if(col4.innerHTML == ""){
            col4.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col4.innerHTML = aiSign;
                found = true;
            }
            else{
                col4.innerHTML = "";
            }
        }
        if(col5.innerHTML == ""){
            col5.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col5.innerHTML = aiSign;
                found = true;
            }
            else{
                col5.innerHTML = "";
            }
        }
        if(col6.innerHTML == ""){
            col6.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col6.innerHTML = aiSign;
                found = true;
            }
            else{
                col1.innerHTML = "";
            }
        }
        if(col7.innerHTML == ""){
            col7.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col7.innerHTML = aiSign;
                found = true;
            }
            else{
                col8.innerHTML = "";
            }
        }
        if(col8.innerHTML == ""){
            col8.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col8.innerHTML = aiSign;
                found = true;
            }
            else{
                col8.innerHTML = "";
            }
        }
        if(col9.innerHTML == ""){
            col9.innerHTML = playerSign;
            let x = checkWin();
            if(x == playerSign){
                col9.innerHTML = aiSign;
                found = true;
            }
            else{
                col9.innerHTML = "";
            }
        }
    //Random Generate
        let no = Math.floor(Math.random()*9)+1;
        if(no == 1){
            if(col1.innerHTML == ""){
                col1.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 2){
            if(col2.innerHTML == ""){
                col2.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 3){
            if(col3.innerHTML == ""){
                col3.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 4){
            if(col4.innerHTML == ""){
                col4.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 5){
            if(col5.innerHTML == ""){
                col5.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 6){
            if(col6.innerHTML == ""){
                col6.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 7){
            if(col7.innerHTML == ""){
                col7.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 8){
            if(col8.innerHTML == ""){
                col8.innerHTML = aiSign;
                found = true;
            }
        }
        else if(no == 9){
            if(col9.innerHTML == ""){
                col9.innerHTML = aiSign;
                found = true;
            }
        }
        else{
            pass;
        }
    }
    
}