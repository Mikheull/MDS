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

    async handleClick(key) {
        const self = this;
        
        let _v = self.props.streamsData;
        const i = this.search(key, _v);
        if(_v[i].item_buy && _v[i].item_buy !== 0){
            self.props.updateMoney(self.props.money + _v[i].revenue)

            _v[i].is_delaying = true;
            self.setState({streamsData: _v});
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
        console.log('buy');
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
          
        return (
            <div key={this.props.data.key} className="flex w-full">
                <div className="flex-none p-4 text-center">
                    <a className="text-center cursor-pointer" onClick={() => { this.handleClick(this.props.data.key) }}>
                        <img src={img} className="w-16"/>
                    </a>
                    <div className="text-sm">
                        <span>{(v) ? v.item_buy : (i == 0) ? 1 : 0 }</span>
                        <span className="font-bold"> /</span>
                        <span>{lvl}</span>
                    </div>
                </div>

                <div className="flex-1 px-2 py-4">
                    <div className="py mb-2 flex items-center">
                        <p className="mr-2 text-primary-500 font-semibold">{this.props.data.name} : </p>
                        <p className="italic"><span className="font-bold ital">{(v) ? v.revenue : this.props.data.intial_revenue }</span> Streams</p>
                    </div>
                    <div className={(this.props.money >= price) ? 'flex justify-between w-max cursor-pointer bg-primary-500 text-sm text-white px-4 py-2 border rounded-md hover:bg-primary-400' : 'flex justify-between w-max cursor-not-allowed bg-gray-100 text-sm text-red-600 px-4 py-2 border rounded-md hover:bg-red-400 hover:text-white'} onClick={() => { this.handleStream(this.props.data.key) }}>
                        <div className="font-black">Acheter pour {(v) ? v.price : this.props.data.intial_price } streams</div>
                    </div>
                </div>

                <div className={(this.props.money >= this.props.data.manager.price) ? 'flex-none p-4 text-center worker_active' : 'flex-none p-4 text-center worker'}>
                    <img src="images/icons/play-button.svg" className="w-16 cursor-pointer" onClick={() => { this.handleBuyWorker(this.props.data.key) }} />
                    <div className="font-bold text-sm">
                        {this.props.data.manager.price}$
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamLine;