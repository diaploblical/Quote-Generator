export const colorSetter = () => {
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16).slice(-6);
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    return randomColor;
}

export const hexToRgb = hex => {
    const rgb = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    return rgb;
}