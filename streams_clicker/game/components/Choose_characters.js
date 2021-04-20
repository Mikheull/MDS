import React, {Component} from 'react';
const characters_data = require('../config/characters.json')

class Choose_characters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters : [],
            visiblity: true
        }
        
        this.chooseChar = this.chooseChar.bind(this);
    }
    
    
    componentDidMount(){
        const self = this;
        self.setState({characters: characters_data});
    }
  
    componentWillUnmount() {
  
    }

    chooseChar(character) {
      const artist = this.search(character, characters_data);
      this.props.updateCharacter(artist)
      this.setState(state => ({      
          visiblity: !state.visiblity
      }));
    }

    search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].key === nameKey) {
                return myArray[i];
           }
      }
    }


    render() {
        let _characters = this.state.characters.map((data, key) =>{
            let img = `images/characters/${data.icon}`

            return <div className="bg-white shadow-lg rounded p-3" key={data.key}>
            <div className="group relative">
              <img className="w-full md:w-48 block rounded" src={img} alt="" />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" onClick={() => { this.chooseChar(data.key) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-2">
              <h3 className="text-gray-800 text-lg font-extrabold">- {data.name} -</h3>
            </div>
          </div>
        })

        return (
            <div className={(this.state.visiblity) ? 'mx-auto h-screen w-screen pregame flex items-center justify-center fixed top-0 z-10' : 'hidden'}>
                
                <div className="text-white text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-8">Choose your character</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                        {_characters}
                    </div>
                </div>

            </div>
        )
    }
}

export default Choose_characters;