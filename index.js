const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    cats.push(name)
}

function destructivelyPrependCat (name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat () {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat (name) {
    const copyOfcats = cats.slice();
    copyOfcats.push (name)
    return copyOfcats
}

function prependCat (name) {
    const copyOfcats = cats.slice();
    copyOfcats.unshift (name)
    return copyOfcats
}

function removeLastCat () {
    const copyOfcats = cats.slice();
    copyOfcats.pop ()
    return copyOfcats
}

function removeFirstCat () {
    const copyOfcats = cats.slice();
    copyOfcats.shift ()
    return copyOfcats
}