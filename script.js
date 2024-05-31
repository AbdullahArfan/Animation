const main = document.querySelector(".main");
// const allcard = document.querySelector("allcard");

let url = "./list.json";


const  elementCreator = (elementName, cName = "")=>{
    const tag = document.createElement(elementName);
    tag.className = cName;
    return tag;
}

const headerCreator = (h, title)=>{
    const head = elementCreator(h);
    head.innerHTML = title;
    return head;

}

const imageCreator = (src)=>{
    const pic = elementCreator("img");
    pic.src = src;
    return pic;
}

const imageSection = (imgUrl)=>{ 
    const div = elementCreator("div", "im");
    const image = imageCreator(imgUrl);
    div.append(image);
    return div;

}

const nav = (inner)=>{
    const navbar = elementCreator("div", "nav");
    // navbar.className = clas; 
    // navbar.innerHTML = inner;
    if(inner){
        navbar.innerHTML = inner;
    }
    return navbar;
}
// const navbar = nav("NetFlix");



const card = (item) => {
    const card = elementCreator("div", "card");
    const image = imageSection(item.imgURL);
    const information = elementCreator("div", "info");
    const title = headerCreator("h4", item.title);
    const details = headerCreator("p",item.details);   
    information.append(title, details);
    card.append(image, information);
    // allcard.append(card);
    return card;
}

// const allCard = (card)=>{
//     const allcard = elementCreator("div","allcard");
//     allcard.append(card);
//     return allcard;
// }
// main.append(navbar);

fetch(url)
.then(req=>{
    console.log(req);
    return req.json()
})
.then(json=>{
    json.forEach(element => {
        const mainCard = card(element);
        main.append(mainCard);
    })
})