import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {photos:null};
  }
  
  componentDidMount() { 
      axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=72157660115185712&user_id=137290658%40N08&format=json&nojsoncallback=1') 
      .then(({data}) =>  	
        {   console.log(data.photoset);
          this.setState({
          photos:data.photoset.photo
          });
        }
      ) 
      .catch(function (error) { 	
        console.log(error); 
      }); 
    } 

  render() {
    if(!this.state.photos){
			return (
					<div>
						<img src={logo} className="App-logo" alt="loading" />
						<br/>
						Loading...
					</div>
				);
		}
    return (
      <List>
        <FlatList 
          data = {this.state.photos}
          renderItem= {({ item }) => 
            {
              console.log(item);
              
            }

          }
        />
      </List>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;