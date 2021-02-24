import React, {PropTypes} from 'react';
import classnames         from 'classnames';
import {miss_messages, dont_understand} from '../constants/messages';
import {getRandomInt} from '../utils/Common'

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        // про рефы
        // https://ru.reactjs.org/docs/refs-and-the-dom.html

        // про state
        // https://ru.reactjs.org/docs/forms.html

        //this.state={messages_in_state:[]};

        this.messages= React.createRef();
        this.messageText= React.createRef();

        // это если сделать вот так, но тогда текст не будет редактироваться интерактивно,
        // а только можно будет устанавливать значения программно
        //this.state = {messageText:''};
        //<textarea
        // value={this.state.messageText}
        // и значение можно менять только через this.setState({messageText: '!'});


        // если это не сделать, обработчик вызовется, но this будет undefined
        this._handleTextKeyUp = this._handleTextKeyUp.bind(this);

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleChange(event) {
    //    this.setState({value: event.target.value});
    //}

    //handleSubmit(event) {
    //    alert('Сочинение отправлено: ' + this.state.value);
    //    event.preventDefault();
    //}

    // Не вызывается почему-то сейчас, в каких случаях это происходит?
    componentDidUpdate() {
        //const { messages } = this.refs;
        this.messages.current.scrollTop = this.messages.current.scrollHeight;
    }

    _handleFormSubmit(e) {
        e.preventDefault();
    }

    _renderOpponentStatus(opponentIsConnected) {
        const classes = classnames({
            status: true,
            connected: opponentIsConnected,
        });

        //const status = opponentIsConnected ? 'Opponent is connected' : 'No opponent yet';
        const status = opponentIsConnected ? 'Вражина на связи' : 'Враг не явился на войну';

        return (
            <p>
                <i className={classes}/> {status}
            </p>
        );
    }

    _renderMessages() {
        // TODO
        //const { messages, playerId } = this.props;

        //let messages = this.state.messages_in_state;
        const { messages } = this.props;

        //messages.push({text: 'Hello', mine: false});
        //messages.push({text: 'Test2', mine: true});
        //messages.push({text: 'Test2', mine: true});

        // 14.02.2021 убрал, т.к. ругалось, что messages.map undefined, как обычно, в общем, и я пока не понял,
        // как повлияло то, что я удалил модули взаимодействия, на такое

        const nodes = messages.map((message, i) => {
            const classes = classnames({
                //mine: message.player_id === playerId,
                mine: message.mine,
            });

            return (
                <li className={classes} key={i}>
                    <span>{message.text}</span>
                </li>
            );
        });

        return (
            <ul ref={this.messages}>{nodes}</ul>
        );

    }

    _handleTextKeyUp(e) {

        if (e.which != 13) return false;

        e.preventDefault();

        //const { messageText } = this.refs;
        //const text = this.messageText.value.trim();
        const text = this.messageText.current.value.trim();

        if (text === '') return false;

        // 16.02.2021 TODO
        //const { gameChannel } = this.props;
        //gameChannel.push('game:send_message', { text: text });

/*         let messages2 = [...this.state.messages_in_state];
        messages2.push({text: text, mine: true});
        if (text=="Привет")
        {
            messages2.push({text: 'Привет!!!!', mine: false});
        } else
        {
            //messages2.push({text: miss_messages[getRandomInt(0,miss_messages.length-1)], mine: false});
            messages2.push({text: dont_understand[getRandomInt(0,dont_understand.length-1)], mine: false});
        }

        this.setState({messages_in_state: messages2});
 */
        this.messageText.current.value='';
    }

    render() {

        const { opponentIsConnected } = this.props;

        return (
            <aside id="chat_container">
                <header>
                    {this._renderOpponentStatus(opponentIsConnected)}
                </header>
                <div className="messages-container">
                    {this._renderMessages()}
                </div>
                <div className="form-container">
                <form onSubmit={this._handleFormSubmit}>
                <textarea
                disabled={!opponentIsConnected}
                ref={this.messageText}
                onKeyUp={this._handleTextKeyUp}
                placeholder="Type message and hit intro..."/>
                </form>
                </div>
            </aside>
        );
    }
}
