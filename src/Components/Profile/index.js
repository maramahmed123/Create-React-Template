import React  from 'react';
import {ProfileSection,Profilee,ProfileList,ProfileItem ,Span,SpanWeb,Skills,SkillsDesc,Bar,Title,Perc,Parent,Sp1,Sp2,Sp3,SkillsTitle,ProfileTitle,ProfileTitlespan,SkillsTitlespan} from './style.js';
const Profile=()=> {
  return (
    <ProfileSection>
    <div className="container">
        <Profilee>
            <ProfileTitle><ProfileTitlespan>My </ProfileTitlespan>Profile</ProfileTitle>
            <ProfileList>
                <ProfileItem>
                    <Span>Name</Span>
                    Maram Ahmed
                </ProfileItem>
                <ProfileItem>
                    <Span>Birthday</Span>
                    2/9/1999
                </ProfileItem>
                <ProfileItem>
                    <Span>Address</Span>
                    Ain shams
                </ProfileItem>
                <ProfileItem>
                    <Span>Phone</Span>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem>
                    <Span>Email</Span>
                    maram.ahmed7895@gmail.com
                </ProfileItem>
                <ProfileItem>
                    <Span>Website</Span>
                    <SpanWeb>www.google.com</SpanWeb>
                </ProfileItem>
            </ProfileList>
        </Profilee>
        
        <Skills>
            <SkillsTitle>Some <SkillsTitlespan>skills</SkillsTitlespan></SkillsTitle>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            <Bar>
                <Title>Bootstrap</Title>
                <Perc>100%</Perc>
                <Parent>
                    <Sp1></Sp1>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>CSS3</Title>
                <Perc>90%</Perc>
                <Parent>
                    <Sp2></Sp2>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>Photoshop</Title>
                <Perc>80%</Perc>
                <Parent>
                    <Sp3></Sp3>
                </Parent>
            </Bar>
        </Skills>
        
    </div>
</ProfileSection>

        
  );
}

export default Profile;