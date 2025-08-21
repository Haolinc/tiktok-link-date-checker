function processUrl(){
    const url = document.getElementById('link').value
    const text = 'share_time='
    const index = url.indexOf(text)
    const arr = [];

    for(var i = index + text.length; i < url.length; i++){
        const c = url.charAt(i);
        if (c >= '0' && c <= '9')
            arr.push(c)
        else
            break
    }
    const date = new Date(Number(arr.join('')))
    if (date.getTime() == 0){
        document.getElementById("date").textContent = "Invalid Link"
    }
    else{
        document.getElementById("date").textContent = date.toString()
    }
    
}