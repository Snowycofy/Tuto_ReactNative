import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            film: undefined,
            isLoading : true
        }
    }

    _displayLoading() {
        if( this.state.isLoading)
        {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }

    }

    componentDidMount() {
       //console.log("Composant FilmDetail monté")
       getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
           this.setState({
               film: data,
               isLoading: false
           })
       })
    }

    _displayFilm() {
        if (this.state.film != undefined)
        {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Text> {this.state.film.title} </Text>
                </ScrollView>
            )
        }
    }


    render() {
        console.log("Composant FilmDetail rendu")
        return (
        <View style={styles.main_container}>
            {this._displayLoading()}
            {this._displayFilm()}
        </View>
        )
        }
    }
  
  const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1,
    }
  })


export default FilmDetail