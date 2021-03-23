const mongoose = require('mongoose');
const Product = require('./models/Product');

const User = require('./models/User');

const users=[
    {
        mail: 'fmrivero1@minsait.com',
        password: '1234',
        cart:[]
    },
    {
        mail: 'fmrivero2@minsait.com',
        password: '5678',
        cart:[]
    },
    {
        mail: 'fmrivero3@minsait.com',
        password: '9101',
        cart:[]
    },
    {
        mail: 'fmrivero4@minsait.com',
        password: '1121',
        cart:[]
    },
];
//https://www.rtings.com/mouse/reviews/best/by-usage/gaming
//https://www.theverge.com/21252193/best-gaming-mouse
//https://www.bestproducts.com/tech/gadgets/g342/best-gaming-mouse-for-every-budget/?slide=1
const products=[
    {
        name:"Razer Viper Ultimate Lightest Wireless Gaming Mouse: Fastest Gaming Switches - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons - 70 Hr Battery - Classic Black",
        price:"$140.56",
        description:"Meet the gaming mouse that’s powered by an ultra-fast wireless technology engineered for pro-grade performance. Featuring 20, 000 DPI resolution for extremely precise tracking, optical mouse switches that actuate at the speed of light, and up to 70 continuous hours of play.",
        image:"image1",
    },
    {
        name:"Logitech G703 Lightspeed Wireless Gaming Mouse W/Hero 25K Sensor, PowerPlay Compatible, Lightsync RGB, Lightweight 95G+10G Optional, 100-25, 600 DPI, Rubber Side Grips - Black",
        price:"$64.99",
        description:"Logitech G703 Lightspeed gaming mouse Meets the next-gen Hero 25K sensor. Go Pro with precise gameplay at 25, 600 Max DPI and zero smoothing, Plus enhanced wireless performance. 10x the battery efficiency of previous generation sensors means up to 35 hours of gameplay with Lightsync RGB enabled. Use Powerplay for infinite gameplay. A comfortable design meets advanced button technology for supreme comfort and crisp, clean clicks. G703 Lightspeed lets you play like the pros — and play to win.",
        image:"image2",
    },
    {
        name:"Razer Naga Pro Wireless Gaming Mouse: Interchangeable Side Plate w/ 2, 6, 12 Button Configurations - Focus+ 20K DPI Optical Sensor - Fastest Gaming Mouse Switch - Chroma RGB Lighting",
        price:"$118.95",
        description:"Adapt and Unlease the Razer Naga Pro",
        image:"image3",
    },
    {
        name:"Glorious Model O Gaming Mouse, Matte Black (GO-Black)",
        price:"$56.49",
        description:"High quality material manufactured by Glorious PC Gaming Race. The product will meet the expectations of gamers but also to computer enthusiasts seeking above all a qualitative product with mice Glorious PC Gaming Race model of gaming-mouse - Black, Matt.",
        image:"image4",
    },
    {
        name:"Corsair Scimitar Pro RGB - MMO Gaming Mouse - 16,000 DPI Optical Sensor - 12 Programmable Side Buttons - Black",
        price:"$74.99",
        description:"The SCIMITAR Pro RGB gaming mouse advances your game with the innovative, customizable key Slider macro button control system. A native 16000 DPI Optical sensor with 1 DPI resolution steps enables High accuracy performance. Onboard storage with up to three gaming profiles allows you to use your settings on the go. Loose button is the intended feature of this product.",
        image:"image5",
    },
    {
        name:"SteelSeries Rival 3 Gaming Mouse - 8,500 CPI TrueMove Core Optical Sensor - 6 Programmable Buttons - Split Trigger Buttons - Brilliant Prism RGB Lighting",
        price:"$44.99",
        description:"The rival 3 gaming mouse has the best performance in its class thanks to a tournament-grade true move core optical gaming sensor which is custom-engineered in collaboration with industry-leading sensor manufacturer pixart hyper-durable materials the lifespan of the mouse which is rated for 60 million clicks in a lightweight build a redesigned RGB system provides the brightest dynamic lighting on any steel series mouse making the rival 3 a standout in both style and performance.",
        image:"image6",
    },
    {
        name:"Logitech G305 Lightspeed Wireless Gaming Mouse, Black",
        price:"$56.19",
        description:"Play advanced without wires or limits. Logitech G305 LIGHTSPEED is a wireless gaming mouse designed for high-performance in your favorite PC games. G305 features the next-gen Logitech G HERO optical sensor with 200 to 12,000 DPI sensitivity for competition-level accuracy. LIGHTSPEED wireless technology gives you super-fast 1 millisecond performance that’s as fast as wired. With incredible power-efficiency, G305 stays powered and ready to play for up to 250 hours on a single included AA battery. Play anywhere with an ultra-portable, lightweight gaming mouse that weighs in at only 99 grams, is easy to take with you, and has built-in storage for the included USB wireless receiver. Use Logitech Gaming Software to quickly program 6 buttons with instant multi-action commands, DPI settings and more. G305 is the Lightspeed wireless mouse for all.",
        image:"image7",
    },
    {
        name:"Logitech G502 Lightspeed Wireless Gaming Mouse with Hero 25K Sensor, PowerPlay Compatible, Tunable Weights and Lightsync RGB - Black",
        price:"$155.49",
        description:"G502 is the best gaming mouse from Logitech G, completely redesigned from the inside out with Light speed wireless and power play compatibility so you can game faster and more accurately, The G502 light speed PC gaming mouse is built with superfast 1 ms wireless connectivity and a next gen Hero sensor delivering up to 25K DPI class leading performance and energy efficient up to 60 hours of uninterrupted gaming. 11 programmable buttons help you optimize game play with custom keyboards and macros. Primary buttons feature metal spring tensioning for Fast and crisp actuation. Six adjustable weights let you find the right mouse feel. Light Sync RGB gives you 16.8 million colors to create an exciting and immersive gaming environment. The hyper fast scroll wheel lets you speed through long menus and documents. Pair the G502 Wireless gaming mouse with the Logitech G Power play charging system (sold separately) for infinite charging. USB report rate: 1000 Hz (1ms). OS Compatibility: Windows 7 or later, Mac OS X 10.11 or later, Chrome OSTM.",
        image:"image8",
    },
    {
        name:"Razer DeathAdder V2 Gaming Mouse: 20K DPI Optical Sensor - Fastest Gaming Mouse Switch - Chroma RGB Lighting - 8 Programmable Buttons - Rubberized Side Grips - Classic Black",
        price:"$55.28",
        description:"With over 10 million Razer DeathAdders sold, the most celebrated and awarded gaming mouse in the world has earned its popularity through its exceptional ergonomic design. Perfectly suited for a palm grip, it also works well with claw and fingertip styles. The Razer DeathAdder V2 continues this legacy, retaining its signature shape while shedding more weight for quicker handling to improve your gameplay. Going beyond conventional office ergonomics, the optimized design also provides greater comfort for gaming—important for those long raids or when you’re grinding your rank on ladder.",
        image:"image9",
    },
    {
        name:"ZOWIE EC2",
        price:"$69.99",
        description:"Zowie’s EC2 is a wired gaming mouse that is built for claw or palm-style gaming. It has a more bulbous design than the FK2 mentioned below, making it an ergonomic option. Likewise, it doesn’t require drivers or software to use — just plug-and-play.",
        image:"image10",
    },
    {
        name:"CORSAIR DARK CORE RGB PRO SE",
        price:"$90",
        description:"Corsair’s Dark Core RGB Pro SE is loaded with features, including USB-C and Qi wireless charging, support for 2.4GHz wireless or Bluetooth, and great ergonomics.",
        image:"image11",
    },
    {
        name:"LOGITECH G502 HERO",
        price:"$45",
        description:"Logitech updated its iconic G502 gaming mouse to deliver even higher performance and more precise functionality than ever. Logitech G502 Hero high Performance Gaming mouse features the next generation Hero 16K Optical sensor, The highest performing and most efficient gaming sensor Logitech has ever made. An all-New lens and an updated tracking algorithm deliver ultra-precise tracking with no acceleration, smoothing, or filtering over the entire DPI range. Now, customize RGB mouse lighting to match your style and environment or sync to other Logitech G products. No matter your gaming style, It's easy to tweak G502 Hero to match your requirements, with custom profiles for your games, adjustable sensitivity from 200 up to 16, 000 DPI, and a tunable weight system that allows for tuning and balancing of up to five 3. 6G weights for just the right balance and feel.",
        image:"image12",
    },
    {
        name:"Razer Basilisk v2 Wired Gaming Mouse: 20K DPI Optical Sensor, Fastest Gaming Mouse Switch, Chroma RGB Lighting, 11 Programmable Buttons, Classic Black",
        price:"$93.77",
        description:"With the Razer Basilisk V2 your victory has never been this tailor-made Armed with a cutting-edge 20 000 DPI optical sensor decide how you want to dominate with its 11 programmable buttons and customizable scroll wheel resistance—perfect for executing advanced macros and functions",
        image:"image13",
    },
    {
        name:"ZOWIE FK2",
        price:"$60",
        description:"Zowie’s FK2 is a true ambidextrous wired gaming mouse made for right- and left-handed players. It features thumb buttons on both sides. This model doesn’t require drivers, so it’ll work as a plug-and-play device.",
        image:"image14",
    },
    {
        name:"STEELSERIES AEROX 3 WIRELESS",
        price:"$100",
        description:"The SteelSeries Aerox 3 Wireless is an IP54 water-resistant wireless gaming mouse. It weighs just 66 grams and features USB-C charging. The design borrows cues from the Rival 3.",
        image:"image15",
    },
    {
        name:"Razer DeathAdder Elite Gaming Mouse",
        price:"$49.95",
        description:"The Razer DeathAdder Elite gaming mouse has an ultra sensitive optical sensor with 16,000 dpi and 99.4% accuracy. The attractively priced wired offering also features ergonomic design, a lightweight body, seven programmable buttons, and RGB lighting. It's a comfortable mouse for all grip styles and hand sizes, and you won't have any accidental clicks. The mouse is favorite of PC Gamer and Wirecutter, too.",
        image:"image16",
    },
    {
        name:"SteelSeries Rival 600",
        price:"$71.55",
        description:"This gaming mouse from SteelSeries is the first to feature two optical sensors — one for traditional movement, and another to detect lift-off from the mouse’s surface, something competitive gamers occasionally do during intense gameplay. This additional sensor prevents your cursor from drifting off when you lift your mouse from your desk — a mistake that could negatively affect your online battles.",
        image:"image17",
    },
    {
        name:"HyperX Pulsefire",
        price:"$39.99",
        description:"The well-priced HyperX Pulsefire gaming mouse has a sleek design that has both left- and right-handed users in mind. Six programmable buttons, a braided cord, intuitive configuration software, and a sensitive but adjustable optical sensor make for a great buy under $50.",
        image:"image18",
    },
    {
        name:"Logitech G903 Gaming Mouse",
        price:"$115.93",
        description:"Gamers will love Logitech's high-end G903 gaming mouse. A solid contender for being the best of its kind, it features pro-grade performance in wireless and wired modes, ambidextrous design with customizable buttons and lighting (via a software suite), and an excellent 20-plus-hour battery life.",
        image:"image19",
    },
    {
        name:"SteelSeries Sensei 310 Gaming Mouse",
        price:"$44.99",
        description:"The Sensei mouse by SteelSeries' high-sensitivity sensor delivers tournament-grade performance, while bundled software allows users to adjust its sensitivity. The mouse's sleek design works well with both left- and right-handed gamers. A sweat-resistant silicone grip, RGB lighting, and customizable buttons are also among the gadget's key features.",
        image:"image20",
    },
];

const userDocuments= users.map(user=>new User(user));
const productDocuments= products.map(product=>new Product(product));

mongoose
  .connect('mongodb://localhost:27017/Mice_Website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const users = await User.find();
    const products= await Product.find();
		
		
    if (users.length) {
      await User.collection.drop();
    }
    if(products.length){
        await Product.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
    const products=await Product.insertMany(productDocuments);
    userDocuments[0].cart=[products[0]._id,products[1]._id,products[2]._id]
    console.log(userDocuments[0].cart)
    await User.insertMany(userDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());