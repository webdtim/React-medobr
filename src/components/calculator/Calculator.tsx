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

  // useEffect(() =>{
  //   console.log(staffType)
  // },[staffType])

  const createArrSpecialties = (arrSpecialties: typeSpec[]) => {
    // const newArray: typeSpec[] = []

    // return newArray
    return arrSpecialties
  }
    
  let initDone: boolean = false
  let availableSpecialtiesObj: typeAvailableSpecialties = {
    arrSpecialtiesSmp: [],
    arrSpecialtiesVmp: []
  }

  useEffect(() =>{
    // availableSpecialtiesObj = {
      availableSpecialtiesObj.arrSpecialtiesSmp = createArrSpecialties(arrListSMP)
      availableSpecialtiesObj.arrSpecialtiesVmp = createArrSpecialties(arrListVMP)
    // }
    initDone = true
  },[])



  // function sorting(arr: [], name: string) {
  //   return arr.sort(function(a, b) {
  //     if (a === undefined) console.log(a);
  //     if (name) {
  //       var x = a[name] === undefined ? a[name] : a[name].toLowerCase();
  //       var y = b[name] === undefined ? b[name] : b[name].toLowerCase();
  //     } else {
  //       var x = a === undefined ? a : a.toLowerCase();
  //       var y = b === undefined ? b : b.toLowerCase();
  //     }
  //     return x < y ? -1 : x > y ? 1 : 0;
  //   });
  // }
  
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
            // optionFilterProp="children"
            // onSelect={onSelect}
            onChange={selectedValue}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {/* Для унифицирования value добавляем название. Т.к. много совпдающих значений */}
            {
            initDone && (
              staffType === 'vmp'
                ? availableSpecialtiesObj?.arrSpecialtiesVmp.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
                : availableSpecialtiesObj?.arrSpecialtiesSmp.map((item, index) => <Option value={String(item?.name + ',' + item?.value)} key={index}>{item?.name}</Option>)
              )
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