function chessBoard(sizeOfBoard){ // sizeOfBoard is a number that will be used as sizeOfBoard x sizeOfBoard, Example 8x8
    let output = " ";
    for(let n = 1; n < sizeOfBoard*sizeOfBoard; n++){
        if(output.length % (sizeOfBoard+1) == 0) output += "\n";
        if(output.length % 2 == 0) output += "#";
        else output += " ";
    }
    console.log(output)
}

chessBoard(8);
