import { Component } from "react";
import Card from "./Card";

class RickMortyClass extends Component {
    constructor(){
        super();
        this.state = {data:{}, id:1};
    }

    request = async() => {
        if(this.state.id > 0) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`);
            const result = await response.json();
            this.setState({data:result});
        }
    }

    componentDidMount(){
        this.request();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.id !== this.state.id){
            this.request();
        }
    }

    increment = (arg) => {
        if(arg === "previous"){
            this.setState(prevState => ({id: prevState.id - 1}));
        } else if (arg === "next"){
            this.setState(prevState => ({id: prevState.id + 1}));
        }
    }

    render() {
        console.log(this.state.data.id)

        return (
            <div className="Class">
                <Card name={this.state.data.name} img={this.state.data.image} incrementId={this.increment} text="Class Component"/>    
            </div>
        )
    }
}

export default RickMortyClass;