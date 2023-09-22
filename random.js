    const rarities = ['Hyper','Super','Ultra','Mythic','Legendary','Epic','Rare','Unusual','Common']
    const noobArray = []
    const petalList = "Spider Egg, Turtle, Pill, Nitro, Honey"
    const gayArray = petalList.split(", ")
    for (const rarity of rarities) {
         let nub = ''
         for (const petal of gayArray) {
        if (petal != "Spider Egg") {
            nub = nub + `"${petal}_8":1,`
        } else {
            nub = nub + `"${petal}_8":1,`
        }
    }
    if (rarity != "Common") {
        const ass = `"${rarity}":{`+nub+"},"
        console.log(ass)
        noobArray.push(ass)
    } else {
        const ass = `"${rarity}":{`+nub+"}"
        console.log(ass)
        noobArray.push(ass)
    }
}
console.log(noobArray)
