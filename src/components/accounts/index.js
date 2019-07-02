import React from 'react'
import { Tooltip } from 'reactstrap';

class Account extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      linkedin: false,
      email: false,
      github: false,
      blog: false
    };

    this.linkedIn = this.linkedIn.bind(this);
    this.email = this.email.bind(this);
    this.github = this.github.bind(this);
    this.blog = this.blog.bind(this);
  }

  linkedIn (){
    this.setState({
      linkedin: !this.state.linkedin
    })
  }
  email(){
    this.setState({
      email: !this.state.email
    })
  }
  github (){
    this.setState({
      github: !this.state.github
    })
  }
  blog(){
    this.setState({
      blog: !this.state.blog
    })
  }


  render() {
    return (
      <div style={{position: "relative", top:"-15%"}}>
        <div className="row">
          <div className="col-3">
             <span id="linkedin">
                <a href="https://www.linkedin.com/in/aman-dave/">
                  <img src={require('../../images/linkedin.png')} alt="" height="40px"/>
                </a>
                  <Tooltip style={{marginTop: "20px"}} placement="bottom" isOpen={this.state.linkedin} target="linkedin" toggle={this.linkedIn}>
                    LinkedIn
                  </Tooltip>
               </span>
          </div>
          <div className="col-3">
             <span id="email">
                <a href="mailto:amandave1999@gmail.com">
                  <img src={require('../../images/email.png')} alt="" height="40px"/>
                </a>
                  <Tooltip style={{marginTop: "20px"}} placement="bottom" isOpen={this.state.email} target="email" toggle={this.email}>
                    Email
                  </Tooltip>
               </span>
          </div>
          <div className="col-3">
             <span id="github">
                <a href="https://github.com/wizArD-1910">
                  <img src={require('../../images/github.png')} alt="" height="40px"/>
                </a>
                  <Tooltip style={{marginTop: "20px"}} placement="bottom" isOpen={this.state.github} target="github" toggle={this.github}>
                    GitHub
                  </Tooltip>
               </span>
          </div>
          <div className="col-3">
             <span id="blog">
                <a href="/blogs">
                  <img src={require('../../images/blogging.png')} alt="" height="40px"/>
                </a>
                  <Tooltip style={{marginTop: "20px"}} placement="bottom" isOpen={this.state.github} target="blog" toggle={this.blog}>
                    Blog
                  </Tooltip>
               </span>
          </div>
        </div>

      </div>
    );
  }

}

export default Account;
