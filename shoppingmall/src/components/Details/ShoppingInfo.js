import React from 'react'
import { Badge, Descriptions } from 'antd';

const MovieInfo = (props) => {

    console.log(props)
    const { shopping } = props;

    const items =[
     { key: '1', label: 'Title', children: `${shopping.title}`},
     { key: '2', label: 'Release Date', children: `${shopping.release_date}`},
     { key: '3', label: 'Revenue', children: `${shopping.revenue}`},  
     { key: '4', label: 'Runtime', children: `${shopping.runtime}`},   
     { key: '5', label: 'Vote Average', children: `${shopping.vote_average}`}, 
     { key: '6', label: 'Vote Count', children: `${shopping.vote_count}`}, 
     { key: '7', label: 'Status', children: `${shopping.status}`}, 
     { key: '8', label: 'Popularity', children: `${shopping.popularity}`}, 
     { key: '9', label: 'Budget', children: `${shopping.buget}`},
    ];
  return (
    <Descriptions title="Shopping Info" bordered items={items} />
  )
}

export default MovieInfo