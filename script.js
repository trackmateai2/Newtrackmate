

function refresh(){
    
        cod=document.getElementById("value1").innerHTML;
        cod2=document.getElementById("value2").innerHTML;
        alert(cod+","+cod2);
        
        var marker = L.marker([cod, cod2]).addTo(map);
        marker.bindPopup("<font color=#000000><b>My Location </b> <br/> <font size=0.5px color=grey>  Accuracy 97%... ").openPopup();
     
        
}











