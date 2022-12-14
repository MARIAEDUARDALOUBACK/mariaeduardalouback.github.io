function PROCURAR() 
{
    var vermelho = document.getElementById("vermelho").value;
    var rosa = "É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.";
    rosa = rosa.replaceAll(',','').replaceAll('.','');
    var r = rosa.split(" ");
    var l= document.getElementById("l");
    l.innerHTML = "";   
    for(let i=0; i<r.length; i++)
    {
        if(r[i] == vermelho)
        {
            l.innerHTML = l.innerHTML +"<mark style='background-color:blue; color:black'>"+ r[i] +"</mark>"+ " "    
        }
        else{
            l.innerHTML = l.innerHTML + r[i] + " "
        }
    }
}