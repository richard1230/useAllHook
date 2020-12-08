import React, {useState, useReducer} from 'react';
import ReactDOM from 'react-dom';

//1.创建初始值
const initialFormData = {
    name: "",
    age: 18,
    nationality: "汉族"
}

//2.创建所有操作
const reducer = (state, action) => {
    switch (action.type) {
        case "patch":
            return {...state, ...action.formData};
        case "reset":
            return initialFormData;
        default:
            throw new Error();
    }
}

const App = () => {
    //3.state保存初始状态，可以读；dispatch可以写
    const [formData, dispatch] = useReducer(reducer, initialFormData)

    const onReset = () => {
        dispatch({type: 'reset'})
    }
    const onSubmit = () => {
    }

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <div>
                <label>
                    姓名
                    <input
                        value={formData.name}
                        onChange={e =>
                            dispatch({type: "patch", formData: {name: e.target.value}})
                        }
                    />
                </label>
            </div>
            <div>
                <label>
                    年龄
                    <input
                        value={formData.age}
                        onChange={e => dispatch({type: "patch", formData: {age: e.target.value}})}
                    />
                </label>
            </div>
            <div>
                <label>
                    民族
                    <input
                        value={formData.nationality}
                        onChange={e => dispatch({type: "patch", formData: {nationality: e.target.value}})}
                    />
                </label>
            </div>
            <div>
                <button type="submit">提交</button>
                <button type="reset">重置</button>
            </div>
            <hr/>
            {JSON.stringify(formData)}
        </form>
    );
}


export default App;
