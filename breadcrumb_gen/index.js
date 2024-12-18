const removeHttps = (url) => {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
};

const modifyLastElement = (arr) => {
    const lastElement = arr[arr.length - 1];
    const innerHTML = lastElement.match(/>(.*?)</)[0];
    arr[arr.length - 1] = `<span class="active"${innerHTML}/span>`;
    return arr;
};

const generateBC = (url, separator) => {
    console.log(url);
    const crumb = removeHttps(url).split("/");
    const elements = ['<a href="/">HOME</a>'];
    let currentLink = "";
    for (let i = 1; i < crumb.length; i++) {
        const link = crumb[i];
        currentLink += "/" + link;
        let nameArr = link.split("-");
        let name = nameArr.join(" ");
        if (link.split(/[.#?]/)[0].length > 30) {
            const words = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
            name = nameArr.reduce((acc, el) => words.includes(el.toLowerCase()) ? acc : acc + el[0], "");
        }
        name = name.toUpperCase();
        let element = `<a href="${currentLink}/">${name}</a>`;
        if (i == crumb.length - 1) {
            name = name.split(/[.#?]/)[0]
            element = `<span class="active">${name}</span>`;
        }
        elements.push(element);
    }
    if (elements[elements.length - 1].includes(">INDEX<")) {
        elements.pop();
    }
    return modifyLastElement(elements).join(separator);
}

console.log(generateBC("agcpartners.co.uk/eurasian-and-bioengineering-bed-surfer-the-paper/most-viewed/funny.asp?rank=recent_first&hide=sold"))