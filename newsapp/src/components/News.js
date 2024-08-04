import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="myTitle" description="myDescription" imageUrl="https://variety.com/wp-content/uploads/2024/08/Trap-4.jpg?w=1000&h=563&crop=1" newsUrl="todo"/>
          </div>
          <div className="col-md-4">
          <NewsItem/>
          </div>
          <div className="col-md-4">
          <NewsItem/>
          </div>
        </div>    
        
        
        
      </div>
    )
  }
}

export default News