(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["sa-IN"] = $.extend(true, {}, invariant, {
        name: "sa-IN",
        englishName: "Sanskrit (India)",
        nativeName: "संस्कृत (भारतम्)",
        language: "sa",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: {
                    names: ["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],
                    namesAbbr: ["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],
                    namesShort: ["र","स","म","ब","ग","श","श"]
                },
                months: {
                    names: ["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""],
                    namesAbbr: ["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""]
                },
                AM: ["पूर्वाह्न","पूर्वाह्न","पूर्वाह्न"],
                PM: ["अपराह्न","अपराह्न","अपराह्न"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy dddd",
                    f: "dd MMMM yyyy dddd HH:mm",
                    F: "dd MMMM yyyy dddd HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["sa-IN"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);