import React from 'react'
import { connect } from 'react-redux'
import { SetUser } from '../actions/user'

class Welcome extends React.Component {
  render () {
    const { navigate } 
    return (

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(SetUser(username))
  }
}

export default connect(null, mapDispatchToProps)(Welcome)
