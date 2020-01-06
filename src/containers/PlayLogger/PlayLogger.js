import React, { Component } from 'react';

class PlayLogger extends Component {

    state = {
        is_entering_player: false,
        is_entering_event: false,
        players: null,
        events: null,
        is_dm: false,
        player_id: null,
        ok_to_submit: false,
        raised_amount: 0,
        sponsorships: null
    };

    render () {
        return (
            <div>This is the play logger</div>
        );
    }

}

export default PlayLogger;
