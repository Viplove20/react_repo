import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar: "http/dummy-photo.com"
            }
        }     
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Viplove20");
        const json =await data.json();

        this.setState({
            userInfo: json
        })
        console.log("component did mount called");
    }

    componentDidUpdate(){
        console.log("component did update called");
    }

    componentWillUnmount(){
        console.log("component will Unmount called")
    }

    render(){
        console.log("render called");
        const {login, id, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="git-user-img" src={avatar_url}></img>
                <h2>User Name: {login}</h2>
                <h3>Id: {id}</h3>
            </div>
        )
    }
}

export default User;