import React, { Component } from 'react'
import Modal from './Modal'

export default class Render extends Component {
    render() {
        const {
            id,
            name,
            alias,
            price,
            description,
            shortDescription,
            quantity,
            image,
        } = this.props.renderShoe;
        
        return (

            <div className="list-shoe col-3 mb-4">
                <div className="card">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title fs-7">
                        {name}
                    </h5>
                    <p className="card-text fs-11">
                        {shortDescription}
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={"#staticBackdrop" + id}
                        onClick={() => {{this.props.selectedShoe(this.props.renderShoe)}}}
                    >
                        Show more
                    </button>
                    <div>
                        <Modal showShoe={this.props.showShoe} modalShoe={this.props.renderShoe} />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
