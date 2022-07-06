import React from 'react'

const tabCalculator = () => {
  return ( <div>yes</div>
    // <TabPane tab="Специальности, доступные с Вашим образованием" key="1d">
    //   <Radio.Group onChange={onChange} value={staffType}>
    //     <Radio value={'vmp'}>Высший медицинский персонал</Radio>
    //     <Radio value={'smp'}>Средний медицинский персонал</Radio>
    //   </Radio.Group>
    //   <Select
    //     showSearch
    //     style={{
    //       width: 200
    //     }}
    //     placeholder="Ваша специальность"
    //     optionFilterProp="children"
    //     // onSelect={onSelect}
    //     onChange={selectedValue}
    //     filterOption={(input, option) =>
    //       (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
    //     }
    //   >
    //     {/* Для унифицирования value добавляем название. Т.к. много совпдающих значений */}
    //     {
    //       staffType === 'vmp'
    //         ? memoizedAvailableSpecialtiesObj.arrSpecialtiesVmp.map((item:typeSpec, index:number) => 
    //           <Option value={String(item.name + ',' + item.value)} key={index}>{item.name}</Option>)
    //         : memoizedAvailableSpecialtiesObj.arrSpecialtiesSmp.map((item:typeSpec, index:number) => 
    //           <Option value={String(item.name + ',' + item.value)} key={index}>{item.name}</Option>)
    //     }
    //   </Select>
    //   {listOfCourses.map((course:typeCourse, index:number) => 
    //     <a href={course.url} key={index}>{course.name}</a>)}
    // </TabPane>
  )
}

export default tabCalculator