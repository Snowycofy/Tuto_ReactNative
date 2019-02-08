import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, SafeAreaView } from 'react-native'
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmList from './FilmList';
//import {connect} from 'react-redux'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.page = 0 
        this.totalPages = 0 
        this.state = {
          films: [],
          isLoading: false
        }
        this._loadFilms= this._loadFilms.bind(this)
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {
            //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilms()
        })
        
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("DetailDeFilm", {idFilm: idFilm})
    }


    _loadFilms() {
        //console.log("Contenu de test : " + this.test)
        if (this.searchedText.length > 0) {
          this.setState({ isLoading: true })
          getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                //this._films = data.results
                //this.forceUpdate()
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    //films: data.results,
                    films: [ ...this.state.films, ...data.results ],
                    isLoading: false
                })
            })
        }

        //console.log(data));
    }

    _searchTextInputChanged(text) {
        this.searchedText = text;
    }

    _displayLoading() {
        if (this.state.isLoading)
        {
            return (
                <View style= {styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render() {
        //console.log(this.props)
        return(
            <SafeAreaView style={styles.main_container}>
            <View style={ styles.main_container }>
                <TextInput style={[styles.textinput, styles.textinput2]} 
                placeholder='Titre du film'
                onChangeText={(text) => this._searchTextInputChanged(text)}
                onSubmitEditing={() => this._searchFilms()}
                />
                <Button title='Rechercher' onPress={() => this._searchFilms()}/>
                {/*
                <FlatList
                    //data={this._films}
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    //renderItem={({item}) => <Text>{item.title}</Text>}
                    renderItem={({item}) => <FilmItem film={item}
                    isFavoriteFilm={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1)? true : false} 
                    displayDetailForFilm={this._displayDetailForFilm} 
                    extraData={this.props.favoritesFilm}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                    if (this.page < this.totalPages) { 
                        this._loadFilms()
                    }
                }}
                />
                */}
                <FilmList
                    films={this.state.films}
                    page={this.page}
                    totalPages={this.totalPages}
                    loadFilms={this._loadFilms}
                    navigation={this.props.navigation}
                    //test={"props du component FilmList"}
                    favoriteList={false}
                    />
               {this._displayLoading()}
            </View>
            </SafeAreaView>
        )
        {
            /*
            Exemple d'utilisation de flex
            return(
            <View style={{ flex: 1, flexDirection: 'column',  backgroundColor: 'yellow' }}>
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 2, backgroundColor: 'green' }}></View>
                <View style={{ flex: 3, backgroundColor: 'blue' }}></View>
            </View>)
            */
        }

    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 5,
        //justifyContent: 'space-around',
        //alignItems: 'center'
    },
    textinput: { 
        marginLeft: 5, 
        marginRight: 5, 
        height: 50, 
        //width: 300,
        //borderColor: '#000000', 
        //borderWidth: 1, 
        //paddingLeft: 5
    },
    textinput2: { 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

{/*const mapStateToProps = (state) =>
    {
      return {
        favoritesFilm : state.favoritesFilm
      }
    }


export default connect(mapStateToProps)(Search)

*/}

export default Search