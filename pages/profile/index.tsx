import React, { Component } from 'react'

interface ProfileProps {
  profileId: string
}

class Profile extends Component<ProfileProps> {
  static getInitialProps ({ query: { id } }) {
    return { profileId: id };
  }

  render() {
    console.log(this.props);
    return (
      <div>Showing profile: {this.props.profileId}</div>
    )
  }
}

export default Profile;