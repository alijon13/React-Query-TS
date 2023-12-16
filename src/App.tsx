import { Button, Typography } from '@material-tailwind/react'
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query"
import '../src/App.css'
import { useState } from 'react';




const App = () => {

  let api = 'http://localhost:3000/data';

  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, error, data } = useQuery({
    queryKey: ['todos', searchTerm],
    queryFn: () => fetch(`${api}?q=${searchTerm}`).then(response => response.json()) 
  });

  const [selectt, setSelectt] = useState('');

  const { data:data2 } = useQuery({
    queryKey: ['data', selectt],
    queryFn: () => fetch(`${api}?userId=${+selectt}`).then(response => response.json())
  });

   



  return (
    <main className='w-[95%]  m-auto pt-[20px]'>
      <div className="nav flex  gap-6">
        <div className='w-[85%]'>
          <Input onInput={(e) => setSearchTerm(e.target.value)} label="Поиск" />
        </div>
        <Button className='shadow-md' color="blue">создать сотрудника</Button>
      </div>

      <div className="fil grid grid-cols-3 gap-[15px] mt-[20px]">
        <Input className='shadow-md' color='blue' label="Логин" />
        <Input className='shadow-md' color='blue' label="Должность" />
        <Input className='shadow-md' color='blue' label="Роль" />

        <Select onChange={(value) => setSelectt(value)} value={selectt} className='shadow-md' color='blue' label="Филиал" >
          <Option value='1'>МОСКВА</Option>
          <Option value='2'>Санкт-Петербург</Option>
          <Option value='3'>Самара</Option>
          <Option value='4'>Новосибирск</Option>
          <Option value='5'>Краснодар</Option>
        </Select>



        <Select className='shadow-md' color='blue' label="ЦБО">
          <Option>Material Tailwind HTML</Option>
        </Select>
        <Select className='shadow-md' color='blue' label="Город">
          <Option>Material Tailwind HTML</Option>
        </Select>
      </div>

      <div className="btn-fil flex gap-[20px] mt-[20px]">
        <Button className='shadow-md' color='blue' fullWidth>поиск по фильтру</Button>
        <Button className='shadow-md' variant='outlined' color='blue' fullWidth>Сброситъ параметры поиска</Button>
      </div>

      <div className="listt mt-[50px]">
        {
          data2?.length !=0? (
            data2?.map((el)=> {
              return (
                <div className="mb-[50px]">
                  <Card className="">
                    <List className='ls'>
                      <div className="for-all grid grid-cols-3 pl-[50px] py-[40px]">
                        <div className="w-[40%]">
                          <Typography>ФИО</Typography>
                          <Typography>{el.title}</Typography>
                        </div>
                        <div className="w-[40%]">
                          <Typography>Должность</Typography>
                          <Typography>{el.body}</Typography>
                        </div>
                        <div className="w-[40%]">
                          <Typography>Роль</Typography>
                          <input className='border-[1px] border-[black] rounded-md outline-none  bg-[#f8f6f6] px-[10px] py-[3px]' type="text" />
                        </div>
  
                        <div className="w-[40%] mt-[50px]">
                          <Typography>Филиал/ЦБО</Typography>
                          <Typography>{el.userId == 1 ? "МОСКВА" : el.userId == 2 ? "Санкт-Петербург" : el.userId == 3 ? "Самара" : el.userId == 4 ? "Новосибирск" : el.userId == 5 ? "Краснодар" : "null"}</Typography>
                        </div>
                        <div className="w-[40%]  mt-[50px]">
                          <Typography>Логин</Typography>
                          <Typography>HEllo</Typography>
                        </div>
                        <div className="w-[40%]  mt-[50px]">
                          <Button className='w-[250px] mt-[10px]' color="blue">открыть</Button>
                        </div>
                      </div>
                    </List>
                  </Card>
                </div>
              )
            })
          ) : (
            data?.map((e) => {
              return (
                <div className="mb-[50px]">
                  <Card className="">
                    <List className='ls'>
                      <div className="for-all grid grid-cols-3 pl-[50px] py-[40px]">
                        <div className="w-[40%]">
                          <Typography>ФИО</Typography>
                          <Typography>{e.title}</Typography>
                        </div>
                        <div className="w-[40%]">
                          <Typography>Должность</Typography>
                          <Typography>{e.body}</Typography>
                        </div>
                        <div className="w-[40%]">
                          <Typography>Роль</Typography>
                          <input className='border-[1px] border-[black] rounded-md outline-none  bg-[#f8f6f6] px-[10px] py-[3px]' type="text" />
                        </div>
  
                        <div className="w-[40%] mt-[50px]">
                          <Typography>Филиал/ЦБО</Typography>
                          <Typography>{e.userId == 1 ? "МОСКВА" : e.userId == 2 ? "Санкт-Петербург" : e.userId == 3 ? "Самара" : e.userId == 4 ? "Новосибирск" : e.userId == 5 ? "Краснодар" : null}</Typography>
                        </div>
                        <div className="w-[40%]  mt-[50px]">
                          <Typography>Логин</Typography>
                          <Typography>HEllo</Typography>
                        </div>
                        <div className="w-[40%]  mt-[50px]">
                          <Button className='w-[250px] mt-[10px]' color="blue">открыть</Button>
                        </div>
                      </div>
                    </List>
                  </Card>
                </div>
              )
            })
          )
        }
      </div>

    </main>
  );
}

export default App;








