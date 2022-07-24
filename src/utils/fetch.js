import { API_URL } from '../Constants'

export async function fetch_api(url, method, body) {
    const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    const request = await fetch(API_URL + url, {
        method: method,
        body: body,
        headers: headers
    });
    const data = await request.json();
    return data;
}