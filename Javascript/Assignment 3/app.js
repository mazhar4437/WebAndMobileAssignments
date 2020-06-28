var result  = document.getElementById("Calinp");

function btnClick(inp)
{
    console.log(inp);
   
    result.value += inp;
    console.log(result.value);

}

function btnClear()
{
   
    result.value = "";
}

function btnResult()
{
    
    
  
    result.value = eval(result.value);
    console.log(result.value);

}