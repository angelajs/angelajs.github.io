var xhr = new XMLHttpRequest();
xhr.open('GET', "//api.ipinfodb.com/v3/ip-country/?key=<f31438f44d02b1cb4c9318bbe967419ca9ba34b9150499b63ab47d51849fd4be>&format=json", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e){
    if (xhr.readyState == 4 && xhr.status == 200){
        var response = JSON.parser(xhr.responseText);
        alert(response.ip);
    }
}
