let interval;

onmessage = (event) => {
    if (event.data === 'start') {
        interval = setInterval(() => {
            const dateTime = new Date();

            const colorPair = [
                `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random colors
                `#${Math.floor(Math.random() * 16777215).toString(16)}`  // Random colors
            ];

            postMessage({ dateTime, colorPair });
        }, 1000);
    } else if (event.data === 'stop') {
        clearInterval(interval);
    }
};
