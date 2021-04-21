import React, {Component} from 'react';

import Head from 'next/head'
import '../styles/sass/style.scss'
import Choose_characters from '../components/Choose_characters'
import StreamLine from '../components/StreamLine'

const streams_data = require('../config/streams.json')

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      character_selected: [],
      streams : [],
      streamsData : [],
      money: 0
    }

    this.updateCharacter = this.updateCharacter.bind(this);
    this.updateMoney = this.updateMoney.bind(this);
  }
    
  componentDidMount(){
    const self = this;
    self.setState({streams: streams_data});
  }

  componentWillUnmount() {

  }

  updateCharacter(value) {
    this.setState({ character_selected: value });
    
    const rawdata = []
    this.state.streams.forEach(element => {
      rawdata.push(
        {
          key: element.key,
          item_buy: element.item_default,
          coefficient: element.coefficient,
          delay: element.delay,
          level: 1,
          is_delaying: false,
          manager_buy: false,
          manager_price: element.manager.price,
          price: element.intial_price,
          intial_price: element.intial_price,
          revenue: element.intial_revenue,
          intial_revenue: element.intial_revenue,
        }
      )
    });
    this.setState({streamsData: rawdata});
  }

  updateMoney(value) {
    this.setState({ money: value });
  }
  
  render() {
    let _streams = this.state.streams.map((data, key) =>{
      return <StreamLine key={data.key} pos={key} data={data} streamsData={this.state.streamsData} money={this.state.money} updateMoney={this.updateMoney}/>
    })

    let img = `images/characters/${(this.state.character_selected) ? this.state.character_selected.icon : ''}`

    return (
		<div className="relative">
			<Head>
			<title>Streams Clicker</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
			<link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap" rel="stylesheet" /> 
			</Head>
	
			<div className="">
				<Choose_characters updateCharacter={this.updateCharacter}/>

				<div className="bg-white rounded p-3 md:w-1/3 w-full mx-auto my-4 flex flex-col items-center justify-center">
					<div className="relative top-0 h-32 w-full">
						<img className="w-full h-32 block rounded mx-auto absolute z-10" src="images/icons/cd-player.svg" alt="" />
						<img className="animate-spin block rounded-full absolute top-0 profil_img" src={img} alt="" />
					</div>
					
					<div className="flex items-center">
						<h3 className="sp_font text-primary-400 text-lg font-extrabold">{(this.state.character_selected) ? this.state.character_selected.key : ''}</h3>
						<span className="mx-2 text-primary-500">|</span>
						<h4 className="sp_font text-primary-400 text-lg font-extrabold flex items-center">{this.state.money} <img className="w-4 ml-2" src="images/icons/headphones.svg" alt="" /></h4>
					</div>
				</div>

				<div className="md:w-1/3 w-full mx-auto">
					{_streams}
				</div>
			</div>
		</div>
    );
  }
}

export default Home;
