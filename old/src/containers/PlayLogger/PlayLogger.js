import React, { Component } from 'react';

import Api from '../../storage/Api';

import './PlayLogger.css';

class PlayLogger extends Component {

    state = {
        loaded: false,
        players: null,
        events: null,
        is_dm: false,
        player_id: null,
        ok_to_submit: false,
        raised_amount: 0,
        sponsorships: null
    };

    // TODO: pull from the url
    game_slug = 'test-game';
    game_uuid = '15d78c19-7ee6-4d9d-9a86-312200e19e26';

    componentDidMount() {
        // TODO: Start play log, if not already started
        Api.getGameData(this.game_slug, this.game_uuid)
            .then((res) => {
                if (res.data.success) {
                    this.setState({ players: res.data.data.players, events: res.data.data.events, loaded: true });
                } else {
                    // TODO: proper logging
                    console.log('Failure :(', res.data);
                }
            })
            .catch((err) => {
                // TODO: proper logging
                console.log('Failure :(', err);
            });;
    }

    getIcon(url, color, short, full) {
        const m = url.match(/^LOCAL_ICONS\/(.*)/);
        let style = {
            backgroundSize: 'cover'
        };
        if (m !== null && m.length > 0) {
            let path = '/images/icons/' + m[1];
            style.backgroundImage = `url(${path})`;
            style.backgroundColor = color;
            style.backgroundPosition = 'center';
        } else {
            style.backgroundImage = `url(${url})`;
            style.backgroundPosition = 'top center';
        }
        return (
            <div className="Icon" style={style} title={full} key={full}>
                <span>{short}</span>
            </div>
        );
    }

    render () {
        let body = null;
        if (this.state.loaded) {
            const playerSelect = this.state.players.map((player) => {
                const icon = this.getIcon(
                    player.url,
                    player.color,
                    player.char_short_name,
                    player.char_full_name
                );
                return (
                    <div className="PlayerOption">
                        {icon}
                    </div>
                );
            });

            const eventSelect = this.state.events.map((event) => {
                const icon = this.getIcon(
                    event.url,
                    event.color,
                    event.short_name,
                    event.full_name
                );
                return (
                    <div className="EventOption">
                        {icon}
                    </div>
                );
            });

            body = (
                <div className="EnterEvent">
                    <div className="ChoosePlayer">
                        {playerSelect}
                    </div>
                    <div className="ChooseEvent">
                        {eventSelect}
                    </div>
                </div>
            );
        }
        return (
            <div className="PlayLogger">
                {body}
            </div>
        );
    }

}

export default PlayLogger;
