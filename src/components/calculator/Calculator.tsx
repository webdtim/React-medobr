import React, { useState, useEffect } from 'react'
import { Select, Radio, Tabs } from 'antd'
import type { RadioChangeEvent } from 'antd';
import smpData from './smp'
import vmpData from './vmp'
import './calculator.scss'
const { TabPane } = Tabs
const { Option } = Select
const {arrListSMP, smpUrl} = smpData()
const {arrListVMP, vmpUrl} = vmpData()

const Calculator: React.FC = () => {

  const [staffType, setStaffType] = useState('vmp');
  

  const onChange = (e: RadioChangeEvent) => {
    setStaffType(e.target.value);
  };

  // useEffect(() =>{
  //   console.log(staffType)
  // },[staffType])

  const selectedValue = (valueObj: { value: string; label: React.ReactNode }) => {
    const {value, label} = valueObj
    console.log(value.split(',').slice(1));
    console.log(label);
  }

  return (
    <div className="container">
      <div className="prof-calc__info">
        <div className="prof-calc__title">Узнайте на какую профессию Вы можете переучиться</div>
      </div>
      <Tabs type="card">
        <TabPane tab="Специальности, доступные с Вашим образованием" key="1d">
          <Radio.Group onChange={onChange} value={staffType}>
            <Radio value={'vmp'}>Высший медицинский персонал</Radio>
            <Radio value={'smp'}>Средний медицинский персонал</Radio>
          </Radio.Group>
          <Select
            showSearch
            labelInValue
            style={{
              width: 200
            }}
            placeholder="Ваша специальность"
            // optionFilterProp="children"
            // onSelect={onSelect}
            onChange={selectedValue}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {/* Для унифицирования value добавляем название. Т.к. много совпдающих значений */}
            {staffType === 'vmp'
              ? arrListVMP.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
              : arrListSMP.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
            }
          </Select>
        </TabPane>
        <TabPane tab="Образовательные требования к специальности" key="2d">
          <Radio.Group onChange={onChange} value={staffType}>
            <Radio value={'vmp'}>Высший медицинский персонал</Radio>
            <Radio value={'smp'}>Средний медицинский персонал</Radio>
          </Radio.Group>
          <Select
            showSearch
            labelInValue
            style={{
              width: 200
            }}
            placeholder="Ваша специальность"
            // optionFilterProp="children"
            // onSelect={onSelect}
            onChange={selectedValue}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {/* Для унифицирования value добавляем название. Т.к. много совпдающих значений */}
            {staffType === 'vmp'
              ? arrListVMP.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
              : arrListSMP.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
            }
          </Select>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Calculator