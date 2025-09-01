// .................... Event propagation & Event bubbling .....................

// event propagation aik aisa consept hai jis main  events bari bari trigger (bubble) hoty hain child to parent. for example agar button, inner-child or main child pe events lgy hue hain to agar hm button k event ko trigger krty hain to event bubble hoga tb tk jb tk hm most outer element pe na puhnch jayein.

// event bubbling ko rokny k liye hm e.stopPropagation ko use krty hain

let mainDiv = document.querySelector('.mainDiv');
let innerDiv = document.querySelector('.innerDiv');
let btn = document.querySelector('.btn');

function fn(e) {
    // e.stopPropagation()
    alert(`
        current-target: ${e.currentTarget.tagName}
        target: ${e.target.tagName}
        this.tagName: ${this.tagName}
        executed: ${e.currentTarget.className}()
    `)
}


// event bubbled from child to perent
mainDiv.addEventListener('click', fn)
innerDiv.addEventListener('click', fn)
btn.addEventListener('click', fn)


// ................. event capturing ....................
// events will be triggered in reverse orders from parent to child click on button and see the difference

// mainDiv.addEventListener('click', fn, { capture: true })
// innerDiv.addEventListener('click', fn, { capture: true })
// btn.addEventListener('click', fn, { capture: true })




// ................ event delegation .................

// Instead of adding event listeners to each child element individually, we add one event listener to a common parent element, and use event bubbling to detect which child was clicked — this technique is called event delegation.

let ul = document.querySelector('.ul')
ul.addEventListener('click', (e) => {
    window.location.href = `${e.target.innerHTML}`
})