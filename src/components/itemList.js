import React from 'react'
import Item from './item'

const ItemList = (props) => (
    <div>
        {props.items.map(i => <Item name={i.name} />)}
    </div>
)

export default ItemList