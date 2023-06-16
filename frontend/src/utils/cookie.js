import cookie from 'js-cookie';

const setCookie = (name, value) => {
    cookie.set(name, value, { expires: 7 })
}

const getCookie = (name) => {
    return cookie.get(name);
}

const removeCookie = (name) => {
    cookie.remove(name);
}

export {
    setCookie,
    getCookie,
    removeCookie
}