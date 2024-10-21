window.onload = function () {
    var ms=0;
    var secs=0;
    var append_secs = document.getElementById("secs");
    var append_ms = document.getElementById("ms");
    var button_start = document.getElementById("Start-btn");
    var button_stop = document.getElementById("Stop-btn");
    var button_rst = document.getElementById("Reset-btn ")
    var interval
    button_start.onclick = function (){
        clearInterval(interval)
        setInterval(main_timer(), 1)
    }
    button_stop.onclick = function (){
        clearInterval(interval)
    }
    button_rst.onclick = function (){
        clearInterval(interval)
        ms = "0";
        secs = "0";
        append_ms.innerHTML = ms;
        append_secs.innerHTML = secs;

    }

    function main_timer(){
        ms++
        append_ms.innerHTML = "0" + ms
        if(ms>99){
            secs++
            ms=0
            append_secs.innerHTML = secs;
            append_ms.innerHTML = ms;
        }

    }
}