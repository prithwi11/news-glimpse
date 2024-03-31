export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const currentPosition = {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                };
                resolve(currentPosition);
            }, (error) => {
                reject(error);
            });
        } else {
            reject(new Error('Geolocation not supported'));
        }
    });
};

