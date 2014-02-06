// Copyright: 2014 PMSI-AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
// Source: /src/objects/axis/methods/addOrderRule.js
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-addOrderRule
(function () {
    "use strict";
    dimple.axis.prototype.addOrderRule = function (ordering, desc) {
        this._orderRules.push({ ordering : ordering, desc : desc });
    };
}());