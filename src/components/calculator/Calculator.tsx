import React, { useState, useEffect, useMemo } from 'react'
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

interface typeAvailableSpecialties {
  arrSpecialtiesSmp: typeSpec[];
  arrSpecialtiesVmp: typeSpec[];
}

const Calculator: React.FC = () => {

  const [staffType, setStaffType] = useState('vmp');

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
    console.log(specListObj)
    for(let spec in specListObj) {
      newArrSpecList.push(specListObj[spec])
    }

    return newArrSpecList
  }
  
  const memoizedAvailableSpecialtiesObj = useMemo((): typeAvailableSpecialties => {

    const availableSpecialtiesObj: typeAvailableSpecialties = {
      arrSpecialtiesSmp: createArrSpecialties(arrListSMP),
      arrSpecialtiesVmp: createArrSpecialties(arrListVMP)
    }

    return availableSpecialtiesObj
  }, [])

  
  // function setNewArrList(arr: []) {
  //   let namesArr = [];
  //   const listObj: [] = [];
  //   (function() {
  //     let namesArrSup: [] = [];
  //     for (let el of arr) {
  //       namesArrSup: [] = namesArrSup.concat(el?.value);
  //     }
  //     (function() {
  //       let result: [] = [];
  
  //       for (let str of namesArrSup) {
  //         if (!result.includes(str) && typeof str === 'string') {
  //           result.push(str);
  //         }
  //       }
  //       namesArr = result;
  
  //     })();
  //   })();
  //   namesArr.map((i) => {
  
  //     const program: [] = [];
  //     for (let a of arr) {
  //       const arrVal: string = a.value;
  //       if (arrVal !== undefined) {
  //         arrVal.map(e => {
  //           if (e == i) program.push(a.name);
  //         });
  //       }
  //     }
  //     listObj.push({
  //       name: i,
  //       value: program
  //     });
  //   });
  //   return listObj;
  // }
  
  // function sortFunc(arr: [], name: string) {
  //   return arr.sort(function(a, b) {
  //     var x = a[name].toLowerCase();
  //     var y = b[name].toLowerCase();
  //     return x < y ? -1 : x > y ? 1 : 0;
  //   });
  // }

  const showAvailableSpecialties = () => {

  }

  const selectedValue = (valueObj: { value: string; label: React.ReactNode }) => {
    const {value, label} = valueObj
    console.log(value.split(',').slice(1));
    console.log(label);
    // console.log({
    //   smp: sortFunc(setNewArrList(arrListSMP),label),
    //   vmp: sortFunc(setNewArrList(arrListVMP),label),
    //   smpOr: sortFunc(arrListSMP,label),
    //   vmpOr: sortFunc(arrListVMP,label)
    // })
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
                ? memoizedAvailableSpecialtiesObj.arrSpecialtiesVmp.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
                : memoizedAvailableSpecialtiesObj.arrSpecialtiesSmp.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
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