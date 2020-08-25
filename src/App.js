import React from 'react';
import img from '../src/images/covid.png';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'
class App extends React.Component {
    state = {
        data: {},
        country:'',
    }


    async componentDidMount(){
        const dataIn = await fetchData();
        this.setState({ data: dataIn })
    }

    handleCountryChange = async (country) => { 
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country: country})
    }
    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={img} alt="COVID-19"/>
                <Cards data={data}/>                
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;