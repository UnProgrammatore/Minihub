export function getKey(address){
    return `fav:${address}`;
}

export function isFav(address){
    let favRes = window.localStorage.getItem(getKey(address));
    if(favRes) // Manage undefined
        return true;
    return false;
}