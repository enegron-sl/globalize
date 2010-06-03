(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["eu-ES"] = $.extend(true, {}, invariant, {
        name: "eu-ES",
        englishName: "Basque (Basque)",
        nativeName: "euskara (euskara)",
        language: "eu",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: {
                    names: ["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],
                    namesAbbr: ["ig.","al.","as.","az.","og.","or.","lr."],
                    namesShort: ["ig","al","as","az","og","or","lr"]
                },
                months: {
                    names: ["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua",""],
                    namesAbbr: ["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe.",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dddd, yyyy.'eko' MMMM'k 'd",
                    T: "H:mm:ss",
                    f: "dddd, yyyy.'eko' MMMM'k 'd HH:mm",
                    F: "dddd, yyyy.'eko' MMMM'k 'd H:mm:ss",
                    Y: "yyyy.'eko' MMMM"
                }
            })
        }
    }, cultures["eu-ES"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);