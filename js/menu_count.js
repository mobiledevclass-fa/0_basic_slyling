function addToTotal(price) {
    var myprice = document.getElementById("myprice").innerText;
    var totalcount = document.getElementById("totalcount").innerText;
    myprice = parseInt(myprice);
    totalcount = parseInt(totalcount) + 1;
    myprice = myprice + price;
    document.getElementById("myprice").innerHTML = myprice;
    document.getElementById("totalcount").innerHTML = totalcount;
}