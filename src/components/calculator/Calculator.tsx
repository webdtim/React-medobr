import React from 'react'
import { Select, Checkbox, Tabs } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import smpData from './smp'
import vmpData from './vmp'
// import smpURL from './smp_url.json'
// import vmpURL from './vmp_url.json'
import './calculator.scss'
const { TabPane } = Tabs
const { Option } = Select

const Calculator = () => {

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const selectSelect = (value: string) => {
    console.log('selected option', value)
  }

  const {arrListSMP, smpUrl} = smpData()
  const {arrListVMP, vmpUrl} = vmpData()
  // console.log(smpURL)
  // console.log(vmpURL)
  const onSelect = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container">
      <div className="prof-calc__info">
        <div className="prof-calc__title">Узнайте на какую профессию Вы можете переучиться</div>
      </div>
      <Tabs type="card">
        <TabPane tab="Специальности, доступные с Вашим образованием" key="1d">
          <Checkbox onChange={onChange}>Высший медицинский персонал</Checkbox>
          <Checkbox onChange={onChange}>Средний медицинский персонал</Checkbox>
          <Select
            showSearch
            style={{
              width: 200
            }}
            placeholder="Ваша специальность"
            optionFilterProp="children"
            onChange={onSelect}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {arrListSMP.map((item, index) => <Option value={item?.value} key={index}>{item?.name}</Option>)}
          </Select>
        </TabPane>
        <TabPane tab="Образовательные требования к специальности" key="2d">
          Образовательные требования к специальности
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Calculator