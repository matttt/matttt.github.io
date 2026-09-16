if (window !== window.top) {
    const duration = 10000;
    let startedAt;
    let nails;

    window.setup = function () {
        createCanvas(innerWidth, innerHeight);
        background(255);
        currentIdx = 0;
        const diameter = height * .95;
        nails = pointCoords.map(([x, y]) => [
            width / 2 + (x - .5) * diameter,
            height / 2 + (y - .5) * diameter
        ]);
        noFill();
        stroke(0);
        strokeWeight(.5);
        circle(width / 2, height / 2, diameter);
        fill(0);
        for (const [x, y] of nails) circle(x, y, 2);
        startedAt = millis();
    };

    window.draw = function () {
        const total = Math.min(2000, stepList.length - 1);
        const target = Math.min(total, Math.floor((millis() - startedAt) / duration * total));
        strokeWeight(.5);
        stroke(0, 100);
        // Add each segment once, in the original thread order.
        for (; currentIdx < target; currentIdx++) {
            const from = nails[stepList[currentIdx]];
            const to = nails[stepList[currentIdx + 1]];
            if (from && to) line(from[0], from[1], to[0], to[1]);
        }
        if (currentIdx === total) noLoop();
    };

    // Keyboard step controls belong to the standalone helper.
    window.keyPressed = function () {};
    window.keyReleased = function () {};
}
