const candidate = Object.create({},{
    district:{
        value: "4th Tennessee"
    },
    biography:{
        value: "Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. Cortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged."
    },
    missionStatement:{
        value:"Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. Cortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged."
    }
})

const volunteers = Object.create({},{
        fname: {
            value: "Dave"
        },
        lname: {
            value: "Smith"
        },
        email: {
            value: "dave.smith7@gmail.com"
        },
        address:{
            value: "not real place"
        },
        phone:{
            value: "555-555-5555"
        },
        availability:{
            value:"Tuesday and Thursdays after 6PM"
        },
        positions:{
            value:"answering calls"
        }
})

const statements = Object.create ({},{
    
    Taxes:{
        value: "Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. \nCortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged.",
    },
    
    Jobs:{
        value: "Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. \nCortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged.",
    },
    
    Infrastructure:{
        value: "Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. \nCortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged.",
    },
    
    HealthCare: {
        value: "Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. \nCortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged.",
    },
    
    Crime: {
        value: "Beans skinny doppio half and half, acerbic ut macchiato black half and half. Grinder barista trifecta variety est aftertaste cream aged organic coffee mocha. Dark medium iced crema to go, café au lait qui, caramelization mocha siphon est redeye. Robusta extra, mug, half and half breve barista french press blue mountain. \nCortado, shop breve steamed, arabica, as, at viennese eu barista whipped. Carajillo half and half aroma, irish, roast, spoon beans steamed fair trade shop. Black, at french press, grinder, at skinny extraction extra rich. Crema café au lait con panna, cappuccino, percolator, variety cup and steamed trifecta aged.",
    }

})

const images = Object.create({},{
    imageOne:{
        writable: false,
        value: "https://placeimg.com/400/400/people"
    },
    imageTwo:{
        writable: false,
        value: "https://placeimg.com/400/400/people"
    },
    imageThree:{
        writable: false,
        value: "https://placeimg.com/400/400/people"
    },
    imageFour:{
        writable: false,
        value: "https://placeimg.com/400/400/people"
    },
})

const links = Object.create({},{
    linkOne:{
        value: "#"
    },
    linkTwo:{
        value:"https://sos.tn.gov/products/elections/register-vote"
    }
})

let calendar = []


function makeEvent(name, times, dates){
    /*  
    *   some parsing of input may be required
    *   due to unspecified input styling guide
    *   and due to arguments being sent as a string
    */  
    let event = Object.create({},{
        title:{
            value: name
        },
        time:{
            value: times
        },
        date:{
            value: dates
        }
    })
    calendar.push(event)
}
makeEvent("Name of event", "9:00-10:00", "04/14/18")