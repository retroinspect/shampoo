import React from 'react';
import './ShoppingList.css'

const ShoppingList = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 살 것
      </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default ShoppingList;