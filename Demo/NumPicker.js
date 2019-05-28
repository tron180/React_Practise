function getNum(){
        return Math.floor(Math.random()*10) + 1;
    }
    
    class NumPicker extends React.Component{
        render(){
            const num = getNum();
            let msg;
            if(num === 7){
                msg = <div>
                    <h2>Congrats you win!</h2>
                </div>
            }else{
                msg = <p>Sorry You Lose!</p>
            }
            return(
                <div>
                    <h1>Your number: {num}</h1>
                    {/* <p>{num === 7 ? 'Congrats' : 'Unlucky!' }</p> */}
                    {msg}
                </div>
            );
        }
    }