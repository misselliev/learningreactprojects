import React from 'react';
import apiConfig from './apiKeys';

class WeekContainer extends React.Component {
    state = {
        fullData: [],
        dailyData: []
    }
    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&id=524901&APPID=${apiConfig.openWeatherKey}`;

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("15:00:00"));
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            });
    }

    render(){
        return (
            <main>
                <h1>Hello World!</h1>
            </main>
        )
    }
}

export default WeekContainer; 