import React, { Component } from 'react'



export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: '',
      title: "",
      old_title: "",
      id: 0,
      data: props.data,
    };

  }


  selectedValue(item) {
    this.setState({ title: item.title, id: item.id });
  }

  updateValue() {
    this.state.data.forEach(element => {
      if (element.id == this.state.id) {
        this.setState({ old_title: element.title });
        element.title = this.state.title;
      }
    });

    this.setState({ data: this.state.data });

  }

  reset() {
    this.state.data.forEach(element => {
      if (element.id == this.state.id) {
        element.title = this.state.old_title;
      }
    });

    this.setState({ data: this.state.data });
  }
  render() {
    return (
      <div style={{ color: "white" }}>
        <h2 style={{ padding: 30, color: "white" }}>Shop By Model</h2>
        <div className='row'>
          {this.state.data.map(e => {
            return (
              <div className='col-4' key={e.id} onClick={() => this.selectedValue(e)}>
                <div className='row'>
                  <center> <img src={require("../images/pngegg (30).png")} style={{ height: 150, width: 250 }} /></center>
                </div>
                <div className='row'>
                  <center>{e.title}</center>
                </div>
              </div>
            )
          })}
        </div>
        <input type="text" value={this.state.title} placeholder="Title" onChange={(value) => this.state.title = this.setState({ title: value.target.value })} />
        <center>
          <div className='row col-6' >
            <button className='col-5' style={{ backgroundColor: "#28B463" }} onClick={() => this.updateValue()} >Updete</button>
            <button className='col-5' style={{ backgroundColor: "#AEB6BF" }} onClick={() => this.reset()} >Reset</button>
          </div>
        </center>

      </div>
    )
  }
}
