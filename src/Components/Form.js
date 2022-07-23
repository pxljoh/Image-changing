import React, { Component } from 'react'

export class Form extends Component {
    getName(e) {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        if (name) {
            alert(name)
            e.target.elements.name.value=""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.getName}>
                    <input type="text" name="name" placeholder="name" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
};
export default Form