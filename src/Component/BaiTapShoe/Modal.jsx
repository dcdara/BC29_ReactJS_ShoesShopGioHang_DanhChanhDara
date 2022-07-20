import React, { Component } from 'react'

export default class Modal extends Component {
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
        } = this.props.showShoe;

        return (
            <div className="modal fade" id={"staticBackdrop" + this.props.modalShoe.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"staticBackdropLabel" + this.props.modalShoe.id} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={"staticBackdropLabel" + this.props.modalShoe.id}>
                                Modal
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={image} className="img-fluid rounded-start" alt={alias} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p className="card-text">{description}</p>
                                            <p className="card-text">
                                                <small style={{ color: "green" }}>
                                                    Quantity - {quantity}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
