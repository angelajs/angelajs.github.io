$.getJSON("http://api.ipinfodb.com/v3/ip-country/?key=a7593aaff69055862efe426544a894d7efb53491f4e82e5f3a8f6d99ca30cd4b&format=json&callback=?", jData);


function jData(json) {
    alert("Value of ipAddress: " + json["ipAddress"] + json["countryCode"]);
}
