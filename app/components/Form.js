var React = require('react');
var PropTypes = require('prop-types');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState(function() {
            return {
                location: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.location);
        this.setState(function() {
            return {
                location: ''
            }
        })
    }

    render() {
        return (
            <form className={this.props.class} onSubmit={this.handleSubmit.bind(this)}>
                <input
                    className='input'
                    placeholder={this.props.inputPlaceholder}
                    type='text'
                    autoComplete='off'
                    value={this.state.location}
                    onChange={this.handleChange.bind(this)}>
                </input>
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.location}>
                    {this.props.btnLabel}
                </button>
            </form>
        )
    }
}

Form.propTypes = {
    class: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    btnLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

Form.defaultProps = {
    class: 'row',
    inputPlaceholder: 'Rome, Italy',
    btnLabel: 'Get Weather'
}

module.exports = Form;