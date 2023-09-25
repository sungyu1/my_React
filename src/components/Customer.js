import React from "react";

class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustmerProfile id={this.props.id} image={this.props.image} 
                name={this.props.name}/>
                <CustmerInfo birthday={this.props.birthday} gender={this.props.gender} 
                age={this.props.age} job={this.props.job}/>
            </div>
        )
    }
}
// 사용자 이미지와 아이디 이름 
class CustmerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}
// 사용자 생일,성별,나이,직업
class CustmerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.age}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer;