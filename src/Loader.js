import { useState } from "react";
import axios from "axios";

const Loader = () => {
    // const [data, setData] = useState(null);
    // const onClick = () => {
    //     axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
    //         response => {
    //             setData(response.data);
    //         }
    //     )
    // }
    const [ data, setData ] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <div>
                <button onClick={onClick}>데이터 불러오기</button>
            </div>
            {data && (
                <textarea rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readonly={true}></textarea>
            )}
        </div>
    )
}

export default Loader;