var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'basketball.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});


var basketIcon = new LeafIcon({iconUrl: 'basketball.png'})



L.icon = function (options) {
    return new L.Icon(options);
};
