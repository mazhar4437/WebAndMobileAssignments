var result  = document.getElementById("Calinp");

function btnClick(inp)
{
    //console.log(inp);
    if((inp == '+' || inp == '-' || inp == '/' || inp == '*') && (result.value == ""))
    {

    }
    else if(inp == '+' || inp == '-' || inp == '/' || inp == '*')
   {
       console.log(result.value.slice(-1));
       if((result.value.slice(-1) == "+") || (result.value.slice(-1) == "-") || (result.value.slice(-1) == "*") || (result.value.slice(-1) == "/"))
       {
           var Userinp = result.value.slice(-1);
           if(inp != Userinp)  
           {
             
    
            console.log('Before repeat' , result.value);     
              result.value = result.value.slice(0,-1);
            
        
             
               result.value += inp;

              console.log('After repeat', result.value);   
           }
        
       }
       else
       {

        result.value += inp;
        console.log(result.value);   
       }
     
   }
  
   else
   {
 
   result.value += inp;
   console.log(result.value);   

}
}

function btnClearAll()
{
   
    result.value = "";
}
function btnClear()
{
   
    result.value = result.value.slice(0,-1);

}
function btnResult()
{
    
 
    result.value = eval(result.value);
    console.log(result.value);

}

function btnsqr()
{
result.value = result.value * result.value;
}


function btnsqrt()
{
   result.value = Math.sqrt(result.value);
}