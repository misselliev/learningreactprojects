import React from 'react';
import ProfileFollow from './ProfileFollow';

class ProfileInfo extends React.Component{
    render(){
        return(
            <section className="profilecard__info">
				<h1 className="name">Clarke Dean</h1>
				<smalltext className="title">Frontend Developer</smalltext>
				<ProfileFollow follow={false} followers={38} />
			</section>
        )
    }
    
}
export default ProfileInfo