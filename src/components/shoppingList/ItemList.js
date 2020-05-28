import React, { Component } from 'react';
import Item from './Item'
class ItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.items !== nextProps.items;
  }


  render() {
      const { items, onToggle, onRemove } = this.props;
      const itemList = items.map(
          ({ id, text, checked }) => (
              <Item
                  id={id}
                  text={text}
                  checked={checked}
                  onToggle={onToggle}
                  onRemove={onRemove}
                  key={id}
              />
          )
      );
      return (
        <div>
            {itemList}
        </div>
      );
  }
}

export default ItemList;