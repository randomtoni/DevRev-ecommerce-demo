export default class DevUsers {

    public static getList = async () => {
        const url = "https://api.devrev.ai/dev-users.list"
        const headers = {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_DEVREV_ADMIN_TOKEN}`
        }
        const res = await fetch(url, {  
            method: "GET",
            headers: headers
        })
        return await res.json()
    }
}