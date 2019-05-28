class Machine extends React.Component {
    render(){
        let msg;
        if (this.props.s1 == this.props.s2 && this.props.s2 == this.props.s3){
            msg = <p>You win..!!</p>
        }else{
            msg = <p>You lose..!!</p>
        }
        return(
            <div>
                <p>{this.props.s1}{this.props.s2}{this.props.s3}</p>
                <p>{msg}</p>
            </div>
        );
    }
}