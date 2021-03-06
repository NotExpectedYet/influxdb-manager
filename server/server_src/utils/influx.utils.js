function createInfluxOptions(url = undefined, username = undefined, password = undefined, database = undefined) {
    if(!url){
        throw new Error("No URL provided!")
    }
    let options = {
        username: username,
        password: password,
        host: "10.50.0.15",
        port: 8086,
        database
    }
    const parsed_url = new URL(url)

    // // Strip out http / https
    if (parsed_url.protocol === "http:") {
        options.protocol = "http";
        options.port = 80;
    } else if (parsed_url.protocol === "https:") {
        options.protocol = "https";
        options.port = 443
    }

    if (parsed_url.port !== "") {
        options.port = parseInt(parsed_url.port);
    }

    options.host = parsed_url.hostname;

    return options;
}

function createInfluxURL(protocol, host, port) {
    if (port === 443 || port === 80) {
    return `${protocol}://${host}`
    }
    return `${protocol}://${host}:${port}`
}

module.exports = {
    createInfluxOptions,
    createInfluxURL
}
