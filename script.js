function cascade() {
  //alert("button");
  
 var arrayOfElements=document.getElementsByClassName('notCascaded');
 var lengthOfArray=arrayOfElements.length;

  
 if(lengthOfArray==0){
    //alert("entered");
    
    var arrayOfElements=document.getElementsByClassName('cascaded');
    var lengthOfArray=arrayOfElements.length;
    for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[0].className='notCascaded';
        }
    document.getElementById('cas').innerHTML="-";
    }
  // if  the are not cascaded
   else{
   // alert("entered9");
    
    for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[0].className='cascaded';
      }
     document.getElementById('cas').innerHTML="+";
   }
 }

