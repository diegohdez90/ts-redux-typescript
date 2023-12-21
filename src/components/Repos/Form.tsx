import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useLazyGetReposQuery } from '../../api/repos';

interface Props {
  setData: Dispatch<SetStateAction<any[]>>
}

const Form = ({
  setData
}: Props) => {
  const [term, setTerm] = useState('');
  const [ get, {
    data,
    isLoading,
    error,
  } ] = useLazyGetReposQuery();


  const onHandleChangeTermInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    setTerm(value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    get(term);
  }

  useEffect(() => {
    if (data instanceof Object) {
      if ('objects' in data) {
        setData([...(data as unknown as any)?.objects]);
      }
    }
  }, [data])

  return (
    <div>
      <form method='GET' onSubmit={onSubmit}>
        <label>
          Type repo name
          <input
            value={term}
            onChange={onHandleChangeTermInput}
          />
        </label>
        <input
          type='submit'
          value='Search'
        />
      </form>
    </div>
  )
}

export default Form
