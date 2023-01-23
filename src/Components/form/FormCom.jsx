import React from 'react'
import { Button, ChForm, Input } from './style'

export default function FormCom(props) {
  return (
      <ChForm onSubmit={props.prevent}>
        <Input
          type="text"
          name="city"
          placeholder='Type City...'
          onFocus={(e) =>e.target.placeholder='' }
          onBlur={(e) =>e.target.placeholder='Type City ...' }
        />
        <Input
          type="text"
          name="country"
          placeholder='Type Country ...'
          onFocus={(e) =>e.target.placeholder='' }
          onBlur={(e) => e.target.placeholder = 'Type Country ...'}
        />
        <Button>Get Weather</Button>
      </ChForm>
  )
}
