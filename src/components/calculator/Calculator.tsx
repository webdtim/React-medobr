import React, { useState, useMemo } from 'react'
import { Select, Radio, Tabs } from 'antd'
import type { RadioChangeEvent } from 'antd';
import smpData from './smp'
import vmpData from './vmp'
import './calculator.scss'
const { TabPane } = Tabs
const { Option } = Select
const {arrListSMP, smpUrl} = smpData()
const {arrListVMP, vmpUrl} = vmpData()

interface typeSpec {
  name: string;
  value: string[];
  subvalue?: string[]
}

interface typeCourse {
  name: string;
  url?: string;
}

interface typeAvailableSpecialties {
  arrSpecialtiesSmp: typeSpec[];
  arrSpecialtiesVmp: typeSpec[];
}

const Calculator: React.FC = () => {

  const [staffType, setStaffType] = useState<'smp' | 'vmp'>('vmp');
  const [listOfCourses, setListOfCourses] = useState<typeCourse[]>([])

  const onChange = (e: RadioChangeEvent) => {
    setStaffType(e.target.value);
  };

  const createArrSpecialties = (arrSpecialties: typeSpec[]) => {
    const newArrSpecList: typeSpec[] = []
    const specListObj: {[key: string]: typeSpec} = {}

    arrSpecialties.forEach( elem => 
      elem.value.forEach(specName => specListObj[specName]?
        specListObj[specName].value.push(elem.name) 
        : specListObj[specName] = {name: specName, value: [elem.name]}
      )
    )
    
    for(let spec in specListObj) {
      newArrSpecList.push(specListObj[spec])
    }
    newArrSpecList.sort((a: typeSpec, b: typeSpec) => a.name > b.name ? 1 : -1)

    return newArrSpecList
  }
  
  const memoizedAvailableSpecialtiesObj = useMemo((): typeAvailableSpecialties => {

    const availableSpecialtiesObj: typeAvailableSpecialties = {
      arrSpecialtiesSmp: createArrSpecialties(arrListSMP),
      arrSpecialtiesVmp: createArrSpecialties(arrListVMP)
    }

    return availableSpecialtiesObj
  }, [])

  const setAvailableSpecialties = (arr: string[]): void => {
    const availableSpecialties: typeCourse[] = []
    
    arr.forEach( (name:string) => {
      const urlList = staffType === 'vmp' ? vmpUrl : smpUrl
      const course: typeCourse | undefined = urlList.find((el: typeCourse) => name === el.name)
      course && availableSpecialties.push(course)
    })

    setListOfCourses(availableSpecialties)
  }

  const selectedValue = (value: string): void => 
    setAvailableSpecialties(value.split(',').slice(1))

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
            style={{
              width: 200
            }}
            placeholder="Ваша специальность"
            optionFilterProp="children"
            // onSelect={onSelect}
            onChange={selectedValue}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {/* Для унифицирования value добавляем название. Т.к. много совпдающих значений */}
            {
              staffType === 'vmp'
                ? memoizedAvailableSpecialtiesObj.arrSpecialtiesVmp.map((item:typeSpec, index:number) => 
                  <Option value={String(item.name + ',' + item.value)} key={index}>{item.name}</Option>)
                : memoizedAvailableSpecialtiesObj.arrSpecialtiesSmp.map((item:typeSpec, index:number) => 
                  <Option value={String(item.name + ',' + item.value)} key={index}>{item.name}</Option>)
            }
          </Select>
          {listOfCourses.map((course:typeCourse, index:number) => 
            <a href={course.url} key={index}>{course.name}</a>)}
        </TabPane>
        <TabPane tab="Образовательные требования к специальности" key="2d">
          <Radio.Group onChange={onChange} value={staffType}>
            <Radio value={'vmp'}>Высший медицинский персонал</Radio>
            <Radio value={'smp'}>Средний медицинский персонал</Radio>
          </Radio.Group>
          <Select
            showSearch
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
              ? arrListVMP.map((item:typeSpec, index:number) => 
                <Option value={String(item.name + ',' + item.value)} key={index}>{item.name}</Option>)
              : arrListSMP.map((item:typeSpec, index:number) => 
                <Option value={String(item.name + ',' + item.value)} key={index}>{item.name}</Option>)
            }
          </Select>
          {listOfCourses.map((course:typeCourse, index:number) => 
            <a href={course.url} key={index}>{course.name}</a>)}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Calculator