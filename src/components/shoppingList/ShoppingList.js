import React, { Component } from 'react';
import Form from './Form'
import ItemListWrapper from './ItemListWrapper'
import ItemList from './ItemList';

class ShoppingList extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    items: [
      { id: 0, text: ' 샴푸 ', checked: false },
      { id: 1, text: ' 린스 ', checked: true },
      { id: 2, text: ' 바디워시 ', checked: false }
    ]
  }


  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, items } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      items: items.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { items } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = items.findIndex(item => item.id === id);
    const selected = items[index]; // 선택한 객체

    const nextItems = [...items]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextItems[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      items: nextItems
    });
  }

  handleRemove = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.filter(item => item.id !== id)
    });
  }

  render() {
    const { input, items } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleRemove,
      handleToggle
    } = this;

    return (
      <ItemListWrapper form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ItemList
          items={items}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </ItemListWrapper>
    );
  }
}

export default ShoppingList;
