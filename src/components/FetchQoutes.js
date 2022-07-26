
export default async function  FetchQoutes({ SetQoute, DisplayQoutes }) {
    const API_ROUTE = `https://random-qoute-generator-api.herokuapp.com/Qoutes`
        await fetch(API_ROUTE)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                SetQoute(data)
                DisplayQoutes(data)

            }).catch((error) => {
                console.error(error);
                DisplayQoutes([{ q: "Server is down,but you do not have to be", a: "Denis Imamovic" }])
            });
        //console.log(data)
}
