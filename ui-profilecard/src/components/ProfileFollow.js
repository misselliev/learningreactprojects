import React from 'react'

class ProfileFollow extends React.Component{
    constructor () {
		super()
		this.state = {follow: false}
		this.toggleFollow = this.toggleFollow.bind(this)
	}
	toggleFollow (){
		this.setState(previousState => ({
				follow: !previousState.follow
		}))
	}
	render() {
		let wordDisplay= (this.state.follow) ? "following" : "follow"
		let follows = (this.state.follow) ? this.props.followers + 1 : this.props.followers
		return(
			<div className="profilecard__followers">
				<div className="followcontent">
					<p>Followers</p>
					<p>{follows}</p>
				</div>
				<div className="followcontent">
					<p>Following</p>
					<p>111</p>
				</div>
				<button type="button" className={wordDisplay} onClick={this.toggleFollow}>
						<span className="text">{wordDisplay}</span>
                        <span className="unfollow">Unfollow</span>
				</button>
			</div>
		)
	}
}
export default ProfileFollow