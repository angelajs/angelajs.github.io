$.getJSON("//api.ipinfodb.com/v3/ip-country/?key=a7593aaff69055862efe426544a894d7efb53491f4e82e5f3a8f6d99ca30cd4b&format=json&callback=?", location);

var approved = [
    //Country code from: https://www.iso.org/obp/ui/#search
    //EEA
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NI', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 
    //NON EEA
    'AD', 'AR', 'CA', 'FO', 'GG', 'IM', 'IL', 'JE', 'NZ', 'CH', 'UY'
];

function location (json) {
    var currentLocation = $.inArray (json["countryCode"], approved);
    if (currentLocation > -1){
        alert ("IN.\nLocation: " + json["countryCode"]);
    } else {
        alert ("OUT.\nLocation: " + json["countryCode"]);
    }
}
