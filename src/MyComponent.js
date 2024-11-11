import PropTypes from "prop-types";

// const MyComponent = (props) => {
//     return <div>나의 새로운 {props.name} 컴포넌트</div>
// }

// MyComponent.defaultProps = {
//     name: "Brave New World"
// }

// const MyComponent = (props) => {
//     return <>
//         <div>나의 새로운 {props.name} 컴포넌트</div>
//         <p>{props.children}을 배웁니다.</p>
//     </>
// }

// const MyComponent = (props) => {
//     const {name, children} = props;
//     return <>
//         <div>나의 새로운 {name} 컴포넌트</div>
//         <p>{children}을 배웁니다.</p>
//     </>
// }

// MyComponent.defaultProps = {
//     name: "Brave New World"
// }

// MyComponent.propTypes = {
//     name: PropTypes.string
// }

const MyComponent = ({name, favoriteNumber, children}) => {
    return <>
        <div>나의 새로운 {name} 컴포넌트</div>
        <p>{children}을 배웁니다.</p>
        <p>좋아하는 숫자는 {favoriteNumber}입니다.</p>
    </>
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
