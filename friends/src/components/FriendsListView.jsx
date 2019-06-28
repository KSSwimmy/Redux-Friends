import React, { Component } from 'react'
import Friends from './Friends'
import { connect } from 'react-redux'
import { getFriends } from '../actions';
 
 class FriendsList extends Component {

    componentDidMount(){
        this.props.getFriends()
    }

    render() {
        console.log(this.props.friends)
        return (
            <div>
                <Friends />
            </div>
        )
    }
}

const mapStateToProps = stateApple => ({
    isFetching: stateApple.isFetching,
    friends: stateApple.friends
})

export default connect(mapStateToProps, {getFriends}) (FriendsList)