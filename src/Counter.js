import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        // 초기 상태 설정
        this.state = {
            number: 0,
            fixedNumber: 0
        }
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={ () => {
                        this.setState(prevState => {
                            return {number: prevState.number + 1}
                        }, () => {
                            console.log('setState가 호출되었습니다.');
                            console.log(this.state);
                        })
                    }}
                >+1</button>
            </div>
        )
    }
}

export default Counter;