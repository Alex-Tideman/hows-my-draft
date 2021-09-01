export const itemHeight = 260; // Flat height of card
export const endDeg = 160; // How far to rotate (180 is full flat)
export const degMultiplier = 20; // Increase for more scrolling (less items). Decrease for more items
export const scrollItemHeight = endDeg * degMultiplier;

export const itemWidth = 1.666 * itemHeight;
export const tabWidth = .392 * itemWidth; // Increase for bigger tab if width iis
export const topWithoutTab = itemWidth - tabWidth - 10;