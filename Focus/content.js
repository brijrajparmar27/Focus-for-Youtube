console.log("welcome to youtube");
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    var Home = ()=>{

        console.log("home");
        document.querySelector("#primary").style.display = "none";
        document.querySelectorAll('[aria-label="Explore"]')[0].style.display = "none";

        document.querySelectorAll('[aria-label="YouTube apps"]')[0].style.display = "none";
        document.querySelectorAll('[aria-label="Notifications"]')[0].style.display = "none";
        document.querySelectorAll('[aria-label="Create"]')[0].style.display = "none";

    }

    var Player = ()=>{
        console.log("player");
        var xyz = document.querySelectorAll("#related");
        for(x of xyz){
            x.style.display = "none";
        }
        var xyz = document.querySelectorAll("#secondary");
        for(x of xyz){
            x.style.display = "none";
        }
        var xyz = document.querySelectorAll("#comments");
        for(x of xyz){
            x.style.display = "none";
        }
    }

    if (msg.text && (msg.text == 'changed')) {
        console.log('change recieved in content script');
        var currently = window.location.href;
        //console.log(currently);
        if(currently === "https://www.youtube.com/")
        {
            console.log("Home");
            Home();
        }
        else if(currently.includes("watch"))
        {
            console.log("Watch");
            Player();
        }
        else if(currently.includes("results"))
        {
            console.log("search page");
        }
    }
});