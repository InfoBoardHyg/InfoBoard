import busView from './busView.js';
export default function busFetch() {
    // Fetch bus data
    fetch('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data.MultiDepartureBoard.Departure[0]);

            for(let i = 0; i < 5; i++) {
                let bus = {
                    name: data.MultiDepartureBoard.Departure[i].name,
                    time: data.MultiDepartureBoard.Departure[i].time,
                    stop: data.MultiDepartureBoard.Departure[i].stop
                }
                busView(bus);
            }
                
            
            let busStops = []
            // let result = busName +' '+ busStop[0].name +' ' + busStop[0].arrTime;

        })
        .catch(error => {
            console.log(error);
        });
    }
