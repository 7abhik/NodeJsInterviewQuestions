function annagram(first, second) {
    if (first.length !== second.length)
        return false
    let objone = {}
    let objtwo = {}
    for (let i = 0; i < first.length; i++) {
        if (objone[first[i]]) {
            objone[first[i]] += 1
        } else {
            objone[first[i]] = 1
        }

        if (objtwo[second[i]]) {
            objtwo[second[i]] += 1
        } else {
            objtwo[second[i]] = 1
        }
    }
    console.log(objone, objtwo)

    for (let key in objone) {
        if (objone[key] !== objtwo[key])
            return false
    }
    return true
}


console.log(annagram("abcdded", "dddabce"))