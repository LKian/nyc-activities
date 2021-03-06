const data = [
  {
    name: "Central Park",
    category: "explore",
    neighborhood: "midtown",
    description:
      "Sprawling park with pedestrian paths & ballfields, plus a zoo, carousel, boat rentals & a reservoir.",
    image: "./images/central-park.jpg",
    directions: "https://goo.gl/maps/3HW66vd6c5CCQ66m6",
  },
  {
    name: "Chelsea Market",
    category: "shop",
    neighborhood: "chelsea",
    description:
      "Indoor marketplace renowned for its wide range of grocers, shops & eateries.",
    image: "./images/chelsea-market.jpg",
    directions: "https://g.page/chelseamarketny?share",
  },
  {
    name: "Brooklyn Bridge",
    category: "explore",
    neighborhood: "lower east side",
    description:
      "5989 ft long suspension bridge 276 ft above East River.  The two towers are constructed of limestone, granite, and concrete, and each tower features two Gothic arches which resemble cathedral windows",
    image: "./images/brooklyn-bridge.jpg",
    directions: "https://goo.gl/maps/rAsXkHAEYxUJh2G86",
  },
  {
    name: "Grand Central",
    category: "see",
    neighborhood: "midtown",
    description:
      "Iconic train station known for its grand facade & main concourse, also offering shops & dining.",
    image: "./images/grand-central.jpg",
    directions: "https://goo.gl/maps/QR8MMsNnMa9TfzQ38",
  },
  {
    name: "Bryant Park",
    category: "explore",
    neighborhood: "midtown",
    description:
      "Green space behind the NY Public Library's main branch, with 4 acres, a cafe and other food kiosks.",

    image: "./images/bryant-park.jpg",
    directions: "https://goo.gl/maps/9LtYr7cdha5DmAYG9",
  },
  {
    name: "Artist & Fleas",
    category: "shop",
    neighborhood: "chelsea",
    description:
      "vendors sell hip, handmade crafts, jewelry, antiques & vintage clothing in Chelsea Market.",
    image: "./images/artists-and-fleas.jpg",
    directions: "https://goo.gl/maps/5iqhDq541Dq2BehZ6",
  },
  {
    name: "Times Square",
    category: "explore",
    neighborhood: "midtown",
    description:
      "Bustling destination in the heart of the Theater District known for bright lights, shopping & shows.",
    image: "./images/times-square.jpg",
    directions: "https://goo.gl/maps/bkyHdc3ip8t8RPEh8",
  },
  {
    name: "Oculus",
    category: "see",
    neighborhood: "civic center",
    description:
      "Designed by Santiago Calatrava, this airy transport hub serves the new World Trade Center.",
    image: "./images/oculus.jpg",
    directions: "https://goo.gl/maps/hruFUWr12veFCEGY7",
  },
  {
    name: "Vessel",
    category: "see",
    neighborhood: "flatiron",
    description:
      "Vessel is a structure and visitor attraction built as part of the Hudson Yards Redevelopment Project in Manhattan.",
    image: "./images/vessel.jpg",
    directions: "https://goo.gl/maps/YzgtYuRT3fvTrBPw5",
  },
  {
    name: "Little Italy",
    category: "eat",
    neighborhood: "little italy",
    description:
      "Little Italy welcomes a heavily tourist crowd to its high concentration of souvenir shops and traditional Italian eateries and bakeries. Tenement buildings, once home to the immigrants who settled the area in the late 1800s, line the narrow streets. Mulberry Street, the main thoroughfare, turns into a pedestrian mall on summer weekends. The area celebrates its heritage each September at the busy San Gennaro festival.",
    image: "./images/little-italy.jpg",
    directions: "https://goo.gl/maps/4TQm4w5nMbFvy8wG8",
  },
  {
    name: "Butcher and Banker NYC",
    category: "drink",
    neighborhood: "garment district",
    description:
      "Cocktails in an underground space with a refurbished 1930s bank vault.",
    image: "./images/butcher-and-banker.jpg",
    directions: "https://goo.gl/maps/zRY4P7orrRyu2Lzh6",
  },
  {
    name: "Whispering Gallery",
    category: "see",
    neighborhood: "midtown",
    description:
      "Stand with your ear right up against the tile work in the domed intersection of walkways on the lower floor of Grand Central Terminal and you’ll discover a secret: a corner-to-corner whispering gallery. Even the quietest sweet nothing, soft song, or whispered threat can be heard, even over the din of crowds.",
    image: "./images/whispering-gallery.jpg",
    directions: "https://goo.gl/maps/iZz6ZeXmNtC5WExFA",
  },
  {
    name: "Nintendo NY",
    category: "see",
    neighborhood: "midtown",
    description:
      "10,000 square foot store filled with interactive game demos, accessories, apparel & collectibles.",
    image: "./images/nintendo.jpg",
    directions: "https://goo.gl/maps/DWKQaxaEpFgXNS9s5",
  },
  {
    name: "Empire State Building",
    category: "see",
    neighborhood: "koreatown",
    description:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    image: "./images/empire-state-building.jpg",
    directions: "https://goo.gl/maps/VS5TwCy2ndiMB6MX8",
  },
  {
    name: "High Line",
    category: "explore",
    neighborhood: "chelsea",
    description:
      "Popular park 30 feet above street level on an old rail line, with river & city views.",
    image: "./images/high-line.jpg",
    directions: "https://goo.gl/maps/6Po7kknKYnGQ9CLz6",
  },
  {
    name: "Greenwich Village",
    category: "explore",
    neighborhood: "greenwich",
    description:
      "The epicenter of the city's 1960s counterculture movement, the tree-lined streets of Greenwich Village are now a hub of popular cafes, bars and restaurants.",

    image: "./images/greenwich-village.jpg",
    directions: "https://goo.gl/maps/BwGECWz2iVqVFjEYA",
  },
  {
    name: "Strand Bookstore",
    category: "shop",
    neighborhood: "greenwich",
    description:
      "Landmark shop specializing in new, used & rare books from philosophy to finance, plus bookish gifts.",

    image: "./images/strand-bookstore.jpg",
    directions: "https://g.page/strandbookstorenyc?share",
  },
  {
    name: "Century 21",
    category: "shop",
    neighborhood: "midtown",
    description:
      "Retailer offering discounted trendy apparel, shoes & accessories. Some sell cosmetics & home goods.",

    image: "./images/century-21.jpg",
    directions: "https://goo.gl/maps/Gn1iHnFkgUuSmLFK7",
  },
  {
    name: "Charging Bull",
    category: "see",
    neighborhood: "Wall Street",
    description:
      "3-ton bronze sculpture of a bull located near Wall Street symbolizing New York's financial industry.",

    image: "./images/charging-bull.jpg",
    directions: "https://goo.gl/maps/v8W95seuxrpCyNeL8",
  },
  {
    name: "Vans Off the Wall",
    category: "shop",
    neighborhood: "midtown",
    description:
      "Retail store featuring the brand's surfing & skateboarding-inspired shoes & casualwear.",

    image: "./images/vans-off-the-wall.jpg",
    directions: "https://goo.gl/maps/p5hFoP5JxzqyrS2w9",
  },
  {
    name: "Levain Bakery",
    category: "eat",
    neighborhood: "upper west side",
    description:
      "Fresh breads, cookies & other baked treats at this tiny shop that donates unsold goods to charity",

    image: "./images/levain-bakery.jpg",
    directions: "https://goo.gl/maps/UrHa8ZdPZjfeFzfZ9",
  },
  {
    name: "Attaboy",
    category: "drink",
    neighborhood: "lower east side",
    description:
      "Innovative, creative cocktails & classic concoctions mixed up in an industrial-style space.",

    image: "./images/attaboy.jpg",
    directions: "https://g.page/attaboy134?share",
  },
  {
    name: "F.A.O. Schwartz",
    category: "shop",
    neighborhood: "midtown",
    description:
      "FAO Schwarz is an American toy brand and store.  The company is known for its high-end toys, life-sized stuffed animals, interactive experiences, brand integrations, and games.",

    image: "./images/fao-schwartz.jpg",
    directions: "https://goo.gl/maps/3miKfcF7qsX1T1288",
  },
  {
    name: "Angel's Share",
    category: "drink",
    neighborhood: "greenwich",
    description:
      "Speakeasy-style bar in the East Village offering exotic cocktails in a cool, hard-to-find space.",

    image: "./images/angels-share.jpg",
    directions: "https://goo.gl/maps/xzeidvfNqLTsNceP8",
  },
  {
    name: "Union Square",
    category: "explore",
    neighborhood: "union square",
    description:
      "The lively Union Square neighborhood is anchored by its namesake pedestrian plaza and bustling park, which attracts a mix of professionals, street artists, students and protesters. The surrounding streets are lined with high-rise apartments and big-name chain stores, as well as casual eateries and cafes. The stalls of the long-running Union Square Greenmarket draw crowds for local produce and artisanal food.",

    image: "./images/union-square.jpg",
    directions: "https://goo.gl/maps/Niv812QjdwwQ2sMk8",
  },
  {
    name: "The Dead Rabbit Grocery and Grog",
    category: "drink",
    neighborhood: "wall street",
    description:
      "This 2-story spot combines a lunch taproom with a parlor serving small plates & vintage cocktails.",

    image: "./images/dead-rabbit-grocery-and-grog.jpg",
    directions: "https://goo.gl/maps/QMnwQge4nat5btqSA",
  },
  {
    name: "Vans",
    category: "shop",
    neighborhood: "midtown",
    description:
      "Retail store featuring the brand's surfing & skateboarding-inspired shoes & casualwear.",

    image: "./images/vans.jpg",
    directions: "https://goo.gl/maps/o3CoteTu4kFZdT6A6",
  },
  {
    name: "TJ Maxx",
    category: "shop",
    neighborhood: "midtown",
    description:
      "Retail chain featuring stylish brand-name apparel, shoes & accessories, plus housewares.",

    image: "./images/tjmaxx.jpg",
    directions: "https://goo.gl/maps/RbfRjBmXo3C6zprPA",
  },
  {
    name: "Macy's",
    category: "shop",
    neighborhood: "midtown",
    description:
      "Department store chain providing brand-name clothing, accessories, home furnishings & housewares.",

    image: "./images/macys.jpg",
    directions: "https://goo.gl/maps/Qvkf3S7CL3BZ8PcGA",
  },
  {
    name: "Woolworth Building",
    category: "see",
    neighborhood: "Tribeca",
    description:
      "1913 neo-Gothic skyscraper, once the world's tallest building & still an architectural landmark.",

    image: "./images/woolworth-building.jpg",
    directions: "https://goo.gl/maps/4F59vJMkysHkSBTu9",
  },
  {
    name: "Chinatown",
    category: "eat",
    neighborhood: "chinatown",
    description:
      "Vibrant Chinatown is a densely populated neighborhood that draws foodies and tourists to its many Chinese and Southeast Asian restaurants for dumplings, pork buns and hand-pulled noodles. The busy sidewalks are packed with souvenir stores, bubble tea shops, and markets selling everything from fresh and dried fish to herbs and spices. Locals hang out in leafy Columbus Park for Tai Chi, chess and mahjong.",

    image: "./images/chinatown.jpg",
    directions: "https://goo.gl/maps/bE6WK3SV5NhRH3jj7",
  },
  {
    name: "The Back Room",
    category: "drink",
    neighborhood: "lower east side",
    description:
      "Hideaway with a Prohibition-esque vibe, offering cocktails in teacups and beer in paper bags.",

    image: "./images/the-back-room.jpg",
    directions: "https://goo.gl/maps/qVCqP5BCkr99FMCf6",
  },
  {
    name: "Momofuku Noodle Bar",
    category: "eat",
    neighborhood: "east village",
    description:
      "David Chang's Asian-accented American fare comes with an open kitchen, spare decor & dinner crowds.",

    image: "./images/momofuku-noodle-bar.jpg",
    directions: "https://goo.gl/maps/H8XzZ61tGuEi2bmY9",
  },
  {
    name: "Apotheke",
    category: "drink",
    neighborhood: "chinatown",
    description:
      "Mixologists in pharmacist-style garb whip up complex cocktails at this off-the-beaten path hideaway.",

    image: "./images/apotheke.jpg",
    directions: "https://goo.gl/maps/1sJwxWvH9cHyew1U8",
  },
  {
    name: "Flatiron Building",
    category: "see",
    neighborhood: "flatiron-district",
    description:
      "The Flatiron Building, originally the Fuller Building, is a triangular 22-story, 285-foot tall steel-framed landmarked building located at 175 Fifth Avenue in the Flatiron District neighborhood of the borough of Manhattan, New York City.",

    image: "./images/flatiron-building.jpg",
    directions: "https://goo.gl/maps/GjDep3hkxi736Vkb8",
  },
  {
    name: "Paris Baguette",
    category: "eat",
    neighborhood: "Central Park South",
    description:
      "French Korean bakery-café chain known for its delightful assortment of cakes, pastries, and breads.",

    image: "./images/paris-baguette.jpg",
    directions: "https://goo.gl/maps/DBdNHZzUgrt5yf148",
  },
  {
    name: "Coffee Project NY",
    category: "coffee",
    neighborhood: "bowery",
    description:
      "Cozy, brick-lined haunt for inventive drinks such as deconstructed lattes & nitro cold-brew coffee",

    image: "./images/coffee-project.jpg",
    directions: "https://goo.gl/maps/uFNP1nA8MFUkWdLP8",
  },
  {
    name: "Stumptown Coffee Roasters",
    category: "coffee",
    neighborhood: "koreatown",
    description:
      "Coffee bar chain offering house-roasted direct-trade coffee, along with brewing gear & whole beans",

    image: "./images/stumptown-coffee-roasters.jpg",
    directions: "https://goo.gl/maps/W7tEschpTHesB6nV7",
  },
  {
    name: "Intelligentsia Coffee Highline Coffeebar",
    category: "coffee",
    neighborhood: "chelsea",
    description:
      "High-end coffee bar chain serving daily roasted brews in an industrial-chic setting.",

    image: "./images/intelligentsia-coffee.jpg",
    directions: "https://goo.gl/maps/DvBtZE4ZePxmQcLd6",
  },
  {
    name: "Ground Central Coffee Company",
    category: "coffee",
    neighborhood: "midtown",
    description:
      "Your neighborhood coffee shops offering a break from the bustle in NYC's Midtown neighborhood. Serving artisan coffee and the freshest pastries and food.",

    image: "./images/ground-central.jpg",
    directions: "https://goo.gl/maps/6mtEZL4gUuBorRVS6",
  },
  {
    name: "Trash Museum",
    category: "see",
    neighborhood: "East Harlem",
    description:
      "Tucked in the far corner of an otherwise elegant neighborhood, on 99th Street between First and Second Avenues, lives one of the Sanitation Department's garages. Dark and naturally dingy, it's a place busy and polished New Yorkers would typically pass by without a second glance",

    image: "./images/trash-museum.jpg",
    directions: "https://goo.gl/maps/rJH3ohdBe95EWH2e8",
  },
  {
    name: "Russ & Daughters",
    category: "eat",
    neighborhood: "Lower East Side",
    description:
      "Family-owned shop offering high-end smoked fish, caviar & New York-style specialty foods since 1914.",

    image: "./images/russ-and-daughters.jpg",
    directions: "https://g.page/russanddaughters?share",
  },
  {
    name: "Staten Island Ferry",
    category: "explore",
    neighborhood: "battery park",
    description:
      "The Staten Island Ferry is one of the most iconic attractions in New York City for tourists. The Ferry, which connects Lower Manhattan with Staten Island, runs frequently, 365 days a year. A ride with the ferry is free and the view you get is absolutely amazing. Considering that there are many cruises available that you pay a lot of money for in Manhattan, this is a great budget-friendly option to take the skyline in from the water.",

    image: "./images/staten-island-ferry.jpg",
    directions: "https://goo.gl/maps/x5RVmn8hYTSVoeRt7",
  },
];

export default data;
