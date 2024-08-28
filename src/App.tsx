import Button from "./component/Button/Button"
import Card from "./component/Card/Card"
import './App.css'
import TextInput from "./component/TextInput/TextInput"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { nanoid } from "nanoid"
import 'react-toastify/dist/ReactToastify.css';

type CardItem = {
  id: string,
  content: string,
}

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [data, setData] = useState<CardItem[]>([])

  const currentStorageData = JSON.parse(localStorage.getItem("data") || '[]')

  useEffect(() => {
    if (currentStorageData !== data) {
      setData(currentStorageData);
    }
  }, [currentStorageData])

  const storedUser = localStorage.getItem("username");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (currentUser !== username) {
      setUsername(currentUser);
    }
  }, [currentUser])


  const onAdd = () => {
    if (inputValue?.trim()) {
      const newCard: CardItem = {
        id: nanoid(),
        content: inputValue,
      }
      const newData = [...data]
      newData.push(newCard);
      localStorage.setItem("data", JSON.stringify(newData));
      setData(newData);
      setInputValue('');
    } else {
      toast("Card content must not be empty!", { type: "error" })
    }
  }

  const onLogin = () => {
    if (username?.trim()) {
      localStorage.setItem("username", JSON.stringify(username));
      setUsername(username);
    } else {
      toast("Username must not be empty!", { type: "error" })
    }
  }

  const onLogout = () => {
    localStorage.removeItem("username");
    setUsername('');
  }

  const onClearCards = () => {
    localStorage.setItem("data", '[]');
    setData([]);
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        {currentUser ? <>
          <span>Hello, <b>{currentUser}!</b></span>
          <Button type='danger' text='Logout' onClick={onLogout} />
        </> : <>
          <p style={{ margin: '8px auto' }}>Username:</p>
          <TextInput value={username} onChange={setUsername} />
          <Button type='primary' text='Login' onClick={onLogin} /></>}
      </div>
      <p style={{ margin: '8px auto' }}>Add Item:</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <TextInput value={inputValue} onChange={setInputValue} />
        <Button type='secondary' text='Save' onClick={onAdd} />
        <Button type="danger" text='Clear' onClick={onClearCards} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data?.map((item) => <Card key={item?.id} id={item?.id} content={item?.content} />)}
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
