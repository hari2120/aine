
export const userName = (type, payload) => {
    console.log("actions", payload);
    return {
        type,
        payload
    }
}