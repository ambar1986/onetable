import React from 'react';


const Content = React.createClass({
  render() {
    console.log(this.props)
    return (
      <div className='content'>
        <ul>
          {this.props.allRestaurants}
        </ul>
      </div>
    )
  }
})

export default Content;