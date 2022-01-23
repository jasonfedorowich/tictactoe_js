var array;
var size;
var n;
var turn;

function cleanUp(){
    var root = document.getElementById('root');
    root.removeChild(document.getElementById('grid'))

    appendNumberButtons();



}

function checkRows(){
    for(var i = 0; i < n; i++){
        var r = n * i;
        var t = array[r];
        if(t==0){
            continue;
        }
           
       
        var j = 1
        for(; j < n; j++){
            if(array[j + r] !== t){
                break;
            }
            


        }
        if(j == n){
            return t;
        }
            
    }

    return 0;


}

function checkCols(){

    for(var j = 0; j < n; j++){
        var t = array[j];
            if(t===0){
                continue;
            }
               
        
            var i = 1
            console.log()
            for(; i < n; i++){
                console.log(array[i * n + j]);
                if(array[i * n + j] !== t){
                    break;
                }
                


            }
            if(i == n){
                return t;
            }
                
        }

        return 0;


}

function checkDiags(){
    var t = array[0];
    var i = 0;
    while(i < n){
        if(t !== array[i + i * n] || array[i + i * n] == 0){
            break;
        }
        i++;

    }
    console.log('winner first');
    if(i == n)
        return t;
    i = n - 1;
    t = array[n * (n-1)];
    var j = 0;
    while(i >= 0){

        if( t!== array[j + i * n] || array[j + i * n] == 0){
            break;
        }
        i--;
        j++;

    }

    if(i < 0)
        return t;
    
    return 0;



}

function checkIfWinner(){
    var winner = checkRows();
    if(winner !== 0){
        winner = winner == 1 ? 'Xs' : 'Os'
        console.log('winner rows');
        alert('Winner of game is: ' + winner);
    

    }
    winner = checkCols();
    if(winner !== 0){
        winner = winner == 1 ? 'Xs' : 'Os'
        console.log('winner cols');
        alert('Winner of game is: ' + winner);

    }
    winner = checkDiags();
    if(winner !== 0){
        winner = winner == 1 ? 'Xs' : 'Os'
        console.log('winner diags');
        alert('Winner of game is: ' + winner);

    }

    if(winner !== 0){
        cleanUp();
    }




}

function gridItemClick(){
    var pos = new Number(this.id);
    if(array[pos] !== 0){
        return;
    }
    array[pos] = turn === 1 ? 1 : 2;
    if(turn === 1){
        document.getElementById(this.id).className = 'cross';

    }else{
        document.getElementById(this.id).className = 'circle'
    }
    checkIfWinner();
    console.log(this.id);
    turn = turn === 1 ? 2 : 1;

}

function initializeGrid(){
    var parent = document.getElementById('root');
    var grid = document.createElement('div');
    grid.id = 'grid';
    if(size===9){
        grid.className = 'grid-container1'
    }
    else if(size===81){
        grid.className = 'grid-container2'
    }else{
        grid.className = 'grid-container3'
    }
    
    for(var i = 0; i < size; i++){
        var ele = document.createElement('div');
        ele.onclick = gridItemClick;
        ele.id = new String(i);
        ele.className = 'grid-item'
        grid.appendChild(ele);

    }
    parent.appendChild(grid);


}

function onClickNumber(event){
    console.log(event);
    console.log(this.id);
    size = new Number(this.id);
    n = size;
    size = size * size;

    console.log(size);
    array = new Array(size);
    for(var i = 0; i < size; i++){
        array[i] = 0;
        

    }
    initializeGrid();
    console.log(array);
    root.removeChild(document.getElementById('3'))
    root.removeChild(document.getElementById('9'))
    root.removeChild(document.getElementById('18'))
    


}

function appendNumberButtons(){
    var node1 = document.createElement('button');
    node1.id = '3'
    node1.textContent = '3'
    node1.value = '3'
    node1.onclick = onClickNumber;

    var node2 = document.createElement('button');
    node2.id = '9'
    node2.textContent = '9'
    node2.value = '9'
    node2.onclick = onClickNumber;

    var node3 = document.createElement('button');
    node3.id = '18'
    node3.textContent = '18'
    node3.value = '18'
    node3.onclick = onClickNumber;
  
    root.appendChild(node1);
    root.appendChild(node2);
    root.appendChild(node3);

}

function onStartGame(){

    var root = document.getElementById('root');
    appendNumberButtons();
    root.removeChild(document.getElementById('start'))


}

