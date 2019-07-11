import * as React from 'react'

export const App: React.FC = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  
  return (
    <section className='App'>
        <p>React Typescript Seed</p>
        <section className='counter'>
          <button className='decrement' onClick={() => setCount(count - 1)}>-</button>
          <div className='count'>{count}</div>
          <button className='increment' onClick={() => setCount(count + 1)}>+</button>
        </section>
      </section>
  )
}