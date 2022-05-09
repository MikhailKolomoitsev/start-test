import React, { useState } from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import ContentLoader from '../ContentLoader';
import Box from '../Box';
import './Form.scss'

const Form = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [options, setOptions] = useState([])
  const [squares, setSquares] = useState(new Array(5))

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://demo7919674.mockable.io/')
      setIsLoading(false)
      setOptions(data.map(i => {
        return ({ label: i['name'], value: i['field'] })
      }
      ))
    }
    fetchData()
  }, [])

  const customStyles = useMemo(
    () => ({
      control: (styles, { isFocused, isSelected }) => ({
        ...styles,
        fonSize: '14px',
        border: isFocused ? 0 : 0,
        boxShadow: isFocused ? 0 : 0,
        '&:hover': {
          border: isFocused ? 0 : 0,
        },
        borderColor: isSelected ? 'none' : 'none',
        backgroundColor: 'white',
        cursor: 'pointer',
      }),
      option: (styles, { isFocused, isDisabled, isSelected }) => ({
        ...styles,
        backgroundColor: isFocused ? '#F9F5FF' : 'transparent',
        color: isFocused || isSelected ? '#53389E' : '#101828',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        borderRadius: '10px',
      }),
      menu: (styles) => ({
        ...styles,
        boxShadow: '0 4px 6px -2px #1018280D, 0 12px 16px -4px #1018281A',
        padding: '5px',
      }),
      singleValue: (styles) => ({
        ...styles,
        color: '#667085',
      }),
      indicatorSeparator: (styles) => ({
        ...styles,
        display: 'none',
      }),
    }),
    [],
  );


  return (
    <>
      <ContentLoader visible={isLoading} />
      {options.length > 0 && <Select
        className="form_select"
        isSearchable={false}
        styles={customStyles}
        defaultValue={options[0]}
        options={options}
        onChange={({ value }) => {
          let arr = []
          for (let i = 1; i <= value*value; i++) {
            arr.push(i)
          }
          setSquares(arr)
        }}
      />}
      <ul className={`form_squares-list width-${Math.sqrt(squares.length)}`}>
        {squares.map((item, idx) => <li
          // onMouseOver={(e) => {
          //   console.log(e.currentTarget.value)
          // }}
          key={item}
          value={item}
        ><Box number={item}/></li>)}
      </ul>
    </>
  )
};

export default Form;
