import React, { Component } from 'react'

export class LoserModel extends Component {
    render() {
        return (
            <div>
                <div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" style={{display: 'block'}} aria-modal="true" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLiveLabel">You Lost!!!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Sorry!!! You have lost the game</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success" onClick={this.props.newGame}>New Game</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoserModel
