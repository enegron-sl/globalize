(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["km-KH"] = $.extend(true, {}, invariant, {
        name: "km-KH",
        englishName: "Khmer (Cambodia)",
        nativeName: "ខ្មែរ (កម្ពុជា)",
        language: "km",
        numberFormat: {
            pattern: ["- n"],
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["-n$","n$"],
                symbol: "៛"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: {
                    names: ["ថ្ងៃអាទិត្យ","ថ្ងៃច័ន្ទ","ថ្ងៃអង្គារ","ថ្ងៃពុធ","ថ្ងៃព្រហស្បតិ៍","ថ្ងៃសុក្រ","ថ្ងៃសៅរ៍"],
                    namesAbbr: ["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."],
                    namesShort: ["អា","ច","អ","ពុ","ព្","សុ","ស"]
                },
                months: {
                    names: ["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",""],
                    namesAbbr: ["១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",""]
                },
                AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
                PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
                eras: [{"name":"មុនគ.ស.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    t: "H:mm tt",
                    f: "d MMMM yyyy H:mm tt",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "'ថ្ងៃទី' dd 'ខែ' MM",
                    Y: "'ខែ' MM 'ឆ្នាំ' yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                days: {
                    names: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
                    namesAbbr: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
                    namesShort: ["أ","ا","ث","أ","خ","ج","س"]
                },
                months: {
                    names: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
                    namesAbbr: ["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]
                },
                AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
                PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm tt",
                    f: "dddd, MMMM dd, yyyy H:mm tt",
                    F: "dddd, MMMM dd, yyyy HH:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["km-KH"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);