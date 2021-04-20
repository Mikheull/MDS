import React, {Component} from 'react';

class StreamLine extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleStream = this.handleStream.bind(this);
        this.handleBuyWorker = this.handleBuyWorker.bind(this);

        this.state = {
            streamsData: [],
        }
    }
    
    
    componentDidMount(){

    }
  
    componentWillUnmount() {
  
    }

    handleClick(key) {
        const self = this;
        
        let _v = self.props.streamsData;
        const i = this.search(key, _v);
        if(_v[i].item_buy && _v[i].item_buy !== 0 && !_v[i].is_delaying){

            // Delai
            _v[i].is_delaying = true;
            self.setState({streamsData: _v});
            setTimeout(function(){
                self.props.updateMoney(self.props.money + _v[i].revenue)

                _v[i].is_delaying = false;
                self.setState({streamsData: _v});
            }, _v[i].delay);
        }
    }

    handleStream(key) {
        let _v = this.props.streamsData;
        const i = this.search(key, _v);

        if(this.props.money >= _v[i].price){
            this.props.updateMoney(this.props.money - _v[i].price)

            _v[i].item_buy ++;
            _v[i].revenue = _v[i].revenue + _v[i].intial_revenue;
            _v[i].price = Math.round(Math.pow(_v[i].coefficient, _v[i].item_buy) * _v[i].intial_price, 2)
            this.setState({streamsData: _v});
        }
        
    }

    handleBuyWorker(key) {
        let _v = this.props.streamsData;
        const i = this.search(key, _v);

        if(this.props.money >= _v[i].manager_price && !_v[i].manager_buy){
            this.props.updateMoney(this.props.money - _v[i].manager_price)

            _v[i].manager_buy = true;
            this.setState({streamsData: _v});
        }
    }

    search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].key === nameKey) {
                return i;
            }
        }
    }

    render() {
        let img = `images/streams/${this.props.data.icon}`
        const i = this.search(this.props.data.key, this.props.streamsData);
        const v = this.state.streamsData[i];

        const price = (v) ? v.price : this.props.data.intial_price

        // Level
        let lvl = 0;
        if(v){
            if(v.item_buy <= 50){
                lvl = 50;
            }else if(v.item_buy <= 100){
                lvl = 100;
            }else{
                lvl = v.item_buy + 100;
            }
        }else{
            lvl = 50;
        }

        // Manager
        let _manager = <div className="w-1/6 p-4 text-center worker">
            <img src="images/icons/play-button.svg" className="w-16 cursor-pointer" />
        </div>

        if(v){
            if(v.manager_buy){
                _manager = 
                <div className="w-1/6 p-4 text-center worker_active">
                    <img src="images/icons/pause-button.svg" className="w-16 cursor-pointer" onClick={() => { this.handleBuyWorker(this.props.data.key) }} />
                    <div className="flex items-center sp_font font-bold text-sm text-primary-400">
                        Acheté
                    </div>
                </div>
            } else{
                if(this.props.money >= v.manager_price){
                    _manager = 
                    <div className="w-1/6 p-4 text-center worker_active">
                        <img src="images/icons/play-button.svg" className="w-16 cursor-pointer" onClick={() => { this.handleBuyWorker(this.props.data.key) }} />
                        <div className="flex items-center sp_font font-bold text-sm text-primary-400">
                            {this.props.data.manager.price} <img className="w-4 ml-2" src="images/icons/headphones.svg" alt="" />
                        </div>
                    </div>
                }else{
                    _manager = 
                    <div className="w-1/6 p-4 text-center worker">
                        <img src="images/icons/play-button.svg" className="w-16 cursor-pointer" onClick={() => { this.handleBuyWorker(this.props.data.key) }} />
                        <div className="flex items-center sp_font font-bold text-sm text-gray-400">
                            {this.props.data.manager.price} <img className="w-4 ml-2" src="images/icons/headphones.svg" alt="" />
                        </div>
                    </div>
                }
            }
        }
          
        return (
            <div key={this.props.data.key} className="flex w-full">
                <div className="w-1/6 p-4 text-center">
                    <div className={(v && v.is_delaying ) ? 'flex items-center justify-center cursor-pointer rounded-lg bg-primary-100 loader' : 'hidden' }>
                        <img className="w-6 animate-spin" src="images/icons/loader.svg" alt="" />
                    </div>

                    <a className={(!v || (v && !v.is_delaying) ) ? 'text-center cursor-pointer' : 'hidden' } onClick={() => { this.handleClick(this.props.data.key) }}>
                        <img src={img} className="w-16"/>
                    </a>
                    <div className="text-sm sp_font">
                        <span>{(v) ? v.item_buy : (i == 0) ? 1 : 0 }</span>
                        <span className="font-bold">/</span>
                        <span>{lvl}</span>
                    </div>
                </div>

                <div className="w-4/6 px-2 py-4">
                    <div className="py flex items-center sp_font">
                        <p className="flex items-center"><span className="font-bold">{(v) ? v.revenue : this.props.data.intial_revenue }</span> <img className="w-4 ml-2" src="images/icons/headphones.svg" alt="" /> <span className="mx-2 text-primary-400 font-bold">par {this.props.data.name}</span> </p>
                    </div>

                    <button type="button" className={(this.props.money >= price) ? 'sp_font inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' : 'sp_font cursor-not-allowed inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} onClick={() => { this.handleStream(this.props.data.key) }}>
                        Acheter pour {(v) ? v.price : this.props.data.intial_price } <img className="w-4 ml-2" src="images/icons/headphones.svg" alt="" />
                    </button>
                        
                </div>

                {_manager}
            </div>
        )
    }
}

export default StreamLine;