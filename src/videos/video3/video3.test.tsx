import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Video3 from './video3'

test('testing input value',
  async () => {

    render(<Video3/>)

    let inputValue = screen.getByTestId('inputValue');

    // @ts-ignore
    expect(inputValue.value).toEqual('0')

    const plusBtn = screen.getByTestId('plusBtn');

    fireEvent.click(plusBtn);

    inputValue = screen.getByTestId('inputValue');

    // @ts-ignore
    expect(inputValue.value).toEqual('1');

    // @ts-ignore
    const changedMessage = await screen.getByTestId('changedMessage')
    expect(changedMessage).toBeInTheDocument();
  })
