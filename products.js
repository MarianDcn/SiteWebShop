const products = [
    {
        id: 1,
        name: "Whey Protein Isolate 1Kg",
        category: "Proteine",
        price:129,
        description: "True Whey este un concentrat proteic din zer...",
        image: "https://www.suplimente-vitabolic.ro/public/data_files/product-images/image-23-4598-368x368.jpg",
        flavors: ["Vanilie", "Căpșuni", "Ciocolată"],
        rating: 4,
    },
    {
        id: 2,
        name: "Vitamina C 1000 mg/60 caps",
        category: "Vitamine",
        price: 32.95,
        description: "Vitamina C 1000 mg ajută la menținerea funcționării...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fv%2Fi%2Fvitaminc_30_1.jpg&w=828&q=75",
    },
    {
        id: 3,
        name: "100% Whey Gold Standard",
        category: "Proteine",
        price: 160,
        description: "Gold Standard 100% Proteine din zer conțin o combinație...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fe%2Fu%2Feu_gsw_2lb_drc_6063135_fr.png&w=1920&q=75",
        flavors: ["Caramel", "Trufe"],
    },
    {
        id: 4,
        name: "Creatină Monohidrată 100%",
        category: "Creatina",
        price: 89.9,
        description: "Creatina monohidrată 100% este deosebit de populară...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fc%2Fr%2Fcreatine_monohydrate_unflavoured_500_g_gymbeam_2_.png&w=1920&q=75",
    },
    {
        id: 5,
        name: "Tricou Basic Black",
        category: "Haine",
        price: 49.9,
        description: "Tricoul Basic Black exprimă perfect determinarea...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2F1%2F-%2F1-basic-black-tee.jpg&w=1920&q=75",
    },
    {
        id: 6,
        name: "Yum Yum Whey - BeastPink",
        category: "Proteine",
        price: 110,
        description: "Yum Yum Whey este un concentrat unic de proteine...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fy%2Fu%2Fyum_yum_white_chocolate_coconut_1000_g_beastpink_wb.png&w=1920&q=75",
    },

    {   id: 7,
        name: "Pantalon scurt cu buzunare",
        category: "Haine",
        price: 46,
        description: "Daca esti in cautarea uni șort confortabil care să fie adecvat pentru sport, incearcă acești pantaloni scurți excelenți pentru bărbați, " +
            "care dispun de o croială lejeră.!",
        image: "https://www.suplimente-vitabolic.ro/public/data_files/product-images/image-288-2048-368x368.jpg"},

    {   id: 8,
        name: "Thor Fuel + Vitargo",
        category: "Stimulente",
        price: 84.94,
        description: "Thor Fuel + Vitargo este un pre-antrenament complet pentru oricine dorește să " +
            "aibă grijă la maximum de performanța sa. Conține substanțe atent selecționate" +
            "asociate cu performanța sportivă și alimentarea cu sânge a mușchilor. Formula" +
            "include, de asemenea, cofeină, unul dintre cei mai cunoscuți stimulenți, și" +
            "carbohidratul brevetat Vitargo, care servește ca sursă de energie." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Ft%2Fh%2Fthor_vitargo_watermelon_600_g_gymbeam_1.png&w=828&q=75"},

    {   id: 9,
        name: "Serious Mass - Optimum Nutrition",
        category: "Gainere",
        price: 177.95,
        description: "Serious Mass este un gainer de calitate pentru dezvoltarea masei musculare, " +
            "volumului şi a forţei.  Fiecare doză de Serious Mass conţine mai mult de 1260 de" +
            "calorii și mai mult de 250 g de carbohidraţi complecşi și 50 g de proteine de" +
            "calitate – concentrat proteic din zer, cazeinat de calciu şi ovalbumină. Produsul" +
            "conţine şi glutamină, creatină, inositol, plus un complex de 25 de vitamine şi" +
            "minerale." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fu%2Fn%2Funtitled_design_-_2020-07-15t113726.125.png&w=828&q=75"},

    {   id: 10,
        name: "Omega 3",
        category: "Vitamine",
        price: 41.95,
        description: "Omega-3, include acidul eicosapentaenoic (EPA) și acidul docosahexaenoic" +
            "(DHA), sunt acizi grași benefici care se găsesc în uleiul de pește. Aceștia contribuie" +
            "la buna funcționare a inimii, în timp ce DHA însuși contribuie la menținerea unei" +
            "vederi bune și la buna funcționare a creierului. Acizii grași Omega-3 sunt, prin" +
            "urmare, ideali pentru îngrijirea sănătății." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fo%2Fm%2Fomega_3_240_saftgels_gymbeam_2.png&w=828&q=75"},

    {   id: 11,
        name: "Gainer Giant Mega Mass 4000",
        category: "Gainer",
        price: 299.95,
        description: "Giant Mega Mass 4000 este un gainer de calitate pentru construirea masei" +
            "musculare, a forței și creșterii în greutate. Aceasta va ajuta să obțineți" +
            "performanțe prin antrenamente de maximă intensitate, datorită combinației de" +
            "creatină și aportul mare de glucide. Are un conținut ridicat de aminoacizi BCAA," +
            "fiind îmbogățit cu vitamine și minerale." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fw%2Fe%2Fweider_32545_mm4000_3kg_schoko_xii-mmxxii-1_0074_vs.jpg&w=828&q=75"},

    {   id: 12,
        name: "Blood & Guts Pre-Workout",
        category: "Stimulente",
        price: 127.54,
        description: "Pre-workoutul nostru Blood & Guts este numit după" +
            "metoda de antrenament al lui Dorian și este un produs" +
            "care vă ajută să vă intrați în mână și să vă depășiți" +
            "limitele la antrenamente!" ,
        image: "https://dynutrition.ro/cdn/shop/files/Photo_01_08c6cb1a-ec71-4e65-8422-1389c862660b_1800x1800.png?v=1731495594"},

    {   id: 13,
        name: "Vitamina E",
        category: "Vitamine",
        price: 69.69,
        description: "Vitamina E (Tocoferol) este un supliment alimentar care contribuie la protejarea" +
            "celulelor împotriva stresului oxidativ. Acest tip de stres este provocat" +
            "de dezechilibrul dintre radicalii liberi și antioxidanții din organism, care sunt o" +
            "parte naturală a acestuia. Vitamina E poate ajuta la reducerea efectelor acestui" +
            "dezechilibru. În plus, acest supliment este ușor de folosit și va fi apreciat de toți cei" +
            "care își doresc să-și susțină mai bine sănătatea și vitalitatea." ,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQR5Tm_jVOhXLB7DhrqLqzmB9NNc5DXZ6qlF9H32T2i_4mOFd1l"},
    {
        id: 14,
        name: "Creatine Monohydrate - Amix",
        category: "Creatina",
        price: 69.9,
        description: "Creatine Monohydrate este o creatină monohidrată ultra-micronizată, ceea ce îi garantează puritatea și absorbția excelentă. Ajută la formarea masei musculare" +
          " și contribuie la regenerarea rapidă a mușchilor. Este eficientă deoarece oferă mai multă energie, îmbunătățește performanțele fizice și crește forța fizică.",
        image: "https://gymbeam.ro/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/a/x/ax_creatine-monohydrate_500g.png",
    },
];