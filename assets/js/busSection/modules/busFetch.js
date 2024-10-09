import busView from './busView.js';
export default function busFetch() {
    // Fetch bus data
    fetch('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data.MultiDepartureBoard.Departure[0]);

            
                busView(data);
            

        })
        .catch(error => {
            console.log(error);
        });
    }
