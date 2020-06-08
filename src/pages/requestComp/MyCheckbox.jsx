//importing react components and css
import React from 'react';
import Form from 'react-bootstrap/Form'

// testing variables



//components
class MyCheckbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }
  handleCheckBoxClick( name, event){
    var checked = !this.state.checked;
    this.setState({
      checked
    });
    this.props.handleChildbox(name, checked);
  }

  render(){
    return (
      <Form>
      <div className="mb-3" style = {{display:'block', width: '400px'}}>
        <Form.Check type='checkbox' id={`check-api-${this.props.request}`}>
          <Form.Check.Input type='checkbox'  isValid checked={this.state.checked}
           onChange={(e) => {this.handleCheckBoxClick(this.props.request, e.target.checked)}}/>
          <Form.Check.Label>{`${this.props.From} ~ ${this.props.To} (${this.props.request})`}</Form.Check.Label>
        </Form.Check>
      </div>
      </Form>
    );
  }
}

export default MyCheckbox;

//   <Calview id="cal1"/>

/*
<section>
  <PageData id = "mydata1"/>
</section>
*/
