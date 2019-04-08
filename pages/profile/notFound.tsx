import React, { Component } from 'react'

class ProfileNotFound extends Component {
  static getInitialProps ({ query: { id } }) {
    return { profileId: id };
  }

  render() {
    console.log(this.props);
    return (
      <div>Profile not found. Too bad.</div>
    )
  }
}

export default ProfileNotFound;