import React, {Component} from 'react'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'
import Intro from '../../components/Intro'

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
     }
   
    onSeriesInputChange = (e) => {
        this.setState({seriesName: e.target.value, isFetching: true})

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series: json, isFetching: false}));

     }
     

    render() {
        const{series, seriesName, isFetching} = this.state;

        return (
            <div> 
                <Intro message="Search for your favorite shows in online TV library. Then click on link to view details."/>
               
                <div>
                    <input autoFocus
                        value={seriesName}
                        type="text" onChange={this.onSeriesInputChange}/>
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === '' && <p></p>
                }
                {
                     !isFetching && series.length === 0 && seriesName.trim() !== ''  &&  <p>No TV series have found</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
          
        )
    }
}

export default Series;
