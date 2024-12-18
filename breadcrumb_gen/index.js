const generateBC = (url, separator) => {
    const crumb = url.split("/");
    const elements = ['<a href="/">HOME</a>'];
    let currentLink = "";
    for (let i = 1; i < crumb.length; i++) {
        const link = crumb[i];
        currentLink += "/" + link;
        let nameArr = link.split("-");
        let name = nameArr.join(" ");
        if (name.length > 30) {
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
        let activeName = elements[elements.length - 1].match(/>([^<]+)</g)[0];
        elements[elements.length - 1] = `<span class="active"${activeName}/span>`;
    }
    return elements.join(separator);
}