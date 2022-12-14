// just a bit of code i wrote a while ago to avoid copius amounts of annoying boilerplate

export class Keyboard {
    constructor(element) {
        this.element = element ? element : document
        this.key = ""
    }

    keydown(key, callback) {
        this.key = key
        key = key ? key : "" || []
        callback = callback ? callback : () => console.log(key)
        this.element.addEventListener('keydown', function (e) {
            for (let n = 0; n < key.length; n++) {
                if (e.key == key[n]) {
                    if (typeof callback == 'function') {
                        return callback()
                    } else return console.error("please provide a function as a callback")
                }
            }
        })
    }

    keyup(key, callback) {
        this.key = key
        key = key ? key : "" || []
        callback = callback ? callback : () => console.log(key)
        this.element.addEventListener('keyup', function (e) {
            for (let n = 0; n < key.length; n++) {
                if (e.key == key[n]) {
                    if (typeof callback == 'function') {
                        return callback()
                    } else return console.error("please provide a function as a callback")
                }
            }
        })
    }

    press(keyWanted) {
        var mds = { ctrlKey: false, shiftKey: false, altKey: false },
            callback = () => console.log(keyWanted),
            modifiers = []

        if (typeof arguments[1] == 'array') { modifiers = arguments[1] }
        if (typeof arguments[1] == 'function') { callback = arguments[1] }
        if (typeof arguments[2] == 'array') { modifiers = arguments[2] }
        if (typeof arguments[2] == 'function') { callback = arguments[2] }

        for (let n = 0; n < modifiers.length; n++) {
            modifiers[n] === 'ctrl' ? mds.ctrlKey = true : null
            modifiers[n] === 'shift' ? mds.shiftKey = true : null
            modifiers[n] === 'alt' ? mds.altKey = true : null
        }

        var keyEvent = new KeyboardEvent("keydown", { key: keyWanted, repeat: false, target: this.element, char: keyWanted, ctrlKey: mds.ctrlKey, shiftKey: mds.shiftKey, altKey: mds.altKey })
        this.element.dispatchEvent(keyEvent)
        this.element.innerText = keyWanted
        console.log(keyEvent)

        if (typeof callback == 'function') {
            return callback()
        } else return console.error("please provide a function as a callback")
    }

    release(keyWanted, callback) {
        var mds = { ctrlKey: false, shiftKey: false, altKey: false },
            callback = () => console.log(keyWanted),
            modifiers = []

        if (typeof arguments[1] == 'array') { modifiers = arguments[1] }
        if (typeof arguments[1] == 'function') { callback = arguments[1] }
        if (typeof arguments[2] == 'array') { modifiers = arguments[2] }
        if (typeof arguments[2] == 'function') { callback = arguments[2] }

        for (let n = 0; n < modifiers.length; n++) {
            modifiers[n] === 'ctrl' ? mds.ctrlKey = true : null
            modifiers[n] === 'shift' ? mds.shiftKey = true : null
            modifiers[n] === 'alt' ? mds.altKey = true : null
        }

        var keyEvent = new KeyboardEvent("keyup", { key: keyWanted, repeat: false, target: this.element, char: keyWanted, ctrlKey: mds.ctrlKey, shiftKey: mds.shiftKey, altKey: mds.altKey })
        this.element.dispatchEvent(keyEvent)
        this.element.innerText = keyWanted
        console.log(keyEvent)

        if (typeof callback == 'function') {
            return callback()
        } else return console.error("please provide a function as a callback")
    }

    keymap(keyArr, type, callbackArr) {
        type = type ? type : "keydown" || "keyup"
        keyArr = keyArr ? keyArr : []
        callbackArr = callbackArr ? callbackArr : [() => console.log(keyArr)]
        for (let n = 0; n < keyArr.length; n++) {
            if (type == "keydown") {
                this.keydown(keyArr[n], callbackArr[n])
            }
            if (type == "keyup") {
                this.keyup(keyArr[n], callbackArr[n])
            }
        }
    }
}