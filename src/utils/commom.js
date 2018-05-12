export const generatedUUID = () => {
    const generate = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return generate() + generate() + '-' + generate() + '-' + generate() + '-' + generate() + '-' + generate() + generate() + generate();
}


export const isEnterPressed = (e) => {
    const key = e.keyCode || e.which

    return !!key && key === 13
}