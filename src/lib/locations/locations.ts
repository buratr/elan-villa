// Dynamically import images
const importImages = async () => {
    const images = [];
    for (let i = 1; i <= 27; i++) {
        const location = await import(`@lib/locations/Quartiers/Quartiers-${i}.png`);
        images.push(location.default);
    }
    return images;
};

export const locations = await (async () => {
    const images = await importImages();
    return images.map((location, index) => ({
        title: `Quartiers ${index + 1}`,
        imageSrc: location,
        select: false,
    }));
})();
