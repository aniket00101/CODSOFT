let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';
buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if(b.target.innerText == '='){
            string = String(eval(string));
            inputbox.value = string;
        }else if(b.target.innerText == 'AC'){
            string = '';
            inputbox.value = string;
        }else if(b.target.innerText == 'DEL'){
            string = string.substring(0, string.length-1);
            inputbox.value = string;
        }else if(b.target.id=='plusminus'){
            string = String(-eval(string));
            inputbox.value = string;
        }else{
            string = string + b.target.innerText;
            inputbox.value = string;
        }
    })
})