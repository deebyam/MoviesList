import React, {Component} from 'react'
import Loader from '../../components/Loader';


class SingleSeries extends Component{
    state = {
        show: null,
        GenreList: []

    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => this.setState({show: json}));
    }
    handleClick = (e) => {
        let { history } = this.props;
        history.push({
            pathname:'/',

        })
        
    }
    render() {

        const { show } = this.state;
        var header_style = {
            fontStyle: 'italic',
            fontSize: 20,
        }
        console.log(show);
        var li_style = {
            fontStyle:'Italic',
            flex:'50 px'
            
        }

  
    
        return (
        
            <div>
            { show === null && <Loader />}
            
            {
                show !== null
                &&
                <div>
                <p style={header_style}>{show.name}</p>
                <p>Shown on - {show.webChannel == null ?  'N/A' : show.webChannel.name }  

                    {'    **********   '} Started on {show.premiered}</p>
                    <p>Episodes - {show._embedded.episodes.length}</p>
                     <p  >Genres: {show.genres.map(message =>(
                         <li style={li_style}>{message}</li> 
                                              ))}
                     </p>  
                    <p>
                    <img alt="" src={show.image == null ? show.type : show.image.medium} />

                    </p>
                    <p>
                         <button onClick={this.handleClick.bind(this)}>Back to search....</button>
                    </p>
                       
                </div>
            }   
            </div>
        )
    }
}

export default SingleSeries;