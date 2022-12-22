function roundPrice(price) {
    return `${price}`.slice(0, 6);
}

export default function getRandomPrice() {
    const price = Math.random() / 2 + 1;

    const buy = roundPrice(price + 0.15);
    const sell = roundPrice(price);

    return {buy, sell};
}
