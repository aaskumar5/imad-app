var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.Done){
            if(request.status === 200){
                var counter = request.responseText;
                names = JSON.porse(names);
                var list ='';
                for(var i=0;i<names.length;i++){
                list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innnerHTML = list;
            }
        }
    };
    request.open('GET','http://ashishkumarsahu2016.imad.hasura-app.io/counter',true);
    request.send(null);
   
};


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for(var i=0;i<names.length;i++){
    list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innnerHTML = list;
    
    var nameInput= document.getElementById('name');
var name = nameInput.value;

     request.open('GET','http://ashishkumarsahu2016.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};