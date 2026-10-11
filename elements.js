
const elementData = [
    {
        number: 1, symbol: "H", name: "Hidrogen",
        mass: 1.008, category: "nonmetal", group: 1, period: 1,
        electronConfig: "1", state: "Gas",
        meltingPoint: -259.16, boilingPoint: -252.87,
        description: "Unsur paling ringan dan unsur paling melimpah di alam semesta.",
        uses: "Digunakan untuk membuat amonia, dalam industri kimia, dan sebagai bahan bakar hidrogen."
    },
    {
        number: 2, symbol: "He", name: "Helium",
        mass: 4.0026, category: "noble-gas", group: 18, period: 1,
        electronConfig: "2", state: "Gas",
        meltingPoint: null, boilingPoint: -268.93,
        description: "Gas mulia yang sangat stabil dan memiliki massa jenis rendah.",
        uses: "Digunakan untuk mengisi balon, mendinginkan peralatan MRI, dan penelitian ilmiah."
    },
    {
        number: 3, symbol: "Li", name: "Litium",
        mass: 6.94, category: "alkali", group: 1, period: 2,
        electronConfig: "2, 1", state: "Padat",
        meltingPoint: 180.54, boilingPoint: 1342,
        description: "Logam alkali yang ringan dan sangat reaktif.",
        uses: "Bahan utama dalam banyak baterai isi ulang dan paduan logam tertentu."
    },
    {
        number: 4, symbol: "Be", name: "Berilium",
        mass: 9.0122, category: "alkaline-earth", group: 2, period: 2,
        electronConfig: "2, 2", state: "Padat",
        meltingPoint: 1287, boilingPoint: 2469,
        description: "Logam ringan, kaku, dan memiliki titik leleh tinggi.",
        uses: "Digunakan pada komponen dirgantara dan instrumen ilmiah khusus."
    },
    {
        number: 5, symbol: "B", name: "Boron",
        mass: 10.81, category: "metalloid", group: 13, period: 2,
        electronConfig: "2, 3", state: "Padat",
        meltingPoint: 2076, boilingPoint: 3927,
        description: "Metaloid yang memiliki sifat di antara logam dan nonlogam.",
        uses: "Digunakan dalam kaca tahan panas, keramik, dan senyawa borat."
    },
    {
        number: 6, symbol: "C", name: "Karbon",
        mass: 12.011, category: "nonmetal", group: 14, period: 2,
        electronConfig: "2, 4", state: "Padat",
        meltingPoint: 3550, boilingPoint: 4827,
        description: "Unsur penting penyusun senyawa organik dan makhluk hidup.",
        uses: "Digunakan dalam grafit pensil, arang aktif, dan berbagai material karbon."
    },
    {
        number: 7, symbol: "N", name: "Nitrogen",
        mass: 14.007, category: "nonmetal", group: 15, period: 2,
        electronConfig: "2, 5", state: "Gas",
        meltingPoint: -210.00, boilingPoint: -195.79,
        description: "Gas yang membentuk sekitar 78% atmosfer Bumi.",
        uses: "Digunakan dalam pembuatan amonia, pupuk, dan pendinginan dengan nitrogen cair."
    },
    {
        number: 8, symbol: "O", name: "Oksigen",
        mass: 15.999, category: "nonmetal", group: 16, period: 2,
        electronConfig: "2, 6", state: "Gas",
        meltingPoint: -218.79, boilingPoint: -182.96,
        description: "Unsur yang penting untuk respirasi aerob dan mendukung pembakaran.",
        uses: "Digunakan dalam terapi oksigen sesuai kebutuhan medis dan proses industri."
    },
    {
        number: 9, symbol: "F", name: "Fluorin",
        mass: 18.998, category: "halogen", group: 17, period: 2,
        electronConfig: "2, 7", state: "Gas",
        meltingPoint: -219.67, boilingPoint: -188.11,
        description: "Halogen yang sangat reaktif dan sangat elektronegatif.",
        uses: "Senyawa fluorida digunakan dalam perawatan gigi dan berbagai proses industri."
    },
    {
        number: 10, symbol: "Ne", name: "Neon",
        mass: 20.180, category: "noble-gas", group: 18, period: 2,
        electronConfig: "2, 8", state: "Gas",
        meltingPoint: -248.59, boilingPoint: -246.08,
        description: "Gas mulia yang menghasilkan cahaya khas ketika dialiri listrik.",
        uses: "Digunakan dalam lampu reklame dan indikator listrik tertentu."
    },
    {
        number: 11, symbol: "Na", name: "Natrium",
        mass: 22.990, category: "alkali", group: 1, period: 3,
        electronConfig: "2, 8, 1", state: "Padat",
        meltingPoint: 97.79, boilingPoint: 883,
        description: "Logam alkali lunak yang sangat reaktif terhadap air.",
        uses: "Senyawanya digunakan dalam pembuatan sabun, bahan kimia, dan lampu natrium."
    },
    {
        number: 12, symbol: "Mg", name: "Magnesium",
        mass: 24.305, category: "alkaline-earth", group: 2, period: 3,
        electronConfig: "2, 8, 2", state: "Padat",
        meltingPoint: 650, boilingPoint: 1091,
        description: "Logam ringan yang dapat terbakar dengan cahaya putih terang.",
        uses: "Digunakan dalam paduan logam ringan, suar khusus, dan kembang api."
    },
    {
        number: 13, symbol: "Al", name: "Aluminium",
        mass: 26.982, category: "post-transition-metal", group: 13, period: 3,
        electronConfig: "2, 8, 3", state: "Padat",
        meltingPoint: 660.32, boilingPoint: 2519,
        description: "Logam ringan yang mudah dibentuk dan tahan korosi.",
        uses: "Digunakan untuk kaleng minuman, pesawat, kabel, dan peralatan dapur."
    },
    {
        number: 14, symbol: "Si", name: "Silikon",
        mass: 28.085, category: "metalloid", group: 14, period: 3,
        electronConfig: "2, 8, 4", state: "Padat",
        meltingPoint: 1414, boilingPoint: 3265,
        description: "Metaloid dengan sifat semikonduktor.",
        uses: "Digunakan dalam cip komputer, panel surya, dan industri elektronik."
    },
    {
        number: 15, symbol: "P", name: "Fosfor",
        mass: 30.974, category: "nonmetal", group: 15, period: 3,
        electronConfig: "2, 8, 5", state: "Padat",
        meltingPoint: 44.1, boilingPoint: 280.5,
        description: "Nonlogam yang memiliki beberapa bentuk, termasuk fosfor putih dan merah.",
        uses: "Senyawa fosfat digunakan dalam pupuk; fosfor merah digunakan pada permukaan pemantik korek api."
    },
    {
        number: 16, symbol: "S", name: "Belerang",
        mass: 32.06, category: "nonmetal", group: 16, period: 3,
        electronConfig: "2, 8, 6", state: "Padat",
        meltingPoint: 115.21, boilingPoint: 444.6,
        description: "Nonlogam berwarna kuning yang ditemukan dalam mineral dan senyawa biologis.",
        uses: "Digunakan dalam pembuatan asam sulfat, pupuk, dan pengolahan karet."
    },
    {
        number: 17, symbol: "Cl", name: "Klorin",
        mass: 35.45, category: "halogen", group: 17, period: 3,
        electronConfig: "2, 8, 7", state: "Gas",
        meltingPoint: -101.5, boilingPoint: -34.04,
        description: "Gas halogen reaktif yang bersifat toksik.",
        uses: "Senyawanya digunakan untuk disinfeksi air dan pembuatan PVC."
    },
    {
        number: 18, symbol: "Ar", name: "Argon",
        mass: 39.948, category: "noble-gas", group: 18, period: 3,
        electronConfig: "2, 8, 8", state: "Gas",
        meltingPoint: -189.34, boilingPoint: -185.85,
        description: "Gas mulia yang relatif tidak reaktif dalam kondisi biasa.",
        uses: "Digunakan sebagai gas pelindung dalam pengelasan dan pengisian lampu tertentu."
    },
    {
        number: 19, symbol: "K", name: "Kalium",
        mass: 39.098, category: "alkali", group: 1, period: 4,
        electronConfig: "2, 8, 8, 1", state: "Padat",
        meltingPoint: 63.38, boilingPoint: 759,
        description: "Logam alkali yang sangat reaktif; ion kalium juga penting bagi fungsi tubuh.",
        uses: "Senyawa kalium digunakan dalam pupuk dan berbagai proses industri."
    },
    {
        number: 20, symbol: "Ca", name: "Kalsium",
        mass: 40.078, category: "alkaline-earth", group: 2, period: 4,
        electronConfig: "2, 8, 8, 2", state: "Padat",
        meltingPoint: 842, boilingPoint: 1484,
        description: "Logam alkali tanah; ion kalsium penting untuk tulang, gigi, dan fungsi otot.",
        uses: "Senyawanya digunakan dalam semen, kapur, dan bahan bangunan."
    },
    {
        number: 21, symbol: "Sc", name: "Skandium",
        mass: 44.956, category: "transition-metal", group: 3, period: 4,
        electronConfig: "2, 8, 9, 2", state: "Padat",
        meltingPoint: 1541, boilingPoint: 2836,
        description: "Logam transisi ringan berwarna keperakan.",
        uses: "Digunakan dalam paduan aluminium untuk peralatan olahraga dan komponen khusus."
    },
    {
        number: 22, symbol: "Ti", name: "Titanium",
        mass: 47.867, category: "transition-metal", group: 4, period: 4,
        electronConfig: "2, 8, 10, 2", state: "Padat",
        meltingPoint: 1668, boilingPoint: 3287,
        description: "Logam yang kuat, ringan, dan tahan korosi.",
        uses: "Digunakan untuk implan medis, pesawat, dan peralatan industri."
    },
    {
        number: 23, symbol: "V", name: "Vanadium",
        mass: 50.942, category: "transition-metal", group: 5, period: 4,
        electronConfig: "2, 8, 11, 2", state: "Padat",
        meltingPoint: 1910, boilingPoint: 3407,
        description: "Logam transisi yang memiliki beberapa bilangan oksidasi.",
        uses: "Digunakan untuk meningkatkan kekuatan baja."
    },
    {
        number: 24, symbol: "Cr", name: "Kromium",
        mass: 51.996, category: "transition-metal", group: 6, period: 4,
        electronConfig: "2, 8, 13, 1", state: "Padat",
        meltingPoint: 1907, boilingPoint: 2671,
        description: "Logam keras yang tahan korosi dan memiliki kilau khas.",
        uses: "Digunakan dalam pelapisan krom dan pembuatan baja tahan karat."
    },
    {
        number: 25, symbol: "Mn", name: "Mangan",
        mass: 54.938, category: "transition-metal", group: 7, period: 4,
        electronConfig: "2, 8, 13, 2", state: "Padat",
        meltingPoint: 1246, boilingPoint: 2061,
        description: "Logam transisi yang penting dalam pembuatan berbagai jenis baja.",
        uses: "Digunakan dalam industri baja dan baterai tertentu."
    },
    {
        number: 26, symbol: "Fe", name: "Besi",
        mass: 55.845, category: "transition-metal", group: 8, period: 4,
        electronConfig: "2, 8, 14, 2", state: "Padat",
        meltingPoint: 1538, boilingPoint: 2861,
        description: "Logam kuat yang menjadi bahan utama banyak jenis baja.",
        uses: "Digunakan dalam konstruksi bangunan, kendaraan, mesin, dan perkakas."
    },
    {
        number: 27, symbol: "Co", name: "Kobalt",
        mass: 58.933, category: "transition-metal", group: 9, period: 4,
        electronConfig: "2, 8, 15, 2", state: "Padat",
        meltingPoint: 1495, boilingPoint: 2927,
        description: "Logam transisi dengan sifat magnetik dan ketahanan terhadap suhu tinggi.",
        uses: "Digunakan dalam material baterai, paduan khusus, dan pigmen."
    },
    {
        number: 28, symbol: "Ni", name: "Nikel",
        mass: 58.693, category: "transition-metal", group: 10, period: 4,
        electronConfig: "2, 8, 16, 2", state: "Padat",
        meltingPoint: 1455, boilingPoint: 2913,
        description: "Logam yang tahan korosi dan dapat membentuk berbagai paduan.",
        uses: "Digunakan dalam baja tahan karat, pelapisan logam, dan baterai."
    },
    {
        number: 29, symbol: "Cu", name: "Tembaga",
        mass: 63.546, category: "transition-metal", group: 11, period: 4,
        electronConfig: "2, 8, 18, 1", state: "Padat",
        meltingPoint: 1084.62, boilingPoint: 2562,
        description: "Logam berwarna kemerahan yang menghantarkan listrik dan panas dengan baik.",
        uses: "Digunakan pada kabel listrik, pipa, dan komponen elektronik."
    },
    {
        number: 30, symbol: "Zn", name: "Seng",
        mass: 65.38, category: "transition-metal", group: 12, period: 4,
        electronConfig: "2, 8, 18, 2", state: "Padat",
        meltingPoint: 419.53, boilingPoint: 907,
        description: "Logam yang membantu melindungi besi dari korosi melalui pelapisan.",
        uses: "Digunakan untuk galvanisasi baja, baterai, dan pembuatan kuningan."
    },
    {
        number: 31, symbol: "Ga", name: "Galium",
        mass: 69.723, category: "post-transition-metal", group: 13, period: 4,
        electronConfig: "2, 8, 18, 3", state: "Padat",
        meltingPoint: 29.76, boilingPoint: 2204,
        description: "Logam yang dapat meleleh pada suhu sekitar 30 °C.",
        uses: "Senyawanya digunakan dalam lampu LED dan perangkat semikonduktor."
    },
    {
        number: 32, symbol: "Ge", name: "Germanium",
        mass: 72.630, category: "metalloid", group: 14, period: 4,
        electronConfig: "2, 8, 18, 4", state: "Padat",
        meltingPoint: 938.25, boilingPoint: 2820,
        description: "Metaloid yang memiliki sifat semikonduktor.",
        uses: "Digunakan dalam serat optik dan perangkat elektronik tertentu."
    },
    {
        number: 33, symbol: "As", name: "Arsen",
        mass: 74.922, category: "metalloid", group: 15, period: 4,
        electronConfig: "2, 8, 18, 5", state: "Padat",
        meltingPoint: 817, boilingPoint: 614,
        description: "Metaloid yang beberapa senyawanya sangat beracun.",
        uses: "Senyawa tertentu digunakan dalam semikonduktor dengan pengendalian keselamatan ketat."
    },
    {
        number: 34, symbol: "Se", name: "Selenium",
        mass: 78.971, category: "nonmetal", group: 16, period: 4,
        electronConfig: "2, 8, 18, 6", state: "Padat",
        meltingPoint: 221, boilingPoint: 685,
        description: "Nonlogam yang memiliki beberapa bentuk alotrop dan sifat fotokonduktif.",
        uses: "Digunakan dalam industri kaca, perangkat elektronik tertentu, dan panel surya khusus."
    },
    {
        number: 35, symbol: "Br", name: "Bromin",
        mass: 79.904, category: "halogen", group: 17, period: 4,
        electronConfig: "2, 8, 18, 7", state: "Cair",
        meltingPoint: -7.2, boilingPoint: 58.8,
        description: "Salah satu dari dua unsur yang berwujud cair pada suhu ruang.",
        uses: "Senyawanya digunakan dalam berbagai proses industri dan pembuatan material khusus."
    },
    {
        number: 36, symbol: "Kr", name: "Kripton",
        mass: 83.798, category: "noble-gas", group: 18, period: 4,
        electronConfig: "2, 8, 18, 8", state: "Gas",
        meltingPoint: -157.36, boilingPoint: -153.22,
        description: "Gas mulia yang tidak berwarna dan relatif tidak reaktif.",
        uses: "Digunakan dalam lampu khusus dan aplikasi laser tertentu."
    },
    {
        number: 37, symbol: "Rb", name: "Rubidium",
        mass: 85.468, category: "alkali", group: 1, period: 5,
        electronConfig: "2, 8, 18, 8, 1", state: "Padat",
        meltingPoint: 39.31, boilingPoint: 688,
        description: "Logam alkali yang sangat reaktif.",
        uses: "Digunakan dalam penelitian fisika dan teknologi jam atom tertentu."
    },
    {
        number: 38, symbol: "Sr", name: "Stronsium",
        mass: 87.62, category: "alkaline-earth", group: 2, period: 5,
        electronConfig: "2, 8, 18, 8, 2", state: "Padat",
        meltingPoint: 777, boilingPoint: 1382,
        description: "Logam alkali tanah yang senyawanya dapat menghasilkan warna merah pada nyala api.",
        uses: "Senyawanya digunakan dalam kembang api dan material khusus."
    },
    {
        number: 39, symbol: "Y", name: "Itrium",
        mass: 88.906, category: "transition-metal", group: 3, period: 5,
        electronConfig: "2, 8, 18, 9, 2", state: "Padat",
        meltingPoint: 1526, boilingPoint: 3345,
        description: "Logam yang digunakan dalam berbagai material berteknologi tinggi.",
        uses: "Digunakan dalam fosfor layar, laser, dan keramik khusus."
    },
    {
        number: 40, symbol: "Zr", name: "Zirkonium",
        mass: 91.224, category: "transition-metal", group: 4, period: 5,
        electronConfig: "2, 8, 18, 10, 2", state: "Padat",
        meltingPoint: 1855, boilingPoint: 4409,
        description: "Logam yang tahan korosi dan memiliki ketahanan panas yang baik.",
        uses: "Digunakan dalam industri nuklir, keramik, dan peralatan kimia."
    },
    {
        number: 41, symbol: "Nb", name: "Niobium",
        mass: 92.906, category: "transition-metal", group: 5, period: 5,
        electronConfig: "2, 8, 18, 12, 1", state: "Padat",
        meltingPoint: 2477, boilingPoint: 4744,
        description: "Logam transisi yang kuat dan tahan korosi.",
        uses: "Digunakan dalam paduan baja khusus dan magnet superkonduktor."
    },
    {
        number: 42, symbol: "Mo", name: "Molibdenum",
        mass: 95.95, category: "transition-metal", group: 6, period: 5,
        electronConfig: "2, 8, 18, 13, 1", state: "Padat",
        meltingPoint: 2623, boilingPoint: 4639,
        description: "Logam dengan titik leleh sangat tinggi.",
        uses: "Digunakan untuk memperkuat baja dan membuat komponen tahan panas."
    },
    {
        number: 43, symbol: "Tc", name: "Teknesium",
        mass: 98, category: "transition-metal", group: 7, period: 5,
        electronConfig: "2, 8, 18, 13, 2", state: "Padat",
        meltingPoint: 2157, boilingPoint: 4265,
        description: "Unsur radioaktif yang tidak memiliki isotop stabil.",
        uses: "Teknesium-99m digunakan dalam pencitraan medis untuk membantu pemeriksaan organ."
    },
    {
        number: 44, symbol: "Ru", name: "Rutenium",
        mass: 101.07, category: "transition-metal", group: 8, period: 5,
        electronConfig: "2, 8, 18, 15, 1", state: "Padat",
        meltingPoint: 2334, boilingPoint: 4150,
        description: "Logam transisi langka yang termasuk kelompok logam platina.",
        uses: "Digunakan dalam katalis, kontak listrik, dan paduan logam."
    },
    {
        number: 45, symbol: "Rh", name: "Rodium",
        mass: 102.906, category: "transition-metal", group: 9, period: 5,
        electronConfig: "2, 8, 18, 16, 1", state: "Padat",
        meltingPoint: 1964, boilingPoint: 3695,
        description: "Logam langka yang berkilau dan tahan korosi.",
        uses: "Digunakan dalam katalis kendaraan dan pelapisan perhiasan."
    },
    {
        number: 46, symbol: "Pd", name: "Paladium",
        mass: 106.42, category: "transition-metal", group: 10, period: 5,
        electronConfig: "2, 8, 18, 18", state: "Padat",
        meltingPoint: 1554.9, boilingPoint: 2963,
        description: "Logam kelompok platina yang mampu menyerap hidrogen.",
        uses: "Digunakan dalam katalis kendaraan, elektronik, dan perhiasan."
    },
    {
        number: 47, symbol: "Ag", name: "Perak",
        mass: 107.868, category: "transition-metal", group: 11, period: 5,
        electronConfig: "2, 8, 18, 18, 1", state: "Padat",
        meltingPoint: 961.78, boilingPoint: 2162,
        description: "Logam dengan konduktivitas listrik dan panas sangat tinggi.",
        uses: "Digunakan dalam perhiasan, kontak listrik, dan beberapa aplikasi medis."
    },
    {
        number: 48, symbol: "Cd", name: "Kadmium",
        mass: 112.414, category: "transition-metal", group: 12, period: 5,
        electronConfig: "2, 8, 18, 18, 2", state: "Padat",
        meltingPoint: 321.07, boilingPoint: 767,
        description: "Logam lunak yang bersifat toksik.",
        uses: "Pernah banyak digunakan dalam baterai nikel-kadmium; penggunaannya kini dibatasi karena toksisitas."
    },
    {
        number: 49, symbol: "In", name: "Indium",
        mass: 114.818, category: "post-transition-metal", group: 13, period: 5,
        electronConfig: "2, 8, 18, 18, 3", state: "Padat",
        meltingPoint: 156.6, boilingPoint: 2072,
        description: "Logam lunak yang mudah dibentuk.",
        uses: "Digunakan dalam lapisan konduktif transparan pada layar sentuh."
    },
    {
        number: 50, symbol: "Sn", name: "Timah",
        mass: 118.710, category: "post-transition-metal", group: 14, period: 5,
        electronConfig: "2, 8, 18, 18, 4", state: "Padat",
        meltingPoint: 231.93, boilingPoint: 2602,
        description: "Logam yang relatif tahan korosi dan mudah membentuk paduan.",
        uses: "Digunakan dalam solder elektronik dan pelapisan baja untuk kaleng."
    },
    {
        number: 51, symbol: "Sb", name: "Antimon",
        mass: 121.760, category: "metalloid", group: 15, period: 5,
        electronConfig: "2, 8, 18, 18, 5", state: "Padat",
        meltingPoint: 630.63, boilingPoint: 1587,
        description: "Metaloid yang bersifat rapuh.",
        uses: "Senyawanya digunakan dalam bahan penghambat api dan paduan logam tertentu."
    },
    {
        number: 52, symbol: "Te", name: "Telurium",
        mass: 127.60, category: "metalloid", group: 16, period: 5,
        electronConfig: "2, 8, 18, 18, 6", state: "Padat",
        meltingPoint: 449.51, boilingPoint: 988,
        description: "Metaloid yang relatif langka dan memiliki sifat semikonduktor.",
        uses: "Digunakan dalam panel surya tertentu dan material termoelektrik."
    },
    {
        number: 53, symbol: "I", name: "Iodin",
        mass: 126.904, category: "halogen", group: 17, period: 5,
        electronConfig: "2, 8, 18, 18, 7", state: "Padat",
        meltingPoint: 113.7, boilingPoint: 184.3,
        description: "Halogen yang dapat menyublim menghasilkan uap berwarna ungu.",
        uses: "Digunakan dalam antiseptik dan garam beryodium untuk membantu mencegah kekurangan iodin."
    },
    {
        number: 54, symbol: "Xe", name: "Xenon",
        mass: 131.293, category: "noble-gas", group: 18, period: 5,
        electronConfig: "2, 8, 18, 18, 8", state: "Gas",
        meltingPoint: -111.75, boilingPoint: -108.12,
        description: "Gas mulia yang tidak berwarna dan relatif tidak reaktif.",
        uses: "Digunakan dalam lampu kilat, lampu khusus, dan beberapa sistem pendorong ion."
    },
    {
        number: 55, symbol: "Cs", name: "Sesium",
        mass: 132.905, category: "alkali", group: 1, period: 6,
        electronConfig: "2, 8, 18, 18, 8, 1", state: "Padat",
        meltingPoint: 28.44, boilingPoint: 671,
        description: "Logam alkali yang sangat reaktif dan memiliki titik leleh rendah.",
        uses: "Digunakan dalam jam atom yang sangat akurat."
    },
    {
        number: 56, symbol: "Ba", name: "Barium",
        mass: 137.327, category: "alkaline-earth", group: 2, period: 6,
        electronConfig: "2, 8, 18, 18, 8, 2", state: "Padat",
        meltingPoint: 727, boilingPoint: 1845,
        description: "Logam alkali tanah yang reaktif; beberapa senyawanya dapat menghasilkan warna hijau pada nyala api.",
        uses: "Barium sulfat digunakan sebagai bahan kontras dalam pemeriksaan sinar-X saluran pencernaan."
    },
    {
        number: 57, symbol: "La", name: "Lantanum",
        mass: 138.905, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 18, 9, 2", state: "Padat",
        meltingPoint: 920, boilingPoint: 3464,
        description: "Logam yang termasuk deret lantanida dan mudah teroksidasi di udara.",
        uses: "Digunakan dalam lensa optik khusus, katalis, dan baterai tertentu."
    },
    {
        number: 58, symbol: "Ce", name: "Serium",
        mass: 140.116, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 19, 9, 2", state: "Padat",
        meltingPoint: 798, boilingPoint: 3443,
        description: "Logam lantanida yang relatif melimpah dibandingkan banyak unsur tanah jarang lainnya.",
        uses: "Digunakan dalam pemoles kaca dan katalis."
    },
    {
        number: 59, symbol: "Pr", name: "Praseodimium",
        mass: 140.908, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 21, 8, 2", state: "Padat",
        meltingPoint: 931, boilingPoint: 3520,
        description: "Logam lantanida yang dapat membentuk senyawa berwarna khas.",
        uses: "Digunakan dalam magnet khusus, paduan logam, dan pewarna kaca."
    },
    {
        number: 60, symbol: "Nd", name: "Neodimium",
        mass: 144.242, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 22, 8, 2", state: "Padat",
        meltingPoint: 1024, boilingPoint: 3074,
        description: "Logam lantanida yang penting untuk pembuatan magnet permanen yang kuat.",
        uses: "Digunakan dalam motor listrik, pengeras suara, dan turbin angin."
    },
    {
        number: 61, symbol: "Pm", name: "Prometium",
        mass: 145, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 23, 8, 2", state: "Padat",
        meltingPoint: 1042, boilingPoint: 3000,
        description: "Unsur lantanida radioaktif yang tidak memiliki isotop stabil.",
        uses: "Prometium-147 pernah digunakan dalam sumber daya listrik khusus dan alat pengukur industri."
    },
    {
        number: 62, symbol: "Sm", name: "Samarium",
        mass: 150.36, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 24, 8, 2", state: "Padat",
        meltingPoint: 1072, boilingPoint: 1794,
        description: "Logam lantanida yang dapat membentuk magnet permanen khusus.",
        uses: "Digunakan dalam magnet samarium-kobalt dan beberapa aplikasi nuklir."
    },
    {
        number: 63, symbol: "Eu", name: "Europium",
        mass: 151.964, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 25, 8, 2", state: "Padat",
        meltingPoint: 822, boilingPoint: 1529,
        description: "Logam lantanida yang senyawanya dapat menghasilkan cahaya berwarna khas.",
        uses: "Digunakan dalam bahan fosfor untuk layar dan lampu tertentu."
    },
    {
        number: 64, symbol: "Gd", name: "Gadolinium",
        mass: 157.25, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 25, 9, 2", state: "Padat",
        meltingPoint: 1313, boilingPoint: 3273,
        description: "Logam lantanida dengan sifat magnetik yang menarik.",
        uses: "Senyawa gadolinium tertentu digunakan sebagai bahan kontras dalam pemeriksaan MRI."
    },
    {
        number: 65, symbol: "Tb", name: "Terbium",
        mass: 158.925, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 27, 8, 2", state: "Padat",
        meltingPoint: 1356, boilingPoint: 3230,
        description: "Logam lantanida yang digunakan untuk menghasilkan sifat optik dan magnetik tertentu.",
        uses: "Digunakan dalam fosfor hijau, perangkat elektronik, dan material magnetostriktif."
    },
    {
        number: 66, symbol: "Dy", name: "Disprosium",
        mass: 162.500, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 28, 8, 2", state: "Padat",
        meltingPoint: 1412, boilingPoint: 2567,
        description: "Logam lantanida dengan sifat magnetik yang kuat.",
        uses: "Digunakan dalam magnet berkinerja tinggi, termasuk untuk motor listrik tertentu."
    },
    {
        number: 67, symbol: "Ho", name: "Holmium",
        mass: 164.930, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 29, 8, 2", state: "Padat",
        meltingPoint: 1474, boilingPoint: 2700,
        description: "Logam lantanida yang memiliki sifat magnetik khusus.",
        uses: "Digunakan dalam laser tertentu dan penelitian material magnetik."
    },
    {
        number: 68, symbol: "Er", name: "Erbium",
        mass: 167.259, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 30, 8, 2", state: "Padat",
        meltingPoint: 1529, boilingPoint: 2868,
        description: "Logam lantanida yang ionnya dapat menghasilkan cahaya merah muda.",
        uses: "Digunakan untuk memperkuat sinyal dalam serat optik dan pada laser medis tertentu."
    },
    {
        number: 69, symbol: "Tm", name: "Tulium",
        mass: 168.934, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 31, 8, 2", state: "Padat",
        meltingPoint: 1545, boilingPoint: 1950,
        description: "Salah satu unsur lantanida yang relatif langka.",
        uses: "Digunakan dalam laser tertentu dan sumber sinar-X portabel khusus."
    },
    {
        number: 70, symbol: "Yb", name: "Iterbium",
        mass: 173.045, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 32, 8, 2", state: "Padat",
        meltingPoint: 824, boilingPoint: 1196,
        description: "Logam lantanida yang memiliki beberapa sifat optik dan magnetik khusus.",
        uses: "Digunakan dalam laser serat, jam atom tertentu, dan penelitian material."
    },
    {
        number: 71, symbol: "Lu", name: "Lutesium",
        mass: 174.967, category: "lanthanide", group: 3, period: 6,
        electronConfig: "2, 8, 18, 32, 9, 2", state: "Padat",
        meltingPoint: 1663, boilingPoint: 3402,
        description: "Unsur terakhir dalam deret lantanida.",
        uses: "Lutesium-177 digunakan dalam terapi kedokteran nuklir tertentu."
    },
    {
        number: 72, symbol: "Hf", name: "Hafnium",
        mass: 178.49, category: "transition-metal", group: 4, period: 6,
        electronConfig: "2, 8, 18, 32, 10, 2", state: "Padat",
        meltingPoint: 2233, boilingPoint: 4603,
        description: "Logam tahan panas yang mampu menyerap neutron.",
        uses: "Digunakan pada batang kendali reaktor nuklir dan paduan tahan panas."
    },
    {
        number: 73, symbol: "Ta", name: "Tantalum",
        mass: 180.948, category: "transition-metal", group: 5, period: 6,
        electronConfig: "2, 8, 18, 32, 11, 2", state: "Padat",
        meltingPoint: 3017, boilingPoint: 5458,
        description: "Logam keras yang sangat tahan korosi dan memiliki titik leleh tinggi.",
        uses: "Digunakan dalam kapasitor elektronik dan implan medis tertentu."
    },
    {
        number: 74, symbol: "W", name: "Wolfram",
        mass: 183.84, category: "transition-metal", group: 6, period: 6,
        electronConfig: "2, 8, 18, 32, 12, 2", state: "Padat",
        meltingPoint: 3422, boilingPoint: 5555,
        description: "Logam dengan titik leleh tertinggi di antara logam murni pada tekanan standar.",
        uses: "Digunakan dalam perkakas pemotong, elektroda, dan komponen tahan panas."
    },
    {
        number: 75, symbol: "Re", name: "Renium",
        mass: 186.207, category: "transition-metal", group: 7, period: 6,
        electronConfig: "2, 8, 18, 32, 13, 2", state: "Padat",
        meltingPoint: 3186, boilingPoint: 5596,
        description: "Logam langka dengan titik leleh sangat tinggi.",
        uses: "Digunakan dalam superpaduan untuk mesin turbin dan sebagai katalis."
    },
    {
        number: 76, symbol: "Os", name: "Osmium",
        mass: 190.23, category: "transition-metal", group: 8, period: 6,
        electronConfig: "2, 8, 18, 32, 14, 2", state: "Padat",
        meltingPoint: 3033, boilingPoint: 5012,
        description: "Logam yang sangat rapat dan termasuk kelompok logam platina.",
        uses: "Digunakan dalam paduan khusus dan beberapa komponen instrumen."
    },
    {
        number: 77, symbol: "Ir", name: "Iridium",
        mass: 192.217, category: "transition-metal", group: 9, period: 6,
        electronConfig: "2, 8, 18, 32, 15, 2", state: "Padat",
        meltingPoint: 2446, boilingPoint: 4428,
        description: "Logam yang sangat tahan korosi.",
        uses: "Digunakan dalam busi khusus, wadah laboratorium, dan peralatan industri."
    },
    {
        number: 78, symbol: "Pt", name: "Platina",
        mass: 195.084, category: "transition-metal", group: 10, period: 6,
        electronConfig: "2, 8, 18, 32, 17, 1", state: "Padat",
        meltingPoint: 1768.3, boilingPoint: 3825,
        description: "Logam mulia yang tahan korosi dan efektif sebagai katalis.",
        uses: "Digunakan dalam perhiasan, katalis kendaraan, dan beberapa obat antikanker."
    },
    {
        number: 79, symbol: "Au", name: "Emas",
        mass: 196.967, category: "transition-metal", group: 11, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 1", state: "Padat",
        meltingPoint: 1064.18, boilingPoint: 2856,
        description: "Logam mulia yang mudah dibentuk dan tahan korosi.",
        uses: "Digunakan dalam perhiasan, komponen elektronik, dan penyimpanan nilai."
    },
    {
        number: 80, symbol: "Hg", name: "Raksa",
        mass: 200.592, category: "transition-metal", group: 12, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 2", state: "Cair",
        meltingPoint: -38.83, boilingPoint: 356.73,
        description: "Logam yang berwujud cair pada suhu ruang dan bersifat toksik.",
        uses: "Pernah digunakan dalam termometer dan alat ukur tertentu; penggunaannya kini dibatasi karena bahayanya bagi kesehatan dan lingkungan."
    },
    {
        number: 81, symbol: "Tl", name: "Talium",
        mass: 204.38, category: "post-transition-metal", group: 13, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 3", state: "Padat",
        meltingPoint: 304, boilingPoint: 1473,
        description: "Logam lunak yang sangat beracun.",
        uses: "Penggunaannya terbatas pada penelitian dan perangkat khusus karena toksisitasnya."
    },
    {
        number: 82, symbol: "Pb", name: "Timbal",
        mass: 207.2, category: "post-transition-metal", group: 14, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 4", state: "Padat",
        meltingPoint: 327.46, boilingPoint: 1749,
        description: "Logam berat yang lunak dan beracun.",
        uses: "Digunakan dalam aki timbal-asam dan pelindung radiasi khusus."
    },
    {
        number: 83, symbol: "Bi", name: "Bismut",
        mass: 208.980, category: "post-transition-metal", group: 15, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 5", state: "Padat",
        meltingPoint: 271.4, boilingPoint: 1564,
        description: "Logam rapuh yang relatif kurang beracun dibandingkan banyak logam berat lainnya.",
        uses: "Digunakan dalam obat tertentu, paduan bertitik leleh rendah, dan kosmetik."
    },
    {
        number: 84, symbol: "Po", name: "Polonium",
        mass: 209, category: "post-transition-metal", group: 16, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 6", state: "Padat",
        meltingPoint: 254, boilingPoint: 962,
        description: "Unsur radioaktif yang sangat berbahaya.",
        uses: "Penggunaannya terbatas pada penelitian dan aplikasi khusus yang dikendalikan ketat."
    },
    {
        number: 85, symbol: "At", name: "Astatin",
        mass: 210, category: "halogen", group: 17, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 7", state: "Padat",
        meltingPoint: 302, boilingPoint: 337,
        description: "Halogen yang sangat langka dan seluruh isotopnya bersifat radioaktif.",
        uses: "Astatin-211 diteliti untuk terapi alfa bertarget dalam kedokteran nuklir."
    },
    {
        number: 86, symbol: "Rn", name: "Radon",
        mass: 222, category: "noble-gas", group: 18, period: 6,
        electronConfig: "2, 8, 18, 32, 18, 8", state: "Gas",
        meltingPoint: -71, boilingPoint: -61.7,
        description: "Gas mulia radioaktif yang dapat terbentuk dari peluruhan uranium dalam batuan dan tanah.",
        uses: "Pemanfaatannya sangat terbatas; radon terutama dipantau karena risiko kesehatannya."
    },
    {
        number: 87, symbol: "Fr", name: "Fransium",
        mass: 223, category: "alkali", group: 1, period: 7,
        electronConfig: "2, 8, 18, 32, 18, 8, 1", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Logam alkali yang sangat langka dan radioaktif.",
        uses: "Digunakan hanya dalam penelitian ilmiah."
    },
    {
        number: 88, symbol: "Ra", name: "Radium",
        mass: 226, category: "alkaline-earth", group: 2, period: 7,
        electronConfig: "2, 8, 18, 32, 18, 8, 2", state: "Padat",
        meltingPoint: 700, boilingPoint: 1737,
        description: "Logam alkali tanah yang sangat radioaktif.",
        uses: "Pemanfaatannya kini sangat terbatas karena risiko radiasi."
    },
    {
        number: 89, symbol: "Ac", name: "Aktinium",
        mass: 227, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 18, 9, 2", state: "Padat",
        meltingPoint: 1050, boilingPoint: 3200,
        description: "Logam radioaktif yang memulai deret aktinida.",
        uses: "Aktinium-225 diteliti untuk terapi alfa bertarget dalam pengobatan kanker."
    },
    {
        number: 90, symbol: "Th", name: "Torium",
        mass: 232.038, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 18, 10, 2", state: "Padat",
        meltingPoint: 1750, boilingPoint: 4788,
        description: "Logam radioaktif yang terdapat secara alami dalam mineral.",
        uses: "Diteliti sebagai bahan potensial dalam siklus bahan bakar nuklir."
    },
    {
        number: 91, symbol: "Pa", name: "Protaktinium",
        mass: 231.036, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 20, 9, 2", state: "Padat",
        meltingPoint: 1572, boilingPoint: 4000,
        description: "Logam aktinida langka yang bersifat radioaktif.",
        uses: "Terutama digunakan dalam penelitian ilmiah."
    },
    {
        number: 92, symbol: "U", name: "Uranium",
        mass: 238.029, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 21, 9, 2", state: "Padat",
        meltingPoint: 1132.2, boilingPoint: 4131,
        description: "Logam berat radioaktif yang terdapat secara alami.",
        uses: "Isotop tertentu digunakan sebagai bahan bakar dalam pembangkit listrik tenaga nuklir."
    },
    {
        number: 93, symbol: "Np", name: "Neptunium",
        mass: 237, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 22, 9, 2", state: "Padat",
        meltingPoint: 644, boilingPoint: 4000,
        description: "Unsur aktinida radioaktif yang sebagian besar dihasilkan melalui reaksi nuklir.",
        uses: "Digunakan dalam penelitian nuklir dan pengembangan teknologi deteksi neutron."
    },
    {
        number: 94, symbol: "Pu", name: "Plutonium",
        mass: 244, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 24, 8, 2", state: "Padat",
        meltingPoint: 639.4, boilingPoint: 3228,
        description: "Logam aktinida radioaktif dengan beberapa isotop penting dalam teknologi nuklir.",
        uses: "Plutonium-238 digunakan sebagai sumber energi untuk beberapa wahana antariksa."
    },
    {
        number: 95, symbol: "Am", name: "Amerisium",
        mass: 243, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 25, 8, 2", state: "Padat",
        meltingPoint: 1176, boilingPoint: 2607,
        description: "Unsur aktinida radioaktif yang dibuat dalam reaktor nuklir.",
        uses: "Amerisium-241 digunakan dalam sebagian detektor asap ionisasi."
    },
    {
        number: 96, symbol: "Cm", name: "Kurium",
        mass: 247, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 25, 9, 2", state: "Padat",
        meltingPoint: 1345, boilingPoint: 3110,
        description: "Unsur aktinida buatan yang sangat radioaktif.",
        uses: "Digunakan dalam penelitian ilmiah dan sebagai sumber partikel alfa pada instrumen tertentu."
    },
    {
        number: 97, symbol: "Bk", name: "Berkelium",
        mass: 247, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 27, 8, 2", state: "Padat",
        meltingPoint: 986, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang pertama kali dibuat di Berkeley.",
        uses: "Digunakan untuk penelitian unsur berat dan sintesis unsur lain."
    },
    {
        number: 98, symbol: "Cf", name: "Kalifornium",
        mass: 251, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 28, 8, 2", state: "Padat",
        meltingPoint: 900, boilingPoint: 1470,
        description: "Unsur sintetis radioaktif yang dapat menghasilkan neutron.",
        uses: "Kalifornium-252 digunakan dalam sumber neutron untuk aplikasi industri dan penelitian."
    },
    {
        number: 99, symbol: "Es", name: "Einsteinium",
        mass: 252, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 29, 8, 2", state: "Padat",
        meltingPoint: 860, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Albert Einstein.",
        uses: "Digunakan dalam penelitian ilmiah, terutama untuk mempelajari unsur berat."
    },
    {
        number: 100, symbol: "Fm", name: "Fermium",
        mass: 257, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 30, 8, 2", state: "Padat",
        meltingPoint: 1527, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang pertama kali ditemukan dari hasil uji termonuklir.",
        uses: "Digunakan untuk penelitian ilmiah dan memahami sifat unsur superberat."
    },
    {
        number: 101, symbol: "Md", name: "Mendelevium",
        mass: 258, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 31, 8, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Dmitri Mendeleev, pengembang tabel periodik.",
        uses: "Digunakan dalam penelitian ilmiah untuk mempelajari unsur aktinida."
    },
    {
        number: 102, symbol: "No", name: "Nobelium",
        mass: 259, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 8, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Alfred Nobel.",
        uses: "Digunakan untuk penelitian sifat kimia unsur aktinida."
    },
    {
        number: 103, symbol: "Lr", name: "Lawrensium",
        mass: 266, category: "actinide", group: 3, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 8, 3", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang menjadi unsur terakhir dalam deret aktinida.",
        uses: "Digunakan dalam penelitian ilmiah mengenai unsur-unsur berat."
    },
    {
        number: 104, symbol: "Rf", name: "Rutherfordium",
        mass: 267, category: "transition-metal", group: 4, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 10, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Ernest Rutherford.",
        uses: "Digunakan dalam penelitian ilmiah untuk mempelajari sifat unsur superberat."
    },
    {
        number: 105, symbol: "Db", name: "Dubnium",
        mass: 268, category: "transition-metal", group: 5, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 11, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai berdasarkan kota Dubna di Rusia.",
        uses: "Digunakan dalam penelitian unsur superberat."
    },
    {
        number: 106, symbol: "Sg", name: "Seaborgium",
        mass: 269, category: "transition-metal", group: 6, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 12, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Glenn T. Seaborg.",
        uses: "Digunakan dalam penelitian kimia unsur superberat."
    },
    {
        number: 107, symbol: "Bh", name: "Bohrium",
        mass: 270, category: "transition-metal", group: 7, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 13, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati fisikawan Niels Bohr.",
        uses: "Digunakan dalam penelitian ilmiah mengenai unsur superberat."
    },
    {
        number: 108, symbol: "Hs", name: "Hassium",
        mass: 277, category: "transition-metal", group: 8, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 14, 2", state: "Diperkirakan padat",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai berdasarkan negara bagian Hessen di Jerman.",
        uses: "Digunakan untuk penelitian sifat kimia unsur superberat."
    },
    {
        number: 109, symbol: "Mt", name: "Meitnerium",
        mass: 278, category: "transition-metal", group: 9, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 15, 2", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati fisikawan Lise Meitner.",
        uses: "Hanya digunakan dalam penelitian ilmiah."
    },
    {
        number: 110, symbol: "Ds", name: "Darmstadtium",
        mass: 281, category: "transition-metal", group: 10, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 16, 2", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai berdasarkan kota Darmstadt di Jerman.",
        uses: "Digunakan dalam penelitian unsur superberat."
    },
    {
        number: 111, symbol: "Rg", name: "Roentgenium",
        mass: 282, category: "transition-metal", group: 11, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 17, 2", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Wilhelm Conrad Röntgen.",
        uses: "Digunakan untuk penelitian ilmiah mengenai unsur berat."
    },
    {
        number: 112, symbol: "Cn", name: "Kopernisium",
        mass: 285, category: "transition-metal", group: 12, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 2", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati astronom Nicolaus Copernicus.",
        uses: "Digunakan dalam penelitian sifat atom dan unsur superberat."
    },
    {
        number: 113, symbol: "Nh", name: "Nihonium",
        mass: 286, category: "post-transition-metal", group: 13, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 3", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang namanya berasal dari Nihon, sebutan Jepang dalam bahasa Jepang.",
        uses: "Digunakan dalam penelitian ilmiah mengenai unsur superberat."
    },
    {
        number: 114, symbol: "Fl", name: "Flerovium",
        mass: 289, category: "post-transition-metal", group: 14, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 4", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai berdasarkan Laboratorium Reaksi Nuklir Flerov.",
        uses: "Digunakan untuk penelitian sifat kimia unsur superberat."
    },
    {
        number: 115, symbol: "Mc", name: "Moscovium",
        mass: 290, category: "post-transition-metal", group: 15, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 5", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai berdasarkan wilayah Moskwa di Rusia.",
        uses: "Digunakan dalam penelitian ilmiah mengenai unsur superberat."
    },
    {
        number: 116, symbol: "Lv", name: "Livermorium",
        mass: 293, category: "post-transition-metal", group: 16, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 6", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai untuk menghormati Lawrence Livermore National Laboratory.",
        uses: "Digunakan dalam penelitian sifat unsur superberat."
    },
    {
        number: 117, symbol: "Ts", name: "Tennessine",
        mass: 294, category: "halogen", group: 17, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 7", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif yang dinamai berdasarkan negara bagian Tennessee di Amerika Serikat.",
        uses: "Digunakan dalam penelitian ilmiah mengenai unsur superberat."
    },
    {
        number: 118, symbol: "Og", name: "Oganesson",
        mass: 294, category: "noble-gas", group: 18, period: 7,
        electronConfig: "2, 8, 18, 32, 32, 18, 8", state: "Belum diketahui",
        meltingPoint: null, boilingPoint: null,
        description: "Unsur sintetis radioaktif bernomor atom tertinggi yang telah diakui secara resmi.",
        uses: "Digunakan dalam penelitian ilmiah untuk mempelajari sifat unsur superberat."
    }
];
