import React from 'react'; 
import ReactDOM from 'react-dom'; 

// we extend to allow us to be able to pull a lot of built in functionality
// from React.Component into our class  
// we are subclassing 
// we are borrowing functionality from React.Component  

// a class has in js has one method assigned to it 
// this is called render ()  method. 

class App extends React.Component {

    // constructor is JS specific not React specific. 
    // any time a new instance of app component, 
    // constructor is immediately called. 
    // this is where we will initialize State. 

    constructor(props) {
        super(props); // super is a reference to the Parents constructor function

        // initialize State obj. 
        this.state = { lat: null, errorMessage: ''}; 
        // null bec we assume we don't know the value as of now.
        
        window.navigator.geolocation.getCurrentPosition(
            (position ) => {

            //to update our state obj, we used setState!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
     
        );

    }

    // React says we have to define render. 
    //this is an example of conditional rendering. 
    render () {

        if (this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
        return <div> Latitude: {this.state.lat}</div>;
        }

        return <div> Loading! </div>;
    }
}

    //     return (
    //     <div> 
    //         Latitude: {this.state.lat} 
    //         <br></br>
    //         Error: {this.state.errorMessage}
    //     </div>
        
    //     ); 
    // }


ReactDOM.render(<App />, document.querySelector('#root')); 
