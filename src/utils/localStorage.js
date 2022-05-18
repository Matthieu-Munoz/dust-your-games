/**
 * Set an item in localStorage composed of a key, its value and a ttl
 * The expiry is set from the current date + the ttl
 * @param {string} key to find inside the localStorage
 * @param {any} value to store inside the localStorage
 * @param {int} ttl expiry time to keep inside the localStorage
 */
export function setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}
/**
 * Get an item in localStorage with its key
 * If its expiry date is reached, return null.
 * Otherwise return the item
 * @param {string} key to find inside the localStorage
 * @returns 
 */
export function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.value
}