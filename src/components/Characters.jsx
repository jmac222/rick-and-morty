import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

class Characters extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            characters: []
        }
    }


    async componentDidMount() {
        let url = 'https://rickandmortyapi.com/api/character'
        let result = null

        try {
            result = await axios(url, {
                headers: {
                    Accept: 'application/json'
                }
            })
        } catch (error) {
            console.log(error);
        }

        this.setState({characters: result.data.results})
    }



    render(){

        const {characters} = this.state

        let mapArray = characters.map(character => {

            return <div className='character'>
                <h1>{character.name}</h1>
            </div>
        })

        return <div className='characters-container'>
            
            {mapArray}
        </div>
    }
}
export default Characters