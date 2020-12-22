import React, {Component} from 'react';
import ListGifs from '../ListGifs/ListGifs'
import './Searcher.css'

class Searcher extends Component {

  searchRef = React.createRef()

  state = {
    gifs: null,
    value: ''
  }

  getInfo = (e) => {
    e.preventDefault()
    this.setState({ value: this.searchRef.current.value})
  }

  onChangeHandler = async e => {
    this.setState({value: e.target.value});
  };

  get renderGifs() {
    let gifs = <h1>There's no gifs</h1>;
    if (this.state.value !== '') {
      gifs = <ListGifs keyword={this.state.value}/>
    }
    return gifs
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.getInfo}>
          <div>
            <input
              type="text"
              ref={this.searchRef}
              className="input-text"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Buscar"
              className="input-button"
            />
          </div>
        </form>
        {this.renderGifs}
      </div>
    )
  }
}

export default Searcher
