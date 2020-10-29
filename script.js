function usrmsg(input){
    var node1 = document.createElement("p");
    node1.classList.add("user_msg");
    var textnode1 = document.createTextNode(input);
    node1.appendChild(textnode1);
    document.getElementsByClassName("Chat")[0].appendChild(node1);
}
function bot_msg(textnode){
    var node = document.createElement("p");
    node.classList.add("bot_msg");
    node.appendChild(textnode);
    document.getElementsByClassName("Chat")[0].appendChild(node);
}

function input(){
    var input= document.getElementsByClassName("newcls")[0].value;
    document.getElementsByClassName("newcls")[0].value="";
    return input;
    
}

function strt(op){
    name=op;
  var textnode = document.createTextNode('hi '+op+' what contacts  do you want in bhimavaram..?  \n 1.emergency number \n 2.other numbers\n 3.Quit ');
  bot_msg(textnode);
}
function talk(){

    var op=input()
    var id=document.getElementsByClassName("newcls")[0].id;
    usrmsg(op);
    if(id=="User_box"){
        strt(op);
        document.getElementsByClassName("newcls")[0].id="User_box1";
    }
    else if(id=="User_box2"){
    if(op=='1'){
    //code
        var output=document.createTextNode(name+' these Are some pharmacy  Numbers: \n "Apolo pharmacy":+918814286610 ,"med PLus":+918814286650,"BAlaji medicals":+91881148610s')
        bot_msg(output);
    }
    else if(op=='2'){
        var output=document.createTextNode(name+' these Are some Hospital Numbers: \n "PHC":+91881456245,"multispeciality hospital" :+9183535632200,"orthopedic hospital":+913567669225')
        bot_msg(output);
    }
    else if(op=='3'){
        var output=document.createTextNode(name+' these Are some Hotels Numbers:"Suprabath":+91882624583,"Chandrika":+918816254947,"sitayya grand":+9188164542578,"Ananda Inn":+918816545514')
        bot_msg(output);
    }
    else if(op=='4'){
        var output=document.createTextNode(name+' these Are some Groceries stores Numbers:"Reliance fresh mart":+9171882128708,"Spencers":+917548481100,"More":+9188456494104,"thatawarti":+91534779657')
        bot_msg(output);
    }
    else if(op=='5'){
        var output=document.createTextNode(name+' these Are some Bakeries Numbers:"Bombay sweets and Bakeries":+918816454550,"Sri ramu":+9188162251548,"Hotlines":+918816455482,"Chocodew":+918821664485')
        bot_msg(output);
    }
    else if(op=='6'){
        var output=document.createTextNode(name+' these Are some Electricians Numbers:"Ram":+918814656108,"venkat":+91882266100,"kondal rao":+916487846496')
        bot_msg(output);
    }
    else if(op=='7'){
        var output=document.createTextNode(name+' these Are some Maids Numbers:"Lakshmi":+91848783854,"Pavani":+9174584644,"fathima":+91487844825,"Devi":+917445416484,"savitri":+9178548973348')
        bot_msg(output);
    }
    else if(op=='8'){
        var output=document.createTextNode(name+' these Are some Plumbers Numbers:"ramesh":+91874569258,"suresh":+918878497946,"gopal":+918784993344,"trivikram":+9187854796248,"edukondalu":+9187841484353')
        bot_msg(output);
    }
    else if(op=='9'){
        var output=document.createTextNode(name+' these Are some cable service  Numbers:"Tata sky":+914477745845,"VCV":+9187846499,"BCN":+917866796104,"Airtel":+917849449794')
        bot_msg(output);
    }
    else if(op=='10'){
        var output=document.createTextNode(name+' these Are Internet service provider Numbers:"Bsnl":+91884557547,"Apple fibernet":+9188144548544,"Excell":+918814254100,"JIO fibernet":+918826488104')
        bot_msg(output);
    }
    document.getElementsByClassName("newcls")[0].id="User_box1";
    strt(name)
    }
    else{
        if(op=='1'){
            var output=document.createTextNode(name+' emergency numbers are\n Ambulance:108, Police:100, Fire:104');
            bot_msg(output);
            strt(name);
            }
        else if(op=='2'){
            var output=document.createTextNode(name+" Do you Want..? \n 1 .Pharmacy numbers \n 2 .Hospitals \n 3 .hotels numbers \n 4 .groceries \n 5 .Bakeries \n 6 .Electricians \n 7 .Maid \n 8 .Plumbers \n 9 .Cable network \n 10 .Internet service provider \n ----------------\n Please select an option...?:")
            bot_msg(output);
             document.getElementsByClassName("newcls")[0].id="User_box2";
            }
        else if(op=='3'){document.getElementsByClassName("newcls")[0].style.display="none";
                var textnode=document.createTextNode("ok "+name+" bye:)")
                bot_msg(textnode);
        }
        
        else
        {
            var output=document.createTextNode(name+" sorry didnt understand please enter respective  number before the option given");
            bot_msg(output);
            strt(name);
        }
        
    }
    
        
    scrollwin();
}
function scrollwin() {
  document.getElementsByClassName("Chat")[0].scrollBy(0, 480);
}