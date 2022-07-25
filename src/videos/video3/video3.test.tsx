import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Video3 from './video3';


test('testing input value',
  async () => {

    const { container } = render(<Video3/>)

    let inputValue = screen.getByTestId('inputValue');

    // @ts-ignore
    expect(inputValue.value).toEqual('0')

    const plusBtn = screen.getByTestId('plusBtn');

    // second way to find the button - role
      const plusBtn2 = screen.getByRole('button');
      expect(plusBtn2).toBeInTheDocument();

    // third way to find the button - text
    const plusBtn3 = screen.getByText('plus');
    expect(plusBtn3).toBeInTheDocument();

    // fourth way to find the button - className
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const plusBtns3 = container.getElementsByClassName('plusBtn');
      expect(plusBtns3.length).toEqual(1);

    // fifth way to find the button
    const plusBtn4 = screen.getByText((content, element: any) => element.tagName.toLowerCase() === 'button');
    expect(plusBtn4).toBeInTheDocument();


    fireEvent.click(plusBtn);

    inputValue = screen.getByTestId('inputValue');

    // @ts-ignore
    expect(inputValue.value).toEqual('1');

    // @ts-ignore
    const changedMessage = await screen.getByTestId('changedMessage')
    expect(changedMessage).toBeInTheDocument();
  });
