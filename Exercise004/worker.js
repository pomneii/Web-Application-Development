let interval;

onmessage = (event) => {
    
    if (event.data === 'start') {
        const colors = [
            ['red', 'cyan'],
            ['white', 'green'],
            ['white', 'blue'],
            ['pink', 'green'],
            ['green', 'red'],
            ['cyan', 'red']
        ];

        let colorIndex = 0;
        
        interval = setInterval(() => {
            const dateTime = new Date();
            const colorPair = colors[colorIndex % colors.length];
            postMessage({ dateTime, colorPair });
            colorIndex++;
        }, 1000);

    } else if (event.data === 'stop') {
        clearInterval(interval);
    }
};
