/*--------------------------------------main varaiables--------------------------------------*/
var input = document.getElementById('input');
var send = document.getElementById('send');
var answer = 0;
/*--------------------------------------main varaiables--------------------------------------*/
/**================================ onClick function ================================**/
send.onclick = function(){
    var inputValue = document.getElementById('input').value;
    var input = document.getElementById('input');
    if(inputValue == false)
    {
        return false;
    }
    else
    {
        chat();
        answer++;
    }
    input.value = '';
}
document.addEventListener('keydown', function(e){
if (e.keyCode == 13)
    {
        send.onclick();
    }
});
/**================================ onClick function ================================**/
/**================================ mainChat function ================================**/
function chat()
{
    // input value variable
    var inputValue = document.getElementById('input').value;
    // chat main div body (center div)
    var centerBody = document.getElementById('body');
    /*------------------------------------ create the messages ------------------------------------*/
    if(answer == 0)
    {
        // create left div message
        var leftDiv = document.createElement('div');
        leftDiv.classList.add('p-3');
        /*=======create h5 element=======*/
        setTimeout(() => {
            var name  = document.createElement('h5');
            leftDiv.appendChild(name);
            name.innerHTML = 'Townsend Seary';
        }, 500);
         /*=======create h5 element=======*/
         /*=======create p(message)element=======*/
        setTimeout(() => {
            var message = document.createElement('p');
            leftDiv.appendChild(message);
            message.innerHTML = inputValue;
        }, 500);
        /*=======create p(message)element=======*/
        /*=======create span element=======*/
        setTimeout(() => {
            var span = document.createElement('span');
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            span.innerHTML = h + ': ' + m + ': ' + s;
            var icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-check-circle');
            span.appendChild(icon);
            leftDiv.appendChild(span);
        }, 500);
        /*=======create span element=======*/
        // create right div Bot message
        setTimeout(() => {
            /*================ main right div message ================*/
            var RightDiv = document.createElement('div');
            RightDiv.classList.add('p-3');
            RightDiv.classList.add('right');
            /*================ main right div message ================*/
            /*================ create h5 element ================*/
            setTimeout(() => {
                var name  = document.createElement('h5');
                RightDiv.appendChild(name);
                name.innerHTML = 'admin';
            }, 700);
            /*================ create h5 element ================*/
            /*================ create p(Bot Message) element ================*/
            setTimeout(() => {
                var messageBot = document.createElement('p');
                messageBot.setAttribute('dir' , 'ltr');
                RightDiv.appendChild(messageBot);
                messageBot.innerHTML = '“Hello , thank you for sending the Provide Support , How may I help you !”';
                var messagePrint = messageBot.innerHTML;
                /*===================== main message left box =================*/
                setTimeout(() => {
                    // create main scroll div..
                    var scroll = document.getElementById('scroll');
                    // create mian part box
                    var mainPart = document.createElement('div');
                    mainPart.classList.add('d-flex' , 'justify-content-between' , 'p-4' , 'main-part' , 'active');
                    // create container div..
                    var rightDivBox = document.createElement('div');
                    rightDivBox.classList.add ('d-flex' , 'justify-content-between');
                    // create imgdiv.. 
                    var imgDiv = document.createElement('div');
                    imgDiv.classList.add ('img-part');
                    // create img element..
                    var img = document.createElement('img');
                    img.src = 'img/man_avatar1.jpg';
                    img.setAttribute('alt' , '');
                    img.classList.add('img');
                    // create right content div..
                    var contentPart = document.createElement('div');
                    contentPart.classList.add('content-part', 'pr-4');
                    // create constant p ..
                    var admin = document.createElement('p');
                    admin.innerHTML = 'admin';
                    // create bot message p..
                    var print = document.createElement('p');
                    print.setAttribute('id' , 'print');
                    // BotMessage = p..
                    print.innerHTML = messagePrint;
                    // BotMessage = p..
                    //create left div ..
                    var leftOne = document.createElement('div');
                    leftOne.classList.add('left-content-part');
                    // create notify p ..
                    var number = document.createElement('p');
                    number.innerHTML = '1';
                    // create time p ..
                    var time = document.createElement('p');
                    time.setAttribute('dir' , 'ltr');
                    var date = new Date();
                    var h = date.getHours();
                    var m = date.getMinutes();
                    time.innerHTML = h + ': ' + m;
                    // append element in each other
                    leftOne.appendChild(number);
                    leftOne.appendChild(time);
                    contentPart.appendChild(admin);
                    contentPart.appendChild(print);
                    imgDiv.appendChild(img);
                    rightDivBox.appendChild(imgDiv);
                    rightDivBox.appendChild(contentPart);
                    mainPart.appendChild(rightDivBox);
                    mainPart.appendChild(leftOne);
                    scroll.appendChild(mainPart);
                }, 500);
                /*===================== main message left box =================*/
            }, 700);
             /*================ create p(Bot Message) element ================*/
             /*================ create span element ================*/
            setTimeout(() => {
                var span = document.createElement('span');
                var icon = document.createElement('i');
                icon.style = 'float: right ; margin-top: 5px;'
                icon.classList.add('fas');
                icon.classList.add('fa-check-circle');
                var date = new Date();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                span.innerHTML = s + ': ' + m + ': ' + h;
                RightDiv.appendChild(span);
                span.appendChild(icon);
            }, 700);
            /*================ create span element ================*/
            centerBody.appendChild(RightDiv);
        }, 700);
        centerBody.appendChild(leftDiv);
    }
    /*=================================create another message after Bot Message=================================*/
    else
    {
        var leftDiv = document.createElement('div');
        leftDiv.classList.add('p-3');
        setTimeout(() => {
            var name  = document.createElement('h5');
            leftDiv.appendChild(name);
            name.innerHTML = 'Townsend Seary';
        }, 1000);
        setTimeout(() => {
            var anotherMessage = document.createElement('p');
            leftDiv.appendChild(anotherMessage);
            anotherMessage.innerHTML = inputValue;
        }, 1000);
        setTimeout(() => {
            var span = document.createElement('span');
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            span.innerHTML = h + ': ' + m + ': ' + s;
            var icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-check-circle');
            span.appendChild(icon);
            leftDiv.appendChild(span);
        }, 2000);
        centerBody.appendChild(leftDiv);
    }
     /*=================================create another message after Bot Message=================================*/
    /*------------------------------------ create the messages ------------------------------------*/
}
/**================================ mainChat function ================================**/