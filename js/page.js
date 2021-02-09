console.log("你发现这里了！🎉")
function getResult() {
    friendcode = document.getElementById("friendcode").value;
    nickname = document.getElementById("nickname").value;
    console.log("Value: " + nickname + ":" + friendcode)
    document.getElementById('friendcardimg').src = "https://ns.8ot.net/api/card.png?nickname=" + nickname + "&friendcode=" + friendcode
    console.log("RequestLink: https://ns.8ot.net/api/card.png?nickname=" + nickname + "&friendcode=" + friendcode)
    document.getElementById("imgCard").style.display="";
}